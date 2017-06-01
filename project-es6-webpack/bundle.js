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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(5);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty = __webpack_require__(5);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.bindModelInput = bindModelInput;
exports.$on = $on;
exports.qs = qs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindModelInput(obj, property, domElem) {
	(0, _defineProperty2.default)(obj, property, {
		get: function get() {
			return domElem.checked;
		},
		set: function set(newValue) {
			return domElem.checked = newValue;
		},
		configurable: true
	});
}

function $on(event, element, callback) {
	element.addEventListener(event, callback);
}

function qs(selector, scope) {
	return (scope || document).querySelector(selector);
}

// export dispatcher

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(24)
  , toPrimitive    = __webpack_require__(26)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = function () {
	function Data() {
		(0, _classCallCheck3.default)(this, Data);
	}

	(0, _createClass3.default)(Data, [{
		key: "data",
		get: function get() {
			return {
				documents: {
					items: [{
						title: "Article Name - 1",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 2",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 3",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}]
				},
				links: {
					items: [{
						title: "Article Name - 15",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 16",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 17",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 18",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}]
				},
				labs: {
					items: [{
						title: "Article Name - 100",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 101",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 102",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}]
				}
			};
		}
	}]);
	return Data;
}();

exports.default = Data;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(3);

var _articleItem = __webpack_require__(15);

var _articleItem2 = _interopRequireDefault(_articleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionForm = function () {
	function SelectionForm(data, element, template, store) {
		var _this = this;

		(0, _classCallCheck3.default)(this, SelectionForm);

		this.domElement = element;
		this.items = data.items.map(function (item, index) {
			return new _articleItem2.default(item, index, _this.domElement.id);
		});
		this.template = template;
		this.store = store;
		this.init();
	}

	(0, _createClass3.default)(SelectionForm, [{
		key: 'init',
		value: function init() {
			this.toggleButton = (0, _helpers.qs)('.add-all', this.domElement);
			this.customEvent = new Event('go');
			this.render();
			this.handleEvents();
			var chekboxArr = this.domElement.querySelectorAll('.checkbox');
			this.items.forEach(function (item, i) {
				(0, _helpers.bindModelInput)(item, 'checked', chekboxArr[i]);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			(0, _helpers.qs)('.list-group', this.domElement).innerHTML = this.template.template(this.items);
		}
	}, {
		key: 'handleEvents',
		value: function handleEvents() {
			(0, _helpers.$on)('change', this.domElement, this.toggleCheckbox.bind(this));
			(0, _helpers.$on)('click', this.toggleButton, this.toggleAll.bind(this));
		}
	}, {
		key: 'toggleCheckbox',
		value: function toggleCheckbox(event) {
			var i = event.target.dataset.id;

			this.items[i].checked ? this.store.add(this.items[i]) : this.store.remove(this.items[i]);

			this.getAllCheckboxesState() ? this.toggleButton.value = 'REMOVE ALL' : this.toggleButton.value = 'ADD ALL';

			sendLetter.dispatchEvent(this.customEvent);
		}
	}, {
		key: 'toggleAll',
		value: function toggleAll() {
			var _this2 = this;

			if (this.getAllCheckboxesState()) {
				this.items.forEach(function (item) {
					item.checked = false;
					_this2.store.remove(item);
				});
				this.toggleButton.value = 'ADD ALL';
			} else if (!this.getAllCheckboxesState()) {
				this.items.forEach(function (item) {
					item.checked = true;
					_this2.store.add(item);
				});
				this.toggleButton.value = 'REMOVE ALL';
			}

			sendLetter.dispatchEvent(this.customEvent);
		}
	}, {
		key: 'getAllCheckboxesState',
		value: function getAllCheckboxesState() {
			return this.items.every(function (item) {
				return item.checked;
			});
		}
	}]);
	return SelectionForm;
}();

exports.default = SelectionForm;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SendForm = function () {
	function SendForm(element, template, store) {
		(0, _classCallCheck3.default)(this, SendForm);

		this.domElement = element;
		this.template = template;
		this.store = store;
		this.init();
	}

	(0, _createClass3.default)(SendForm, [{
		key: 'init',
		value: function init() {
			this.domList = (0, _helpers.qs)('.items-list', this.domElement);
			(0, _helpers.$on)('go', this.domElement, this.refresh.bind(this));
			(0, _helpers.$on)('click', this.domList, this.removeItem.bind(this));
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			this.domList.innerHTML = this.template.templateOutput(this.store.data);
			this.counter();
		}
	}, {
		key: 'removeItem',
		value: function removeItem(event) {
			if (event.target.tagName === "INPUT") {
				//check if we click on trash-bin button
				var i = +event.target.parentNode.dataset.index;

				this.store.remove(this.store.data[i]);
				this.refresh();
			}
		}
	}, {
		key: 'counter',
		value: function counter() {
			(0, _helpers.qs)('.counter', this.domElement).innerHTML = this.store.data.length;
		}
	}]);
	return SendForm;
}();

exports.default = SendForm;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = function () {
	function Store() {
		(0, _classCallCheck3.default)(this, Store);

		this.data = [];
	}

	(0, _createClass3.default)(Store, [{
		key: "add",
		value: function add(data) {
			this.data.indexOf(data) === -1 && this.data.push(data); // check if item did not alredy exist in array and push if it is not.
		}
	}, {
		key: "remove",
		value: function remove(data) {
			var index = this.data.findIndex(function (item) {
				return data === item;
			});

			if (index !== undefined && index !== -1) {
				this.data.splice(index, 1);
			}
		}
	}]);
	return Store;
}();

exports.default = Store;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = function () {
	function Template() {
		(0, _classCallCheck3.default)(this, Template);
	}

	(0, _createClass3.default)(Template, [{
		key: 'template',
		value: function template(items) {
			return items.reduce(function (prev, curr) {
				return prev + ('<li class="list-item">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="checkbox" tabindex="0" data-id="' + curr.id + '">\n\t\t\t\t\t\t\t<span class="item-title">' + curr.data.title + '</span><br>\n\t\t\t\t\t\t\t<span>' + curr.data.subtext + '</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</li>');
			}, '');
		}
	}, {
		key: 'templateOutput',
		value: function templateOutput(items) {
			return items.reduce(function (prev, curr, index) {
				return prev + ('<li class="icon-result" data-index="' + index + '" data-type="' + curr.type + '">' + curr.data.title + ' - ' + curr.data.subtext + '\n\t\t\t\t\t\t<input type="button" class="trash-bin" tabindex="0">\n\t\t\t\t\t</li>');
			}, '');
		}
	}]);
	return Template;
}();

exports.default = Template;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleItem = function ArticleItem(data, index, type) {
	(0, _classCallCheck3.default)(this, ArticleItem);

	this.data = data;
	this.id = index;
	this.checked = false;
	this.type = type;
};

exports.default = ArticleItem;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(10);

var _data2 = _interopRequireDefault(_data);

var _store = __webpack_require__(13);

var _store2 = _interopRequireDefault(_store);

var _selectionForm = __webpack_require__(11);

var _selectionForm2 = _interopRequireDefault(_selectionForm);

var _sendForm = __webpack_require__(12);

var _sendForm2 = _interopRequireDefault(_sendForm);

var _template = __webpack_require__(14);

var _template2 = _interopRequireDefault(_template);

var _helpers = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {

	var documentsEl = (0, _helpers.qs)('.documents');
	var linksEl = (0, _helpers.qs)('.links');
	var labsEl = (0, _helpers.qs)('.labs');
	var sendFormEl = (0, _helpers.qs)('.send-letter');

	var data = new _data2.default().data;
	var store = new _store2.default();
	var template = new _template2.default();

	var documents = new _selectionForm2.default(data['documents'], documentsEl, template, store);
	var links = new _selectionForm2.default(data['links'], linksEl, template, store);
	var labs = new _selectionForm2.default(data['labs'], labsEl, template, store);
	var sendForm = new _sendForm2.default(sendFormEl, template, store);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , document = __webpack_require__(8).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(8)
  , core      = __webpack_require__(6)
  , ctx       = __webpack_require__(20)
  , hide      = __webpack_require__(23)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(25);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(7)(function(){
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(22);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', {defineProperty: __webpack_require__(9).f});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjNiNWYxYzI1ZGE4ZmQxNjBiZmUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZWxlY3Rpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZW5kLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXJ0aWNsZS1pdGVtLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJiaW5kTW9kZWxJbnB1dCIsIiRvbiIsInFzIiwib2JqIiwicHJvcGVydHkiLCJkb21FbGVtIiwiZ2V0IiwiY2hlY2tlZCIsInNldCIsIm5ld1ZhbHVlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJlbGVtZW50IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0b3IiLCJzY29wZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRhdGEiLCJkb2N1bWVudHMiLCJpdGVtcyIsInRpdGxlIiwic3VidGV4dCIsImxpbmtzIiwibGFicyIsIlNlbGVjdGlvbkZvcm0iLCJkYXRhIiwidGVtcGxhdGUiLCJzdG9yZSIsImRvbUVsZW1lbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsImluaXQiLCJ0b2dnbGVCdXR0b24iLCJjdXN0b21FdmVudCIsIkV2ZW50IiwicmVuZGVyIiwiaGFuZGxlRXZlbnRzIiwiY2hla2JveEFyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaSIsImlubmVySFRNTCIsInRvZ2dsZUNoZWNrYm94IiwiYmluZCIsInRvZ2dsZUFsbCIsInRhcmdldCIsImRhdGFzZXQiLCJhZGQiLCJyZW1vdmUiLCJnZXRBbGxDaGVja2JveGVzU3RhdGUiLCJ2YWx1ZSIsInNlbmRMZXR0ZXIiLCJkaXNwYXRjaEV2ZW50IiwiZXZlcnkiLCJTZW5kRm9ybSIsImRvbUxpc3QiLCJyZWZyZXNoIiwicmVtb3ZlSXRlbSIsInRlbXBsYXRlT3V0cHV0IiwiY291bnRlciIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwibGVuZ3RoIiwiU3RvcmUiLCJpbmRleE9mIiwicHVzaCIsImZpbmRJbmRleCIsInVuZGVmaW5lZCIsInNwbGljZSIsIlRlbXBsYXRlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJ0eXBlIiwiQXJ0aWNsZUl0ZW0iLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudHNFbCIsImxpbmtzRWwiLCJsYWJzRWwiLCJzZW5kRm9ybUVsIiwic2VuZEZvcm0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWEE7QUFDQTtBQUNBLG9FQUF1RSx5Q0FBMEMsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiM2I1ZjFjMjVkYThmZDE2MGJmZSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gYmluZE1vZGVsSW5wdXQob2JqLCBwcm9wZXJ0eSwgZG9tRWxlbSkge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3BlcnR5LCB7XHJcblx0XHRnZXQ6ICgpID0+IGRvbUVsZW0uY2hlY2tlZCxcclxuXHRcdHNldDogKG5ld1ZhbHVlKSA9PiBkb21FbGVtLmNoZWNrZWQgPSBuZXdWYWx1ZSxcclxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gJG9uKGV2ZW50LCBlbGVtZW50LCBjYWxsYmFjaykge1xyXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcXMoc2VsZWN0b3IsIHNjb3BlKSB7XHJcblx0cmV0dXJuIChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGlzcGF0Y2hlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hlbHBlcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZG9jdW1lbnRzOiB7XHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDNcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0bGlua3M6IHtcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTVcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTZcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTdcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAxOFwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsYWJzOiB7XHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTAwXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDEwMVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAxMDJcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGF0YS5qcyIsImltcG9ydCB7ICRvbiwgYmluZE1vZGVsSW5wdXQsIHFzIH0gZnJvbSAnLi9oZWxwZXJzJ1xyXG5pbXBvcnQgQXJ0aWNsZUl0ZW0gZnJvbSAnLi9hcnRpY2xlLWl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uRm9ybSB7XHJcblx0Y29uc3RydWN0b3IoZGF0YSwgZWxlbWVudCwgdGVtcGxhdGUsIHN0b3JlKSB7XHJcblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0dGhpcy5pdGVtcyA9IGRhdGEuaXRlbXMubWFwKCAoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuXHRuZXcgQXJ0aWNsZUl0ZW0oaXRlbSwgaW5kZXgsIHRoaXMuZG9tRWxlbWVudC5pZClcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHN0b3JlO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy50b2dnbGVCdXR0b24gPSBxcygnLmFkZC1hbGwnLCB0aGlzLmRvbUVsZW1lbnQpO1xyXG5cdFx0dGhpcy5jdXN0b21FdmVudCA9IG5ldyBFdmVudCgnZ28nKTtcclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHR0aGlzLmhhbmRsZUV2ZW50cygpO1xyXG5cdFx0bGV0IGNoZWtib3hBcnIgPSB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcblx0XHR0aGlzLml0ZW1zLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XHJcblx0XHRcdGJpbmRNb2RlbElucHV0KGl0ZW0sICdjaGVja2VkJywgY2hla2JveEFycltpXSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cXMoJy5saXN0LWdyb3VwJywgdGhpcy5kb21FbGVtZW50KS5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlLnRlbXBsYXRlKHRoaXMuaXRlbXMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlRXZlbnRzKCkge1xyXG5cdFx0JG9uKCdjaGFuZ2UnLCB0aGlzLmRvbUVsZW1lbnQsIHRoaXMudG9nZ2xlQ2hlY2tib3guYmluZCh0aGlzKSk7XHJcblx0XHQkb24oJ2NsaWNrJywgdGhpcy50b2dnbGVCdXR0b24sIHRoaXMudG9nZ2xlQWxsLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQ2hlY2tib3goZXZlbnQpIHtcclxuXHRcdGxldCBpID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblxyXG5cdFx0dGhpcy5pdGVtc1tpXS5jaGVja2VkXHJcblx0XHRcdD8gdGhpcy5zdG9yZS5hZGQodGhpcy5pdGVtc1tpXSlcclxuXHRcdFx0OiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLml0ZW1zW2ldKTtcclxuXHJcblx0XHR0aGlzLmdldEFsbENoZWNrYm94ZXNTdGF0ZSgpXHJcblx0XHRcdD8gdGhpcy50b2dnbGVCdXR0b24udmFsdWUgPSAnUkVNT1ZFIEFMTCdcclxuXHRcdFx0OiB0aGlzLnRvZ2dsZUJ1dHRvbi52YWx1ZSA9ICdBREQgQUxMJztcclxuXHJcblx0XHRzZW5kTGV0dGVyLmRpc3BhdGNoRXZlbnQodGhpcy5jdXN0b21FdmVudCk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVBbGwoKSB7XHJcblx0XHRpZiAodGhpcy5nZXRBbGxDaGVja2JveGVzU3RhdGUoKSkge1xyXG5cdFx0XHR0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5yZW1vdmUoaXRlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbi52YWx1ZSA9ICdBREQgQUxMJztcclxuXHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmdldEFsbENoZWNrYm94ZXNTdGF0ZSgpKSB7XHJcblx0XHRcdHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuYWRkKGl0ZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy50b2dnbGVCdXR0b24udmFsdWUgPSAnUkVNT1ZFIEFMTCc7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VuZExldHRlci5kaXNwYXRjaEV2ZW50KHRoaXMuY3VzdG9tRXZlbnQpO1xyXG5cdH1cclxuXHJcblx0Z2V0QWxsQ2hlY2tib3hlc1N0YXRlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXRlbXMuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQpXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2VsZWN0aW9uLWZvcm0uanMiLCJpbXBvcnQgeyAkb24sIHFzIH0gZnJvbSAnLi9oZWxwZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VuZEZvcm0ge1xyXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRlbXBsYXRlLCBzdG9yZSl7XHJcblx0XHR0aGlzLmRvbUVsZW1lbnQgID0gZWxlbWVudDtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMuc3RvcmUgPSBzdG9yZTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZG9tTGlzdCA9IHFzKCcuaXRlbXMtbGlzdCcsIHRoaXMuZG9tRWxlbWVudCk7XHJcblx0XHQkb24oJ2dvJywgdGhpcy5kb21FbGVtZW50LCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSk7XHJcblx0XHQkb24oJ2NsaWNrJywgdGhpcy5kb21MaXN0LCB0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzKSlcclxuXHR9XHJcblxyXG5cdHJlZnJlc2goKSB7XHJcblx0XHR0aGlzLmRvbUxpc3QuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZS50ZW1wbGF0ZU91dHB1dCh0aGlzLnN0b3JlLmRhdGEpO1xyXG5cdFx0dGhpcy5jb3VudGVyKCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICBcIklOUFVUXCIpIHsgICAgICAgICAgICAgLy9jaGVjayBpZiB3ZSBjbGljayBvbiB0cmFzaC1iaW4gYnV0dG9uXHJcblx0XHRcdGxldCBpID0gK2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XHJcblxyXG5cdFx0XHR0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLnN0b3JlLmRhdGFbaV0pO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvdW50ZXIoKSB7XHJcblx0XHRxcygnLmNvdW50ZXInLCB0aGlzLmRvbUVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMuc3RvcmUuZGF0YS5sZW5ndGg7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc2VuZC1mb3JtLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5kYXRhID0gW107XHJcblx0fVxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhLmluZGV4T2YoZGF0YSkgPT09IC0xICYmIHRoaXMuZGF0YS5wdXNoKGRhdGEpOyAvLyBjaGVjayBpZiBpdGVtIGRpZCBub3QgYWxyZWR5IGV4aXN0IGluIGFycmF5IGFuZCBwdXNoIGlmIGl0IGlzIG5vdC5cclxuXHR9XHJcblxyXG5cdHJlbW92ZShkYXRhKSB7XHJcblx0XHRsZXQgaW5kZXggPSB0aGlzLmRhdGEuZmluZEluZGV4KGl0ZW0gPT4gZGF0YSA9PT0gaXRlbSk7XHJcblxyXG5cdFx0aWYoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0dGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIHtcclxuXHR0ZW1wbGF0ZShpdGVtcykge1xyXG5cdFx0cmV0dXJuXHRpdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgK1xyXG5cdFx0XHRcdFx0YDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIjBcIiBkYXRhLWlkPVwiJHtjdXJyLmlkfVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRlbS10aXRsZVwiPiR7Y3Vyci5kYXRhLnRpdGxlfTwvc3Bhbj48YnI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+JHtjdXJyLmRhdGEuc3VidGV4dH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2xpPmAsICcnKTtcclxuXHR9XHJcblxyXG5cdHRlbXBsYXRlT3V0cHV0KGl0ZW1zKSB7XHJcblx0XHRyZXR1cm5cdGl0ZW1zLnJlZHVjZSgocHJldiwgY3VyciwgaW5kZXgpID0+IHByZXYgK1xyXG5cdFx0XHRcdFx0YDxsaSBjbGFzcz1cImljb24tcmVzdWx0XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgZGF0YS10eXBlPVwiJHtjdXJyLnR5cGV9XCI+JHtjdXJyLmRhdGEudGl0bGV9IC0gJHtjdXJyLmRhdGEuc3VidGV4dH1cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRyYXNoLWJpblwiIHRhYmluZGV4PVwiMFwiPlxyXG5cdFx0XHRcdFx0PC9saT5gLCAnJyk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdGVtcGxhdGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlSXRlbSB7XHJcblx0Y29uc3RydWN0b3IoZGF0YSwgaW5kZXgsIHR5cGUpe1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuaWQgPSBpbmRleDtcclxuXHRcdHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcnRpY2xlLWl0ZW0uanMiLCJpbXBvcnQgRGF0YSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCBTZWxlY3Rpb25Gb3JtIGZyb20gJy4vc2VsZWN0aW9uLWZvcm0nO1xyXG5pbXBvcnQgU2VuZEZvcm0gZnJvbSAnLi9zZW5kLWZvcm0nO1xyXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAgJy4vdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBxcyB9IGZyb20gJy4vaGVscGVycydcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRsZXQgZG9jdW1lbnRzRWwgPSBxcygnLmRvY3VtZW50cycpO1xyXG5cdGxldCBsaW5rc0VsID0gcXMoJy5saW5rcycpO1xyXG5cdGxldCBsYWJzRWwgPSBxcygnLmxhYnMnKTtcclxuXHRsZXQgc2VuZEZvcm1FbCA9IHFzKCcuc2VuZC1sZXR0ZXInKTtcclxuXHJcblx0bGV0IGRhdGEgPSBuZXcgRGF0YSgpLmRhdGE7XHJcblx0bGV0IHN0b3JlID0gbmV3IFN0b3JlKCk7XHJcblx0bGV0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCk7XHJcblxyXG5cdGxldCBkb2N1bWVudHMgPSBuZXcgU2VsZWN0aW9uRm9ybShkYXRhWydkb2N1bWVudHMnXSwgZG9jdW1lbnRzRWwsIHRlbXBsYXRlLCBzdG9yZSk7XHJcblx0bGV0IGxpbmtzID0gbmV3IFNlbGVjdGlvbkZvcm0oZGF0YVsnbGlua3MnXSwgbGlua3NFbCwgdGVtcGxhdGUsIHN0b3JlKTtcclxuXHRsZXQgbGFicyA9IG5ldyBTZWxlY3Rpb25Gb3JtKGRhdGFbJ2xhYnMnXSwgbGFic0VsLCB0ZW1wbGF0ZSwgc3RvcmUpO1xyXG5cdGxldCBzZW5kRm9ybSA9IG5ldyBTZW5kRm9ybShzZW5kRm9ybUVsLCB0ZW1wbGF0ZSwgc3RvcmUpO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9