/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(13);

	//require('./routes/about.styl');

	// Главная страница сайта
	__webpack_require__(15);

	// Список направлений
	__webpack_require__(17);

	// Детальная страница направления
	__webpack_require__(19);

	// Список преподавателей
	__webpack_require__(21);

	// Список преподавателей
	__webpack_require__(23);

	$(function () {
	    $('.teachers-list').owlCarousel({
	        items: 6,
	        margin: 10
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./reset.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./reset.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  background: transparent;\n  border: 0;\n  font-size: 100%;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\nul li {\n  list-style: none;\n}\nbody {\n  line-height: 1;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nnav ul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\na {\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n}\nins {\n  background-color: #ff9;\n  color: #000;\n}\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\ndel {\n  text-decoration: line-through;\n}\nabbr[title] border-bottom 1px dotted,\ndfn[title] border-bottom 1px dotted {\n  cursor: help;\ntable\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* change border colour to suit your needs */\nhr {\n  border: 0;\n  padding: 0;\n}\nhr border-top 1px solid #ccc {\n  display: block;\n}\nhr border-top 1px solid #ccc height 1px {\n  margin: 1em 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./layout.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./layout.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'LatoWeb';\n  background: #000 url(\"/home-background.jpg\") no-repeat center center;\n  background-size: cover;\n}\na {\n  color: #fff;\n}\nh1 {\n  font-family: 'LatoWebBlack';\n  font-size: 50px;\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./buttons.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./buttons.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".btn {\n  font-family: 'LatoWebBlack';\n  display: inline-block;\n  padding: 11px 18px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n  width: 185px;\n  font-size: 18px;\n  border: 3px solid #fff;\n  border-radius: 25px;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n.btn.free-lesson {\n  background-color: #f26a0f;\n  border-color: #f26a0f;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./toolbar.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./toolbar.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".site-toolbar {\n  display: flex;\n  height: 110px;\n  align-items: center;\n}\n.site-toolbar .logo {\n  flex: 0 0 170px;\n  height: 45px;\n}\n.site-toolbar .logo .logo-img {\n  display: block;\n  margin-left: 40px;\n  width: 95px;\n  height: 100%;\n  background: url(\"/logo.png\") 100% 100% no-repeat;\n}\n.site-toolbar .main-menu-wrapper {\n  width: 100%;\n  font-size: 14pt;\n}\n.site-toolbar .main-menu-wrapper .main-menu {\n  display: flex;\n  min-width: 600px;\n  justify-content: center;\n  padding: 0;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: 'LatoWebBlack';\n}\n.site-toolbar .main-menu-wrapper .main-menu .main-menu-section {\n  list-style: none;\n  padding: 0 10px;\n  margin: 0;\n}\n.site-toolbar .main-menu-wrapper .main-menu .main-menu-section a {\n  color: #fff;\n  text-decoration: none;\n}\n.site-toolbar .main-menu-wrapper .main-menu .main-menu-section a:hover {\n  color: #fffec9;\n}\n.site-toolbar .contacts {\n  display: flex;\n  align-items: center;\n  flex: 0 0 240px;\n  height: 45px;\n}\n.site-toolbar .contacts .phone {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n}\n.site-toolbar .contacts .map-label {\n  display: block;\n  background: url(\"/map-label.png\") no-repeat 12px 10px;\n  background-color: #fff;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  opacity: 0.15;\n  margin-left: 20px;\n}\n.site-toolbar .contacts .map-label:hover {\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./fonts.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./fonts.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'LatoWeb';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/Lato/fonts/Lato-Regular.woff2\");\n  src: url(\"/Lato/fonts/Lato-Regular.woff\");\n  src: url(\"/Lato/fonts/Lato-Regular.ttf\");\n  text-rendering: optimizeLegibility;\n}\n@font-face {\n  font-family: 'LatoWebThin';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/Lato/fonts/Lato-Thin.woff2\");\n  src: url(\"/Lato/fonts/Lato-Thin.woff\");\n  src: url(\"/Lato/fonts/Lato-Thin.ttf\");\n  text-rendering: optimizeLegibility;\n}\n@font-face {\n  font-family: 'LatoWebBlack';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/Lato/fonts/Lato-Black.woff2\");\n  src: url(\"/Lato/fonts/Lato-Black.woff\");\n  src: url(\"/Lato/fonts/Lato-Black.ttf\");\n  text-rendering: optimizeLegibility;\n}\n@font-face {\n  font-family: 'LatoWeb';\n  font-style: italic;\n  font-weight: normal;\n  src: url(\"/Lato/fonts/Lato-Italic.woff2\");\n  src: url(\"/Lato/fonts/Lato-Italic.woff\");\n  src: url(\"/Lato/fonts/Lato-Italic.ttf\");\n  text-rendering: optimizeLegibility;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./markdown.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./markdown.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".markdown {\n  margin: 40px 0;\n}\n.markdown h2 {\n  font-size: 32px;\n  font-weight: normal;\n}\n.markdown h3 {\n  font-size: 20px;\n  font-weight: normal;\n}\n.markdown ul {\n  margin: 20px 0;\n}\n.markdown ul li {\n  margin: 5px 0 5px 25px;\n  list-style: disc;\n}\n.markdown ul ul {\n  margin: 10px 0;\n}\n.markdown ul ul li {\n  list-style: circle;\n  margin: 5px 0 5px 20px;\n}\n.markdown blockquote {\n  line-height: 1.4em;\n  width: 500px;\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 18px;\n  border-left: 5px solid #eee;\n}\n.markdown hr {\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border: 0;\n  border-top: 2px solid #676767;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./index.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./index.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".main-info {\n  display: flex;\n  width: 1100px;\n  margin: 180px auto auto auto;\n  color: #fff;\n}\n.main-info .main-brand-info {\n  flex: 0 0 600px;\n}\n.main-info .main-brand-info .name-en {\n  font-family: 'LatoWebBlack';\n  font-size: 85px;\n}\n.main-info .main-brand-info .name-ru {\n  font-family: 'LatoWebThin';\n  margin-top: -10px;\n  font-size: 72px;\n  font-weight: 100;\n}\n.main-info .main-brand-info .description {\n  font-family: 'LatoWebThin';\n  margin-top: 20px;\n  font-size: 20px;\n  line-height: 24px;\n}\n.main-info .main-brand-info .read-more {\n  margin-top: 25px;\n}\n.main-info .main-brand-info .read-more a {\n  font-size: 19px;\n  color: #a89891;\n}\n.main-info .main-brand-info .promo-toolbar {\n  margin-top: 35px;\n}\n.main-info .main-brand-info .promo-toolbar .btn {\n  margin-right: 20px;\n}\n.main-info .commercial {\n  flex: 0 0 550px;\n  padding-left: 180px;\n  margin-top: 42px;\n  box-sizing: border-box;\n}\n.main-info .commercial .logo {\n  font-size: 32px;\n}\n.main-info .commercial .logo a {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.main-info .commercial .logo a:hover {\n  color: #fffec9;\n}\n.main-info .commercial .description {\n  font-size: 18px;\n  margin-top: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./instruments.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./instruments.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".instruments-list-page {\n  width: 1110px;\n  margin: auto;\n  color: #eee;\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n.instruments-list-page a {\n  color: #fff;\n}\n.instruments-list-page .title {\n  font-family: 'LatoWebBlack';\n  font-size: 80px;\n}\n.instruments-list-page .instruments-list {\n  margin-top: 45px;\n  font-family: 'LatoWebThin';\n}\n.instruments-list-page .instruments-list .instrument {\n  display: flex;\n  padding: 40px;\n  background-color: rgba(16,70,93,0.4);\n}\n.instruments-list-page .instruments-list .instrument .instrument-description {\n  flex: 0 0 610px;\n}\n.instruments-list-page .instruments-list .instrument .instrument-description .instrument-name {\n  font-size: 48px;\n  margin-bottom: 30px;\n}\n.instruments-list-page .instruments-list .instrument .instrument-description .instrument-specification {\n  font-size: 20px;\n  line-height: 25px;\n}\n.instruments-list-page .instruments-list .instrument .teacher {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: 50px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-photo {\n  flex: 0 0 150px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-photo img {\n  width: 100%;\n  height: 100%;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-photo img.colored {\n  display: block;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-name {\n  margin-left: 20px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-name .teacher-title {\n  font-family: 'LatoWeb';\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-name .teacher-fullname {\n  font-size: 22px;\n}\n.instruments-list-page .instruments-list .instrument:nth-child(2n) {\n  background: none;\n}\n.instruments-list-page .instruments-list .instrument:hover .teacher .teacher-photo img.colored {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./instrument.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./instrument.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".instrument-detail-page {\n  color: #fff;\n  margin: 80px auto;\n  width: 1110px;\n  display: flex;\n  justify-content: space-between;\n}\n.instrument-detail-page .main {\n  flex: 0 0 640px;\n}\n.instrument-detail-page .main .title {\n  font-family: 'LatoWebBlack';\n  font-size: 80px;\n}\n.instrument-detail-page .main .teachers {\n  margin: 15px 0;\n  font-size: 40px;\n  font-family: 'LatoWebThin';\n}\n.instrument-detail-page .additional {\n  flex: 0 0 380px;\n}\n.instrument-detail-page .additional .instruments {\n  margin-top: 20px;\n}\n.instrument-detail-page .additional .instruments li {\n  margin: 8px 0;\n}\n.instrument-detail-page .additional .try-it {\n  margin-top: 30px;\n}\n.instrument-detail-page .additional .try-it .try-it-title {\n  display: flex;\n  align-items: center;\n  font-size: 26px;\n  font-family: 'LatoWebBlack';\n}\n.instrument-detail-page .additional .try-it .try-it-title .try-it-icon {\n  background: url(\"/try-it.png\") no-repeat center center;\n  width: 31px;\n  height: 31px;\n  margin-right: 10px;\n}\n.instrument-detail-page .additional .try-it .try-it-buttons {\n  margin-top: 20px;\n}\n.instrument-detail-page .additional .try-it .try-it-buttons .btn {\n  margin-bottom: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./teachers.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./teachers.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".teachers-list-page {\n  width: 1110px;\n  margin: auto;\n  color: #eee;\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n.teachers-list-page .teachers-list {\n  margin: 50px 0;\n}\n.teachers-list-page .teachers-list .teacher {\n  display: flex;\n  width: 150px;\n  height: 450px;\n}\n.teachers-list-page .teachers-list .teacher .description {\n  flex: 0 0 30px;\n  height: 100%;\n  position: relative;\n}\n.teachers-list-page .teachers-list .teacher .description .name {\n  transform: rotate(90deg);\n  transform-origin: left top 0;\n  width: 400px;\n  position: absolute;\n  left: 23px;\n}\n.teachers-list-page .teachers-list .teacher .description .name .instrument:before {\n  margin: 0 10px;\n  content: '|';\n}\n.teachers-list-page .teachers-list .teacher .photo .bw {\n  display: block;\n}\n.teachers-list-page .teachers-list .teacher .photo .colored {\n  display: none;\n}\n.teachers-list-page .teachers-list .teacher:hover .description {\n  color: #f26a0f;\n  font-weight: bold;\n}\n.teachers-list-page .teachers-list .teacher:hover .photo .bw {\n  display: none;\n}\n.teachers-list-page .teachers-list .teacher:hover .photo .colored {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./teacher.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./teacher.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".teacher-detail-page {\n  color: #fff;\n  margin: 80px auto;\n  width: 1110px;\n  display: flex;\n  justify-content: space-between;\n}\n.teacher-detail-page .main {\n  flex: 0 0 640px;\n}\n.teacher-detail-page .additional {\n  flex: 0 0 380px;\n}\n.teacher-detail-page .additional .instruments {\n  margin-top: 20px;\n}\n.teacher-detail-page .additional .instruments li {\n  margin: 8px 0;\n}\n.teacher-detail-page .additional .try-it {\n  margin-top: 30px;\n}\n.teacher-detail-page .additional .try-it .try-it-title {\n  display: flex;\n  align-items: center;\n  font-size: 26px;\n  font-family: 'LatoWebBlack';\n}\n.teacher-detail-page .additional .try-it .try-it-title .try-it-icon {\n  background: url(\"/try-it.png\") no-repeat center center;\n  width: 31px;\n  height: 31px;\n  margin-right: 10px;\n}\n.teacher-detail-page .additional .try-it .try-it-buttons {\n  margin-top: 20px;\n}\n.teacher-detail-page .additional .try-it .try-it-buttons .btn {\n  margin-bottom: 15px;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);