webpackHotUpdate("static/development/pages/index.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// const mode = "se"
var mode = "a";
var all = {
  show: {
    cmdf: true,
    topics: mode === "a",
    headline: true,
    other: true,
    location: true
  },
  info: {
    location: "united states",
    headline: {
      se: "Software Engineer",
      a: "Software/Research/Art"
    }[mode],
    website: "luminghao.com",
    email: "luming000hao@gmail.com",
    phone: "610-297-2578",
    summary: ""
  },
  sections: {
    se: [// require("./sections/grants.js").default,
    // require("./sections/talks.js").default,
    // require("./sections/texts.js").default,
    __webpack_require__(/*! ./sections/employment-fulltime.js */ "./sections/employment-fulltime.js")["default"], __webpack_require__(/*! ./sections/employment-parttime.js */ "./sections/employment-parttime.js")["default"], __webpack_require__(/*! ./sections/projects.js */ "./sections/projects.js")["default"], __webpack_require__(/*! ./sections/education.js */ "./sections/education.js")["default"]],
    a: [__webpack_require__(/*! ./sections/projects.js */ "./sections/projects.js")["default"], __webpack_require__(/*! ./sections/grants.js */ "./sections/grants.js")["default"], __webpack_require__(/*! ./sections/talks.js */ "./sections/talks.js")["default"], __webpack_require__(/*! ./sections/texts.js */ "./sections/texts.js")["default"], __webpack_require__(/*! ./sections/employment-parttime.js */ "./sections/employment-parttime.js")["default"], __webpack_require__(/*! ./sections/employment-fulltime.js */ "./sections/employment-fulltime.js")["default"], __webpack_require__(/*! ./sections/education.js */ "./sections/education.js")["default"]]
  }[mode]
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, all, {
  other: {
    title: "other (volunteering/hobbies)",
    items: [["Volunteer for iFixit Medical Equipment Service Manual Archive Project", "https://www.wired.com/story/right-to-repair-medical-equipment-ifixit/"], ["Student Member of NYU Office of Sustainability Green Grant Committee", "https://www.nyu.edu/life/sustainability/get-involved/green-grants.html"], ["clojure (website and blog)", "https:/luminghao.com/blog"], ["handmade solar", "https://luminghao.com/2019-12-02-solarcells/"], ["piano tuning", "http://luminghao.com/2020-04-02-pianotune-withapp/"], ["cnc", "http://luminghao.com/blog/#subtract"], ["harp", "https://luminghao.com/liao/"]]
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.53a776fe646513bce4a1.hot-update.js.map