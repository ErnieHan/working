webpackHotUpdate(1,{

/***/ "./components/Work/youtube-video-api/index.js":
/*!****************************************************!*\
  !*** ./components/Work/youtube-video-api/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CodeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../CodeSection */ "./components/CodeSection/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");









var YoutubeVideoApi =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(YoutubeVideoApi, _Component);

  function YoutubeVideoApi() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, YoutubeVideoApi);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(YoutubeVideoApi).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(YoutubeVideoApi, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        ref: "element"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CodeSection__WEBPACK_IMPORTED_MODULE_6__["default"], null, "import React, { Component } from \"react\";\n    import { Dialog, Button } from \"dawn-react-ui-lib\";\n    \n    class Example extends Component{\n        state={\n          open: false\n        }\n        // \u4F7F\u7528\u8005\u81EA\u884C\u5B9A\u7FA9\u7684Button\u7684\u9EDE\u64CA\u4E8B\u4EF6\n        openDialog = () => {\n          this.setState({\n            open:true\n          })\n        }\n        // \u50B3\u4E0B\u53BB\u7D66Dialog\u95DC\u9589\u756B\u9762\u7684\u4E8B\u4EF6\n        closeDialog = () => {\n          this.setState({\n            open:false\n          })\n        }\n        render(){\n            return(\n              <div>\n                <Button\n                  text=\"\u7528\u6236\u78BA\u8A8D\u5C0D\u8A71\u6846\"\n                  onClick={this.openDialog}\n                  width=\"250px\"\n                  padding=\"16px\"\n                />\n                <Dialog\n                  open={this.state.open}\n                  handleClose={this.closeDialog}\n                  contentHeader=\"\u6A19\u984C\u6587\u5B57\"\n                  contentBody={<div>\u5167\u5BB9</div>}\n                  userAgree\n                  userAgreeFunc={() => {\n                    alert(\"\u81EA\u5B9A\u7FA9\u78BA\u8A8D\u4E8B\u4EF6\");\n                  }}\n                />\n              </div>\n            )\n        }\n    }\n    \n    export default Example;"));
    }
  }]);

  return YoutubeVideoApi;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideoApi);

/***/ })

})
//# sourceMappingURL=1.b738dbb1fdd86b61c739.hot-update.js.map