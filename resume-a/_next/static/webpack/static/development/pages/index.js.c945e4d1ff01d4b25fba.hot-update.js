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



var _this = undefined,
    _jsxFileName = "/Users/lh00000000/git/resume/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Nbsp = function Nbsp() {
  return "\xA0";
};

var config = __webpack_require__(/*! ../config.js */ "./config.js")["default"];

var gray = function gray(n) {
  var chan = 32 * n;
  return "rgb(".concat(chan, ", ").concat(chan, ", ").concat(chan, ")");
};

var Info = function Info() {
  var info = config.info;
  return __jsx("section", {
    id: "info",
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1107936393" + " " + "wrapping wrappingCenter row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "name",
    className: "jsx-1107936393" + " " + "datum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "luming hao")), config.show.headline && __jsx("div", {
    id: "headline",
    className: "jsx-1107936393" + " " + "datum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, info.headline)), config.show.location && __jsx("div", {
    id: "location",
    className: "jsx-1107936393" + " " + "datum",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, info.location)), __jsx("div", {
    id: "contact",
    className: "jsx-1107936393" + " " + "datum leftBorder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "tel:".concat(info.phone.replace("-", "")),
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "".concat(info.phone))), __jsx("p", {
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "mailto:".concat(info.email),
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, info.email)), __jsx("p", {
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://".concat(info.website),
    className: "jsx-1107936393",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, info.website)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1107936393",
    __self: _this
  }, ".row.jsx-1107936393{margin-bottom:10px;}#info.jsx-1107936393{margin-top:8px;}#name.jsx-1107936393{font-size:24px;padding-bottom:8px;}#headline.jsx-1107936393{color:".concat(gray(1), ";font-weight:bold;}#location.jsx-1107936393{color:").concat(gray(2), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NTLEFBR2dDLEFBR0osQUFJQSxBQUtvQixBQUtBLGVBYnJDLEFBSXFCLElBUHJCLGVBUUEsQ0FJbUIsQUFLbkIsaUJBSkEiLCJmaWxlIjoiL1VzZXJzL2xoMDAwMDAwMDAvZ2l0L3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IE5ic3AgPSAoKSA9PiBcIlxcdTAwQTBcIjtcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi9jb25maWcuanNcIikuZGVmYXVsdDtcblxuY29uc3QgZ3JheSA9IChuKSA9PiB7XG4gIGxldCBjaGFuID0gMzIgKiBuO1xuICByZXR1cm4gYHJnYigke2NoYW59LCAke2NoYW59LCAke2NoYW59KWA7XG59O1xuXG5jb25zdCBJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvID0gY29uZmlnLmluZm87XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQ2VudGVyIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgICAgPGgzPmx1bWluZyBoYW88L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2NvbmZpZy5zaG93LmhlYWRsaW5lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJoZWFkbGluZVwiPlxuICAgICAgICAgICAgPHA+e2luZm8uaGVhZGxpbmV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29uZmlnLnNob3cubG9jYXRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICA8cD57aW5mby5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bSBsZWZ0Qm9yZGVyXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPXtgdGVsOiR7aW5mby5waG9uZS5yZXBsYWNlKFwiLVwiLCBcIlwiKX1gfT57YCR7aW5mby5waG9uZX1gfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7aW5mby5lbWFpbH1gfT57aW5mby5lbWFpbH08L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vJHtpbmZvLndlYnNpdGV9YH0+XG4gICAgICAgICAgICAgIHtpbmZvLndlYnNpdGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpbmZvIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNoZWFkbGluZSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDEpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNsb2NhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDIpfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5jb25zdCBzcGFuV29yZHMgPSAod29yZHMsIGNsYXNzTmFtZUFkZCkgPT5cbiAgd29yZHMubWFwKCh3b3JkKSA9PlxuICAgIHdvcmQuc3RhcnRzV2l0aChcImh0dHBcIikgPyAoXG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt3b3JkfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgd29yZCAke2NsYXNzTmFtZUFkZH1gfT5cbiAgICAgICAgICB7d29yZH1cbiAgICAgICAgICA8TmJzcCAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgKSA6IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHdvcmQgJHtjbGFzc05hbWVBZGR9YH0+XG4gICAgICAgIHt3b3JkfVxuICAgICAgICA8TmJzcCAvPlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgKTtcblxuY29uc3QgQ2FyZCA9IChjYXJkKSA9PiB7XG4gIGNvbnN0IHdvcmQgPSAoZmllbGQpID0+XG4gICAgY2FyZFtmaWVsZF0gJiYgPD57c3BhbldvcmRzKGNhcmRbZmllbGRdLnNwbGl0KFwiIFwiKSwgZmllbGQpfTwvPjtcblxuICBjb25zdCBsaXN0ID0gKHRpdGxlLCBpdGVtcykgPT5cbiAgICAoaXRlbXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZCBsaXN0TWV0YVwiPlxuICAgICAgICAgIDxiPlxuICAgICAgICAgICAge2Ake3RpdGxlfTpgfVxuICAgICAgICAgICAgPE5ic3AgLz5cbiAgICAgICAgICA8L2I+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge3NwYW5Xb3JkcygoaXRlbXMgfHwgW10pLmpvaW4oXCIsIFwiKS5zcGxpdChcIiBcIiksIFwibGlzdEl0ZW1cIil9XG4gICAgICA8Lz5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBsZWZ0Qm9yZGVyXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0NlbnRlclwiPlxuICAgICAgICB7d29yZChcInRpdGxlXCIpfVxuICAgICAgICB7d29yZChcImluc3RpdHV0aW9uXCIpfVxuICAgICAgICB7d29yZChcInllYXJcIil9XG4gICAgICAgIHt3b3JkKFwiZGVzY3JpcHRpb25cIil9XG4gICAgICAgIHtjb25maWcuc2hvdy50b3BpY3MgJiYgbGlzdChcInRvcGljc1wiLCBjYXJkLnRvcGljcyl9XG4gICAgICAgIHtjb25maWcuc2hvdy5jbWRmICYmIGxpc3QoXCJjbWQrZlwiLCBjYXJkLmNtZGYpfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgLmluc3RpdHV0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg0KX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgLy8gY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7Z3JheSg2KX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgLnllYXIge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0TWV0YSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RJdGVtIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNSl9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTZWN0aW9uID0gKHsgdGl0bGUsIGNvcHksIGNhcmRzIH0pID0+IChcbiAgPHNlY3Rpb24gaWQ9e2BzZWN0aW9uLSR7dGl0bGV9YH0+XG4gICAgPGgyPntgJHt0aXRsZX06IGB9PC9oMj5cbiAgICB7Y29weSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlcIj5cbiAgICAgICAgPHA+e3NwYW5Xb3Jkcyhjb3B5LnNwbGl0KFwiIFwiKSwgXCJzZWN0aW9uQ29weVwiKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdCYXNlbGluZVwiPlxuICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCI+XG4gICAgICAgICAgPENhcmQgey4uLmNhcmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5jb3B5IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICR7Z3JheSgzKX07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuY29uc3QgT3RoZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9e2BzZWN0aW9uLW90aGVyYH0+XG4gICAgICA8c3BhbiBpZD1cIm90aGVyVGl0bGVcIj57YCR7Y29uZmlnLm90aGVyLnRpdGxlfTogYH08L3NwYW4+XG4gICAgICB7Xyhjb25maWcub3RoZXIuaXRlbXMpXG4gICAgICAgIC5mbGF0TWFwKChbaXRlbSwgaHJlZl0pID0+IFtcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57YCwgYH08L3NwYW4+LFxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgIDwvYT4sXG4gICAgICAgIF0pXG4gICAgICAgIC50YWlsKClcbiAgICAgICAgLnZhbHVlKCl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNvdGhlclRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5jb25zdCBEeW5UaXRsZSA9IGR5bmFtaWMoKCkgPT4gKFxuICA8dGl0bGU+e2BsdW1pbmcgaGFvIC0gJHtfLmxhc3Qod2luZG93LmxvY2F0aW9uLnNwbGl0KFwiL1wiKSl9YH08L3RpdGxlPlxuKSwge3NzcjogZmFsc2V9KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8bWFpbj5cbiAgICA8SGVhZD48dGl0bGU+cmVzdW1lIC0gbHVtaW5nIGhhbzwvdGl0bGU+PC9IZWFkPlxuICAgIDxJbmZvIC8+XG4gICAge2NvbmZpZy5zZWN0aW9ucy5tYXAoU2VjdGlvbil9XG4gICAgPE90aGVyIC8+XG4gICAgPHNlY3Rpb24gaWQ9XCJpbnRlbnRcIj57Y29uZmlnLmludGVudH08L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgICNpbnRlbnQge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdEJvcmRlciB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke2dyYXkoNCl9O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAubWFyZ2luUmlnaHRDaCB7XG4gICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAwLjU1Y2g7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHggMzAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhLFxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiByZ2IoNjQsIDY0LCA2NCk7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdCYXNlbGluZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nQ2VudGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nID4gLmRhdHVtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L21haW4+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
};

var spanWords = function spanWords(words, classNameAdd) {
  return words.map(function (word) {
    return word.startsWith("http") ? __jsx("a", {
      target: "_blank",
      href: word,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "word ".concat(classNameAdd),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, word, __jsx(Nbsp, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }))) : __jsx("span", {
      className: "word ".concat(classNameAdd),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, word, __jsx(Nbsp, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }));
  });
};

