webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "/Users/lh00000000/git/resume/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Nbsp = function Nbsp() {
  return "\xA0";
};

var config = __webpack_require__(/*! ../config.js */ "./config.js")["default"];

var agg = function agg() {
  var cmdf = lodash__WEBPACK_IMPORTED_MODULE_5___default()(config.sections).flatMap("cards").filter("cmdf").flatMap("cmdf").uniq().value();

  return {
    cmdf: cmdf
  };
};

var gray = function gray(n) {
  var chan = 32 * n;
  return "rgb(".concat(chan, ", ").concat(chan, ", ").concat(chan, ")");
};

var Info = function Info() {
  var info = config.info;
  return __jsx("section", {
    id: "info",
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-257669539" + " " + "wrapping wrappingCenter row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "name",
    className: "jsx-257669539" + " " + "datum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "luming hao" + Nbsp())), config.show.headline && __jsx("div", {
    id: "headline",
    className: "jsx-257669539" + " " + "datum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, info.headline + Nbsp())), config.show.location && __jsx("div", {
    id: "location",
    className: "jsx-257669539" + " " + "datum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, info.location + Nbsp())), __jsx("div", {
    id: "contact",
    className: "jsx-257669539" + " " + "datum leftBorder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "tel:".concat(info.phone.replace("-", "")),
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "".concat(info.phone))), __jsx("p", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "mailto:".concat(info.email),
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, info.email)), __jsx("p", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://".concat(info.website),
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, info.website)))), config.show.summary && __jsx("div", {
    className: "jsx-257669539" + " " + "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "summary: "), __jsx("ul", {
    className: "jsx-257669539",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, config.info.summary(agg()).map(function (s) {
    return __jsx("li", {
      className: "jsx-257669539",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, s);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "257669539",
    __self: _this
  }, ".row.jsx-257669539{margin-bottom:10px;}#info.jsx-257669539{margin-top:8px;}#name.jsx-257669539{font-size:24px;padding-bottom:8px;font-weight:bold;}#headline.jsx-257669539{color:".concat(gray(1), ";font-weight:bold;}#location.jsx-257669539{color:").concat(gray(2), ";}.summary.jsx-257669539 ul.jsx-257669539{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVTLEFBR2dDLEFBR0osQUFJQSxBQU1vQixBQUtBLEFBSXpCLFVBQ1osS0FuQkEsQUFJcUIsSUFQckIsZUFRbUIsQ0FLQSxBQUtuQixnQkFUQSxDQUtBIiwiZmlsZSI6Ii9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5jb25zdCBOYnNwID0gKCkgPT4gXCJcXHUwMEEwXCI7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnLmpzXCIpLmRlZmF1bHQ7XG5cbmNvbnN0IGFnZyA9ICgpID0+IHtcbiAgbGV0IGNtZGYgPSBfKGNvbmZpZy5zZWN0aW9ucylcbiAgICAuZmxhdE1hcChcImNhcmRzXCIpXG4gICAgLmZpbHRlcihcImNtZGZcIilcbiAgICAuZmxhdE1hcChcImNtZGZcIilcbiAgICAudW5pcSgpXG4gICAgLnZhbHVlKCk7XG4gIHJldHVybiB7XG4gICAgY21kZixcbiAgfTtcbn07XG5cbmNvbnN0IGdyYXkgPSAobikgPT4ge1xuICBsZXQgY2hhbiA9IDMyICogbjtcbiAgcmV0dXJuIGByZ2IoJHtjaGFufSwgJHtjaGFufSwgJHtjaGFufSlgO1xufTtcblxuY29uc3QgSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mbyA9IGNvbmZpZy5pbmZvO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0NlbnRlciByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibmFtZVwiPlxuICAgICAgICAgIDxwPntcImx1bWluZyBoYW9cIiArIE5ic3AoKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y29uZmlnLnNob3cuaGVhZGxpbmUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICA8cD57aW5mby5oZWFkbGluZSArIE5ic3AoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb25maWcuc2hvdy5sb2NhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmxvY2F0aW9uICsgTmJzcCgpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtIGxlZnRCb3JkZXJcIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtpbmZvLnBob25lLnJlcGxhY2UoXCItXCIsIFwiXCIpfWB9PntgJHtpbmZvLnBob25lfWB9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtpbmZvLmVtYWlsfWB9PntpbmZvLmVtYWlsfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly8ke2luZm8ud2Vic2l0ZX1gfT5cbiAgICAgICAgICAgICAge2luZm8ud2Vic2l0ZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7Y29uZmlnLnNob3cuc3VtbWFyeSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgIDxoMj5zdW1tYXJ5OiA8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtjb25maWcuaW5mby5zdW1tYXJ5KGFnZygpKS5tYXAoKHMpID0+IChcbiAgICAgICAgICAgICAgPGxpPntzfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2luZm8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjaGVhZGxpbmUge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSgxKX07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbG9jYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSgyKX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1bW1hcnkgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5jb25zdCB3b3JkcyA9ICh3b3JkcywgY2xhc3NOYW1lQWRkKSA9PlxuICB3b3Jkc1xuICAgIC5yZWR1Y2UoKGwsIHdvcmQpID0+IHtcbiAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAgIHJldHVybiBsLmNvbmNhdChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJhXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogd29yZCxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDAgJiYgXy5sYXN0KGwpLnR5cGUgPT0gXCJzcGFuXCIpIHtcbiAgICAgICAgICBsW2wubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgbFtsLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ICsgd29yZCArIFwiIFwiO1xuICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBsLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwic3BhblwiLFxuICAgICAgICAgICAgICB0ZXh0Q29udGVudDogd29yZCArIFwiIFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtdKVxuICAgIC5tYXAoKHsgdHlwZSwgdGV4dENvbnRlbnQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIndvcmQgXCIgKyBjbGFzc05hbWVBZGR9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBocmVmPXt0ZXh0Q29udGVudC50cmltKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dENvbnRlbnQudHJpbSgpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuPntOYnNwKCl9PC9zcGFuPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcIndvcmQgXCIgKyBjbGFzc05hbWVBZGR9PlxuICAgICAgICAgICAgICB7dGV4dENvbnRlbnQudHJpbSgpICsgTmJzcCgpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbmNvbnN0IENhcmQgPSAoY2FyZCkgPT4ge1xuICBjb25zdCBmaWVsZENvbnRlbnRzID0gKGZpZWxkKSA9PlxuICAgIGNhcmRbZmllbGRdICYmIDw+e3dvcmRzKGNhcmRbZmllbGRdLnNwbGl0KFwiIFwiKSwgZmllbGQpfTwvPjtcblxuICBjb25zdCBsaXN0ID0gKHRpdGxlLCBpdGVtcykgPT5cbiAgICAoaXRlbXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZCBsaXN0TWV0YVwiPlxuICAgICAgICAgIDxiPntgJHt0aXRsZX06JHtOYnNwKCl9YH08L2I+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge3dvcmRzKChpdGVtcyB8fCBbXSkuam9pbihcIiwgXCIpLnNwbGl0KFwiIFwiKSwgXCJsaXN0SXRlbVwiKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxlZnRCb3JkZXJcIj5cbiAgICAgIDxwPlxuICAgICAgICA8aDM+e2ZpZWxkQ29udGVudHMoXCJ0aXRsZVwiKX08L2gzPlxuICAgICAgICB7ZmllbGRDb250ZW50cyhcImluc3RpdHV0aW9uXCIpfVxuICAgICAgICB7ZmllbGRDb250ZW50cyhcInllYXJcIil9XG5cbiAgICAgICAge2ZpZWxkQ29udGVudHMoXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAge2NvbmZpZy5zaG93LnRvcGljcyAmJiBsaXN0KFwidG9waWNzXCIsIGNhcmQudG9waWNzKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmNtZGYgJiYgbGlzdChcImNtZCtmXCIsIGNhcmQuY21kZil9XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAuaW5zdGl0dXRpb24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAueWVhciB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3RNZXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdEl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyB0aXRsZSwgY29weSwgY2FyZHMgfSkgPT4gKFxuICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tJHt0aXRsZX1gfT5cbiAgICA8aDI+e2Ake3RpdGxlfTogYH08L2gyPlxuICAgIHtjb3B5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPlxuICAgICAgICA8cD57d29yZHMoY29weS5zcGxpdChcIiBcIiksIFwic2VjdGlvbkNvcHlcIil9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQmFzZWxpbmVcIj5cbiAgICAgIHtfKGNhcmRzKVxuICAgICAgICAuc29ydEJ5KChjKSA9PiBjLnllYXIpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLm1hcCgoY2FyZCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIj5cbiAgICAgICAgICAgIDxDYXJkIHsuLi5jYXJkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgICAudmFsdWUoKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvcHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogJHtncmF5KDMpfTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuY29uc3QgT3RoZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9e2BzZWN0aW9uLW90aGVyYH0+XG4gICAgICA8c3BhbiBpZD1cIm90aGVyVGl0bGVcIj57YCR7Y29uZmlnLm90aGVyLnRpdGxlfTogYH08L3NwYW4+XG4gICAgICB7Xyhjb25maWcub3RoZXIuaXRlbXMpXG4gICAgICAgIC5mbGF0TWFwKChbaXRlbSwgaHJlZl0pID0+IFtcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57YCwgYH08L3NwYW4+LFxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgIDwvYT4sXG4gICAgICAgIF0pXG4gICAgICAgIC50YWlsKClcbiAgICAgICAgLnZhbHVlKCl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNvdGhlclRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtYWluPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnJlc3VtZSAtIGx1bWluZyBoYW88L3RpdGxlPlxuICAgIDwvSGVhZD5cblxuICAgIDxJbmZvIC8+XG4gICAge2NvbmZpZy5zZWN0aW9ucy5tYXAoU2VjdGlvbil9XG4gICAgPE90aGVyIC8+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIC5sZWZ0Qm9yZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Z3JheSg0KX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHggMzAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhLFxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiByZ2IoNjQsIDY0LCA2NCk7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdCYXNlbGluZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nQ2VudGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbWFpbj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
};

var words = function words(_words, classNameAdd) {
  return _words.reduce(function (l, word) {
    if (word.startsWith("http")) {
      return l.concat([{
        type: "a",
        textContent: word
      }]);
    } else {
      if (l.length > 0 && lodash__WEBPACK_IMPORTED_MODULE_5___default.a.last(l).type == "span") {
        l[l.length - 1].textContent = l[l.length - 1].textContent + word + " ";
        return l;
      } else {
        return l.concat([{
          type: "span",
          textContent: word + " "
        }]);
      }
    }
  }, []).map(function (_ref) {
    var type = _ref.type,
        textContent = _ref.textContent;

    switch (type) {
      case "a":
        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", {
          className: "word " + classNameAdd,
          target: "_blank",
          href: textContent.trim(),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }
        }, textContent.trim()), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }
        }, Nbsp()));
        break;

      default:
        return __jsx("span", {
          className: "word " + classNameAdd,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }
        }, textContent.trim() + Nbsp());
        break;
    }
  });
};

