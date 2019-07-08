webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Article/index.js":
/*!*************************************!*\
  !*** ./components/Article/index.js ***!
  \*************************************/
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
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Label */ "./components/Label/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);












var LayoutInside = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Article__LayoutInside",
  componentId: "ejl8k7-0"
})(["break-inside:avoid;padding:15px 0;transition:all 300ms;transform:", ";"], function (props) {
  return props.state.move ? "translate(".concat(props.state.x, "px,").concat(props.state.y, "px)") : "";
});
var Div = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Article__Div",
  componentId: "ejl8k7-1"
})(["background:white;border-radius:10px;padding:15px;position:relative;h2{font-family:\"Galano\";font-size:32px;}h3{color:#aaaaaa;font-size:14px;padding-bottom:15px;border-bottom:1px solid #e9e8e7;}"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Article__Date",
  componentId: "ejl8k7-2"
})(["margin:5px 0;text-align:right;color:#aaa;"]);
var Point = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Article__Point",
  componentId: "ejl8k7-3"
})(["margin:5px 0;padding-bottom:15px;border-bottom:1px solid #e9e8e7;font-size:13px;&::first-letter{padding-left:15px;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Article__Title",
  componentId: "ejl8k7-4"
})(["cursor:pointer;"]);
var Author = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Article__Author",
  componentId: "ejl8k7-5"
})(["margin-top:10px;.author-image{float:left;width:50px;height:50px;border-radius:50%;background:", ";background-size:cover;}.author-name-and-labels{margin-left:15px;float:left;width:calc(100% - 65px);}.author-name{margin:0;font-size:19px;}.labels{display:flex;flex-wrap:wrap;}&::after{display:block;content:\"\";clear:both;}"], function (props) {
  return "url(/static/img/work/main/".concat(props.img, ".png) no-repeat center center;");
});

var Article =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Article, _Component);

  function Article() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Article);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Article)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      move: false,
      x: 0,
      y: 0,
      showCircle: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      var element = _this.refs.element;
      var x = element.offsetLeft;
      var y = element.offsetTop;
      var windowWidth = document.body.offsetWidth;
      var windowHeight = window.innerHeight;
      var elementWidth = element.offsetWidth;
      var elementHeight = element.offsetHeight;

      _this.setState({
        move: !_this.state.move,
        x: -x + windowWidth / 2 - elementWidth / 2,
        y: -y + windowHeight / 2 - elementHeight / 2
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "goToWorkPage", function (url) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/work?id=".concat(url), "/work/".concat(url), {
        shallow: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Article, [{
    key: "render",
    value: function render() {
      var _this$props$articleDa = this.props.articleData,
          title = _this$props$articleDa.title,
          subtitle = _this$props$articleDa.subtitle,
          date = _this$props$articleDa.date,
          pointWords = _this$props$articleDa.pointWords,
          labels = _this$props$articleDa.labels,
          url = _this$props$articleDa.url,
          id = _this$props$articleDa.id;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LayoutInside, {
        ref: "element",
        state: this.state
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Div, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/work/".concat(url)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, subtitle)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Date, null, date), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Point, null, pointWords), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Author, {
        img: id
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-image"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-name-and-labels"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "author-name"
      }, "Ernie Han"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "labels"
      }, labels.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: i,
          name: label.labelName,
          type: label.labelCode
        });
      }))))));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Article));

/***/ })

})
//# sourceMappingURL=index.js.7ef221efeb358fa522a2.hot-update.js.map