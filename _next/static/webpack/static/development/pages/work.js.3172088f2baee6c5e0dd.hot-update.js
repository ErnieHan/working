webpackHotUpdate("static\\development\\pages\\work.js",{

/***/ "./components/Work lazy recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./components/Work lazy ^\.\/.*$ namespace object ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./youtube-video-api": [
		"./components/Work/youtube-video-api/index.js",
		1
	],
	"./youtube-video-api/": [
		"./components/Work/youtube-video-api/index.js",
		1
	],
	"./youtube-video-api/index": [
		"./components/Work/youtube-video-api/index.js",
		1
	],
	"./youtube-video-api/index.js": [
		"./components/Work/youtube-video-api/index.js",
		1
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
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./components/Work lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=work.js.3172088f2baee6c5e0dd.hot-update.js.map