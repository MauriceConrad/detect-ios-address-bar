/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["detect-ios-address-bar"] = factory();
	else
		root["detect-ios-address-bar"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iOSUIOverlayDetector)\n/* harmony export */ });\n/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-browser */ \"./node_modules/detect-browser/es/index.js\");\n/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-emitter */ \"./node_modules/tiny-emitter/index.js\");\n/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_situations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/situations.js */ \"./src/model/situations.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar iOSUIOverlayDetector = /*#__PURE__*/function (_Emitter) {\n  _inherits(iOSUIOverlayDetector, _Emitter);\n\n  var _super = _createSuper(iOSUIOverlayDetector);\n\n  function iOSUIOverlayDetector() {\n    var _this;\n\n    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n\n    _classCallCheck(this, iOSUIOverlayDetector);\n\n    _this = _super.call(this);\n    _this.__behaviourDedtected = false;\n    _this.__static_mode = null;\n    _this.browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_2__.detect)(); //console.log(window.screen.height - window.innerHeight);\n\n    _this.checker = setInterval(function () {\n      _this.applyMode();\n    }, interval);\n\n    _this.applyMode = function () {\n      if (_this.__static_mode != _this.mode) {\n        _this.updateStaticMode();\n\n        _this.__behaviourDedtected = true;\n\n        _this.emit('update', _this.mode);\n      }\n    };\n\n    window.addEventListener('resize', _this.applyMode);\n\n    _this.applyMode();\n\n    return _this;\n  }\n\n  _createClass(iOSUIOverlayDetector, [{\n    key: \"updateStaticMode\",\n    value: function updateStaticMode() {\n      this.__static_mode = this.mode;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      window.removeEventListener(this.applyMode);\n      window.clearInterval(this.checker);\n    }\n  }, {\n    key: \"mode\",\n    get: function get() {\n      if (this.isTargetDevice && this.situation && !window.navigator.standalone) {\n        return this.situation.mode;\n      } else if (this.__behaviourDedtected) {\n        return this.__static_mode;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: \"situation\",\n    get: function get() {\n      var _iterator = _createForOfIteratorHelper(_model_situations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _step$value = _step.value,\n              cases = _step$value.cases,\n              models = _step$value.models;\n\n          var _iterator2 = _createForOfIteratorHelper(cases),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var _case = _step2.value;\n\n              if (_case.detect()) {\n                return {\n                  models: models,\n                  mode: _case.mode\n                };\n              }\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return null;\n    }\n  }, {\n    key: \"browserVersion\",\n    get: function get() {\n      return this.browser.version.split('.').map(Number);\n    }\n  }, {\n    key: \"isTargetDevice\",\n    get: function get() {\n      return this.browser.name == 'ios' && this.browser.os == 'iOS' && this.browserVersion[0] >= 15;\n    }\n  }]);\n\n  return iOSUIOverlayDetector;\n}((tiny_emitter__WEBPACK_IMPORTED_MODULE_0___default()));\n\n\n\n//# sourceURL=webpack://detect-ios-address-bar/./src/main.js?");

/***/ }),

/***/ "./src/model/situations.js":
/*!*********************************!*\
  !*** ./src/model/situations.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  models: ['iPhone 8', 'iPhone 8 Plus', 'iPhone SE', 'iPod Touch - 7th generation'],\n  cases: [{\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 40;\n    },\n    mode: 'collapsed'\n  }, {\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 20;\n    },\n    mode: 'overlayed'\n  }]\n}, {\n  models: ['iPhone 11'],\n  cases: [{\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 100;\n    },\n    mode: 'collapsed'\n  }, {\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 48;\n    },\n    mode: 'overlayed'\n  }]\n}, {\n  models: ['iPhone 11 Pro', 'iPhone 11 Pro Max'],\n  cases: [{\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 96;\n    },\n    mode: 'collapsed'\n  }, {\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 44;\n    },\n    mode: 'overlayed'\n  }]\n}, {\n  models: ['iPhone 12 mini'],\n  cases: [{\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 102;\n    },\n    mode: 'collapsed'\n  }, {\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 50;\n    },\n    mode: 'overlayed'\n  }]\n}, {\n  models: ['iPhone 12', 'iPhone 12 Pro Max'],\n  cases: [{\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 99;\n    },\n    mode: 'collapsed'\n  }, {\n    detect: function detect() {\n      return window.screen.height - window.innerHeight == 47;\n    },\n    mode: 'overlayed'\n  }]\n}]);\n\n//# sourceURL=webpack://detect-ios-address-bar/./src/model/situations.js?");

/***/ }),

