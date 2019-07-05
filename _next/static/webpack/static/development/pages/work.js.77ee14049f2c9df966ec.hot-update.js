webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./node_modules/next-server/dist/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/dynamic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next-server/dist/lib/loadable.js"));

var isServerSide = typeof window === 'undefined';

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  } // This will only be rendered on the server side


  return function () {
    return react_1.default.createElement(loadableOptions.loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR;

function DefaultLoading() {
  return react_1.default.createElement("p", null, "loading...");
}

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1.default;
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return react_1.default.createElement(DefaultLoading, null);
        }

        if (error) {
          return react_1.default.createElement("p", null, error.message, react_1.default.createElement("br", null), error.stack);
        }
      }

      return react_1.default.createElement(DefaultLoading, null);
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (typeof dynamicOptions.then === 'function') {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = (0, _assign.default)({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = (0, _assign.default)({}, loadableOptions, options); // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })

  if (dynamicOptions.render) {
    loadableOptions.render = function (loaded, props) {
      return dynamicOptions.render(props, loaded);
    };
  } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


  if (dynamicOptions.modules) {
    loadableFn = loadable_1.default.Map;
    var loadModules = {};
    var modules = dynamicOptions.modules();
    (0, _keys.default)(modules).forEach(function (key) {
      var value = modules[key];

      if (typeof value.then === 'function') {
        loadModules[key] = function () {
          return value.then(function (mod) {
            return mod.default || mod;
          });
        };

        return;
      }

      loadModules[key] = value;
    });
    loadableOptions.loader = loadModules;
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = (0, _assign.default)({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports.default = dynamic;

/***/ }),

/***/ "./pages/work weak recursive ^\\.\\/.*\\.js$":
/*!**************************************!*\
  !*** ./pages/work weak ^\.\/.*\.js$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./pages/work/index.js",
	"./work-css.js": "./pages/work/work-css.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = "./pages/work weak recursive ^\\.\\/.*\\.js$";
module.exports = webpackContext;

/***/ }),

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Label */ "./components/Label/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _components_FacebookComment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/FacebookComment */ "./components/FacebookComment/index.js");
/* harmony import */ var _work_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./work-css */ "./pages/work/work-css.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar/index.js");




















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
        return next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
          return __webpack_require__("./pages/work lazy recursive ^\\.\\/.*\\.js$")("./".concat(component, ".js"));
        }, {
          loadableGenerated: {
            webpack: function webpack() {
              return [/*require.resolve*/(__webpack_require__("./pages/work weak recursive ^\\.\\/.*\\.js$").resolve("./".concat(component, ".js")))];
            },
            modules: ["./".concat(component, ".js")]
          }
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
      var href = "".concat(_constants__WEBPACK_IMPORTED_MODULE_15__["GH_PAGE_URL"], "/work/").concat(url);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_MetaHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "".concat(title, " ").concat(subtitle, " | Ernie Working Note \u723E\u5C3C\u5DE5\u4F5C\u7B46\u8A18")
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_WebHeadForWorkPage__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["ArticleTitle"], null, title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["ArticleSubTitle"], null, subtitle, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("iframe", {
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
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["Author"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "author-image"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "author-name-and-labels"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "author-name"
      }, author), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["DateAndLabels"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "date"
      }, date), labels.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Label__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: i,
          name: label.labelName,
          type: label.labelCode
        });
      }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["MainPhoto"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_work_css__WEBPACK_IMPORTED_MODULE_17__["Layout"], {
        ref: "element"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        showSidebar: this.state.showSidebar,
        articleData: this.props.articleData
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FacebookComment__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
//# sourceMappingURL=work.js.77ee14049f2c9df966ec.hot-update.js.map