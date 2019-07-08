webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./components/Work lazy recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./components/Work lazy ^\.\/.*$ namespace object ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login-and-register": [
		"./components/Work/login-and-register/index.js",
		7,
		2
	],
	"./login-and-register/": [
		"./components/Work/login-and-register/index.js",
		7,
		2
	],
	"./login-and-register/index": [
		"./components/Work/login-and-register/index.js",
		7,
		2
	],
	"./login-and-register/index.js": [
		"./components/Work/login-and-register/index.js",
		7,
		2
	],
	"./youtube-video-api": [
		"./components/Work/youtube-video-api/index.js",
		9,
		1,
		4
	],
	"./youtube-video-api/": [
		"./components/Work/youtube-video-api/index.js",
		9,
		1,
		4
	],
	"./youtube-video-api/index": [
		"./components/Work/youtube-video-api/index.js",
		9,
		1,
		4
	],
	"./youtube-video-api/index.js": [
		"./components/Work/youtube-video-api/index.js",
		9,
		1,
		4
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
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, ids[1])
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
	"./login-and-register": "./components/Work/login-and-register/index.js",
	"./login-and-register/": "./components/Work/login-and-register/index.js",
	"./login-and-register/index": "./components/Work/login-and-register/index.js",
	"./login-and-register/index.js": "./components/Work/login-and-register/index.js",
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
//# sourceMappingURL=work.js.9dd24bfaede808df3496.hot-update.js.map