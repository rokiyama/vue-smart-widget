module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0066":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidgetGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a3bf");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidgetGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidgetGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidgetGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1ac9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-fullscreen",
  "use": "icon-fullscreen-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-fullscreen\"><path d=\"M3 12.293V9.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1H3.707l3.147-3.146a.5.5 0 1 0-.708-.708L3 12.293zm10-8.586V6.5a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793L9.147 6.146a.5.5 0 1 0 .707.708L13 3.707zM13 9.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1H13V9.5zm-10-3a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H3v3.5z\" fill=\"#666\" fill-rule=\"evenodd\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "1d80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-collapse",
  "use": "icon-collapse-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-collapse\"><defs><style type=\"text/css\"></style></defs><path d=\"M106.666667 659.2L172.8 725.333333 512 386.133333 851.2 725.333333l66.133333-66.133333L512 256z\" fill=\"#666666\" p-id=\"1563\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "21a1":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "31cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidget_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5407");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidget_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidget_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartWidget_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5407":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b62c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("29bccafc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "69ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingMask_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e94a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingMask_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingMask_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingMask_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7be8":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1156":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ad20");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c1ec597e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "18d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__("18e9");

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        if(!getObject(element)) {
            throw new Error("Element is not detectable by this strategy.");
        }

        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);
            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;";

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.position = "relative";

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style[property] = 0;
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            setTimeout(function checkForObjectDocument() {
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.setAttribute("aria-hidden", "true");
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if(browserDetector.isIE(8)) {
            element.detachEvent("onresize", getState(element).object.proxy);
        } else {
            element.removeChild(getObject(element));
        }
        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "18e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2cef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "49ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5058":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ "50bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5be5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5ed4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e21");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6e21":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9cbe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3cbd0c21", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __webpack_require__("8bbf");

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9cbe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-grid-item{-webkit-transition:all .2s ease;transition:all .2s ease;-webkit-transition-property:left,top,right;transition-property:left,top,right}.vue-grid-item.no-touch{-ms-touch-action:none;touch-action:none}.vue-grid-item.cssTransforms{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;left:0;right:auto}.vue-grid-item.cssTransforms.render-rtl{left:auto;right:0}.vue-grid-item.resizing{opacity:.6;z-index:3}.vue-grid-item.vue-draggable-dragging{-webkit-transition:none;transition:none;z-index:3}.vue-grid-item.vue-grid-placeholder{background:red;opacity:.2;-webkit-transition-duration:.1s;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.vue-grid-item>.vue-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;background:url(\"data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYiIGhlaWdodD0iNiI+PHBhdGggZD0iTTYgNkgwVjQuMmg0LjJWMEg2djZ6IiBvcGFjaXR5PSIuMzAyIi8+PC9zdmc+\");background-position:100% 100%;padding:0 3px 3px 0;background-repeat:no-repeat;background-origin:content-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:se-resize}.vue-grid-item>.vue-rtl-resizable-handle{bottom:0;left:0;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoMTJ2MTJILTF6Ii8+PGc+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InVuZGVmaW5lZCIgc3Ryb2tlLWxpbmVqb2luPSJ1bmRlZmluZWQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGQ9Ik0xNDQuODIxLTM4LjM5M2wtMjAuMzU3LTMxLjc4NSIvPjxwYXRoIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InVuZGVmaW5lZCIgc3Ryb2tlLWxpbmVqb2luPSJ1bmRlZmluZWQiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgZD0iTS45NDctLjAxOHY5LjEyNU0tLjY1NiA5aDEwLjczIi8+PC9nPjwvc3ZnPg==);background-position:0 100%;padding-left:3px;background-repeat:no-repeat;background-origin:content-box;cursor:sw-resize;right:auto}.vue-grid-item.disable-userselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);

// exports


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "abb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "ad20":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-grid-layout{position:relative;-webkit-transition:height .2s ease;transition:height .2s ease}", ""]);

// exports


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b770":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c274":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("50bf");

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c946":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__("b770").forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
    // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";
    injectScrollStyle(styleId, detectionContainerClass);

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = "position: absolute; width: " + width*2 + "px; height: " + height*2 + "px; visibility: hidden; margin: 0; padding: 0;";

        var container = document.createElement("div");
        container.style.cssText = "position: absolute; width: " + width + "px; height: " + height + "px; overflow: scroll; visibility: none; top: " + -width*3 + "px; left: " + -height*3 + "px; visibility: hidden; margin: 0; padding: 0;";

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                document.head.appendChild(element);
            };

            var styleElement = document.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!document.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { display: none; }\n\n";
            style += "." + containerAnimationActiveClass + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + containerAnimationClass + "; animation-name: " + containerAnimationClass + "; }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = window.getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;";
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.position = "relative";

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return "left: " + left + "; top: " + top + "; right: " + right + "; bottom: " + bottom + ";";
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;";
            var containerStyle          = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth);
            var expandStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var shrinkStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var expandChildStyle        = "position: absolute; left: 0; top: 0;";
            var shrinkChildStyle        = "position: absolute; width: 200%; height: 200%;";

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.width     = expandWidth + "px";
                expandChild.style.height    = expandHeight + "px";
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify the if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                var width = element.offsetWidth;
                var height = element.offsetHeight;

                if (width !== getState(element).lastWidth || height !== getState(element).lastHeight) {
                    debug("Element size changed.");
                    updateDetectorElements(notifyListenersIfNeeded);
                } else {
                    debug("Element size has not changed (" + width + "x" + height + ").");
                }
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d6eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e279":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1156");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "eec4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__("b770").forEach;
var elementUtilsMaker       = __webpack_require__("5be5");
var listenerHandlerMaker    = __webpack_require__("49ad");
var idGeneratorMaker        = __webpack_require__("2cef");
var idHandlerMaker          = __webpack_require__("5058");
var reporterMaker           = __webpack_require__("abb4");
var browserDetector         = __webpack_require__("18e9");
var batchProcessorMaker     = __webpack_require__("c274");
var stateHandler            = __webpack_require__("d6eb");

//Detection strategies.
var objectStrategyMaker     = __webpack_require__("18d2");
var scrollStrategyMaker     = __webpack_require__("c946");

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"388ee136-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridItem.vue?vue&type=template&id=c806aad8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"item",staticClass:"vue-grid-item",class:_vm.classObj,style:(_vm.style)},[_vm._t("default"),(_vm.resizableAndNotStatic)?_c('span',{ref:"handle",class:_vm.resizableHandleClass}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GridItem.vue?vue&type=template&id=c806aad8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./src/helpers/utils.js





// @flow

/*:: export type LayoutItemRequired = {w: number, h: number, x: number, y: number, i: string};*/

/*:: export type LayoutItem = LayoutItemRequired &
                         {minW?: number, minH?: number, maxW?: number, maxH?: number,
                          moved?: boolean, static?: boolean,
                          isDraggable?: ?boolean, isResizable?: ?boolean};*/

// export type Position = {left: number, top: number, width: number, height: number};

/*
export type DragCallbackData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};
*/
// export type DragEvent = {e: Event} & DragCallbackData;

/*:: export type Layout = Array<LayoutItem>;*/

// export type ResizeEvent = {e: Event, node: HTMLElement, size: Size};
// const isProduction = process.env.NODE_ENV === 'production';

/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */

/*:: export type Size = {width: number, height: number};*/

function bottom(layout
/*: Layout*/
)
/*: number*/
{
  var max = 0,
      bottomY;

  for (var i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }

  return max;
}
function cloneLayout(layout
/*: Layout*/
)
/*: Layout*/
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }

  return newLayout;
} // Fast path to cloning, since this is monomorphic

function cloneLayoutItem(layoutItem
/*: LayoutItem*/
)
/*: LayoutItem*/
{
  /*return {
    w: layoutItem.w, h: layoutItem.h, x: layoutItem.x, y: layoutItem.y, i: layoutItem.i,
    minW: layoutItem.minW, maxW: layoutItem.maxW, minH: layoutItem.minH, maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved), static: Boolean(layoutItem.static),
    // These can be null
    isDraggable: layoutItem.isDraggable, isResizable: layoutItem.isResizable
  };*/
  return JSON.parse(JSON.stringify(layoutItem));
}
/**
 * Given two layoutitems, check if they collide.
 *
 * @return {Boolean}   True if colliding.
 */

function collides(l1
/*: LayoutItem*/
, l2
/*: LayoutItem*/
)
/*: boolean*/
{
  if (l1 === l2) return false; // same element

  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2

  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2

  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2

  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2

  return true; // boxes overlap
}
/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */

function compact(layout
/*: Layout*/
, verticalCompact
/*: Boolean*/
)
/*: Layout*/
{
  // Statics go in the compareWith array right away so items flow around them.
  var compareWith = getStatics(layout); // We go through the items by row and column.

  var sorted = sortLayoutItemsByRowCol(layout); // Holding for new items.

  var out = Array(layout.length);

  for (var i = 0, len = sorted.length; i < len; i++) {
    var l = sorted[i]; // Don't move static elements

    if (!l.static) {
      l = compactItem(compareWith, l, verticalCompact); // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.

      compareWith.push(l);
    } // Add to output array to make sure they still come out in the right order.


    out[layout.indexOf(l)] = l; // Clear moved flag, if it exists.

    l.moved = false;
  }

  return out;
}
/**
 * Compact an item in the layout.
 */

function compactItem(compareWith
/*: Layout*/
, l
/*: LayoutItem*/
, verticalCompact
/*: boolean*/
)
/*: LayoutItem*/
{
  if (verticalCompact) {
    // Move the element up as far as it can go without colliding.
    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } // Move it down, and keep moving it down if it's colliding.


  var collides;

  while (collides = getFirstCollision(compareWith, l)) {
    l.y = collides.y + collides.h;
  }

  return l;
}
/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */

function correctBounds(layout
/*: Layout*/
, bounds
/*: {cols: number}*/
)
/*: Layout*/
{
  var collidesWith = getStatics(layout);

  for (var i = 0, len = layout.length; i < len; i++) {
    var l = layout[i]; // Overflows right

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; // Overflows left

    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }

    if (!l.static) collidesWith.push(l);else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }

  return layout;
}
/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */

function getLayoutItem(layout
/*: Layout*/
, id
/*: string*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}
/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */

function getFirstCollision(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
}
function getAllCollisions(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}
/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */

function getStatics(layout
/*: Layout*/
)
/*: Array<LayoutItem>*/
{
  //return [];
  return layout.filter(function (l) {
    return l.static;
  });
}
/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout Full layout to modify.
 * @param  {LayoutItem} l      element to move.
 * @param  {Number}     [x]    X position in grid units.
 * @param  {Number}     [y]    Y position in grid units.
 * @param  {Boolean}    [isUserAction] If true, designates that the item we're moving is
 *                                     being dragged/resized by th euser.
 */

function moveElement(layout
/*: Layout*/
, l
/*: LayoutItem*/
, x
/*: Number*/
, y
/*: Number*/
, isUserAction
/*: Boolean*/
, preventCollision
/*: Boolean*/
)
/*: Layout*/
{
  if (l.static) return layout; // Short-circuit if nothing to do.
  //if (l.y === y && l.x === x) return layout;

  var oldX = l.x;
  var oldY = l.y;
  var movingUp = y && l.y > y; // This is quite a bit faster than extending the object

  if (typeof x === 'number') l.x = x;
  if (typeof y === 'number') l.y = y;
  l.moved = true; // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.

  var sorted = sortLayoutItemsByRowCol(layout);
  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l);

  if (preventCollision && collisions.length) {
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout;
  } // Move each item that collides away from this element.


  for (var i = 0, len = collisions.length; i < len; i++) {
    var collision = collisions[i]; // console.log('resolving collision between', l.i, 'at', l.y, 'and', collision.i, 'at', collision.y);
    // Short circuit so we can't infinite loop

    if (collision.moved) continue; // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.

    if (l.y > collision.y && l.y - collision.y > collision.h / 4) continue; // Don't move static items - we have to move *this* element away

    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction);
    }
  }

  return layout;
}
/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 * @param  {Boolean} [isUserAction]  If true, designates that the item we're moving is being dragged/resized
 *                                   by the user.
 */

function moveElementAwayFromCollision(layout
/*: Layout*/
, collidesWith
/*: LayoutItem*/
, itemToMove
/*: LayoutItem*/
, isUserAction
/*: ?boolean*/
)
/*: Layout*/
{
  var preventCollision = false; // we're already colliding
  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.

  if (isUserAction) {
    // Make a mock item so we don't modify the item here, only modify in moveElement.
    var fakeItem
    /*: LayoutItem*/
    = {
      x: itemToMove.x,
      y: itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: '-1'
    };
    fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);

    if (!getFirstCollision(layout, fakeItem)) {
      return moveElement(layout, itemToMove, undefined, fakeItem.y, preventCollision);
    }
  } // Previously this was optimized to move below the collision directly, but this can cause problems
  // with cascading moves, as an item may actually leapflog a collision and cause a reversal in order.


  return moveElement(layout, itemToMove, undefined, itemToMove.y + 1, preventCollision);
}
/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */

function perc(num
/*: number*/
)
/*: string*/
{
  return num * 100 + '%';
}
function setTransform(top, left, width, height)
/*: Object*/
{
  // Replace unitless items with px
  var translate = "translate3d(" + left + "px," + top + "px, 0)";
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
/**
 * Just like the setTransform method, but instead it will return a negative value of right.
 *
 * @param top
 * @param right
 * @param width
 * @param height
 * @returns {{transform: string, WebkitTransform: string, MozTransform: string, msTransform: string, OTransform: string, width: string, height: string, position: string}}
 */

function setTransformRtl(top, right, width, height)
/*: Object*/
{
  // Replace unitless items with px
  var translate = "translate3d(" + right * -1 + "px," + top + "px, 0)";
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
function setTopLeft(top, left, width, height)
/*: Object*/
{
  return {
    top: top + "px",
    left: left + "px",
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
/**
 * Just like the setTopLeft method, but instead, it will return a right property instead of left.
 *
 * @param top
 * @param right
 * @param width
 * @param height
 * @returns {{top: string, right: string, width: string, height: string, position: string}}
 */

function setTopRight(top, right, width, height)
/*: Object*/
{
  return {
    top: top + "px",
    right: right + "px",
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */

function sortLayoutItemsByRowCol(layout
/*: Layout*/
)
/*: Layout*/
{
  return [].concat(layout).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    }

    return -1;
  });
}
/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout vertically.
 * @return {Array}                Working layout.
 */

/*
export function synchronizeLayoutWithChildren(initialLayout: Layout, children: Array<React.Element>|React.Element,
                                              cols: number, verticalCompact: boolean): Layout {
  // ensure 'children' is always an array
  if (!Array.isArray(children)) {
    children = [children];
  }
  initialLayout = initialLayout || [];

  // Generate one layout item per child.
  let layout: Layout = [];
  for (let i = 0, len = children.length; i < len; i++) {
    let newItem;
    const child = children[i];

    // Don't overwrite if it already exists.
    const exists = getLayoutItem(initialLayout, child.key || "1" /!* FIXME satisfies Flow *!/);
    if (exists) {
      newItem = exists;
    } else {
      const g = child.props._grid;

      // Hey, this item has a _grid property, use it.
      if (g) {
        if (!isProduction) {
          validateLayout([g], 'ReactGridLayout.children');
        }
        // Validated; add it to the layout. Bottom 'y' possible is the bottom of the layout.
        // This allows you to do nice stuff like specify {y: Infinity}
        if (verticalCompact) {
          newItem = cloneLayoutItem({...g, y: Math.min(bottom(layout), g.y), i: child.key});
        } else {
          newItem = cloneLayoutItem({...g, y: g.y, i: child.key});
        }
      }
      // Nothing provided: ensure this is added to the bottom
      else {
        newItem = cloneLayoutItem({w: 1, h: 1, x: 0, y: bottom(layout), i: child.key || "1"});
      }
    }
    layout[i] = newItem;
  }

  // Correct the layout.
  layout = correctBounds(layout, {cols: cols});
  layout = compact(layout, verticalCompact);

  return layout;
}
*/

/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */

function validateLayout(layout
/*: Layout*/
, contextName
/*: string*/
)
/*: void*/
{
  contextName = contextName || "Layout";
  var subProps = ['x', 'y', 'w', 'h'];
  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");

  for (var i = 0, len = layout.length; i < len; i++) {
    var item = layout[i];

    for (var j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== 'number') {
        throw new Error('VueGridLayout: ' + contextName + '[' + i + '].' + subProps[j] + ' must be a number!');
      }
    }

    if (item.i && typeof item.i !== 'string') {// number is also ok, so comment the error
      // TODO confirm if commenting the line below doesn't cause unexpected problems
      // throw new Error('VueGridLayout: ' + contextName + '[' + i + '].i must be a string!');
    }

    if (item.static !== undefined && typeof item.static !== 'boolean') {
      throw new Error('VueGridLayout: ' + contextName + '[' + i + '].static must be a boolean!');
    }
  }
} // Flow can't really figure this out, so we just use Object

function autoBindHandlers(el
/*: Object*/
, fns
/*: Array<string>*/
)
/*: void*/
{
  fns.forEach(function (key) {
    return el[key] = el[key].bind(el);
  });
}
/**
 * Convert a JS object to CSS string. Similar to React's output of CSS.
 * @param obj
 * @returns {string}
 */

function createMarkup(obj) {
  var keys = Object.keys(obj);
  if (!keys.length) return '';
  var i,
      len = keys.length;
  var result = '';

  for (i = 0; i < len; i++) {
    var key = keys[i];
    var val = obj[key];
    result += hyphenate(key) + ':' + addPx(key, val) + ';';
  }

  return result;
}
/* The following list is defined in React's core */

var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * Will add px to the end of style values which are Numbers.
 * @param name
 * @param value
 * @returns {*}
 */

function addPx(name, value) {
  if (typeof value === 'number' && !IS_UNITLESS[name]) {
    return value + 'px';
  } else {
    return value;
  }
}
/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}
function findItemInArray(array, property, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][property] == value) return true;
  }

  return false;
}
function findAndRemove(array, property, value) {
  array.forEach(function (result, index) {
    if (result[property] === value) {
      //Remove from array
      array.splice(index, 1);
    }
  });
}
// CONCATENATED MODULE: ./src/helpers/draggableUtils.js
// Get {x, y} positions from event.
function getControlPosition(e) {
  return offsetXYFromParentOf(e);
} // Get from offsetParent

function offsetXYFromParentOf(evt) {
  var offsetParent = evt.target.offsetParent || document.body;
  var offsetParentRect = evt.offsetParent === document.body ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
  /*const x = Math.round(evt.clientX + offsetParent.scrollLeft - offsetParentRect.left);
  const y = Math.round(evt.clientY + offsetParent.scrollTop - offsetParentRect.top);*/

  return {
    x: x,
    y: y
  };
} // Create an data object exposed by <DraggableCore>'s events

function createCoreData(lastX, lastY, x, y) {
  // State changes are often (but not always!) async. We want the latest value.
  var isStart = !isNum(lastX);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      deltaX: x - lastX,
      deltaY: y - lastY,
      lastX: lastX,
      lastY: lastY,
      x: x,
      y: y
    };
  }
}

function isNum(num) {
  return typeof num === 'number' && !isNaN(num);
}
// CONCATENATED MODULE: ./src/helpers/DOM.js
var currentDir
/*: "ltr" | "rtl" | "auto"*/
= "auto"; // let currentDir = "auto";

function hasDocument() {
  return typeof document !== "undefined";
}

function hasWindow() {
  return typeof window !== "undefined";
}

function getDocumentDir() {
  if (!hasDocument()) {
    return currentDir;
  }

  var direction = typeof document.dir !== "undefined" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir");
  return direction;
}
function setDocumentDir(dir
/*: "ltr" | "rtl" | "auto"*/
) {
  // export function setDocumentDir(dir){
  if (!hasDocument) {
    currentDir = dir;
    return;
  }

  var html = document.getElementsByTagName("html")[0];
  html.setAttribute("dir", dir);
}
function addWindowEventListener(event
/*:string*/
, callback
/*: () => mixed*/
) {
  if (!hasWindow) {
    callback();
    return;
  }

  window.addEventListener(event, callback);
}
function removeWindowEventListener(event
/*:string*/
, callback
/*: () => mixed*/
) {
  if (!hasWindow) {
    return;
  }

  window.removeEventListener(event, callback);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //    var eventBus = require('./eventBus');

var interact = __webpack_require__("fb3a");

/* harmony default export */ var GridItemvue_type_script_lang_js_ = ({
  name: "GridItem",
  props: {
    /*cols: {
     type: Number,
     required: true
     },*/

    /*containerWidth: {
     type: Number,
     required: true
      },
     rowHeight: {
     type: Number,
     required: true
     },
     margin: {
     type: Array,
     required: true
     },
     maxRows: {
     type: Number,
     required: true
     },*/
    isDraggable: {
      type: Boolean,
      required: false,
      default: null
    },
    isResizable: {
      type: Boolean,
      required: false,
      default: null
    },

    /*useCssTransforms: {
     type: Boolean,
     required: true
     },
     */
    static: {
      type: Boolean,
      required: false,
      default: false
    },
    minH: {
      type: Number,
      required: false,
      default: 1
    },
    minW: {
      type: Number,
      required: false,
      default: 1
    },
    maxH: {
      type: Number,
      required: false,
      default: Infinity
    },
    maxW: {
      type: Number,
      required: false,
      default: Infinity
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    },
    i: {
      required: true
    },
    dragIgnoreFrom: {
      type: String,
      required: false,
      default: 'a, button'
    },
    dragAllowFrom: {
      type: String,
      required: false,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      required: false,
      default: 'a, button'
    }
  },
  inject: ["eventBus"],
  data: function data() {
    return {
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: Infinity,
      draggable: null,
      resizable: null,
      useCssTransforms: true,
      isDragging: false,
      dragging: null,
      isResizing: false,
      resizing: null,
      lastX: NaN,
      lastY: NaN,
      lastW: NaN,
      lastH: NaN,
      style: {},
      rtl: false,
      dragEventSet: false,
      resizeEventSet: false,
      previousW: null,
      previousH: null,
      previousX: null,
      previousY: null,
      innerX: this.x,
      innerY: this.y,
      innerW: this.w,
      innerH: this.h
    };
  },
  created: function created() {
    var _this = this;

    var self = this; // Accessible refernces of functions for removing in beforeDestroy

    self.updateWidthHandler = function (width) {
      self.updateWidth(width);
    };

    self.compactHandler = function (layout) {
      self.compact(layout);
    };

    self.setDraggableHandler = function (isDraggable) {
      if (self.isDraggable === null) {
        self.draggable = isDraggable;
      }
    };

    self.setResizableHandler = function (isResizable) {
      if (self.isResizable === null) {
        self.resizable = isResizable;
      }
    };

    self.setRowHeightHandler = function (rowHeight) {
      self.rowHeight = rowHeight;
    };

    self.setMaxRowsHandler = function (maxRows) {
      self.maxRows = maxRows;
    };

    self.directionchangeHandler = function () {
      _this.rtl = getDocumentDir() === 'rtl';

      _this.compact();
    };

    self.setColNum = function (colNum) {
      self.cols = parseInt(colNum);
    };

    this.eventBus.$on('updateWidth', self.updateWidthHandler);
    this.eventBus.$on('compact', self.compactHandler);
    this.eventBus.$on('setDraggable', self.setDraggableHandler);
    this.eventBus.$on('setResizable', self.setResizableHandler);
    this.eventBus.$on('setRowHeight', self.setRowHeightHandler);
    this.eventBus.$on('setMaxRows', self.setMaxRowsHandler);
    this.eventBus.$on('directionchange', self.directionchangeHandler);
    this.eventBus.$on('setColNum', self.setColNum);
    this.rtl = getDocumentDir() === 'rtl';
  },
  beforeDestroy: function beforeDestroy() {
    var self = this; //Remove listeners

    this.eventBus.$off('updateWidth', self.updateWidthHandler);
    this.eventBus.$off('compact', self.compactHandler);
    this.eventBus.$off('setDraggable', self.setDraggableHandler);
    this.eventBus.$off('setResizable', self.setResizableHandler);
    this.eventBus.$off('setRowHeight', self.setRowHeightHandler);
    this.eventBus.$off('setMaxRows', self.setMaxRowsHandler);
    this.eventBus.$off('directionchange', self.directionchangeHandler);
    this.eventBus.$off('setColNum', self.setColNum);
    this.interactObj.unset(); // destroy interact intance
  },
  mounted: function mounted() {
    this.cols = this.$parent.colNum;
    this.rowHeight = this.$parent.rowHeight;
    this.containerWidth = this.$parent.width !== null ? this.$parent.width : 100;
    this.margin = this.$parent.margin !== undefined ? this.$parent.margin : [10, 10];
    this.maxRows = this.$parent.maxRows;

    if (this.isDraggable === null) {
      this.draggable = this.$parent.isDraggable;
    } else {
      this.draggable = this.isDraggable;
    }

    if (this.isResizable === null) {
      this.resizable = this.$parent.isResizable;
    } else {
      this.resizable = this.isResizable;
    }

    this.useCssTransforms = this.$parent.useCssTransforms;
    this.createStyle();
  },
  watch: {
    isDraggable: function isDraggable() {
      this.draggable = this.isDraggable;
    },
    static: function _static() {
      this.tryMakeDraggable();
      this.tryMakeResizable();
    },
    draggable: function draggable() {
      this.tryMakeDraggable();
    },
    isResizable: function isResizable() {
      this.resizable = this.isResizable;
    },
    resizable: function resizable() {
      this.tryMakeResizable();
    },
    rowHeight: function rowHeight() {
      this.createStyle();
      this.emitContainerResized();
    },
    cols: function cols() {
      this.tryMakeResizable();
      this.createStyle();
      this.emitContainerResized();
    },
    containerWidth: function containerWidth() {
      this.tryMakeResizable();
      this.createStyle();
      this.emitContainerResized();
    },
    x: function x(newVal) {
      this.innerX = newVal;
      this.createStyle();
    },
    y: function y(newVal) {
      this.innerY = newVal;
      this.createStyle();
    },
    h: function h(newVal) {
      this.innerH = newVal;
      this.createStyle(); // this.emitContainerResized();
    },
    w: function w(newVal) {
      this.innerW = newVal;
      this.createStyle(); // this.emitContainerResized();
    },
    renderRtl: function renderRtl() {
      // console.log("### renderRtl");
      this.tryMakeResizable();
      this.createStyle();
    },
    minH: function minH() {
      this.tryMakeResizable();
    },
    maxH: function maxH() {
      this.tryMakeResizable();
    },
    minW: function minW() {
      this.tryMakeResizable();
    },
    maxW: function maxW() {
      this.tryMakeResizable();
    }
  },
  computed: {
    classObj: function classObj() {
      return {
        'vue-resizable': this.resizableAndNotStatic,
        'static': this.static,
        'resizing': this.isResizing,
        'vue-draggable-dragging': this.isDragging,
        'cssTransforms': this.useCssTransforms,
        'render-rtl': this.renderRtl,
        'disable-userselect': this.isDragging,
        'no-touch': this.isAndroid && this.draggableOrResizableAndNotStatic
      };
    },
    resizableAndNotStatic: function resizableAndNotStatic() {
      return this.resizable && !this.static;
    },
    draggableOrResizableAndNotStatic: function draggableOrResizableAndNotStatic() {
      return (this.draggable || this.resizable) && !this.static;
    },
    isAndroid: function isAndroid() {
      return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    },
    renderRtl: function renderRtl() {
      return this.$parent.isMirrored ? !this.rtl : this.rtl;
    },
    resizableHandleClass: function resizableHandleClass() {
      if (this.renderRtl) {
        return 'vue-resizable-handle vue-rtl-resizable-handle';
      } else {
        return 'vue-resizable-handle';
      }
    }
  },
  methods: {
    createStyle: function createStyle() {
      if (this.x + this.w > this.cols) {
        this.innerX = 0;
        this.innerW = this.w > this.cols ? this.cols : this.w;
      } else {
        this.innerX = this.x;
        this.innerW = this.w;
      }

      var pos = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);

      if (this.isDragging) {
        pos.top = this.dragging.top; //                    Add rtl support

        if (this.renderRtl) {
          pos.right = this.dragging.left;
        } else {
          pos.left = this.dragging.left;
        }
      }

      if (this.isResizing) {
        pos.width = this.resizing.width;
        pos.height = this.resizing.height;
      }

      var style; // CSS Transforms support (default)

      if (this.useCssTransforms) {
        //                    Add rtl support
        if (this.renderRtl) {
          style = setTransformRtl(pos.top, pos.right, pos.width, pos.height);
        } else {
          style = setTransform(pos.top, pos.left, pos.width, pos.height);
        }
      } else {
        // top,left (slow)
        //                    Add rtl support
        if (this.renderRtl) {
          style = setTopRight(pos.top, pos.right, pos.width, pos.height);
        } else {
          style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
        }
      }

      this.style = style;
    },
    emitContainerResized: function emitContainerResized() {
      // this.style has width and height with trailing 'px'. The
      // resized event is without them
      var styleProps = {};

      for (var _i = 0, _arr = ['width', 'height']; _i < _arr.length; _i++) {
        var prop = _arr[_i];
        var val = this.style[prop];
        var matches = val.match(/^(\d+)px$/);
        if (!matches) return;
        styleProps[prop] = matches[1];
      }

      this.$emit("container-resized", this.i, this.h, this.w, styleProps.height, styleProps.width);
    },
    handleResize: function handleResize(event) {
      if (this.static) return;
      var position = getControlPosition(event); // Get the current drag point from the event. This is used as the offset.

      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y;
      var newSize = {
        width: 0,
        height: 0
      };
      var pos;

      switch (event.type) {
        case "resizestart":
          {
            this.previousW = this.innerW;
            this.previousH = this.innerH;
            pos = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
            newSize.width = pos.width;
            newSize.height = pos.height;
            this.resizing = newSize;
            this.isResizing = true;
            break;
          }

        case "resizemove":
          {
            //                        console.log("### resize => " + event.type + ", lastW=" + this.lastW + ", lastH=" + this.lastH);
            var coreEvent = createCoreData(this.lastW, this.lastH, x, y);

            if (this.renderRtl) {
              newSize.width = this.resizing.width - coreEvent.deltaX;
            } else {
              newSize.width = this.resizing.width + coreEvent.deltaX;
            }

            newSize.height = this.resizing.height + coreEvent.deltaY; ///console.log("### resize => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);

            this.resizing = newSize;
            break;
          }

        case "resizeend":
          {
            //console.log("### resize end => x=" +this.innerX + " y=" + this.innerY + " w=" + this.innerW + " h=" + this.innerH);
            pos = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
            newSize.width = pos.width;
            newSize.height = pos.height; //                        console.log("### resize end => " + JSON.stringify(newSize));

            this.resizing = null;
            this.isResizing = false;
            break;
          }
      } // Get new WH


      pos = this.calcWH(newSize.height, newSize.width);

      if (pos.w < this.minW) {
        pos.w = this.minW;
      }

      if (pos.w > this.maxW) {
        pos.w = this.maxW;
      }

      if (pos.h < this.minH) {
        pos.h = this.minH;
      }

      if (pos.h > this.maxH) {
        pos.h = this.maxH;
      }

      if (pos.h < 1) {
        pos.h = 1;
      }

      if (pos.w < 1) {
        pos.w = 1;
      }

      this.lastW = x;
      this.lastH = y;

      if (this.innerW !== pos.w || this.innerH !== pos.h) {
        this.$emit("resize", this.i, pos.h, pos.w, newSize.height, newSize.width);
      }

      if (event.type === "resizeend" && (this.previousW !== this.innerW || this.previousH !== this.innerH)) {
        this.$emit("resized", this.i, pos.h, pos.w, newSize.height, newSize.width);
      }

      this.eventBus.$emit("resizeEvent", event.type, this.i, this.innerX, this.innerY, pos.h, pos.w);
    },
    handleDrag: function handleDrag(event) {
      if (this.static) return;
      if (this.isResizing) return;
      var position = getControlPosition(event); // Get the current drag point from the event. This is used as the offset.

      if (position === null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // let shouldUpdate = false;

      var newPosition = {
        top: 0,
        left: 0
      };

      switch (event.type) {
        case "dragstart":
          {
            this.previousX = this.innerX;
            this.previousY = this.innerY;
            var parentRect = event.target.offsetParent.getBoundingClientRect();
            var clientRect = event.target.getBoundingClientRect();

            if (this.renderRtl) {
              newPosition.left = (clientRect.right - parentRect.right) * -1;
            } else {
              newPosition.left = clientRect.left - parentRect.left;
            }

            newPosition.top = clientRect.top - parentRect.top;
            this.dragging = newPosition;
            this.isDragging = true;
            break;
          }

        case "dragend":
          {
            if (!this.isDragging) return;

            var _parentRect = event.target.offsetParent.getBoundingClientRect();

            var _clientRect = event.target.getBoundingClientRect(); //                        Add rtl support


            if (this.renderRtl) {
              newPosition.left = (_clientRect.right - _parentRect.right) * -1;
            } else {
              newPosition.left = _clientRect.left - _parentRect.left;
            }

            newPosition.top = _clientRect.top - _parentRect.top; //                        console.log("### drag end => " + JSON.stringify(newPosition));
            //                        console.log("### DROP: " + JSON.stringify(newPosition));

            this.dragging = null;
            this.isDragging = false; // shouldUpdate = true;

            break;
          }

        case "dragmove":
          {
            var coreEvent = createCoreData(this.lastX, this.lastY, x, y); //                        Add rtl support

            if (this.renderRtl) {
              newPosition.left = this.dragging.left - coreEvent.deltaX;
            } else {
              newPosition.left = this.dragging.left + coreEvent.deltaX;
            }

            newPosition.top = this.dragging.top + coreEvent.deltaY; //                        console.log("### drag => " + event.type + ", x=" + x + ", y=" + y);
            //                        console.log("### drag => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
            //                        console.log("### drag end => " + JSON.stringify(newPosition));

            this.dragging = newPosition;
            break;
          }
      } // Get new XY


      var pos;

      if (this.renderRtl) {
        pos = this.calcXY(newPosition.top, newPosition.left);
      } else {
        pos = this.calcXY(newPosition.top, newPosition.left);
      }

      this.lastX = x;
      this.lastY = y;

      if (this.innerX !== pos.x || this.innerY !== pos.y) {
        this.$emit("move", this.i, pos.x, pos.y);
      }

      if (event.type === "dragend" && (this.previousX !== this.innerX || this.previousY !== this.innerY)) {
        this.$emit("moved", this.i, pos.x, pos.y);
      }

      this.eventBus.$emit("dragEvent", event.type, this.i, pos.x, pos.y, this.innerH, this.innerW);
    },
    calcPosition: function calcPosition(x, y, w, h) {
      var colWidth = this.calcColWidth(); // add rtl support

      var out;

      if (this.renderRtl) {
        out = {
          right: Math.round(colWidth * x + (x + 1) * this.margin[0]),
          top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),
          height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])
        };
      } else {
        out = {
          left: Math.round(colWidth * x + (x + 1) * this.margin[0]),
          top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),
          height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])
        };
      }

      return out;
    },

    /**
     * Translate x and y coordinates from pixels to grid units.
     * @param  {Number} top  Top position (relative to parent) in pixels.
     * @param  {Number} left Left position (relative to parent) in pixels.
     * @return {Object} x and y in grid units.
     */
    // TODO check if this function needs change in order to support rtl.
    calcXY: function calcXY(top, left) {
      var colWidth = this.calcColWidth(); // left = colWidth * x + margin * (x + 1)
      // l = cx + m(x+1)
      // l = cx + mx + m
      // l - m = cx + mx
      // l - m = x(c + m)
      // (l - m) / (c + m) = x
      // x = (left - margin) / (coldWidth + margin)

      var x = Math.round((left - this.margin[0]) / (colWidth + this.margin[0]));
      var y = Math.round((top - this.margin[1]) / (this.rowHeight + this.margin[1])); // Capping

      x = Math.max(Math.min(x, this.cols - this.innerW), 0);
      y = Math.max(Math.min(y, this.maxRows - this.innerH), 0);
      return {
        x: x,
        y: y
      };
    },
    // Helper for generating column width
    calcColWidth: function calcColWidth() {
      var colWidth = (this.containerWidth - this.margin[0] * (this.cols + 1)) / this.cols; // console.log("### COLS=" + this.cols + " COL WIDTH=" + colWidth + " MARGIN " + this.margin[0]);

      return colWidth;
    },

    /**
     * Given a height and width in pixel values, calculate grid units.
     * @param  {Number} height Height in pixels.
     * @param  {Number} width  Width in pixels.
     * @return {Object} w, h as grid units.
     */
    calcWH: function calcWH(height, width) {
      var colWidth = this.calcColWidth(); // width = colWidth * w - (margin * (w - 1))
      // ...
      // w = (width + margin) / (colWidth + margin)

      var w = Math.round((width + this.margin[0]) / (colWidth + this.margin[0]));
      var h = Math.round((height + this.margin[1]) / (this.rowHeight + this.margin[1])); // Capping

      w = Math.max(Math.min(w, this.cols - this.innerX), 0);
      h = Math.max(Math.min(h, this.maxRows - this.innerY), 0);
      return {
        w: w,
        h: h
      };
    },
    updateWidth: function updateWidth(width, colNum) {
      this.containerWidth = width;

      if (colNum !== undefined && colNum !== null) {
        this.cols = colNum;
      }
    },
    compact: function compact() {
      this.createStyle();
    },
    tryMakeDraggable: function tryMakeDraggable() {
      var self = this;

      if (this.interactObj === null || this.interactObj === undefined) {
        this.interactObj = interact(this.$refs.item);
      }

      if (this.draggable && !this.static) {
        var opts = {
          ignoreFrom: this.dragIgnoreFrom,
          allowFrom: this.dragAllowFrom
        };
        this.interactObj.draggable(opts);
        /*this.interactObj.draggable({allowFrom: '.vue-draggable-handle'});*/

        if (!this.dragEventSet) {
          this.dragEventSet = true;
          this.interactObj.on('dragstart dragmove dragend', function (event) {
            self.handleDrag(event);
          });
        }
      } else {
        this.interactObj.draggable({
          enabled: false
        });
      }
    },
    tryMakeResizable: function tryMakeResizable() {
      var self = this;

      if (this.interactObj === null || this.interactObj === undefined) {
        this.interactObj = interact(this.$refs.item);
      }

      if (this.resizable && !this.static) {
        var maximum = this.calcPosition(0, 0, this.maxW, this.maxH);
        var minimum = this.calcPosition(0, 0, this.minW, this.minH); // console.log("### MAX " + JSON.stringify(maximum));
        // console.log("### MIN " + JSON.stringify(minimum));

        var opts = {
          preserveAspectRatio: true,
          // allowFrom: "." + this.resizableHandleClass,
          edges: {
            left: false,
            right: "." + this.resizableHandleClass,
            bottom: "." + this.resizableHandleClass,
            top: false
          },
          ignoreFrom: this.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: minimum.height,
              width: minimum.width
            },
            max: {
              height: maximum.height,
              width: maximum.width
            }
          }
        };
        this.interactObj.resizable(opts);

        if (!this.resizeEventSet) {
          this.resizeEventSet = true;
          this.interactObj.on('resizestart resizemove resizeend', function (event) {
            self.handleResize(event);
          });
        }
      } else {
        this.interactObj.resizable({
          enabled: false
        });
      }
    },
    autoSize: function autoSize() {
      // ok here we want to calculate if a resize is needed
      this.previousW = this.innerW;
      this.previousH = this.innerH;
      var newSize = this.$slots.default[0].elm.getBoundingClientRect();
      var pos = this.calcWH(newSize.height, newSize.width);

      if (pos.w < this.minW) {
        pos.w = this.minW;
      }

      if (pos.w > this.maxW) {
        pos.w = this.maxW;
      }

      if (pos.h < this.minH) {
        pos.h = this.minH;
      }

      if (pos.h > this.maxH) {
        pos.h = this.maxH;
      }

      if (pos.h < 1) {
        pos.h = 1;
      }

      if (pos.w < 1) {
        pos.w = 1;
      } // this.lastW = x; // basically, this is copied from resizehandler, but shouldn't be needed
      // this.lastH = y;


      if (this.innerW !== pos.w || this.innerH !== pos.h) {
        this.$emit("resize", this.i, pos.h, pos.w, newSize.height, newSize.width);
      }

      if (this.previousW !== pos.w || this.previousH !== pos.h) {
        this.$emit("resized", this.i, pos.h, pos.w, newSize.height, newSize.width);
        this.eventBus.$emit("resizeEvent", "resizeend", this.i, this.innerX, this.innerY, pos.h, pos.w);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/GridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GridItemvue_type_script_lang_js_ = (GridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GridItem.vue?vue&type=style&index=0&lang=css&
var GridItemvue_type_style_index_0_lang_css_ = __webpack_require__("5ed4");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/GridItem.vue






/* normalize component */

var component = normalizeComponent(
  components_GridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GridItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"388ee136-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridLayout.vue?vue&type=template&id=5a186489&
var GridLayoutvue_type_template_id_5a186489_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"item",staticClass:"vue-grid-layout",style:(_vm.mergedStyle)},[_vm._t("default"),_c('grid-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDragging),expression:"isDragging"}],staticClass:"vue-grid-placeholder",attrs:{"x":_vm.placeholder.x,"y":_vm.placeholder.y,"w":_vm.placeholder.w,"h":_vm.placeholder.h,"i":_vm.placeholder.i}})],2)}
var GridLayoutvue_type_template_id_5a186489_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GridLayout.vue?vue&type=template&id=5a186489&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-finite.js
var es6_number_is_finite = __webpack_require__("fca0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/helpers/responsiveUtils.js




// @flow


/*:: import type {Layout} from './utils';*/

/*:: export type ResponsiveLayout = {lg?: Layout, md?: Layout, sm?: Layout, xs?: Layout, xxs?: Layout};*/

/*:: type Breakpoint = string;*/

/**
 * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
 *
 * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
 * @param  {Number} width Screen width.
 * @return {String}       Highest breakpoint that is less than width.
 */

/*:: type Breakpoints = {lg?: number, md?: number, sm?: number, xs?: number, xxs?: number};*/

function getBreakpointFromWidth(breakpoints
/*: Breakpoints*/
, width
/*: number*/
)
/*: Breakpoint*/
{
  var sorted = sortBreakpoints(breakpoints);
  var matching = sorted[0];

  for (var i = 1, len = sorted.length; i < len; i++) {
    var breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }

  return matching;
}
/**
 * Given a breakpoint, get the # of cols set for it.
 * @param  {String} breakpoint Breakpoint name.
 * @param  {Object} cols       Map of breakpoints to cols.
 * @return {Number}            Number of cols.
 */

function getColsFromBreakpoint(breakpoint
/*: Breakpoint*/
, cols
/*: Breakpoints*/
)
/*: number*/
{
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }

  return cols[breakpoint];
}
/**
 * Given existing layouts and a new breakpoint, find or generate a new layout.
 *
 * This finds the layout above the new one and generates from it, if it exists.
 *
 * @param  {Array} orgLayout     Original layout.
 * @param  {Object} layouts     Existing layouts.
 * @param  {Array} breakpoints All breakpoints.
 * @param  {String} breakpoint New breakpoint.
 * @param  {String} breakpoint Last breakpoint (for fallback).
 * @param  {Number} cols       Column count at new breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}             New layout.
 */

function findOrGenerateResponsiveLayout(orgLayout
/*: Layout*/
, layouts
/*: ResponsiveLayout*/
, breakpoints
/*: Breakpoints*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, verticalCompact
/*: boolean*/
)
/*: Layout*/
{
  // If it already exists, just return it.
  if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]); // Find or generate the next layout

  var layout = orgLayout;
  var breakpointsSorted = sortBreakpoints(breakpoints);
  var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));

  for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
    var b = breakpointsAbove[i];

    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }

  layout = cloneLayout(layout || []); // clone layout so we don't modify existing items

  return compact(correctBounds(layout, {
    cols: cols
  }), verticalCompact);
}
function generateResponsiveLayout(layout
/*: Layout*/
, breakpoints
/*: Breakpoints*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, verticalCompact
/*: boolean*/
)
/*: Layout*/
{
  // If it already exists, just return it.

  /*if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]);
  // Find or generate the next layout
  let layout = layouts[lastBreakpoint];*/

  /*const breakpointsSorted = sortBreakpoints(breakpoints);
  const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
  for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
  const b = breakpointsAbove[i];
  if (layouts[b]) {
    layout = layouts[b];
    break;
  }
  }*/
  layout = cloneLayout(layout || []); // clone layout so we don't modify existing items

  return compact(correctBounds(layout, {
    cols: cols
  }), verticalCompact);
}
/**
 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
 * e.g. ['xxs', 'xs', 'sm', ...]
 *
 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
 * @return {Array}              Sorted breakpoints.
 */

function sortBreakpoints(breakpoints
/*: Breakpoints*/
)
/*: Array<Breakpoint>*/
{
  var keys
  /*: Array<string>*/
  = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridLayout.vue?vue&type=script&lang=js&








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var elementResizeDetectorMaker = __webpack_require__("eec4");


 //var eventBus = require('./eventBus');



/* harmony default export */ var GridLayoutvue_type_script_lang_js_ = ({
  name: "GridLayout",
  provide: function provide() {
    return {
      eventBus: null
    };
  },
  components: {
    GridItem: GridItem
  },
  props: {
    // If true, the container height swells and contracts to fit contents
    autoSize: {
      type: Boolean,
      default: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: Infinity
    },
    margin: {
      type: Array,
      default: function _default() {
        return [10, 10];
      }
    },
    isDraggable: {
      type: Boolean,
      default: true
    },
    isResizable: {
      type: Boolean,
      default: true
    },
    isMirrored: {
      type: Boolean,
      default: false
    },
    useCssTransforms: {
      type: Boolean,
      default: true
    },
    verticalCompact: {
      type: Boolean,
      default: true
    },
    layout: {
      type: Array,
      required: true
    },
    responsive: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Object,
      default: function _default() {
        return {
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0
        };
      }
    },
    cols: {
      type: Object,
      default: function _default() {
        return {
          lg: 12,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2
        };
      }
    },
    preventCollision: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      width: null,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: false,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: -1
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null // store original Layout

    };
  },
  created: function created() {
    var self = this; // Accessible refernces of functions for removing in beforeDestroy

    self.resizeEventHandler = function (eventType, i, x, y, h, w) {
      self.resizeEvent(eventType, i, x, y, h, w);
    };

    self.dragEventHandler = function (eventType, i, x, y, h, w) {
      self.dragEvent(eventType, i, x, y, h, w);
    };

    self._provided.eventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
    self.eventBus = self._provided.eventBus;
    self.eventBus.$on('resizeEvent', self.resizeEventHandler);
    self.eventBus.$on('dragEvent', self.dragEventHandler);
    self.$emit('layout-created', self.layout);
  },
  beforeDestroy: function beforeDestroy() {
    //Remove listeners
    this.eventBus.$off('resizeEvent', this.resizeEventHandler);
    this.eventBus.$off('dragEvent', this.dragEventHandler);
    this.eventBus.$destroy();
    removeWindowEventListener("resize", this.onWindowResize);
    this.erd.uninstall(this.$refs.item);
  },
  beforeMount: function beforeMount() {
    this.$emit('layout-before-mount', this.layout);
  },
  mounted: function mounted() {
    this.$emit('layout-mounted', this.layout);
    this.$nextTick(function () {
      validateLayout(this.layout);
      this.originalLayout = this.layout;
      var self = this;
      this.$nextTick(function () {
        self.onWindowResize();
        self.initResponsiveFeatures(); //self.width = self.$el.offsetWidth;

        addWindowEventListener('resize', self.onWindowResize);
        compact(self.layout, self.verticalCompact);
        self.updateHeight();
        self.$nextTick(function () {
          this.erd = elementResizeDetectorMaker({
            strategy: "scroll",
            //<- For ultra performance.
            // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
            callOnAdd: false
          });
          this.erd.listenTo(self.$refs.item, function () {
            self.onWindowResize();
          });
        });
      });
    });
  },
  watch: {
    width: function width(newval, oldval) {
      var self = this;
      this.$nextTick(function () {
        var _this = this;

        //this.$broadcast("updateWidth", this.width);
        this.eventBus.$emit("updateWidth", this.width);

        if (oldval === null) {
          /*
              If oldval == null is when the width has never been
              set before. That only occurs when mouting is
              finished, and onWindowResize has been called and
              this.width has been changed the first time after it
              got set to null in the constructor. It is now time
              to issue layout-ready events as the GridItems have
              their sizes configured properly.
               The reason for emitting the layout-ready events on
              the next tick is to allow for the newly-emitted
              updateWidth event (above) to have reached the
              children GridItem-s and had their effect, so we're
              sure that they have the final size before we emit
              layout-ready (for this GridLayout) and
              item-layout-ready (for the GridItem-s).
               This way any client event handlers can reliably
              invistigate stable sizes of GridItem-s.
          */
          this.$nextTick(function () {
            _this.$emit('layout-ready', self.layout);
          });
        }

        this.updateHeight();
      });
    },
    layout: function layout() {
      this.layoutUpdate();
    },
    colNum: function colNum(val) {
      this.eventBus.$emit("setColNum", val);
    },
    rowHeight: function rowHeight() {
      this.eventBus.$emit("setRowHeight", this.rowHeight);
    },
    isDraggable: function isDraggable() {
      this.eventBus.$emit("setDraggable", this.isDraggable);
    },
    isResizable: function isResizable() {
      this.eventBus.$emit("setResizable", this.isResizable);
    },
    responsive: function responsive() {
      if (!this.responsive) {
        this.$emit('update:layout', this.originalLayout);
        this.eventBus.$emit("setColNum", this.colNum);
      }

      this.onWindowResize();
    },
    maxRows: function maxRows() {
      this.eventBus.$emit("setMaxRows", this.maxRows);
    }
  },
  methods: {
    layoutUpdate: function layoutUpdate() {
      if (this.layout !== undefined && this.originalLayout !== null) {
        if (this.layout.length !== this.originalLayout.length) {
          // console.log("### LAYOUT UPDATE!", this.layout.length, this.originalLayout.length);
          var diff = this.findDifference(this.layout, this.originalLayout);

          if (diff.length > 0) {
            // console.log(diff);
            if (this.layout.length > this.originalLayout.length) {
              this.originalLayout = this.originalLayout.concat(diff);
            } else {
              this.originalLayout = this.originalLayout.filter(function (obj) {
                return !diff.some(function (obj2) {
                  return obj.i === obj2.i;
                });
              });
            }
          }

          this.lastLayoutLength = this.layout.length;
          this.initResponsiveFeatures();
        }

        compact(this.layout, this.verticalCompact);
        this.eventBus.$emit("updateWidth", this.width);
        this.updateHeight();
      }
    },
    updateHeight: function updateHeight() {
      this.mergedStyle = {
        height: this.containerHeight()
      };
    },
    onWindowResize: function onWindowResize() {
      if (this.$refs !== null && this.$refs.item !== null && this.$refs.item !== undefined) {
        this.width = this.$refs.item.offsetWidth;
      }

      this.eventBus.$emit("resizeEvent");
    },
    containerHeight: function containerHeight() {
      if (!this.autoSize) return;
      return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
    },
    dragEvent: function dragEvent(eventName, id, x, y, h, w) {
      //console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
      var l = getLayoutItem(this.layout, id); //GetLayoutItem sometimes returns null object

      if (l === undefined || l === null) {
        l = {
          x: 0,
          y: 0
        };
      }

      if (eventName === "dragmove" || eventName === "dragstart") {
        this.placeholder.i = id;
        this.placeholder.x = l.x;
        this.placeholder.y = l.y;
        this.placeholder.w = w;
        this.placeholder.h = h;
        this.$nextTick(function () {
          this.isDragging = true;
        }); //this.$broadcast("updateWidth", this.width);

        this.eventBus.$emit("updateWidth", this.width);
      } else {
        this.$nextTick(function () {
          this.isDragging = false;
        });
      } // Move the element to the dragged location.


      this.layout = moveElement(this.layout, l, x, y, true, this.preventCollision);
      compact(this.layout, this.verticalCompact); // needed because vue can't detect changes on array element properties

      this.eventBus.$emit("compact");
      this.updateHeight();
      if (eventName === 'dragend') this.$emit('layout-updated', this.layout);
    },
    resizeEvent: function resizeEvent(eventName, id, x, y, h, w) {
      var l = getLayoutItem(this.layout, id); //GetLayoutItem sometimes return null object

      if (l === undefined || l === null) {
        l = {
          h: 0,
          w: 0
        };
      }

      var hasCollisions;

      if (this.preventCollision) {
        var collisions = getAllCollisions(this.layout, _objectSpread({}, l, {
          w: w,
          h: h
        })).filter(function (layoutItem) {
          return layoutItem.i !== l.i;
        });
        hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

        if (hasCollisions) {
          // adjust w && h to maximum allowed space
          var leastX = Infinity,
              leastY = Infinity;
          collisions.forEach(function (layoutItem) {
            if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
          });
          if (Number.isFinite(leastX)) l.w = leastX - l.x;
          if (Number.isFinite(leastY)) l.h = leastY - l.y;
        }
      }

      if (!hasCollisions) {
        // Set new width and height.
        l.w = w;
        l.h = h;
      }

      if (eventName === "resizestart" || eventName === "resizemove") {
        this.placeholder.i = id;
        this.placeholder.x = x;
        this.placeholder.y = y;
        this.placeholder.w = l.w;
        this.placeholder.h = l.h;
        this.$nextTick(function () {
          this.isDragging = true;
        }); //this.$broadcast("updateWidth", this.width);

        this.eventBus.$emit("updateWidth", this.width);
      } else {
        this.$nextTick(function () {
          this.isDragging = false;
        });
      }

      if (this.responsive) this.responsiveGridLayout();
      compact(this.layout, this.verticalCompact);
      this.eventBus.$emit("compact");
      this.updateHeight();
      if (eventName === 'resizeend') this.$emit('layout-updated', this.layout);
    },
    // finds or generates new layouts for set breakpoints
    responsiveGridLayout: function responsiveGridLayout() {
      var newBreakpoint = getBreakpointFromWidth(this.breakpoints, this.width);
      var newCols = getColsFromBreakpoint(newBreakpoint, this.cols); // save actual layout in layouts

      if (this.lastBreakpoint != null && !this.layouts[this.lastBreakpoint]) this.layouts[this.lastBreakpoint] = cloneLayout(this.layout); // Find or generate a new layout.

      var layout = findOrGenerateResponsiveLayout(this.originalLayout, this.layouts, this.breakpoints, newBreakpoint, this.lastBreakpoint, newCols, this.verticalCompact); // Store the new layout.

      this.layouts[newBreakpoint] = layout; // new prop sync

      this.$emit('update:layout', layout);
      this.lastBreakpoint = newBreakpoint;
      this.eventBus.$emit("setColNum", getColsFromBreakpoint(newBreakpoint, this.cols));
    },
    // clear all responsive layouts
    initResponsiveFeatures: function initResponsiveFeatures() {
      // clear layouts
      this.layouts = {};
    },
    // find difference in layouts
    findDifference: function findDifference(layout, originalLayout) {
      //Find values that are in result1 but not in result2
      var uniqueResultOne = layout.filter(function (obj) {
        return !originalLayout.some(function (obj2) {
          return obj.i === obj2.i;
        });
      }); //Find values that are in result2 but not in result1

      var uniqueResultTwo = originalLayout.filter(function (obj) {
        return !layout.some(function (obj2) {
          return obj.i === obj2.i;
        });
      }); //Combine the two arrays of unique entries#

      return uniqueResultOne.concat(uniqueResultTwo);
    }
  }
});
// CONCATENATED MODULE: ./src/components/GridLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GridLayoutvue_type_script_lang_js_ = (GridLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GridLayout.vue?vue&type=style&index=0&lang=css&
var GridLayoutvue_type_style_index_0_lang_css_ = __webpack_require__("e279");

// CONCATENATED MODULE: ./src/components/GridLayout.vue






/* normalize component */

var GridLayout_component = normalizeComponent(
  components_GridLayoutvue_type_script_lang_js_,
  GridLayoutvue_type_template_id_5a186489_render,
  GridLayoutvue_type_template_id_5a186489_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GridLayout = (GridLayout_component.exports);
// CONCATENATED MODULE: ./src/components/index.js





 // import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

var VueGridLayout = {
  // ResponsiveGridLayout,
  GridLayout: GridLayout,
  GridItem: GridItem
}; // module.exports = VueGridLayout;

VueGridLayout.install = function (Vue) {
  Object.keys(VueGridLayout).forEach(function (name) {
    Vue.component(name, VueGridLayout[name]);
  });
};

/* harmony default export */ var components = (VueGridLayout);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport GridLayout */__webpack_require__.d(__webpack_exports__, "GridLayout", function() { return GridLayout; });
/* concated harmony reexport GridItem */__webpack_require__.d(__webpack_exports__, "GridItem", function() { return GridItem; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fb3a":
/***/ (function(module, exports, __webpack_require__) {

/**
 * interact.js 1.7.2
 *
 * Copyright (c) 2012-2019 Taye Adeyemi <dev@taye.me>
 * Released under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;
var createModuleFactory = function createModuleFactory(t){var e;return function(r){return e||t(e={exports:{},parent:r},e.exports),e.exports}};
var _$scope_24 = createModuleFactory(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* common-shake removed: exports.createScope = */ void createScope;
/* common-shake removed: exports.initScope = */ void initScope;
exports.Scope = exports.ActionName = void 0;

var _domObjects = _interopRequireDefault(_$domObjects_49);

var utils = _interopRequireWildcard(_$utils_55);

var _defaultOptions = _interopRequireDefault(_$defaultOptions_20);

var _Eventable = _interopRequireDefault(_$Eventable_14);

var _Interactable = _interopRequireDefault(_$Interactable_16);

var _InteractableSet = _interopRequireDefault(_$InteractableSet_17);

var _InteractEvent = _interopRequireDefault(_$InteractEvent_15);

var _interactions = _interopRequireDefault(_$interactions_23({}));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var win = utils.win,
    browser = utils.browser,
    raf = utils.raf,
    events = utils.events;
var ActionName;
exports.ActionName = ActionName;

(function (ActionName) {})(ActionName || (exports.ActionName = ActionName = {}));

function createScope() {
  return new Scope();
}

var Scope =
/*#__PURE__*/
function () {
  // main window
  // main document
  // main window
  // all documents being listened to
  function Scope() {
    var _this = this;

    _classCallCheck(this, Scope);

    _defineProperty(this, "id", "__interact_scope_".concat(Math.floor(Math.random() * 100)));

    _defineProperty(this, "listenerMaps", []);

    _defineProperty(this, "browser", browser);

    _defineProperty(this, "events", events);

    _defineProperty(this, "utils", utils);

    _defineProperty(this, "defaults", utils.clone(_defaultOptions["default"]));

    _defineProperty(this, "Eventable", _Eventable["default"]);

    _defineProperty(this, "actions", {
      names: [],
      methodDict: {},
      eventTypes: []
    });

    _defineProperty(this, "InteractEvent", _InteractEvent["default"]);

    _defineProperty(this, "Interactable", void 0);

    _defineProperty(this, "interactables", new _InteractableSet["default"](this));

    _defineProperty(this, "_win", void 0);

    _defineProperty(this, "document", void 0);

    _defineProperty(this, "window", void 0);

    _defineProperty(this, "documents", []);

    _defineProperty(this, "_plugins", {
      list: [],
      map: {}
    });

    _defineProperty(this, "onWindowUnload", function (event) {
      return _this.removeDocument(event.target);
    });

    var scope = this;

    this.Interactable =
    /*#__PURE__*/
    function (_InteractableBase) {
      _inherits(Interactable, _InteractableBase);

      function Interactable() {
        _classCallCheck(this, Interactable);

        return _possibleConstructorReturn(this, _getPrototypeOf(Interactable).apply(this, arguments));
      }

      _createClass(Interactable, [{
        key: "set",
        value: function set(options) {
          _get(_getPrototypeOf(Interactable.prototype), "set", this).call(this, options);

          scope.fire('interactable:set', {
            options: options,
            interactable: this
          });
          return this;
        }
      }, {
        key: "unset",
        value: function unset() {
          _get(_getPrototypeOf(Interactable.prototype), "unset", this).call(this);

          for (var i = scope.interactions.list.length - 1; i >= 0; i--) {
            var interaction = scope.interactions.list[i];

            if (interaction.interactable === this) {
              interaction.stop();
              scope.fire('interactions:destroy', {
                interaction: interaction
              });
              interaction.destroy();

              if (scope.interactions.list.length > 2) {
                scope.interactions.list.splice(i, 1);
              }
            }
          }

          scope.fire('interactable:unset', {
            interactable: this
          });
        }
      }, {
        key: "_defaults",
        get: function get() {
          return scope.defaults;
        }
      }]);

      return Interactable;
    }(_Interactable["default"]);
  }

  _createClass(Scope, [{
    key: "addListeners",
    value: function addListeners(map, id) {
      this.listenerMaps.push({
        id: id,
        map: map
      });
    }
  }, {
    key: "fire",
    value: function fire(name, arg) {
      for (var _i = 0; _i < this.listenerMaps.length; _i++) {
        var _ref;

        _ref = this.listenerMaps[_i];
        var _ref2 = _ref,
            listener = _ref2.map[name];

        if (!!listener && listener(arg, this, name) === false) {
          return false;
        }
      }
    }
  }, {
    key: "init",
    value: function init(window) {
      return initScope(this, window);
    }
  }, {
    key: "pluginIsInstalled",
    value: function pluginIsInstalled(plugin) {
      return this._plugins.map[plugin.id] || this._plugins.list.indexOf(plugin) !== -1;
    }
  }, {
    key: "usePlugin",
    value: function usePlugin(plugin, options) {
      if (this.pluginIsInstalled(plugin)) {
        return this;
      }

      if (plugin.id) {
        this._plugins.map[plugin.id] = plugin;
      }

      this._plugins.list.push(plugin);

      if (plugin.install) {
        plugin.install(this, options);
      }

      if (plugin.listeners && plugin.before) {
        var index = 0;

        for (; index < this.listenerMaps.length; index++) {
          var otherId = this.listenerMaps[index].id;

          if (otherId === plugin.before) {
            break;
          }
        }

        this.listenerMaps.splice(index, 0, {
          id: plugin.id,
          map: plugin.listeners
        });
      } else if (plugin.listeners) {
        this.listenerMaps.push({
          id: plugin.id,
          map: plugin.listeners
        });
      }

      return this;
    }
  }, {
    key: "addDocument",
    value: function addDocument(doc, options) {
      // do nothing if document is already known
      if (this.getDocIndex(doc) !== -1) {
        return false;
      }

      var window = win.getWindow(doc);
      options = options ? utils.extend({}, options) : {};
      this.documents.push({
        doc: doc,
        options: options
      });
      events.documents.push(doc); // don't add an unload event for the main document
      // so that the page may be cached in browser history

      if (doc !== this.document) {
        events.add(window, 'unload', this.onWindowUnload);
      }

      this.fire('scope:add-document', {
        doc: doc,
        window: window,
        scope: this,
        options: options
      });
    }
  }, {
    key: "removeDocument",
    value: function removeDocument(doc) {
      var index = this.getDocIndex(doc);
      var window = win.getWindow(doc);
      var options = this.documents[index].options;
      events.remove(window, 'unload', this.onWindowUnload);
      this.documents.splice(index, 1);
      events.documents.splice(index, 1);
      this.fire('scope:remove-document', {
        doc: doc,
        window: window,
        scope: this,
        options: options
      });
    }
  }, {
    key: "getDocIndex",
    value: function getDocIndex(doc) {
      for (var i = 0; i < this.documents.length; i++) {
        if (this.documents[i].doc === doc) {
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "getDocOptions",
    value: function getDocOptions(doc) {
      var docIndex = this.getDocIndex(doc);
      return docIndex === -1 ? null : this.documents[docIndex].options;
    }
  }, {
    key: "now",
    value: function now() {
      return (this.window.Date || Date).now();
    }
  }]);

  return Scope;
}();

exports.Scope = Scope;

function initScope(scope, window) {
  win.init(window);

  _domObjects["default"].init(window);

  browser.init(window);
  raf.init(window);
  events.init(window);
  scope.usePlugin(_interactions["default"]);
  scope.document = window.document;
  scope.window = window;
  return scope;
}

});
var _$interactions_23 = createModuleFactory(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _browser = _interopRequireDefault(_$browser_47);

var _domObjects = _interopRequireDefault(_$domObjects_49);

/* removed: var _$domUtils_50 = require("../utils/domUtils.js"); */;

var _events = _interopRequireDefault(_$events_51);

var pointerUtils = _interopRequireWildcard(_$pointerUtils_60);

var _Interaction = _interopRequireDefault(_$Interaction_18({}));

var _interactionFinder = _interopRequireDefault(_$interactionFinder_22);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var methodNames = ['pointerDown', 'pointerMove', 'pointerUp', 'updatePointer', 'removePointer', 'windowBlur'];

function install(scope) {
  var listeners = {};

  for (var _i = 0; _i < methodNames.length; _i++) {
    var _ref;

    _ref = methodNames[_i];
    var method = _ref;
    listeners[method] = doOnInteractions(method, scope);
  }

  var pEventTypes = _browser["default"].pEventTypes;
  var docEvents;

  if (_domObjects["default"].PointerEvent) {
    docEvents = [{
      type: pEventTypes.down,
      listener: releasePointersOnRemovedEls
    }, {
      type: pEventTypes.down,
      listener: listeners.pointerDown
    }, {
      type: pEventTypes.move,
      listener: listeners.pointerMove
    }, {
      type: pEventTypes.up,
      listener: listeners.pointerUp
    }, {
      type: pEventTypes.cancel,
      listener: listeners.pointerUp
    }];
  } else {
    docEvents = [{
      type: 'mousedown',
      listener: listeners.pointerDown
    }, {
      type: 'mousemove',
      listener: listeners.pointerMove
    }, {
      type: 'mouseup',
      listener: listeners.pointerUp
    }, {
      type: 'touchstart',
      listener: releasePointersOnRemovedEls
    }, {
      type: 'touchstart',
      listener: listeners.pointerDown
    }, {
      type: 'touchmove',
      listener: listeners.pointerMove
    }, {
      type: 'touchend',
      listener: listeners.pointerUp
    }, {
      type: 'touchcancel',
      listener: listeners.pointerUp
    }];
  }

  docEvents.push({
    type: 'blur',
    listener: function listener(event) {
      for (var _i2 = 0; _i2 < scope.interactions.list.length; _i2++) {
        var _ref2;

        _ref2 = scope.interactions.list[_i2];
        var interaction = _ref2;
        interaction.documentBlur(event);
      }
    }
  }); // for ignoring browser's simulated mouse events

  scope.prevTouchTime = 0;

  scope.Interaction =
  /*#__PURE__*/
  function (_InteractionBase) {
    _inherits(Interaction, _InteractionBase);

    function Interaction() {
      _classCallCheck(this, Interaction);

      return _possibleConstructorReturn(this, _getPrototypeOf(Interaction).apply(this, arguments));
    }

    _createClass(Interaction, [{
      key: "_now",
      value: function _now() {
        return scope.now();
      }
    }, {
      key: "pointerMoveTolerance",
      get: function get() {
        return scope.interactions.pointerMoveTolerance;
      },
      set: function set(value) {
        scope.interactions.pointerMoveTolerance = value;
      }
    }]);

    return Interaction;
  }(_Interaction["default"]);

  scope.interactions = {
    // all active and idle interactions
    list: [],
    "new": function _new(options) {
      options.scopeFire = function (name, arg) {
        return scope.fire(name, arg);
      };

      var interaction = new scope.Interaction(options);
      scope.interactions.list.push(interaction);
      return interaction;
    },
    listeners: listeners,
    docEvents: docEvents,
    pointerMoveTolerance: 1
  };

  function releasePointersOnRemovedEls() {
    // for all inactive touch interactions with pointers down
    for (var _i3 = 0; _i3 < scope.interactions.list.length; _i3++) {
      var _ref3;

      _ref3 = scope.interactions.list[_i3];
      var interaction = _ref3;

      if (!interaction.pointerIsDown || interaction.pointerType !== 'touch' || interaction._interacting) {
        continue;
      } // if a pointer is down on an element that is no longer in the DOM tree


      var _loop = function _loop() {
        _ref4 = interaction.pointers[_i4];
        var pointer = _ref4;

        if (!scope.documents.some(function (_ref5) {
          var doc = _ref5.doc;
          return (0, _$domUtils_50.nodeContains)(doc, pointer.downTarget);
        })) {
          // remove the pointer from the interaction
          interaction.removePointer(pointer.pointer, pointer.event);
        }
      };

      for (var _i4 = 0; _i4 < interaction.pointers.length; _i4++) {
        var _ref4;

        _loop();
      }
    }
  }
}

function doOnInteractions(method, scope) {
  return function (event) {
    var interactions = scope.interactions.list;
    var pointerType = pointerUtils.getPointerType(event);

    var _pointerUtils$getEven = pointerUtils.getEventTargets(event),
        _pointerUtils$getEven2 = _slicedToArray(_pointerUtils$getEven, 2),
        eventTarget = _pointerUtils$getEven2[0],
        curEventTarget = _pointerUtils$getEven2[1];

    var matches = []; // [ [pointer, interaction], ...]

    if (/^touch/.test(event.type)) {
      scope.prevTouchTime = scope.now();

      for (var _i5 = 0; _i5 < event.changedTouches.length; _i5++) {
        var _ref6;

        _ref6 = event.changedTouches[_i5];
        var changedTouch = _ref6;
        var pointer = changedTouch;
        var pointerId = pointerUtils.getPointerId(pointer);
        var searchDetails = {
          pointer: pointer,
          pointerId: pointerId,
          pointerType: pointerType,
          eventType: event.type,
          eventTarget: eventTarget,
          curEventTarget: curEventTarget,
          scope: scope
        };
        var interaction = getInteraction(searchDetails);
        matches.push([searchDetails.pointer, searchDetails.eventTarget, searchDetails.curEventTarget, interaction]);
      }
    } else {
      var invalidPointer = false;

      if (!_browser["default"].supportsPointerEvent && /mouse/.test(event.type)) {
        // ignore mouse events while touch interactions are active
        for (var i = 0; i < interactions.length && !invalidPointer; i++) {
          invalidPointer = interactions[i].pointerType !== 'mouse' && interactions[i].pointerIsDown;
        } // try to ignore mouse events that are simulated by the browser
        // after a touch event


        invalidPointer = invalidPointer || scope.now() - scope.prevTouchTime < 500 || // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        event.timeStamp === 0;
      }

      if (!invalidPointer) {
        var _searchDetails = {
          pointer: event,
          pointerId: pointerUtils.getPointerId(event),
          pointerType: pointerType,
          eventType: event.type,
          curEventTarget: curEventTarget,
          eventTarget: eventTarget,
          scope: scope
        };

        var _interaction = getInteraction(_searchDetails);

        matches.push([_searchDetails.pointer, _searchDetails.eventTarget, _searchDetails.curEventTarget, _interaction]);
      }
    } // eslint-disable-next-line no-shadow


    for (var _i6 = 0; _i6 < matches.length; _i6++) {
      var _matches$_i = _slicedToArray(matches[_i6], 4),
          _pointer = _matches$_i[0],
          _eventTarget = _matches$_i[1],
          _curEventTarget = _matches$_i[2],
          _interaction2 = _matches$_i[3];

      _interaction2[method](_pointer, event, _eventTarget, _curEventTarget);
    }
  };
}

function getInteraction(searchDetails) {
  var pointerType = searchDetails.pointerType,
      scope = searchDetails.scope;

  var foundInteraction = _interactionFinder["default"].search(searchDetails);

  var signalArg = {
    interaction: foundInteraction,
    searchDetails: searchDetails
  };
  scope.fire('interactions:find', signalArg);
  return signalArg.interaction || scope.interactions["new"]({
    pointerType: pointerType
  });
}

function onDocSignal(_ref7, eventMethodName) {
  var doc = _ref7.doc,
      scope = _ref7.scope,
      options = _ref7.options;
  var docEvents = scope.interactions.docEvents;
  var eventMethod = _events["default"][eventMethodName];

  if (scope.browser.isIOS && !options.events) {
    options.events = {
      passive: false
    };
  } // delegate event listener


  for (var eventType in _events["default"].delegatedEvents) {
    eventMethod(doc, eventType, _events["default"].delegateListener);
    eventMethod(doc, eventType, _events["default"].delegateUseCapture, true);
  }

  var eventOptions = options && options.events;

  for (var _i7 = 0; _i7 < docEvents.length; _i7++) {
    var _ref8;

    _ref8 = docEvents[_i7];
    var _ref9 = _ref8,
        type = _ref9.type,
        listener = _ref9.listener;
    eventMethod(doc, type, listener, eventOptions);
  }
}

var _default = {
  id: 'core/interactions',
  install: install,
  listeners: {
    'scope:add-document': function scopeAddDocument(arg) {
      return onDocSignal(arg, 'add');
    },
    'scope:remove-document': function scopeRemoveDocument(arg) {
      return onDocSignal(arg, 'remove');
    }
  },
  onDocSignal: onDocSignal,
  doOnInteractions: doOnInteractions,
  methodNames: methodNames
};
exports["default"] = _default;

});
var _$Interaction_18 = createModuleFactory(function (module, exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PointerInfo", {
  enumerable: true,
  get: function get() {
    return _PointerInfo["default"];
  }
});
exports["default"] = exports.Interaction = exports._ProxyMethods = exports._ProxyValues = void 0;

var utils = _interopRequireWildcard(_$utils_55);

var _InteractEvent = _interopRequireWildcard(_$InteractEvent_15);

var _PointerInfo = _interopRequireDefault(_$PointerInfo_19);

var _scope = _$scope_24({});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _ProxyValues;

exports._ProxyValues = _ProxyValues;

(function (_ProxyValues) {
  _ProxyValues["interactable"] = "";
  _ProxyValues["element"] = "";
  _ProxyValues["prepared"] = "";
  _ProxyValues["pointerIsDown"] = "";
  _ProxyValues["pointerWasMoved"] = "";
  _ProxyValues["_proxy"] = "";
})(_ProxyValues || (exports._ProxyValues = _ProxyValues = {}));

var _ProxyMethods;

exports._ProxyMethods = _ProxyMethods;

(function (_ProxyMethods) {
  _ProxyMethods["start"] = "";
  _ProxyMethods["move"] = "";
  _ProxyMethods["end"] = "";
  _ProxyMethods["stop"] = "";
  _ProxyMethods["interacting"] = "";
})(_ProxyMethods || (exports._ProxyMethods = _ProxyMethods = {}));

var Interaction =
/*#__PURE__*/
function () {
  _createClass(Interaction, [{
    key: "pointerMoveTolerance",
    // current interactable being interacted with
    // the target element of the interactable
    // action that's ready to be fired on next move event
    // keep track of added pointers
    // pointerdown/mousedown/touchstart event
    // previous action event
    get: function get() {
      return 1;
    }
    /**
     * @alias Interaction.prototype.move
     */

    /** */

  }]);

  function Interaction(_ref) {
    var _this = this;

    var pointerType = _ref.pointerType,
        scopeFire = _ref.scopeFire;

    _classCallCheck(this, Interaction);

    _defineProperty(this, "interactable", null);

    _defineProperty(this, "element", null);

    _defineProperty(this, "rect", void 0);

    _defineProperty(this, "edges", void 0);

    _defineProperty(this, "_scopeFire", void 0);

    _defineProperty(this, "prepared", {
      name: null,
      axis: null,
      edges: null
    });

    _defineProperty(this, "pointerType", void 0);

    _defineProperty(this, "pointers", []);

    _defineProperty(this, "downEvent", null);

    _defineProperty(this, "downPointer", {});

    _defineProperty(this, "_latestPointer", {
      pointer: null,
      event: null,
      eventTarget: null
    });

    _defineProperty(this, "prevEvent", null);

    _defineProperty(this, "pointerIsDown", false);

    _defineProperty(this, "pointerWasMoved", false);

    _defineProperty(this, "_interacting", false);

    _defineProperty(this, "_ending", false);

    _defineProperty(this, "_stopped", true);

    _defineProperty(this, "_proxy", null);

    _defineProperty(this, "simulation", null);

    _defineProperty(this, "doMove", utils.warnOnce(function (signalArg) {
      this.move(signalArg);
    }, 'The interaction.doMove() method has been renamed to interaction.move()'));

    _defineProperty(this, "coords", {
      // Starting InteractEvent pointer coordinates
      start: utils.pointer.newCoords(),
      // Previous native pointer move event coordinates
      prev: utils.pointer.newCoords(),
      // current native pointer move event coordinates
      cur: utils.pointer.newCoords(),
      // Change in coordinates and time of the pointer
      delta: utils.pointer.newCoords(),
      // pointer velocity
      velocity: utils.pointer.newCoords()
    });

    this._scopeFire = scopeFire;
    this.pointerType = pointerType;
    var that = this;
    this._proxy = {};

    var _loop = function _loop(key) {
      Object.defineProperty(_this._proxy, key, {
        get: function get() {
          return that[key];
        }
      });
    };

    for (var key in _ProxyValues) {
      _loop(key);
    }

    var _loop2 = function _loop2(_key) {
      Object.defineProperty(_this._proxy, _key, {
        value: function value() {
          return that[_key].apply(that, arguments);
        }
      });
    };

    for (var _key in _ProxyMethods) {
      _loop2(_key);
    }

    this._scopeFire('interactions:new', {
      interaction: this
    });
  }

  _createClass(Interaction, [{
    key: "pointerDown",
    value: function pointerDown(pointer, event, eventTarget) {
      var pointerIndex = this.updatePointer(pointer, event, eventTarget, true);

      this._scopeFire('interactions:down', {
        pointer: pointer,
        event: event,
        eventTarget: eventTarget,
        pointerIndex: pointerIndex,
        type: 'down',
        interaction: this
      });
    }
    /**
     * ```js
     * interact(target)
     *   .draggable({
     *     // disable the default drag start by down->move
     *     manualStart: true
     *   })
     *   // start dragging after the user holds the pointer down
     *   .on('hold', function (event) {
     *     var interaction = event.interaction
     *
     *     if (!interaction.interacting()) {
     *       interaction.start({ name: 'drag' },
     *                         event.interactable,
     *                         event.currentTarget)
     *     }
     * })
     * ```
     *
     * Start an action with the given Interactable and Element as tartgets. The
     * action must be enabled for the target Interactable and an appropriate
     * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
     *
     * Use it with `interactable.<action>able({ manualStart: false })` to always
     * [start actions manually](https://github.com/taye/interact.js/issues/114)
     *
     * @param {object} action   The action to be performed - drag, resize, etc.
     * @param {Interactable} target  The Interactable to target
     * @param {Element} element The DOM Element to target
     * @return {object} interact
     */

  }, {
    key: "start",
    value: function start(action, interactable, element) {
      if (this.interacting() || !this.pointerIsDown || this.pointers.length < (action.name === _scope.ActionName.Gesture ? 2 : 1) || !interactable.options[action.name].enabled) {
        return false;
      }

      utils.copyAction(this.prepared, action);
      this.interactable = interactable;
      this.element = element;
      this.rect = interactable.getRect(element);
      this.edges = this.prepared.edges;
      this._stopped = false;
      this._interacting = this._doPhase({
        interaction: this,
        event: this.downEvent,
        phase: _InteractEvent.EventPhase.Start
      }) && !this._stopped;
      return this._interacting;
    }
  }, {
    key: "pointerMove",
    value: function pointerMove(pointer, event, eventTarget) {
      if (!this.simulation && !(this.modifiers && this.modifiers.endPrevented)) {
        this.updatePointer(pointer, event, eventTarget, false);
        utils.pointer.setCoords(this.coords.cur, this.pointers.map(function (p) {
          return p.pointer;
        }), this._now());
      }

      var duplicateMove = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
      var dx;
      var dy; // register movement greater than pointerMoveTolerance

      if (this.pointerIsDown && !this.pointerWasMoved) {
        dx = this.coords.cur.client.x - this.coords.start.client.x;
        dy = this.coords.cur.client.y - this.coords.start.client.y;
        this.pointerWasMoved = utils.hypot(dx, dy) > this.pointerMoveTolerance;
      }

      var signalArg = {
        pointer: pointer,
        pointerIndex: this.getPointerIndex(pointer),
        event: event,
        type: 'move',
        eventTarget: eventTarget,
        dx: dx,
        dy: dy,
        duplicate: duplicateMove,
        interaction: this
      };

      if (!duplicateMove) {
        // set pointer coordinate, time changes and velocity
        utils.pointer.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur);
        utils.pointer.setCoordVelocity(this.coords.velocity, this.coords.delta);
      }

      this._scopeFire('interactions:move', signalArg);

      if (!duplicateMove) {
        // if interacting, fire an 'action-move' signal etc
        if (this.interacting()) {
          signalArg.type = null;
          this.move(signalArg);
        }

        if (this.pointerWasMoved) {
          utils.pointer.copyCoords(this.coords.prev, this.coords.cur);
        }
      }
    }
    /**
     * ```js
     * interact(target)
     *   .draggable(true)
     *   .on('dragmove', function (event) {
     *     if (someCondition) {
     *       // change the snap settings
     *       event.interactable.draggable({ snap: { targets: [] }})
     *       // fire another move event with re-calculated snap
     *       event.interaction.move()
     *     }
     *   })
     * ```
     *
     * Force a move of the current action at the same coordinates. Useful if
     * snap/restrict has been changed and you want a movement with the new
     * settings.
     */

  }, {
    key: "move",
    value: function move(signalArg) {
      signalArg = utils.extend({
        pointer: this._latestPointer.pointer,
        event: this._latestPointer.event,
        eventTarget: this._latestPointer.eventTarget,
        interaction: this
      }, signalArg || {});
      signalArg.phase = _InteractEvent.EventPhase.Move;

      this._doPhase(signalArg);
    } // End interact move events and stop auto-scroll unless simulation is running

  }, {
    key: "pointerUp",
    value: function pointerUp(pointer, event, eventTarget, curEventTarget) {
      var pointerIndex = this.getPointerIndex(pointer);

      if (pointerIndex === -1) {
        pointerIndex = this.updatePointer(pointer, event, eventTarget, false);
      }

      var type = /cancel$/i.test(event.type) ? 'cancel' : 'up';

      this._scopeFire("interactions:".concat(type), {
        pointer: pointer,
        pointerIndex: pointerIndex,
        event: event,
        eventTarget: eventTarget,
        type: type,
        curEventTarget: curEventTarget,
        interaction: this
      });

      if (!this.simulation) {
        this.end(event);
      }

      this.pointerIsDown = false;
      this.removePointer(pointer, event);
    }
  }, {
    key: "documentBlur",
    value: function documentBlur(event) {
      this.end(event);

      this._scopeFire('interactions:blur', {
        event: event,
        type: 'blur',
        interaction: this
      });
    }
    /**
     * ```js
     * interact(target)
     *   .draggable(true)
     *   .on('move', function (event) {
     *     if (event.pageX > 1000) {
     *       // end the current action
     *       event.interaction.end()
     *       // stop all further listeners from being called
     *       event.stopImmediatePropagation()
     *     }
     *   })
     * ```
     *
     * @param {PointerEvent} [event]
     */

  }, {
    key: "end",
    value: function end(event) {
      this._ending = true;
      event = event || this._latestPointer.event;
      var endPhaseResult;

      if (this.interacting()) {
        endPhaseResult = this._doPhase({
          event: event,
          interaction: this,
          phase: _InteractEvent.EventPhase.End
        });
      }

      this._ending = false;

      if (endPhaseResult === true) {
        this.stop();
      }
    }
  }, {
    key: "currentAction",
    value: function currentAction() {
      return this._interacting ? this.prepared.name : null;
    }
  }, {
    key: "interacting",
    value: function interacting() {
      return this._interacting;
    }
    /** */

  }, {
    key: "stop",
    value: function stop() {
      this._scopeFire('interactions:stop', {
        interaction: this
      });

      this.interactable = this.element = null;
      this._interacting = false;
      this._stopped = true;
      this.prepared.name = this.prevEvent = null;
    }
  }, {
    key: "getPointerIndex",
    value: function getPointerIndex(pointer) {
      var pointerId = utils.pointer.getPointerId(pointer); // mouse and pen interactions may have only one pointer

      return this.pointerType === 'mouse' || this.pointerType === 'pen' ? this.pointers.length - 1 : utils.arr.findIndex(this.pointers, function (curPointer) {
        return curPointer.id === pointerId;
      });
    }
  }, {
    key: "getPointerInfo",
    value: function getPointerInfo(pointer) {
      return this.pointers[this.getPointerIndex(pointer)];
    }
  }, {
    key: "updatePointer",
    value: function updatePointer(pointer, event, eventTarget, down) {
      var id = utils.pointer.getPointerId(pointer);
      var pointerIndex = this.getPointerIndex(pointer);
      var pointerInfo = this.pointers[pointerIndex];
      down = down === false ? false : down || /(down|start)$/i.test(event.type);

      if (!pointerInfo) {
        pointerInfo = new _PointerInfo["default"](id, pointer, event, null, null);
        pointerIndex = this.pointers.length;
        this.pointers.push(pointerInfo);
      } else {
        pointerInfo.pointer = pointer;
      }

      if (down) {
        this.pointerIsDown = true;

        if (!this.interacting()) {
          utils.pointer.setCoords(this.coords.start, this.pointers.map(function (p) {
            return p.pointer;
          }), this._now());
          utils.pointer.copyCoords(this.coords.cur, this.coords.start);
          utils.pointer.copyCoords(this.coords.prev, this.coords.start);
          utils.pointer.pointerExtend(this.downPointer, pointer);
          this.downEvent = event;
          pointerInfo.downTime = this.coords.cur.timeStamp;
          pointerInfo.downTarget = eventTarget;
          this.pointerWasMoved = false;
        }
      }

      this._updateLatestPointer(pointer, event, eventTarget);

      this._scopeFire('interactions:update-pointer', {
        pointer: pointer,
        event: event,
        eventTarget: eventTarget,
        down: down,
        pointerInfo: pointerInfo,
        pointerIndex: pointerIndex,
        interaction: this
      });

      return pointerIndex;
    }
  }, {
    key: "removePointer",
    value: function removePointer(pointer, event) {
      var pointerIndex = this.getPointerIndex(pointer);

      if (pointerIndex === -1) {
        return;
      }

      var pointerInfo = this.pointers[pointerIndex];

      this._scopeFire('interactions:remove-pointer', {
        pointer: pointer,
        event: event,
        eventTarget: null,
        pointerIndex: pointerIndex,
        pointerInfo: pointerInfo,
        interaction: this
      });

      this.pointers.splice(pointerIndex, 1);
    }
  }, {
    key: "_updateLatestPointer",
    value: function _updateLatestPointer(pointer, event, eventTarget) {
      this._latestPointer.pointer = pointer;
      this._latestPointer.event = event;
      this._latestPointer.eventTarget = eventTarget;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._latestPointer.pointer = null;
      this._latestPointer.event = null;
      this._latestPointer.eventTarget = null;
    }
  }, {
    key: "_createPreparedEvent",
    value: function _createPreparedEvent(event, phase, preEnd, type) {
      var actionName = this.prepared.name;
      return new _InteractEvent["default"](this, event, actionName, phase, this.element, null, preEnd, type);
    }
  }, {
    key: "_fireEvent",
    value: function _fireEvent(iEvent) {
      this.interactable.fire(iEvent);

      if (!this.prevEvent || iEvent.timeStamp >= this.prevEvent.timeStamp) {
        this.prevEvent = iEvent;
      }
    }
  }, {
    key: "_doPhase",
    value: function _doPhase(signalArg) {
      var event = signalArg.event,
          phase = signalArg.phase,
          preEnd = signalArg.preEnd,
          type = signalArg.type;

      var beforeResult = this._scopeFire("interactions:before-action-".concat(phase), signalArg);

      if (beforeResult === false) {
        return false;
      }

      var iEvent = signalArg.iEvent = this._createPreparedEvent(event, phase, preEnd, type);

      var rect = this.rect;

      if (rect) {
        // update the rect modifications
        var edges = this.edges || this.prepared.edges || {
          left: true,
          right: true,
          top: true,
          bottom: true
        };

        if (edges.top) {
          rect.top += iEvent.delta.y;
        }

        if (edges.bottom) {
          rect.bottom += iEvent.delta.y;
        }

        if (edges.left) {
          rect.left += iEvent.delta.x;
        }

        if (edges.right) {
          rect.right += iEvent.delta.x;
        }

        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
      }

      this._scopeFire("interactions:action-".concat(phase), signalArg);

      this._fireEvent(iEvent);

      this._scopeFire("interactions:after-action-".concat(phase), signalArg);

      return true;
    }
  }, {
    key: "_now",
    value: function _now() {
      return Date.now();
    }
  }]);

  return Interaction;
}();

exports.Interaction = Interaction;
var _default = Interaction;
exports["default"] = _default;

});
var _$domObjects_49 = {};
"use strict";

Object.defineProperty(_$domObjects_49, "__esModule", {
  value: true
});
_$domObjects_49["default"] = void 0;
var domObjects = {
  init: init,
  document: null,
  DocumentFragment: null,
  SVGElement: null,
  SVGSVGElement: null,
  // eslint-disable-next-line no-undef
  SVGElementInstance: null,
  Element: null,
  HTMLElement: null,
  Event: null,
  Touch: null,
  PointerEvent: null
};

function blank() {}

var _default = domObjects;
_$domObjects_49["default"] = _default;

function init(window) {
  var win = window;
  domObjects.document = win.document;
  domObjects.DocumentFragment = win.DocumentFragment || blank;
  domObjects.SVGElement = win.SVGElement || blank;
  domObjects.SVGSVGElement = win.SVGSVGElement || blank;
  domObjects.SVGElementInstance = win.SVGElementInstance || blank;
  domObjects.Element = win.Element || blank;
  domObjects.HTMLElement = win.HTMLElement || domObjects.Element;
  domObjects.Event = win.Event;
  domObjects.Touch = win.Touch || blank;
  domObjects.PointerEvent = win.PointerEvent || win.MSPointerEvent;
}

var _$arr_46 = {};
"use strict";

Object.defineProperty(_$arr_46, "__esModule", {
  value: true
});
_$arr_46.contains = contains;
_$arr_46.remove = remove;
_$arr_46.merge = merge;
_$arr_46.from = from;
_$arr_46.findIndex = findIndex;
_$arr_46.find = find;

function contains(array, target) {
  return array.indexOf(target) !== -1;
}

function remove(array, target) {
  return array.splice(array.indexOf(target), 1);
}

function merge(target, source) {
  for (var _i = 0; _i < source.length; _i++) {
    var _ref;

    _ref = source[_i];
    var item = _ref;
    target.push(item);
  }

  return target;
}

function from(source) {
  return merge([], source);
}

function findIndex(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}

function find(array, func) {
  return array[findIndex(array, func)];
}

var _$isWindow_57 = {};
"use strict";

Object.defineProperty(_$isWindow_57, "__esModule", {
  value: true
});
_$isWindow_57["default"] = void 0;

var ___default_57 = function _default(thing) {
  return !!(thing && thing.Window) && thing instanceof thing.Window;
};

_$isWindow_57["default"] = ___default_57;

var _$window_65 = {};
"use strict";

Object.defineProperty(_$window_65, "__esModule", {
  value: true
});
_$window_65.init = __init_65;
_$window_65.getWindow = getWindow;
_$window_65["default"] = void 0;

var _isWindow = _interopRequireDefault(_$isWindow_57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var win = {
  realWindow: undefined,
  window: undefined,
  getWindow: getWindow,
  init: __init_65
};

function __init_65(window) {
  // get wrapped window if using Shadow DOM polyfill
  win.realWindow = window; // create a TextNode

  var el = window.document.createTextNode(''); // check if it's wrapped by a polyfill

  if (el.ownerDocument !== window.document && typeof window.wrap === 'function' && window.wrap(el) === el) {
    // use wrapped window
    window = window.wrap(window);
  }

  win.window = window;
}

if (typeof window === 'undefined') {
  win.window = undefined;
  win.realWindow = undefined;
} else {
  __init_65(window);
}

function getWindow(node) {
  if ((0, _isWindow["default"])(node)) {
    return node;
  }

  var rootNode = node.ownerDocument || node;
  return rootNode.defaultView || win.window;
}

win.init = __init_65;
var ___default_65 = win;
_$window_65["default"] = ___default_65;

var _$is_56 = {};
"use strict";

Object.defineProperty(_$is_56, "__esModule", {
  value: true
});
_$is_56.array = _$is_56.plainObject = _$is_56.element = _$is_56.string = _$is_56.bool = _$is_56.number = _$is_56.func = _$is_56.object = _$is_56.docFrag = _$is_56.window = void 0;

var ___isWindow_56 = ___interopRequireDefault_56(_$isWindow_57);

var _window2 = ___interopRequireDefault_56(_$window_65);

function ___interopRequireDefault_56(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __window_56 = function window(thing) {
  return thing === _window2["default"].window || (0, ___isWindow_56["default"])(thing);
};

_$is_56.window = __window_56;

var docFrag = function docFrag(thing) {
  return object(thing) && thing.nodeType === 11;
};

_$is_56.docFrag = docFrag;

var object = function object(thing) {
  return !!thing && _typeof(thing) === 'object';
};

_$is_56.object = object;

var func = function func(thing) {
  return typeof thing === 'function';
};

_$is_56.func = func;

var number = function number(thing) {
  return typeof thing === 'number';
};

_$is_56.number = number;

var bool = function bool(thing) {
  return typeof thing === 'boolean';
};

_$is_56.bool = bool;

var string = function string(thing) {
  return typeof thing === 'string';
};

_$is_56.string = string;

var element = function element(thing) {
  if (!thing || _typeof(thing) !== 'object') {
    return false;
  }

  var _window = _window2["default"].getWindow(thing) || _window2["default"].window;

  return /object|function/.test(_typeof(_window.Element)) ? thing instanceof _window.Element // DOM2
  : thing.nodeType === 1 && typeof thing.nodeName === 'string';
};

_$is_56.element = element;

var plainObject = function plainObject(thing) {
  return object(thing) && !!thing.constructor && /function Object\b/.test(thing.constructor.toString());
};

_$is_56.plainObject = plainObject;

var array = function array(thing) {
  return object(thing) && typeof thing.length !== 'undefined' && func(thing.splice);
};

_$is_56.array = array;

var _$browser_47 = {};
"use strict";

function ___typeof_47(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_47 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_47 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_47(obj); }

Object.defineProperty(_$browser_47, "__esModule", {
  value: true
});
_$browser_47["default"] = void 0;

var _domObjects = ___interopRequireDefault_47(_$domObjects_49);

var is = _interopRequireWildcard(_$is_56);

var _window = ___interopRequireDefault_47(_$window_65);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_47(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_47(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var browser = {
  init: __init_47,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};

function __init_47(window) {
  var Element = _domObjects["default"].Element;
  var navigator = _window["default"].window.navigator; // Does the browser support touch input?

  browser.supportsTouch = 'ontouchstart' in window || is.func(window.DocumentTouch) && _domObjects["default"].document instanceof window.DocumentTouch; // Does the browser support PointerEvents

  browser.supportsPointerEvent = navigator.pointerEnabled !== false && !!_domObjects["default"].PointerEvent;
  browser.isIOS = /iP(hone|od|ad)/.test(navigator.platform); // scrolling doesn't change the result of getClientRects on iOS 7

  browser.isIOS7 = /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion);
  browser.isIe9 = /MSIE 9/.test(navigator.userAgent); // Opera Mobile must be handled differently

  browser.isOperaMobile = navigator.appName === 'Opera' && browser.supportsTouch && /Presto/.test(navigator.userAgent); // prefix matchesSelector

  browser.prefixedMatchesSelector = 'matches' in Element.prototype ? 'matches' : 'webkitMatchesSelector' in Element.prototype ? 'webkitMatchesSelector' : 'mozMatchesSelector' in Element.prototype ? 'mozMatchesSelector' : 'oMatchesSelector' in Element.prototype ? 'oMatchesSelector' : 'msMatchesSelector';
  browser.pEventTypes = browser.supportsPointerEvent ? _domObjects["default"].PointerEvent === window.MSPointerEvent ? {
    up: 'MSPointerUp',
    down: 'MSPointerDown',
    over: 'mouseover',
    out: 'mouseout',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel'
  } : {
    up: 'pointerup',
    down: 'pointerdown',
    over: 'pointerover',
    out: 'pointerout',
    move: 'pointermove',
    cancel: 'pointercancel'
  } : null; // because Webkit and Opera still use 'mousewheel' event type

  browser.wheelEvent = 'onmousewheel' in _domObjects["default"].document ? 'mousewheel' : 'wheel';
}

var ___default_47 = browser;
_$browser_47["default"] = ___default_47;

var _$domUtils_50 = {};
"use strict";

function ___typeof_50(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_50 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_50 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_50(obj); }

Object.defineProperty(_$domUtils_50, "__esModule", {
  value: true
});
_$domUtils_50.nodeContains = nodeContains;
_$domUtils_50.closest = closest;
_$domUtils_50.parentNode = parentNode;
_$domUtils_50.matchesSelector = matchesSelector;
_$domUtils_50.indexOfDeepestElement = indexOfDeepestElement;
_$domUtils_50.matchesUpTo = matchesUpTo;
_$domUtils_50.getActualElement = getActualElement;
_$domUtils_50.getScrollXY = getScrollXY;
_$domUtils_50.getElementClientRect = getElementClientRect;
_$domUtils_50.getElementRect = getElementRect;
_$domUtils_50.getPath = getPath;
_$domUtils_50.trySelector = trySelector;

var _browser = ___interopRequireDefault_50(_$browser_47);

var ___domObjects_50 = ___interopRequireDefault_50(_$domObjects_49);

var __is_50 = ___interopRequireWildcard_50(_$is_56);

var ___window_50 = ___interopRequireWildcard_50(_$window_65);

function ___getRequireWildcardCache_50() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_50 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_50(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_50(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_50(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_50(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function nodeContains(parent, child) {
  while (child) {
    if (child === parent) {
      return true;
    }

    child = child.parentNode;
  }

  return false;
}

function closest(element, selector) {
  while (__is_50.element(element)) {
    if (matchesSelector(element, selector)) {
      return element;
    }

    element = parentNode(element);
  }

  return null;
}

function parentNode(node) {
  var parent = node.parentNode;

  if (__is_50.docFrag(parent)) {
    // skip past #shado-root fragments
    // tslint:disable-next-line
    while ((parent = parent.host) && __is_50.docFrag(parent)) {
      continue;
    }

    return parent;
  }

  return parent;
}

function matchesSelector(element, selector) {
  // remove /deep/ from selectors if shadowDOM polyfill is used
  if (___window_50["default"].window !== ___window_50["default"].realWindow) {
    selector = selector.replace(/\/deep\//g, ' ');
  }

  return element[_browser["default"].prefixedMatchesSelector](selector);
}

var getParent = function getParent(el) {
  return el.parentNode ? el.parentNode : el.host;
}; // Test for the element that's "above" all other qualifiers


function indexOfDeepestElement(elements) {
  var deepestZoneParents = [];
  var deepestZone = elements[0];
  var index = deepestZone ? 0 : -1;
  var i;
  var n;

  for (i = 1; i < elements.length; i++) {
    var dropzone = elements[i]; // an element might belong to multiple selector dropzones

    if (!dropzone || dropzone === deepestZone) {
      continue;
    }

    if (!deepestZone) {
      deepestZone = dropzone;
      index = i;
      continue;
    } // check if the deepest or current are document.documentElement or document.rootElement
    // - if the current dropzone is, do nothing and continue


    if (dropzone.parentNode === dropzone.ownerDocument) {
      continue;
    } // - if deepest is, update with the current dropzone and continue to next
    else if (deepestZone.parentNode === dropzone.ownerDocument) {
        deepestZone = dropzone;
        index = i;
        continue;
      } // compare zIndex of siblings


    if (dropzone.parentNode === deepestZone.parentNode) {
      var deepestZIndex = parseInt((0, ___window_50.getWindow)(deepestZone).getComputedStyle(deepestZone).zIndex, 10) || 0;
      var dropzoneZIndex = parseInt((0, ___window_50.getWindow)(dropzone).getComputedStyle(dropzone).zIndex, 10) || 0;

      if (dropzoneZIndex >= deepestZIndex) {
        deepestZone = dropzone;
        index = i;
      }

      continue;
    } // populate the ancestry array for the latest deepest dropzone


    if (!deepestZoneParents.length) {
      var _parent = deepestZone;
      var parentParent = void 0;

      while ((parentParent = getParent(_parent)) && parentParent !== _parent.ownerDocument) {
        deepestZoneParents.unshift(_parent);
        _parent = parentParent;
      }
    }

    var parent = void 0; // if this element is an svg element and the current deepest is an
    // HTMLElement

    if (deepestZone instanceof ___domObjects_50["default"].HTMLElement && dropzone instanceof ___domObjects_50["default"].SVGElement && !(dropzone instanceof ___domObjects_50["default"].SVGSVGElement)) {
      if (dropzone === deepestZone.parentNode) {
        continue;
      }

      parent = dropzone.ownerSVGElement;
    } else {
      parent = dropzone;
    }

    var dropzoneParents = [];

    while (parent.parentNode !== parent.ownerDocument) {
      dropzoneParents.unshift(parent);
      parent = getParent(parent);
    }

    n = 0; // get (position of last common ancestor) + 1

    while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
      n++;
    }

    var parents = [dropzoneParents[n - 1], dropzoneParents[n], deepestZoneParents[n]];
    var child = parents[0].lastChild;

    while (child) {
      if (child === parents[1]) {
        deepestZone = dropzone;
        index = i;
        deepestZoneParents = dropzoneParents;
        break;
      } else if (child === parents[2]) {
        break;
      }

      child = child.previousSibling;
    }
  }

  return index;
}

function matchesUpTo(element, selector, limit) {
  while (__is_50.element(element)) {
    if (matchesSelector(element, selector)) {
      return true;
    }

    element = parentNode(element);

    if (element === limit) {
      return matchesSelector(element, selector);
    }
  }

  return false;
}

function getActualElement(element) {
  return element instanceof ___domObjects_50["default"].SVGElementInstance ? element.correspondingUseElement : element;
}

function getScrollXY(relevantWindow) {
  relevantWindow = relevantWindow || ___window_50["default"].window;
  return {
    x: relevantWindow.scrollX || relevantWindow.document.documentElement.scrollLeft,
    y: relevantWindow.scrollY || relevantWindow.document.documentElement.scrollTop
  };
}

function getElementClientRect(element) {
  var clientRect = element instanceof ___domObjects_50["default"].SVGElement ? element.getBoundingClientRect() : element.getClientRects()[0];
  return clientRect && {
    left: clientRect.left,
    right: clientRect.right,
    top: clientRect.top,
    bottom: clientRect.bottom,
    width: clientRect.width || clientRect.right - clientRect.left,
    height: clientRect.height || clientRect.bottom - clientRect.top
  };
}

function getElementRect(element) {
  var clientRect = getElementClientRect(element);

  if (!_browser["default"].isIOS7 && clientRect) {
    var scroll = getScrollXY(___window_50["default"].getWindow(element));
    clientRect.left += scroll.x;
    clientRect.right += scroll.x;
    clientRect.top += scroll.y;
    clientRect.bottom += scroll.y;
  }

  return clientRect;
}

function getPath(node) {
  var path = [];

  while (node) {
    path.push(node);
    node = parentNode(node);
  }

  return path;
}

function trySelector(value) {
  if (!__is_50.string(value)) {
    return false;
  } // an exception will be raised if it is invalid


  ___domObjects_50["default"].document.querySelector(value);

  return true;
}

var _$hypot_54 = {};
"use strict";

Object.defineProperty(_$hypot_54, "__esModule", {
  value: true
});
_$hypot_54["default"] = void 0;

var ___default_54 = function _default(x, y) {
  return Math.sqrt(x * x + y * y);
};

_$hypot_54["default"] = ___default_54;

var _$pointerExtend_59 = {};
"use strict";

Object.defineProperty(_$pointerExtend_59, "__esModule", {
  value: true
});
_$pointerExtend_59["default"] = void 0;

function pointerExtend(dest, source) {
  for (var prop in source) {
    var prefixedPropREs = pointerExtend.prefixedPropREs;
    var deprecated = false; // skip deprecated prefixed properties

    for (var vendor in prefixedPropREs) {
      if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
        deprecated = true;
        break;
      }
    }

    if (!deprecated && typeof source[prop] !== 'function') {
      dest[prop] = source[prop];
    }
  }

  return dest;
}

pointerExtend.prefixedPropREs = {
  webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
  moz: /(Pressure)$/
};
var ___default_59 = pointerExtend;
_$pointerExtend_59["default"] = ___default_59;

var _$pointerUtils_60 = {};
"use strict";

function ___typeof_60(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_60 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_60 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_60(obj); }

Object.defineProperty(_$pointerUtils_60, "__esModule", {
  value: true
});
_$pointerUtils_60.copyCoords = copyCoords;
_$pointerUtils_60.setCoordDeltas = setCoordDeltas;
_$pointerUtils_60.setCoordVelocity = setCoordVelocity;
_$pointerUtils_60.setZeroCoords = setZeroCoords;
_$pointerUtils_60.isNativePointer = isNativePointer;
_$pointerUtils_60.getXY = getXY;
_$pointerUtils_60.getPageXY = getPageXY;
_$pointerUtils_60.getClientXY = getClientXY;
_$pointerUtils_60.getPointerId = getPointerId;
_$pointerUtils_60.setCoords = setCoords;
_$pointerUtils_60.getTouchPair = getTouchPair;
_$pointerUtils_60.pointerAverage = pointerAverage;
_$pointerUtils_60.touchBBox = touchBBox;
_$pointerUtils_60.touchDistance = touchDistance;
_$pointerUtils_60.touchAngle = touchAngle;
_$pointerUtils_60.getPointerType = getPointerType;
_$pointerUtils_60.getEventTargets = getEventTargets;
_$pointerUtils_60.newCoords = newCoords;
_$pointerUtils_60.coordsToEvent = coordsToEvent;
Object.defineProperty(_$pointerUtils_60, "pointerExtend", {
  enumerable: true,
  get: function get() {
    return _pointerExtend["default"];
  }
});

var ___browser_60 = ___interopRequireDefault_60(_$browser_47);

var ___domObjects_60 = ___interopRequireDefault_60(_$domObjects_49);

var domUtils = ___interopRequireWildcard_60(_$domUtils_50);

var _hypot = ___interopRequireDefault_60(_$hypot_54);

var __is_60 = ___interopRequireWildcard_60(_$is_56);

var _pointerExtend = ___interopRequireDefault_60(_$pointerExtend_59);

function ___getRequireWildcardCache_60() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_60 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_60(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_60(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_60(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_60(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function copyCoords(dest, src) {
  dest.page = dest.page || {};
  dest.page.x = src.page.x;
  dest.page.y = src.page.y;
  dest.client = dest.client || {};
  dest.client.x = src.client.x;
  dest.client.y = src.client.y;
  dest.timeStamp = src.timeStamp;
}

function setCoordDeltas(targetObj, prev, cur) {
  targetObj.page.x = cur.page.x - prev.page.x;
  targetObj.page.y = cur.page.y - prev.page.y;
  targetObj.client.x = cur.client.x - prev.client.x;
  targetObj.client.y = cur.client.y - prev.client.y;
  targetObj.timeStamp = cur.timeStamp - prev.timeStamp;
}

function setCoordVelocity(targetObj, delta) {
  var dt = Math.max(delta.timeStamp / 1000, 0.001);
  targetObj.page.x = delta.page.x / dt;
  targetObj.page.y = delta.page.y / dt;
  targetObj.client.x = delta.client.x / dt;
  targetObj.client.y = delta.client.y / dt;
  targetObj.timeStamp = dt;
}

function setZeroCoords(targetObj) {
  targetObj.page.x = 0;
  targetObj.page.y = 0;
  targetObj.client.x = 0;
  targetObj.client.y = 0;
}

function isNativePointer(pointer) {
  return pointer instanceof ___domObjects_60["default"].Event || pointer instanceof ___domObjects_60["default"].Touch;
} // Get specified X/Y coords for mouse or event.touches[0]


function getXY(type, pointer, xy) {
  xy = xy || {};
  type = type || 'page';
  xy.x = pointer[type + 'X'];
  xy.y = pointer[type + 'Y'];
  return xy;
}

function getPageXY(pointer, page) {
  page = page || {
    x: 0,
    y: 0
  }; // Opera Mobile handles the viewport and scrolling oddly

  if (___browser_60["default"].isOperaMobile && isNativePointer(pointer)) {
    getXY('screen', pointer, page);
    page.x += window.scrollX;
    page.y += window.scrollY;
  } else {
    getXY('page', pointer, page);
  }

  return page;
}

function getClientXY(pointer, client) {
  client = client || {};

  if (___browser_60["default"].isOperaMobile && isNativePointer(pointer)) {
    // Opera Mobile handles the viewport and scrolling oddly
    getXY('screen', pointer, client);
  } else {
    getXY('client', pointer, client);
  }

  return client;
}

function getPointerId(pointer) {
  return __is_60.number(pointer.pointerId) ? pointer.pointerId : pointer.identifier;
}

function setCoords(targetObj, pointers, timeStamp) {
  var pointer = pointers.length > 1 ? pointerAverage(pointers) : pointers[0];
  var tmpXY = {};
  getPageXY(pointer, tmpXY);
  targetObj.page.x = tmpXY.x;
  targetObj.page.y = tmpXY.y;
  getClientXY(pointer, tmpXY);
  targetObj.client.x = tmpXY.x;
  targetObj.client.y = tmpXY.y;
  targetObj.timeStamp = timeStamp;
}

function getTouchPair(event) {
  var touches = []; // array of touches is supplied

  if (__is_60.array(event)) {
    touches[0] = event[0];
    touches[1] = event[1];
  } // an event
  else {
      if (event.type === 'touchend') {
        if (event.touches.length === 1) {
          touches[0] = event.touches[0];
          touches[1] = event.changedTouches[0];
        } else if (event.touches.length === 0) {
          touches[0] = event.changedTouches[0];
          touches[1] = event.changedTouches[1];
        }
      } else {
        touches[0] = event.touches[0];
        touches[1] = event.touches[1];
      }
    }

  return touches;
}

function pointerAverage(pointers) {
  var average = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };

  for (var _i = 0; _i < pointers.length; _i++) {
    var _ref;

    _ref = pointers[_i];
    var pointer = _ref;

    for (var _prop in average) {
      average[_prop] += pointer[_prop];
    }
  }

  for (var prop in average) {
    average[prop] /= pointers.length;
  }

  return average;
}

function touchBBox(event) {
  if (!event.length && !(event.touches && event.touches.length > 1)) {
    return null;
  }

  var touches = getTouchPair(event);
  var minX = Math.min(touches[0].pageX, touches[1].pageX);
  var minY = Math.min(touches[0].pageY, touches[1].pageY);
  var maxX = Math.max(touches[0].pageX, touches[1].pageX);
  var maxY = Math.max(touches[0].pageY, touches[1].pageY);
  return {
    x: minX,
    y: minY,
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}

function touchDistance(event, deltaSource) {
  var sourceX = deltaSource + 'X';
  var sourceY = deltaSource + 'Y';
  var touches = getTouchPair(event);
  var dx = touches[0][sourceX] - touches[1][sourceX];
  var dy = touches[0][sourceY] - touches[1][sourceY];
  return (0, _hypot["default"])(dx, dy);
}

function touchAngle(event, deltaSource) {
  var sourceX = deltaSource + 'X';
  var sourceY = deltaSource + 'Y';
  var touches = getTouchPair(event);
  var dx = touches[1][sourceX] - touches[0][sourceX];
  var dy = touches[1][sourceY] - touches[0][sourceY];
  var angle = 180 * Math.atan2(dy, dx) / Math.PI;
  return angle;
}

function getPointerType(pointer) {
  return __is_60.string(pointer.pointerType) ? pointer.pointerType : __is_60.number(pointer.pointerType) ? [undefined, undefined, 'touch', 'pen', 'mouse'][pointer.pointerType] // if the PointerEvent API isn't available, then the "pointer" must
  // be either a MouseEvent, TouchEvent, or Touch object
  : /touch/.test(pointer.type) || pointer instanceof ___domObjects_60["default"].Touch ? 'touch' : 'mouse';
} // [ event.target, event.currentTarget ]


function getEventTargets(event) {
  var path = __is_60.func(event.composedPath) ? event.composedPath() : event.path;
  return [domUtils.getActualElement(path ? path[0] : event.target), domUtils.getActualElement(event.currentTarget)];
}

function newCoords() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  };
}

function coordsToEvent(coords) {
  var event = {
    coords: coords,

    get page() {
      return this.coords.page;
    },

    get client() {
      return this.coords.client;
    },

    get timeStamp() {
      return this.coords.timeStamp;
    },

    get pageX() {
      return this.coords.page.x;
    },

    get pageY() {
      return this.coords.page.y;
    },

    get clientX() {
      return this.coords.client.x;
    },

    get clientY() {
      return this.coords.client.y;
    },

    get pointerId() {
      return this.coords.pointerId;
    },

    get target() {
      return this.coords.target;
    },

    get type() {
      return this.coords.type;
    },

    get pointerType() {
      return this.coords.pointerType;
    },

    get buttons() {
      return this.coords.buttons;
    }

  };
  return event;
}

var _$extend_52 = {};
"use strict";

Object.defineProperty(_$extend_52, "__esModule", {
  value: true
});
_$extend_52["default"] = extend;

function extend(dest, source) {
  for (var prop in source) {
    dest[prop] = source[prop];
  }

  var ret = dest;
  return ret;
}

var _$rect_62 = {};
"use strict";

function ___typeof_62(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_62 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_62 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_62(obj); }

Object.defineProperty(_$rect_62, "__esModule", {
  value: true
});
_$rect_62.getStringOptionResult = getStringOptionResult;
_$rect_62.resolveRectLike = resolveRectLike;
_$rect_62.rectToXY = rectToXY;
_$rect_62.xywhToTlbr = xywhToTlbr;
_$rect_62.tlbrToXywh = tlbrToXywh;

/* removed: var _$domUtils_50 = require("./domUtils.js"); */;

var _extend = ___interopRequireDefault_62(_$extend_52);

var __is_62 = ___interopRequireWildcard_62(_$is_56);

function ___getRequireWildcardCache_62() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_62 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_62(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_62(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_62(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_62(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getStringOptionResult(value, target, element) {
  if (value === 'parent') {
    return (0, _$domUtils_50.parentNode)(element);
  }

  if (value === 'self') {
    return target.getRect(element);
  }

  return (0, _$domUtils_50.closest)(element, value);
}

function resolveRectLike(value, target, element, functionArgs) {
  if (__is_62.string(value)) {
    value = getStringOptionResult(value, target, element);
  } else if (__is_62.func(value)) {
    value = value.apply(void 0, _toConsumableArray(functionArgs));
  }

  if (__is_62.element(value)) {
    value = (0, _$domUtils_50.getElementRect)(value);
  }

  return value;
}

function rectToXY(rect) {
  return rect && {
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top
  };
}

function xywhToTlbr(rect) {
  if (rect && !('left' in rect && 'top' in rect)) {
    rect = (0, _extend["default"])({}, rect);
    rect.left = rect.x || 0;
    rect.top = rect.y || 0;
    rect.right = rect.right || rect.left + rect.width;
    rect.bottom = rect.bottom || rect.top + rect.height;
  }

  return rect;
}

function tlbrToXywh(rect) {
  if (rect && !('x' in rect && 'y' in rect)) {
    rect = (0, _extend["default"])({}, rect);
    rect.x = rect.left || 0;
    rect.y = rect.top || 0;
    rect.width = rect.width || rect.right - rect.x;
    rect.height = rect.height || rect.bottom - rect.y;
  }

  return rect;
}

var _$clone_48 = {};
"use strict";

function ___typeof_48(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_48 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_48 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_48(obj); }

Object.defineProperty(_$clone_48, "__esModule", {
  value: true
});
_$clone_48["default"] = clone;

var arr = ___interopRequireWildcard_48(_$arr_46);

var __is_48 = ___interopRequireWildcard_48(_$is_56);

function ___getRequireWildcardCache_48() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_48 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_48(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_48(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_48(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function clone(source) {
  var dest = {};

  for (var prop in source) {
    var value = source[prop];

    if (__is_48.plainObject(value)) {
      dest[prop] = clone(value);
    } else if (__is_48.array(value)) {
      dest[prop] = arr.from(value);
    } else {
      dest[prop] = value;
    }
  }

  return dest;
}

var _$events_51 = {};
"use strict";

function ___typeof_51(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_51 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_51 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_51(obj); }

Object.defineProperty(_$events_51, "__esModule", {
  value: true
});
_$events_51["default"] = _$events_51.FakeEvent = void 0;

/* removed: var _$arr_46 = require("./arr.js"); */;

var __domUtils_51 = ___interopRequireWildcard_51(_$domUtils_50);

var __is_51 = ___interopRequireWildcard_51(_$is_56);

var ___pointerExtend_51 = ___interopRequireDefault_51(_$pointerExtend_59);

var pointerUtils = ___interopRequireWildcard_51(_$pointerUtils_60);

function ___interopRequireDefault_51(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_51() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_51 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_51(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_51(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_51(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var elements = [];
var targets = [];
var delegatedEvents = {};
var documents = [];

function add(element, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var elementIndex = elements.indexOf(element);
  var target = targets[elementIndex];

  if (!target) {
    target = {
      events: {},
      typeCount: 0
    };
    elementIndex = elements.push(element) - 1;
    targets.push(target);
  }

  if (!target.events[type]) {
    target.events[type] = [];
    target.typeCount++;
  }

  if (!(0, _$arr_46.contains)(target.events[type], listener)) {
    element.addEventListener(type, listener, events.supportsOptions ? options : !!options.capture);
    target.events[type].push(listener);
  }
}

function __remove_51(element, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var elementIndex = elements.indexOf(element);
  var target = targets[elementIndex];

  if (!target || !target.events) {
    return;
  }

  if (type === 'all') {
    for (type in target.events) {
      if (target.events.hasOwnProperty(type)) {
        __remove_51(element, type, 'all');
      }
    }

    return;
  }

  if (target.events[type]) {
    var len = target.events[type].length;

    if (listener === 'all') {
      for (var i = 0; i < len; i++) {
        __remove_51(element, type, target.events[type][i], options);
      }

      return;
    } else {
      for (var _i = 0; _i < len; _i++) {
        if (target.events[type][_i] === listener) {
          element.removeEventListener(type, listener, events.supportsOptions ? options : !!options.capture);
          target.events[type].splice(_i, 1);
          break;
        }
      }
    }

    if (target.events[type] && target.events[type].length === 0) {
      target.events[type] = null;
      target.typeCount--;
    }
  }

  if (!target.typeCount) {
    targets.splice(elementIndex, 1);
    elements.splice(elementIndex, 1);
  }
}

function addDelegate(selector, context, type, listener, optionalArg) {
  var options = getOptions(optionalArg);

  if (!delegatedEvents[type]) {
    delegatedEvents[type] = {
      contexts: [],
      listeners: [],
      selectors: []
    }; // add delegate listener functions

    for (var _i2 = 0; _i2 < documents.length; _i2++) {
      var _ref;

      _ref = documents[_i2];
      var doc = _ref;
      add(doc, type, delegateListener);
      add(doc, type, delegateUseCapture, true);
    }
  }

  var delegated = delegatedEvents[type];
  var index;

  for (index = delegated.selectors.length - 1; index >= 0; index--) {
    if (delegated.selectors[index] === selector && delegated.contexts[index] === context) {
      break;
    }
  }

  if (index === -1) {
    index = delegated.selectors.length;
    delegated.selectors.push(selector);
    delegated.contexts.push(context);
    delegated.listeners.push([]);
  } // keep listener and capture and passive flags


  delegated.listeners[index].push([listener, !!options.capture, options.passive]);
}

function removeDelegate(selector, context, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var delegated = delegatedEvents[type];
  var matchFound = false;
  var index;

  if (!delegated) {
    return;
  } // count from last index of delegated to 0


  for (index = delegated.selectors.length - 1; index >= 0; index--) {
    // look for matching selector and context Node
    if (delegated.selectors[index] === selector && delegated.contexts[index] === context) {
      var listeners = delegated.listeners[index]; // each item of the listeners array is an array: [function, capture, passive]

      for (var i = listeners.length - 1; i >= 0; i--) {
        var _listeners$i = _slicedToArray(listeners[i], 3),
            fn = _listeners$i[0],
            capture = _listeners$i[1],
            passive = _listeners$i[2]; // check if the listener functions and capture and passive flags match


        if (fn === listener && capture === !!options.capture && passive === options.passive) {
          // remove the listener from the array of listeners
          listeners.splice(i, 1); // if all listeners for this interactable have been removed
          // remove the interactable from the delegated arrays

          if (!listeners.length) {
            delegated.selectors.splice(index, 1);
            delegated.contexts.splice(index, 1);
            delegated.listeners.splice(index, 1); // remove delegate function from context

            __remove_51(context, type, delegateListener);
            __remove_51(context, type, delegateUseCapture, true); // remove the arrays if they are empty

            if (!delegated.selectors.length) {
              delegatedEvents[type] = null;
            }
          } // only remove one listener


          matchFound = true;
          break;
        }
      }

      if (matchFound) {
        break;
      }
    }
  }
} // bound to the interactable context when a DOM event
// listener is added to a selector interactable


function delegateListener(event, optionalArg) {
  var options = getOptions(optionalArg);
  var fakeEvent = new FakeEvent(event);
  var delegated = delegatedEvents[event.type];

  var _pointerUtils$getEven = pointerUtils.getEventTargets(event),
      _pointerUtils$getEven2 = _slicedToArray(_pointerUtils$getEven, 1),
      eventTarget = _pointerUtils$getEven2[0];

  var element = eventTarget; // climb up document tree looking for selector matches

  while (__is_51.element(element)) {
    for (var i = 0; i < delegated.selectors.length; i++) {
      var selector = delegated.selectors[i];
      var context = delegated.contexts[i];

      if (__domUtils_51.matchesSelector(element, selector) && __domUtils_51.nodeContains(context, eventTarget) && __domUtils_51.nodeContains(context, element)) {
        var listeners = delegated.listeners[i];
        fakeEvent.currentTarget = element;

        for (var _i3 = 0; _i3 < listeners.length; _i3++) {
          var _ref2;

          _ref2 = listeners[_i3];

          var _ref3 = _ref2,
              _ref4 = _slicedToArray(_ref3, 3),
              fn = _ref4[0],
              capture = _ref4[1],
              passive = _ref4[2];

          if (capture === !!options.capture && passive === options.passive) {
            fn(fakeEvent);
          }
        }
      }
    }

    element = __domUtils_51.parentNode(element);
  }
}

function delegateUseCapture(event) {
  return delegateListener.call(this, event, true);
}

function getOptions(param) {
  return __is_51.object(param) ? param : {
    capture: param
  };
}

var FakeEvent =
/*#__PURE__*/
function () {
  function FakeEvent(originalEvent) {
    _classCallCheck(this, FakeEvent);

    this.originalEvent = originalEvent;

    _defineProperty(this, "currentTarget", void 0); // duplicate the event so that currentTarget can be changed


    (0, ___pointerExtend_51["default"])(this, originalEvent);
  }

  _createClass(FakeEvent, [{
    key: "preventOriginalDefault",
    value: function preventOriginalDefault() {
      this.originalEvent.preventDefault();
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.originalEvent.stopPropagation();
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.originalEvent.stopImmediatePropagation();
    }
  }]);

  return FakeEvent;
}();

_$events_51.FakeEvent = FakeEvent;
var events = {
  add: add,
  remove: __remove_51,
  addDelegate: addDelegate,
  removeDelegate: removeDelegate,
  delegateListener: delegateListener,
  delegateUseCapture: delegateUseCapture,
  delegatedEvents: delegatedEvents,
  documents: documents,
  supportsOptions: false,
  supportsPassive: false,
  _elements: elements,
  _targets: targets,
  init: function init(window) {
    window.document.createElement('div').addEventListener('test', null, {
      get capture() {
        return events.supportsOptions = true;
      },

      get passive() {
        return events.supportsPassive = true;
      }

    });
  }
};
var ___default_51 = events;
_$events_51["default"] = ___default_51;

var _$getOriginXY_53 = {};
"use strict";

Object.defineProperty(_$getOriginXY_53, "__esModule", {
  value: true
});
_$getOriginXY_53["default"] = ___default_53;

/* removed: var _$rect_62 = require("./rect.js"); */;

function ___default_53(target, element, action) {
  var actionOptions = target.options[action];
  var actionOrigin = actionOptions && actionOptions.origin;
  var origin = actionOrigin || target.options.origin;
  var originRect = (0, _$rect_62.resolveRectLike)(origin, target, element, [target && element]);
  return (0, _$rect_62.rectToXY)(originRect) || {
    x: 0,
    y: 0
  };
}

var _$normalizeListeners_58 = {};
"use strict";

function ___typeof_58(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_58 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_58 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_58(obj); }

Object.defineProperty(_$normalizeListeners_58, "__esModule", {
  value: true
});
_$normalizeListeners_58["default"] = normalize;

var ___extend_58 = ___interopRequireDefault_58(_$extend_52);

var __is_58 = ___interopRequireWildcard_58(_$is_56);

function ___getRequireWildcardCache_58() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_58 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_58(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_58(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_58(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_58(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function normalize(type, listeners, result) {
  result = result || {};

  if (__is_58.string(type) && type.search(' ') !== -1) {
    type = split(type);
  }

  if (__is_58.array(type)) {
    return type.reduce(function (acc, t) {
      return (0, ___extend_58["default"])(acc, normalize(t, listeners, result));
    }, result);
  } // ({ type: fn }) -> ('', { type: fn })


  if (__is_58.object(type)) {
    listeners = type;
    type = '';
  }

  if (__is_58.func(listeners)) {
    result[type] = result[type] || [];
    result[type].push(listeners);
  } else if (__is_58.array(listeners)) {
    for (var _i = 0; _i < listeners.length; _i++) {
      var _ref;

      _ref = listeners[_i];
      var l = _ref;
      normalize(type, l, result);
    }
  } else if (__is_58.object(listeners)) {
    for (var prefix in listeners) {
      var combinedTypes = split(prefix).map(function (p) {
        return "".concat(type).concat(p);
      });
      normalize(combinedTypes, listeners[prefix], result);
    }
  }

  return result;
}

function split(type) {
  return type.trim().split(/ +/);
}

var _$raf_61 = {};
"use strict";

Object.defineProperty(_$raf_61, "__esModule", {
  value: true
});
_$raf_61["default"] = void 0;
var lastTime = 0;

var _request;

var _cancel;

function __init_61(window) {
  _request = window.requestAnimationFrame;
  _cancel = window.cancelAnimationFrame;

  if (!_request) {
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for (var _i = 0; _i < vendors.length; _i++) {
      var vendor = vendors[_i];
      _request = window["".concat(vendor, "RequestAnimationFrame")];
      _cancel = window["".concat(vendor, "CancelAnimationFrame")] || window["".concat(vendor, "CancelRequestAnimationFrame")];
    }
  }

  if (!_request) {
    _request = function request(callback) {
      var currTime = Date.now();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime)); // eslint-disable-next-line standard/no-callback-literal

      var token = setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return token;
    };

    _cancel = function cancel(token) {
      return clearTimeout(token);
    };
  }
}

var ___default_61 = {
  request: function request(callback) {
    return _request(callback);
  },
  cancel: function cancel(token) {
    return _cancel(token);
  },
  init: __init_61
};
_$raf_61["default"] = ___default_61;

var _$utils_55 = {};
"use strict";

function ___typeof_55(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_55 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_55 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_55(obj); }

Object.defineProperty(_$utils_55, "__esModule", {
  value: true
});
_$utils_55.warnOnce = warnOnce;
_$utils_55._getQBezierValue = _getQBezierValue;
_$utils_55.getQuadraticCurvePoint = getQuadraticCurvePoint;
_$utils_55.easeOutQuad = easeOutQuad;
_$utils_55.copyAction = copyAction;
Object.defineProperty(_$utils_55, "win", {
  enumerable: true,
  get: function get() {
    return ___window_55["default"];
  }
});
Object.defineProperty(_$utils_55, "browser", {
  enumerable: true,
  get: function get() {
    return ___browser_55["default"];
  }
});
Object.defineProperty(_$utils_55, "clone", {
  enumerable: true,
  get: function get() {
    return _clone["default"];
  }
});
Object.defineProperty(_$utils_55, "events", {
  enumerable: true,
  get: function get() {
    return _events["default"];
  }
});
Object.defineProperty(_$utils_55, "extend", {
  enumerable: true,
  get: function get() {
    return ___extend_55["default"];
  }
});
Object.defineProperty(_$utils_55, "getOriginXY", {
  enumerable: true,
  get: function get() {
    return _getOriginXY["default"];
  }
});
Object.defineProperty(_$utils_55, "hypot", {
  enumerable: true,
  get: function get() {
    return ___hypot_55["default"];
  }
});
Object.defineProperty(_$utils_55, "normalizeListeners", {
  enumerable: true,
  get: function get() {
    return _normalizeListeners["default"];
  }
});
Object.defineProperty(_$utils_55, "raf", {
  enumerable: true,
  get: function get() {
    return _raf["default"];
  }
});
_$utils_55.rect = _$utils_55.pointer = _$utils_55.is = _$utils_55.dom = _$utils_55.arr = void 0;

var __arr_55 = ___interopRequireWildcard_55(_$arr_46);

_$utils_55.arr = __arr_55;

var dom = ___interopRequireWildcard_55(_$domUtils_50);

_$utils_55.dom = dom;

var __is_55 = ___interopRequireWildcard_55(_$is_56);

_$utils_55.is = __is_55;

var pointer = ___interopRequireWildcard_55(_$pointerUtils_60);

_$utils_55.pointer = pointer;

var rect = ___interopRequireWildcard_55(_$rect_62);

_$utils_55.rect = rect;

var ___window_55 = ___interopRequireDefault_55(_$window_65);

var ___browser_55 = ___interopRequireDefault_55(_$browser_47);

var _clone = ___interopRequireDefault_55(_$clone_48);

var _events = ___interopRequireDefault_55(_$events_51);

var ___extend_55 = ___interopRequireDefault_55(_$extend_52);

var _getOriginXY = ___interopRequireDefault_55(_$getOriginXY_53);

var ___hypot_55 = ___interopRequireDefault_55(_$hypot_54);

var _normalizeListeners = ___interopRequireDefault_55(_$normalizeListeners_58);

var _raf = ___interopRequireDefault_55(_$raf_61);

function ___interopRequireDefault_55(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_55() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_55 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_55(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_55(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_55(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function warnOnce(method, message) {
  var warned = false; // eslint-disable-next-line no-shadow

  return function () {
    if (!warned) {
      ___window_55["default"].window.console.warn(message);

      warned = true;
    }

    return method.apply(this, arguments);
  };
} // http://stackoverflow.com/a/5634528/2280888


function _getQBezierValue(t, p1, p2, p3) {
  var iT = 1 - t;
  return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
}

function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
  return {
    x: _getQBezierValue(position, startX, cpX, endX),
    y: _getQBezierValue(position, startY, cpY, endY)
  };
} // http://gizma.com/easing/


function easeOutQuad(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
}

function copyAction(dest, src) {
  dest.name = src.name;
  dest.axis = src.axis;
  dest.edges = src.edges;
  return dest;
}

var _$defaultOptions_20 = {};
"use strict";

Object.defineProperty(_$defaultOptions_20, "__esModule", {
  value: true
});
_$defaultOptions_20["default"] = _$defaultOptions_20.defaults = void 0;
// tslint:disable no-empty-interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface Options extends BaseDefaults, PerActionDefaults {}
var defaults = {
  base: {
    preventDefault: 'auto',
    deltaSource: 'page'
  },
  perAction: {
    enabled: false,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
_$defaultOptions_20.defaults = defaults;
var ___default_20 = defaults;
_$defaultOptions_20["default"] = ___default_20;

var _$Eventable_14 = {};
"use strict";

function ___typeof_14(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_14 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_14 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_14(obj); }

Object.defineProperty(_$Eventable_14, "__esModule", {
  value: true
});
_$Eventable_14["default"] = void 0;

var __arr_14 = ___interopRequireWildcard_14(_$arr_46);

var ___extend_14 = ___interopRequireDefault_14(_$extend_52);

var ___normalizeListeners_14 = ___interopRequireDefault_14(_$normalizeListeners_58);

function ___interopRequireDefault_14(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_14() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_14 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_14(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_14(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_14(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___classCallCheck_14(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_14(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_14(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_14(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_14(Constructor, staticProps); return Constructor; }

function ___defineProperty_14(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function fireUntilImmediateStopped(event, listeners) {
  for (var _i = 0; _i < listeners.length; _i++) {
    var _ref;

    _ref = listeners[_i];
    var listener = _ref;

    if (event.immediatePropagationStopped) {
      break;
    }

    listener(event);
  }
}

var Eventable =
/*#__PURE__*/
function () {
  function Eventable(options) {
    ___classCallCheck_14(this, Eventable);

    ___defineProperty_14(this, "options", void 0);

    ___defineProperty_14(this, "types", {});

    ___defineProperty_14(this, "propagationStopped", false);

    ___defineProperty_14(this, "immediatePropagationStopped", false);

    ___defineProperty_14(this, "global", void 0);

    this.options = (0, ___extend_14["default"])({}, options || {});
  }

  ___createClass_14(Eventable, [{
    key: "fire",
    value: function fire(event) {
      var listeners;
      var global = this.global; // Interactable#on() listeners
      // tslint:disable no-conditional-assignment

      if (listeners = this.types[event.type]) {
        fireUntilImmediateStopped(event, listeners);
      } // interact.on() listeners


      if (!event.propagationStopped && global && (listeners = global[event.type])) {
        fireUntilImmediateStopped(event, listeners);
      }
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      var listeners = (0, ___normalizeListeners_14["default"])(type, listener);

      for (type in listeners) {
        this.types[type] = __arr_14.merge(this.types[type] || [], listeners[type]);
      }
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      var listeners = (0, ___normalizeListeners_14["default"])(type, listener);

      for (type in listeners) {
        var eventList = this.types[type];

        if (!eventList || !eventList.length) {
          continue;
        }

        for (var _i2 = 0; _i2 < listeners[type].length; _i2++) {
          var _ref2;

          _ref2 = listeners[type][_i2];
          var subListener = _ref2;
          var index = eventList.indexOf(subListener);

          if (index !== -1) {
            eventList.splice(index, 1);
          }
        }
      }
    }
  }, {
    key: "getRect",
    value: function getRect(_element) {
      return null;
    }
  }]);

  return Eventable;
}();

var ___default_14 = Eventable;
_$Eventable_14["default"] = ___default_14;

var _$Interactable_16 = {};
"use strict";

function ___typeof_16(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_16 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_16 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_16(obj); }

Object.defineProperty(_$Interactable_16, "__esModule", {
  value: true
});
_$Interactable_16["default"] = _$Interactable_16.Interactable = void 0;

var __arr_16 = ___interopRequireWildcard_16(_$arr_46);

var ___browser_16 = ___interopRequireDefault_16(_$browser_47);

var ___clone_16 = ___interopRequireDefault_16(_$clone_48);

/* removed: var _$domUtils_50 = require("../utils/domUtils.js"); */;

var ___events_16 = ___interopRequireDefault_16(_$events_51);

var ___extend_16 = ___interopRequireDefault_16(_$extend_52);

var __is_16 = ___interopRequireWildcard_16(_$is_56);

var ___normalizeListeners_16 = ___interopRequireDefault_16(_$normalizeListeners_58);

/* removed: var _$window_65 = require("../utils/window.js"); */;

var _Eventable = ___interopRequireDefault_16(_$Eventable_14);

function ___interopRequireDefault_16(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_16() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_16 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_16(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_16(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_16(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___classCallCheck_16(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_16(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_16(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_16(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_16(Constructor, staticProps); return Constructor; }

function ___defineProperty_16(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/** */
var Interactable =
/*#__PURE__*/
function () {
  ___createClass_16(Interactable, [{
    key: "_defaults",
    get: function get() {
      return {
        base: {},
        perAction: {},
        actions: {}
      };
    }
    /** */

  }]);

  function Interactable(target, options, defaultContext) {
    ___classCallCheck_16(this, Interactable);

    ___defineProperty_16(this, "options", void 0);

    ___defineProperty_16(this, "_actions", void 0);

    ___defineProperty_16(this, "target", void 0);

    ___defineProperty_16(this, "events", new _Eventable["default"]());

    ___defineProperty_16(this, "_context", void 0);

    ___defineProperty_16(this, "_win", void 0);

    ___defineProperty_16(this, "_doc", void 0);

    this._actions = options.actions;
    this.target = target;
    this._context = options.context || defaultContext;
    this._win = (0, _$window_65.getWindow)((0, _$domUtils_50.trySelector)(target) ? this._context : target);
    this._doc = this._win.document;
    this.set(options);
  }

  ___createClass_16(Interactable, [{
    key: "setOnEvents",
    value: function setOnEvents(actionName, phases) {
      if (__is_16.func(phases.onstart)) {
        this.on("".concat(actionName, "start"), phases.onstart);
      }

      if (__is_16.func(phases.onmove)) {
        this.on("".concat(actionName, "move"), phases.onmove);
      }

      if (__is_16.func(phases.onend)) {
        this.on("".concat(actionName, "end"), phases.onend);
      }

      if (__is_16.func(phases.oninertiastart)) {
        this.on("".concat(actionName, "inertiastart"), phases.oninertiastart);
      }

      return this;
    }
  }, {
    key: "updatePerActionListeners",
    value: function updatePerActionListeners(actionName, prev, cur) {
      if (__is_16.array(prev) || __is_16.object(prev)) {
        this.off(actionName, prev);
      }

      if (__is_16.array(cur) || __is_16.object(cur)) {
        this.on(actionName, cur);
      }
    }
  }, {
    key: "setPerAction",
    value: function setPerAction(actionName, options) {
      var defaults = this._defaults; // for all the default per-action options

      for (var optionName in options) {
        var actionOptions = this.options[actionName];
        var optionValue = options[optionName];
        var isArray = __is_16.array(optionValue); // remove old event listeners and add new ones

        if (optionName === 'listeners') {
          this.updatePerActionListeners(actionName, actionOptions.listeners, optionValue);
        } // if the option value is an array


        if (isArray) {
          actionOptions[optionName] = __arr_16.from(optionValue);
        } // if the option value is an object
        else if (!isArray && __is_16.plainObject(optionValue)) {
            // copy the object
            actionOptions[optionName] = (0, ___extend_16["default"])(actionOptions[optionName] || {}, (0, ___clone_16["default"])(optionValue)); // set anabled field to true if it exists in the defaults

            if (__is_16.object(defaults.perAction[optionName]) && 'enabled' in defaults.perAction[optionName]) {
              actionOptions[optionName].enabled = optionValue.enabled !== false;
            }
          } // if the option value is a boolean and the default is an object
          else if (__is_16.bool(optionValue) && __is_16.object(defaults.perAction[optionName])) {
              actionOptions[optionName].enabled = optionValue;
            } // if it's anything else, do a plain assignment
            else {
                actionOptions[optionName] = optionValue;
              }
      }
    }
    /**
     * The default function to get an Interactables bounding rect. Can be
     * overridden using {@link Interactable.rectChecker}.
     *
     * @param {Element} [element] The element to measure.
     * @return {object} The object's bounding rectangle.
     */

  }, {
    key: "getRect",
    value: function getRect(element) {
      element = element || (__is_16.element(this.target) ? this.target : null);

      if (__is_16.string(this.target)) {
        element = element || this._context.querySelector(this.target);
      }

      return (0, _$domUtils_50.getElementRect)(element);
    }
    /**
     * Returns or sets the function used to calculate the interactable's
     * element's rectangle
     *
     * @param {function} [checker] A function which returns this Interactable's
     * bounding rectangle. See {@link Interactable.getRect}
     * @return {function | object} The checker function or this Interactable
     */

  }, {
    key: "rectChecker",
    value: function rectChecker(checker) {
      if (__is_16.func(checker)) {
        this.getRect = checker;
        return this;
      }

      if (checker === null) {
        delete this.getRect;
        return this;
      }

      return this.getRect;
    }
  }, {
    key: "_backCompatOption",
    value: function _backCompatOption(optionName, newValue) {
      if ((0, _$domUtils_50.trySelector)(newValue) || __is_16.object(newValue)) {
        this.options[optionName] = newValue;

        for (var _i = 0; _i < this._actions.names.length; _i++) {
          var _ref;

          _ref = this._actions.names[_i];
          var action = _ref;
          this.options[action][optionName] = newValue;
        }

        return this;
      }

      return this.options[optionName];
    }
    /**
     * Gets or sets the origin of the Interactable's element.  The x and y
     * of the origin will be subtracted from action event coordinates.
     *
     * @param {Element | object | string} [origin] An HTML or SVG Element whose
     * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
     * or any CSS selector
     *
     * @return {object} The current origin or this Interactable
     */

  }, {
    key: "origin",
    value: function origin(newValue) {
      return this._backCompatOption('origin', newValue);
    }
    /**
     * Returns or sets the mouse coordinate types used to calculate the
     * movement of the pointer.
     *
     * @param {string} [newValue] Use 'client' if you will be scrolling while
     * interacting; Use 'page' if you want autoScroll to work
     * @return {string | object} The current deltaSource or this Interactable
     */

  }, {
    key: "deltaSource",
    value: function deltaSource(newValue) {
      if (newValue === 'page' || newValue === 'client') {
        this.options.deltaSource = newValue;
        return this;
      }

      return this.options.deltaSource;
    }
    /**
     * Gets the selector context Node of the Interactable. The default is
     * `window.document`.
     *
     * @return {Node} The context Node of this Interactable
     */

  }, {
    key: "context",
    value: function context() {
      return this._context;
    }
  }, {
    key: "inContext",
    value: function inContext(element) {
      return this._context === element.ownerDocument || (0, _$domUtils_50.nodeContains)(this._context, element);
    }
  }, {
    key: "testIgnoreAllow",
    value: function testIgnoreAllow(options, targetNode, eventTarget) {
      return !this.testIgnore(options.ignoreFrom, targetNode, eventTarget) && this.testAllow(options.allowFrom, targetNode, eventTarget);
    }
  }, {
    key: "testAllow",
    value: function testAllow(allowFrom, targetNode, element) {
      if (!allowFrom) {
        return true;
      }

      if (!__is_16.element(element)) {
        return false;
      }

      if (__is_16.string(allowFrom)) {
        return (0, _$domUtils_50.matchesUpTo)(element, allowFrom, targetNode);
      } else if (__is_16.element(allowFrom)) {
        return (0, _$domUtils_50.nodeContains)(allowFrom, element);
      }

      return false;
    }
  }, {
    key: "testIgnore",
    value: function testIgnore(ignoreFrom, targetNode, element) {
      if (!ignoreFrom || !__is_16.element(element)) {
        return false;
      }

      if (__is_16.string(ignoreFrom)) {
        return (0, _$domUtils_50.matchesUpTo)(element, ignoreFrom, targetNode);
      } else if (__is_16.element(ignoreFrom)) {
        return (0, _$domUtils_50.nodeContains)(ignoreFrom, element);
      }

      return false;
    }
    /**
     * Calls listeners for the given InteractEvent type bound globally
     * and directly to this Interactable
     *
     * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
     * Interactable
     * @return {Interactable} this Interactable
     */

  }, {
    key: "fire",
    value: function fire(iEvent) {
      this.events.fire(iEvent);
      return this;
    }
  }, {
    key: "_onOff",
    value: function _onOff(method, typeArg, listenerArg, options) {
      if (__is_16.object(typeArg) && !__is_16.array(typeArg)) {
        options = listenerArg;
        listenerArg = null;
      }

      var addRemove = method === 'on' ? 'add' : 'remove';
      var listeners = (0, ___normalizeListeners_16["default"])(typeArg, listenerArg);

      for (var type in listeners) {
        if (type === 'wheel') {
          type = ___browser_16["default"].wheelEvent;
        }

        for (var _i2 = 0; _i2 < listeners[type].length; _i2++) {
          var _ref2;

          _ref2 = listeners[type][_i2];
          var listener = _ref2;

          // if it is an action event type
          if (__arr_16.contains(this._actions.eventTypes, type)) {
            this.events[method](type, listener);
          } // delegated event
          else if (__is_16.string(this.target)) {
              ___events_16["default"]["".concat(addRemove, "Delegate")](this.target, this._context, type, listener, options);
            } // remove listener from this Interactable's element
            else {
                ___events_16["default"][addRemove](this.target, type, listener, options);
              }
        }
      }

      return this;
    }
    /**
     * Binds a listener for an InteractEvent, pointerEvent or DOM event.
     *
     * @param {string | array | object} types The types of events to listen
     * for
     * @param {function | array | object} [listener] The event listener function(s)
     * @param {object | boolean} [options] options object or useCapture flag for
     * addEventListener
     * @return {Interactable} This Interactable
     */

  }, {
    key: "on",
    value: function on(types, listener, options) {
      return this._onOff('on', types, listener, options);
    }
    /**
     * Removes an InteractEvent, pointerEvent or DOM event listener.
     *
     * @param {string | array | object} types The types of events that were
     * listened for
     * @param {function | array | object} [listener] The event listener function(s)
     * @param {object | boolean} [options] options object or useCapture flag for
     * removeEventListener
     * @return {Interactable} This Interactable
     */

  }, {
    key: "off",
    value: function off(types, listener, options) {
      return this._onOff('off', types, listener, options);
    }
    /**
     * Reset the options of this Interactable
     *
     * @param {object} options The new settings to apply
     * @return {object} This Interactable
     */

  }, {
    key: "set",
    value: function set(options) {
      var defaults = this._defaults;

      if (!__is_16.object(options)) {
        options = {};
      }

      this.options = (0, ___clone_16["default"])(defaults.base);

      for (var actionName in this._actions.methodDict) {
        var methodName = this._actions.methodDict[actionName];
        this.options[actionName] = {};
        this.setPerAction(actionName, (0, ___extend_16["default"])((0, ___extend_16["default"])({}, defaults.perAction), defaults.actions[actionName]));
        this[methodName](options[actionName]);
      }

      for (var setting in options) {
        if (__is_16.func(this[setting])) {
          this[setting](options[setting]);
        }
      }

      return this;
    }
    /**
     * Remove this interactable from the list of interactables and remove it's
     * action capabilities and event listeners
     *
     * @return {interact}
     */

  }, {
    key: "unset",
    value: function unset() {
      ___events_16["default"].remove(this.target, 'all');

      if (__is_16.string(this.target)) {
        // remove delegated events
        for (var type in ___events_16["default"].delegatedEvents) {
          var delegated = ___events_16["default"].delegatedEvents[type];

          if (delegated.selectors[0] === this.target && delegated.contexts[0] === this._context) {
            delegated.selectors.splice(0, 1);
            delegated.contexts.splice(0, 1);
            delegated.listeners.splice(0, 1); // remove the arrays if they are empty

            if (!delegated.selectors.length) {
              delegated[type] = null;
            }
          }

          ___events_16["default"].remove(this._context, type, ___events_16["default"].delegateListener);

          ___events_16["default"].remove(this._context, type, ___events_16["default"].delegateUseCapture, true);
        }
      } else {
        ___events_16["default"].remove(this.target, 'all');
      }
    }
  }]);

  return Interactable;
}();

_$Interactable_16.Interactable = Interactable;
var ___default_16 = Interactable;
_$Interactable_16["default"] = ___default_16;

var _$InteractableSet_17 = {};
"use strict";

function ___typeof_17(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_17 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_17 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_17(obj); }

Object.defineProperty(_$InteractableSet_17, "__esModule", {
  value: true
});
_$InteractableSet_17["default"] = void 0;

var __arr_17 = ___interopRequireWildcard_17(_$arr_46);

var __domUtils_17 = ___interopRequireWildcard_17(_$domUtils_50);

var ___extend_17 = ___interopRequireDefault_17(_$extend_52);

var __is_17 = ___interopRequireWildcard_17(_$is_56);

function ___interopRequireDefault_17(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_17() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_17 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_17(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_17(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_17(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___classCallCheck_17(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_17(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_17(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_17(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_17(Constructor, staticProps); return Constructor; }

function ___defineProperty_17(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var InteractableSet =
/*#__PURE__*/
function () {
  // all set interactables
  function InteractableSet(scope) {
    var _this = this;

    ___classCallCheck_17(this, InteractableSet);

    this.scope = scope;

    ___defineProperty_17(this, "list", []);

    ___defineProperty_17(this, "selectorMap", {});

    scope.addListeners({
      'interactable:unset': function interactableUnset(_ref) {
        var interactable = _ref.interactable;
        var target = interactable.target,
            context = interactable._context;
        var targetMappings = __is_17.string(target) ? _this.selectorMap[target] : target[_this.scope.id];
        var targetIndex = targetMappings.findIndex(function (m) {
          return m.context === context;
        });

        if (targetMappings[targetIndex]) {
          // Destroying mappingInfo's context and interactable
          targetMappings[targetIndex].context = null;
          targetMappings[targetIndex].interactable = null;
        }

        targetMappings.splice(targetIndex, 1);
      }
    });
  }

  ___createClass_17(InteractableSet, [{
    key: "new",
    value: function _new(target, options) {
      options = (0, ___extend_17["default"])(options || {}, {
        actions: this.scope.actions
      });
      var interactable = new this.scope.Interactable(target, options, this.scope.document);
      var mappingInfo = {
        context: interactable._context,
        interactable: interactable
      };
      this.scope.addDocument(interactable._doc);
      this.list.push(interactable);

      if (__is_17.string(target)) {
        if (!this.selectorMap[target]) {
          this.selectorMap[target] = [];
        }

        this.selectorMap[target].push(mappingInfo);
      } else {
        if (!interactable.target[this.scope.id]) {
          Object.defineProperty(target, this.scope.id, {
            value: [],
            configurable: true
          });
        }

        target[this.scope.id].push(mappingInfo);
      }

      this.scope.fire('interactable:new', {
        target: target,
        options: options,
        interactable: interactable,
        win: this.scope._win
      });
      return interactable;
    }
  }, {
    key: "get",
    value: function get(target, options) {
      var context = options && options.context || this.scope.document;
      var isSelector = __is_17.string(target);
      var targetMappings = isSelector ? this.selectorMap[target] : target[this.scope.id];

      if (!targetMappings) {
        return null;
      }

      var found = __arr_17.find(targetMappings, function (m) {
        return m.context === context && (isSelector || m.interactable.inContext(target));
      });
      return found && found.interactable;
    }
  }, {
    key: "forEachMatch",
    value: function forEachMatch(node, callback) {
      for (var _i = 0; _i < this.list.length; _i++) {
        var _ref2;

        _ref2 = this.list[_i];
        var interactable = _ref2;
        var ret = void 0;

        if ((__is_17.string(interactable.target) // target is a selector and the element matches
        ? __is_17.element(node) && __domUtils_17.matchesSelector(node, interactable.target) : // target is the element
        node === interactable.target) && // the element is in context
        interactable.inContext(node)) {
          ret = callback(interactable);
        }

        if (ret !== undefined) {
          return ret;
        }
      }
    }
  }]);

  return InteractableSet;
}();

_$InteractableSet_17["default"] = InteractableSet;

var _$BaseEvent_13 = {};
"use strict";

Object.defineProperty(_$BaseEvent_13, "__esModule", {
  value: true
});
_$BaseEvent_13["default"] = _$BaseEvent_13.BaseEvent = _$BaseEvent_13.EventPhase = void 0;

function ___classCallCheck_13(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_13(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_13(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_13(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_13(Constructor, staticProps); return Constructor; }

function ___defineProperty_13(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var EventPhase;
_$BaseEvent_13.EventPhase = EventPhase;

(function (EventPhase) {
  EventPhase["Start"] = "start";
  EventPhase["Move"] = "move";
  EventPhase["End"] = "end";
  EventPhase["_NONE"] = "";
})(EventPhase || (_$BaseEvent_13.EventPhase = EventPhase = {}));

var BaseEvent =
/*#__PURE__*/
function () {
  ___createClass_13(BaseEvent, [{
    key: "interaction",
    get: function get() {
      return this._interaction._proxy;
    }
  }]);

  function BaseEvent(interaction) {
    ___classCallCheck_13(this, BaseEvent);

    ___defineProperty_13(this, "type", void 0);

    ___defineProperty_13(this, "target", void 0);

    ___defineProperty_13(this, "currentTarget", void 0);

    ___defineProperty_13(this, "interactable", void 0);

    ___defineProperty_13(this, "_interaction", void 0);

    ___defineProperty_13(this, "timeStamp", void 0);

    ___defineProperty_13(this, "immediatePropagationStopped", false);

    ___defineProperty_13(this, "propagationStopped", false);

    this._interaction = interaction;
  }

  ___createClass_13(BaseEvent, [{
    key: "preventDefault",
    value: function preventDefault() {}
    /**
     * Don't call any other listeners (even on the current target)
     */

  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.propagationStopped = true;
    }
    /**
     * Don't call listeners on the remaining targets
     */

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = this.propagationStopped = true;
    }
  }]);

  return BaseEvent;
}();

_$BaseEvent_13.BaseEvent = BaseEvent;
var ___default_13 = BaseEvent;
_$BaseEvent_13["default"] = ___default_13;

var _$InteractEvent_15 = {};
"use strict";

Object.defineProperty(_$InteractEvent_15, "__esModule", {
  value: true
});
_$InteractEvent_15["default"] = _$InteractEvent_15.InteractEvent = _$InteractEvent_15.EventPhase = void 0;

var ___extend_15 = ___interopRequireDefault_15(_$extend_52);

var ___getOriginXY_15 = ___interopRequireDefault_15(_$getOriginXY_53);

var ___hypot_15 = ___interopRequireDefault_15(_$hypot_54);

var _BaseEvent2 = ___interopRequireDefault_15(_$BaseEvent_13);

var _defaultOptions = ___interopRequireDefault_15(_$defaultOptions_20);

function ___interopRequireDefault_15(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___typeof_15(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_15 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_15 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_15(obj); }

function ___classCallCheck_15(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_15(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_15(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_15(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_15(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (___typeof_15(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ___defineProperty_15(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __EventPhase_15;
_$InteractEvent_15.EventPhase = __EventPhase_15;

(function (EventPhase) {
  EventPhase["Start"] = "start";
  EventPhase["Move"] = "move";
  EventPhase["End"] = "end";
  EventPhase["_NONE"] = "";
})(__EventPhase_15 || (_$InteractEvent_15.EventPhase = __EventPhase_15 = {}));

var InteractEvent =
/*#__PURE__*/
function (_BaseEvent) {
  _inherits(InteractEvent, _BaseEvent);

  // drag
  // resize

  /** */
  function InteractEvent(interaction, event, actionName, phase, element, related, preEnd, type) {
    var _this;

    ___classCallCheck_15(this, InteractEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InteractEvent).call(this, interaction));

    ___defineProperty_15(_assertThisInitialized(_this), "target", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "currentTarget", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "relatedTarget", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "screenX", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "screenY", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "button", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "buttons", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "ctrlKey", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "shiftKey", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "altKey", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "metaKey", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "page", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "client", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "delta", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "rect", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "x0", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "y0", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "t0", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "dt", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "duration", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "clientX0", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "clientY0", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "velocity", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "speed", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "swipe", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "timeStamp", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "dragEnter", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "dragLeave", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "axes", void 0);

    ___defineProperty_15(_assertThisInitialized(_this), "preEnd", void 0);

    element = element || interaction.element;
    var target = interaction.interactable;
    var deltaSource = (target && target.options || _defaultOptions["default"]).deltaSource;
    var origin = (0, ___getOriginXY_15["default"])(target, element, actionName);
    var starting = phase === 'start';
    var ending = phase === 'end';
    var prevEvent = starting ? _assertThisInitialized(_this) : interaction.prevEvent;
    var coords = starting ? interaction.coords.start : ending ? {
      page: prevEvent.page,
      client: prevEvent.client,
      timeStamp: interaction.coords.cur.timeStamp
    } : interaction.coords.cur;
    _this.page = (0, ___extend_15["default"])({}, coords.page);
    _this.client = (0, ___extend_15["default"])({}, coords.client);
    _this.rect = (0, ___extend_15["default"])({}, interaction.rect);
    _this.timeStamp = coords.timeStamp;

    if (!ending) {
      _this.page.x -= origin.x;
      _this.page.y -= origin.y;
      _this.client.x -= origin.x;
      _this.client.y -= origin.y;
    }

    _this.ctrlKey = event.ctrlKey;
    _this.altKey = event.altKey;
    _this.shiftKey = event.shiftKey;
    _this.metaKey = event.metaKey;
    _this.button = event.button;
    _this.buttons = event.buttons;
    _this.target = element;
    _this.currentTarget = element;
    _this.relatedTarget = related || null;
    _this.preEnd = preEnd;
    _this.type = type || actionName + (phase || '');
    _this.interactable = target;
    _this.t0 = starting ? interaction.pointers[interaction.pointers.length - 1].downTime : prevEvent.t0;
    _this.x0 = interaction.coords.start.page.x - origin.x;
    _this.y0 = interaction.coords.start.page.y - origin.y;
    _this.clientX0 = interaction.coords.start.client.x - origin.x;
    _this.clientY0 = interaction.coords.start.client.y - origin.y;

    if (starting || ending) {
      _this.delta = {
        x: 0,
        y: 0
      };
    } else {
      _this.delta = {
        x: _this[deltaSource].x - prevEvent[deltaSource].x,
        y: _this[deltaSource].y - prevEvent[deltaSource].y
      };
    }

    _this.dt = interaction.coords.delta.timeStamp;
    _this.duration = _this.timeStamp - _this.t0; // velocity and speed in pixels per second

    _this.velocity = (0, ___extend_15["default"])({}, interaction.coords.velocity[deltaSource]);
    _this.speed = (0, ___hypot_15["default"])(_this.velocity.x, _this.velocity.y);
    _this.swipe = ending || phase === 'inertiastart' ? _this.getSwipe() : null;
    return _this;
  }

  ___createClass_15(InteractEvent, [{
    key: "getSwipe",
    value: function getSwipe() {
      var interaction = this._interaction;

      if (interaction.prevEvent.speed < 600 || this.timeStamp - interaction.prevEvent.timeStamp > 150) {
        return null;
      }

      var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI;
      var overlap = 22.5;

      if (angle < 0) {
        angle += 360;
      }

      var left = 135 - overlap <= angle && angle < 225 + overlap;
      var up = 225 - overlap <= angle && angle < 315 + overlap;
      var right = !left && (315 - overlap <= angle || angle < 45 + overlap);
      var down = !up && 45 - overlap <= angle && angle < 135 + overlap;
      return {
        up: up,
        down: down,
        left: left,
        right: right,
        angle: angle,
        speed: interaction.prevEvent.speed,
        velocity: {
          x: interaction.prevEvent.velocityX,
          y: interaction.prevEvent.velocityY
        }
      };
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {}
    /**
     * Don't call listeners on the remaining targets
     */

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = this.propagationStopped = true;
    }
    /**
     * Don't call any other listeners (even on the current target)
     */

  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.propagationStopped = true;
    }
  }, {
    key: "pageX",
    get: function get() {
      return this.page.x;
    },
    set: function set(value) {
      this.page.x = value;
    }
  }, {
    key: "pageY",
    get: function get() {
      return this.page.y;
    },
    set: function set(value) {
      this.page.y = value;
    }
  }, {
    key: "clientX",
    get: function get() {
      return this.client.x;
    },
    set: function set(value) {
      this.client.x = value;
    }
  }, {
    key: "clientY",
    get: function get() {
      return this.client.y;
    },
    set: function set(value) {
      this.client.y = value;
    }
  }, {
    key: "dx",
    get: function get() {
      return this.delta.x;
    },
    set: function set(value) {
      this.delta.x = value;
    }
  }, {
    key: "dy",
    get: function get() {
      return this.delta.y;
    },
    set: function set(value) {
      this.delta.y = value;
    }
  }, {
    key: "velocityX",
    get: function get() {
      return this.velocity.x;
    },
    set: function set(value) {
      this.velocity.x = value;
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this.velocity.y;
    },
    set: function set(value) {
      this.velocity.y = value;
    }
  }]);

  return InteractEvent;
}(_BaseEvent2["default"]);

_$InteractEvent_15.InteractEvent = InteractEvent;
var ___default_15 = InteractEvent;
_$InteractEvent_15["default"] = ___default_15;

var _$PointerInfo_19 = {};
"use strict";

Object.defineProperty(_$PointerInfo_19, "__esModule", {
  value: true
});
_$PointerInfo_19["default"] = _$PointerInfo_19.PointerInfo = void 0;

function ___classCallCheck_19(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable @typescript-eslint/no-parameter-properties */
var PointerInfo = function PointerInfo(id, pointer, event, downTime, downTarget) {
  ___classCallCheck_19(this, PointerInfo);

  this.id = id;
  this.pointer = pointer;
  this.event = event;
  this.downTime = downTime;
  this.downTarget = downTarget;
};

_$PointerInfo_19.PointerInfo = PointerInfo;
var ___default_19 = PointerInfo;
_$PointerInfo_19["default"] = ___default_19;

var _$interactionFinder_22 = {};
"use strict";

function ___typeof_22(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_22 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_22 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_22(obj); }

Object.defineProperty(_$interactionFinder_22, "__esModule", {
  value: true
});
_$interactionFinder_22["default"] = void 0;

var __dom_22 = ___interopRequireWildcard_22(_$domUtils_50);

function ___getRequireWildcardCache_22() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_22 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_22(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_22(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_22(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var finder = {
  methodOrder: ['simulationResume', 'mouseOrPen', 'hasPointer', 'idle'],
  search: function search(details) {
    for (var _i = 0; _i < finder.methodOrder.length; _i++) {
      var _ref;

      _ref = finder.methodOrder[_i];
      var method = _ref;
      var interaction = finder[method](details);

      if (interaction) {
        return interaction;
      }
    }
  },
  // try to resume simulation with a new pointer
  simulationResume: function simulationResume(_ref2) {
    var pointerType = _ref2.pointerType,
        eventType = _ref2.eventType,
        eventTarget = _ref2.eventTarget,
        scope = _ref2.scope;

    if (!/down|start/i.test(eventType)) {
      return null;
    }

    for (var _i2 = 0; _i2 < scope.interactions.list.length; _i2++) {
      var _ref3;

      _ref3 = scope.interactions.list[_i2];
      var interaction = _ref3;
      var element = eventTarget;

      if (interaction.simulation && interaction.simulation.allowResume && interaction.pointerType === pointerType) {
        while (element) {
          // if the element is the interaction element
          if (element === interaction.element) {
            return interaction;
          }

          element = __dom_22.parentNode(element);
        }
      }
    }

    return null;
  },
  // if it's a mouse or pen interaction
  mouseOrPen: function mouseOrPen(_ref4) {
    var pointerId = _ref4.pointerId,
        pointerType = _ref4.pointerType,
        eventType = _ref4.eventType,
        scope = _ref4.scope;

    if (pointerType !== 'mouse' && pointerType !== 'pen') {
      return null;
    }

    var firstNonActive;

    for (var _i3 = 0; _i3 < scope.interactions.list.length; _i3++) {
      var _ref5;

      _ref5 = scope.interactions.list[_i3];
      var interaction = _ref5;

      if (interaction.pointerType === pointerType) {
        // if it's a down event, skip interactions with running simulations
        if (interaction.simulation && !hasPointerId(interaction, pointerId)) {
          continue;
        } // if the interaction is active, return it immediately


        if (interaction.interacting()) {
          return interaction;
        } // otherwise save it and look for another active interaction
        else if (!firstNonActive) {
            firstNonActive = interaction;
          }
      }
    } // if no active mouse interaction was found use the first inactive mouse
    // interaction


    if (firstNonActive) {
      return firstNonActive;
    } // find any mouse or pen interaction.
    // ignore the interaction if the eventType is a *down, and a simulation
    // is active


    for (var _i4 = 0; _i4 < scope.interactions.list.length; _i4++) {
      var _ref6;

      _ref6 = scope.interactions.list[_i4];
      var _interaction = _ref6;

      if (_interaction.pointerType === pointerType && !(/down/i.test(eventType) && _interaction.simulation)) {
        return _interaction;
      }
    }

    return null;
  },
  // get interaction that has this pointer
  hasPointer: function hasPointer(_ref7) {
    var pointerId = _ref7.pointerId,
        scope = _ref7.scope;

    for (var _i5 = 0; _i5 < scope.interactions.list.length; _i5++) {
      var _ref8;

      _ref8 = scope.interactions.list[_i5];
      var interaction = _ref8;

      if (hasPointerId(interaction, pointerId)) {
        return interaction;
      }
    }

    return null;
  },
  // get first idle interaction with a matching pointerType
  idle: function idle(_ref9) {
    var pointerType = _ref9.pointerType,
        scope = _ref9.scope;

    for (var _i6 = 0; _i6 < scope.interactions.list.length; _i6++) {
      var _ref10;

      _ref10 = scope.interactions.list[_i6];
      var interaction = _ref10;

      // if there's already a pointer held down
      if (interaction.pointers.length === 1) {
        var target = interaction.interactable; // don't add this pointer if there is a target interactable and it
        // isn't gesturable

        if (target && !(target.options.gesture && target.options.gesture.enabled)) {
          continue;
        }
      } // maximum of 2 pointers per interaction
      else if (interaction.pointers.length >= 2) {
          continue;
        }

      if (!interaction.interacting() && pointerType === interaction.pointerType) {
        return interaction;
      }
    }

    return null;
  }
};

function hasPointerId(interaction, pointerId) {
  return interaction.pointers.some(function (_ref11) {
    var id = _ref11.id;
    return id === pointerId;
  });
}

var ___default_22 = finder;
_$interactionFinder_22["default"] = ___default_22;

var _$drag_1 = {};
"use strict";

function ___typeof_1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_1 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_1(obj); }

Object.defineProperty(_$drag_1, "__esModule", {
  value: true
});
_$drag_1["default"] = void 0;

var ___scope_1 = _$scope_24({});

var __arr_1 = ___interopRequireWildcard_1(_$arr_46);

var __is_1 = ___interopRequireWildcard_1(_$is_56);

function ___getRequireWildcardCache_1() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_1 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_1(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_1(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_1(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

___scope_1.ActionName.Drag = 'drag';

function __install_1(scope) {
  var actions = scope.actions,
      Interactable = scope.Interactable,
      defaults = scope.defaults;
  scope.addListeners({
    'interactions:before-action-move': beforeMove,
    'interactions:action-resume': beforeMove,
    // dragmove
    'interactions:action-move': move
  });
  Interactable.prototype.draggable = drag.draggable;
  actions[___scope_1.ActionName.Drag] = drag;
  actions.names.push(___scope_1.ActionName.Drag);
  __arr_1.merge(actions.eventTypes, ['dragstart', 'dragmove', 'draginertiastart', 'dragresume', 'dragend']);
  actions.methodDict.drag = 'draggable';
  defaults.actions.drag = drag.defaults;
}

function beforeMove(_ref) {
  var interaction = _ref.interaction;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  var axis = interaction.prepared.axis;

  if (axis === 'x') {
    interaction.coords.cur.page.y = interaction.coords.start.page.y;
    interaction.coords.cur.client.y = interaction.coords.start.client.y;
    interaction.coords.velocity.client.y = 0;
    interaction.coords.velocity.page.y = 0;
  } else if (axis === 'y') {
    interaction.coords.cur.page.x = interaction.coords.start.page.x;
    interaction.coords.cur.client.x = interaction.coords.start.client.x;
    interaction.coords.velocity.client.x = 0;
    interaction.coords.velocity.page.x = 0;
  }
}

function move(_ref2) {
  var iEvent = _ref2.iEvent,
      interaction = _ref2.interaction;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  var axis = interaction.prepared.axis;

  if (axis === 'x' || axis === 'y') {
    var opposite = axis === 'x' ? 'y' : 'x';
    iEvent.page[opposite] = interaction.coords.start.page[opposite];
    iEvent.client[opposite] = interaction.coords.start.client[opposite];
    iEvent.delta[opposite] = 0;
  }
}
/**
 * ```js
 * interact(element).draggable({
 *     onstart: function (event) {},
 *     onmove : function (event) {},
 *     onend  : function (event) {},
 *
 *     // the axis in which the first movement must be
 *     // for the drag sequence to start
 *     // 'xy' by default - any direction
 *     startAxis: 'x' || 'y' || 'xy',
 *
 *     // 'xy' by default - don't restrict to one axis (move in any direction)
 *     // 'x' or 'y' to restrict movement to either axis
 *     // 'start' to restrict movement to the axis the drag started in
 *     lockAxis: 'x' || 'y' || 'xy' || 'start',
 *
 *     // max number of drags that can happen concurrently
 *     // with elements of this Interactable. Infinity by default
 *     max: Infinity,
 *
 *     // max number of drags that can target the same element+Interactable
 *     // 1 by default
 *     maxPerElement: 2
 * })
 *
 * var isDraggable = interact('element').draggable(); // true
 * ```
 *
 * Get or set whether drag actions can be performed on the target
 *
 * @alias Interactable.prototype.draggable
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on drag events (object makes the Interactable
 * draggable)
 * @return {boolean | Interactable} boolean indicating if this can be the
 * target of drag events, or this Interctable
 */


var draggable = function draggable(options) {
  if (__is_1.object(options)) {
    this.options.drag.enabled = options.enabled !== false;
    this.setPerAction('drag', options);
    this.setOnEvents('drag', options);

    if (/^(xy|x|y|start)$/.test(options.lockAxis)) {
      this.options.drag.lockAxis = options.lockAxis;
    }

    if (/^(xy|x|y)$/.test(options.startAxis)) {
      this.options.drag.startAxis = options.startAxis;
    }

    return this;
  }

  if (__is_1.bool(options)) {
    this.options.drag.enabled = options;
    return this;
  }

  return this.options.drag;
};

var drag = {
  id: 'actions/drag',
  install: __install_1,
  draggable: draggable,
  beforeMove: beforeMove,
  move: move,
  defaults: {
    startAxis: 'xy',
    lockAxis: 'xy'
  },
  checker: function checker(_pointer, _event, interactable) {
    var dragOptions = interactable.options.drag;
    return dragOptions.enabled ? {
      name: 'drag',
      axis: dragOptions.lockAxis === 'start' ? dragOptions.startAxis : dragOptions.lockAxis
    } : null;
  },
  getCursor: function getCursor() {
    return 'move';
  }
};
var ___default_1 = drag;
_$drag_1["default"] = ___default_1;

var _$DropEvent_2 = {};
"use strict";

Object.defineProperty(_$DropEvent_2, "__esModule", {
  value: true
});
_$DropEvent_2["default"] = void 0;

var ___BaseEvent2_2 = ___interopRequireDefault_2(_$BaseEvent_13);

var __arr_2 = ___interopRequireWildcard_2(_$arr_46);

function ___getRequireWildcardCache_2() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_2 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_2(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_2(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_2(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_2(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___typeof_2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_2 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_2(obj); }

function ___toConsumableArray_2(arr) { return ___arrayWithoutHoles_2(arr) || ___iterableToArray_2(arr) || ___nonIterableSpread_2(); }

function ___nonIterableSpread_2() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function ___iterableToArray_2(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function ___arrayWithoutHoles_2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ___classCallCheck_2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_2(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_2(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_2(Constructor, staticProps); return Constructor; }

function ___possibleConstructorReturn_2(self, call) { if (call && (___typeof_2(call) === "object" || typeof call === "function")) { return call; } return ___assertThisInitialized_2(self); }

function ___getPrototypeOf_2(o) { ___getPrototypeOf_2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ___getPrototypeOf_2(o); }

function ___assertThisInitialized_2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ___inherits_2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ___setPrototypeOf_2(subClass, superClass); }

function ___setPrototypeOf_2(o, p) { ___setPrototypeOf_2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ___setPrototypeOf_2(o, p); }

function ___defineProperty_2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DropEvent =
/*#__PURE__*/
function (_BaseEvent) {
  ___inherits_2(DropEvent, _BaseEvent);

  /**
   * Class of events fired on dropzones during drags with acceptable targets.
   */
  function DropEvent(dropState, dragEvent, type) {
    var _this;

    ___classCallCheck_2(this, DropEvent);

    _this = ___possibleConstructorReturn_2(this, ___getPrototypeOf_2(DropEvent).call(this, dragEvent._interaction));

    ___defineProperty_2(___assertThisInitialized_2(_this), "target", void 0);

    ___defineProperty_2(___assertThisInitialized_2(_this), "dropzone", void 0);

    ___defineProperty_2(___assertThisInitialized_2(_this), "dragEvent", void 0);

    ___defineProperty_2(___assertThisInitialized_2(_this), "relatedTarget", void 0);

    ___defineProperty_2(___assertThisInitialized_2(_this), "draggable", void 0);

    ___defineProperty_2(___assertThisInitialized_2(_this), "timeStamp", void 0);

    ___defineProperty_2(___assertThisInitialized_2(_this), "propagationStopped", false);

    ___defineProperty_2(___assertThisInitialized_2(_this), "immediatePropagationStopped", false);

    var _ref = type === 'dragleave' ? dropState.prev : dropState.cur,
        element = _ref.element,
        dropzone = _ref.dropzone;

    _this.type = type;
    _this.target = element;
    _this.currentTarget = element;
    _this.dropzone = dropzone;
    _this.dragEvent = dragEvent;
    _this.relatedTarget = dragEvent.target;
    _this.draggable = dragEvent.interactable;
    _this.timeStamp = dragEvent.timeStamp;
    return _this;
  }
  /**
   * If this is a `dropactivate` event, the dropzone element will be
   * deactivated.
   *
   * If this is a `dragmove` or `dragenter`, a `dragleave` will be fired on the
   * dropzone element and more.
   */


  ___createClass_2(DropEvent, [{
    key: "reject",
    value: function reject() {
      var _this2 = this;

      var dropState = this._interaction.dropState;

      if (this.type !== 'dropactivate' && (!this.dropzone || dropState.cur.dropzone !== this.dropzone || dropState.cur.element !== this.target)) {
        return;
      }

      dropState.prev.dropzone = this.dropzone;
      dropState.prev.element = this.target;
      dropState.rejected = true;
      dropState.events.enter = null;
      this.stopImmediatePropagation();

      if (this.type === 'dropactivate') {
        var activeDrops = dropState.activeDrops;
        var index = __arr_2.findIndex(activeDrops, function (_ref2) {
          var dropzone = _ref2.dropzone,
              element = _ref2.element;
          return dropzone === _this2.dropzone && element === _this2.target;
        });
        dropState.activeDrops = [].concat(___toConsumableArray_2(activeDrops.slice(0, index)), ___toConsumableArray_2(activeDrops.slice(index + 1)));
        var deactivateEvent = new DropEvent(dropState, this.dragEvent, 'dropdeactivate');
        deactivateEvent.dropzone = this.dropzone;
        deactivateEvent.target = this.target;
        this.dropzone.fire(deactivateEvent);
      } else {
        this.dropzone.fire(new DropEvent(dropState, this.dragEvent, 'dragleave'));
      }
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {}
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.propagationStopped = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = this.propagationStopped = true;
    }
  }]);

  return DropEvent;
}(___BaseEvent2_2["default"]);

var ___default_2 = DropEvent;
_$DropEvent_2["default"] = ___default_2;

var _$drop_3 = {};
"use strict";

function ___typeof_3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_3 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_3(obj); }

Object.defineProperty(_$drop_3, "__esModule", {
  value: true
});
_$drop_3["default"] = void 0;

var __utils_3 = ___interopRequireWildcard_3(_$utils_55);

var _drag = ___interopRequireDefault_3(_$drag_1);

var _DropEvent = ___interopRequireDefault_3(_$DropEvent_2);

function ___interopRequireDefault_3(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_3() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_3 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_3(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_3(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function __install_3(scope) {
  var actions = scope.actions,
      interact = scope.interact,
      Interactable = scope.Interactable,
      defaults = scope.defaults;
  scope.usePlugin(_drag["default"]);
  /**
   *
   * ```js
   * interact('.drop').dropzone({
   *   accept: '.can-drop' || document.getElementById('single-drop'),
   *   overlap: 'pointer' || 'center' || zeroToOne
   * }
   * ```
   *
   * Returns or sets whether draggables can be dropped onto this target to
   * trigger drop events
   *
   * Dropzones can receive the following events:
   *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
   *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
   *  - `dragmove` when a draggable that has entered the dropzone is moved
   *  - `drop` when a draggable is dropped into this dropzone
   *
   * Use the `accept` option to allow only elements that match the given CSS
   * selector or element. The value can be:
   *
   *  - **an Element** - only that element can be dropped into this dropzone.
   *  - **a string**, - the element being dragged must match it as a CSS selector.
   *  - **`null`** - accept options is cleared - it accepts any element.
   *
   * Use the `overlap` option to set how drops are checked for. The allowed
   * values are:
   *
   *   - `'pointer'`, the pointer must be over the dropzone (default)
   *   - `'center'`, the draggable element's center must be over the dropzone
   *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
   *   e.g. `0.5` for drop to happen when half of the area of the draggable is
   *   over the dropzone
   *
   * Use the `checker` option to specify a function to check if a dragged element
   * is over this Interactable.
   *
   * @param {boolean | object | null} [options] The new options to be set.
   * @return {boolean | Interactable} The current setting or this Interactable
   */

  Interactable.prototype.dropzone = function (options) {
    return dropzoneMethod(this, options);
  };
  /**
   * ```js
   * interact(target)
   * .dropChecker(function(dragEvent,         // related dragmove or dragend event
   *                       event,             // TouchEvent/PointerEvent/MouseEvent
   *                       dropped,           // bool result of the default checker
   *                       dropzone,          // dropzone Interactable
   *                       dropElement,       // dropzone elemnt
   *                       draggable,         // draggable Interactable
   *                       draggableElement) {// draggable element
   *
   *   return dropped && event.target.hasAttribute('allow-drop')
   * }
   * ```
   */


  Interactable.prototype.dropCheck = function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
    return dropCheckMethod(this, dragEvent, event, draggable, draggableElement, dropElement, rect);
  };
  /**
   * Returns or sets whether the dimensions of dropzone elements are calculated
   * on every dragmove or only on dragstart for the default dropChecker
   *
   * @param {boolean} [newValue] True to check on each move. False to check only
   * before start
   * @return {boolean | interact} The current setting or interact
   */


  interact.dynamicDrop = function (newValue) {
    if (__utils_3.is.bool(newValue)) {
      // if (dragging && scope.dynamicDrop !== newValue && !newValue) {
      //  calcRects(dropzones)
      // }
      scope.dynamicDrop = newValue;
      return interact;
    }

    return scope.dynamicDrop;
  };

  __utils_3.arr.merge(actions.eventTypes, ['dragenter', 'dragleave', 'dropactivate', 'dropdeactivate', 'dropmove', 'drop']);
  actions.methodDict.drop = 'dropzone';
  scope.dynamicDrop = false;
  defaults.actions.drop = drop.defaults;
}

function collectDrops(_ref, draggableElement) {
  var interactables = _ref.interactables;
  var drops = []; // collect all dropzones and their elements which qualify for a drop

  for (var _i = 0; _i < interactables.list.length; _i++) {
    var _ref2;

    _ref2 = interactables.list[_i];
    var dropzone = _ref2;

    if (!dropzone.options.drop.enabled) {
      continue;
    }

    var accept = dropzone.options.drop.accept; // test the draggable draggableElement against the dropzone's accept setting

    if (__utils_3.is.element(accept) && accept !== draggableElement || __utils_3.is.string(accept) && !__utils_3.dom.matchesSelector(draggableElement, accept) || __utils_3.is.func(accept) && !accept({
      dropzone: dropzone,
      draggableElement: draggableElement
    })) {
      continue;
    } // query for new elements if necessary


    var dropElements = __utils_3.is.string(dropzone.target) ? dropzone._context.querySelectorAll(dropzone.target) : __utils_3.is.array(dropzone.target) ? dropzone.target : [dropzone.target];

    for (var _i2 = 0; _i2 < dropElements.length; _i2++) {
      var _ref3;

      _ref3 = dropElements[_i2];
      var dropzoneElement = _ref3;

      if (dropzoneElement !== draggableElement) {
        drops.push({
          dropzone: dropzone,
          element: dropzoneElement
        });
      }
    }
  }

  return drops;
}

function fireActivationEvents(activeDrops, event) {
  // loop through all active dropzones and trigger event
  for (var _i3 = 0; _i3 < activeDrops.length; _i3++) {
    var _ref4;

    _ref4 = activeDrops[_i3];
    var _ref5 = _ref4,
        dropzone = _ref5.dropzone,
        element = _ref5.element;
    event.dropzone = dropzone; // set current element as event target

    event.target = element;
    dropzone.fire(event);
    event.propagationStopped = event.immediatePropagationStopped = false;
  }
} // return a new array of possible drops. getActiveDrops should always be
// called when a drag has just started or a drag event happens while
// dynamicDrop is true


function getActiveDrops(scope, dragElement) {
  // get dropzones and their elements that could receive the draggable
  var activeDrops = collectDrops(scope, dragElement);

  for (var _i4 = 0; _i4 < activeDrops.length; _i4++) {
    var _ref6;

    _ref6 = activeDrops[_i4];
    var activeDrop = _ref6;
    activeDrop.rect = activeDrop.dropzone.getRect(activeDrop.element);
  }

  return activeDrops;
}

function getDrop(_ref7, dragEvent, pointerEvent) {
  var dropState = _ref7.dropState,
      draggable = _ref7.interactable,
      dragElement = _ref7.element;
  var validDrops = []; // collect all dropzones and their elements which qualify for a drop

  for (var _i5 = 0; _i5 < dropState.activeDrops.length; _i5++) {
    var _ref8;

    _ref8 = dropState.activeDrops[_i5];
    var _ref9 = _ref8,
        dropzone = _ref9.dropzone,
        dropzoneElement = _ref9.element,
        rect = _ref9.rect;
    validDrops.push(dropzone.dropCheck(dragEvent, pointerEvent, draggable, dragElement, dropzoneElement, rect) ? dropzoneElement : null);
  } // get the most appropriate dropzone based on DOM depth and order


  var dropIndex = __utils_3.dom.indexOfDeepestElement(validDrops);
  return dropState.activeDrops[dropIndex] || null;
}

function getDropEvents(interaction, _pointerEvent, dragEvent) {
  var dropState = interaction.dropState;
  var dropEvents = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };

  if (dragEvent.type === 'dragstart') {
    dropEvents.activate = new _DropEvent["default"](dropState, dragEvent, 'dropactivate');
    dropEvents.activate.target = null;
    dropEvents.activate.dropzone = null;
  }

  if (dragEvent.type === 'dragend') {
    dropEvents.deactivate = new _DropEvent["default"](dropState, dragEvent, 'dropdeactivate');
    dropEvents.deactivate.target = null;
    dropEvents.deactivate.dropzone = null;
  }

  if (dropState.rejected) {
    return dropEvents;
  }

  if (dropState.cur.element !== dropState.prev.element) {
    // if there was a previous dropzone, create a dragleave event
    if (dropState.prev.dropzone) {
      dropEvents.leave = new _DropEvent["default"](dropState, dragEvent, 'dragleave');
      dragEvent.dragLeave = dropEvents.leave.target = dropState.prev.element;
      dragEvent.prevDropzone = dropEvents.leave.dropzone = dropState.prev.dropzone;
    } // if dropzone is not null, create a dragenter event


    if (dropState.cur.dropzone) {
      dropEvents.enter = new _DropEvent["default"](dropState, dragEvent, 'dragenter');
      dragEvent.dragEnter = dropState.cur.element;
      dragEvent.dropzone = dropState.cur.dropzone;
    }
  }

  if (dragEvent.type === 'dragend' && dropState.cur.dropzone) {
    dropEvents.drop = new _DropEvent["default"](dropState, dragEvent, 'drop');
    dragEvent.dropzone = dropState.cur.dropzone;
    dragEvent.relatedTarget = dropState.cur.element;
  }

  if (dragEvent.type === 'dragmove' && dropState.cur.dropzone) {
    dropEvents.move = new _DropEvent["default"](dropState, dragEvent, 'dropmove');
    dropEvents.move.dragmove = dragEvent;
    dragEvent.dropzone = dropState.cur.dropzone;
  }

  return dropEvents;
}

function fireDropEvents(interaction, events) {
  var dropState = interaction.dropState;
  var activeDrops = dropState.activeDrops,
      cur = dropState.cur,
      prev = dropState.prev;

  if (events.leave) {
    prev.dropzone.fire(events.leave);
  }

  if (events.move) {
    cur.dropzone.fire(events.move);
  }

  if (events.enter) {
    cur.dropzone.fire(events.enter);
  }

  if (events.drop) {
    cur.dropzone.fire(events.drop);
  }

  if (events.deactivate) {
    fireActivationEvents(activeDrops, events.deactivate);
  }

  dropState.prev.dropzone = cur.dropzone;
  dropState.prev.element = cur.element;
}

function onEventCreated(_ref10, scope) {
  var interaction = _ref10.interaction,
      iEvent = _ref10.iEvent,
      event = _ref10.event;

  if (iEvent.type !== 'dragmove' && iEvent.type !== 'dragend') {
    return;
  }

  var dropState = interaction.dropState;

  if (scope.dynamicDrop) {
    dropState.activeDrops = getActiveDrops(scope, interaction.element);
  }

  var dragEvent = iEvent;
  var dropResult = getDrop(interaction, dragEvent, event); // update rejected status

  dropState.rejected = dropState.rejected && !!dropResult && dropResult.dropzone === dropState.cur.dropzone && dropResult.element === dropState.cur.element;
  dropState.cur.dropzone = dropResult && dropResult.dropzone;
  dropState.cur.element = dropResult && dropResult.element;
  dropState.events = getDropEvents(interaction, event, dragEvent);
}

function dropzoneMethod(interactable, options) {
  if (__utils_3.is.object(options)) {
    interactable.options.drop.enabled = options.enabled !== false;

    if (options.listeners) {
      var normalized = __utils_3.normalizeListeners(options.listeners); // rename 'drop' to '' as it will be prefixed with 'drop'

      var corrected = Object.keys(normalized).reduce(function (acc, type) {
        var correctedType = /^(enter|leave)/.test(type) ? "drag".concat(type) : /^(activate|deactivate|move)/.test(type) ? "drop".concat(type) : type;
        acc[correctedType] = normalized[type];
        return acc;
      }, {});
      interactable.off(interactable.options.drop.listeners);
      interactable.on(corrected);
      interactable.options.drop.listeners = corrected;
    }

    if (__utils_3.is.func(options.ondrop)) {
      interactable.on('drop', options.ondrop);
    }

    if (__utils_3.is.func(options.ondropactivate)) {
      interactable.on('dropactivate', options.ondropactivate);
    }

    if (__utils_3.is.func(options.ondropdeactivate)) {
      interactable.on('dropdeactivate', options.ondropdeactivate);
    }

    if (__utils_3.is.func(options.ondragenter)) {
      interactable.on('dragenter', options.ondragenter);
    }

    if (__utils_3.is.func(options.ondragleave)) {
      interactable.on('dragleave', options.ondragleave);
    }

    if (__utils_3.is.func(options.ondropmove)) {
      interactable.on('dropmove', options.ondropmove);
    }

    if (/^(pointer|center)$/.test(options.overlap)) {
      interactable.options.drop.overlap = options.overlap;
    } else if (__utils_3.is.number(options.overlap)) {
      interactable.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
    }

    if ('accept' in options) {
      interactable.options.drop.accept = options.accept;
    }

    if ('checker' in options) {
      interactable.options.drop.checker = options.checker;
    }

    return interactable;
  }

  if (__utils_3.is.bool(options)) {
    interactable.options.drop.enabled = options;
    return interactable;
  }

  return interactable.options.drop;
}

function dropCheckMethod(interactable, dragEvent, event, draggable, draggableElement, dropElement, rect) {
  var dropped = false; // if the dropzone has no rect (eg. display: none)
  // call the custom dropChecker or just return false

  if (!(rect = rect || interactable.getRect(dropElement))) {
    return interactable.options.drop.checker ? interactable.options.drop.checker(dragEvent, event, dropped, interactable, dropElement, draggable, draggableElement) : false;
  }

  var dropOverlap = interactable.options.drop.overlap;

  if (dropOverlap === 'pointer') {
    var origin = __utils_3.getOriginXY(draggable, draggableElement, 'drag');
    var page = __utils_3.pointer.getPageXY(dragEvent);
    page.x += origin.x;
    page.y += origin.y;
    var horizontal = page.x > rect.left && page.x < rect.right;
    var vertical = page.y > rect.top && page.y < rect.bottom;
    dropped = horizontal && vertical;
  }

  var dragRect = draggable.getRect(draggableElement);

  if (dragRect && dropOverlap === 'center') {
    var cx = dragRect.left + dragRect.width / 2;
    var cy = dragRect.top + dragRect.height / 2;
    dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
  }

  if (dragRect && __utils_3.is.number(dropOverlap)) {
    var overlapArea = Math.max(0, Math.min(rect.right, dragRect.right) - Math.max(rect.left, dragRect.left)) * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top, dragRect.top));
    var overlapRatio = overlapArea / (dragRect.width * dragRect.height);
    dropped = overlapRatio >= dropOverlap;
  }

  if (interactable.options.drop.checker) {
    dropped = interactable.options.drop.checker(dragEvent, event, dropped, interactable, dropElement, draggable, draggableElement);
  }

  return dropped;
}

var drop = {
  id: 'actions/drop',
  install: __install_3,
  listeners: {
    'interactions:before-action-start': function interactionsBeforeActionStart(_ref11) {
      var interaction = _ref11.interaction;

      if (interaction.prepared.name !== 'drag') {
        return;
      }

      interaction.dropState = {
        cur: {
          dropzone: null,
          element: null
        },
        prev: {
          dropzone: null,
          element: null
        },
        rejected: null,
        events: null,
        activeDrops: null
      };
    },
    'interactions:after-action-start': function interactionsAfterActionStart(_ref12, scope) {
      var interaction = _ref12.interaction,
          event = _ref12.event,
          dragEvent = _ref12.iEvent;

      if (interaction.prepared.name !== 'drag') {
        return;
      }

      var dropState = interaction.dropState; // reset active dropzones

      dropState.activeDrops = null;
      dropState.events = null;
      dropState.activeDrops = getActiveDrops(scope, interaction.element);
      dropState.events = getDropEvents(interaction, event, dragEvent);

      if (dropState.events.activate) {
        fireActivationEvents(dropState.activeDrops, dropState.events.activate);
      }
    },
    // FIXME proper signal types
    'interactions:action-move': onEventCreated,
    'interactions:action-end': onEventCreated,
    'interactions:after-action-move': function fireDropAfterMove(_ref13) {
      var interaction = _ref13.interaction;

      if (interaction.prepared.name !== 'drag') {
        return;
      }

      fireDropEvents(interaction, interaction.dropState.events);
      interaction.dropState.events = {};
    },
    'interactions:after-action-end': function interactionsAfterActionEnd(_ref14) {
      var interaction = _ref14.interaction;

      if (interaction.prepared.name !== 'drag') {
        return;
      }

      fireDropEvents(interaction, interaction.dropState.events);
    },
    'interactions:stop': function interactionsStop(_ref15) {
      var interaction = _ref15.interaction;

      if (interaction.prepared.name !== 'drag') {
        return;
      }

      var dropState = interaction.dropState;

      if (dropState) {
        dropState.activeDrops = null;
        dropState.events = null;
        dropState.cur.dropzone = null;
        dropState.cur.element = null;
        dropState.prev.dropzone = null;
        dropState.prev.element = null;
        dropState.rejected = false;
      }
    }
  },
  getActiveDrops: getActiveDrops,
  getDrop: getDrop,
  getDropEvents: getDropEvents,
  fireDropEvents: fireDropEvents,
  defaults: {
    enabled: false,
    accept: null,
    overlap: 'pointer'
  }
};
var ___default_3 = drop;
_$drop_3["default"] = ___default_3;

var _$gesture_4 = {};
"use strict";

function ___typeof_4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_4 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_4(obj); }

Object.defineProperty(_$gesture_4, "__esModule", {
  value: true
});
_$gesture_4["default"] = void 0;

var ___InteractEvent_4 = ___interopRequireDefault_4(_$InteractEvent_15);

var ___scope_4 = _$scope_24({});

var __utils_4 = ___interopRequireWildcard_4(_$utils_55);

function ___getRequireWildcardCache_4() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_4 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_4(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_4(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_4(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_4(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

___scope_4.ActionName.Gesture = 'gesture';

function __install_4(scope) {
  var actions = scope.actions,
      Interactable = scope.Interactable,
      defaults = scope.defaults;
  /**
   * ```js
   * interact(element).gesturable({
   *     onstart: function (event) {},
   *     onmove : function (event) {},
   *     onend  : function (event) {},
   *
   *     // limit multiple gestures.
   *     // See the explanation in {@link Interactable.draggable} example
   *     max: Infinity,
   *     maxPerElement: 1,
   * })
   *
   * var isGestureable = interact(element).gesturable()
   * ```
   *
   * Gets or sets whether multitouch gestures can be performed on the target
   *
   * @param {boolean | object} [options] true/false or An object with event
   * listeners to be fired on gesture events (makes the Interactable gesturable)
   * @return {boolean | Interactable} A boolean indicating if this can be the
   * target of gesture events, or this Interactable
   */

  Interactable.prototype.gesturable = function (options) {
    if (__utils_4.is.object(options)) {
      this.options.gesture.enabled = options.enabled !== false;
      this.setPerAction('gesture', options);
      this.setOnEvents('gesture', options);
      return this;
    }

    if (__utils_4.is.bool(options)) {
      this.options.gesture.enabled = options;
      return this;
    }

    return this.options.gesture;
  };

  actions[___scope_4.ActionName.Gesture] = gesture;
  actions.names.push(___scope_4.ActionName.Gesture);
  __utils_4.arr.merge(actions.eventTypes, ['gesturestart', 'gesturemove', 'gestureend']);
  actions.methodDict.gesture = 'gesturable';
  defaults.actions.gesture = gesture.defaults;
}

var gesture = {
  id: 'actions/gesture',
  install: __install_4,
  listeners: {
    'interactions:action-start': updateGestureProps,
    'interactions:action-move': updateGestureProps,
    'interactions:action-end': updateGestureProps,
    'interactions:new': function interactionsNew(_ref) {
      var interaction = _ref.interaction;
      interaction.gesture = {
        angle: 0,
        distance: 0,
        scale: 1,
        startAngle: 0,
        startDistance: 0
      };
    }
  },
  defaults: {},
  checker: function checker(_pointer, _event, _interactable, _element, interaction) {
    if (interaction.pointers.length >= 2) {
      return {
        name: 'gesture'
      };
    }

    return null;
  },
  getCursor: function getCursor() {
    return '';
  }
};

function updateGestureProps(_ref2) {
  var interaction = _ref2.interaction,
      iEvent = _ref2.iEvent,
      event = _ref2.event,
      phase = _ref2.phase;

  if (interaction.prepared.name !== 'gesture') {
    return;
  }

  var pointers = interaction.pointers.map(function (p) {
    return p.pointer;
  });
  var starting = phase === 'start';
  var ending = phase === 'end';
  var deltaSource = interaction.interactable.options.deltaSource;
  iEvent.touches = [pointers[0], pointers[1]];

  if (starting) {
    iEvent.distance = __utils_4.pointer.touchDistance(pointers, deltaSource);
    iEvent.box = __utils_4.pointer.touchBBox(pointers);
    iEvent.scale = 1;
    iEvent.ds = 0;
    iEvent.angle = __utils_4.pointer.touchAngle(pointers, deltaSource);
    iEvent.da = 0;
    interaction.gesture.startDistance = iEvent.distance;
    interaction.gesture.startAngle = iEvent.angle;
  } else if (ending || event instanceof ___InteractEvent_4["default"]) {
    var prevEvent = interaction.prevEvent;
    iEvent.distance = prevEvent.distance;
    iEvent.box = prevEvent.box;
    iEvent.scale = prevEvent.scale;
    iEvent.ds = 0;
    iEvent.angle = prevEvent.angle;
    iEvent.da = 0;
  } else {
    iEvent.distance = __utils_4.pointer.touchDistance(pointers, deltaSource);
    iEvent.box = __utils_4.pointer.touchBBox(pointers);
    iEvent.scale = iEvent.distance / interaction.gesture.startDistance;
    iEvent.angle = __utils_4.pointer.touchAngle(pointers, deltaSource);
    iEvent.ds = iEvent.scale - interaction.gesture.scale;
    iEvent.da = iEvent.angle - interaction.gesture.angle;
  }

  interaction.gesture.distance = iEvent.distance;
  interaction.gesture.angle = iEvent.angle;

  if (__utils_4.is.number(iEvent.scale) && iEvent.scale !== Infinity && !isNaN(iEvent.scale)) {
    interaction.gesture.scale = iEvent.scale;
  }
}

var ___default_4 = gesture;
_$gesture_4["default"] = ___default_4;

var _$resize_6 = {};
"use strict";

function ___typeof_6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_6 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_6(obj); }

Object.defineProperty(_$resize_6, "__esModule", {
  value: true
});
_$resize_6["default"] = void 0;

var ___scope_6 = _$scope_24({});

var __arr_6 = ___interopRequireWildcard_6(_$arr_46);

var __dom_6 = ___interopRequireWildcard_6(_$domUtils_50);

var ___extend_6 = ___interopRequireDefault_6(_$extend_52);

var __is_6 = ___interopRequireWildcard_6(_$is_56);

function ___interopRequireDefault_6(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_6() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_6 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_6(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_6(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_6(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

___scope_6.ActionName.Resize = 'resize';

function __install_6(scope) {
  var actions = scope.actions,
      browser = scope.browser,
      Interactable = scope.Interactable,
      defaults = scope.defaults; // Less Precision with touch input

  resize.cursors = initCursors(browser);
  resize.defaultMargin = browser.supportsTouch || browser.supportsPointerEvent ? 20 : 10;
  /**
   * ```js
   * interact(element).resizable({
   *   onstart: function (event) {},
   *   onmove : function (event) {},
   *   onend  : function (event) {},
   *
   *   edges: {
   *     top   : true,       // Use pointer coords to check for resize.
   *     left  : false,      // Disable resizing from left edge.
   *     bottom: '.resize-s',// Resize if pointer target matches selector
   *     right : handleEl    // Resize if pointer target is the given Element
   *   },
   *
   *     // Width and height can be adjusted independently. When `true`, width and
   *     // height are adjusted at a 1:1 ratio.
   *     square: false,
   *
   *     // Width and height can be adjusted independently. When `true`, width and
   *     // height maintain the aspect ratio they had when resizing started.
   *     preserveAspectRatio: false,
   *
   *   // a value of 'none' will limit the resize rect to a minimum of 0x0
   *   // 'negate' will allow the rect to have negative width/height
   *   // 'reposition' will keep the width/height positive by swapping
   *   // the top and bottom edges and/or swapping the left and right edges
   *   invert: 'none' || 'negate' || 'reposition'
   *
   *   // limit multiple resizes.
   *   // See the explanation in the {@link Interactable.draggable} example
   *   max: Infinity,
   *   maxPerElement: 1,
   * })
   *
   * var isResizeable = interact(element).resizable()
   * ```
   *
   * Gets or sets whether resize actions can be performed on the target
   *
   * @param {boolean | object} [options] true/false or An object with event
   * listeners to be fired on resize events (object makes the Interactable
   * resizable)
   * @return {boolean | Interactable} A boolean indicating if this can be the
   * target of resize elements, or this Interactable
   */

  Interactable.prototype.resizable = function (options) {
    return resizable(this, options, scope);
  };

  actions[___scope_6.ActionName.Resize] = resize;
  actions.names.push(___scope_6.ActionName.Resize);
  __arr_6.merge(actions.eventTypes, ['resizestart', 'resizemove', 'resizeinertiastart', 'resizeresume', 'resizeend']);
  actions.methodDict.resize = 'resizable';
  defaults.actions.resize = resize.defaults;
}

var resize = {
  id: 'actions/resize',
  install: __install_6,
  listeners: {
    'interactions:new': function interactionsNew(_ref) {
      var interaction = _ref.interaction;
      interaction.resizeAxes = 'xy';
    },
    'interactions:action-start': function interactionsActionStart(arg) {
      start(arg);
      updateEventAxes(arg);
    },
    'interactions:action-move': function interactionsActionMove(arg) {
      __move_6(arg);
      updateEventAxes(arg);
    },
    'interactions:action-end': end
  },
  defaults: {
    square: false,
    preserveAspectRatio: false,
    axis: 'xy',
    // use default margin
    margin: NaN,
    // object with props left, right, top, bottom which are
    // true/false values to resize when the pointer is over that edge,
    // CSS selectors to match the handles for each direction
    // or the Elements for each handle
    edges: null,
    // a value of 'none' will limit the resize rect to a minimum of 0x0
    // 'negate' will alow the rect to have negative width/height
    // 'reposition' will keep the width/height positive by swapping
    // the top and bottom edges and/or swapping the left and right edges
    invert: 'none'
  },
  checker: function checker(_pointer, _event, interactable, element, interaction, rect) {
    if (!rect) {
      return null;
    }

    var page = (0, ___extend_6["default"])({}, interaction.coords.cur.page);
    var options = interactable.options;

    if (options.resize.enabled) {
      var resizeOptions = options.resize;
      var resizeEdges = {
        left: false,
        right: false,
        top: false,
        bottom: false
      }; // if using resize.edges

      if (__is_6.object(resizeOptions.edges)) {
        for (var edge in resizeEdges) {
          resizeEdges[edge] = checkResizeEdge(edge, resizeOptions.edges[edge], page, interaction._latestPointer.eventTarget, element, rect, resizeOptions.margin || this.defaultMargin);
        }

        resizeEdges.left = resizeEdges.left && !resizeEdges.right;
        resizeEdges.top = resizeEdges.top && !resizeEdges.bottom;

        if (resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom) {
          return {
            name: 'resize',
            edges: resizeEdges
          };
        }
      } else {
        var right = options.resize.axis !== 'y' && page.x > rect.right - this.defaultMargin;
        var bottom = options.resize.axis !== 'x' && page.y > rect.bottom - this.defaultMargin;

        if (right || bottom) {
          return {
            name: 'resize',
            axes: (right ? 'x' : '') + (bottom ? 'y' : '')
          };
        }
      }
    }

    return null;
  },
  cursors: null,
  getCursor: function getCursor(_ref2) {
    var edges = _ref2.edges,
        axis = _ref2.axis,
        name = _ref2.name;
    var cursors = resize.cursors;
    var result = null;

    if (axis) {
      result = cursors[name + axis];
    } else if (edges) {
      var cursorKey = '';
      var _arr = ['top', 'bottom', 'left', 'right'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var edge = _arr[_i];

        if (edges[edge]) {
          cursorKey += edge;
        }
      }

      result = cursors[cursorKey];
    }

    return result;
  },
  defaultMargin: null
};

function resizable(interactable, options, scope) {
  if (__is_6.object(options)) {
    interactable.options.resize.enabled = options.enabled !== false;
    interactable.setPerAction('resize', options);
    interactable.setOnEvents('resize', options);

    if (__is_6.string(options.axis) && /^x$|^y$|^xy$/.test(options.axis)) {
      interactable.options.resize.axis = options.axis;
    } else if (options.axis === null) {
      interactable.options.resize.axis = scope.defaults.actions.resize.axis;
    }

    if (__is_6.bool(options.preserveAspectRatio)) {
      interactable.options.resize.preserveAspectRatio = options.preserveAspectRatio;
    } else if (__is_6.bool(options.square)) {
      interactable.options.resize.square = options.square;
    }

    return interactable;
  }

  if (__is_6.bool(options)) {
    interactable.options.resize.enabled = options;
    return interactable;
  }

  return interactable.options.resize;
}

function checkResizeEdge(name, value, page, element, interactableElement, rect, margin) {
  // false, '', undefined, null
  if (!value) {
    return false;
  } // true value, use pointer coords and element rect


  if (value === true) {
    // if dimensions are negative, "switch" edges
    var width = __is_6.number(rect.width) ? rect.width : rect.right - rect.left;
    var height = __is_6.number(rect.height) ? rect.height : rect.bottom - rect.top; // don't use margin greater than half the relevent dimension

    margin = Math.min(margin, (name === 'left' || name === 'right' ? width : height) / 2);

    if (width < 0) {
      if (name === 'left') {
        name = 'right';
      } else if (name === 'right') {
        name = 'left';
      }
    }

    if (height < 0) {
      if (name === 'top') {
        name = 'bottom';
      } else if (name === 'bottom') {
        name = 'top';
      }
    }

    if (name === 'left') {
      return page.x < (width >= 0 ? rect.left : rect.right) + margin;
    }

    if (name === 'top') {
      return page.y < (height >= 0 ? rect.top : rect.bottom) + margin;
    }

    if (name === 'right') {
      return page.x > (width >= 0 ? rect.right : rect.left) - margin;
    }

    if (name === 'bottom') {
      return page.y > (height >= 0 ? rect.bottom : rect.top) - margin;
    }
  } // the remaining checks require an element


  if (!__is_6.element(element)) {
    return false;
  }

  return __is_6.element(value) // the value is an element to use as a resize handle
  ? value === element // otherwise check if element matches value as selector
  : __dom_6.matchesUpTo(element, value, interactableElement);
}

function initCursors(browser) {
  return browser.isIe9 ? {
    x: 'e-resize',
    y: 's-resize',
    xy: 'se-resize',
    top: 'n-resize',
    left: 'w-resize',
    bottom: 's-resize',
    right: 'e-resize',
    topleft: 'se-resize',
    bottomright: 'se-resize',
    topright: 'ne-resize',
    bottomleft: 'ne-resize'
  } : {
    x: 'ew-resize',
    y: 'ns-resize',
    xy: 'nwse-resize',
    top: 'ns-resize',
    left: 'ew-resize',
    bottom: 'ns-resize',
    right: 'ew-resize',
    topleft: 'nwse-resize',
    bottomright: 'nwse-resize',
    topright: 'nesw-resize',
    bottomleft: 'nesw-resize'
  };
}

function start(_ref3) {
  var iEvent = _ref3.iEvent,
      interaction = _ref3.interaction;

  if (interaction.prepared.name !== 'resize' || !interaction.prepared.edges) {
    return;
  }

  var startRect = (0, ___extend_6["default"])({}, interaction.rect);
  var resizeOptions = interaction.interactable.options.resize;
  /*
   * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
   * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
   * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
   * on the active edges and the edge being interacted with.
   */

  if (resizeOptions.square || resizeOptions.preserveAspectRatio) {
    var linkedEdges = (0, ___extend_6["default"])({}, interaction.prepared.edges);
    linkedEdges.top = linkedEdges.top || linkedEdges.left && !linkedEdges.bottom;
    linkedEdges.left = linkedEdges.left || linkedEdges.top && !linkedEdges.right;
    linkedEdges.bottom = linkedEdges.bottom || linkedEdges.right && !linkedEdges.top;
    linkedEdges.right = linkedEdges.right || linkedEdges.bottom && !linkedEdges.left;
    interaction.prepared._linkedEdges = linkedEdges;
  } else {
    interaction.prepared._linkedEdges = null;
  } // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize


  if (resizeOptions.preserveAspectRatio) {
    interaction.resizeStartAspectRatio = startRect.width / startRect.height;
  }

  interaction.resizeRects = {
    start: startRect,
    current: {
      left: startRect.left,
      right: startRect.right,
      top: startRect.top,
      bottom: startRect.bottom
    },
    inverted: (0, ___extend_6["default"])({}, startRect),
    previous: (0, ___extend_6["default"])({}, startRect),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  };
  iEvent.edges = interaction.prepared.edges;
  iEvent.rect = interaction.resizeRects.inverted;
  iEvent.deltaRect = interaction.resizeRects.delta;
}

function __move_6(_ref4) {
  var iEvent = _ref4.iEvent,
      interaction = _ref4.interaction;

  if (interaction.prepared.name !== 'resize' || !interaction.prepared.edges) {
    return;
  }

  var resizeOptions = interaction.interactable.options.resize;
  var invert = resizeOptions.invert;
  var invertible = invert === 'reposition' || invert === 'negate';
  var edges = interaction.prepared.edges; // eslint-disable-next-line no-shadow

  var start = interaction.resizeRects.start;
  var current = interaction.resizeRects.current;
  var inverted = interaction.resizeRects.inverted;
  var deltaRect = interaction.resizeRects.delta;
  var previous = (0, ___extend_6["default"])(interaction.resizeRects.previous, inverted);
  var originalEdges = edges;
  var eventDelta = (0, ___extend_6["default"])({}, iEvent.delta);

  if (resizeOptions.preserveAspectRatio || resizeOptions.square) {
    // `resize.preserveAspectRatio` takes precedence over `resize.square`
    var startAspectRatio = resizeOptions.preserveAspectRatio ? interaction.resizeStartAspectRatio : 1;
    edges = interaction.prepared._linkedEdges;

    if (originalEdges.left && originalEdges.bottom || originalEdges.right && originalEdges.top) {
      eventDelta.y = -eventDelta.x / startAspectRatio;
    } else if (originalEdges.left || originalEdges.right) {
      eventDelta.y = eventDelta.x / startAspectRatio;
    } else if (originalEdges.top || originalEdges.bottom) {
      eventDelta.x = eventDelta.y * startAspectRatio;
    }
  } // update the 'current' rect without modifications


  if (edges.top) {
    current.top += eventDelta.y;
  }

  if (edges.bottom) {
    current.bottom += eventDelta.y;
  }

  if (edges.left) {
    current.left += eventDelta.x;
  }

  if (edges.right) {
    current.right += eventDelta.x;
  }

  if (invertible) {
    // if invertible, copy the current rect
    (0, ___extend_6["default"])(inverted, current);

    if (invert === 'reposition') {
      // swap edge values if necessary to keep width/height positive
      var swap;

      if (inverted.top > inverted.bottom) {
        swap = inverted.top;
        inverted.top = inverted.bottom;
        inverted.bottom = swap;
      }

      if (inverted.left > inverted.right) {
        swap = inverted.left;
        inverted.left = inverted.right;
        inverted.right = swap;
      }
    }
  } else {
    // if not invertible, restrict to minimum of 0x0 rect
    inverted.top = Math.min(current.top, start.bottom);
    inverted.bottom = Math.max(current.bottom, start.top);
    inverted.left = Math.min(current.left, start.right);
    inverted.right = Math.max(current.right, start.left);
  }

  inverted.width = inverted.right - inverted.left;
  inverted.height = inverted.bottom - inverted.top;

  for (var edge in inverted) {
    deltaRect[edge] = inverted[edge] - previous[edge];
  }

  iEvent.edges = interaction.prepared.edges;
  iEvent.rect = inverted;
  iEvent.deltaRect = deltaRect;
}

function end(_ref5) {
  var iEvent = _ref5.iEvent,
      interaction = _ref5.interaction;

  if (interaction.prepared.name !== 'resize' || !interaction.prepared.edges) {
    return;
  }

  iEvent.edges = interaction.prepared.edges;
  iEvent.rect = interaction.resizeRects.inverted;
  iEvent.deltaRect = interaction.resizeRects.delta;
}

function updateEventAxes(_ref6) {
  var iEvent = _ref6.iEvent,
      interaction = _ref6.interaction;

  if (interaction.prepared.name !== ___scope_6.ActionName.Resize || !interaction.resizeAxes) {
    return;
  }

  var options = interaction.interactable.options;

  if (options.resize.square) {
    if (interaction.resizeAxes === 'y') {
      iEvent.delta.x = iEvent.delta.y;
    } else {
      iEvent.delta.y = iEvent.delta.x;
    }

    iEvent.axes = 'xy';
  } else {
    iEvent.axes = interaction.resizeAxes;

    if (interaction.resizeAxes === 'x') {
      iEvent.delta.y = 0;
    } else if (interaction.resizeAxes === 'y') {
      iEvent.delta.x = 0;
    }
  }
}

var ___default_6 = resize;
_$resize_6["default"] = ___default_6;

var _$actions_5 = {};
"use strict";

Object.defineProperty(_$actions_5, "__esModule", {
  value: true
});
_$actions_5.install = __install_5;
Object.defineProperty(_$actions_5, "drag", {
  enumerable: true,
  get: function get() {
    return ___drag_5["default"];
  }
});
Object.defineProperty(_$actions_5, "drop", {
  enumerable: true,
  get: function get() {
    return _index["default"];
  }
});
Object.defineProperty(_$actions_5, "gesture", {
  enumerable: true,
  get: function get() {
    return _gesture["default"];
  }
});
Object.defineProperty(_$actions_5, "resize", {
  enumerable: true,
  get: function get() {
    return _resize["default"];
  }
});
_$actions_5.id = void 0;

var ___drag_5 = ___interopRequireDefault_5(_$drag_1);

var _index = ___interopRequireDefault_5(_$drop_3);

var _gesture = ___interopRequireDefault_5(_$gesture_4);

var _resize = ___interopRequireDefault_5(_$resize_6);

function ___interopRequireDefault_5(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function __install_5(scope) {
  scope.usePlugin(_gesture["default"]);
  scope.usePlugin(_resize["default"]);
  scope.usePlugin(___drag_5["default"]);
  scope.usePlugin(_index["default"]);
}

var id = 'actions';
_$actions_5.id = id;

var _$autoScroll_7 = {};
"use strict";

function ___typeof_7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_7 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_7(obj); }

Object.defineProperty(_$autoScroll_7, "__esModule", {
  value: true
});
_$autoScroll_7.getContainer = getContainer;
_$autoScroll_7.getScroll = getScroll;
_$autoScroll_7.getScrollSize = getScrollSize;
_$autoScroll_7.getScrollSizeDelta = getScrollSizeDelta;
_$autoScroll_7["default"] = void 0;

var __domUtils_7 = ___interopRequireWildcard_7(_$domUtils_50);

var __is_7 = ___interopRequireWildcard_7(_$is_56);

var ___raf_7 = ___interopRequireDefault_7(_$raf_61);

/* removed: var _$rect_62 = require("../utils/rect.js"); */;

/* removed: var _$window_65 = require("../utils/window.js"); */;

function ___interopRequireDefault_7(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_7() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_7 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_7(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_7(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_7(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function __install_7(scope) {
  var defaults = scope.defaults,
      actions = scope.actions;
  scope.autoScroll = autoScroll;

  autoScroll.now = function () {
    return scope.now();
  };

  actions.eventTypes.push('autoscroll');
  defaults.perAction.autoScroll = autoScroll.defaults;
}

var autoScroll = {
  defaults: {
    enabled: false,
    margin: 60,
    // the item that is scrolled (Window or HTMLElement)
    container: null,
    // the scroll speed in pixels per second
    speed: 300
  },
  now: Date.now,
  interaction: null,
  i: null,
  // the handle returned by window.setInterval
  x: 0,
  y: 0,
  // Direction each pulse is to scroll in
  isScrolling: false,
  prevTime: 0,
  margin: 0,
  speed: 0,
  start: function start(interaction) {
    autoScroll.isScrolling = true;

    ___raf_7["default"].cancel(autoScroll.i);

    interaction.autoScroll = autoScroll;
    autoScroll.interaction = interaction;
    autoScroll.prevTime = autoScroll.now();
    autoScroll.i = ___raf_7["default"].request(autoScroll.scroll);
  },
  stop: function stop() {
    autoScroll.isScrolling = false;

    if (autoScroll.interaction) {
      autoScroll.interaction.autoScroll = null;
    }

    ___raf_7["default"].cancel(autoScroll.i);
  },
  // scroll the window by the values in scroll.x/y
  scroll: function scroll() {
    var interaction = autoScroll.interaction;
    var interactable = interaction.interactable,
        element = interaction.element;
    var options = interactable.options[autoScroll.interaction.prepared.name].autoScroll;
    var container = getContainer(options.container, interactable, element);
    var now = autoScroll.now(); // change in time in seconds

    var dt = (now - autoScroll.prevTime) / 1000; // displacement

    var s = options.speed * dt;

    if (s >= 1) {
      var scrollBy = {
        x: autoScroll.x * s,
        y: autoScroll.y * s
      };

      if (scrollBy.x || scrollBy.y) {
        var prevScroll = getScroll(container);

        if (__is_7.window(container)) {
          container.scrollBy(scrollBy.x, scrollBy.y);
        } else if (container) {
          container.scrollLeft += scrollBy.x;
          container.scrollTop += scrollBy.y;
        }

        var curScroll = getScroll(container);
        var delta = {
          x: curScroll.x - prevScroll.x,
          y: curScroll.y - prevScroll.y
        };

        if (delta.x || delta.y) {
          interactable.fire({
            type: 'autoscroll',
            target: element,
            interactable: interactable,
            delta: delta,
            interaction: interaction,
            container: container
          });
        }
      }

      autoScroll.prevTime = now;
    }

    if (autoScroll.isScrolling) {
      ___raf_7["default"].cancel(autoScroll.i);

      autoScroll.i = ___raf_7["default"].request(autoScroll.scroll);
    }
  },
  check: function check(interactable, actionName) {
    var options = interactable.options;
    return options[actionName].autoScroll && options[actionName].autoScroll.enabled;
  },
  onInteractionMove: function onInteractionMove(_ref) {
    var interaction = _ref.interaction,
        pointer = _ref.pointer;

    if (!(interaction.interacting() && autoScroll.check(interaction.interactable, interaction.prepared.name))) {
      return;
    }

    if (interaction.simulation) {
      autoScroll.x = autoScroll.y = 0;
      return;
    }

    var top;
    var right;
    var bottom;
    var left;
    var interactable = interaction.interactable,
        element = interaction.element;
    var options = interactable.options[interaction.prepared.name].autoScroll;
    var container = getContainer(options.container, interactable, element);

    if (__is_7.window(container)) {
      left = pointer.clientX < autoScroll.margin;
      top = pointer.clientY < autoScroll.margin;
      right = pointer.clientX > container.innerWidth - autoScroll.margin;
      bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
    } else {
      var rect = __domUtils_7.getElementClientRect(container);
      left = pointer.clientX < rect.left + autoScroll.margin;
      top = pointer.clientY < rect.top + autoScroll.margin;
      right = pointer.clientX > rect.right - autoScroll.margin;
      bottom = pointer.clientY > rect.bottom - autoScroll.margin;
    }

    autoScroll.x = right ? 1 : left ? -1 : 0;
    autoScroll.y = bottom ? 1 : top ? -1 : 0;

    if (!autoScroll.isScrolling) {
      // set the autoScroll properties to those of the target
      autoScroll.margin = options.margin;
      autoScroll.speed = options.speed;
      autoScroll.start(interaction);
    }
  }
};

function getContainer(value, interactable, element) {
  return (__is_7.string(value) ? (0, _$rect_62.getStringOptionResult)(value, interactable, element) : value) || (0, _$window_65.getWindow)(element);
}

function getScroll(container) {
  if (__is_7.window(container)) {
    container = window.document.body;
  }

  return {
    x: container.scrollLeft,
    y: container.scrollTop
  };
}

function getScrollSize(container) {
  if (__is_7.window(container)) {
    container = window.document.body;
  }

  return {
    x: container.scrollWidth,
    y: container.scrollHeight
  };
}

function getScrollSizeDelta(_ref2, func) {
  var interaction = _ref2.interaction,
      element = _ref2.element;
  var scrollOptions = interaction && interaction.interactable.options[interaction.prepared.name].autoScroll;

  if (!scrollOptions || !scrollOptions.enabled) {
    func();
    return {
      x: 0,
      y: 0
    };
  }

  var scrollContainer = getContainer(scrollOptions.container, interaction.interactable, element);
  var prevSize = getScroll(scrollContainer);
  func();
  var curSize = getScroll(scrollContainer);
  return {
    x: curSize.x - prevSize.x,
    y: curSize.y - prevSize.y
  };
}

var ___default_7 = {
  id: 'auto-scroll',
  install: __install_7,
  listeners: {
    'interactions:new': function interactionsNew(_ref3) {
      var interaction = _ref3.interaction;
      interaction.autoScroll = null;
    },
    'interactions:destroy': function interactionsDestroy(_ref4) {
      var interaction = _ref4.interaction;
      interaction.autoScroll = null;
      autoScroll.stop();

      if (autoScroll.interaction) {
        autoScroll.interaction = null;
      }
    },
    'interactions:stop': autoScroll.stop,
    'interactions:action-move': function interactionsActionMove(arg) {
      return autoScroll.onInteractionMove(arg);
    }
  }
};
_$autoScroll_7["default"] = ___default_7;

var _$InteractableMethods_8 = {};
"use strict";

function ___typeof_8(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_8 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_8(obj); }

Object.defineProperty(_$InteractableMethods_8, "__esModule", {
  value: true
});
_$InteractableMethods_8["default"] = void 0;

/* removed: var _$utils_55 = require("../utils/index.js"); */;

var __is_8 = ___interopRequireWildcard_8(_$is_56);

function ___getRequireWildcardCache_8() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_8 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_8(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_8(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_8(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO: there seems to be a @babel/preset-typescript bug causing regular import
// syntax to remain in js output
function __install_8(scope) {
  var Interactable = scope.Interactable,
      actions = scope.actions;
  Interactable.prototype.getAction = getAction;
  /**
   * ```js
   * interact(element, { ignoreFrom: document.getElementById('no-action') })
   * // or
   * interact(element).ignoreFrom('input, textarea, a')
   * ```
   * @deprecated
   * If the target of the `mousedown`, `pointerdown` or `touchstart` event or any
   * of it's parents match the given CSS selector or Element, no
   * drag/resize/gesture is started.
   *
   * Don't use this method. Instead set the `ignoreFrom` option for each action
   * or for `pointerEvents`
   *
   * @example
   * interact(targett)
   *   .draggable({
   *     ignoreFrom: 'input, textarea, a[href]'',
   *   })
   *   .pointerEvents({
   *     ignoreFrom: '[no-pointer]',
   *   })
   *
   * @param {string | Element | null} [newValue] a CSS selector string, an
   * Element or `null` to not ignore any elements
   * @return {string | Element | object} The current ignoreFrom value or this
   * Interactable
   */

  Interactable.prototype.ignoreFrom = (0, _$utils_55.warnOnce)(function (newValue) {
    return this._backCompatOption('ignoreFrom', newValue);
  }, 'Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).');
  /**
   * @deprecated
   *
   * A drag/resize/gesture is started only If the target of the `mousedown`,
   * `pointerdown` or `touchstart` event or any of it's parents match the given
   * CSS selector or Element.
   *
   * Don't use this method. Instead set the `allowFrom` option for each action
   * or for `pointerEvents`
   *
   * @example
   * interact(targett)
   *   .resizable({
   *     allowFrom: '.resize-handle',
   *   .pointerEvents({
   *     allowFrom: '.handle',,
   *   })
   *
   * @param {string | Element | null} [newValue] a CSS selector string, an
   * Element or `null` to allow from any element
   * @return {string | Element | object} The current allowFrom value or this
   * Interactable
   */

  Interactable.prototype.allowFrom = (0, _$utils_55.warnOnce)(function (newValue) {
    return this._backCompatOption('allowFrom', newValue);
  }, 'Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).');
  /**
   * ```js
   * interact('.resize-drag')
   *   .resizable(true)
   *   .draggable(true)
   *   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
   *
   *   if (interact.matchesSelector(event.target, '.drag-handle')) {
   *     // force drag with handle target
   *     action.name = drag
   *   }
   *   else {
   *     // resize from the top and right edges
   *     action.name  = 'resize'
   *     action.edges = { top: true, right: true }
   *   }
   *
   *   return action
   * })
   * ```
   *
   * Returns or sets the function used to check action to be performed on
   * pointerDown
   *
   * @param {function | null} [checker] A function which takes a pointer event,
   * defaultAction string, interactable, element and interaction as parameters
   * and returns an object with name property 'drag' 'resize' or 'gesture' and
   * optionally an `edges` object with boolean 'top', 'left', 'bottom' and right
   * props.
   * @return {Function | Interactable} The checker function or this Interactable
   */

  Interactable.prototype.actionChecker = actionChecker;
  /**
   * Returns or sets whether the the cursor should be changed depending on the
   * action that would be performed if the mouse were pressed and dragged.
   *
   * @param {boolean} [newValue]
   * @return {boolean | Interactable} The current setting or this Interactable
   */

  Interactable.prototype.styleCursor = styleCursor;

  Interactable.prototype.defaultActionChecker = function (pointer, event, interaction, element) {
    return defaultActionChecker(this, pointer, event, interaction, element, actions);
  };
}

function getAction(pointer, event, interaction, element) {
  var action = this.defaultActionChecker(pointer, event, interaction, element);

  if (this.options.actionChecker) {
    return this.options.actionChecker(pointer, event, action, this, element, interaction);
  }

  return action;
}

function defaultActionChecker(interactable, pointer, event, interaction, element, actions) {
  var rect = interactable.getRect(element);
  var buttons = event.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[event.button];
  var action = null;

  for (var _i = 0; _i < actions.names.length; _i++) {
    var _ref;

    _ref = actions.names[_i];
    var actionName = _ref;

    // check mouseButton setting if the pointer is down
    if (interaction.pointerIsDown && /mouse|pointer/.test(interaction.pointerType) && (buttons & interactable.options[actionName].mouseButtons) === 0) {
      continue;
    }

    action = actions[actionName].checker(pointer, event, interactable, element, interaction, rect);

    if (action) {
      return action;
    }
  }
}

function styleCursor(newValue) {
  if (__is_8.bool(newValue)) {
    this.options.styleCursor = newValue;
    return this;
  }

  if (newValue === null) {
    delete this.options.styleCursor;
    return this;
  }

  return this.options.styleCursor;
}

function actionChecker(checker) {
  if (__is_8.func(checker)) {
    this.options.actionChecker = checker;
    return this;
  }

  if (checker === null) {
    delete this.options.actionChecker;
    return this;
  }

  return this.options.actionChecker;
}

var ___default_8 = {
  id: 'auto-start/interactableMethods',
  install: __install_8
};
_$InteractableMethods_8["default"] = ___default_8;

var _$base_9 = {};
"use strict";

function ___typeof_9(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_9 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_9(obj); }

Object.defineProperty(_$base_9, "__esModule", {
  value: true
});
_$base_9["default"] = void 0;

var __utils_9 = ___interopRequireWildcard_9(_$utils_55);

var _InteractableMethods = ___interopRequireDefault_9(_$InteractableMethods_8);

function ___interopRequireDefault_9(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_9() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_9 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_9(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_9(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_9(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function __install_9(scope) {
  var interact = scope.interact,
      defaults = scope.defaults;
  scope.usePlugin(_InteractableMethods["default"]);
  defaults.base.actionChecker = null;
  defaults.base.styleCursor = true;
  __utils_9.extend(defaults.perAction, {
    manualStart: false,
    max: Infinity,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    // only allow left button by default
    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
    mouseButtons: 1
  });
  /**
   * Returns or sets the maximum number of concurrent interactions allowed.  By
   * default only 1 interaction is allowed at a time (for backwards
   * compatibility). To allow multiple interactions on the same Interactables and
   * elements, you need to enable it in the draggable, resizable and gesturable
   * `'max'` and `'maxPerElement'` options.
   *
   * @alias module:interact.maxInteractions
   *
   * @param {number} [newValue] Any number. newValue <= 0 means no interactions.
   */

  interact.maxInteractions = function (newValue) {
    return maxInteractions(newValue, scope);
  };

  scope.autoStart = {
    // Allow this many interactions to happen simultaneously
    maxInteractions: Infinity,
    withinInteractionLimit: withinInteractionLimit,
    cursorElement: null
  };
}

function prepareOnDown(_ref, scope) {
  var interaction = _ref.interaction,
      pointer = _ref.pointer,
      event = _ref.event,
      eventTarget = _ref.eventTarget;

  if (interaction.interacting()) {
    return;
  }

  var actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope);
  prepare(interaction, actionInfo, scope);
}

function prepareOnMove(_ref2, scope) {
  var interaction = _ref2.interaction,
      pointer = _ref2.pointer,
      event = _ref2.event,
      eventTarget = _ref2.eventTarget;

  if (interaction.pointerType !== 'mouse' || interaction.pointerIsDown || interaction.interacting()) {
    return;
  }

  var actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope);
  prepare(interaction, actionInfo, scope);
}

function startOnMove(arg, scope) {
  var interaction = arg.interaction;

  if (!interaction.pointerIsDown || interaction.interacting() || !interaction.pointerWasMoved || !interaction.prepared.name) {
    return;
  }

  scope.fire('autoStart:before-start', arg);
  var interactable = interaction.interactable;

  if (interaction.prepared.name && interactable) {
    // check manualStart and interaction limit
    if (interactable.options[interaction.prepared.name].manualStart || !withinInteractionLimit(interactable, interaction.element, interaction.prepared, scope)) {
      interaction.stop();
    } else {
      interaction.start(interaction.prepared, interactable, interaction.element);
      setInteractionCursor(interaction, scope);
    }
  }
}

function clearCursorOnStop(_ref3, scope) {
  var interaction = _ref3.interaction;
  var interactable = interaction.interactable;

  if (interactable && interactable.options.styleCursor) {
    setCursor(interaction.element, '', scope);
  }
} // Check if the current interactable supports the action.
// If so, return the validated action. Otherwise, return null


function validateAction(action, interactable, element, eventTarget, scope) {
  if (interactable.testIgnoreAllow(interactable.options[action.name], element, eventTarget) && interactable.options[action.name].enabled && withinInteractionLimit(interactable, element, action, scope)) {
    return action;
  }

  return null;
}

function validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope) {
  for (var i = 0, len = matches.length; i < len; i++) {
    var match = matches[i];
    var matchElement = matchElements[i];
    var matchAction = match.getAction(pointer, event, interaction, matchElement);

    if (!matchAction) {
      continue;
    }

    var action = validateAction(matchAction, match, matchElement, eventTarget, scope);

    if (action) {
      return {
        action: action,
        interactable: match,
        element: matchElement
      };
    }
  }

  return {
    action: null,
    interactable: null,
    element: null
  };
}

function getActionInfo(interaction, pointer, event, eventTarget, scope) {
  var matches = [];
  var matchElements = [];
  var element = eventTarget;

  function pushMatches(interactable) {
    matches.push(interactable);
    matchElements.push(element);
  }

  while (__utils_9.is.element(element)) {
    matches = [];
    matchElements = [];
    scope.interactables.forEachMatch(element, pushMatches);
    var actionInfo = validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope);

    if (actionInfo.action && !actionInfo.interactable.options[actionInfo.action.name].manualStart) {
      return actionInfo;
    }

    element = __utils_9.dom.parentNode(element);
  }

  return {
    action: null,
    interactable: null,
    element: null
  };
}

function prepare(interaction, _ref4, scope) {
  var action = _ref4.action,
      interactable = _ref4.interactable,
      element = _ref4.element;
  action = action || {
    name: null
  }; // clear previous target element cursor

  if (interaction.interactable && interaction.interactable.options.styleCursor) {
    setCursor(interaction.element, '', scope);
  }

  interaction.interactable = interactable;
  interaction.element = element;
  __utils_9.copyAction(interaction.prepared, action);
  interaction.rect = interactable && action.name ? interactable.getRect(element) : null;
  setInteractionCursor(interaction, scope);
  scope.fire('autoStart:prepared', {
    interaction: interaction
  });
}

function withinInteractionLimit(interactable, element, action, scope) {
  var options = interactable.options;
  var maxActions = options[action.name].max;
  var maxPerElement = options[action.name].maxPerElement;
  var autoStartMax = scope.autoStart.maxInteractions;
  var activeInteractions = 0;
  var interactableCount = 0;
  var elementCount = 0; // no actions if any of these values == 0

  if (!(maxActions && maxPerElement && autoStartMax)) {
    return false;
  }

  for (var _i = 0; _i < scope.interactions.list.length; _i++) {
    var _ref5;

    _ref5 = scope.interactions.list[_i];
    var interaction = _ref5;
    var otherAction = interaction.prepared.name;

    if (!interaction.interacting()) {
      continue;
    }

    activeInteractions++;

    if (activeInteractions >= autoStartMax) {
      return false;
    }

    if (interaction.interactable !== interactable) {
      continue;
    }

    interactableCount += otherAction === action.name ? 1 : 0;

    if (interactableCount >= maxActions) {
      return false;
    }

    if (interaction.element === element) {
      elementCount++;

      if (otherAction === action.name && elementCount >= maxPerElement) {
        return false;
      }
    }
  }

  return autoStartMax > 0;
}

function maxInteractions(newValue, scope) {
  if (__utils_9.is.number(newValue)) {
    scope.autoStart.maxInteractions = newValue;
    return this;
  }

  return scope.autoStart.maxInteractions;
}

function setCursor(element, cursor, scope) {
  if (scope.autoStart.cursorElement) {
    scope.autoStart.cursorElement.style.cursor = '';
  }

  element.ownerDocument.documentElement.style.cursor = cursor;
  element.style.cursor = cursor;
  scope.autoStart.cursorElement = cursor ? element : null;
}

function setInteractionCursor(interaction, scope) {
  var interactable = interaction.interactable,
      element = interaction.element,
      prepared = interaction.prepared;

  if (!(interaction.pointerType === 'mouse' && interactable && interactable.options.styleCursor)) {
    return;
  }

  var cursor = '';

  if (prepared.name) {
    var cursorChecker = interactable.options[prepared.name].cursorChecker;

    if (__utils_9.is.func(cursorChecker)) {
      cursor = cursorChecker(prepared, interactable, element, interaction._interacting);
    } else {
      cursor = scope.actions[prepared.name].getCursor(prepared);
    }
  }

  setCursor(interaction.element, cursor || '', scope);
}

var ___default_9 = {
  id: 'auto-start/base',
  install: __install_9,
  listeners: {
    'interactions:down': prepareOnDown,
    'interactions:move': function interactionsMove(arg, scope) {
      prepareOnMove(arg, scope);
      startOnMove(arg, scope);
    },
    'interactions:stop': clearCursorOnStop
  },
  before: 'ations',
  maxInteractions: maxInteractions,
  withinInteractionLimit: withinInteractionLimit,
  validateAction: validateAction
};
_$base_9["default"] = ___default_9;

var _$dragAxis_10 = {};
"use strict";

function ___typeof_10(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_10 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_10 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_10(obj); }

Object.defineProperty(_$dragAxis_10, "__esModule", {
  value: true
});
_$dragAxis_10["default"] = void 0;

var ___scope_10 = _$scope_24({});

/* removed: var _$domUtils_50 = require("../utils/domUtils.js"); */;

var __is_10 = ___interopRequireWildcard_10(_$is_56);

var _base = ___interopRequireDefault_10(_$base_9);

function ___interopRequireDefault_10(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_10() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_10 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_10(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_10(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_10(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function beforeStart(_ref, scope) {
  var interaction = _ref.interaction,
      eventTarget = _ref.eventTarget,
      dx = _ref.dx,
      dy = _ref.dy;

  if (interaction.prepared.name !== 'drag') {
    return;
  } // check if a drag is in the correct axis


  var absX = Math.abs(dx);
  var absY = Math.abs(dy);
  var targetOptions = interaction.interactable.options.drag;
  var startAxis = targetOptions.startAxis;
  var currentAxis = absX > absY ? 'x' : absX < absY ? 'y' : 'xy';
  interaction.prepared.axis = targetOptions.lockAxis === 'start' ? currentAxis[0] // always lock to one axis even if currentAxis === 'xy'
  : targetOptions.lockAxis; // if the movement isn't in the startAxis of the interactable

  if (currentAxis !== 'xy' && startAxis !== 'xy' && startAxis !== currentAxis) {
    // cancel the prepared action
    interaction.prepared.name = null; // then try to get a drag from another ineractable

    var element = eventTarget;

    var getDraggable = function getDraggable(interactable) {
      if (interactable === interaction.interactable) {
        return;
      }

      var options = interaction.interactable.options.drag;

      if (!options.manualStart && interactable.testIgnoreAllow(options, element, eventTarget)) {
        var action = interactable.getAction(interaction.downPointer, interaction.downEvent, interaction, element);

        if (action && action.name === ___scope_10.ActionName.Drag && checkStartAxis(currentAxis, interactable) && _base["default"].validateAction(action, interactable, element, eventTarget, scope)) {
          return interactable;
        }
      }
    }; // check all interactables


    while (__is_10.element(element)) {
      var interactable = scope.interactables.forEachMatch(element, getDraggable);

      if (interactable) {
        interaction.prepared.name = ___scope_10.ActionName.Drag;
        interaction.interactable = interactable;
        interaction.element = element;
        break;
      }

      element = (0, _$domUtils_50.parentNode)(element);
    }
  }
}

function checkStartAxis(startAxis, interactable) {
  if (!interactable) {
    return false;
  }

  var thisAxis = interactable.options[___scope_10.ActionName.Drag].startAxis;
  return startAxis === 'xy' || thisAxis === 'xy' || thisAxis === startAxis;
}

var ___default_10 = {
  id: 'auto-start/dragAxis',
  listeners: {
    'autoStart:before-start': beforeStart
  }
};
_$dragAxis_10["default"] = ___default_10;

var _$hold_11 = {};
"use strict";

Object.defineProperty(_$hold_11, "__esModule", {
  value: true
});
_$hold_11["default"] = void 0;

var ___base_11 = ___interopRequireDefault_11(_$base_9);

function ___interopRequireDefault_11(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function __install_11(scope) {
  var defaults = scope.defaults;
  scope.usePlugin(___base_11["default"]);
  defaults.perAction.hold = 0;
  defaults.perAction.delay = 0;
}

function getHoldDuration(interaction) {
  var actionName = interaction.prepared && interaction.prepared.name;

  if (!actionName) {
    return null;
  }

  var options = interaction.interactable.options;
  return options[actionName].hold || options[actionName].delay;
}

var ___default_11 = {
  id: 'auto-start/hold',
  install: __install_11,
  listeners: {
    'interactions:new': function interactionsNew(_ref) {
      var interaction = _ref.interaction;
      interaction.autoStartHoldTimer = null;
    },
    'autoStart:prepared': function autoStartPrepared(_ref2) {
      var interaction = _ref2.interaction;
      var hold = getHoldDuration(interaction);

      if (hold > 0) {
        interaction.autoStartHoldTimer = setTimeout(function () {
          interaction.start(interaction.prepared, interaction.interactable, interaction.element);
        }, hold);
      }
    },
    'interactions:move': function interactionsMove(_ref3) {
      var interaction = _ref3.interaction,
          duplicate = _ref3.duplicate;

      if (interaction.pointerWasMoved && !duplicate) {
        clearTimeout(interaction.autoStartHoldTimer);
      }
    },
    // prevent regular down->move autoStart
    'autoStart:before-start': function autoStartBeforeStart(_ref4) {
      var interaction = _ref4.interaction;
      var hold = getHoldDuration(interaction);

      if (hold > 0) {
        interaction.prepared.name = null;
      }
    }
  },
  getHoldDuration: getHoldDuration
};
_$hold_11["default"] = ___default_11;

var _$autoStart_12 = {};
"use strict";

Object.defineProperty(_$autoStart_12, "__esModule", {
  value: true
});
_$autoStart_12.install = __install_12;
Object.defineProperty(_$autoStart_12, "autoStart", {
  enumerable: true,
  get: function get() {
    return ___base_12["default"];
  }
});
Object.defineProperty(_$autoStart_12, "dragAxis", {
  enumerable: true,
  get: function get() {
    return _dragAxis["default"];
  }
});
Object.defineProperty(_$autoStart_12, "hold", {
  enumerable: true,
  get: function get() {
    return _hold["default"];
  }
});
_$autoStart_12.id = void 0;

var ___base_12 = ___interopRequireDefault_12(_$base_9);

var _dragAxis = ___interopRequireDefault_12(_$dragAxis_10);

var _hold = ___interopRequireDefault_12(_$hold_11);

function ___interopRequireDefault_12(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function __install_12(scope) {
  scope.usePlugin(___base_12["default"]);
  scope.usePlugin(_hold["default"]);
  scope.usePlugin(_dragAxis["default"]);
}

var __id_12 = 'auto-start';
_$autoStart_12.id = __id_12;

var _$interactablePreventDefault_21 = {};
"use strict";

function ___typeof_21(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_21 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_21 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_21(obj); }

Object.defineProperty(_$interactablePreventDefault_21, "__esModule", {
  value: true
});
_$interactablePreventDefault_21.install = __install_21;
_$interactablePreventDefault_21["default"] = void 0;

/* removed: var _$domUtils_50 = require("../utils/domUtils.js"); */;

var ___events_21 = ___interopRequireDefault_21(_$events_51);

var __is_21 = ___interopRequireWildcard_21(_$is_56);

/* removed: var _$window_65 = require("../utils/window.js"); */;

function ___getRequireWildcardCache_21() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_21 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_21(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_21(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_21(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_21(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function preventDefault(newValue) {
  if (/^(always|never|auto)$/.test(newValue)) {
    this.options.preventDefault = newValue;
    return this;
  }

  if (__is_21.bool(newValue)) {
    this.options.preventDefault = newValue ? 'always' : 'never';
    return this;
  }

  return this.options.preventDefault;
}

function checkAndPreventDefault(interactable, scope, event) {
  var setting = interactable.options.preventDefault;

  if (setting === 'never') {
    return;
  }

  if (setting === 'always') {
    event.preventDefault();
    return;
  } // setting === 'auto'
  // if the browser supports passive event listeners and isn't running on iOS,
  // don't preventDefault of touch{start,move} events. CSS touch-action and
  // user-select should be used instead of calling event.preventDefault().


  if (___events_21["default"].supportsPassive && /^touch(start|move)$/.test(event.type)) {
    var doc = (0, _$window_65.getWindow)(event.target).document;
    var docOptions = scope.getDocOptions(doc);

    if (!(docOptions && docOptions.events) || docOptions.events.passive !== false) {
      return;
    }
  } // don't preventDefault of pointerdown events


  if (/^(mouse|pointer|touch)*(down|start)/i.test(event.type)) {
    return;
  } // don't preventDefault on editable elements


  if (__is_21.element(event.target) && (0, _$domUtils_50.matchesSelector)(event.target, 'input,select,textarea,[contenteditable=true],[contenteditable=true] *')) {
    return;
  }

  event.preventDefault();
}

function onInteractionEvent(_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  if (interaction.interactable) {
    interaction.interactable.checkAndPreventDefault(event);
  }
}

function __install_21(scope) {
  /** @lends Interactable */
  var Interactable = scope.Interactable;
  /**
   * Returns or sets whether to prevent the browser's default behaviour in
   * response to pointer events. Can be set to:
   *  - `'always'` to always prevent
   *  - `'never'` to never prevent
   *  - `'auto'` to let interact.js try to determine what would be best
   *
   * @param {string} [newValue] `'always'`, `'never'` or `'auto'`
   * @return {string | Interactable} The current setting or this Interactable
   */

  Interactable.prototype.preventDefault = preventDefault;

  Interactable.prototype.checkAndPreventDefault = function (event) {
    return checkAndPreventDefault(this, scope, event);
  }; // prevent native HTML5 drag on interact.js target elements


  scope.interactions.docEvents.push({
    type: 'dragstart',
    listener: function listener(event) {
      for (var _i = 0; _i < scope.interactions.list.length; _i++) {
        var _ref2;

        _ref2 = scope.interactions.list[_i];
        var interaction = _ref2;

        if (interaction.element && (interaction.element === event.target || (0, _$domUtils_50.nodeContains)(interaction.element, event.target))) {
          interaction.interactable.checkAndPreventDefault(event);
          return;
        }
      }
    }
  });
}

var ___default_21 = {
  id: 'core/interactablePreventDefault',
  install: __install_21,
  listeners: ['down', 'move', 'up', 'cancel'].reduce(function (acc, eventType) {
    acc["interactions:".concat(eventType)] = onInteractionEvent;
    return acc;
  }, {})
};
_$interactablePreventDefault_21["default"] = ___default_21;

var _$devTools_25 = {};
"use strict";

function ___typeof_25(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_25 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_25 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_25(obj); }

Object.defineProperty(_$devTools_25, "__esModule", {
  value: true
});
_$devTools_25["default"] = void 0;

var ___domObjects_25 = ___interopRequireDefault_25(_$domObjects_49);

/* removed: var _$domUtils_50 = require("../utils/domUtils.js"); */;

var ___extend_25 = ___interopRequireDefault_25(_$extend_52);

var __is_25 = ___interopRequireWildcard_25(_$is_56);

var ___window_25 = ___interopRequireDefault_25(_$window_65);

function ___getRequireWildcardCache_25() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_25 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_25(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_25(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_25(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_25(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___toConsumableArray_25(arr) { return ___arrayWithoutHoles_25(arr) || ___iterableToArray_25(arr) || ___nonIterableSpread_25(); }

function ___nonIterableSpread_25() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function ___iterableToArray_25(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function ___arrayWithoutHoles_25(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CheckName;

(function (CheckName) {
  CheckName["touchAction"] = "";
  CheckName["boxSizing"] = "";
  CheckName["noListeners"] = "";
})(CheckName || (CheckName = {}));

var prefix = '[interact.js] ';
var links = {
  touchAction: 'https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action',
  boxSizing: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing'
};
var isProduction = undefined === 'production'; // eslint-disable-next-line no-restricted-syntax

function __install_25(scope) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      logger = _ref.logger;

  var Interactable = scope.Interactable,
      defaults = scope.defaults;
  scope.logger = logger || console;
  defaults.base.devTools = {
    ignore: {}
  };

  Interactable.prototype.devTools = function (options) {
    if (options) {
      (0, ___extend_25["default"])(this.options.devTools, options);
      return this;
    }

    return this.options.devTools;
  };
}

var checks = [{
  name: 'touchAction',
  perform: function perform(_ref2) {
    var element = _ref2.element;
    return !parentHasStyle(element, 'touchAction', /pan-|pinch|none/);
  },
  getInfo: function getInfo(_ref3) {
    var element = _ref3.element;
    return [element, links.touchAction];
  },
  text: 'Consider adding CSS "touch-action: none" to this element\n'
}, {
  name: 'boxSizing',
  perform: function perform(interaction) {
    var element = interaction.element;
    return interaction.prepared.name === 'resize' && element instanceof ___domObjects_25["default"].HTMLElement && !hasStyle(element, 'boxSizing', /border-box/);
  },
  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
  getInfo: function getInfo(_ref4) {
    var element = _ref4.element;
    return [element, links.boxSizing];
  }
}, {
  name: 'noListeners',
  perform: function perform(interaction) {
    var actionName = interaction.prepared.name;
    var moveListeners = interaction.interactable.events.types["".concat(actionName, "move")] || [];
    return !moveListeners.length;
  },
  getInfo: function getInfo(interaction) {
    return [interaction.prepared.name, interaction.interactable];
  },
  text: 'There are no listeners set for this action'
}];

function hasStyle(element, prop, styleRe) {
  return styleRe.test(element.style[prop] || ___window_25["default"].window.getComputedStyle(element)[prop]);
}

function parentHasStyle(element, prop, styleRe) {
  var parent = element;

  while (__is_25.element(parent)) {
    if (hasStyle(parent, prop, styleRe)) {
      return true;
    }

    parent = (0, _$domUtils_50.parentNode)(parent);
  }

  return false;
}

var __id_25 = 'dev-tools';
var defaultExport = isProduction ? {
  id: __id_25,
  install: function install() {}
} : {
  id: __id_25,
  install: __install_25,
  listeners: {
    'interactions:action-start': function interactionsActionStart(_ref5, scope) {
      var interaction = _ref5.interaction;

      for (var _i = 0; _i < checks.length; _i++) {
        var _ref6;

        _ref6 = checks[_i];
        var check = _ref6;
        var options = interaction.interactable && interaction.interactable.options[interaction.prepared.name];

        if (!(options && options.devTools && options.devTools.ignore[check.name]) && check.perform(interaction)) {
          var _scope$logger;

          (_scope$logger = scope.logger).warn.apply(_scope$logger, [prefix + check.text].concat(___toConsumableArray_25(check.getInfo(interaction))));
        }
      }
    }
  },
  checks: checks,
  CheckName: CheckName,
  links: links,
  prefix: prefix
};
var ___default_25 = defaultExport;
_$devTools_25["default"] = ___default_25;

var _$base_30 = {};
"use strict";

Object.defineProperty(_$base_30, "__esModule", {
  value: true
});
_$base_30.startAll = startAll;
_$base_30.setAll = setAll;
_$base_30.prepareStates = prepareStates;
_$base_30.setCoords = __setCoords_30;
_$base_30.restoreCoords = restoreCoords;
_$base_30.makeModifier = makeModifier;
_$base_30["default"] = void 0;

var ___extend_30 = ___interopRequireDefault_30(_$extend_52);

function ___interopRequireDefault_30(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___slicedToArray_30(arr, i) { return ___arrayWithHoles_30(arr) || ___iterableToArrayLimit_30(arr, i) || ___nonIterableRest_30(); }

function ___nonIterableRest_30() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function ___iterableToArrayLimit_30(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ___arrayWithHoles_30(arr) { if (Array.isArray(arr)) return arr; }

function __start_30(_ref, pageCoords, prevCoords) {
  var interaction = _ref.interaction,
      phase = _ref.phase;
  var interactable = interaction.interactable,
      element = interaction.element;
  var modifierList = getModifierList(interaction);
  var states = prepareStates(modifierList);
  var rect = (0, ___extend_30["default"])({}, interaction.rect);

  if (!('width' in rect)) {
    rect.width = rect.right - rect.left;
  }

  if (!('height' in rect)) {
    rect.height = rect.bottom - rect.top;
  }

  var startOffset = getRectOffset(rect, pageCoords);
  interaction.modifiers.startOffset = startOffset;
  interaction.modifiers.startDelta = {
    x: 0,
    y: 0
  };
  var arg = {
    interaction: interaction,
    interactable: interactable,
    element: element,
    pageCoords: pageCoords,
    phase: phase,
    rect: rect,
    startOffset: startOffset,
    states: states,
    preEnd: false,
    requireEndOnly: false,
    prevCoords: prevCoords || (interaction.modifiers.result ? interaction.modifiers.result.coords : interaction.coords.prev.page)
  };
  interaction.modifiers.states = states;
  interaction.modifiers.result = null;
  startAll(arg);
  var result = interaction.modifiers.result = setAll(arg);
  return result;
}

function startAll(arg) {
  var states = arg.states;

  for (var _i = 0; _i < states.length; _i++) {
    var _ref2;

    _ref2 = states[_i];
    var state = _ref2;

    if (state.methods.start) {
      arg.state = state;
      state.methods.start(arg);
    }
  }
}

function setAll(arg) {
  var prevCoords = arg.prevCoords,
      phase = arg.phase,
      preEnd = arg.preEnd,
      requireEndOnly = arg.requireEndOnly,
      rect = arg.rect,
      states = arg.states;
  arg.coords = (0, ___extend_30["default"])({}, arg.pageCoords);
  arg.rect = (0, ___extend_30["default"])({}, rect);
  var result = {
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    coords: arg.coords,
    changed: true
  };

  for (var _i2 = 0; _i2 < states.length; _i2++) {
    var _ref3;

    _ref3 = states[_i2];
    var state = _ref3;
    var options = state.options;

    if (!state.methods.set || !shouldDo(options, preEnd, requireEndOnly, phase)) {
      continue;
    }

    arg.state = state;
    state.methods.set(arg);
  }

  result.delta.x = arg.coords.x - arg.pageCoords.x;
  result.delta.y = arg.coords.y - arg.pageCoords.y;
  var rectChanged = false;

  if (rect) {
    result.rectDelta.left = arg.rect.left - rect.left;
    result.rectDelta.right = arg.rect.right - rect.right;
    result.rectDelta.top = arg.rect.top - rect.top;
    result.rectDelta.bottom = arg.rect.bottom - rect.bottom;
    rectChanged = result.rectDelta.left !== 0 || result.rectDelta.right !== 0 || result.rectDelta.top !== 0 || result.rectDelta.bottom !== 0;
  }

  result.changed = !prevCoords || prevCoords.x !== result.coords.x || prevCoords.y !== result.coords.y || rectChanged;
  return result;
}

function __beforeMove_30(arg) {
  var interaction = arg.interaction,
      phase = arg.phase,
      preEnd = arg.preEnd,
      skipModifiers = arg.skipModifiers;
  var interactable = interaction.interactable,
      element = interaction.element;
  var states = skipModifiers ? interaction.modifiers.states.slice(skipModifiers) : interaction.modifiers.states;
  var prevCoords = arg.prevCoords || (interaction.modifiers.result ? interaction.modifiers.result.coords : interaction.coords.prev.page);
  var modifierResult = setAll({
    interaction: interaction,
    interactable: interactable,
    element: element,
    preEnd: preEnd,
    phase: phase,
    pageCoords: arg.modifiedCoords || interaction.coords.cur.page,
    prevCoords: prevCoords,
    rect: interaction.rect,
    states: states,
    requireEndOnly: false
  });
  interaction.modifiers.result = modifierResult; // don't fire an action move if a modifier would keep the event in the same
  // cordinates as before

  if (!modifierResult.changed && interaction.interacting()) {
    return false;
  }

  if (arg.modifiedCoords) {
    var page = interaction.coords.cur.page;
    var adjustment = {
      x: arg.modifiedCoords.x - page.x,
      y: arg.modifiedCoords.y - page.y
    };
    modifierResult.coords.x += adjustment.x;
    modifierResult.coords.y += adjustment.y;
    modifierResult.delta.x += adjustment.x;
    modifierResult.delta.y += adjustment.y;
  }

  __setCoords_30(arg);
}

function beforeEnd(arg) {
  var interaction = arg.interaction,
      event = arg.event,
      noPreEnd = arg.noPreEnd;
  var states = interaction.modifiers.states;

  if (noPreEnd || !states || !states.length) {
    return;
  }

  var didPreEnd = false;

  for (var _i3 = 0; _i3 < states.length; _i3++) {
    var _ref4;

    _ref4 = states[_i3];
    var state = _ref4;
    arg.state = state;
    var options = state.options,
        methods = state.methods;
    var endResult = methods.beforeEnd && methods.beforeEnd(arg);

    if (endResult === false) {
      interaction.modifiers.endPrevented = true;
      return false;
    } // if the endOnly option is true for any modifier


    if (!didPreEnd && shouldDo(options, true, true)) {
      // fire a move event at the modified coordinates
      interaction.move({
        event: event,
        preEnd: true
      });
      didPreEnd = true;
    }
  }
}

function stop(arg) {
  var interaction = arg.interaction;
  var states = interaction.modifiers.states;

  if (!states || !states.length) {
    return;
  }

  var modifierArg = (0, ___extend_30["default"])({
    states: states,
    interactable: interaction.interactable,
    element: interaction.element,
    rect: null
  }, arg);

  for (var _i4 = 0; _i4 < states.length; _i4++) {
    var _ref5;

    _ref5 = states[_i4];
    var state = _ref5;
    modifierArg.state = state;

    if (state.methods.stop) {
      state.methods.stop(modifierArg);
    }
  }

  arg.interaction.modifiers.states = null;
  arg.interaction.modifiers.endPrevented = null;
}

function getModifierList(interaction) {
  var actionOptions = interaction.interactable.options[interaction.prepared.name];
  var actionModifiers = actionOptions.modifiers;

  if (actionModifiers && actionModifiers.length) {
    return actionModifiers.filter(function (modifier) {
      return !modifier.options || modifier.options.enabled !== false;
    });
  }

  return ['snap', 'snapSize', 'snapEdges', 'restrict', 'restrictEdges', 'restrictSize'].map(function (type) {
    var options = actionOptions[type];
    return options && options.enabled && {
      options: options,
      methods: options._methods
    };
  }).filter(function (m) {
    return !!m;
  });
}

function prepareStates(modifierList) {
  var states = [];

  for (var index = 0; index < modifierList.length; index++) {
    var _modifierList$index = modifierList[index],
        options = _modifierList$index.options,
        methods = _modifierList$index.methods,
        name = _modifierList$index.name;

    if (options && options.enabled === false) {
      continue;
    }

    states.push({
      options: options,
      methods: methods,
      index: index,
      name: name
    });
  }

  return states;
}

function __setCoords_30(arg) {
  var interaction = arg.interaction,
      phase = arg.phase;
  var curCoords = interaction.coords.cur;
  var startCoords = interaction.coords.start;
  var _interaction$modifier = interaction.modifiers,
      result = _interaction$modifier.result,
      startDelta = _interaction$modifier.startDelta;
  var curDelta = result.delta;

  if (phase === 'start') {
    (0, ___extend_30["default"])(interaction.modifiers.startDelta, result.delta);
  }

  var _arr = [[startCoords, startDelta], [curCoords, curDelta]];

  for (var _i5 = 0; _i5 < _arr.length; _i5++) {
    var _arr$_i = ___slicedToArray_30(_arr[_i5], 2),
        coordsSet = _arr$_i[0],
        delta = _arr$_i[1];

    coordsSet.page.x += delta.x;
    coordsSet.page.y += delta.y;
    coordsSet.client.x += delta.x;
    coordsSet.client.y += delta.y;
  }

  var rectDelta = interaction.modifiers.result.rectDelta;
  var rect = arg.rect || interaction.rect;
  rect.left += rectDelta.left;
  rect.right += rectDelta.right;
  rect.top += rectDelta.top;
  rect.bottom += rectDelta.bottom;
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
}

function restoreCoords(_ref6) {
  var _ref6$interaction = _ref6.interaction,
      coords = _ref6$interaction.coords,
      rect = _ref6$interaction.rect,
      modifiers = _ref6$interaction.modifiers;

  if (!modifiers.result) {
    return;
  }

  var startDelta = modifiers.startDelta;
  var _modifiers$result = modifiers.result,
      curDelta = _modifiers$result.delta,
      rectDelta = _modifiers$result.rectDelta;
  var coordsAndDeltas = [[coords.start, startDelta], [coords.cur, curDelta]];

  for (var _i6 = 0; _i6 < coordsAndDeltas.length; _i6++) {
    var _coordsAndDeltas$_i = ___slicedToArray_30(coordsAndDeltas[_i6], 2),
        coordsSet = _coordsAndDeltas$_i[0],
        delta = _coordsAndDeltas$_i[1];

    coordsSet.page.x -= delta.x;
    coordsSet.page.y -= delta.y;
    coordsSet.client.x -= delta.x;
    coordsSet.client.y -= delta.y;
  }

  rect.left -= rectDelta.left;
  rect.right -= rectDelta.right;
  rect.top -= rectDelta.top;
  rect.bottom -= rectDelta.bottom;
}

function shouldDo(options, preEnd, requireEndOnly, phase) {
  return options ? options.enabled !== false && (preEnd || !options.endOnly) && (!requireEndOnly || options.endOnly || options.alwaysOnEnd) && (options.setStart || phase !== 'start') : !requireEndOnly;
}

function getRectOffset(rect, coords) {
  return rect ? {
    left: coords.x - rect.left,
    top: coords.y - rect.top,
    right: rect.right - coords.x,
    bottom: rect.bottom - coords.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}

function makeModifier(module, name) {
  var defaults = module.defaults;
  var methods = {
    start: module.start,
    set: module.set,
    beforeEnd: module.beforeEnd,
    stop: module.stop
  };

  var modifier = function modifier(_options) {
    var options = _options || {};
    options.enabled = options.enabled !== false; // add missing defaults to options

    for (var prop in defaults) {
      if (!(prop in options)) {
        options[prop] = defaults[prop];
      }
    }

    var m = {
      options: options,
      methods: methods,
      name: name
    };
    return m;
  };

  if (name && typeof name === 'string') {
    // for backwrads compatibility
    modifier._defaults = defaults;
    modifier._methods = methods;
  }

  return modifier;
}

var ___default_30 = {
  id: 'modifiers/base',
  install: function install(scope) {
    scope.defaults.perAction.modifiers = [];
  },
  listeners: {
    'interactions:new': function interactionsNew(_ref7) {
      var interaction = _ref7.interaction;
      interaction.modifiers = {
        startOffset: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        offsets: {},
        states: null,
        result: null,
        endPrevented: false,
        startDelta: null
      };
    },
    'interactions:before-action-start': function interactionsBeforeActionStart(arg) {
      __start_30(arg, arg.interaction.coords.start.page, arg.interaction.coords.prev.page);
      __setCoords_30(arg);
    },
    'interactions:action-resume': function interactionsActionResume(arg) {
      stop(arg);
      __start_30(arg, arg.interaction.coords.cur.page, arg.interaction.modifiers.result.coords);
      __beforeMove_30(arg);
    },
    'interactions:after-action-move': restoreCoords,
    'interactions:before-action-move': __beforeMove_30,
    'interactions:after-action-start': restoreCoords,
    'interactions:before-action-end': beforeEnd,
    'interactions:stop': stop
  },
  before: 'ations',
  startAll: startAll,
  setAll: setAll,
  prepareStates: prepareStates,
  start: __start_30,
  beforeMove: __beforeMove_30,
  beforeEnd: beforeEnd,
  stop: stop,
  shouldDo: shouldDo,
  getModifierList: getModifierList,
  getRectOffset: getRectOffset,
  makeModifier: makeModifier
};
_$base_30["default"] = ___default_30;

var _$inertia_26 = {};
"use strict";

function ___typeof_26(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_26 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_26 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_26(obj); }

Object.defineProperty(_$inertia_26, "__esModule", {
  value: true
});
_$inertia_26["default"] = void 0;

/* removed: var _$InteractEvent_15 = require("../core/InteractEvent.js"); */;

var ___base_26 = ___interopRequireWildcard_26(_$base_30);

var __utils_26 = ___interopRequireWildcard_26(_$utils_55);

var ___raf_26 = ___interopRequireDefault_26(_$raf_61);

function ___interopRequireDefault_26(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_26() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_26 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_26(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_26(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_26(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_$InteractEvent_15.EventPhase.Resume = 'resume';
_$InteractEvent_15.EventPhase.InertiaStart = 'inertiastart';

function __install_26(scope) {
  var defaults = scope.defaults;
  scope.usePlugin(___base_26["default"]);
  defaults.perAction.inertia = {
    enabled: false,
    resistance: 10,
    // the lambda in exponential decay
    minSpeed: 100,
    // target speed must be above this for inertia to start
    endSpeed: 10,
    // the speed at which inertia is slow enough to stop
    allowResume: true,
    // allow resuming an action in inertia phase
    smoothEndDuration: 300 // animate to snap/restrict endOnly if there's no inertia

  };
}

function resume(_ref, scope) {
  var interaction = _ref.interaction,
      event = _ref.event,
      pointer = _ref.pointer,
      eventTarget = _ref.eventTarget;
  var state = interaction.inertia; // Check if the down event hits the current inertia target

  if (state.active) {
    var element = eventTarget; // climb up the DOM tree from the event target

    while (__utils_26.is.element(element)) {
      // if interaction element is the current inertia target element
      if (element === interaction.element) {
        // stop inertia
        ___raf_26["default"].cancel(state.timeout);

        state.active = false;
        interaction.simulation = null; // update pointers to the down event's coordinates

        interaction.updatePointer(pointer, event, eventTarget, true);
        __utils_26.pointer.setCoords(interaction.coords.cur, interaction.pointers.map(function (p) {
          return p.pointer;
        }), interaction._now()); // fire appropriate signals

        var signalArg = {
          interaction: interaction,
          phase: _$InteractEvent_15.EventPhase.Resume
        };
        scope.fire('interactions:action-resume', signalArg); // fire a reume event

        var resumeEvent = new scope.InteractEvent(interaction, event, interaction.prepared.name, _$InteractEvent_15.EventPhase.Resume, interaction.element);

        interaction._fireEvent(resumeEvent);

        __utils_26.pointer.copyCoords(interaction.coords.prev, interaction.coords.cur);
        break;
      }

      element = __utils_26.dom.parentNode(element);
    }
  }
}

function release(_ref2, scope) {
  var interaction = _ref2.interaction,
      event = _ref2.event,
      noPreEnd = _ref2.noPreEnd;
  var state = interaction.inertia;

  if (!interaction.interacting() || interaction.simulation && interaction.simulation.active || noPreEnd) {
    return null;
  }

  var options = __getOptions_26(interaction);

  var now = interaction._now();

  var velocityClient = interaction.coords.velocity.client;
  var pointerSpeed = __utils_26.hypot(velocityClient.x, velocityClient.y);
  var smoothEnd = false;
  var modifierResult; // check if inertia should be started

  var inertiaPossible = options && options.enabled && interaction.prepared.name !== 'gesture' && event !== state.startEvent;
  var inertia = inertiaPossible && now - interaction.coords.cur.timeStamp < 50 && pointerSpeed > options.minSpeed && pointerSpeed > options.endSpeed;
  var modifierArg = {
    interaction: interaction,
    interactable: interaction.interactable,
    element: interaction.element,
    rect: interaction.rect,
    pageCoords: interaction.coords.cur.page,
    states: inertiaPossible && interaction.modifiers.states.map(function (modifierStatus) {
      return __utils_26.extend({}, modifierStatus);
    }),
    preEnd: true,
    prevCoords: null,
    requireEndOnly: null,
    phase: _$InteractEvent_15.EventPhase.InertiaStart
  }; // smoothEnd

  if (inertiaPossible && !inertia) {
    modifierArg.prevCoords = interaction.modifiers.result ? interaction.modifiers.result.coords : interaction.prevEvent.page;
    modifierArg.requireEndOnly = false;
    modifierResult = ___base_26["default"].setAll(modifierArg);

    if (modifierResult.changed) {
      smoothEnd = true;
    }
  }

  if (!(inertia || smoothEnd)) {
    return null;
  }

  __utils_26.pointer.copyCoords(state.upCoords, interaction.coords.cur);
  (0, ___base_26.setCoords)(modifierArg);
  interaction.pointers[0].pointer = state.startEvent = new scope.InteractEvent(interaction, event, // FIXME add proper typing Action.name
  interaction.prepared.name, _$InteractEvent_15.EventPhase.InertiaStart, interaction.element);
  (0, ___base_26.restoreCoords)(modifierArg);
  state.t0 = now;
  state.active = true;
  state.allowResume = options.allowResume;
  interaction.simulation = state;
  interaction.interactable.fire(state.startEvent);

  if (inertia) {
    state.vx0 = interaction.coords.velocity.client.x;
    state.vy0 = interaction.coords.velocity.client.y;
    state.v0 = pointerSpeed;
    calcInertia(interaction, state);
    __utils_26.extend(modifierArg.pageCoords, interaction.coords.cur.page);
    modifierArg.pageCoords.x += state.xe;
    modifierArg.pageCoords.y += state.ye;
    modifierArg.prevCoords = null;
    modifierArg.requireEndOnly = true;
    modifierResult = ___base_26["default"].setAll(modifierArg);
    state.modifiedXe += modifierResult.delta.x;
    state.modifiedYe += modifierResult.delta.y;
    state.timeout = ___raf_26["default"].request(function () {
      return inertiaTick(interaction);
    });
  } else {
    state.smoothEnd = true;
    state.xe = modifierResult.delta.x;
    state.ye = modifierResult.delta.y;
    state.sx = state.sy = 0;
    state.timeout = ___raf_26["default"].request(function () {
      return smothEndTick(interaction);
    });
  }

  return false;
}

function __stop_26(_ref3) {
  var interaction = _ref3.interaction;
  var state = interaction.inertia;

  if (state.active) {
    ___raf_26["default"].cancel(state.timeout);

    state.active = false;
    interaction.simulation = null;
  }
}

function calcInertia(interaction, state) {
  var options = __getOptions_26(interaction);
  var lambda = options.resistance;
  var inertiaDur = -Math.log(options.endSpeed / state.v0) / lambda;
  state.x0 = interaction.prevEvent.page.x;
  state.y0 = interaction.prevEvent.page.y;
  state.t0 = state.startEvent.timeStamp / 1000;
  state.sx = state.sy = 0;
  state.modifiedXe = state.xe = (state.vx0 - inertiaDur) / lambda;
  state.modifiedYe = state.ye = (state.vy0 - inertiaDur) / lambda;
  state.te = inertiaDur;
  state.lambda_v0 = lambda / state.v0;
  state.one_ve_v0 = 1 - options.endSpeed / state.v0;
}

function inertiaTick(interaction) {
  updateInertiaCoords(interaction);
  __utils_26.pointer.setCoordDeltas(interaction.coords.delta, interaction.coords.prev, interaction.coords.cur);
  __utils_26.pointer.setCoordVelocity(interaction.coords.velocity, interaction.coords.delta);
  var state = interaction.inertia;
  var options = __getOptions_26(interaction);
  var lambda = options.resistance;
  var t = interaction._now() / 1000 - state.t0;

  if (t < state.te) {
    var progress = 1 - (Math.exp(-lambda * t) - state.lambda_v0) / state.one_ve_v0;

    if (state.modifiedXe === state.xe && state.modifiedYe === state.ye) {
      state.sx = state.xe * progress;
      state.sy = state.ye * progress;
    } else {
      var quadPoint = __utils_26.getQuadraticCurvePoint(0, 0, state.xe, state.ye, state.modifiedXe, state.modifiedYe, progress);
      state.sx = quadPoint.x;
      state.sy = quadPoint.y;
    }

    interaction.move();
    state.timeout = ___raf_26["default"].request(function () {
      return inertiaTick(interaction);
    });
  } else {
    state.sx = state.modifiedXe;
    state.sy = state.modifiedYe;
    interaction.move();
    interaction.end(state.startEvent);
    state.active = false;
    interaction.simulation = null;
  }

  __utils_26.pointer.copyCoords(interaction.coords.prev, interaction.coords.cur);
}

function smothEndTick(interaction) {
  updateInertiaCoords(interaction);
  var state = interaction.inertia;
  var t = interaction._now() - state.t0;

  var _getOptions = __getOptions_26(interaction),
      duration = _getOptions.smoothEndDuration;

  if (t < duration) {
    state.sx = __utils_26.easeOutQuad(t, 0, state.xe, duration);
    state.sy = __utils_26.easeOutQuad(t, 0, state.ye, duration);
    interaction.move();
    state.timeout = ___raf_26["default"].request(function () {
      return smothEndTick(interaction);
    });
  } else {
    state.sx = state.xe;
    state.sy = state.ye;
    interaction.move();
    interaction.end(state.startEvent);
    state.smoothEnd = state.active = false;
    interaction.simulation = null;
  }
}

function updateInertiaCoords(interaction) {
  var state = interaction.inertia; // return if inertia isn't running

  if (!state.active) {
    return;
  }

  var pageUp = state.upCoords.page;
  var clientUp = state.upCoords.client;
  __utils_26.pointer.setCoords(interaction.coords.cur, [{
    pageX: pageUp.x + state.sx,
    pageY: pageUp.y + state.sy,
    clientX: clientUp.x + state.sx,
    clientY: clientUp.y + state.sy
  }], interaction._now());
}

function __getOptions_26(_ref4) {
  var interactable = _ref4.interactable,
      prepared = _ref4.prepared;
  return interactable && interactable.options && prepared.name && interactable.options[prepared.name].inertia;
}

var ___default_26 = {
  id: 'inertia',
  install: __install_26,
  listeners: {
    'interactions:new': function interactionsNew(_ref5) {
      var interaction = _ref5.interaction;
      interaction.inertia = {
        active: false,
        smoothEnd: false,
        allowResume: false,
        upCoords: {},
        timeout: null
      };
    },
    'interactions:before-action-end': release,
    'interactions:down': resume,
    'interactions:stop': __stop_26
  },
  before: 'modifiers/base',
  calcInertia: calcInertia,
  inertiaTick: inertiaTick,
  smothEndTick: smothEndTick,
  updateInertiaCoords: updateInertiaCoords
};
_$inertia_26["default"] = ___default_26;

var _$pointer_33 = {};
"use strict";

function ___typeof_33(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_33 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_33 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_33(obj); }

Object.defineProperty(_$pointer_33, "__esModule", {
  value: true
});
_$pointer_33.getRestrictionRect = getRestrictionRect;
_$pointer_33["default"] = void 0;

var ___extend_33 = ___interopRequireDefault_33(_$extend_52);

var __is_33 = ___interopRequireWildcard_33(_$is_56);

var rectUtils = ___interopRequireWildcard_33(_$rect_62);

function ___getRequireWildcardCache_33() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_33 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_33(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_33(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_33(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_33(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function __start_33(_ref) {
  var rect = _ref.rect,
      startOffset = _ref.startOffset,
      state = _ref.state,
      interaction = _ref.interaction,
      pageCoords = _ref.pageCoords;
  var options = state.options;
  var elementRect = options.elementRect;
  var offset = (0, ___extend_33["default"])({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, options.offset || {});

  if (rect && elementRect) {
    var restriction = getRestrictionRect(options.restriction, interaction, pageCoords);

    if (restriction) {
      var widthDiff = restriction.right - restriction.left - rect.width;
      var heightDiff = restriction.bottom - restriction.top - rect.height;

      if (widthDiff < 0) {
        offset.left += widthDiff;
        offset.right += widthDiff;
      }

      if (heightDiff < 0) {
        offset.top += heightDiff;
        offset.bottom += heightDiff;
      }
    }

    offset.left += startOffset.left - rect.width * elementRect.left;
    offset.top += startOffset.top - rect.height * elementRect.top;
    offset.right += startOffset.right - rect.width * (1 - elementRect.right);
    offset.bottom += startOffset.bottom - rect.height * (1 - elementRect.bottom);
  }

  state.offset = offset;
}

function set(_ref2) {
  var coords = _ref2.coords,
      interaction = _ref2.interaction,
      state = _ref2.state;
  var options = state.options,
      offset = state.offset;
  var restriction = getRestrictionRect(options.restriction, interaction, coords);

  if (!restriction) {
    return;
  }

  var rect = rectUtils.xywhToTlbr(restriction);
  coords.x = Math.max(Math.min(rect.right - offset.right, coords.x), rect.left + offset.left);
  coords.y = Math.max(Math.min(rect.bottom - offset.bottom, coords.y), rect.top + offset.top);
}

function getRestrictionRect(value, interaction, coords) {
  if (__is_33.func(value)) {
    return rectUtils.resolveRectLike(value, interaction.interactable, interaction.element, [coords.x, coords.y, interaction]);
  } else {
    return rectUtils.resolveRectLike(value, interaction.interactable, interaction.element);
  }
}

var __defaults_33 = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: false,
  enabled: false
};
var restrict = {
  start: __start_33,
  set: set,
  defaults: __defaults_33
};
var ___default_33 = restrict;
_$pointer_33["default"] = ___default_33;

var _$edges_32 = {};
"use strict";

function ___typeof_32(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_32 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_32 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_32(obj); }

Object.defineProperty(_$edges_32, "__esModule", {
  value: true
});
_$edges_32["default"] = void 0;

var ___extend_32 = ___interopRequireDefault_32(_$extend_52);

var __rectUtils_32 = ___interopRequireWildcard_32(_$rect_62);

/* removed: var _$pointer_33 = require("./pointer.js"); */;

function ___getRequireWildcardCache_32() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_32 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_32(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_32(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_32(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_32(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// This module adds the options.resize.restrictEdges setting which sets min and
// max for the top, left, bottom and right edges of the target being resized.
//
// interact(target).resize({
//   edges: { top: true, left: true },
//   restrictEdges: {
//     inner: { top: 200, left: 200, right: 400, bottom: 400 },
//     outer: { top:   0, left:   0, right: 600, bottom: 600 },
//   },
// })
var noInner = {
  top: +Infinity,
  left: +Infinity,
  bottom: -Infinity,
  right: -Infinity
};
var noOuter = {
  top: -Infinity,
  left: -Infinity,
  bottom: +Infinity,
  right: +Infinity
};

function __start_32(_ref) {
  var interaction = _ref.interaction,
      state = _ref.state;
  var options = state.options;
  var startOffset = interaction.modifiers.startOffset;
  var offset;

  if (options) {
    var offsetRect = (0, _$pointer_33.getRestrictionRect)(options.offset, interaction, interaction.coords.start.page);
    offset = __rectUtils_32.rectToXY(offsetRect);
  }

  offset = offset || {
    x: 0,
    y: 0
  };
  state.offset = {
    top: offset.y + startOffset.top,
    left: offset.x + startOffset.left,
    bottom: offset.y - startOffset.bottom,
    right: offset.x - startOffset.right
  };
}

function __set_32(_ref2) {
  var coords = _ref2.coords,
      interaction = _ref2.interaction,
      state = _ref2.state;
  var offset = state.offset,
      options = state.options;
  var edges = interaction.prepared._linkedEdges || interaction.prepared.edges;

  if (!edges) {
    return;
  }

  var page = (0, ___extend_32["default"])({}, coords);
  var inner = (0, _$pointer_33.getRestrictionRect)(options.inner, interaction, page) || {};
  var outer = (0, _$pointer_33.getRestrictionRect)(options.outer, interaction, page) || {};
  fixRect(inner, noInner);
  fixRect(outer, noOuter);

  if (edges.top) {
    coords.y = Math.min(Math.max(outer.top + offset.top, page.y), inner.top + offset.top);
  } else if (edges.bottom) {
    coords.y = Math.max(Math.min(outer.bottom + offset.bottom, page.y), inner.bottom + offset.bottom);
  }

  if (edges.left) {
    coords.x = Math.min(Math.max(outer.left + offset.left, page.x), inner.left + offset.left);
  } else if (edges.right) {
    coords.x = Math.max(Math.min(outer.right + offset.right, page.x), inner.right + offset.right);
  }
}

function fixRect(rect, defaults) {
  var _arr = ['top', 'left', 'bottom', 'right'];

  for (var _i = 0; _i < _arr.length; _i++) {
    var edge = _arr[_i];

    if (!(edge in rect)) {
      rect[edge] = defaults[edge];
    }
  }

  return rect;
}

var __defaults_32 = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: false,
  enabled: false
};
var restrictEdges = {
  noInner: noInner,
  noOuter: noOuter,
  start: __start_32,
  set: __set_32,
  defaults: __defaults_32
};
var ___default_32 = restrictEdges;
_$edges_32["default"] = ___default_32;

var _$rect_34 = {};
"use strict";

Object.defineProperty(_$rect_34, "__esModule", {
  value: true
});
_$rect_34["default"] = void 0;

var ___extend_34 = ___interopRequireDefault_34(_$extend_52);

var ___pointer_34 = ___interopRequireDefault_34(_$pointer_33);

function ___interopRequireDefault_34(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __defaults_34 = (0, ___extend_34["default"])({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },

  set elementRect(_) {}

}, ___pointer_34["default"].defaults);
var restrictRect = {
  start: ___pointer_34["default"].start,
  set: ___pointer_34["default"].set,
  defaults: __defaults_34
};
var ___default_34 = restrictRect;
_$rect_34["default"] = ___default_34;

var _$size_35 = {};
"use strict";

function ___typeof_35(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_35 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_35 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_35(obj); }

Object.defineProperty(_$size_35, "__esModule", {
  value: true
});
_$size_35["default"] = void 0;

var ___extend_35 = ___interopRequireDefault_35(_$extend_52);

var __rectUtils_35 = ___interopRequireWildcard_35(_$rect_62);

var _edges = ___interopRequireDefault_35(_$edges_32);

/* removed: var _$pointer_33 = require("./pointer.js"); */;

function ___getRequireWildcardCache_35() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_35 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_35(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_35(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_35(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_35(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noMin = {
  width: -Infinity,
  height: -Infinity
};
var noMax = {
  width: +Infinity,
  height: +Infinity
};

function __start_35(arg) {
  return _edges["default"].start(arg);
}

function __set_35(arg) {
  var interaction = arg.interaction,
      state = arg.state;
  var options = state.options;
  var edges = interaction.prepared._linkedEdges || interaction.prepared.edges;

  if (!edges) {
    return;
  }

  var rect = __rectUtils_35.xywhToTlbr(interaction.resizeRects.inverted);
  var minSize = __rectUtils_35.tlbrToXywh((0, _$pointer_33.getRestrictionRect)(options.min, interaction, arg.coords)) || noMin;
  var maxSize = __rectUtils_35.tlbrToXywh((0, _$pointer_33.getRestrictionRect)(options.max, interaction, arg.coords)) || noMax;
  state.options = {
    endOnly: options.endOnly,
    inner: (0, ___extend_35["default"])({}, _edges["default"].noInner),
    outer: (0, ___extend_35["default"])({}, _edges["default"].noOuter)
  };

  if (edges.top) {
    state.options.inner.top = rect.bottom - minSize.height;
    state.options.outer.top = rect.bottom - maxSize.height;
  } else if (edges.bottom) {
    state.options.inner.bottom = rect.top + minSize.height;
    state.options.outer.bottom = rect.top + maxSize.height;
  }

  if (edges.left) {
    state.options.inner.left = rect.right - minSize.width;
    state.options.outer.left = rect.right - maxSize.width;
  } else if (edges.right) {
    state.options.inner.right = rect.left + minSize.width;
    state.options.outer.right = rect.left + maxSize.width;
  }

  _edges["default"].set(arg);

  state.options = options;
}

var __defaults_35 = {
  min: null,
  max: null,
  endOnly: false,
  enabled: false
};
var restrictSize = {
  start: __start_35,
  set: __set_35,
  defaults: __defaults_35
};
var ___default_35 = restrictSize;
_$size_35["default"] = ___default_35;

var _$pointer_37 = {};
"use strict";

function ___typeof_37(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_37 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_37 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_37(obj); }

Object.defineProperty(_$pointer_37, "__esModule", {
  value: true
});
_$pointer_37["default"] = void 0;

var __utils_37 = ___interopRequireWildcard_37(_$utils_55);

function ___getRequireWildcardCache_37() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_37 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_37(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_37(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_37(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function __start_37(arg) {
  var interaction = arg.interaction,
      interactable = arg.interactable,
      element = arg.element,
      rect = arg.rect,
      state = arg.state,
      startOffset = arg.startOffset;
  var options = state.options;
  var offsets = [];
  var origin = options.offsetWithOrigin ? getOrigin(arg) : {
    x: 0,
    y: 0
  };
  var snapOffset;

  if (options.offset === 'startCoords') {
    snapOffset = {
      x: interaction.coords.start.page.x,
      y: interaction.coords.start.page.y
    };
  } else {
    var offsetRect = __utils_37.rect.resolveRectLike(options.offset, interactable, element, [interaction]);
    snapOffset = __utils_37.rect.rectToXY(offsetRect) || {
      x: 0,
      y: 0
    };
    snapOffset.x += origin.x;
    snapOffset.y += origin.y;
  }

  var relativePoints = options.relativePoints || [];

  if (rect && options.relativePoints && options.relativePoints.length) {
    for (var index = 0; index < relativePoints.length; index++) {
      var relativePoint = relativePoints[index];
      offsets.push({
        index: index,
        relativePoint: relativePoint,
        x: startOffset.left - rect.width * relativePoint.x + snapOffset.x,
        y: startOffset.top - rect.height * relativePoint.y + snapOffset.y
      });
    }
  } else {
    offsets.push(__utils_37.extend({
      index: 0,
      relativePoint: null
    }, snapOffset));
  }

  state.offsets = offsets;
}

function __set_37(arg) {
  var interaction = arg.interaction,
      coords = arg.coords,
      state = arg.state;
  var options = state.options,
      offsets = state.offsets;
  var origin = __utils_37.getOriginXY(interaction.interactable, interaction.element, interaction.prepared.name);
  var page = __utils_37.extend({}, coords);
  var targets = [];
  var target;

  if (!options.offsetWithOrigin) {
    page.x -= origin.x;
    page.y -= origin.y;
  }

  state.realX = page.x;
  state.realY = page.y;

  for (var _i = 0; _i < offsets.length; _i++) {
    var _ref;

    _ref = offsets[_i];
    var offset = _ref;
    var relativeX = page.x - offset.x;
    var relativeY = page.y - offset.y;

    for (var index = 0, _len = options.targets.length; index < _len; index++) {
      var snapTarget = options.targets[index];

      if (__utils_37.is.func(snapTarget)) {
        target = snapTarget(relativeX, relativeY, interaction, offset, index);
      } else {
        target = snapTarget;
      }

      if (!target) {
        continue;
      }

      targets.push({
        x: (__utils_37.is.number(target.x) ? target.x : relativeX) + offset.x,
        y: (__utils_37.is.number(target.y) ? target.y : relativeY) + offset.y,
        range: __utils_37.is.number(target.range) ? target.range : options.range
      });
    }
  }

  var closest = {
    target: null,
    inRange: false,
    distance: 0,
    range: 0,
    dx: 0,
    dy: 0
  };

  for (var i = 0, len = targets.length; i < len; i++) {
    target = targets[i];
    var range = target.range;
    var dx = target.x - page.x;
    var dy = target.y - page.y;
    var distance = __utils_37.hypot(dx, dy);
    var inRange = distance <= range; // Infinite targets count as being out of range
    // compared to non infinite ones that are in range

    if (range === Infinity && closest.inRange && closest.range !== Infinity) {
      inRange = false;
    }

    if (!closest.target || (inRange // is the closest target in range?
    ? closest.inRange && range !== Infinity // the pointer is relatively deeper in this target
    ? distance / range < closest.distance / closest.range // this target has Infinite range and the closest doesn't
    : range === Infinity && closest.range !== Infinity || // OR this target is closer that the previous closest
    distance < closest.distance : // The other is not in range and the pointer is closer to this target
    !closest.inRange && distance < closest.distance)) {
      closest.target = target;
      closest.distance = distance;
      closest.range = range;
      closest.inRange = inRange;
      closest.dx = dx;
      closest.dy = dy;
      state.range = range;
    }
  }

  if (closest.inRange) {
    coords.x = closest.target.x;
    coords.y = closest.target.y;
  }

  state.closest = closest;
}

function getOrigin(arg) {
  var element = arg.interaction.element;
  var optionsOrigin = __utils_37.rect.rectToXY(__utils_37.rect.resolveRectLike(arg.state.options.origin, null, null, [element]));
  var origin = optionsOrigin || __utils_37.getOriginXY(arg.interactable, element, arg.interaction.prepared.name);
  return origin;
}

var __defaults_37 = {
  range: Infinity,
  targets: null,
  offset: null,
  offsetWithOrigin: true,
  origin: null,
  relativePoints: null,
  endOnly: false,
  enabled: false
};
var snap = {
  start: __start_37,
  set: __set_37,
  defaults: __defaults_37
};
var ___default_37 = snap;
_$pointer_37["default"] = ___default_37;

var _$size_38 = {};
"use strict";

function ___typeof_38(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_38 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_38 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_38(obj); }

Object.defineProperty(_$size_38, "__esModule", {
  value: true
});
_$size_38["default"] = void 0;

var ___extend_38 = ___interopRequireDefault_38(_$extend_52);

var __is_38 = ___interopRequireWildcard_38(_$is_56);

var ___pointer_38 = ___interopRequireDefault_38(_$pointer_37);

function ___getRequireWildcardCache_38() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_38 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_38(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_38(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_38(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_38(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___slicedToArray_38(arr, i) { return ___arrayWithHoles_38(arr) || ___iterableToArrayLimit_38(arr, i) || ___nonIterableRest_38(); }

function ___nonIterableRest_38() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function ___iterableToArrayLimit_38(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ___arrayWithHoles_38(arr) { if (Array.isArray(arr)) return arr; }

function __start_38(arg) {
  var interaction = arg.interaction,
      state = arg.state;
  var options = state.options;
  var edges = interaction.prepared.edges;

  if (!edges) {
    return null;
  }

  arg.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: edges.left ? 0 : 1,
        y: edges.top ? 0 : 1
      }],
      offset: options.offset || 'self',
      origin: {
        x: 0,
        y: 0
      },
      range: options.range
    }
  };
  state.targetFields = state.targetFields || [['width', 'height'], ['x', 'y']];

  ___pointer_38["default"].start(arg);

  state.offsets = arg.state.offsets;
  arg.state = state;
}

function __set_38(arg) {
  var interaction = arg.interaction,
      state = arg.state,
      coords = arg.coords;
  var options = state.options,
      offsets = state.offsets;
  var relative = {
    x: coords.x - offsets[0].x,
    y: coords.y - offsets[0].y
  };
  state.options = (0, ___extend_38["default"])({}, options);
  state.options.targets = [];

  for (var _i = 0; _i < (options.targets || []).length; _i++) {
    var _ref;

    _ref = (options.targets || [])[_i];
    var snapTarget = _ref;
    var target = void 0;

    if (__is_38.func(snapTarget)) {
      target = snapTarget(relative.x, relative.y, interaction);
    } else {
      target = snapTarget;
    }

    if (!target) {
      continue;
    }

    for (var _i2 = 0; _i2 < state.targetFields.length; _i2++) {
      var _ref2;

      _ref2 = state.targetFields[_i2];

      var _ref3 = _ref2,
          _ref4 = ___slicedToArray_38(_ref3, 2),
          xField = _ref4[0],
          yField = _ref4[1];

      if (xField in target || yField in target) {
        target.x = target[xField];
        target.y = target[yField];
        break;
      }
    }

    state.options.targets.push(target);
  }

  ___pointer_38["default"].set(arg);

  state.options = options;
}

var __defaults_38 = {
  range: Infinity,
  targets: null,
  offset: null,
  endOnly: false,
  enabled: false
};
var snapSize = {
  start: __start_38,
  set: __set_38,
  defaults: __defaults_38
};
var ___default_38 = snapSize;
_$size_38["default"] = ___default_38;

var _$edges_36 = {};
"use strict";

Object.defineProperty(_$edges_36, "__esModule", {
  value: true
});
_$edges_36["default"] = void 0;

var ___clone_36 = ___interopRequireDefault_36(_$clone_48);

var ___extend_36 = ___interopRequireDefault_36(_$extend_52);

var _size = ___interopRequireDefault_36(_$size_38);

function ___interopRequireDefault_36(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @module modifiers/snapEdges
 *
 * @description
 * This module allows snapping of the edges of targets during resize
 * interactions.
 *
 * @example
 * interact(target).resizable({
 *   snapEdges: {
 *     targets: [interact.snappers.grid({ x: 100, y: 50 })],
 *   },
 * })
 *
 * interact(target).resizable({
 *   snapEdges: {
 *     targets: [
 *       interact.snappers.grid({
 *        top: 50,
 *        left: 50,
 *        bottom: 100,
 *        right: 100,
 *       }),
 *     ],
 *   },
 * })
 */
function __start_36(arg) {
  var edges = arg.interaction.prepared.edges;

  if (!edges) {
    return null;
  }

  arg.state.targetFields = arg.state.targetFields || [[edges.left ? 'left' : 'right', edges.top ? 'top' : 'bottom']];
  return _size["default"].start(arg);
}

function __set_36(arg) {
  return _size["default"].set(arg);
}

var snapEdges = {
  start: __start_36,
  set: __set_36,
  defaults: (0, ___extend_36["default"])((0, ___clone_36["default"])(_size["default"].defaults), {
    offset: {
      x: 0,
      y: 0
    }
  })
};
var ___default_36 = snapEdges;
_$edges_36["default"] = ___default_36;

var _$modifiers_31 = {};
"use strict";

Object.defineProperty(_$modifiers_31, "__esModule", {
  value: true
});
_$modifiers_31.restrictSize = _$modifiers_31.restrictEdges = _$modifiers_31.restrictRect = _$modifiers_31.restrict = _$modifiers_31.snapEdges = _$modifiers_31.snapSize = _$modifiers_31.snap = void 0;

var ___base_31 = ___interopRequireDefault_31(_$base_30);

var ___edges_31 = ___interopRequireDefault_31(_$edges_32);

var ___pointer_31 = ___interopRequireDefault_31(_$pointer_33);

var ___rect_31 = ___interopRequireDefault_31(_$rect_34);

var ___size_31 = ___interopRequireDefault_31(_$size_35);

var _edges2 = ___interopRequireDefault_31(_$edges_36);

var _pointer2 = ___interopRequireDefault_31(_$pointer_37);

var _size2 = ___interopRequireDefault_31(_$size_38);

function ___interopRequireDefault_31(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __makeModifier_31 = ___base_31["default"].makeModifier;
var __snap_31 = __makeModifier_31(_pointer2["default"], 'snap');
_$modifiers_31.snap = __snap_31;
var __snapSize_31 = __makeModifier_31(_size2["default"], 'snapSize');
_$modifiers_31.snapSize = __snapSize_31;
var __snapEdges_31 = __makeModifier_31(_edges2["default"], 'snapEdges');
_$modifiers_31.snapEdges = __snapEdges_31;
var __restrict_31 = __makeModifier_31(___pointer_31["default"], 'restrict');
_$modifiers_31.restrict = __restrict_31;
var __restrictRect_31 = __makeModifier_31(___rect_31["default"], 'restrictRect');
_$modifiers_31.restrictRect = __restrictRect_31;
var __restrictEdges_31 = __makeModifier_31(___edges_31["default"], 'restrictEdges');
_$modifiers_31.restrictEdges = __restrictEdges_31;
var __restrictSize_31 = __makeModifier_31(___size_31["default"], 'restrictSize');
_$modifiers_31.restrictSize = __restrictSize_31;

var _$PointerEvent_39 = {};
"use strict";

Object.defineProperty(_$PointerEvent_39, "__esModule", {
  value: true
});
_$PointerEvent_39["default"] = void 0;

var ___BaseEvent2_39 = ___interopRequireDefault_39(_$BaseEvent_13);

var __pointerUtils_39 = ___interopRequireWildcard_39(_$pointerUtils_60);

function ___getRequireWildcardCache_39() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_39 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_39(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_39(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_39(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_39(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___typeof_39(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_39 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_39 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_39(obj); }

function ___classCallCheck_39(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ___defineProperties_39(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ___createClass_39(Constructor, protoProps, staticProps) { if (protoProps) ___defineProperties_39(Constructor.prototype, protoProps); if (staticProps) ___defineProperties_39(Constructor, staticProps); return Constructor; }

function ___possibleConstructorReturn_39(self, call) { if (call && (___typeof_39(call) === "object" || typeof call === "function")) { return call; } return ___assertThisInitialized_39(self); }

function ___getPrototypeOf_39(o) { ___getPrototypeOf_39 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ___getPrototypeOf_39(o); }

function ___assertThisInitialized_39(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ___inherits_39(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ___setPrototypeOf_39(subClass, superClass); }

function ___setPrototypeOf_39(o, p) { ___setPrototypeOf_39 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ___setPrototypeOf_39(o, p); }

function ___defineProperty_39(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/** */
var PointerEvent =
/*#__PURE__*/
function (_BaseEvent) {
  ___inherits_39(PointerEvent, _BaseEvent);

  /** */
  function PointerEvent(type, pointer, event, eventTarget, interaction, timeStamp) {
    var _this;

    ___classCallCheck_39(this, PointerEvent);

    _this = ___possibleConstructorReturn_39(this, ___getPrototypeOf_39(PointerEvent).call(this, interaction));

    ___defineProperty_39(___assertThisInitialized_39(_this), "type", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "originalEvent", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "pointerId", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "pointerType", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "double", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "pageX", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "pageY", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "clientX", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "clientY", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "dt", void 0);

    ___defineProperty_39(___assertThisInitialized_39(_this), "eventable", void 0);

    __pointerUtils_39.pointerExtend(___assertThisInitialized_39(_this), event);

    if (event !== pointer) {
      __pointerUtils_39.pointerExtend(___assertThisInitialized_39(_this), pointer);
    }

    _this.timeStamp = timeStamp;
    _this.originalEvent = event;
    _this.type = type;
    _this.pointerId = __pointerUtils_39.getPointerId(pointer);
    _this.pointerType = __pointerUtils_39.getPointerType(pointer);
    _this.target = eventTarget;
    _this.currentTarget = null;

    if (type === 'tap') {
      var pointerIndex = interaction.getPointerIndex(pointer);
      _this.dt = _this.timeStamp - interaction.pointers[pointerIndex].downTime;
      var interval = _this.timeStamp - interaction.tapTime;
      _this["double"] = !!(interaction.prevTap && interaction.prevTap.type !== 'doubletap' && interaction.prevTap.target === _this.target && interval < 500);
    } else if (type === 'doubletap') {
      _this.dt = pointer.timeStamp - interaction.tapTime;
    }

    return _this;
  }

  ___createClass_39(PointerEvent, [{
    key: "_subtractOrigin",
    value: function _subtractOrigin(_ref) {
      var originX = _ref.x,
          originY = _ref.y;
      this.pageX -= originX;
      this.pageY -= originY;
      this.clientX -= originX;
      this.clientY -= originY;
      return this;
    }
  }, {
    key: "_addOrigin",
    value: function _addOrigin(_ref2) {
      var originX = _ref2.x,
          originY = _ref2.y;
      this.pageX += originX;
      this.pageY += originY;
      this.clientX += originX;
      this.clientY += originY;
      return this;
    }
    /**
     * Prevent the default behaviour of the original Event
     */

  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.originalEvent.preventDefault();
    }
  }]);

  return PointerEvent;
}(___BaseEvent2_39["default"]);

_$PointerEvent_39["default"] = PointerEvent;

var _$base_40 = {};
"use strict";

function ___typeof_40(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_40 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_40 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_40(obj); }

Object.defineProperty(_$base_40, "__esModule", {
  value: true
});
_$base_40["default"] = void 0;

var __utils_40 = ___interopRequireWildcard_40(_$utils_55);

var _PointerEvent = ___interopRequireDefault_40(_$PointerEvent_39);

function ___interopRequireDefault_40(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_40() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_40 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_40(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_40(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_40(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __defaults_40 = {
  holdDuration: 600,
  ignoreFrom: null,
  allowFrom: null,
  origin: {
    x: 0,
    y: 0
  }
};
var pointerEvents = {
  id: 'pointer-events/base',
  install: __install_40,
  listeners: {
    'interactions:new': addInteractionProps,
    'interactions:update-pointer': addHoldInfo,
    'interactions:move': moveAndClearHold,
    'interactions:down': function interactionsDown(arg, scope) {
      downAndStartHold(arg, scope);
      fire(arg, scope);
    },
    'interactions:up': function interactionsUp(arg, scope) {
      clearHold(arg);
      fire(arg, scope);
      tapAfterUp(arg, scope);
    },
    'interactions:cancel': function interactionsCancel(arg, scope) {
      clearHold(arg);
      fire(arg, scope);
    }
  },
  PointerEvent: _PointerEvent["default"],
  fire: fire,
  collectEventTargets: collectEventTargets,
  defaults: __defaults_40,
  types: ['down', 'move', 'up', 'cancel', 'tap', 'doubletap', 'hold']
};

function fire(arg, scope) {
  var interaction = arg.interaction,
      pointer = arg.pointer,
      event = arg.event,
      eventTarget = arg.eventTarget,
      type = arg.type,
      _arg$targets = arg.targets,
      targets = _arg$targets === void 0 ? collectEventTargets(arg, scope) : _arg$targets;
  var pointerEvent = new _PointerEvent["default"](type, pointer, event, eventTarget, interaction, scope.now());
  scope.fire('pointerEvents:new', {
    pointerEvent: pointerEvent
  });
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    targets: targets,
    type: type,
    pointerEvent: pointerEvent
  };

  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];

    for (var prop in target.props || {}) {
      pointerEvent[prop] = target.props[prop];
    }

    var origin = __utils_40.getOriginXY(target.eventable, target.node);

    pointerEvent._subtractOrigin(origin);

    pointerEvent.eventable = target.eventable;
    pointerEvent.currentTarget = target.node;
    target.eventable.fire(pointerEvent);

    pointerEvent._addOrigin(origin);

    if (pointerEvent.immediatePropagationStopped || pointerEvent.propagationStopped && i + 1 < targets.length && targets[i + 1].node !== pointerEvent.currentTarget) {
      break;
    }
  }

  scope.fire('pointerEvents:fired', signalArg);

  if (type === 'tap') {
    // if pointerEvent should make a double tap, create and fire a doubletap
    // PointerEvent and use that as the prevTap
    var prevTap = pointerEvent["double"] ? fire({
      interaction: interaction,
      pointer: pointer,
      event: event,
      eventTarget: eventTarget,
      type: 'doubletap'
    }, scope) : pointerEvent;
    interaction.prevTap = prevTap;
    interaction.tapTime = prevTap.timeStamp;
  }

  return pointerEvent;
}

function collectEventTargets(_ref, scope) {
  var interaction = _ref.interaction,
      pointer = _ref.pointer,
      event = _ref.event,
      eventTarget = _ref.eventTarget,
      type = _ref.type;
  var pointerIndex = interaction.getPointerIndex(pointer);
  var pointerInfo = interaction.pointers[pointerIndex]; // do not fire a tap event if the pointer was moved before being lifted

  if (type === 'tap' && (interaction.pointerWasMoved || // or if the pointerup target is different to the pointerdown target
  !(pointerInfo && pointerInfo.downTarget === eventTarget))) {
    return [];
  }

  var path = __utils_40.dom.getPath(eventTarget);
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    type: type,
    path: path,
    targets: [],
    node: null
  };

  for (var _i = 0; _i < path.length; _i++) {
    var _ref2;

    _ref2 = path[_i];
    var node = _ref2;
    signalArg.node = node;
    scope.fire('pointerEvents:collect-targets', signalArg);
  }

  if (type === 'hold') {
    signalArg.targets = signalArg.targets.filter(function (target) {
      return target.eventable.options.holdDuration === interaction.pointers[pointerIndex].hold.duration;
    });
  }

  return signalArg.targets;
}

function addInteractionProps(_ref3) {
  var interaction = _ref3.interaction;
  interaction.prevTap = null; // the most recent tap event on this interaction

  interaction.tapTime = 0; // time of the most recent tap event
}

function addHoldInfo(_ref4) {
  var down = _ref4.down,
      pointerInfo = _ref4.pointerInfo;

  if (!down && pointerInfo.hold) {
    return;
  }

  pointerInfo.hold = {
    duration: Infinity,
    timeout: null
  };
}

function clearHold(_ref5) {
  var interaction = _ref5.interaction,
      pointerIndex = _ref5.pointerIndex;

  if (interaction.pointers[pointerIndex].hold) {
    clearTimeout(interaction.pointers[pointerIndex].hold.timeout);
  }
}

function moveAndClearHold(_ref6, scope) {
  var interaction = _ref6.interaction,
      pointer = _ref6.pointer,
      event = _ref6.event,
      eventTarget = _ref6.eventTarget,
      duplicate = _ref6.duplicate;
  var pointerIndex = interaction.getPointerIndex(pointer);

  if (!duplicate && (!interaction.pointerIsDown || interaction.pointerWasMoved)) {
    if (interaction.pointerIsDown) {
      clearTimeout(interaction.pointers[pointerIndex].hold.timeout);
    }

    fire({
      interaction: interaction,
      pointer: pointer,
      event: event,
      eventTarget: eventTarget,
      type: 'move'
    }, scope);
  }
}

function downAndStartHold(_ref7, scope) {
  var interaction = _ref7.interaction,
      pointer = _ref7.pointer,
      event = _ref7.event,
      eventTarget = _ref7.eventTarget,
      pointerIndex = _ref7.pointerIndex;
  var timer = interaction.pointers[pointerIndex].hold;
  var path = __utils_40.dom.getPath(eventTarget);
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    type: 'hold',
    targets: [],
    path: path,
    node: null
  };

  for (var _i2 = 0; _i2 < path.length; _i2++) {
    var _ref8;

    _ref8 = path[_i2];
    var node = _ref8;
    signalArg.node = node;
    scope.fire('pointerEvents:collect-targets', signalArg);
  }

  if (!signalArg.targets.length) {
    return;
  }

  var minDuration = Infinity;

  for (var _i3 = 0; _i3 < signalArg.targets.length; _i3++) {
    var _ref9;

    _ref9 = signalArg.targets[_i3];
    var target = _ref9;
    var holdDuration = target.eventable.options.holdDuration;

    if (holdDuration < minDuration) {
      minDuration = holdDuration;
    }
  }

  timer.duration = minDuration;
  timer.timeout = setTimeout(function () {
    fire({
      interaction: interaction,
      eventTarget: eventTarget,
      pointer: pointer,
      event: event,
      type: 'hold'
    }, scope);
  }, minDuration);
}

function tapAfterUp(_ref10, scope) {
  var interaction = _ref10.interaction,
      pointer = _ref10.pointer,
      event = _ref10.event,
      eventTarget = _ref10.eventTarget;

  if (!interaction.pointerWasMoved) {
    fire({
      interaction: interaction,
      eventTarget: eventTarget,
      pointer: pointer,
      event: event,
      type: 'tap'
    }, scope);
  }
}

function __install_40(scope) {
  scope.pointerEvents = pointerEvents;
  scope.defaults.actions.pointerEvents = pointerEvents.defaults;
}

var ___default_40 = pointerEvents;
_$base_40["default"] = ___default_40;

var _$holdRepeat_41 = {};
"use strict";

Object.defineProperty(_$holdRepeat_41, "__esModule", {
  value: true
});
_$holdRepeat_41["default"] = void 0;

var ___base_41 = ___interopRequireDefault_41(_$base_40);

function ___interopRequireDefault_41(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function __install_41(scope) {
  scope.usePlugin(___base_41["default"]);
  var pointerEvents = scope.pointerEvents; // don't repeat by default

  pointerEvents.defaults.holdRepeatInterval = 0;
  pointerEvents.types.push('holdrepeat');
}

function onNew(_ref) {
  var pointerEvent = _ref.pointerEvent;

  if (pointerEvent.type !== 'hold') {
    return;
  }

  pointerEvent.count = (pointerEvent.count || 0) + 1;
}

function onFired(_ref2, scope) {
  var interaction = _ref2.interaction,
      pointerEvent = _ref2.pointerEvent,
      eventTarget = _ref2.eventTarget,
      targets = _ref2.targets;

  if (pointerEvent.type !== 'hold' || !targets.length) {
    return;
  } // get the repeat interval from the first eventable


  var interval = targets[0].eventable.options.holdRepeatInterval; // don't repeat if the interval is 0 or less

  if (interval <= 0) {
    return;
  } // set a timeout to fire the holdrepeat event


  interaction.holdIntervalHandle = setTimeout(function () {
    scope.pointerEvents.fire({
      interaction: interaction,
      eventTarget: eventTarget,
      type: 'hold',
      pointer: pointerEvent,
      event: pointerEvent
    }, scope);
  }, interval);
}

function endHoldRepeat(_ref3) {
  var interaction = _ref3.interaction;

  // set the interaction's holdStopTime property
  // to stop further holdRepeat events
  if (interaction.holdIntervalHandle) {
    clearInterval(interaction.holdIntervalHandle);
    interaction.holdIntervalHandle = null;
  }
}

var ___default_41 = {
  id: 'pointer-events/holdRepeat',
  install: __install_41,
  listeners: ['move', 'up', 'cancel', 'endall'].reduce(function (acc, enderTypes) {
    acc["pointerEvents:".concat(enderTypes)] = endHoldRepeat;
    return acc;
  }, {
    'pointerEvents:new': onNew,
    'pointerEvents:fired': onFired
  })
};
_$holdRepeat_41["default"] = ___default_41;

var _$interactableTargets_43 = {};
"use strict";

Object.defineProperty(_$interactableTargets_43, "__esModule", {
  value: true
});
_$interactableTargets_43["default"] = void 0;

/* removed: var _$arr_46 = require("../utils/arr.js"); */;

var ___extend_43 = ___interopRequireDefault_43(_$extend_52);

function ___interopRequireDefault_43(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function __install_43(scope) {
  var pointerEvents = scope.pointerEvents,
      actions = scope.actions,
      Interactable = scope.Interactable;
  (0, _$arr_46.merge)(actions.eventTypes, pointerEvents.types);
  Interactable.prototype.pointerEvents = pointerEventsMethod;
  var __backCompatOption = Interactable.prototype._backCompatOption;

  Interactable.prototype._backCompatOption = function (optionName, newValue) {
    var ret = __backCompatOption.call(this, optionName, newValue);

    if (ret === this) {
      this.events.options[optionName] = newValue;
    }

    return ret;
  };
}

function pointerEventsMethod(options) {
  (0, ___extend_43["default"])(this.events.options, options);
  return this;
}

var plugin = {
  id: 'pointer-events/interactableTargets',
  install: __install_43,
  listeners: {
    'pointerEvents:collect-targets': function pointerEventsCollectTargets(_ref, scope) {
      var targets = _ref.targets,
          node = _ref.node,
          type = _ref.type,
          eventTarget = _ref.eventTarget;
      scope.interactables.forEachMatch(node, function (interactable) {
        var eventable = interactable.events;
        var options = eventable.options;

        if (eventable.types[type] && eventable.types[type].length && interactable.testIgnoreAllow(options, node, eventTarget)) {
          targets.push({
            node: node,
            eventable: eventable,
            props: {
              interactable: interactable
            }
          });
        }
      });
    },
    'interactable:new': function interactableNew(_ref2) {
      var interactable = _ref2.interactable;

      interactable.events.getRect = function (element) {
        return interactable.getRect(element);
      };
    },
    'interactable:set': function interactableSet(_ref3, scope) {
      var interactable = _ref3.interactable,
          options = _ref3.options;
      (0, ___extend_43["default"])(interactable.events.options, scope.pointerEvents.defaults);
      (0, ___extend_43["default"])(interactable.events.options, options.pointerEvents || {});
    }
  }
};
var ___default_43 = plugin;
_$interactableTargets_43["default"] = ___default_43;

var _$pointerEvents_42 = {};
"use strict";

function ___typeof_42(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_42 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_42 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_42(obj); }

Object.defineProperty(_$pointerEvents_42, "__esModule", {
  value: true
});
_$pointerEvents_42.install = __install_42;
Object.defineProperty(_$pointerEvents_42, "holdRepeat", {
  enumerable: true,
  get: function get() {
    return _holdRepeat["default"];
  }
});
Object.defineProperty(_$pointerEvents_42, "interactableTargets", {
  enumerable: true,
  get: function get() {
    return _interactableTargets["default"];
  }
});
_$pointerEvents_42.pointerEvents = _$pointerEvents_42.id = void 0;

var __pointerEvents_42 = ___interopRequireWildcard_42(_$base_40);

_$pointerEvents_42.pointerEvents = __pointerEvents_42;

var _holdRepeat = ___interopRequireDefault_42(_$holdRepeat_41);

var _interactableTargets = ___interopRequireDefault_42(_$interactableTargets_43);

function ___interopRequireDefault_42(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_42() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_42 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_42(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_42(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_42(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function __install_42(scope) {
  scope.usePlugin(__pointerEvents_42);
  scope.usePlugin(_holdRepeat["default"]);
  scope.usePlugin(_interactableTargets["default"]);
}

var __id_42 = 'pointer-events';
_$pointerEvents_42.id = __id_42;

var _$reflow_44 = {};
"use strict";

Object.defineProperty(_$reflow_44, "__esModule", {
  value: true
});
_$reflow_44.install = __install_44;
_$reflow_44["default"] = void 0;

/* removed: var _$InteractEvent_15 = require("../core/InteractEvent.js"); */;

/* removed: var _$utils_55 = require("../utils/index.js"); */;

_$InteractEvent_15.EventPhase.Reflow = 'reflow';

function __install_44(scope) {
  var actions = scope.actions,
      Interactable = scope.Interactable; // add action reflow event types

  for (var _i = 0; _i < actions.names.length; _i++) {
    var _ref;

    _ref = actions.names[_i];
    var actionName = _ref;
    actions.eventTypes.push("".concat(actionName, "reflow"));
  }
  /**
   * ```js
   * const interactable = interact(target)
   * const drag = { name: drag, axis: 'x' }
   * const resize = { name: resize, edges: { left: true, bottom: true }
   *
   * interactable.reflow(drag)
   * interactable.reflow(resize)
   * ```
   *
   * Start an action sequence to re-apply modifiers, check drops, etc.
   *
   * @param { Object } action The action to begin
   * @param { string } action.name The name of the action
   * @returns { Promise } A promise that resolves to the `Interactable` when actions on all targets have ended
   */


  Interactable.prototype.reflow = function (action) {
    return reflow(this, action, scope);
  };
}

function reflow(interactable, action, scope) {
  var elements = _$utils_55.is.string(interactable.target) ? _$utils_55.arr.from(interactable._context.querySelectorAll(interactable.target)) : [interactable.target]; // tslint:disable-next-line variable-name

  var Promise = _$utils_55.win.window.Promise;
  var promises = Promise ? [] : null;

  var _loop = function _loop() {
    _ref2 = elements[_i2];
    var element = _ref2;
    var rect = interactable.getRect(element);

    if (!rect) {
      return "break";
    }

    var runningInteraction = _$utils_55.arr.find(scope.interactions.list, function (interaction) {
      return interaction.interacting() && interaction.interactable === interactable && interaction.element === element && interaction.prepared.name === action.name;
    });

    var reflowPromise = void 0;

    if (runningInteraction) {
      runningInteraction.move();

      if (promises) {
        reflowPromise = runningInteraction._reflowPromise || new Promise(function (resolve) {
          runningInteraction._reflowResolve = resolve;
        });
      }
    } else {
      var xywh = _$utils_55.rect.tlbrToXywh(rect);

      var coords = {
        page: {
          x: xywh.x,
          y: xywh.y
        },
        client: {
          x: xywh.x,
          y: xywh.y
        },
        timeStamp: scope.now()
      };

      var event = _$utils_55.pointer.coordsToEvent(coords);

      reflowPromise = startReflow(scope, interactable, element, action, event);
    }

    if (promises) {
      promises.push(reflowPromise);
    }
  };

  for (var _i2 = 0; _i2 < elements.length; _i2++) {
    var _ref2;

    var _ret = _loop();

    if (_ret === "break") break;
  }

  return promises && Promise.all(promises).then(function () {
    return interactable;
  });
}

function startReflow(scope, interactable, element, action, event) {
  var interaction = scope.interactions["new"]({
    pointerType: 'reflow'
  });
  var signalArg = {
    interaction: interaction,
    event: event,
    pointer: event,
    eventTarget: element,
    phase: _$InteractEvent_15.EventPhase.Reflow
  };
  interaction.interactable = interactable;
  interaction.element = element;
  interaction.prepared = (0, _$utils_55.extend)({}, action);
  interaction.prevEvent = event;
  interaction.updatePointer(event, event, element, true);

  interaction._doPhase(signalArg);

  var reflowPromise = _$utils_55.win.window.Promise ? new _$utils_55.win.window.Promise(function (resolve) {
    interaction._reflowResolve = resolve;
  }) : null;
  interaction._reflowPromise = reflowPromise;
  interaction.start(action, interactable, element);

  if (interaction._interacting) {
    interaction.move(signalArg);
    interaction.end(event);
  } else {
    interaction.stop();
  }

  interaction.removePointer(event, event);
  interaction.pointerIsDown = false;
  return reflowPromise;
}

var ___default_44 = {
  id: 'reflow',
  install: __install_44,
  listeners: {
    // remove completed reflow interactions
    'interactions:stop': function interactionsStop(_ref3, scope) {
      var interaction = _ref3.interaction;

      if (interaction.pointerType === _$InteractEvent_15.EventPhase.Reflow) {
        if (interaction._reflowResolve) {
          interaction._reflowResolve();
        }

        _$utils_55.arr.remove(scope.interactions.list, interaction);
      }
    }
  }
};
_$reflow_44["default"] = ___default_44;

var _$interact_28 = {};
"use strict";

function ___typeof_28(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_28 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_28 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_28(obj); }

Object.defineProperty(_$interact_28, "__esModule", {
  value: true
});
_$interact_28["default"] = _$interact_28.scope = _$interact_28.interact = void 0;

var ___scope_28 = _$scope_24({});

var ___browser_28 = ___interopRequireDefault_28(_$browser_47);

var ___events_28 = ___interopRequireDefault_28(_$events_51);

var __utils_28 = ___interopRequireWildcard_28(_$utils_55);

function ___getRequireWildcardCache_28() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_28 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_28(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_28(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_28(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___interopRequireDefault_28(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @module interact */
var globalEvents = {};
var scope = new ___scope_28.Scope();
/**
 * ```js
 * interact('#draggable').draggable(true)
 *
 * var rectables = interact('rect')
 * rectables
 *   .gesturable(true)
 *   .on('gesturemove', function (event) {
 *       // ...
 *   })
 * ```
 *
 * The methods of this variable can be used to set elements as interactables
 * and also to change various default settings.
 *
 * Calling it as a function and passing an element or a valid CSS selector
 * string returns an Interactable object which has various methods to configure
 * it.
 *
 * @global
 *
 * @param {Element | string} target The HTML or SVG Element to interact with
 * or CSS selector
 * @return {Interactable}
 */

_$interact_28.scope = scope;

var interact = function interact(target, options) {
  var interactable = scope.interactables.get(target, options);

  if (!interactable) {
    interactable = scope.interactables["new"](target, options);
    interactable.events.global = globalEvents;
  }

  return interactable;
};
/**
 * Use a plugin
 *
 * @alias module:interact.use
 *
 * @param {Object} plugin
 * @param {function} plugin.install
 * @return {interact}
 */


_$interact_28.interact = interact;
interact.use = use;

function use(plugin, options) {
  scope.usePlugin(plugin, options);
  return interact;
}
/**
 * Check if an element or selector has been set with the {@link interact}
 * function
 *
 * @alias module:interact.isSet
 *
 * @param {Element} element The Element being searched for
 * @return {boolean} Indicates if the element or CSS selector was previously
 * passed to interact
 */


interact.isSet = isSet;

function isSet(target, options) {
  return !!scope.interactables.get(target, options && options.context);
}
/**
 * Add a global listener for an InteractEvent or adds a DOM event to `document`
 *
 * @alias module:interact.on
 *
 * @param {string | array | object} type The types of events to listen for
 * @param {function} listener The function event (s)
 * @param {object | boolean} [options] object or useCapture flag for
 * addEventListener
 * @return {object} interact
 */


interact.on = on;

function on(type, listener, options) {
  if (__utils_28.is.string(type) && type.search(' ') !== -1) {
    type = type.trim().split(/ +/);
  }

  if (__utils_28.is.array(type)) {
    for (var _i = 0; _i < type.length; _i++) {
      var _ref;

      _ref = type[_i];
      var eventType = _ref;
      interact.on(eventType, listener, options);
    }

    return interact;
  }

  if (__utils_28.is.object(type)) {
    for (var prop in type) {
      interact.on(prop, type[prop], listener);
    }

    return interact;
  } // if it is an InteractEvent type, add listener to globalEvents


  if (__utils_28.arr.contains(scope.actions.eventTypes, type)) {
    // if this type of event was never bound
    if (!globalEvents[type]) {
      globalEvents[type] = [listener];
    } else {
      globalEvents[type].push(listener);
    }
  } // If non InteractEvent type, addEventListener to document
  else {
      ___events_28["default"].add(scope.document, type, listener, {
        options: options
      });
    }

  return interact;
}
/**
 * Removes a global InteractEvent listener or DOM event from `document`
 *
 * @alias module:interact.off
 *
 * @param {string | array | object} type The types of events that were listened
 * for
 * @param {function} listener The listener function to be removed
 * @param {object | boolean} options [options] object or useCapture flag for
 * removeEventListener
 * @return {object} interact
 */


interact.off = off;

function off(type, listener, options) {
  if (__utils_28.is.string(type) && type.search(' ') !== -1) {
    type = type.trim().split(/ +/);
  }

  if (__utils_28.is.array(type)) {
    for (var _i2 = 0; _i2 < type.length; _i2++) {
      var _ref2;

      _ref2 = type[_i2];
      var eventType = _ref2;
      interact.off(eventType, listener, options);
    }

    return interact;
  }

  if (__utils_28.is.object(type)) {
    for (var prop in type) {
      interact.off(prop, type[prop], listener);
    }

    return interact;
  }

  if (!__utils_28.arr.contains(scope.actions.eventTypes, type)) {
    ___events_28["default"].remove(scope.document, type, listener, options);
  } else {
    var index;

    if (type in globalEvents && (index = globalEvents[type].indexOf(listener)) !== -1) {
      globalEvents[type].splice(index, 1);
    }
  }

  return interact;
}

interact.debug = debug;

function debug() {
  return scope;
} // expose the functions used to calculate multi-touch properties


interact.getPointerAverage = __utils_28.pointer.pointerAverage;
interact.getTouchBBox = __utils_28.pointer.touchBBox;
interact.getTouchDistance = __utils_28.pointer.touchDistance;
interact.getTouchAngle = __utils_28.pointer.touchAngle;
interact.getElementRect = __utils_28.dom.getElementRect;
interact.getElementClientRect = __utils_28.dom.getElementClientRect;
interact.matchesSelector = __utils_28.dom.matchesSelector;
interact.closest = __utils_28.dom.closest;
/**
 * @alias module:interact.supportsTouch
 *
 * @return {boolean} Whether or not the browser supports touch input
 */

interact.supportsTouch = supportsTouch;

function supportsTouch() {
  return ___browser_28["default"].supportsTouch;
}
/**
 * @alias module:interact.supportsPointerEvent
 *
 * @return {boolean} Whether or not the browser supports PointerEvents
 */


interact.supportsPointerEvent = supportsPointerEvent;

function supportsPointerEvent() {
  return ___browser_28["default"].supportsPointerEvent;
}
/**
 * Cancels all interactions (end events are not fired)
 *
 * @alias module:interact.stop
 *
 * @return {object} interact
 */


interact.stop = __stop_28;

function __stop_28() {
  for (var _i3 = 0; _i3 < scope.interactions.list.length; _i3++) {
    var _ref3;

    _ref3 = scope.interactions.list[_i3];
    var interaction = _ref3;
    interaction.stop();
  }

  return interact;
}
/**
 * Returns or sets the distance the pointer must be moved before an action
 * sequence occurs. This also affects tolerance for tap events.
 *
 * @alias module:interact.pointerMoveTolerance
 *
 * @param {number} [newValue] The movement from the start position must be greater than this value
 * @return {interact | number}
 */


interact.pointerMoveTolerance = pointerMoveTolerance;

function pointerMoveTolerance(newValue) {
  if (__utils_28.is.number(newValue)) {
    scope.interactions.pointerMoveTolerance = newValue;
    return interact;
  }

  return scope.interactions.pointerMoveTolerance;
}

scope.addListeners({
  'interactable:unset': function interactableUnset(_ref4) {
    var interactable = _ref4.interactable;
    scope.interactables.list.splice(scope.interactables.list.indexOf(interactable), 1); // Stop related interactions when an Interactable is unset

    for (var _i4 = 0; _i4 < scope.interactions.list.length; _i4++) {
      var _ref5;

      _ref5 = scope.interactions.list[_i4];
      var interaction = _ref5;

      if (interaction.interactable === interactable && interaction.interacting() && !interaction._ending) {
        interaction.stop();
      }
    }
  }
});

interact.addDocument = function (doc, options) {
  return scope.addDocument(doc, options);
};

interact.removeDocument = function (doc) {
  return scope.removeDocument(doc);
};

scope.interact = interact;
var ___default_28 = interact;
_$interact_28["default"] = ___default_28;

var _$interact_27 = {};
"use strict";

function ___typeof_27(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_27 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_27 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_27(obj); }

Object.defineProperty(_$interact_27, "__esModule", {
  value: true
});
_$interact_27.init = __init_27;
Object.defineProperty(_$interact_27, "autoScroll", {
  enumerable: true,
  get: function get() {
    return _index2["default"];
  }
});
Object.defineProperty(_$interact_27, "interactablePreventDefault", {
  enumerable: true,
  get: function get() {
    return _interactablePreventDefault["default"];
  }
});
Object.defineProperty(_$interact_27, "inertia", {
  enumerable: true,
  get: function get() {
    return _index5["default"];
  }
});
Object.defineProperty(_$interact_27, "modifiers", {
  enumerable: true,
  get: function get() {
    return ___base_27["default"];
  }
});
Object.defineProperty(_$interact_27, "reflow", {
  enumerable: true,
  get: function get() {
    return _index8["default"];
  }
});
Object.defineProperty(_$interact_27, "interact", {
  enumerable: true,
  get: function get() {
    return _interact["default"];
  }
});
_$interact_27.pointerEvents = _$interact_27.actions = _$interact_27["default"] = void 0;

var actions = ___interopRequireWildcard_27(_$actions_5);

_$interact_27.actions = actions;

var _index2 = ___interopRequireDefault_27(_$autoScroll_7);

var autoStart = ___interopRequireWildcard_27(_$autoStart_12);

var _interactablePreventDefault = ___interopRequireDefault_27(_$interactablePreventDefault_21);

var _index4 = ___interopRequireDefault_27(_$devTools_25);

var _index5 = ___interopRequireDefault_27(_$inertia_26);

var ___base_27 = ___interopRequireDefault_27(_$base_30);

var modifiers = ___interopRequireWildcard_27(_$modifiers_31);

var __pointerEvents_27 = ___interopRequireWildcard_27(_$pointerEvents_42);

_$interact_27.pointerEvents = __pointerEvents_27;

var _index8 = ___interopRequireDefault_27(_$reflow_44);

var _interact = ___interopRequireWildcard_27(_$interact_28);

function ___interopRequireDefault_27(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_27() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_27 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_27(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_27(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_27(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function __init_27(window) {
  _interact.scope.init(window);

  _interact["default"].use(_interactablePreventDefault["default"]); // pointerEvents


  _interact["default"].use(__pointerEvents_27); // inertia


  _interact["default"].use(_index5["default"]); // snap, resize, etc.


  _interact["default"].use(___base_27["default"]); // autoStart, hold


  _interact["default"].use(autoStart); // drag and drop, resize, gesture


  _interact["default"].use(actions); // for backwrads compatibility


  for (var type in modifiers) {
    var _modifiers$type = modifiers[type],
        _defaults = _modifiers$type._defaults,
        _methods = _modifiers$type._methods;
    _defaults._methods = _methods;
    _interact.scope.defaults.perAction[type] = _defaults;
  } // autoScroll


  _interact["default"].use(_index2["default"]); // reflow


  _interact["default"].use(_index8["default"]); // eslint-disable-next-line no-undef


  if (undefined !== 'production') {
    _interact["default"].use(_index4["default"]);
  }

  return _interact["default"];
} // eslint-disable-next-line no-undef


_interact["default"].version = "1.7.2";
var ___default_27 = _interact["default"];
_$interact_27["default"] = ___default_27;

var _$types_45 = {};
/// <reference path="./types.d.ts" />
"use strict";

var _$grid_63 = {};
"use strict";

Object.defineProperty(_$grid_63, "__esModule", {
  value: true
});
_$grid_63["default"] = void 0;

function ___slicedToArray_63(arr, i) { return ___arrayWithHoles_63(arr) || ___iterableToArrayLimit_63(arr, i) || ___nonIterableRest_63(); }

function ___nonIterableRest_63() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function ___iterableToArrayLimit_63(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ___arrayWithHoles_63(arr) { if (Array.isArray(arr)) return arr; }

function createGrid(grid) {
  var coordFields = [['x', 'y'], ['left', 'top'], ['right', 'bottom'], ['width', 'height']].filter(function (_ref) {
    var _ref2 = ___slicedToArray_63(_ref, 2),
        xField = _ref2[0],
        yField = _ref2[1];

    return xField in grid || yField in grid;
  });

  var gridFunc = function snapGrid(x, y) {
    var range = grid.range,
        _grid$limits = grid.limits,
        limits = _grid$limits === void 0 ? {
      left: -Infinity,
      right: Infinity,
      top: -Infinity,
      bottom: Infinity
    } : _grid$limits,
        _grid$offset = grid.offset,
        offset = _grid$offset === void 0 ? {
      x: 0,
      y: 0
    } : _grid$offset;
    var result = {
      range: range
    };

    for (var _i2 = 0; _i2 < coordFields.length; _i2++) {
      var _ref3;

      _ref3 = coordFields[_i2];

      var _ref4 = _ref3,
          _ref5 = ___slicedToArray_63(_ref4, 2),
          xField = _ref5[0],
          yField = _ref5[1];

      var gridx = Math.round((x - offset.x) / grid[xField]);
      var gridy = Math.round((y - offset.y) / grid[yField]);
      result[xField] = Math.max(limits.left, Math.min(limits.right, gridx * grid[xField] + offset.x));
      result[yField] = Math.max(limits.top, Math.min(limits.bottom, gridy * grid[yField] + offset.y));
    }

    return result;
  };

  gridFunc._isSnapGrid = true;
  gridFunc.grid = grid;
  gridFunc.coordFields = coordFields;
  return gridFunc;
}

var ___default_63 = createGrid;
_$grid_63["default"] = ___default_63;

var _$snappers_64 = {};
"use strict";

Object.defineProperty(_$snappers_64, "__esModule", {
  value: true
});
Object.defineProperty(_$snappers_64, "grid", {
  enumerable: true,
  get: function get() {
    return _grid["default"];
  }
});

var _grid = ___interopRequireDefault_64(_$grid_63);

function ___interopRequireDefault_64(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _$interactjs_29 = {};
"use strict";

Object.defineProperty(_$interactjs_29, "__esModule", {
  value: true
});
_$interactjs_29.init = __init_29;
_$interactjs_29["default"] = void 0;

var ___index_29 = ___interopRequireWildcard_29(_$interact_27);

var __modifiers_29 = ___interopRequireWildcard_29(_$modifiers_31);

_$types_45;

var ___extend_29 = ___interopRequireDefault_29(_$extend_52);

var snappers = ___interopRequireWildcard_29(_$snappers_64);

function ___interopRequireDefault_29(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ___getRequireWildcardCache_29() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_29 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_29(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_29(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_29(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___typeof_29(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_29 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_29 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_29(obj); }

if ((typeof window === "undefined" ? "undefined" : ___typeof_29(window)) === 'object' && !!window) {
  __init_29(window);
}

function __init_29(win) {
  (0, ___index_29.init)(win);
  return ___index_29["default"].use({
    id: 'interactjs',
    install: function install() {
      ___index_29["default"].modifiers = (0, ___extend_29["default"])({}, __modifiers_29);
      ___index_29["default"].snappers = snappers;
      ___index_29["default"].createSnapGrid = ___index_29["default"].snappers.grid;
    }
  });
}

var ___default_29 = ___index_29["default"];
_$interactjs_29["default"] = ___default_29;

var _$index_66 = { exports: {} };
"use strict";

Object.defineProperty(_$index_66.exports, "__esModule", {
  value: true
});
var _exportNames = {};
_$index_66.exports["default"] = void 0;

var ___index_66 = ___interopRequireWildcard_66(_$interactjs_29);

Object.keys(___index_66).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(_$index_66.exports, key, {
    enumerable: true,
    get: function get() {
      return ___index_66[key];
    }
  });
});

function ___getRequireWildcardCache_66() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); ___getRequireWildcardCache_66 = function _getRequireWildcardCache() { return cache; }; return cache; }

function ___interopRequireWildcard_66(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || ___typeof_66(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = ___getRequireWildcardCache_66(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ___typeof_66(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ___typeof_66 = function _typeof(obj) { return typeof obj; }; } else { ___typeof_66 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ___typeof_66(obj); }

if (( false ? undefined : ___typeof_66(_$index_66)) === 'object' && !!_$index_66) {
  _$index_66.exports = ___index_66["default"];
}

___index_66["default"]["default"] = ___index_66["default"] // tslint:disable-line no-string-literal
;
___index_66["default"].init = ___index_66.init; // tslint:disable-line no-string-literal

var ___default_66 = ___index_66["default"];
_$index_66.exports["default"] = ___default_66;

_$index_66 = _$index_66.exports
return _$index_66;

});


//# sourceMappingURL=interact.js.map


/***/ }),

/***/ "fca0":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__("5ca1");
var _isFinite = __webpack_require__("7726").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-grid-layout.common.js.map

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8d7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-refresh",
  "use": "icon-refresh-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-refresh\"><g fill-rule=\"nonzero\" fill=\"#666\"><path d=\"M14 8A6 6 0 0 0 3.372 4.18a.5.5 0 1 0 .771.638A5 5 0 0 1 13 8a.5.5 0 1 0 1 0zM2 8a6 6 0 0 0 10.549 3.912.5.5 0 1 0-.758-.652A5 5 0 0 1 3 8a.5.5 0 0 0-1 0z\" /><path d=\"M4 1.5V4h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0zm8 13v-2.502H9.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5V14.5a.5.5 0 1 1-1 0z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "93bf":
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v4.2.1 - 2019-07-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			return new Promise(function (resolve, reject) {
				var request = fn.requestFullscreen;

				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				elem = elem || document.documentElement;

				var promise;

				// Work around Safari 5.1 bug: reports support for
				// keyboard in fullscreen even though it doesn't.
				// Browser sniffing, since the alternative with
				// setTimeout is even worse.
				if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
					promise = elem[request]();
				} else {
					promise = elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
				}

				Promise.resolve(promise).catch(reject);
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				document[fn.exitFullscreen]();

				this.on('change', onFullScreenExit);
			}.bind(this));
		},
		toggle: function (elem) {
			return this.isFullscreen ? this.exit() : this.request(elem);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
		// TODO: remove this in the next major version
		module.exports.default = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "9a90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true

function trim (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

var Transition = (function () {
  function Transition () {
    _classCallCheck(this, Transition)
  }

  Transition.prototype.beforeEnter = function beforeEnter (el) {
    (0, addClass)(el, 'collapse-transition')
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  }

  Transition.prototype.enter = function enter (el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    el.style.overflow = 'hidden'
  }

  Transition.prototype.afterEnter = function afterEnter (el) {
    // for safari: remove class then reset height is necessary
    (0, removeClass)(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  }

  Transition.prototype.beforeLeave = function beforeLeave (el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  }

  Transition.prototype.leave = function leave (el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      (0, addClass)(el, 'collapse-transition')
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  }

  Transition.prototype.afterLeave = function afterLeave (el) {
    (0, removeClass)(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }

  return Transition
}())

exports.default = {
  name: 'ElCollapseTransition',
  functional: true,
  render: function render (h, _ref) {
    var children = _ref.children

    var data = {
      on: new Transition()
    }

    return h('transition', data, children)
  }
}


/***/ }),

/***/ "a2a5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".svg-icon[data-v-24093ca3]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}", ""]);

// exports


/***/ }),

/***/ "a3bf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c963");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2157317c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a675":
/***/ (function(module, exports, __webpack_require__) {

const req = __webpack_require__("f1df")
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)


/***/ }),

/***/ "b62c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-grid-item.vue-grid-placeholder{background:#7cbeff!important;opacity:.2;-webkit-transition-duration:.1s;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body.no-overflow{overflow:hidden;position:fixed;width:100%}.smartwidget{background:#fff;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #ebeef5;width:100%;-webkit-transition:.3s;transition:.3s}.smartwidget.is-always-shadow,.smartwidget.is-hover-shadow:hover{-webkit-box-shadow:0 0 10px 0 #e9e9e9;box-shadow:0 0 10px 0 #e9e9e9}.smartwidget.is-never-shadow{-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.smartwidget .widget-header{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:48px}.smartwidget .widget-header h2,.smartwidget .widget-header h4{display:inline-block;position:relative;width:auto;margin:0;font-weight:400;letter-spacing:0}.smartwidget .widget-header h2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px}.smartwidget .widget-header h2 .widget-header__title{overflow:hidden;word-break:break-all;text-overflow:ellipsis;white-space:nowrap}.smartwidget .widget-header h4{font-size:12px;color:#777}.smartwidget .widget-header .widget-header__prefix{background:#0076db;width:2px;height:16px;margin-left:10px}.smartwidget .widget-header .widget-header__toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0}.smartwidget .widget-header .widget-header__toolbar a{display:inline-block;text-decoration:none;text-align:center;height:24px;line-height:28px;padding:0;margin:0;color:#333;min-width:35px;position:relative;font-family:Arial,Helvetica,sans-serif;border-left:1px solid rgba(0,0,0,.09)}.smartwidget .widget-body{will-change:height;position:relative;overflow:hidden}.smartwidget .widget-body .widget-body__content.fixed-height{overflow-y:scroll}.smartwidget .widget-body .widget-body__footer{position:relative}.smartwidget .widget-body .widget-body__footer.has-group{left:0;bottom:0;width:100%}.smartwidget .widget-body.is-collapse{-webkit-transition:height .3s ease-in-out,padding-top .3s ease-in-out,padding-bottom .3s ease-in-out;transition:height .3s ease-in-out,padding-top .3s ease-in-out,padding-bottom .3s ease-in-out}.smartwidget.smartwidget-fullscreen{position:fixed;height:100%;width:100%;top:0;left:0;z-index:1050}.smartwidget.smartwidget-fullscreen .widget-header{cursor:default}", ""]);

// exports


/***/ }),

/***/ "b63a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".smart-widget__loading-mask{position:absolute;z-index:2000;background-color:hsla(0,0%,100%,.9);margin:0;top:0;right:0;bottom:0;left:0;-webkit-transition:opacity .3s;transition:opacity .3s}.smart-widget__loading-mask .loading-spinner{top:50%;margin-top:-21px;width:100%;text-align:center;position:absolute}.smart-widget__loading-mask .circular{width:42px;height:42px;-webkit-animation:loading-rotate 2s linear infinite;animation:loading-rotate 2s linear infinite}.smart-widget__loading-mask .path{-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#5282e4;stroke-linecap:round}@-webkit-keyframes loading-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}", ""]);

// exports


/***/ }),

/***/ "bc38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_24093ca3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc44");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_24093ca3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_24093ca3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_24093ca3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c147":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-unfullscreen",
  "use": "icon-unfullscreen-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-unfullscreen\"><path d=\"M6 10.704V13.5a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.79l-3.144 3.147a.5.5 0 1 0 .708.706L6 10.703zm4-5.411V2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1h-2.793l3.147-3.146a.5.5 0 0 0-.708-.708L10 5.293zM13 9.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1H13V9.5zm-10-3a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H3v3.5z\" fill=\"#666\" fill-rule=\"evenodd\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c963":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-grid-layout{background:transparent}.vue-grid-layout .smartwidget{height:inherit;width:inherit}.vue-grid-layout .smartwidget.smartwidget-fullscreen{height:100%;width:100%}", ""]);

// exports


/***/ }),

/***/ "cc44":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a2a5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("334f05a5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "dd67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e017");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("21a1");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-expand",
  "use": "icon-expand-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-expand\"><defs><style type=\"text/css\"></style></defs><path d=\"M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z\" fill=\"#666666\" p-id=\"4567\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "e017":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e94a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b63a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("fd41a2ea", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f1df":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./collapse.svg": "1d80",
	"./expand.svg": "dd67",
	"./fullscreen.svg": "1ac9",
	"./refresh.svg": "8d7e",
	"./unfullscreen.svg": "c147"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = "f1df";

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/plugins/svg-icon.js
var svg_icon = __webpack_require__("a675");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f603cf0a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/SmartWidgetGrid.vue?vue&type=template&id=68d0a356&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('grid-layout',_vm._b({on:{"layout-updated":_vm.layoutUpdatedEvent}},'grid-layout',_vm.layoutAttribute,false),_vm._l((_vm.layout),function(item){return _c('grid-item',_vm._b({key:item.i,attrs:{"dragIgnoreFrom":".widget-body"},on:{"move":_vm.moveEvent,"resize":_vm.resizeEvent,"moved":_vm.movedEvent,"resized":_vm.resizedEvent,"container-resized":_vm.containerResizedEvent}},'grid-item',item,false),[_vm._t(item.i)],2)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/SmartWidgetGrid.vue?vue&type=template&id=68d0a356&

// EXTERNAL MODULE: ./node_modules/vue-grid-layout/dist/vue-grid-layout.common.js
var vue_grid_layout_common = __webpack_require__("7be8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/SmartWidgetGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SmartWidgetGridvue_type_script_lang_js_ = ({
  name: 'SmartWidgetGrid',
  components: {
    GridLayout: vue_grid_layout_common["GridLayout"],
    GridItem: vue_grid_layout_common["GridItem"]
  },
  provide () {
    return {
      layout: this.layout
    }
  },
  props: {
    layout: {
      type: Array,
      required: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    resizable: {
      type: Boolean,
      default: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    rowHeight: {
      type: Number,
      default: 48
    }
  },
  data () {
    return {
      layoutAttribute: {
        autoSize: true,
        layout: this.layout,
        colNum: this.colNum,
        rowHeight: this.rowHeight,
        margin: this.margin,
        isDraggable: this.draggable,
        isResizable: this.resizable,
        isMirrored: false,
        verticalCompact: true,
        useCssTransforms: true
      }
    }
  },
  methods: {
    layoutUpdatedEvent (newLayout) {
      this.$emit('layout-updated', newLayout)
    },
    moveEvent (i, newX, newY) {
      this.$emit('move', { i, newX, newY })
    },
    resizeEvent (i, newH, newW, newHPx, newWPx) {
      this.$emit('resize', { i, newH, newW, newHPx, newWPx })
    },
    movedEvent (i, newX, newY) {
      this.$emit('layout-updated', { i, newX, newY })
    },
    resizedEvent (i, newH, newW, newHPx, newWPx) {
      this.$emit('layout-updated', { i, newH, newW, newHPx, newWPx })
    },
    containerResizedEvent (i, newH, newW, newHPx, newWPx) {
      this.$emit('container-resized', { i, newH, newW, newHPx, newWPx })
    }
  }
});

// CONCATENATED MODULE: ./src/packages/SmartWidgetGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_SmartWidgetGridvue_type_script_lang_js_ = (SmartWidgetGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/SmartWidgetGrid.vue?vue&type=style&index=0&lang=less&
var SmartWidgetGridvue_type_style_index_0_lang_less_ = __webpack_require__("0066");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/packages/SmartWidgetGrid.vue






/* normalize component */

var component = normalizeComponent(
  packages_SmartWidgetGridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SmartWidgetGrid = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f603cf0a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/SmartWidget.vue?vue&type=template&id=1dcfc6db&
var SmartWidgetvue_type_template_id_1dcfc6db_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"smartwidget",class:_vm.smartWidgetClass,style:(_vm.smartWidgetStyle),attrs:{"id":_vm.smartWidgetId},on:{"mouseover":_vm.handleMouseover,"mouseout":function($event){_vm.smartWidgetStyle={}}}},[(!_vm.simple)?_c('div',{staticClass:"widget-header",style:(_vm.widgetHeaderHeight)},[(_vm.$slots.title)?_c('div',[_vm._t("title")],2):[_c('h2',[_c('span',{staticClass:"widget-header__title",style:(_vm.widgetTitleStyle),domProps:{"textContent":_vm._s(_vm.title)}})]),(_vm.subTitle!=='')?_c('h4',[_c('span',{staticClass:"widget-header__subtitle",domProps:{"textContent":_vm._s(_vm.subTitle)}})]):_vm._e()],_c('div',{staticClass:"widget-header__toolbar"},[(!_vm.isHasGroup && _vm.collapse && !_vm.isFullScreen)?_c('a',{attrs:{"href":"#"},on:{"click":function($event){_vm.isCollapsed=!_vm.isCollapsed}}},[_c('svg-icon',{attrs:{"icon-name":_vm.isCollapsed ? 'expand' : 'collapse'}})],1):_vm._e(),(_vm.fullscreen)?_c('a',{attrs:{"href":"#"},on:{"click":_vm.onChooseAction}},[_c('svg-icon',{attrs:{"icon-name":_vm.isFullScreen ? 'unfullscreen' : 'fullscreen'}})],1):_vm._e(),(_vm.refresh && !_vm.isFullScreen)?_c('a',{attrs:{"href":"#"},on:{"click":function($event){return _vm.$emit('on-refresh')}}},[_c('svg-icon',{attrs:{"icon-name":"refresh"}})],1):_vm._e(),_vm._t("toolbar")],2)],2):_vm._e(),_c('collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCollapsed),expression:"!isCollapsed"}],ref:"widgetBody",class:[
        _vm.simple ? 'widget-body-simple': 'widget-body',
        { 'is-collapse': _vm.isCollapsed }
      ]},[_c('div',{ref:"widgetBodyEditbox",staticClass:"widget-body__editbox"},[_vm._t("editbox")],2),_c('div',{ref:"widgetBodyContent",staticClass:"widget-body__content",class:{'fixed-height': _vm.fixedHeight},style:(_vm.widgetBodyContentStyle)},[_vm._t("default",null,{"contentH":_vm.contentH})],2),_c('div',{ref:"widgetBodyFooter",staticClass:"widget-body__footer",class:{'has-group': _vm.isHasGroup}},[_vm._t("footer")],2),(_vm.loading)?_c('loading-mask'):_vm._e()],1)])],1)}
var SmartWidgetvue_type_template_id_1dcfc6db_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/SmartWidget.vue?vue&type=template&id=1dcfc6db&

// EXTERNAL MODULE: ./node_modules/screenfull/dist/screenfull.js
var screenfull = __webpack_require__("93bf");
var screenfull_default = /*#__PURE__*/__webpack_require__.n(screenfull);

// CONCATENATED MODULE: ./src/utils/index.js
// get random uuid
function generateUUID () {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f603cf0a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingMask.vue?vue&type=template&id=64df4e6c&
var LoadingMaskvue_type_template_id_64df4e6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"smart-widget__loading-mask"},[_c('div',{staticClass:"loading-spinner"},[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})])])])}
var LoadingMaskvue_type_template_id_64df4e6c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingMask.vue?vue&type=template&id=64df4e6c&

// EXTERNAL MODULE: ./src/components/LoadingMask.vue?vue&type=style&index=0&lang=less&
var LoadingMaskvue_type_style_index_0_lang_less_ = __webpack_require__("69ec");

// CONCATENATED MODULE: ./src/components/LoadingMask.vue

var script = {}



/* normalize component */

var LoadingMask_component = normalizeComponent(
  script,
  LoadingMaskvue_type_template_id_64df4e6c_render,
  LoadingMaskvue_type_template_id_64df4e6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoadingMask = (LoadingMask_component.exports);
// EXTERNAL MODULE: ./src/components/collapse-transition.js
var collapse_transition = __webpack_require__("9a90");
var collapse_transition_default = /*#__PURE__*/__webpack_require__.n(collapse_transition);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f603cf0a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SvgIcon.vue?vue&type=template&id=24093ca3&scoped=true&
var SvgIconvue_type_template_id_24093ca3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({class:_vm.svgClass,attrs:{"aria-hidden":"true"}},_vm.$listeners),[_c('use',{attrs:{"xlink:href":_vm.iconClass}})])}
var SvgIconvue_type_template_id_24093ca3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=template&id=24093ca3&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SvgIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var SvgIconvue_type_script_lang_js_ = ({
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass () {
      return `#icon-${this.iconName}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SvgIconvue_type_script_lang_js_ = (SvgIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SvgIcon.vue?vue&type=style&index=0&id=24093ca3&scoped=true&lang=css&
var SvgIconvue_type_style_index_0_id_24093ca3_scoped_true_lang_css_ = __webpack_require__("bc38");

// CONCATENATED MODULE: ./src/components/SvgIcon.vue






/* normalize component */

var SvgIcon_component = normalizeComponent(
  components_SvgIconvue_type_script_lang_js_,
  SvgIconvue_type_template_id_24093ca3_scoped_true_render,
  SvgIconvue_type_template_id_24093ca3_scoped_true_staticRenderFns,
  false,
  null,
  "24093ca3",
  null
  
)

/* harmony default export */ var SvgIcon = (SvgIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/SmartWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// loading mask

// collapse transition

// svg icon


/* harmony default export */ var SmartWidgetvue_type_script_lang_js_ = ({
  name: 'SmartWidget',
  components: {
    LoadingMask: LoadingMask,
    CollapseTransition: collapse_transition_default.a,
    SvgIcon: SvgIcon
  },
  inject: {
    layout: {
      default: []
    }
  },
  props: {
    title: String,
    subTitle: String,
    // set `widget-body__content` padding style
    padding: { type: [Number, Array], default: () => [12, 20] },
    // set `widget-header__title` padding style
    titlePadding: { type: Number, default: 20 },
    // toggle widget mode
    simple: { type: Boolean, default: false },
    // toggle loading mask
    loading: { type: Boolean, default: false },
    // toggle fullscreen button
    fullscreen: { type: Boolean, default: false },
    // toggle collapse button
    collapse: { type: Boolean, default: false },
    // toggle refresh button
    refresh: { type: Boolean, default: false },
    // toggle `widget-body__content` fixed height
    fixedHeight: { type: Boolean, default: false },
    // when to show card shadows
    shadow: { type: String, default: 'always' },
    // the card translateY style
    translateY: { type: Number, default: 0 }
  },
  data () {
    return {
      isFullScreen: false,
      isCollapsed: false,
      isFullScreenCollapsed: false, // control collapsed state when click fullscreen button
      widgetBodyOffsetHeight: 'auto',
      widgetBodyOldHeight: 0,
      widgetBodyEditBoxH: 0,
      widgetBodyFooterH: 0,
      smartWidgetStyle: {}
    }
  },
  computed: {
    smartWidgetClass () {
      return {
        'smartwidget-fullscreen': this.isFullScreen,
        'smartwidget-collapsed': this.isCollapsed,
        'is-always-shadow': this.shadow === 'always',
        'is-hover-shadow': this.shadow === 'hover',
        'is-never-shadow': this.shadow === 'never'
      }
    },
    bodyContentPadding () {
      const padding = typeof (this.padding) === 'number' ? Array.of(this.padding) : this.padding
      const joinPadding = padding.join('px ')
      return joinPadding.padEnd(joinPadding.length + 2, 'px')
    },
    widgetHeaderHeight () {
      return {
        'height': `${this.rowHeight}px`,
        'line-height': `${this.rowHeight}px`
      }
    },
    widgetBodyContentStyle () {
      return {
        padding: this.bodyContentPadding,
        height: this.isHasGroup ? `${this.contentH}px` : ''
      }
    },
    widgetTitleStyle () {
      return {
        padding: `0 ${this.titlePadding}px 0 ${this.titlePadding}px`
      }
    },
    rowHeight () {
      return this.isHasGroup ? this.$parent.rowHeight : 48
    },
    smartWidgetId: _ => `smart-widget-${generateUUID()}`,
    childLayout: vm => vm.layout.find(v => v.i === vm.$parent.i),
    isHasGroup: vm => Boolean(vm.$parent.i),
    contentH: vm => vm.getContentH()
  },
  methods: {
    onChooseAction () {
      if (this.isHasGroup) {
        this.handleScreenfull()
      } else {
        this.handlefullScreen()
      }
    },
    handlefullScreen () {
      // control collapsed state
      if (this.isCollapsed) {
        this.isFullScreenCollapsed = this.isCollapsed
        this.isCollapsed = !this.isCollapsed
      }
      if (this.isFullScreen && this.isFullScreenCollapsed) {
        this.isCollapsed = this.isFullScreenCollapsed
      }
      this.isFullScreen = !this.isFullScreen
      // calculate widge-body height
      if (this.isFullScreen) {
        this.$nextTick(_ => {
          this.widgetBodyOldHeight = this.widgetBodyOffsetHeight
          const widgetBodyOffsetHeight = document.getElementById(this.smartWidgetId).offsetHeight - 48
          this.widgetBodyOffsetHeight = widgetBodyOffsetHeight
        })
        document.body.classList.add('no-overflow')
      } else {
        // restore widget-body height
        this.widgetBodyOffsetHeight = this.widgetBodyOldHeight
        // restore collapsed state
        this.isFullScreenCollapsed = this.isFullScreen
        document.body.removeAttribute('class', 'no-overflow')
      }
      this.$emit('on-fullscreen', this.isFullScreen)
    },
    handleScreenfull () {
      if (this.isCollapsed) {
        this.isFullScreenCollapsed = this.isCollapsed
        this.isCollapsed = !this.isCollapsed
      }
      if (this.isFullScreen && this.isFullScreenCollapsed) {
        this.isCollapsed = this.isFullScreenCollapsed
      }
      screenfull_default.a.enabled && screenfull_default.a.toggle(this.$el)
    },
    getPaddingH () {
      let paddingH = 0
      const padding = typeof (this.padding) === 'number' ? Array.of(this.padding) : this.padding
      switch (padding.length) {
        case 1:
        case 2:
          paddingH = padding[0] * 2
          break
        case 3:
        case 4:
          paddingH = padding[0] + padding[2]
          break
      }
      return paddingH
    },
    getWidgetBodyH () {
      let widgetBodyH = 0
      if (this.isHasGroup) {
        const { innerH, margin, rowHeight } = this.$parent
        const [firstMargin] = margin
        // calculate widget height, grid row default height = (rowHeight + firstMargin) * innerH - firstMargin
        const widgetH = (rowHeight + firstMargin) * innerH - firstMargin
        widgetBodyH = widgetH - rowHeight
      } else {
        widgetBodyH = this.widgetBodyOffsetHeight
      }
      return widgetBodyH
    },
    getContentH () {
      const contentH = this.getWidgetBodyH() - this.getPaddingH() - this.widgetBodyEditBoxH - this.widgetBodyFooterH - 1
      return contentH > 0 ? contentH : this.$parent.rowHeight
    },
    handleMouseover () {
      this.smartWidgetStyle = {
        'transform': `translateY(${-this.translateY}px)`
      }
    }
  },
  created () {
    if (screenfull_default.a.enabled) {
      screenfull_default.a.on('change', () => {
        this.isFullScreen = screenfull_default.a.isFullscreen
        if (!this.isFullScreen) {
          this.isFullScreenCollapsed = this.isFullScreen
        }
      })
    }
  },
  mounted () {
    this.$nextTick(_ => {
      this.widgetBodyOffsetHeight = this.$refs.widgetBody.offsetHeight
      this.widgetBodyEditBoxH = this.$slots.editbox ? this.$refs.widgetBodyEditbox.offsetHeight : 0
      this.widgetBodyFooterH = this.$slots.footer ? this.$refs.widgetBodyFooter.offsetHeight : 0
    })
  }
});

// CONCATENATED MODULE: ./src/packages/SmartWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_SmartWidgetvue_type_script_lang_js_ = (SmartWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/SmartWidget.vue?vue&type=style&index=0&lang=less&
var SmartWidgetvue_type_style_index_0_lang_less_ = __webpack_require__("31cf");

// CONCATENATED MODULE: ./src/packages/SmartWidget.vue






/* normalize component */

var SmartWidget_component = normalizeComponent(
  packages_SmartWidgetvue_type_script_lang_js_,
  SmartWidgetvue_type_template_id_1dcfc6db_render,
  SmartWidgetvue_type_template_id_1dcfc6db_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SmartWidget = (SmartWidget_component.exports);
// CONCATENATED MODULE: ./src/index.js




const components = [
  SmartWidgetGrid,
  SmartWidget
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* harmony default export */ var src = (install);



if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport SmartWidgetGrid */__webpack_require__.d(__webpack_exports__, "SmartWidgetGrid", function() { return SmartWidgetGrid; });
/* concated harmony reexport SmartWidget */__webpack_require__.d(__webpack_exports__, "SmartWidget", function() { return SmartWidget; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });