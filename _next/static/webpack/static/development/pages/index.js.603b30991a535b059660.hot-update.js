webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WebHead/index.js":
/*!*************************************!*\
  !*** ./components/WebHead/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web_head_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-head-css */ "./components/WebHead/web-head-css.js");




var handleClick = function handleClick() {
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
};

var WebHead = function WebHead() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inline, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    onClick: handleClick
  }, "Practice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(WebHead));

/***/ }),

/***/ "./components/WebHead/web-head-css.js":
/*!********************************************!*\
  !*** ./components/WebHead/web-head-css.js ***!
  \********************************************/
/*! exports provided: Header, Inline, Logo, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inline", function() { return Inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "web-head-css__Header",
  componentId: "sc-51upct-0"
})(["width:100%;background:#ffffff;border-bottom:1px solid #e9e8e7;"]);
var Inline = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "web-head-css__Inline",
  componentId: "sc-51upct-1"
})(["max-width:1480px;margin:0 auto;display:flex;padding:6px 15px;justify-content:space-between;align-items:center;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "web-head-css__Logo",
  componentId: "sc-51upct-2"
})(["color:#fa8182;font-size:36px;font-weight:900;font-family:\"Galano\";cursor:pointer;"]);
var User = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "web-head-css__User",
  componentId: "sc-51upct-3"
})(["width:50px;height:50px;background:url(\"/static/img/xion.jpg\") no-repeat center center;background-size:contain;border-radius:50%;border:1px solid #e9e8e7;"]);

/***/ })

})
//# sourceMappingURL=index.js.603b30991a535b059660.hot-update.js.map