var Card = function Card(card) {
  var word = function word(field) {
    return card[field] && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, spanWords(card[field].split(" "), field));
  };

  var list = function list(title, items) {
    return (items || []).length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
      className: "word listMeta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, "".concat(title, ":"), __jsx(Nbsp, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }))), spanWords((items || []).join(", ").split(" "), "listItem"));
  };

  return __jsx("div", {
    className: "jsx-3846950393" + " " + "card leftBorder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-3846950393" + " " + "wrapping wrappingCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, word("title"), word("institution"), word("year"), word("description"), config.show.topics && list("topics", card.topics), config.show.cmdf && list("cmd+f", card.cmdf)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3846950393",
    __self: _this
  }, ".card{width:600px;max-width:90vw;}.card .title{font-size:18px;font-weight:bold;}.card .institution{font-weight:bold;color:".concat(gray(4), ";}.card .year{color:").concat(gray(5), ";font-weight:normal;font-size:14px;}.listMeta{color:").concat(gray(4), ";}.listItem{color:").concat(gray(5), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUhTLEFBR3lCLEFBSUcsQUFLRSxBQVVrQixBQU1BLEFBR0EsWUEzQnBCLEdBSUUsRUFLa0IsVUFSckMsS0FJQSxHQWNxQixBQU1yQixBQUdBLGlCQWxCQSxFQVVpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvbGgwMDAwMDAwMC9naXQvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgTmJzcCA9ICgpID0+IFwiXFx1MDBBMFwiO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy5qc1wiKS5kZWZhdWx0O1xuXG5jb25zdCBncmF5ID0gKG4pID0+IHtcbiAgbGV0IGNoYW4gPSAzMiAqIG47XG4gIHJldHVybiBgcmdiKCR7Y2hhbn0sICR7Y2hhbn0sICR7Y2hhbn0pYDtcbn07XG5cbmNvbnN0IEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBjb25maWcuaW5mbztcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdDZW50ZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICA8aDM+bHVtaW5nIGhhbzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y29uZmlnLnNob3cuaGVhZGxpbmUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICA8cD57aW5mby5oZWFkbGluZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb25maWcuc2hvdy5sb2NhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtIGxlZnRCb3JkZXJcIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtpbmZvLnBob25lLnJlcGxhY2UoXCItXCIsIFwiXCIpfWB9PntgJHtpbmZvLnBob25lfWB9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtpbmZvLmVtYWlsfWB9PntpbmZvLmVtYWlsfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly8ke2luZm8ud2Vic2l0ZX1gfT5cbiAgICAgICAgICAgICAge2luZm8ud2Vic2l0ZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2luZm8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2hlYWRsaW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2xvY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMil9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IHNwYW5Xb3JkcyA9ICh3b3JkcywgY2xhc3NOYW1lQWRkKSA9PlxuICB3b3Jkcy5tYXAoKHdvcmQpID0+XG4gICAgd29yZC5zdGFydHNXaXRoKFwiaHR0cFwiKSA/IChcbiAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3dvcmR9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3b3JkICR7Y2xhc3NOYW1lQWRkfWB9PlxuICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgIDxOYnNwIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgd29yZCAke2NsYXNzTmFtZUFkZH1gfT5cbiAgICAgICAge3dvcmR9XG4gICAgICAgIDxOYnNwIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICApO1xuXG5jb25zdCBDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3Qgd29yZCA9IChmaWVsZCkgPT5cbiAgICBjYXJkW2ZpZWxkXSAmJiA8PntzcGFuV29yZHMoY2FyZFtmaWVsZF0uc3BsaXQoXCIgXCIpLCBmaWVsZCl9PC8+O1xuXG4gIGNvbnN0IGxpc3QgPSAodGl0bGUsIGl0ZW1zKSA9PlxuICAgIChpdGVtcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkIGxpc3RNZXRhXCI+XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7YCR7dGl0bGV9OmB9XG4gICAgICAgICAgICA8TmJzcCAvPlxuICAgICAgICAgIDwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7c3BhbldvcmRzKChpdGVtcyB8fCBbXSkuam9pbihcIiwgXCIpLnNwbGl0KFwiIFwiKSwgXCJsaXN0SXRlbVwiKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxlZnRCb3JkZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQ2VudGVyXCI+XG4gICAgICAgIHt3b3JkKFwidGl0bGVcIil9XG4gICAgICAgIHt3b3JkKFwiaW5zdGl0dXRpb25cIil9XG4gICAgICAgIHt3b3JkKFwieWVhclwiKX1cbiAgICAgICAge3dvcmQoXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAge2NvbmZpZy5zaG93LnRvcGljcyAmJiBsaXN0KFwidG9waWNzXCIsIGNhcmQudG9waWNzKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmNtZGYgJiYgbGlzdChcImNtZCtmXCIsIGNhcmQuY21kZil9XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAuaW5zdGl0dXRpb24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAvLyBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJHtncmF5KDYpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAueWVhciB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3RNZXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdEl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyB0aXRsZSwgY29weSwgY2FyZHMgfSkgPT4gKFxuICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tJHt0aXRsZX1gfT5cbiAgICA8aDI+e2Ake3RpdGxlfTogYH08L2gyPlxuICAgIHtjb3B5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPlxuICAgICAgICA8cD57c3BhbldvcmRzKGNvcHkuc3BsaXQoXCIgXCIpLCBcInNlY3Rpb25Db3B5XCIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0Jhc2VsaW5lXCI+XG4gICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIj5cbiAgICAgICAgICA8Q2FyZCB7Li4uY2FyZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvcHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogJHtncmF5KDMpfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBPdGhlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tb3RoZXJgfT5cbiAgICAgIDxzcGFuIGlkPVwib3RoZXJUaXRsZVwiPntgJHtjb25maWcub3RoZXIudGl0bGV9OiBgfTwvc3Bhbj5cbiAgICAgIHtfKGNvbmZpZy5vdGhlci5pdGVtcylcbiAgICAgICAgLmZsYXRNYXAoKFtpdGVtLCBocmVmXSkgPT4gW1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntgLCBgfTwvc3Bhbj4sXG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgPC9hPixcbiAgICAgICAgXSlcbiAgICAgICAgLnRhaWwoKVxuICAgICAgICAudmFsdWUoKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI290aGVyVGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IER5blRpdGxlID0gZHluYW1pYygoKSA9PiAoXG4gIDx0aXRsZT57YGx1bWluZyBoYW8gLSAke18ubGFzdCh3aW5kb3cubG9jYXRpb24uc3BsaXQoXCIvXCIpKX1gfTwvdGl0bGU+XG4pLCB7c3NyOiBmYWxzZX0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtYWluPlxuICAgIDxIZWFkPjx0aXRsZT5yZXN1bWUgLSBsdW1pbmcgaGFvPC90aXRsZT48L0hlYWQ+XG4gICAgPEluZm8gLz5cbiAgICB7Y29uZmlnLnNlY3Rpb25zLm1hcChTZWN0aW9uKX1cbiAgICA8T3RoZXIgLz5cbiAgICA8c2VjdGlvbiBpZD1cImludGVudFwiPntjb25maWcuaW50ZW50fTwvc2VjdGlvbj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgI2ludGVudCB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0Qm9yZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Z3JheSg0KX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5tYXJnaW5SaWdodENoIHtcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDAuNTVjaDtcbiAgICAgICAgfVxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAzMDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTJweDtcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsXG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHJnYig2NCwgNjQsIDY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0Jhc2VsaW5lIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdDZW50ZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmcgPiAuZGF0dW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbWFpbj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
};

var Section = function Section(_ref) {
  var title = _ref.title,
      copy = _ref.copy,
      cards = _ref.cards;
  return __jsx("section", {
    id: "section-".concat(title),
    className: "jsx-90631305",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "jsx-90631305",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, "".concat(title, ": ")), copy && __jsx("div", {
    className: "jsx-90631305" + " " + "copy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-90631305",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, spanWords(copy.split(" "), "sectionCopy"))), __jsx("div", {
    className: "jsx-90631305" + " " + "wrapping wrappingBaseline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, cards.map(function (card) {
    return __jsx("div", {
      className: "jsx-90631305" + " " + "datum",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }
    }, __jsx(Card, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, card, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "90631305",
    __self: _this
  }, ".copy.jsx-90631305{font-size:12px;color:".concat(gray(3), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMktPLEFBRzBCLGVBQ29CLG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvbGgwMDAwMDAwMC9naXQvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgTmJzcCA9ICgpID0+IFwiXFx1MDBBMFwiO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy5qc1wiKS5kZWZhdWx0O1xuXG5jb25zdCBncmF5ID0gKG4pID0+IHtcbiAgbGV0IGNoYW4gPSAzMiAqIG47XG4gIHJldHVybiBgcmdiKCR7Y2hhbn0sICR7Y2hhbn0sICR7Y2hhbn0pYDtcbn07XG5cbmNvbnN0IEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBjb25maWcuaW5mbztcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdDZW50ZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICA8aDM+bHVtaW5nIGhhbzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y29uZmlnLnNob3cuaGVhZGxpbmUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICA8cD57aW5mby5oZWFkbGluZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb25maWcuc2hvdy5sb2NhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtIGxlZnRCb3JkZXJcIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtpbmZvLnBob25lLnJlcGxhY2UoXCItXCIsIFwiXCIpfWB9PntgJHtpbmZvLnBob25lfWB9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtpbmZvLmVtYWlsfWB9PntpbmZvLmVtYWlsfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly8ke2luZm8ud2Vic2l0ZX1gfT5cbiAgICAgICAgICAgICAge2luZm8ud2Vic2l0ZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2luZm8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2hlYWRsaW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2xvY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMil9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IHNwYW5Xb3JkcyA9ICh3b3JkcywgY2xhc3NOYW1lQWRkKSA9PlxuICB3b3Jkcy5tYXAoKHdvcmQpID0+XG4gICAgd29yZC5zdGFydHNXaXRoKFwiaHR0cFwiKSA/IChcbiAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3dvcmR9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3b3JkICR7Y2xhc3NOYW1lQWRkfWB9PlxuICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgIDxOYnNwIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgd29yZCAke2NsYXNzTmFtZUFkZH1gfT5cbiAgICAgICAge3dvcmR9XG4gICAgICAgIDxOYnNwIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICApO1xuXG5jb25zdCBDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3Qgd29yZCA9IChmaWVsZCkgPT5cbiAgICBjYXJkW2ZpZWxkXSAmJiA8PntzcGFuV29yZHMoY2FyZFtmaWVsZF0uc3BsaXQoXCIgXCIpLCBmaWVsZCl9PC8+O1xuXG4gIGNvbnN0IGxpc3QgPSAodGl0bGUsIGl0ZW1zKSA9PlxuICAgIChpdGVtcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkIGxpc3RNZXRhXCI+XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7YCR7dGl0bGV9OmB9XG4gICAgICAgICAgICA8TmJzcCAvPlxuICAgICAgICAgIDwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7c3BhbldvcmRzKChpdGVtcyB8fCBbXSkuam9pbihcIiwgXCIpLnNwbGl0KFwiIFwiKSwgXCJsaXN0SXRlbVwiKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxlZnRCb3JkZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQ2VudGVyXCI+XG4gICAgICAgIHt3b3JkKFwidGl0bGVcIil9XG4gICAgICAgIHt3b3JkKFwiaW5zdGl0dXRpb25cIil9XG4gICAgICAgIHt3b3JkKFwieWVhclwiKX1cbiAgICAgICAge3dvcmQoXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAge2NvbmZpZy5zaG93LnRvcGljcyAmJiBsaXN0KFwidG9waWNzXCIsIGNhcmQudG9waWNzKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmNtZGYgJiYgbGlzdChcImNtZCtmXCIsIGNhcmQuY21kZil9XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAuaW5zdGl0dXRpb24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAvLyBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJHtncmF5KDYpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAueWVhciB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3RNZXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdEl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyB0aXRsZSwgY29weSwgY2FyZHMgfSkgPT4gKFxuICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tJHt0aXRsZX1gfT5cbiAgICA8aDI+e2Ake3RpdGxlfTogYH08L2gyPlxuICAgIHtjb3B5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPlxuICAgICAgICA8cD57c3BhbldvcmRzKGNvcHkuc3BsaXQoXCIgXCIpLCBcInNlY3Rpb25Db3B5XCIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0Jhc2VsaW5lXCI+XG4gICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIj5cbiAgICAgICAgICA8Q2FyZCB7Li4uY2FyZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvcHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogJHtncmF5KDMpfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBPdGhlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tb3RoZXJgfT5cbiAgICAgIDxzcGFuIGlkPVwib3RoZXJUaXRsZVwiPntgJHtjb25maWcub3RoZXIudGl0bGV9OiBgfTwvc3Bhbj5cbiAgICAgIHtfKGNvbmZpZy5vdGhlci5pdGVtcylcbiAgICAgICAgLmZsYXRNYXAoKFtpdGVtLCBocmVmXSkgPT4gW1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntgLCBgfTwvc3Bhbj4sXG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgPC9hPixcbiAgICAgICAgXSlcbiAgICAgICAgLnRhaWwoKVxuICAgICAgICAudmFsdWUoKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI290aGVyVGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IER5blRpdGxlID0gZHluYW1pYygoKSA9PiAoXG4gIDx0aXRsZT57YGx1bWluZyBoYW8gLSAke18ubGFzdCh3aW5kb3cubG9jYXRpb24uc3BsaXQoXCIvXCIpKX1gfTwvdGl0bGU+XG4pLCB7c3NyOiBmYWxzZX0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtYWluPlxuICAgIDxIZWFkPjx0aXRsZT5yZXN1bWUgLSBsdW1pbmcgaGFvPC90aXRsZT48L0hlYWQ+XG4gICAgPEluZm8gLz5cbiAgICB7Y29uZmlnLnNlY3Rpb25zLm1hcChTZWN0aW9uKX1cbiAgICA8T3RoZXIgLz5cbiAgICA8c2VjdGlvbiBpZD1cImludGVudFwiPntjb25maWcuaW50ZW50fTwvc2VjdGlvbj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgI2ludGVudCB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0Qm9yZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Z3JheSg0KX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5tYXJnaW5SaWdodENoIHtcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDAuNTVjaDtcbiAgICAgICAgfVxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAzMDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTJweDtcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsXG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHJnYig2NCwgNjQsIDY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0Jhc2VsaW5lIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdDZW50ZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmcgPiAuZGF0dW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbWFpbj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
};

var Other = function Other() {
  return __jsx("section", {
    id: "section-other",
    className: "jsx-2638939940",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, __jsx("span", {
    id: "otherTitle",
    className: "jsx-2638939940",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, "".concat(config.other.title, ": ")), lodash__WEBPACK_IMPORTED_MODULE_5___default()(config.other.items).flatMap(function (_ref2) {
    var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        item = _ref3[0],
        href = _ref3[1];

    return [__jsx("span", {
      className: "jsx-2638939940" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, ", "), __jsx("a", {
      href: href,
      className: "jsx-2638939940",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "jsx-2638939940" + " " + "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, item))];
  }).tail().value(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2638939940",
    __self: _this
  }, "#otherTitle.jsx-2638939940{font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa01rQixBQUcwQixlQUNFLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbGgwMDAwMDAwMC9naXQvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgTmJzcCA9ICgpID0+IFwiXFx1MDBBMFwiO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy5qc1wiKS5kZWZhdWx0O1xuXG5jb25zdCBncmF5ID0gKG4pID0+IHtcbiAgbGV0IGNoYW4gPSAzMiAqIG47XG4gIHJldHVybiBgcmdiKCR7Y2hhbn0sICR7Y2hhbn0sICR7Y2hhbn0pYDtcbn07XG5cbmNvbnN0IEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBjb25maWcuaW5mbztcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdDZW50ZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICA8aDM+bHVtaW5nIGhhbzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y29uZmlnLnNob3cuaGVhZGxpbmUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIiBpZD1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICA8cD57aW5mby5oZWFkbGluZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb25maWcuc2hvdy5sb2NhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtIGxlZnRCb3JkZXJcIiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtpbmZvLnBob25lLnJlcGxhY2UoXCItXCIsIFwiXCIpfWB9PntgJHtpbmZvLnBob25lfWB9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtpbmZvLmVtYWlsfWB9PntpbmZvLmVtYWlsfTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly8ke2luZm8ud2Vic2l0ZX1gfT5cbiAgICAgICAgICAgICAge2luZm8ud2Vic2l0ZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2luZm8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2hlYWRsaW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2xvY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoMil9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IHNwYW5Xb3JkcyA9ICh3b3JkcywgY2xhc3NOYW1lQWRkKSA9PlxuICB3b3Jkcy5tYXAoKHdvcmQpID0+XG4gICAgd29yZC5zdGFydHNXaXRoKFwiaHR0cFwiKSA/IChcbiAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3dvcmR9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3b3JkICR7Y2xhc3NOYW1lQWRkfWB9PlxuICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgIDxOYnNwIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgd29yZCAke2NsYXNzTmFtZUFkZH1gfT5cbiAgICAgICAge3dvcmR9XG4gICAgICAgIDxOYnNwIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICApO1xuXG5jb25zdCBDYXJkID0gKGNhcmQpID0+IHtcbiAgY29uc3Qgd29yZCA9IChmaWVsZCkgPT5cbiAgICBjYXJkW2ZpZWxkXSAmJiA8PntzcGFuV29yZHMoY2FyZFtmaWVsZF0uc3BsaXQoXCIgXCIpLCBmaWVsZCl9PC8+O1xuXG4gIGNvbnN0IGxpc3QgPSAodGl0bGUsIGl0ZW1zKSA9PlxuICAgIChpdGVtcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkIGxpc3RNZXRhXCI+XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7YCR7dGl0bGV9OmB9XG4gICAgICAgICAgICA8TmJzcCAvPlxuICAgICAgICAgIDwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7c3BhbldvcmRzKChpdGVtcyB8fCBbXSkuam9pbihcIiwgXCIpLnNwbGl0KFwiIFwiKSwgXCJsaXN0SXRlbVwiKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxlZnRCb3JkZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQ2VudGVyXCI+XG4gICAgICAgIHt3b3JkKFwidGl0bGVcIil9XG4gICAgICAgIHt3b3JkKFwiaW5zdGl0dXRpb25cIil9XG4gICAgICAgIHt3b3JkKFwieWVhclwiKX1cbiAgICAgICAge3dvcmQoXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAge2NvbmZpZy5zaG93LnRvcGljcyAmJiBsaXN0KFwidG9waWNzXCIsIGNhcmQudG9waWNzKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmNtZGYgJiYgbGlzdChcImNtZCtmXCIsIGNhcmQuY21kZil9XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAuaW5zdGl0dXRpb24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDQpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAvLyBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJHtncmF5KDYpfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAueWVhciB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3RNZXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdEl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg1KX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyB0aXRsZSwgY29weSwgY2FyZHMgfSkgPT4gKFxuICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tJHt0aXRsZX1gfT5cbiAgICA8aDI+e2Ake3RpdGxlfTogYH08L2gyPlxuICAgIHtjb3B5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPlxuICAgICAgICA8cD57c3BhbldvcmRzKGNvcHkuc3BsaXQoXCIgXCIpLCBcInNlY3Rpb25Db3B5XCIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0Jhc2VsaW5lXCI+XG4gICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW1cIj5cbiAgICAgICAgICA8Q2FyZCB7Li4uY2FyZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvcHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogJHtncmF5KDMpfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBPdGhlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD17YHNlY3Rpb24tb3RoZXJgfT5cbiAgICAgIDxzcGFuIGlkPVwib3RoZXJUaXRsZVwiPntgJHtjb25maWcub3RoZXIudGl0bGV9OiBgfTwvc3Bhbj5cbiAgICAgIHtfKGNvbmZpZy5vdGhlci5pdGVtcylcbiAgICAgICAgLmZsYXRNYXAoKFtpdGVtLCBocmVmXSkgPT4gW1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntgLCBgfTwvc3Bhbj4sXG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgPC9hPixcbiAgICAgICAgXSlcbiAgICAgICAgLnRhaWwoKVxuICAgICAgICAudmFsdWUoKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI290aGVyVGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IER5blRpdGxlID0gZHluYW1pYygoKSA9PiAoXG4gIDx0aXRsZT57YGx1bWluZyBoYW8gLSAke18ubGFzdCh3aW5kb3cubG9jYXRpb24uc3BsaXQoXCIvXCIpKX1gfTwvdGl0bGU+XG4pLCB7c3NyOiBmYWxzZX0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtYWluPlxuICAgIDxIZWFkPjx0aXRsZT5yZXN1bWUgLSBsdW1pbmcgaGFvPC90aXRsZT48L0hlYWQ+XG4gICAgPEluZm8gLz5cbiAgICB7Y29uZmlnLnNlY3Rpb25zLm1hcChTZWN0aW9uKX1cbiAgICA8T3RoZXIgLz5cbiAgICA8c2VjdGlvbiBpZD1cImludGVudFwiPntjb25maWcuaW50ZW50fTwvc2VjdGlvbj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgI2ludGVudCB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0Qm9yZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Z3JheSg0KX07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5tYXJnaW5SaWdodENoIHtcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDAuNTVjaDtcbiAgICAgICAgfVxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAzMDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTJweDtcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEsXG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHJnYig2NCwgNjQsIDY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0Jhc2VsaW5lIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmdDZW50ZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBpbmcgPiAuZGF0dW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbWFpbj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */"));
};

var DynTitle = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 3
    }
  }, "luming hao - ".concat(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.last(window.location.split("/"))));
}, {
  ssr: false
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("main", {
    className: "jsx-899253453",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-899253453",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, "resume - luming hao")), __jsx(Info, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }), config.sections.map(Section), __jsx(Other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }), __jsx("section", {
    id: "intent",
    className: "jsx-899253453",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, config.intent), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "899253453",
    __self: _this
  }, "#intent{visibility:hidden;}.leftBorder{padding-left:10px;padding-right:10px;border-left:2px solid ".concat(gray(4), ";margin-top:2px;margin-bottom:2px;}body{font-family:\"Helvetica\",\"Arial\",sans-serif;}main{padding:10px 0px 300px 0px;}section{padding:0px 0px 0px 12px;margin:6px 0px 6px 0px;}*{margin:0;}a,a:visited{color:rgb(64,64,64);}.wrapping{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrappingBaseline{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.wrappingCenter{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.wrapping>.datum{margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU5PLEFBRzZCLEFBR0EsQUFPMkIsQUFPbEIsQUFHRixBQUtoQixBQUthLEFBSVQsQUFNUSxBQUlGLEFBSUYsU0F0Qm5CLFFBdUJBLENBaERBLEFBR3FCLEVBMkJyQixLQVZ5QixFQUh6QixVQWJxRCxNQU1yRCxLQVdBLDBCQWFxQixjQTdCSixLQXVDakIsUUFKQSxFQWxDb0Isa0JBQ3BCLHNCQTRCaUIseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9saDAwMDAwMDAwL2dpdC9yZXN1bWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBOYnNwID0gKCkgPT4gXCJcXHUwMEEwXCI7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnLmpzXCIpLmRlZmF1bHQ7XG5cbmNvbnN0IGdyYXkgPSAobikgPT4ge1xuICBsZXQgY2hhbiA9IDMyICogbjtcbiAgcmV0dXJuIGByZ2IoJHtjaGFufSwgJHtjaGFufSwgJHtjaGFufSlgO1xufTtcblxuY29uc3QgSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mbyA9IGNvbmZpZy5pbmZvO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGluZyB3cmFwcGluZ0NlbnRlciByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwibmFtZVwiPlxuICAgICAgICAgIDxoMz5sdW1pbmcgaGFvPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjb25maWcuc2hvdy5oZWFkbGluZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiIGlkPVwiaGVhZGxpbmVcIj5cbiAgICAgICAgICAgIDxwPntpbmZvLmhlYWRsaW5lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbmZpZy5zaG93LmxvY2F0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdHVtXCIgaWQ9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgPHA+e2luZm8ubG9jYXRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0dW0gbGVmdEJvcmRlclwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17YHRlbDoke2luZm8ucGhvbmUucmVwbGFjZShcIi1cIiwgXCJcIil9YH0+e2Ake2luZm8ucGhvbmV9YH08L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2luZm8uZW1haWx9YH0+e2luZm8uZW1haWx9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovLyR7aW5mby53ZWJzaXRlfWB9PlxuICAgICAgICAgICAgICB7aW5mby53ZWJzaXRlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI25hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjaGVhZGxpbmUge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSgxKX07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbG9jYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSgyKX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuY29uc3Qgc3BhbldvcmRzID0gKHdvcmRzLCBjbGFzc05hbWVBZGQpID0+XG4gIHdvcmRzLm1hcCgod29yZCkgPT5cbiAgICB3b3JkLnN0YXJ0c1dpdGgoXCJodHRwXCIpID8gKFxuICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17d29yZH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHdvcmQgJHtjbGFzc05hbWVBZGR9YH0+XG4gICAgICAgICAge3dvcmR9XG4gICAgICAgICAgPE5ic3AgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgICkgOiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B3b3JkICR7Y2xhc3NOYW1lQWRkfWB9PlxuICAgICAgICB7d29yZH1cbiAgICAgICAgPE5ic3AgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gICk7XG5cbmNvbnN0IENhcmQgPSAoY2FyZCkgPT4ge1xuICBjb25zdCB3b3JkID0gKGZpZWxkKSA9PlxuICAgIGNhcmRbZmllbGRdICYmIDw+e3NwYW5Xb3JkcyhjYXJkW2ZpZWxkXS5zcGxpdChcIiBcIiksIGZpZWxkKX08Lz47XG5cbiAgY29uc3QgbGlzdCA9ICh0aXRsZSwgaXRlbXMpID0+XG4gICAgKGl0ZW1zIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgIDw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmQgbGlzdE1ldGFcIj5cbiAgICAgICAgICA8Yj5cbiAgICAgICAgICAgIHtgJHt0aXRsZX06YH1cbiAgICAgICAgICAgIDxOYnNwIC8+XG4gICAgICAgICAgPC9iPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtzcGFuV29yZHMoKGl0ZW1zIHx8IFtdKS5qb2luKFwiLCBcIikuc3BsaXQoXCIgXCIpLCBcImxpc3RJdGVtXCIpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbGVmdEJvcmRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwid3JhcHBpbmcgd3JhcHBpbmdDZW50ZXJcIj5cbiAgICAgICAge3dvcmQoXCJ0aXRsZVwiKX1cbiAgICAgICAge3dvcmQoXCJpbnN0aXR1dGlvblwiKX1cbiAgICAgICAge3dvcmQoXCJ5ZWFyXCIpfVxuICAgICAgICB7d29yZChcImRlc2NyaXB0aW9uXCIpfVxuICAgICAgICB7Y29uZmlnLnNob3cudG9waWNzICYmIGxpc3QoXCJ0b3BpY3NcIiwgY2FyZC50b3BpY3MpfVxuICAgICAgICB7Y29uZmlnLnNob3cuY21kZiAmJiBsaXN0KFwiY21kK2ZcIiwgY2FyZC5jbWRmKX1cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC5pbnN0aXR1dGlvbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNCl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIC8vIGNvbG9yOiAke2dyYXkoNSl9O1xuICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2dyYXkoNil9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC55ZWFyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXkoNSl9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdE1ldGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JheSg0KX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0SXRlbSB7XG4gICAgICAgICAgICBjb2xvcjogJHtncmF5KDUpfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2VjdGlvbiA9ICh7IHRpdGxlLCBjb3B5LCBjYXJkcyB9KSA9PiAoXG4gIDxzZWN0aW9uIGlkPXtgc2VjdGlvbi0ke3RpdGxlfWB9PlxuICAgIDxoMj57YCR7dGl0bGV9OiBgfTwvaDI+XG4gICAge2NvcHkgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XG4gICAgICAgIDxwPntzcGFuV29yZHMoY29weS5zcGxpdChcIiBcIiksIFwic2VjdGlvbkNvcHlcIil9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwaW5nIHdyYXBwaW5nQmFzZWxpbmVcIj5cbiAgICAgIHtjYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXR1bVwiPlxuICAgICAgICAgIDxDYXJkIHsuLi5jYXJkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuY29weSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAke2dyYXkoMyl9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmNvbnN0IE90aGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPXtgc2VjdGlvbi1vdGhlcmB9PlxuICAgICAgPHNwYW4gaWQ9XCJvdGhlclRpdGxlXCI+e2Ake2NvbmZpZy5vdGhlci50aXRsZX06IGB9PC9zcGFuPlxuICAgICAge18oY29uZmlnLm90aGVyLml0ZW1zKVxuICAgICAgICAuZmxhdE1hcCgoW2l0ZW0sIGhyZWZdKSA9PiBbXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e2AsIGB9PC9zcGFuPixcbiAgICAgICAgICA8YSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICA8L2E+LFxuICAgICAgICBdKVxuICAgICAgICAudGFpbCgpXG4gICAgICAgIC52YWx1ZSgpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjb3RoZXJUaXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgRHluVGl0bGUgPSBkeW5hbWljKCgpID0+IChcbiAgPHRpdGxlPntgbHVtaW5nIGhhbyAtICR7Xy5sYXN0KHdpbmRvdy5sb2NhdGlvbi5zcGxpdChcIi9cIikpfWB9PC90aXRsZT5cbiksIHtzc3I6IGZhbHNlfSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPG1haW4+XG4gICAgPEhlYWQ+PHRpdGxlPnJlc3VtZSAtIGx1bWluZyBoYW88L3RpdGxlPjwvSGVhZD5cbiAgICA8SW5mbyAvPlxuICAgIHtjb25maWcuc2VjdGlvbnMubWFwKFNlY3Rpb24pfVxuICAgIDxPdGhlciAvPlxuICAgIDxzZWN0aW9uIGlkPVwiaW50ZW50XCI+e2NvbmZpZy5pbnRlbnR9PC9zZWN0aW9uPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuICAgICAgICAjaW50ZW50IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnRCb3JkZXIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtncmF5KDQpfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLm1hcmdpblJpZ2h0Q2gge1xuICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMC41NWNoO1xuICAgICAgICB9XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDMwMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogNnB4IDBweCA2cHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSxcbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwaW5nQmFzZWxpbmUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZ0NlbnRlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwcGluZyA+IC5kYXR1bSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9tYWluPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/lh00000000/git/resume/pages/index.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.c945e4d1ff01d4b25fba.hot-update.js.map