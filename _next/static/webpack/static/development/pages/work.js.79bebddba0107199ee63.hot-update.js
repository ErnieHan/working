webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./components/Label/index.js":
/*!***********************************!*\
  !*** ./components/Label/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var labelColor = function labelColor() {
  return "20px";
};

var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "Label",
  componentId: "sc-1kv2spb-0"
})(["background:", ";font-size:", ";margin-right:5px;margin-top:5px;border-radius:5px;min-width:55px;text-align:center;padding:6px 0;color:white;display:flex;justify-content:center;align-items:center;cursor:pointer;"], function (props) {
  if (props.type === "api") {
    return "#67C867";
  } else if (props.type === "video") {
    return "#FF9B48";
  } else if (props.type === "form") {
    return "#AF957F";
  } else {
    return "black";
  }
}, labelColor);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    type: props.type,
    className: "label-tag"
  }, props.name);
});

/***/ })

})
//# sourceMappingURL=work.js.79bebddba0107199ee63.hot-update.js.map