var Card = function Card(card) {
  var fieldContents = function fieldContents(field) {
    return card[field] && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, words(card[field].split(" "), field));
  };

  var list = function list(title, items) {
    return (items || []).length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
      className: "word listMeta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }, "".concat(title, ":").concat(Nbsp()))), words((items || []).join(", ").split(" "), "listItem"));
  };

  return __jsx("div", {
    className: "jsx-3692990486" + " " + "card leftBorder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-3692990486",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-3692990486",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, fieldContents("title")), fieldContents("institution"), fieldContents("year"), fieldContents("description"), config.show.topics && list("topics", card.topics), config.show.cmdf && list("cmd+f", card.cmdf)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3692990486",
    __self: _this
  }, ".card{width:600px;max-width:90vw;}.card .title{font-size:18px;font-weight:bold;}.card .institution{font-weight:bold;color:".concat(gray(4), ";}h3{display:inline;}.word{display:inline;}.card .year{color:").concat(gray(5), ";font-weight:normal;font-size:14px;}.listMeta{color:").concat(gray(4), ";}.listItem{color:").concat(gray(5), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0xTLEFBR3lCLEFBSUcsQUFLRSxBQUlGLEFBSUEsQUFJb0IsQUFNQSxBQUdBLFlBN0JwQixHQUlFLEFBU25CLEFBSUEsRUFScUMsVUFSckMsS0FJQSxHQWdCcUIsQUFNckIsQUFHQSxpQkFwQkEsRUFZaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2xoMDAwMDAwMDAvZ2l0L3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmNvbnN0IE5ic3AgPSAoKSA9PiBcIlxcdTAwQTBcIjtcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi9jb25maWcuanNcIikuZGVmYXVsdDtcblxuY29uc3QgYWdnID0gKCkgPT4ge1xuICBsZXQgY21kZiA9IF8oY29uZmlnLnNlY3Rpb25zKVxuICAgIC5mbGF0TWFwKFwiY2FyZHNcIilcbiAgICAuZmlsdGVyKFwiY21kZlwiKVxuICAgIC5mbGF0TWFwKFwiY21kZlwiKVxuICAgIC51bmlxKClcbiAgICAudmFsdWUoKTtcbiAgcmV0dXJuIHtcbiAgICBjbWRmLFxuICB9O1xufTtcblxuY29uc3QgZ3JheSA9IChuKSA9PiB7XG4gIGxldCBjaGFuID0gMzIgKiBuO1xuICByZXR1cm4gYHJnYigke2NoYW59LCAke2NoYW59LCAke2NoYW59KWA7XG59O1xuXG5jb25zdCBJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvID0gY29uZmlnLmluZm87XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQ2VudGVyIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgICAgPHA+e1wibHVtaW5nIGhhb1wiICsgTmJzcCgpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjb25maWcuc2hvdy5oZWFkbGluZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwiaGVhZGxpbmVcIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmhlYWRsaW5lICsgTmJzcCgpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmxvY2F0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgPHA+e2luZm8ubG9jYXRpb24gKyBOYnNwKCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW0gbGVmdEJvcmRlclwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17YHRlbDoke2luZm8ucGhvbmUucmVwbGFjZShcIi1cIiwgXCJcIil9YH0+e2Ake2luZm8ucGhvbmV9YH08L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2luZm8uZW1haWx9YH0+e2luZm8uZW1haWx9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovLyR7aW5mby53ZWJzaXRlfWB9PlxuICAgICAgICAgICAgICB7aW5mby53ZWJzaXRlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjb25maWcuc2hvdy5zdW1tYXJ5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgPGgyPnN1bW1hcnk6IDwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NvbmZpZy5pbmZvLnN1bW1hcnkoYWdnKCkpLm1hcCgocykgPT4gKFxuICAgICAgICAgICAgICA8bGk+e3N9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI25hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNoZWFkbGluZSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDEpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNsb2NhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDIpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeSB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IHdvcmRzID0gKHdvcmRzLCBjbGFzc05hbWVBZGQpID0+XG4gIHdvcmRzXG4gICAgLnJlZHVjZSgobCwgd29yZCkgPT4ge1xuICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgcmV0dXJuIGwuY29uY2F0KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImFcIixcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB3b3JkLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGwubGVuZ3RoID4gMCAmJiBfLmxhc3QobCkudHlwZSA9PSBcInNwYW5cIikge1xuICAgICAgICAgIGxbbC5sZW5ndGggLSAxXS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBsW2wubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgKyB3b3JkICsgXCIgXCI7XG4gICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGwuY29uY2F0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHRleHRDb250ZW50OiB3b3JkICsgXCIgXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgLm1hcCgoeyB0eXBlLCB0ZXh0Q29udGVudCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wid29yZCBcIiArIGNsYXNzTmFtZUFkZH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9e3RleHRDb250ZW50LnRyaW0oKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0Q29udGVudC50cmltKCl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHNwYW4+e05ic3AoKX08L3NwYW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wid29yZCBcIiArIGNsYXNzTmFtZUFkZH0+XG4gICAgICAgICAgICAgIHt0ZXh0Q29udGVudC50cmltKCkgKyBOYnNwKCl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuY29uc3QgQ2FyZCA9IChjYXJkKSA9PiB7XG4gIGNvbnN0IGZpZWxkQ29udGVudHMgPSAoZmllbGQpID0+XG4gICAgY2FyZFtmaWVsZF0gJiYgPD57d29yZHMoY2FyZFtmaWVsZF0uc3BsaXQoXCIgXCIpLCBmaWVsZCl9PC8+O1xuXG4gIGNvbnN0IGxpc3QgPSAodGl0bGUsIGl0ZW1zKSA9PlxuICAgIChpdGVtcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkIGxpc3RNZXRhXCI+XG4gICAgICAgICAgPGI+e2Ake3RpdGxlfToke05ic3AoKX1gfTwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7d29yZHMoKGl0ZW1zIHx8IFtdKS5qb2luKFwiLCBcIikuc3BsaXQoXCIgXCIpLCBcImxpc3RJdGVtXCIpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbGVmdEJvcmRlclwiPlxuICAgICAgPHA+XG4gICAgICAgIDxoMz57ZmllbGRDb250ZW50cyhcInRpdGxlXCIpfTwvaDM+XG4gICAgICAgIHtmaWVsZENvbnRlbnRzKFwiaW5zdGl0dXRpb25cIil9XG4gICAgICAgIHtmaWVsZENvbnRlbnRzKFwieWVhclwiKX1cblxuICAgICAgICB7ZmllbGRDb250ZW50cyhcImRlc2NyaXB0aW9uXCIpfVxuICAgICAgICB7Y29uZmlnLnNob3cudG9waWNzICYmIGxpc3QoXCJ0b3BpY3NcIiwgY2FyZC50b3BpY3MpfVxuICAgICAgICB7Y29uZmlnLnNob3cuY21kZiAmJiBsaXN0KFwiY21kK2ZcIiwgY2FyZC5jbWRmKX1cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC5pbnN0aXR1dGlvbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC55ZWFyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdE1ldGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg0KX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0SXRlbSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2VjdGlvbiA9ICh7IHRpdGxlLCBjb3B5LCBjYXJkcyB9KSA9PiAoXG4gIDxzZWN0aW9uIGlkPXtgc2VjdGlvbi0ke3RpdGxlfWB9PlxuICAgIDxoMj57YCR7dGl0bGV9OiBgfTwvaDI+XG4gICAge2NvcHkgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XG4gICAgICAgIDxwPnt3b3Jkcyhjb3B5LnNwbGl0KFwiIFwiKSwgXCJzZWN0aW9uQ29weVwiKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdCYXNlbGluZVwiPlxuICAgICAge18oY2FyZHMpXG4gICAgICAgIC5zb3J0QnkoKGMpID0+IGMueWVhcilcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAubWFwKChjYXJkKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiPlxuICAgICAgICAgICAgPENhcmQgey4uLmNhcmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICAgIC52YWx1ZSgpfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuY29weSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAke2dyYXkoMyl9O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBPdGhlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tb3RoZXJgfT5cbiAgICAgIDxzcGFuIGlkPVwib3RoZXJUaXRsZVwiPntgJHtjb25maWcub3RoZXIudGl0bGV9OiBgfTwvc3Bhbj5cbiAgICAgIHtfKGNvbmZpZy5vdGhlci5pdGVtcylcbiAgICAgICAgLmZsYXRNYXAoKFtpdGVtLCBocmVmXSkgPT4gW1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntgLCBgfTwvc3Bhbj4sXG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgPC9hPixcbiAgICAgICAgXSlcbiAgICAgICAgLnRhaWwoKVxuICAgICAgICAudmFsdWUoKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI290aGVyVGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPG1haW4+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+cmVzdW1lIC0gbHVtaW5nIGhhbzwvdGl0bGU+XG4gICAgPC9IZWFkPlxuXG4gICAgPEluZm8gLz5cbiAgICB7Y29uZmlnLnNlY3Rpb25zLm1hcChTZWN0aW9uKX1cbiAgICA8T3RoZXIgLz5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgLmxlZnRCb3JkZXIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtncmF5KDQpfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAzMDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTJweDtcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsXG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHJnYig2NCwgNjQsIDY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0Jhc2VsaW5lIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdDZW50ZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9tYWluPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
};

var Section = function Section(_ref2) {
  var title = _ref2.title,
      copy = _ref2.copy,
      cards = _ref2.cards;
  return __jsx("section", {
    id: "section-".concat(title),
    className: "jsx-4035299366",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "jsx-4035299366",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, "".concat(title, ": ")), copy && __jsx("div", {
    className: "jsx-4035299366" + " " + "copy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-4035299366",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, words(copy.split(" "), "sectionCopy"))), __jsx("div", {
    className: "jsx-4035299366" + " " + "wrapping wrappingBaseline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_5___default()(cards).sortBy(function (c) {
    return c.year;
  }).reverse().map(function (card) {
    return __jsx("div", {
      className: "jsx-4035299366" + " " + "datum",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }
    }, __jsx(Card, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, card, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }
    })));
  }).value()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4035299366",
    __self: _this
  }, ".copy.jsx-4035299366{font-size:14px;color:".concat(gray(3), ";margin-bottom:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE9PLEFBRzBCLGVBQ29CLG1DQUNqQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2xoMDAwMDAwMDAvZ2l0L3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmNvbnN0IE5ic3AgPSAoKSA9PiBcIlxcdTAwQTBcIjtcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi9jb25maWcuanNcIikuZGVmYXVsdDtcblxuY29uc3QgYWdnID0gKCkgPT4ge1xuICBsZXQgY21kZiA9IF8oY29uZmlnLnNlY3Rpb25zKVxuICAgIC5mbGF0TWFwKFwiY2FyZHNcIilcbiAgICAuZmlsdGVyKFwiY21kZlwiKVxuICAgIC5mbGF0TWFwKFwiY21kZlwiKVxuICAgIC51bmlxKClcbiAgICAudmFsdWUoKTtcbiAgcmV0dXJuIHtcbiAgICBjbWRmLFxuICB9O1xufTtcblxuY29uc3QgZ3JheSA9IChuKSA9PiB7XG4gIGxldCBjaGFuID0gMzIgKiBuO1xuICByZXR1cm4gYHJnYigke2NoYW59LCAke2NoYW59LCAke2NoYW59KWA7XG59O1xuXG5jb25zdCBJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvID0gY29uZmlnLmluZm87XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQ2VudGVyIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgICAgPHA+e1wibHVtaW5nIGhhb1wiICsgTmJzcCgpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjb25maWcuc2hvdy5oZWFkbGluZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwiaGVhZGxpbmVcIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmhlYWRsaW5lICsgTmJzcCgpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmxvY2F0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgPHA+e2luZm8ubG9jYXRpb24gKyBOYnNwKCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW0gbGVmdEJvcmRlclwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17YHRlbDoke2luZm8ucGhvbmUucmVwbGFjZShcIi1cIiwgXCJcIil9YH0+e2Ake2luZm8ucGhvbmV9YH08L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2luZm8uZW1haWx9YH0+e2luZm8uZW1haWx9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovLyR7aW5mby53ZWJzaXRlfWB9PlxuICAgICAgICAgICAgICB7aW5mby53ZWJzaXRlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjb25maWcuc2hvdy5zdW1tYXJ5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgPGgyPnN1bW1hcnk6IDwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NvbmZpZy5pbmZvLnN1bW1hcnkoYWdnKCkpLm1hcCgocykgPT4gKFxuICAgICAgICAgICAgICA8bGk+e3N9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI25hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNoZWFkbGluZSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDEpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNsb2NhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDIpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeSB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IHdvcmRzID0gKHdvcmRzLCBjbGFzc05hbWVBZGQpID0+XG4gIHdvcmRzXG4gICAgLnJlZHVjZSgobCwgd29yZCkgPT4ge1xuICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgcmV0dXJuIGwuY29uY2F0KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImFcIixcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB3b3JkLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGwubGVuZ3RoID4gMCAmJiBfLmxhc3QobCkudHlwZSA9PSBcInNwYW5cIikge1xuICAgICAgICAgIGxbbC5sZW5ndGggLSAxXS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBsW2wubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgKyB3b3JkICsgXCIgXCI7XG4gICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGwuY29uY2F0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHRleHRDb250ZW50OiB3b3JkICsgXCIgXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgLm1hcCgoeyB0eXBlLCB0ZXh0Q29udGVudCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wid29yZCBcIiArIGNsYXNzTmFtZUFkZH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9e3RleHRDb250ZW50LnRyaW0oKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0Q29udGVudC50cmltKCl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHNwYW4+e05ic3AoKX08L3NwYW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wid29yZCBcIiArIGNsYXNzTmFtZUFkZH0+XG4gICAgICAgICAgICAgIHt0ZXh0Q29udGVudC50cmltKCkgKyBOYnNwKCl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuY29uc3QgQ2FyZCA9IChjYXJkKSA9PiB7XG4gIGNvbnN0IGZpZWxkQ29udGVudHMgPSAoZmllbGQpID0+XG4gICAgY2FyZFtmaWVsZF0gJiYgPD57d29yZHMoY2FyZFtmaWVsZF0uc3BsaXQoXCIgXCIpLCBmaWVsZCl9PC8+O1xuXG4gIGNvbnN0IGxpc3QgPSAodGl0bGUsIGl0ZW1zKSA9PlxuICAgIChpdGVtcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkIGxpc3RNZXRhXCI+XG4gICAgICAgICAgPGI+e2Ake3RpdGxlfToke05ic3AoKX1gfTwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7d29yZHMoKGl0ZW1zIHx8IFtdKS5qb2luKFwiLCBcIikuc3BsaXQoXCIgXCIpLCBcImxpc3RJdGVtXCIpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbGVmdEJvcmRlclwiPlxuICAgICAgPHA+XG4gICAgICAgIDxoMz57ZmllbGRDb250ZW50cyhcInRpdGxlXCIpfTwvaDM+XG4gICAgICAgIHtmaWVsZENvbnRlbnRzKFwiaW5zdGl0dXRpb25cIil9XG4gICAgICAgIHtmaWVsZENvbnRlbnRzKFwieWVhclwiKX1cblxuICAgICAgICB7ZmllbGRDb250ZW50cyhcImRlc2NyaXB0aW9uXCIpfVxuICAgICAgICB7Y29uZmlnLnNob3cudG9waWNzICYmIGxpc3QoXCJ0b3BpY3NcIiwgY2FyZC50b3BpY3MpfVxuICAgICAgICB7Y29uZmlnLnNob3cuY21kZiAmJiBsaXN0KFwiY21kK2ZcIiwgY2FyZC5jbWRmKX1cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC5pbnN0aXR1dGlvbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC55ZWFyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdE1ldGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg0KX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0SXRlbSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2VjdGlvbiA9ICh7IHRpdGxlLCBjb3B5LCBjYXJkcyB9KSA9PiAoXG4gIDxzZWN0aW9uIGlkPXtgc2VjdGlvbi0ke3RpdGxlfWB9PlxuICAgIDxoMj57YCR7dGl0bGV9OiBgfTwvaDI+XG4gICAge2NvcHkgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XG4gICAgICAgIDxwPnt3b3Jkcyhjb3B5LnNwbGl0KFwiIFwiKSwgXCJzZWN0aW9uQ29weVwiKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdCYXNlbGluZVwiPlxuICAgICAge18oY2FyZHMpXG4gICAgICAgIC5zb3J0QnkoKGMpID0+IGMueWVhcilcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAubWFwKChjYXJkKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiPlxuICAgICAgICAgICAgPENhcmQgey4uLmNhcmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICAgIC52YWx1ZSgpfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuY29weSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAke2dyYXkoMyl9O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBPdGhlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tb3RoZXJgfT5cbiAgICAgIDxzcGFuIGlkPVwib3RoZXJUaXRsZVwiPntgJHtjb25maWcub3RoZXIudGl0bGV9OiBgfTwvc3Bhbj5cbiAgICAgIHtfKGNvbmZpZy5vdGhlci5pdGVtcylcbiAgICAgICAgLmZsYXRNYXAoKFtpdGVtLCBocmVmXSkgPT4gW1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntgLCBgfTwvc3Bhbj4sXG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgPC9hPixcbiAgICAgICAgXSlcbiAgICAgICAgLnRhaWwoKVxuICAgICAgICAudmFsdWUoKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI290aGVyVGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPG1haW4+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+cmVzdW1lIC0gbHVtaW5nIGhhbzwvdGl0bGU+XG4gICAgPC9IZWFkPlxuXG4gICAgPEluZm8gLz5cbiAgICB7Y29uZmlnLnNlY3Rpb25zLm1hcChTZWN0aW9uKX1cbiAgICA8T3RoZXIgLz5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgLmxlZnRCb3JkZXIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtncmF5KDQpfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAzMDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTJweDtcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsXG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHJnYig2NCwgNjQsIDY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0Jhc2VsaW5lIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdDZW50ZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9tYWluPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
};

