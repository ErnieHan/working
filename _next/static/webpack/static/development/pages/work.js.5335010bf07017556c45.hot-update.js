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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MetaHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MetaHead */ "./components/MetaHead.js");
/* harmony import */ var _components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/WebHeadForWorkPage */ "./components/WebHeadForWorkPage/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data.json */ "./pages/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./pages/data.json", 1);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Label */ "./components/Label/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _components_FacebookComment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/FacebookComment */ "./components/FacebookComment/index.js");
/* harmony import */ var _work_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./work-css */ "./pages/work/work-css.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar/index.js");
/* harmony import */ var _components_FacebookShare__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/FacebookShare */ "./components/FacebookShare/index.js");
/* harmony import */ var _components_Source__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Source */ "./components/Source/index.js");
/* harmony import */ var _components_MoreRelation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/MoreRelation */ "./components/MoreRelation/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading/index.js");






















var Work =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Work, _Component);

  function Work() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Work);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Work).apply(this, arguments));
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
          id = _this$props$articleDa.id,
          pointWords = _this$props$articleDa.pointWords;
      var href = "".concat(_constants__WEBPACK_IMPORTED_MODULE_13__["GH_PAGE_URL"], "/work/").concat(url);
      var DynamicWorkingComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
        return __webpack_require__("./components/Work lazy recursive ^\\.\\/.*$")("./".concat(id));
      }, {
        loading: function loading() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null);
        },
        loadableGenerated: {
          webpack: function webpack() {
            return [/*require.resolve*/(__webpack_require__("./components/Work weak recursive ^\\.\\/.*$").resolve("./".concat(id)))];
          },
          modules: ["../../components/Work/".concat(id)]
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MetaHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "".concat(title, " ").concat(subtitle, " | Ernie Working Note \u723E\u5C3C\u5DE5\u4F5C\u7B46\u8A18"),
        description: pointWords,
        url: "https://profile.erniexx.website/work/".concat(url),
        ogImage: "/static/img/work/main/".concat(id, ".png")
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["ArticleTitle"], null, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["ArticleSubTitle"], null, subtitle, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FacebookShare__WEBPACK_IMPORTED_MODULE_17__["default"], {
        href: href
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["Author"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-image"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-name-and-labels"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "author-name"
      }, author), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["DateAndLabels"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "date"
      }, date))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["MainPhoto"], {
        img: id
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["Layout"], {
        ref: "element"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          minHeight: "600px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DynamicWorkingComponent, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "\u76F8\u95DC\u8CC7\u6E90\uFF1A"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Source__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_15__["LabelsDiv"], null, labels.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Label__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: i,
          name: label.labelName,
          type: label.labelCode
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FacebookComment__WEBPACK_IMPORTED_MODULE_14__["default"], {
        href: href
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MoreRelation__WEBPACK_IMPORTED_MODULE_19__["default"], null));
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
                articleData = _data_json__WEBPACK_IMPORTED_MODULE_11__["data"].find(function (articleData) {
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
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.5335010bf07017556c45.hot-update.js.map