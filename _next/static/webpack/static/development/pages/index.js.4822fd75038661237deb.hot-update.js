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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "WebHead__Header",
  componentId: "sc-1vp1qsj-0"
})(["width:100%;background:#ffffff;border-bottom:1px solid white;"]);
var Inline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WebHead__Inline",
  componentId: "sc-1vp1qsj-1"
})(["max-width:1480px;margin:0 auto;display:flex;padding:15px;justify-content:space-between;align-items:center;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WebHead__Logo",
  componentId: "sc-1vp1qsj-2"
})(["color:#fa8182;font-size:36px;font-weight:900;font-family:\"Galano\";cursor:pointer;"]);
var User = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WebHead__User",
  componentId: "sc-1vp1qsj-3"
})(["width:50px;height:50px;background:url(\"/static/img/xion.jpg\") no-repeat center center;background-size:contain;border-radius:50%;border:1px solid #e9e8e7;"]);

var handleClick = function handleClick() {
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
};

var WebHead = function WebHead() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inline, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    onClick: handleClick
  }, "Practice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(WebHead));

/***/ })

})
//# sourceMappingURL=index.js.4822fd75038661237deb.hot-update.js.map