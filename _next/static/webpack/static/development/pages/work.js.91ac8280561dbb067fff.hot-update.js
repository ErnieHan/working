webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./components/Dynamic/index.js":
/*!*************************************!*\
  !*** ./components/Dynamic/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var DynamicWorkingComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    return __webpack_require__("./components/Work lazy recursive ^\\.\\/.*$")("./".concat(props.id));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(__webpack_require__("./components/Work weak recursive ^\\.\\/.*$").resolve("./".concat(props.id)))];
      },
      modules: ["../../components/Work/".concat(props.id)]
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DynamicWorkingComponent, null));
});

/***/ }),

/***/ "./components/Work lazy recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./components/Work lazy ^\.\/.*$ namespace object ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./youtube-video-api": [
		"./components/Work/youtube-video-api/index.js",
		3,
		2
	],
	"./youtube-video-api/": [
		"./components/Work/youtube-video-api/index.js",
		3,
		2
	],
	"./youtube-video-api/index": [
		"./components/Work/youtube-video-api/index.js",
		3,
		2
	],
	"./youtube-video-api/index.js": [
		"./components/Work/youtube-video-api/index.js",
		3,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./components/Work lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./components/Work weak recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./components/Work weak ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./youtube-video-api": "./components/Work/youtube-video-api/index.js",
	"./youtube-video-api/": "./components/Work/youtube-video-api/index.js",
	"./youtube-video-api/index": "./components/Work/youtube-video-api/index.js",
	"./youtube-video-api/index.js": "./components/Work/youtube-video-api/index.js"
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
webpackContext.id = "./components/Work weak recursive ^\\.\\/.*$";
module.exports = webpackContext;

/***/ })

})
//# sourceMappingURL=work.js.91ac8280561dbb067fff.hot-update.js.map