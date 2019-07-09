webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./components/MoreRelation/index.js":
/*!******************************************!*\
  !*** ./components/MoreRelation/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _pages_data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/data.json */ "./pages/data.json");
var _pages_data_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../pages/data.json */ "./pages/data.json", 1);










var Div = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "MoreRelation__Div",
  componentId: "sc-1ped39w-0"
})(["background:#f2f7fa;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "MoreRelation__Content",
  componentId: "sc-1ped39w-1"
})(["max-width:980px;padding:35px 15px;margin:0 auto;.more-title{border-bottom:1px solid #e9e8e7;padding-bottom:10px;}"]);
var More = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "MoreRelation__More",
  componentId: "sc-1ped39w-2"
})(["float:left;.more-subtitle{font-size:13px;color:rgba(0,0,0,0.5);}"]);
var Author = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "MoreRelation__Author",
  componentId: "sc-1ped39w-3"
})([""]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "MoreRelation__Image",
  componentId: "sc-1ped39w-4"
})(["width:33.33%;"]);

var MoreRelation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MoreRelation, _Component);

  function MoreRelation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MoreRelation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MoreRelation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      relationArticle: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      var length = _pages_data_json__WEBPACK_IMPORTED_MODULE_9__["data"].length;

      var chooseArticle = _this.getRandom(length);

      _this.setState({
        relationArticle: chooseArticle
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRandom", function (number) {
      return Math.floor(Math.random() * number);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MoreRelation, [{
    key: "render",
    value: function render() {
      var article = _pages_data_json__WEBPACK_IMPORTED_MODULE_9__["data"][this.state.relationArticle];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Div, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "more-title"
      }, "\u66F4\u591A\u76F8\u95DC\u7684\u6587\u7AE0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(More, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "more-subtitle"
      }, article.subtitle), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Image, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/work/main/".concat(article.id, ".png")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, article.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Author, null, "123")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          clear: "both"
        }
      })));
    }
  }]);

  return MoreRelation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MoreRelation);

/***/ })

})
//# sourceMappingURL=work.js.7d40a785467f7ea4b8c9.hot-update.js.map