var Other = function Other() {
  return __jsx("section", {
    id: "section-other",
    className: "jsx-2638939940",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, __jsx("span", {
    id: "otherTitle",
    className: "jsx-2638939940",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, "".concat(config.other.title, ": ")), lodash__WEBPACK_IMPORTED_MODULE_5___default()(config.other.items).flatMap(function (_ref3) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        item = _ref4[0],
        href = _ref4[1];

    return [__jsx("span", {
      className: "jsx-2638939940" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 11
      }
    }, ", "), __jsx("a", {
      href: href,
      className: "jsx-2638939940",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "jsx-2638939940" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }
    }, item))];
  }).tail().value(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2638939940",
    __self: _this
  }, "#otherTitle.jsx-2638939940{font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1FrQixBQUcwQixlQUNFLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbGgwMDAwMDAwMC9naXQvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuY29uc3QgTmJzcCA9ICgpID0+IFwiXFx1MDBBMFwiO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy5qc1wiKS5kZWZhdWx0O1xuXG5jb25zdCBhZ2cgPSAoKSA9PiB7XG4gIGxldCBjbWRmID0gXyhjb25maWcuc2VjdGlvbnMpXG4gICAgLmZsYXRNYXAoXCJjYXJkc1wiKVxuICAgIC5maWx0ZXIoXCJjbWRmXCIpXG4gICAgLmZsYXRNYXAoXCJjbWRmXCIpXG4gICAgLnVuaXEoKVxuICAgIC52YWx1ZSgpO1xuICByZXR1cm4ge1xuICAgIGNtZGYsXG4gIH07XG59O1xuXG5jb25zdCBncmF5ID0gKG4pID0+IHtcbiAgbGV0IGNoYW4gPSAzMiAqIG47XG4gIHJldHVybiBgcmdiKCR7Y2hhbn0sICR7Y2hhbn0sICR7Y2hhbn0pYDtcbn07XG5cbmNvbnN0IEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBjb25maWcuaW5mbztcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdDZW50ZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICA8cD57XCJsdW1pbmcgaGFvXCIgKyBOYnNwKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2NvbmZpZy5zaG93LmhlYWRsaW5lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJoZWFkbGluZVwiPlxuICAgICAgICAgICAgPHA+e2luZm8uaGVhZGxpbmUgKyBOYnNwKCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29uZmlnLnNob3cubG9jYXRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICA8cD57aW5mby5sb2NhdGlvbiArIE5ic3AoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bSBsZWZ0Qm9yZGVyXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPXtgdGVsOiR7aW5mby5waG9uZS5yZXBsYWNlKFwiLVwiLCBcIlwiKX1gfT57YCR7aW5mby5waG9uZX1gfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7aW5mby5lbWFpbH1gfT57aW5mby5lbWFpbH08L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vJHtpbmZvLndlYnNpdGV9YH0+XG4gICAgICAgICAgICAgIHtpbmZvLndlYnNpdGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2NvbmZpZy5zaG93LnN1bW1hcnkgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICA8aDI+c3VtbWFyeTogPC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y29uZmlnLmluZm8uc3VtbWFyeShhZ2coKSkubWFwKChzKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT57c308L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpbmZvIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2hlYWRsaW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2xvY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMil9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdW1tYXJ5IHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuY29uc3Qgd29yZHMgPSAod29yZHMsIGNsYXNzTmFtZUFkZCkgPT5cbiAgd29yZHNcbiAgICAucmVkdWNlKChsLCB3b3JkKSA9PiB7XG4gICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICByZXR1cm4gbC5jb25jYXQoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYVwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHdvcmQsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobC5sZW5ndGggPiAwICYmIF8ubGFzdChsKS50eXBlID09IFwic3BhblwiKSB7XG4gICAgICAgICAgbFtsLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIGxbbC5sZW5ndGggLSAxXS50ZXh0Q29udGVudCArIHdvcmQgKyBcIiBcIjtcbiAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbC5jb25jYXQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHdvcmQgKyBcIiBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAubWFwKCh7IHR5cGUsIHRleHRDb250ZW50IH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ3b3JkIFwiICsgY2xhc3NOYW1lQWRkfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgaHJlZj17dGV4dENvbnRlbnQudHJpbSgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHRDb250ZW50LnRyaW0oKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3Bhbj57TmJzcCgpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ3b3JkIFwiICsgY2xhc3NOYW1lQWRkfT5cbiAgICAgICAgICAgICAge3RleHRDb250ZW50LnRyaW0oKSArIE5ic3AoKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG5jb25zdCBDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3QgZmllbGRDb250ZW50cyA9IChmaWVsZCkgPT5cbiAgICBjYXJkW2ZpZWxkXSAmJiA8Pnt3b3JkcyhjYXJkW2ZpZWxkXS5zcGxpdChcIiBcIiksIGZpZWxkKX08Lz47XG5cbiAgY29uc3QgbGlzdCA9ICh0aXRsZSwgaXRlbXMpID0+XG4gICAgKGl0ZW1zIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgIDw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmQgbGlzdE1ldGFcIj5cbiAgICAgICAgICA8Yj57YCR7dGl0bGV9OiR7TmJzcCgpfWB9PC9iPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHt3b3JkcygoaXRlbXMgfHwgW10pLmpvaW4oXCIsIFwiKS5zcGxpdChcIiBcIiksIFwibGlzdEl0ZW1cIil9XG4gICAgICA8Lz5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBsZWZ0Qm9yZGVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgPGgzPntmaWVsZENvbnRlbnRzKFwidGl0bGVcIil9PC9oMz5cbiAgICAgICAge2ZpZWxkQ29udGVudHMoXCJpbnN0aXR1dGlvblwiKX1cbiAgICAgICAge2ZpZWxkQ29udGVudHMoXCJ5ZWFyXCIpfVxuXG4gICAgICAgIHtmaWVsZENvbnRlbnRzKFwiZGVzY3JpcHRpb25cIil9XG4gICAgICAgIHtjb25maWcuc2hvdy50b3BpY3MgJiYgbGlzdChcInRvcGljc1wiLCBjYXJkLnRvcGljcyl9XG4gICAgICAgIHtjb25maWcuc2hvdy5jbWRmICYmIGxpc3QoXCJjbWQrZlwiLCBjYXJkLmNtZGYpfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgLmluc3RpdHV0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg0KX07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgLnllYXIge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0TWV0YSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RJdGVtIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNSl9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTZWN0aW9uID0gKHsgdGl0bGUsIGNvcHksIGNhcmRzIH0pID0+IChcbiAgPHNlY3Rpb24gaWQ9e2BzZWN0aW9uLSR7dGl0bGV9YH0+XG4gICAgPGgyPntgJHt0aXRsZX06IGB9PC9oMj5cbiAgICB7Y29weSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlcIj5cbiAgICAgICAgPHA+e3dvcmRzKGNvcHkuc3BsaXQoXCIgXCIpLCBcInNlY3Rpb25Db3B5XCIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0Jhc2VsaW5lXCI+XG4gICAgICB7XyhjYXJkcylcbiAgICAgICAgLnNvcnRCeSgoYykgPT4gYy55ZWFyKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCI+XG4gICAgICAgICAgICA8Q2FyZCB7Li4uY2FyZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICAgLnZhbHVlKCl9XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5jb3B5IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICR7Z3JheSgzKX07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmNvbnN0IE90aGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPXtgc2VjdGlvbi1vdGhlcmB9PlxuICAgICAgPHNwYW4gaWQ9XCJvdGhlclRpdGxlXCI+e2Ake2NvbmZpZy5vdGhlci50aXRsZX06IGB9PC9zcGFuPlxuICAgICAge18oY29uZmlnLm90aGVyLml0ZW1zKVxuICAgICAgICAuZmxhdE1hcCgoW2l0ZW0sIGhyZWZdKSA9PiBbXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e2AsIGB9PC9zcGFuPixcbiAgICAgICAgICA8YSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICA8L2E+LFxuICAgICAgICBdKVxuICAgICAgICAudGFpbCgpXG4gICAgICAgIC52YWx1ZSgpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjb3RoZXJUaXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8bWFpbj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5yZXN1bWUgLSBsdW1pbmcgaGFvPC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICA8SW5mbyAvPlxuICAgIHtjb25maWcuc2VjdGlvbnMubWFwKFNlY3Rpb24pfVxuICAgIDxPdGhlciAvPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuICAgICAgICAubGVmdEJvcmRlciB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke2dyYXkoNCl9O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDMwMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogNnB4IDBweCA2cHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSxcbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nQmFzZWxpbmUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0NlbnRlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L21haW4+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("main", {
    className: "jsx-1057572235",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-1057572235",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, "resume - luming hao")), __jsx(Info, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 5
    }
  }), config.sections.map(Section), __jsx(Other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1057572235",
    __self: _this
  }, ".leftBorder{padding-left:10px;padding-right:10px;border-left:2px solid ".concat(gray(4), ";margin-top:2px;margin-bottom:2px;}body{font-family:\"Helvetica\",\"Arial\",sans-serif;}main{padding:10px 0px 300px 0px;}section{padding:0px 0px 0px 12px;margin:6px 0px 6px 0px;}*{margin:0;}a,a:visited{color:rgb(64,64,64);}.wrapping{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrappingBaseline{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.wrappingCenter{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVJPLEFBRzZCLEFBTzJCLEFBSWxCLEFBR0YsQUFLaEIsQUFLYSxBQUlULEFBTVEsQUFJRixTQWxCckIsU0FuQnFCLEVBd0JyQixLQVZ5QixFQUh6QixVQVZxRCxNQU1yRCxLQVFBLDBCQWFxQixjQTFCSixLQW9DakIsUUFKQSxFQS9Cb0Isa0JBQ3BCLHNCQXlCaUIseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5jb25zdCBOYnNwID0gKCkgPT4gXCJcXHUwMEEwXCI7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnLmpzXCIpLmRlZmF1bHQ7XG5cbmNvbnN0IGFnZyA9ICgpID0+IHtcbiAgbGV0IGNtZGYgPSBfKGNvbmZpZy5zZWN0aW9ucylcbiAgICAuZmxhdE1hcChcImNhcmRzXCIpXG4gICAgLmZpbHRlcihcImNtZGZcIilcbiAgICAuZmxhdE1hcChcImNtZGZcIilcbiAgICAudW5pcSgpXG4gICAgLnZhbHVlKCk7XG4gIHJldHVybiB7XG4gICAgY21kZixcbiAgfTtcbn07XG5cbmNvbnN0IGdyYXkgPSAobikgPT4ge1xuICBsZXQgY2hhbiA9IDMyICogbjtcbiAgcmV0dXJuIGByZ2IoJHtjaGFufSwgJHtjaGFufSwgJHtjaGFufSlgO1xufTtcblxuY29uc3QgSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mbyA9IGNvbmZpZy5pbmZvO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0NlbnRlciByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibmFtZVwiPlxuICAgICAgICAgIDxwPntcImx1bWluZyBoYW9cIiArIE5ic3AoKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y29uZmlnLnNob3cuaGVhZGxpbmUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICA8cD57aW5mby5oZWFkbGluZSArIE5ic3AoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb25maWcuc2hvdy5sb2NhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmxvY2F0aW9uICsgTmJzcCgpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtIGxlZnRCb3JkZXJcIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtpbmZvLnBob25lLnJlcGxhY2UoXCItXCIsIFwiXCIpfWB9PntgJHtpbmZvLnBob25lfWB9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtpbmZvLmVtYWlsfWB9PntpbmZvLmVtYWlsfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly8ke2luZm8ud2Vic2l0ZX1gfT5cbiAgICAgICAgICAgICAge2luZm8ud2Vic2l0ZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7Y29uZmlnLnNob3cuc3VtbWFyeSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgIDxoMj5zdW1tYXJ5OiA8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtjb25maWcuaW5mby5zdW1tYXJ5KGFnZygpKS5tYXAoKHMpID0+IChcbiAgICAgICAgICAgICAgPGxpPntzfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2luZm8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjaGVhZGxpbmUge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSgxKX07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbG9jYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSgyKX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1bW1hcnkgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5jb25zdCB3b3JkcyA9ICh3b3JkcywgY2xhc3NOYW1lQWRkKSA9PlxuICB3b3Jkc1xuICAgIC5yZWR1Y2UoKGwsIHdvcmQpID0+IHtcbiAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAgIHJldHVybiBsLmNvbmNhdChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJhXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogd29yZCxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsLmxlbmd0aCA+IDAgJiYgXy5sYXN0KGwpLnR5cGUgPT0gXCJzcGFuXCIpIHtcbiAgICAgICAgICBsW2wubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgbFtsLmxlbmd0aCAtIDFdLnRleHRDb250ZW50ICsgd29yZCArIFwiIFwiO1xuICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBsLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwic3BhblwiLFxuICAgICAgICAgICAgICB0ZXh0Q29udGVudDogd29yZCArIFwiIFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtdKVxuICAgIC5tYXAoKHsgdHlwZSwgdGV4dENvbnRlbnQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIndvcmQgXCIgKyBjbGFzc05hbWVBZGR9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBocmVmPXt0ZXh0Q29udGVudC50cmltKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dENvbnRlbnQudHJpbSgpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuPntOYnNwKCl9PC9zcGFuPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcIndvcmQgXCIgKyBjbGFzc05hbWVBZGR9PlxuICAgICAgICAgICAgICB7dGV4dENvbnRlbnQudHJpbSgpICsgTmJzcCgpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbmNvbnN0IENhcmQgPSAoY2FyZCkgPT4ge1xuICBjb25zdCBmaWVsZENvbnRlbnRzID0gKGZpZWxkKSA9PlxuICAgIGNhcmRbZmllbGRdICYmIDw+e3dvcmRzKGNhcmRbZmllbGRdLnNwbGl0KFwiIFwiKSwgZmllbGQpfTwvPjtcblxuICBjb25zdCBsaXN0ID0gKHRpdGxlLCBpdGVtcykgPT5cbiAgICAoaXRlbXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZCBsaXN0TWV0YVwiPlxuICAgICAgICAgIDxiPntgJHt0aXRsZX06JHtOYnNwKCl9YH08L2I+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge3dvcmRzKChpdGVtcyB8fCBbXSkuam9pbihcIiwgXCIpLnNwbGl0KFwiIFwiKSwgXCJsaXN0SXRlbVwiKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxlZnRCb3JkZXJcIj5cbiAgICAgIDxwPlxuICAgICAgICA8aDM+e2ZpZWxkQ29udGVudHMoXCJ0aXRsZVwiKX08L2gzPlxuICAgICAgICB7ZmllbGRDb250ZW50cyhcImluc3RpdHV0aW9uXCIpfVxuICAgICAgICB7ZmllbGRDb250ZW50cyhcInllYXJcIil9XG5cbiAgICAgICAge2ZpZWxkQ29udGVudHMoXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAge2NvbmZpZy5zaG93LnRvcGljcyAmJiBsaXN0KFwidG9waWNzXCIsIGNhcmQudG9waWNzKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmNtZGYgJiYgbGlzdChcImNtZCtmXCIsIGNhcmQuY21kZil9XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAuaW5zdGl0dXRpb24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAueWVhciB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3RNZXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdEl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyB0aXRsZSwgY29weSwgY2FyZHMgfSkgPT4gKFxuICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tJHt0aXRsZX1gfT5cbiAgICA8aDI+e2Ake3RpdGxlfTogYH08L2gyPlxuICAgIHtjb3B5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPlxuICAgICAgICA8cD57d29yZHMoY29weS5zcGxpdChcIiBcIiksIFwic2VjdGlvbkNvcHlcIil9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQmFzZWxpbmVcIj5cbiAgICAgIHtfKGNhcmRzKVxuICAgICAgICAuc29ydEJ5KChjKSA9PiBjLnllYXIpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLm1hcCgoY2FyZCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIj5cbiAgICAgICAgICAgIDxDYXJkIHsuLi5jYXJkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgICAudmFsdWUoKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvcHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogJHtncmF5KDMpfTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuY29uc3QgT3RoZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9e2BzZWN0aW9uLW90aGVyYH0+XG4gICAgICA8c3BhbiBpZD1cIm90aGVyVGl0bGVcIj57YCR7Y29uZmlnLm90aGVyLnRpdGxlfTogYH08L3NwYW4+XG4gICAgICB7Xyhjb25maWcub3RoZXIuaXRlbXMpXG4gICAgICAgIC5mbGF0TWFwKChbaXRlbSwgaHJlZl0pID0+IFtcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57YCwgYH08L3NwYW4+LFxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgIDwvYT4sXG4gICAgICAgIF0pXG4gICAgICAgIC50YWlsKClcbiAgICAgICAgLnZhbHVlKCl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNvdGhlclRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtYWluPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnJlc3VtZSAtIGx1bWluZyBoYW88L3RpdGxlPlxuICAgIDwvSGVhZD5cblxuICAgIDxJbmZvIC8+XG4gICAge2NvbmZpZy5zZWN0aW9ucy5tYXAoU2VjdGlvbil9XG4gICAgPE90aGVyIC8+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIC5sZWZ0Qm9yZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Z3JheSg0KX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHggMzAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhLFxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiByZ2IoNjQsIDY0LCA2NCk7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdCYXNlbGluZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nQ2VudGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbWFpbj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.01d3fecaf01a6bc8a290.hot-update.js.map