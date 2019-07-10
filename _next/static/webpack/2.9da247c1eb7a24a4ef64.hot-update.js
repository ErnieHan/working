webpackHotUpdate(2,{

/***/ "./components/Work/login-and-register/index.js":
/*!*****************************************************!*\
  !*** ./components/Work/login-and-register/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Loading */ "./components/Loading/index.js");










var Div = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "login-and-register__Div",
  componentId: "sc-1su69q2-0"
})(["margin-bottom:35px;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2.withConfig({
  displayName: "login-and-register__SubTitle",
  componentId: "sc-1su69q2-1"
})(["font-weight:normal;font-size:32px;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "login-and-register__Form",
  componentId: "sc-1su69q2-2"
})(["max-width:350px;margin:35px auto;"]);
var InputDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "login-and-register__InputDiv",
  componentId: "sc-1su69q2-3"
})(["position:relative;margin-bottom:10px;input{width:100%;padding:8px 8px 8px 28%;border:1px solid #e9e8e7;outline:0;}"]);
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].label.withConfig({
  displayName: "login-and-register__InputLabel",
  componentId: "sc-1su69q2-4"
})(["font-size:13px;position:absolute;top:0;left:0;height:100%;padding:9px;border-right:1px solid #e9e8e7;width:25%;text-align:center;color:rgba(0,0,0,0.5);"]);
var RegisterButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "login-and-register__RegisterButton",
  componentId: "sc-1su69q2-5"
})(["background:#111111;color:white;width:100%;padding:8px 16px;border:0;"]);

var LoginAndRegister =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginAndRegister, _Component);

  function LoginAndRegister() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginAndRegister);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginAndRegister)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      var list = []; // 總共有n個項目，全都塞進陣列裡

      var n = 10;

      for (var i = 0; i < n; i++) {
        list.push(i);
      } // 將這筆陣列大家全部重新隨機排列


      list.sort(function () {
        return Math.random() - 0.5;
      }); // 最後只取三個值

      list.length = 3;
      console.log(list);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submit", function () {
      event.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function () {
      console.log(event.target.name);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginAndRegister, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Div, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubTitle, null, "\u4E00\u3001\u8A3B\u518A\u884C\u70BA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Form, {
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(InputDiv, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(InputLabel, null, "\u5E33\u865F"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "account"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(InputDiv, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(InputLabel, null, "\u5BC6\u78BC"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        name: "password"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RegisterButton, {
        onClick: this.submit
      }, "\u8A3B\u518A")));
    }
  }]);

  return LoginAndRegister;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginAndRegister);

/***/ })

})
//# sourceMappingURL=2.9da247c1eb7a24a4ef64.hot-update.js.map