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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data.json */ "./pages/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./pages/data.json", 1);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Label */ "./components/Label/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _components_CodeSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/CodeSection */ "./components/CodeSection/index.js");















var Layout = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "work__Layout",
  componentId: "sc-18ssuvp-0"
})(["max-width:980px;padding:0px 15px;margin:35px auto;"]);
var ArticleTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h1.withConfig({
  displayName: "work__ArticleTitle",
  componentId: "sc-18ssuvp-1"
})(["font-family:\"Galano\";font-size:48px;"]);
var ArticleSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h2.withConfig({
  displayName: "work__ArticleSubTitle",
  componentId: "sc-18ssuvp-2"
})(["color:#aaaaaa;font-size:20px;display:flex;align-items:center;"]);
var Author = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "work__Author",
  componentId: "sc-18ssuvp-3"
})(["margin-top:10px;.author-image{width:50px;height:50px;background:url(\"/static/img/48131029873_302ed67e3d_z.jpg\") no-repeat center;border-radius:50%;background-size:cover;float:left;}.author-name-and-labels{float:left;margin-left:15px;.author-name{margin:0;font-size:17px;margin-bottom:5px;}}&::after{content:\"\";display:block;clear:both;}"]);
var MainPhoto = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "work__MainPhoto",
  componentId: "sc-18ssuvp-4"
})(["width:100%;height:400px;background:url(\"/static/img/work/main/thumb-1920-795968.png\") no-repeat center;background-size:cover;"]);
var DateAndLabels = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "work__DateAndLabels",
  componentId: "sc-18ssuvp-5"
})(["display:flex;align-items:center;.date{margin:0;color:#aaaaaa;padding-right:10px;}.label-tag{margin-top:0 !important;}"]);
var FollowButton = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button.withConfig({
  displayName: "work__FollowButton",
  componentId: "sc-18ssuvp-6"
})(["border:1px solid black;border-radius:5px;background:white;margin-left:5px;padding:1px 10px;&:hover{background:#000;color:#fff;}"]);
var Response = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "work__Response",
  componentId: "sc-18ssuvp-7"
})([""]);

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
      var href = "".concat(_constants__WEBPACK_IMPORTED_MODULE_13__["GH_PAGE_URL"], "/work/").concat(url);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MetaHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "".concat(title, " | \u723E\u5C3C\u5DE5\u4F5C\u5143\u4EF6")
      }), console.log("目前網址:", href), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Layout, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ArticleTitle, null, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ArticleSubTitle, null, subtitle, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
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
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Author, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-image"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "author-name-and-labels"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "author-name"
      }, author), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateAndLabels, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "date"
      }, date), labels.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Label__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: i,
          name: label.labelName,
          background: "#67C867"
        });
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MainPhoto, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Layout, null, "\u900F\u904E\u4E0D\u540C\u7684\u7DB2\u7AD9", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CodeSection__WEBPACK_IMPORTED_MODULE_14__["default"], null, "import React, { Component } from \"react\";\nimport { Dialog, Button } from \"dawn-react-ui-lib\";\n\nclass Example extends Component{\n    state={\n      open: false\n    }\n    // \u4F7F\u7528\u8005\u81EA\u884C\u5B9A\u7FA9\u7684Button\u7684\u9EDE\u64CA\u4E8B\u4EF6\n    openDialog = () => {\n      this.setState({\n        open:true\n      })\n    }\n    // \u50B3\u4E0B\u53BB\u7D66Dialog\u95DC\u9589\u756B\u9762\u7684\u4E8B\u4EF6\n    closeDialog = () => {\n      this.setState({\n        open:false\n      })\n    }\n    render(){\n        return(\n          <div>\n            <Button\n              text=\"\u7528\u6236\u78BA\u8A8D\u5C0D\u8A71\u6846\"\n              onClick={this.openDialog}\n              width=\"250px\"\n              padding=\"16px\"\n            />\n            <Dialog\n              open={this.state.open}\n              handleClose={this.closeDialog}\n              contentHeader=\"\u6A19\u984C\u6587\u5B57\"\n              contentBody={<div>\u5167\u5BB9</div>}\n              userAgree\n              userAgreeFunc={() => {\n                alert(\"\u81EA\u5B9A\u7FA9\u78BA\u8A8D\u4E8B\u4EF6\");\n              }}\n            />\n          </div>\n        )\n    }\n}\n\nexport default Example;"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", null, "\u67E5\u770B\u7559\u8A00()"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Response, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "fb-comments",
        "data-href": href,
        "data-width": "100%",
        "data-numposts": "5"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "fb-root"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        async: true,
        defer: true,
        crossOrigin: "anonymous",
        src: "https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.3"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          height: "2000px"
        }
      }));
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
//# sourceMappingURL=work.js.de7d4aac373b9fd8ad0a.hot-update.js.map