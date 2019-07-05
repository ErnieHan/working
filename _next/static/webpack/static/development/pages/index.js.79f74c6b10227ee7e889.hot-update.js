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
        title: "Ernie Working Note \u723E\u5C3C\u5DE5\u4F5C\u7B46\u8A18 | \u7B46\u8A18\u3001React\u3001"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WebHead__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["TopSection"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["SearchBar"], {
        placeholder: "Quick Search",
        onChange: this.searching
      })), !this.state.searchResult ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index_css__WEBPACK_IMPORTED_MODULE_11__["Layout"], null, _data_json__WEBPACK_IMPORTED_MODULE_12__["data"].map(function (articleData, i) {
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
//# sourceMappingURL=index.js.79f74c6b10227ee7e889.hot-update.js.map