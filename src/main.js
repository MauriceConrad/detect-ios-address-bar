import { detect } from 'detect-browser'
import Emitter from 'tiny-emitter'

import situations from './model/situations.js'

export default class iOSUIOverlayDetector extends Emitter {
  constructor(interval = 50) {
    super();
    this.__static_mode = null;
    this.browser = detect();

    //console.log(window.screen.height - window.innerHeight);

    this.checker = setInterval(() => {
      this.applyMode();
    }, interval);

    this.applyMode = () => {
      if (this.__static_mode != this.mode) {
        this.updateStaticMode();
        this.emit('update', this.mode);
      }
    }
    window.addEventListener('resize', this.applyMode);

    this.applyMode();
  }
  updateStaticMode() {
    this.__static_mode = this.mode;
  }
  destroy() {
    window.removeEventListener(this.applyMode);
    window.clearInterval(this.checker);
  }
  get mode() {
    if (this.isTargetDevice && this.situation && !window.navigator.standalone) {
      return this.situation.mode;
    }
    else {
      return null;
    }
  }
  get situation() {
    for (let { cases, models } of situations) {
      for (let _case of cases) {
        if (_case.detect()) {
          return {
            models,
            mode: _case.mode
          };
        }
      }
    }
    return null;
  }
  get browserVersion() {
    return this.browser.version.split('.').map(Number);
  }
  get isTargetDevice() {
    return this.browser.name == 'ios'
            && this.browser.os == 'iOS'
            && this.browserVersion[0] >= 15
  }
}
