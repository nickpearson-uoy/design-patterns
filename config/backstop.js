var glob = require('glob');

// Viewports are based on our most-used breakpoints
// tiny: <30em (480px), small: <40em (640px), medium: <52.5em (840px), large:<64em (1024px), huge: <77.5em (1240px), hugeplus: >77.5em
// and on our most-used screen resolutions (from Analytics, 5/9/16 to 5/10/16)
//
// 1. 1366x768 (hugeplus)
// 4. 375x667 (tiny)
// 9. 768x1024 (medium)
// 13. 1024x768 (huge)
// 28. 480x800 (small)
// 72. 962x601 (large)
var viewports = [
  {
    "name": "tiny",
    "width": 375,
    "height": 667
  },
  // {
  //   "name": "small",
  //   "width": 480,
  //   "height": 800
  // },
  {
    "name": "medium",
    "width": 768,
    "height": 1024
  },
  // {
  //   "name": "large",
  //   "width": 962,
  //   "height": 601
  // },
  // {
  //   "name": "huge",
  //   "width": 1024,
  //   "height": 768
  // },
  {
    "name": "hugeplus",
    "width": 1366,
    "height": 768
  }
];
// Hide BrowserSync notice, KIS widget and videos
var hideSelectors = [
  "#__bs_notify__",
  ".c-panel--kis-widget__content",
  ".c-video"
];
// Take out markup samples
var removeSelectors = [
  ".language-markup"
];
// Just get #Main-Content
var selectors = [
  "#Main-Content"
];
var scenariosArray = [];
var htmlFiles = glob.sync("dev/@(layout|css-components)/*.html");

// console.info(htmlFiles.length+' files found!');

// Loop through all *.html pages in /dev and push to scenariosArray
htmlFiles.forEach(function(file, i) {
  var filename = file.substr(3);
  scenariosArray.push({
    "label": filename,
    "url": "http://localhost:1723"+filename,
    "hideSelectors": hideSelectors,
    "removeSelectors": removeSelectors,
    "selectors": selectors
  });
});

module.exports = {
  "id": "uoy_design_patterns",
  "viewports": viewports,
  "scenarios": scenariosArray,
  "paths": {
    "bitmaps_reference": "src/backstop/reference",
    "bitmaps_test": "src/backstop/test",
    "casper_scripts": "src/backstop/casper_scripts",
    "html_report": "src/backstop/html_report",
    "ci_report": "src/backstop/ci_report"
  },
  "casperFlags": [],
  "engine": "phantomjs",
  "report": ["browser"],
  "debug": false
};