/***/ "./node_modules/detect-browser/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/detect-browser/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowserInfo\": () => (/* binding */ BrowserInfo),\n/* harmony export */   \"NodeInfo\": () => (/* binding */ NodeInfo),\n/* harmony export */   \"SearchBotDeviceInfo\": () => (/* binding */ SearchBotDeviceInfo),\n/* harmony export */   \"BotInfo\": () => (/* binding */ BotInfo),\n/* harmony export */   \"ReactNativeInfo\": () => (/* binding */ ReactNativeInfo),\n/* harmony export */   \"detect\": () => (/* binding */ detect),\n/* harmony export */   \"browserName\": () => (/* binding */ browserName),\n/* harmony export */   \"parseUserAgent\": () => (/* binding */ parseUserAgent),\n/* harmony export */   \"detectOS\": () => (/* binding */ detectOS),\n/* harmony export */   \"getNodeVersion\": () => (/* binding */ getNodeVersion)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar BrowserInfo = /** @class */ (function () {\n    function BrowserInfo(name, version, os) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.type = 'browser';\n    }\n    return BrowserInfo;\n}());\n\nvar NodeInfo = /** @class */ (function () {\n    function NodeInfo(version) {\n        this.version = version;\n        this.type = 'node';\n        this.name = 'node';\n        this.os = process.platform;\n    }\n    return NodeInfo;\n}());\n\nvar SearchBotDeviceInfo = /** @class */ (function () {\n    function SearchBotDeviceInfo(name, version, os, bot) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.bot = bot;\n        this.type = 'bot-device';\n    }\n    return SearchBotDeviceInfo;\n}());\n\nvar BotInfo = /** @class */ (function () {\n    function BotInfo() {\n        this.type = 'bot';\n        this.bot = true; // NOTE: deprecated test name instead\n        this.name = 'bot';\n        this.version = null;\n        this.os = null;\n    }\n    return BotInfo;\n}());\n\nvar ReactNativeInfo = /** @class */ (function () {\n    function ReactNativeInfo() {\n        this.type = 'react-native';\n        this.name = 'react-native';\n        this.version = null;\n        this.os = null;\n    }\n    return ReactNativeInfo;\n}());\n\n// tslint:disable-next-line:max-line-length\nvar SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;\nvar SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\\ Jeeves\\/Teoma|ia_archiver)/;\nvar REQUIRED_VERSION_PARTS = 3;\nvar userAgentRules = [\n    ['aol', /AOLShield\\/([0-9\\._]+)/],\n    ['edge', /Edge\\/([0-9\\._]+)/],\n    ['edge-ios', /EdgiOS\\/([0-9\\._]+)/],\n    ['yandexbrowser', /YaBrowser\\/([0-9\\._]+)/],\n    ['kakaotalk', /KAKAOTALK\\s([0-9\\.]+)/],\n    ['samsung', /SamsungBrowser\\/([0-9\\.]+)/],\n    ['silk', /\\bSilk\\/([0-9._-]+)\\b/],\n    ['miui', /MiuiBrowser\\/([0-9\\.]+)$/],\n    ['beaker', /BeakerBrowser\\/([0-9\\.]+)/],\n    ['edge-chromium', /EdgA?\\/([0-9\\.]+)/],\n    [\n        'chromium-webview',\n        /(?!Chrom.*OPR)wv\\).*Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/,\n    ],\n    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/],\n    ['phantomjs', /PhantomJS\\/([0-9\\.]+)(:?\\s|$)/],\n    ['crios', /CriOS\\/([0-9\\.]+)(:?\\s|$)/],\n    ['firefox', /Firefox\\/([0-9\\.]+)(?:\\s|$)/],\n    ['fxios', /FxiOS\\/([0-9\\.]+)/],\n    ['opera-mini', /Opera Mini.*Version\\/([0-9\\.]+)/],\n    ['opera', /Opera\\/([0-9\\.]+)(?:\\s|$)/],\n    ['opera', /OPR\\/([0-9\\.]+)(:?\\s|$)/],\n    ['ie', /Trident\\/7\\.0.*rv\\:([0-9\\.]+).*\\).*Gecko$/],\n    ['ie', /MSIE\\s([0-9\\.]+);.*Trident\\/[4-7].0/],\n    ['ie', /MSIE\\s(7\\.0)/],\n    ['bb10', /BB10;\\sTouch.*Version\\/([0-9\\.]+)/],\n    ['android', /Android\\s([0-9\\.]+)/],\n    ['ios', /Version\\/([0-9\\._]+).*Mobile.*Safari.*/],\n    ['safari', /Version\\/([0-9\\._]+).*Safari/],\n    ['facebook', /FB[AS]V\\/([0-9\\.]+)/],\n    ['instagram', /Instagram\\s([0-9\\.]+)/],\n    ['ios-webview', /AppleWebKit\\/([0-9\\.]+).*Mobile/],\n    ['ios-webview', /AppleWebKit\\/([0-9\\.]+).*Gecko\\)$/],\n    ['curl', /^curl\\/([0-9\\.]+)$/],\n    ['searchbot', SEARCHBOX_UA_REGEX],\n];\nvar operatingSystemRules = [\n    ['iOS', /iP(hone|od|ad)/],\n    ['Android OS', /Android/],\n    ['BlackBerry OS', /BlackBerry|BB10/],\n    ['Windows Mobile', /IEMobile/],\n    ['Amazon OS', /Kindle/],\n    ['Windows 3.11', /Win16/],\n    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],\n    ['Windows 98', /(Windows 98)|(Win98)/],\n    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],\n    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],\n    ['Windows Server 2003', /(Windows NT 5.2)/],\n    ['Windows Vista', /(Windows NT 6.0)/],\n    ['Windows 7', /(Windows NT 6.1)/],\n    ['Windows 8', /(Windows NT 6.2)/],\n    ['Windows 8.1', /(Windows NT 6.3)/],\n    ['Windows 10', /(Windows NT 10.0)/],\n    ['Windows ME', /Windows ME/],\n    ['Open BSD', /OpenBSD/],\n    ['Sun OS', /SunOS/],\n    ['Chrome OS', /CrOS/],\n    ['Linux', /(Linux)|(X11)/],\n    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],\n    ['QNX', /QNX/],\n    ['BeOS', /BeOS/],\n    ['OS/2', /OS\\/2/],\n];\nfunction detect(userAgent) {\n    if (!!userAgent) {\n        return parseUserAgent(userAgent);\n    }\n    if (typeof document === 'undefined' &&\n        typeof navigator !== 'undefined' &&\n        navigator.product === 'ReactNative') {\n        return new ReactNativeInfo();\n    }\n    if (typeof navigator !== 'undefined') {\n        return parseUserAgent(navigator.userAgent);\n    }\n    return getNodeVersion();\n}\nfunction matchUserAgent(ua) {\n    // opted for using reduce here rather than Array#first with a regex.test call\n    // this is primarily because using the reduce we only perform the regex\n    // execution once rather than once for the test and for the exec again below\n    // probably something that needs to be benchmarked though\n    return (ua !== '' &&\n        userAgentRules.reduce(function (matched, _a) {\n            var browser = _a[0], regex = _a[1];\n            if (matched) {\n                return matched;\n            }\n            var uaMatch = regex.exec(ua);\n            return !!uaMatch && [browser, uaMatch];\n        }, false));\n}\nfunction browserName(ua) {\n    var data = matchUserAgent(ua);\n    return data ? data[0] : null;\n}\nfunction parseUserAgent(ua) {\n    var matchedRule = matchUserAgent(ua);\n    if (!matchedRule) {\n        return null;\n    }\n    var name = matchedRule[0], match = matchedRule[1];\n    if (name === 'searchbot') {\n        return new BotInfo();\n    }\n    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)\n    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);\n    if (versionParts) {\n        if (versionParts.length < REQUIRED_VERSION_PARTS) {\n            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);\n        }\n    }\n    else {\n        versionParts = [];\n    }\n    var version = versionParts.join('.');\n    var os = detectOS(ua);\n    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);\n    if (searchBotMatch && searchBotMatch[1]) {\n        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);\n    }\n    return new BrowserInfo(name, version, os);\n}\nfunction detectOS(ua) {\n    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {\n        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];\n        var match = regex.exec(ua);\n        if (match) {\n            return os;\n        }\n    }\n    return null;\n}\nfunction getNodeVersion() {\n    var isNode = typeof process !== 'undefined' && process.version;\n    return isNode ? new NodeInfo(process.version.slice(1)) : null;\n}\nfunction createVersionParts(count) {\n    var output = [];\n    for (var ii = 0; ii < count; ii++) {\n        output.push('0');\n    }\n    return output;\n}\n\n\n//# sourceURL=webpack://detect-ios-address-bar/./node_modules/detect-browser/es/index.js?");

