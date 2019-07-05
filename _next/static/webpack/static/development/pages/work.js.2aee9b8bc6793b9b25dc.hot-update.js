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
/* harmony import */ var _components_MetaHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MetaHead */ "./components/MetaHead.js");
/* harmony import */ var _components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/WebHeadForWorkPage */ "./components/WebHeadForWorkPage/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data.json */ "./pages/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./pages/data.json", 1);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Label */ "./components/Label/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _components_CodeSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/CodeSection */ "./components/CodeSection/index.js");
/* harmony import */ var _components_FacebookComment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/FacebookComment */ "./components/FacebookComment/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _work_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./work-css */ "./pages/work/work-css.js");


















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
          url = _this$props$articleDa.url;
      var href = "".concat(_constants__WEBPACK_IMPORTED_MODULE_12__["GH_PAGE_URL"], "/work/").concat(url);
      var DynamicWorkingComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(function () {
        return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Work/youtube-video-api */ "./components/Work/youtube-video-api/index.js"));
      }, {
        loadableGenerated: {
          webpack: function webpack() {
            return [/*require.resolve*/(/*! ../../components/Work/youtube-video-api */ "./components/Work/youtube-video-api/index.js")];
          },
          modules: ["../../components/Work/youtube-video-api"]
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MetaHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "".concat(title, " ").concat(subtitle, " | Ernie Working Note \u723E\u5C3C\u5DE5\u4F5C\u7B46\u8A18")
      }), console.log("目前網址:", href), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["ArticleTitle"], null, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["ArticleSubTitle"], null, subtitle, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
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
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["Author"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-image"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-name-and-labels"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "author-name"
      }, author), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["DateAndLabels"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "date"
      }, date), labels.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Label__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: i,
          name: label.labelName,
          type: label.labelCode
        });
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["MainPhoto"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_16__["Layout"], null, "\u900F\u904E\u4E0D\u540C\u7684\u7DB2\u7AD9", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CodeSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, "import React, { Component } from \"react\";\nimport { Dialog, Button } from \"dawn-react-ui-lib\";\n\nclass Example extends Component{\n    state={\n      open: false\n    }\n    // \u4F7F\u7528\u8005\u81EA\u884C\u5B9A\u7FA9\u7684Button\u7684\u9EDE\u64CA\u4E8B\u4EF6\n    openDialog = () => {\n      this.setState({\n        open:true\n      })\n    }\n    // \u50B3\u4E0B\u53BB\u7D66Dialog\u95DC\u9589\u756B\u9762\u7684\u4E8B\u4EF6\n    closeDialog = () => {\n      this.setState({\n        open:false\n      })\n    }\n    render(){\n        return(\n          <div>\n            <Button\n              text=\"\u7528\u6236\u78BA\u8A8D\u5C0D\u8A71\u6846\"\n              onClick={this.openDialog}\n              width=\"250px\"\n              padding=\"16px\"\n            />\n            <Dialog\n              open={this.state.open}\n              handleClose={this.closeDialog}\n              contentHeader=\"\u6A19\u984C\u6587\u5B57\"\n              contentBody={<div>\u5167\u5BB9</div>}\n              userAgree\n              userAgreeFunc={() => {\n                alert(\"\u81EA\u5B9A\u7FA9\u78BA\u8A8D\u4E8B\u4EF6\");\n              }}\n            />\n          </div>\n        )\n    }\n}\n\nexport default Example;"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FacebookComment__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
                articleData = _data_json__WEBPACK_IMPORTED_MODULE_10__["data"].find(function (articleData) {
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
//# sourceMappingURL=work.js.2aee9b8bc6793b9b25dc.hot-update.js.map