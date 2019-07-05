webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./pages/work/index.js":
/*!*****************************!*\
  !*** ./pages/work/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MetaHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/MetaHead */ "./components/MetaHead.js");
/* harmony import */ var _components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/WebHeadForWorkPage */ "./components/WebHeadForWorkPage/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data.json */ "./pages/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./pages/data.json", 1);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Label */ "./components/Label/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _components_FacebookComment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/FacebookComment */ "./components/FacebookComment/index.js");
/* harmony import */ var _work_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./work-css */ "./pages/work/work-css.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar/index.js");



















var Work =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Work, _Component2);

  function Work(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Work);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Work).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      showSidebar: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidMount", function () {
      window.addEventListener("scroll", _this.handleScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentWillUnmount", function () {
      window.removeEventListener("scroll", _this.handleScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleScroll", function () {
      var element = _this.refs.element;
      var windowScrollPosition = window.pageYOffset; // 35為多計算margin推出去的隔間空白色區塊

      if (windowScrollPosition > element.offsetTop - 35) {
        _this.setState({
          showSidebar: true
        });
      } else {
        _this.setState({
          showSidebar: false
        });
      }
    });

    console.log(props);
    var Components = props.Components,
        isServer = props.isServer,
        distDir = props.distDir;

    var _Component;

    if (typeof window === "undefined" && isServer) {
      _Component = Components.map(function (component) {
        return requirePage(component, distDir).default;
      });
    } else if (typeof window !== "undefined" && isServer) {
      _Component = Components.map(function (component) {
        return dynamic(function () {
          return __webpack_require__("./pages/work lazy recursive ^\\.\\/.*\\.js$")("./".concat(component, ".js"));
        });
      });
    }

    _this.Components = _Component;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Work, [{
    key: "render",
    value: function render() {
      var _this$props$articleDa = this.props.articleData,
          title = _this$props$articleDa.title,
          subtitle = _this$props$articleDa.subtitle,
          author = _this$props$articleDa.author,
          date = _this$props$articleDa.date,
          labels = _this$props$articleDa.labels,
          url = _this$props$articleDa.url,
          id = _this$props$articleDa.id;
      var href = "".concat(_constants__WEBPACK_IMPORTED_MODULE_14__["GH_PAGE_URL"], "/work/").concat(url);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_MetaHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "".concat(title, " ").concat(subtitle, " | Ernie Working Note \u723E\u5C3C\u5DE5\u4F5C\u7B46\u8A18")
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["ArticleTitle"], null, title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["ArticleSubTitle"], null, subtitle, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/share_button.php?href=".concat(href, "&layout=button_count&size=small&width=92&height=20&appId"),
        width: "92",
        height: "20",
        style: {
          border: "none",
          overflow: "hidden",
          marginLeft: "5px"
        },
        scrolling: "no",
        frameBorder: "0",
        allowtransparency: "true",
        allow: "encrypted-media"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["Author"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "author-image"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "author-name-and-labels"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "author-name"
      }, author), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["DateAndLabels"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "date"
      }, date), labels.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Label__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: i,
          name: label.labelName,
          type: label.labelCode
        });
      }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["MainPhoto"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["Layout"], {
        ref: "element"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        showSidebar: this.state.showSidebar,
        articleData: this.props.articleData
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FacebookComment__WEBPACK_IMPORTED_MODULE_15__["default"], {
        href: href
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var id, articleData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = context.query.id;
                articleData = _data_json__WEBPACK_IMPORTED_MODULE_12__["data"].find(function (articleData) {
                  return articleData.id === id;
                });
                return _context.abrupt("return", {
                  articleData: articleData
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.7c4c5f1ea383add224ef.hot-update.js.map