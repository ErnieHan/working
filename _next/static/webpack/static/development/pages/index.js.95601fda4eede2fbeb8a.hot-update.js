webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
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
/* harmony import */ var _components_MetaHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MetaHead */ "./components/MetaHead.js");
/* harmony import */ var _components_WebHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/WebHead */ "./components/WebHead/index.js");
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Article */ "./components/Article/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-css */ "./pages/index/index-css.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data.json */ "./pages/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./pages/data.json", 1);
/* harmony import */ var _components_CodeSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/CodeSection */ "./components/CodeSection/index.js");















var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      searchResult: false,
      searchResultArrary: [],
      keywords: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "searching", function (e) {
      var keywords = e.target.value.toLowerCase();

      _this.setState({
        keywords: e.target.value
      });

      if (keywords.length > 2) {
        // 關鍵字需要三個字以上才開始搜尋
        _this.setState({
          searchResult: true
        });

        var findKeywords = _data_json__WEBPACK_IMPORTED_MODULE_12__["data"].map(function (article) {
          return article.keywords.findIndex(function (key) {
            return key.includes(keywords);
          });
        });
        var i;
        var newArr = [];

        for (i = 0; i < findKeywords.length; i++) {
          if (findKeywords[i] === -1) {} else {
            newArr.push(_data_json__WEBPACK_IMPORTED_MODULE_12__["data"][i]);
          }

          _this.setState({
            searchResultArrary: newArr
          });
        }
      } else {
        _this.setState({
          searchResult: false
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          background: "#f2f7fa",
          minHeight: "105vh"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MetaHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "\u5DE5\u4F5C\u5143\u4EF6\u5340"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WebHead__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["TopSection"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["SearchBar"], {
        placeholder: "Quick Search",
        onChange: this.searching
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CodeSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, "import React, { Component } from \"react\";\nimport { Dialog, Button } from \"dawn-react-ui-lib\";\n\nclass Example extends Component{\n    state={\n      open: false\n    }\n    // \u4F7F\u7528\u8005\u81EA\u884C\u5B9A\u7FA9\u7684Button\u7684\u9EDE\u64CA\u4E8B\u4EF6\n    openDialog = () => {\n      this.setState({\n        open:true\n      })\n    }\n    // \u50B3\u4E0B\u53BB\u7D66Dialog\u95DC\u9589\u756B\u9762\u7684\u4E8B\u4EF6\n    closeDialog = () => {\n      this.setState({\n        open:false\n      })\n    }\n    render(){\n        return(\n          <div>\n            <Button\n              text=\"\u7528\u6236\u78BA\u8A8D\u5C0D\u8A71\u6846\"\n              onClick={this.openDialog}\n              width=\"250px\"\n              padding=\"16px\"\n            />\n            <Dialog\n              open={this.state.open}\n              handleClose={this.closeDialog}\n              contentHeader=\"\u6A19\u984C\u6587\u5B57\"\n              contentBody={<div>\u5167\u5BB9</div>}\n              userAgree\n              userAgreeFunc={() => {\n                alert(\"\u81EA\u5B9A\u7FA9\u78BA\u8A8D\u4E8B\u4EF6\");\n              }}\n            />\n          </div>\n        )\n    }\n}\n\nexport default Example;")), !this.state.searchResult ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["Layout"], null, _data_json__WEBPACK_IMPORTED_MODULE_12__["data"].map(function (articleData, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Article__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: i,
          articleData: articleData
        });
      })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["SearchText"], null, "\u4EE5\u4E0B\u70BA", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.state.keywords), "\u7684\u641C\u5C0B\u7D50\u679C\uFF1A", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.state.searchResultArrary.length), "\u7B46"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["Layout"], null, this.state.searchResultArrary.map(function (articleData, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Article__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: i,
          articleData: articleData
        });
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.95601fda4eede2fbeb8a.hot-update.js.map