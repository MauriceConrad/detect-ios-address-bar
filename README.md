# iOS Safari Detect Address Bar Overlay

## The Problem

With iOS 15, Apple updated *Mobile Safari* to show the address bar either as a small area on the bottom or, if Safari recognizes some *navigation related user input*, as an overlay over the whole web page. This becomes a problem when web app's using a mobile layout that uses the bottom of your screen as a tab bar for example. That's because a *navigation related user input* is not just triggered by clicking on the small address bar area on the bottom (which seems to be a real navigation intention) but also when the user scrolls up.

![Problem Demo](https://github.com/MauriceConrad/detect-ios-address-bar/blob/master/repo_ressources/screenshots_3.png?raw=true)

## Usage

```javascript
import SafariAddressBarDetector from 'detect-ios-address-bar'

// Initialize instance
const safariAddressBar = new SafariAddressBarDetector();

// Listening for update events
safariAddressBar.on('update', mode => {
  console.log(mode); // 'collapsed' or 'overlayed'
});

// Get mode immediately
console.log(safariAddressBar.mode); // 'collapsed' or 'overlayed'

```

### Destroy

Because the instance creates some global events listeners and intervals, you may like to destroy them in case of not using the instance any more.

```javascript
safariAddressBar.destroy();
```

## Modes

Currently (September of 2021) there are two modes we want to recognize on iPhones (and theoretically the iPod Touch 7th) running Mobile Safari on iOS >= 15, there are just two modes:

- `collapsed`: When the address bar is this small hint area on the bottom
- `overlayed`: When the address overlays the bottom of the screen while the web page viewport lies under the address bar
