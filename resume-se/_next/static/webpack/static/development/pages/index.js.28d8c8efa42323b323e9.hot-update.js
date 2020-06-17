webpackHotUpdate("static/development/pages/index.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

// const mode = "se"
var mode = "se";
/* harmony default export */ __webpack_exports__["default"] = ({
  show: {
    cmdf: true,
    topics: mode === "a",
    headline: true,
    other: true,
    location: true,
    summary: mode === "se"
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
    summary: {
      se: function se(agg) {
        return "Bachelor's in Computer Science + Music Theory. Then, 4.5 years full-time full-stack software engineering experience. Then, master's in Interactive Telecommunications (Design + Technology). ".concat(agg.cmdf.map(function (_ref) {
          var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
              techWord = _ref2[0],
              months = _ref2[1];

          return "".concat(techWord, ": ").concat(months, "mo");
        }).join(", "));
      }
    }[mode]
  },
  sections: {
    se: [// require("./sections/grants.js").default,
    // require("./sections/talks.js").default,
    // require("./sections/texts.js").default,
    __webpack_require__(/*! ./sections/employment-fulltime.js */ "./sections/employment-fulltime.js")["default"], __webpack_require__(/*! ./sections/employment-parttime.js */ "./sections/employment-parttime.js")["default"], __webpack_require__(/*! ./sections/projects.js */ "./sections/projects.js")["default"], __webpack_require__(/*! ./sections/education.js */ "./sections/education.js")["default"]],
    a: [__webpack_require__(/*! ./sections/projects.js */ "./sections/projects.js")["default"], __webpack_require__(/*! ./sections/grants.js */ "./sections/grants.js")["default"], __webpack_require__(/*! ./sections/talks.js */ "./sections/talks.js")["default"], __webpack_require__(/*! ./sections/texts.js */ "./sections/texts.js")["default"], __webpack_require__(/*! ./sections/employment-parttime.js */ "./sections/employment-parttime.js")["default"], __webpack_require__(/*! ./sections/employment-fulltime.js */ "./sections/employment-fulltime.js")["default"], __webpack_require__(/*! ./sections/education.js */ "./sections/education.js")["default"]]
  }[mode],
  other: {
    title: "other (volunteering/hobbies)",
    items: [["Volunteer for iFixit Medical Equipment Service Manual Archive Project", "https://www.wired.com/story/right-to-repair-medical-equipment-ifixit/"], ["Student Member of NYU Office of Sustainability Green Grant Committee", "https://www.nyu.edu/life/sustainability/get-involved/green-grants.html"], ["clojure (website and blog)", "https:/luminghao.com/blog"], ["handmade solar", "https://luminghao.com/2019-12-02-solarcells/"], ["piano tuning", "http://luminghao.com/2020-04-02-pianotune-withapp/"], ["cnc", "http://luminghao.com/blog/#subtract"], ["harp", "https://luminghao.com/liao/"]]
  }
});

/***/ })

})
//# sourceMappingURL=index.js.28d8c8efa42323b323e9.hot-update.js.map