/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("function E () {\n  // Keep this empty so it's easier to inherit from\n  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)\n}\n\nE.prototype = {\n  on: function (name, callback, ctx) {\n    var e = this.e || (this.e = {});\n\n    (e[name] || (e[name] = [])).push({\n      fn: callback,\n      ctx: ctx\n    });\n\n    return this;\n  },\n\n  once: function (name, callback, ctx) {\n    var self = this;\n    function listener () {\n      self.off(name, listener);\n      callback.apply(ctx, arguments);\n    };\n\n    listener._ = callback\n    return this.on(name, listener, ctx);\n  },\n\n  emit: function (name) {\n    var data = [].slice.call(arguments, 1);\n    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();\n    var i = 0;\n    var len = evtArr.length;\n\n    for (i; i < len; i++) {\n      evtArr[i].fn.apply(evtArr[i].ctx, data);\n    }\n\n    return this;\n  },\n\n  off: function (name, callback) {\n    var e = this.e || (this.e = {});\n    var evts = e[name];\n    var liveEvents = [];\n\n    if (evts && callback) {\n      for (var i = 0, len = evts.length; i < len; i++) {\n        if (evts[i].fn !== callback && evts[i].fn._ !== callback)\n          liveEvents.push(evts[i]);\n      }\n    }\n\n    // Remove event from queue to prevent memory leak\n    // Suggested by https://github.com/lazd\n    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910\n\n    (liveEvents.length)\n      ? e[name] = liveEvents\n      : delete e[name];\n\n    return this;\n  }\n};\n\nmodule.exports = E;\nmodule.exports.TinyEmitter = E;\n\n\n//# sourceURL=webpack://detect-ios-address-bar/./node_modules/tiny-emitter/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});