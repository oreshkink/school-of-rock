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

	// Главная страница сайта
	__webpack_require__(15);

	// Контакты
	__webpack_require__(17);

	// О школе
	__webpack_require__(19);

	// Список направлений
	__webpack_require__(21);

	// Детальная страница направления
	__webpack_require__(23);

	// Список преподавателей
	__webpack_require__(25);

	// Список преподавателей
	__webpack_require__(27);

	// Цены
	__webpack_require__(29);

	// Цены
	__webpack_require__(31);

	__webpack_require__(33);
	__webpack_require__(35);

	__webpack_require__(36);
	__webpack_require__(38);

	$(function () {
	    var $teachersList = $('.teachers-list');
	    var $backCallSuccessAlert = $('.mail-alert.alert-success');
	    var $backCallDangerAlert = $('.mail-alert.alert-danger');

	    var $backCallWindow = $('.back-call-window');
	    var $backCallForm = $backCallWindow.find('form');

	    $teachersList.owlCarousel({
	        items: 6,
	        margin: 10
	    });

	    $backCallForm.submit(function (e) {
	        e.preventDefault();

	        $.post('/send-mail', $backCallForm.serialize()).done(function (response) {
	            $backCallWindow.modal('hide');
	            $backCallSuccessAlert.show();
	        }).fail(function (response) {
	            $backCallWindow.modal('hide');
	            $backCallDangerAlert.show();
	        });
	    });

	    $('.free-lesson').click(function (e) {
	        e.preventDefault();
	        $backCallWindow.modal('show');
	    });

	    $('.phone-me').click(function (e) {
	        e.preventDefault();
	        $backCallWindow.modal('show');
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./reset.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./reset.styl");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./layout.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./layout.styl");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./buttons.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./buttons.styl");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./toolbar.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./toolbar.styl");
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
	exports.push([module.id, ".site-toolbar {\n  display: flex;\n  height: 110px;\n  align-items: center;\n}\n.site-toolbar .logo {\n  flex: 0 0 170px;\n  height: 45px;\n}\n.site-toolbar .logo .logo-img {\n  display: block;\n  margin-left: 40px;\n  width: 95px;\n  height: 100%;\n  background: url(\"/logo.png\") 100% 100% no-repeat;\n}\n.site-toolbar .main-menu-wrapper {\n  width: 100%;\n  font-size: 14pt;\n}\n.site-toolbar .main-menu-wrapper .main-menu {\n  display: flex;\n  min-width: 720px;\n  justify-content: center;\n  padding: 0;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: 'LatoWebBlack';\n}\n.site-toolbar .main-menu-wrapper .main-menu .main-menu-section {\n  list-style: none;\n  padding: 0 10px;\n  margin: 0;\n}\n.site-toolbar .main-menu-wrapper .main-menu .main-menu-section a {\n  color: #fff;\n  text-decoration: none;\n}\n.site-toolbar .main-menu-wrapper .main-menu .main-menu-section a:hover {\n  color: #fffec9;\n}\n.site-toolbar .contacts {\n  display: flex;\n  align-items: center;\n  flex: 0 0 240px;\n  height: 45px;\n}\n.site-toolbar .contacts .address {\n  color: #fff;\n}\n.site-toolbar .contacts .address .city {\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 24px;\n}\n.site-toolbar .contacts .address .phone {\n  display: block;\n  text-decoration: none;\n}\n.site-toolbar .contacts .map-label {\n  display: block;\n  background: url(\"/map-label.png\") no-repeat 12px 10px;\n  background-color: #fff;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  opacity: 0.15;\n  margin-left: 20px;\n}\n.site-toolbar .contacts .map-label:hover {\n  opacity: 1;\n}\n", ""]);

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./fonts.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./fonts.styl");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./markdown.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./markdown.styl");
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
	exports.push([module.id, ".markdown {\n  margin: 40px 0;\n  line-height: 1.4;\n}\n.markdown p {\n  margin: 10px 0;\n}\n.markdown h2 {\n  font-size: 32px;\n  font-weight: normal;\n}\n.markdown h3 {\n  font-size: 20px;\n  font-weight: normal;\n}\n.markdown ul {\n  margin: 20px 0;\n}\n.markdown ul li {\n  margin: 5px 0 5px 25px;\n  list-style: disc;\n}\n.markdown ul ul {\n  margin: 10px 0;\n}\n.markdown ul ul li {\n  list-style: circle;\n  margin: 5px 0 5px 20px;\n}\n.markdown blockquote {\n  line-height: 1.4em;\n  width: 500px;\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 18px;\n  border-left: 5px solid #eee;\n}\n.markdown hr {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border: 0;\n  border-top: 2px solid #676767;\n}\n", ""]);

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./index.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./index.styl");
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
	exports.push([module.id, ".main-info {\n  display: flex;\n  width: 1100px;\n  margin: 5px auto 100px auto;\n  color: #fff;\n}\n.main-info .main-brand-info {\n  flex: 0 0 600px;\n}\n.main-info .main-brand-info .name-en {\n  font-family: 'LatoWebBlack';\n  font-size: 85px;\n}\n.main-info .main-brand-info .name-ru {\n  font-family: 'LatoWebThin';\n  margin-top: -10px;\n  font-size: 72px;\n  font-weight: 100;\n}\n.main-info .main-brand-info .description {\n  font-family: 'LatoWebThin';\n  margin-top: 20px;\n  font-size: 20px;\n  line-height: 22px;\n}\n.main-info .main-brand-info .read-more {\n  margin-top: 25px;\n}\n.main-info .main-brand-info .read-more a {\n  font-size: 19px;\n  color: #a89891;\n}\n.main-info .main-brand-info .promo-toolbar {\n  margin-top: 35px;\n}\n.main-info .main-brand-info .promo-toolbar .btn {\n  margin-right: 20px;\n}\n.main-info .commercial {\n  flex: 0 0 550px;\n  padding-left: 180px;\n  margin-top: 42px;\n  box-sizing: border-box;\n}\n.main-info .commercial .logo {\n  font-size: 32px;\n}\n.main-info .commercial .logo a {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.main-info .commercial .logo a:hover {\n  color: #fffec9;\n}\n.main-info .commercial .description {\n  font-size: 18px;\n  margin-top: 15px;\n}\n", ""]);

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./contacts.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./contacts.styl");
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
	exports.push([module.id, ".contacts-page {\n  color: #fff;\n}\n.contacts-page h1 {\n  margin-bottom: 40px;\n}\n.contacts-page h2 {\n  font-size: 26px;\n  margin: 12px 0;\n}\n.contacts-page .contacts {\n  margin: 80px auto 40px auto;\n  width: 1110px;\n}\n.contacts-page .contacts .contacts-info {\n  display: flex;\n}\n.contacts-page .contacts .contacts-info ul {\n  margin: 20px 0;\n}\n.contacts-page .contacts .contacts-info ul li {\n  margin: 10px 0;\n}\n.contacts-page .contacts .contacts-info ul .description {\n  display: inline-block;\n  margin-right: 10px;\n}\n.contacts-page .contacts .contacts-info ul .value {\n  display: inline-block;\n}\n.contacts-page .contacts .contacts-info .contact-address {\n  width: 50%;\n}\n.contacts-page .contacts .contacts-info .contact-time {\n  width: 50%;\n}\n.contacts-page .contacts .how-to-get {\n  margin-top: 40px;\n  line-height: 1.4;\n}\n.contacts-page .map {\n  background: #000 url(\"/map.jpg\") no-repeat center center;\n  height: 578px;\n  margin-bottom: 60px;\n}\n", ""]);

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./about.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./about.styl");
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
	exports.push([module.id, ".about-page {\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n.about-page .school-description {\n  width: 640px;\n}\n.about-page .school-description .title {\n  font-size: 80px;\n  font-family: 'LatoWebBlack';\n}\n.about-page .school-description .description {\n  margin-top: 10px;\n}\n.about-page .school-description .description .thesis {\n  font-size: 32px;\n}\n.about-page .school-description .description .quote-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.about-page .school-description .description .quote-wrapper .quote {\n  border-left: 3px solid #fff;\n  padding-left: 10px;\n  padding-top: 6px;\n  width: 350px;\n  font-size: 16px;\n  font-style: italic;\n}\n.about-page .school-description .description .quote-wrapper .quote p {\n  margin-bottom: 6px;\n}\n.about-page .school-description .description .detail-description {\n  margin-bottom: 10px;\n  line-height: 22px;\n}\n.about-page .school-description .description .detail-description p {\n  margin-bottom: 10px;\n}\n.about-page .school-description .description .detail-description p .make-louder {\n  font-size: 20px;\n  font-family: 'LatoWebBlack';\n}\n.about-page .school-description .description .detail-description ul li {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n.about-page .commercial {\n  width: 300px;\n  margin-left: 80px;\n}\n.about-page .commercial .repetirui {\n  margin-top: 15px;\n}\n.about-page .commercial .repetirui .repetirui-title {\n  display: flex;\n  align-items: flex-end;\n}\n.about-page .commercial .repetirui .repetirui-title .repetirui-icon {\n  background: url(\"/repetirui.png\") no-repeat center center;\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n}\n.about-page .commercial .repetirui .repetirui-title a {\n  font-size: 26px;\n  font-family: 'LatoWebBlack';\n  text-transform: uppercase;\n  color: #fff;\n}\n.about-page .commercial .repetirui .repetirui-description {\n  margin-top: 20px;\n  line-height: 24px;\n}\n.about-page .commercial .try-it {\n  margin-top: 30px;\n}\n.about-page .commercial .try-it .try-it-title {\n  display: flex;\n  align-items: center;\n  font-size: 26px;\n  font-family: 'LatoWebBlack';\n}\n.about-page .commercial .try-it .try-it-title .try-it-icon {\n  background: url(\"/try-it.png\") no-repeat center center;\n  width: 31px;\n  height: 31px;\n  margin-right: 10px;\n}\n.about-page .commercial .try-it .try-it-buttons {\n  margin-top: 20px;\n}\n.about-page .commercial .try-it .try-it-buttons .btn {\n  margin-bottom: 15px;\n}\n", ""]);

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./instruments.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./instruments.styl");
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
	exports.push([module.id, ".instruments-list-page {\n  width: 1110px;\n  margin: auto;\n  color: #eee;\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n.instruments-list-page a {\n  color: #fff;\n}\n.instruments-list-page .title {\n  font-family: 'LatoWebBlack';\n  font-size: 60px;\n}\n.instruments-list-page .instruments-list {\n  margin-top: 45px;\n  font-family: 'LatoWebThin';\n}\n.instruments-list-page .instruments-list .instrument {\n  display: flex;\n  padding: 40px;\n  background-color: rgba(16,70,93,0.4);\n}\n.instruments-list-page .instruments-list .instrument .instrument-description {\n  flex: 0 0 610px;\n}\n.instruments-list-page .instruments-list .instrument .instrument-description .instrument-name {\n  font-size: 40px;\n  margin-bottom: 15px;\n}\n.instruments-list-page .instruments-list .instrument .instrument-description .instrument-specification {\n  font-size: 20px;\n  line-height: 25px;\n}\n.instruments-list-page .instruments-list .instrument .teacher {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: 50px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-photo {\n  flex: 0 0 150px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-photo img {\n  width: 100%;\n  height: 100%;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-photo img.colored {\n  display: block;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-name {\n  margin-left: 20px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-name .teacher-title {\n  font-family: 'LatoWeb';\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.instruments-list-page .instruments-list .instrument .teacher .teacher-name .teacher-fullname {\n  font-size: 22px;\n}\n.instruments-list-page .instruments-list .instrument:nth-child(2n) {\n  background: none;\n}\n.instruments-list-page .instruments-list .instrument:hover .teacher .teacher-photo img.colored {\n  display: block;\n}\n", ""]);

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./instrument.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./instrument.styl");
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
	exports.push([module.id, ".instrument-detail-page {\n  color: #fff;\n  margin: 80px auto;\n  width: 1110px;\n  display: flex;\n  justify-content: space-between;\n}\n.instrument-detail-page .main {\n  flex: 0 0 640px;\n}\n.instrument-detail-page .main .title {\n  font-family: 'LatoWebBlack';\n  font-size: 80px;\n}\n.instrument-detail-page .main .teachers {\n  margin: 15px 0;\n  font-size: 40px;\n  font-family: 'LatoWebThin';\n}\n.instrument-detail-page .additional {\n  flex: 0 0 380px;\n}\n.instrument-detail-page .additional .instruments {\n  margin-top: 20px;\n}\n.instrument-detail-page .additional .instruments li {\n  margin: 8px 0;\n}\n.instrument-detail-page .additional .try-it {\n  margin-top: 30px;\n}\n.instrument-detail-page .additional .try-it .try-it-title {\n  display: flex;\n  align-items: center;\n  font-size: 26px;\n  font-family: 'LatoWebBlack';\n}\n.instrument-detail-page .additional .try-it .try-it-title .try-it-icon {\n  background: url(\"/try-it.png\") no-repeat center center;\n  width: 31px;\n  height: 31px;\n  margin-right: 10px;\n}\n.instrument-detail-page .additional .try-it .try-it-buttons {\n  margin-top: 20px;\n}\n.instrument-detail-page .additional .try-it .try-it-buttons .btn {\n  margin-bottom: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./teachers.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./teachers.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".teachers-list-page {\n  width: 1110px;\n  margin: auto;\n  color: #eee;\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n.teachers-list-page .teachers-list {\n  margin: 50px 0;\n}\n.teachers-list-page .teachers-list .teacher {\n  display: flex;\n  width: 150px;\n  height: 450px;\n}\n.teachers-list-page .teachers-list .teacher .description {\n  flex: 0 0 30px;\n  height: 100%;\n  position: relative;\n}\n.teachers-list-page .teachers-list .teacher .description .name {\n  transform: rotate(90deg);\n  transform-origin: left top 0;\n  width: 400px;\n  position: absolute;\n  left: 23px;\n}\n.teachers-list-page .teachers-list .teacher .description .name .instrument:before {\n  margin: 0 10px;\n  content: '|';\n}\n.teachers-list-page .teachers-list .teacher .photo .bw {\n  display: block;\n}\n.teachers-list-page .teachers-list .teacher .photo .colored {\n  display: none;\n}\n.teachers-list-page .teachers-list .teacher:hover .description {\n  color: #f26a0f;\n  font-weight: bold;\n}\n.teachers-list-page .teachers-list .teacher:hover .photo .bw {\n  display: none;\n}\n.teachers-list-page .teachers-list .teacher:hover .photo .colored {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./teacher.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./teacher.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".teacher-detail-page {\n  color: #fff;\n  margin: 80px auto;\n  width: 1110px;\n  display: flex;\n  justify-content: space-between;\n}\n.teacher-detail-page .main {\n  flex: 0 0 640px;\n}\n.teacher-detail-page .additional {\n  flex: 0 0 380px;\n}\n.teacher-detail-page .additional .instruments {\n  margin-top: 20px;\n}\n.teacher-detail-page .additional .instruments li {\n  margin: 8px 0;\n}\n.teacher-detail-page .additional .try-it {\n  margin-top: 30px;\n}\n.teacher-detail-page .additional .try-it .try-it-title {\n  display: flex;\n  align-items: center;\n  font-size: 26px;\n  font-family: 'LatoWebBlack';\n}\n.teacher-detail-page .additional .try-it .try-it-title .try-it-icon {\n  background: url(\"/try-it.png\") no-repeat center center;\n  width: 31px;\n  height: 31px;\n  margin-right: 10px;\n}\n.teacher-detail-page .additional .try-it .try-it-buttons {\n  margin-top: 20px;\n}\n.teacher-detail-page .additional .try-it .try-it-buttons .btn {\n  margin-bottom: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./price.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./price.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".price {\n  color: #fff;\n  margin: 80px auto;\n  width: 1110px;\n}\n.price .price-lessons {\n  margin: 40px 0;\n}\n.price .price-lessons ul {\n  font-size: 26px;\n  display: flex;\n  margin: 30px 0 20px 0;\n}\n.price .price-lessons ul li {\n  width: 50%;\n}\n.price .price-lessons ul li .description {\n  color: #fffec9;\n  margin-bottom: 10px;\n}\n.price .price-lessons ul li .value {\n  font-size: 16px;\n}\n.price .price-lessons .price-lessons-description p {\n  padding: 2px 0;\n}\n.price .price-lessons-results {\n  margin: 40px 0;\n  display: flex;\n}\n.price .price-lessons-results ul li {\n  margin: 10px 0;\n}\n.price .price-lessons-results > div {\n  width: 50%;\n}\n.price .price-lessons-results .price-lessons-results-title {\n  font-size: 26px;\n  color: #fffec9;\n  margin-bottom: 10px;\n}\n.price .price-types {\n  margin: 20px 0;\n  display: flex;\n}\n.price .price-types > div {\n  width: 50%;\n}\n.price .price-types .price-types-title {\n  margin-bottom: 10px;\n  color: #fffec9;\n  font-size: 26px;\n}\n.price .price-types ul li {\n  display: flex;\n  margin-bottom: 10px;\n  color: #f26a0f;\n  font-size: 18px;\n}\n.price .price-types ul li .description {\n  margin-right: 20px;\n}\n.price .price-sales-title {\n  margin-bottom: 10px;\n  color: #fffec9;\n  font-size: 26px;\n}\n.price .price-sales {\n  color: #f26a0f;\n  font-size: 18px;\n}\n.price .price-sales td {\n  padding: 10px 10px 10px 0;\n}\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./videos.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./videos.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".videos-page {\n  color: #fff;\n  margin: 80px auto 40px auto;\n  width: 1110px;\n}\n.videos-page h1 {\n  margin-bottom: 40px;\n}\n.videos-page h2 {\n  font-size: 26px;\n  margin: 12px 0;\n}\n.videos-page .videos-list {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: wrap;\n}\n.videos-page .videos-list .video-item {\n  flex: 0 0 530px;\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n.videos-page .videos-list .video-item .video-title {\n  margin-bottom: 10px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./alert.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./alert.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".alert {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 250px;\n  padding: 15px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert.hide {\n  display: none;\n}\n\n.alert h4 {\n  margin: 10px 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p, .alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #DFF0D8;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #DFF0D8;\n}\n\n.alert-success .alert-link {\n  color: #3c763d;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #E0CCCC;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #E0CCCC;\n}\n\n.alert-danger .alert-link {\n  color: #a94442;\n}\n\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.7
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]';
	  var Alert = function Alert(el) {
	    $(el).on('click', dismiss, this.close);
	  };

	  Alert.VERSION = '3.3.7';

	  Alert.TRANSITION_DURATION = 150;

	  Alert.prototype.close = function (e) {
	    var $this = $(this);
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = $(selector === '#' ? [] : selector);

	    if (e) e.preventDefault();

	    if (!$parent.length) {
	      $parent = $this.closest('.alert');
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'));

	    if (e.isDefaultPrevented()) return;

	    $parent.removeClass('in');

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.hide();
	    }

	    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
	  };

	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.alert');

	      if (!data) $this.data('bs.alert', data = new Alert(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.alert;

	  $.fn.alert = Plugin;
	  $.fn.alert.Constructor = Alert;

	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old;
	    return this;
	  };

	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
	}(jQuery);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  color: black;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  -o-transition:      -o-transform .3s ease-out;\n  transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  text-align: center;\n  font-size: 28px;\n  font-weight: normal;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.modal form {\n  width: 350px;\n  margin: auto;\n  overflow: hidden;\n}\n\n.modal form div {\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 24px;\n}\n\n.modal form input {\n  padding: 3px;\n  width: 200px;\n  height: 24px;\n  border-radius: 2px;\n}\n\n.modal form button {\n  float: right;\n  cursor: pointer;\n  background-color: #f26a0f;\n  width: 100%;\n}", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.7
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function Modal(element, options) {
	    this.options = options;
	    this.$body = $(document.body);
	    this.$element = $(element);
	    this.$dialog = this.$element.find('.modal-dialog');
	    this.$backdrop = null;
	    this.isShown = null;
	    this.originalBodyPad = null;
	    this.scrollbarWidth = 0;
	    this.ignoreBackdropClick = false;

	    if (this.options.remote) {
	      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
	        this.$element.trigger('loaded.bs.modal');
	      }, this));
	    }
	  };

	  Modal.VERSION = '3.3.7';

	  Modal.TRANSITION_DURATION = 300;
	  Modal.BACKDROP_TRANSITION_DURATION = 150;

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  };

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget);
	  };

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this;
	    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

	    this.$element.trigger(e);

	    if (this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = true;

	    this.checkScrollbar();
	    this.setScrollbar();
	    this.$body.addClass('modal-open');

	    this.escape();
	    this.resize();

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
	      });
	    });

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade');

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body); // don't move modals dom position
	      }

	      that.$element.show().scrollTop(0);

	      that.adjustDialog();

	      if (transition) {
	        that.$element[0].offsetWidth; // force reflow
	      }

	      that.$element.addClass('in');

	      that.enforceFocus();

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

	      transition ? that.$dialog // wait for modal to slide in
	      .one('bsTransitionEnd', function () {
	        that.$element.trigger('focus').trigger(e);
	      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
	    });
	  };

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault();

	    e = $.Event('hide.bs.modal');

	    this.$element.trigger(e);

	    if (!this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = false;

	    this.escape();
	    this.resize();

	    $(document).off('focusin.bs.modal');

	    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

	    this.$dialog.off('mousedown.dismiss.bs.modal');

	    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
	  };

	  Modal.prototype.enforceFocus = function () {
	    $(document).off('focusin.bs.modal') // guard against infinite focus loop
	    .on('focusin.bs.modal', $.proxy(function (e) {
	      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	        this.$element.trigger('focus');
	      }
	    }, this));
	  };

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide();
	      }, this));
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal');
	    }
	  };

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
	    } else {
	      $(window).off('resize.bs.modal');
	    }
	  };

	  Modal.prototype.hideModal = function () {
	    var that = this;
	    this.$element.hide();
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open');
	      that.resetAdjustments();
	      that.resetScrollbar();
	      that.$element.trigger('hidden.bs.modal');
	    });
	  };

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove();
	    this.$backdrop = null;
	  };

	  Modal.prototype.backdrop = function (callback) {
	    var that = this;
	    var animate = this.$element.hasClass('fade') ? 'fade' : '';

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate;

	      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false;
	          return;
	        }
	        if (e.target !== e.currentTarget) return;
	        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
	      }, this));

	      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

	      this.$backdrop.addClass('in');

	      if (!callback) return;

	      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in');

	      var callbackRemove = function callbackRemove() {
	        that.removeBackdrop();
	        callback && callback();
	      };
	      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
	    } else if (callback) {
	      callback();
	    }
	  };

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog();
	  };

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

	    this.$element.css({
	      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    });
	  };

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    });
	  };

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    this.scrollbarWidth = this.measureScrollbar();
	  };

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
	    this.originalBodyPad = document.body.style.paddingRight || '';
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
	  };

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad);
	  };

	  Modal.prototype.measureScrollbar = function () {
	    // thx walsh
	    var scrollDiv = document.createElement('div');
	    scrollDiv.className = 'modal-scrollbar-measure';
	    this.$body.append(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    this.$body[0].removeChild(scrollDiv);
	    return scrollbarWidth;
	  };

	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.modal');
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data) $this.data('bs.modal', data = new Modal(this, options));
	      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
	    });
	  }

	  var old = $.fn.modal;

	  $.fn.modal = Plugin;
	  $.fn.modal.Constructor = Modal;

	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old;
	    return this;
	  };

	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this = $(this);
	    var href = $this.attr('href');
	    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

	    if ($this.is('a')) e.preventDefault();

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus');
	      });
	    });
	    Plugin.call($target, option, this);
	  });
	}(jQuery);

/***/ }
/******/ ]);