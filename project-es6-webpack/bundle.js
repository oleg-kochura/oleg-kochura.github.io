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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

var _defineProperty = __webpack_require__(6);

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
module.exports = !__webpack_require__(8)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty = __webpack_require__(6);

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dispatcher = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventDispatcher = function () {
	function EventDispatcher() {
		(0, _classCallCheck3.default)(this, EventDispatcher);

		this.events = {};
	}

	(0, _createClass3.default)(EventDispatcher, [{
		key: "addListener",
		value: function addListener(event, callback) {
			if (this.events[event] === undefined) {
				this.events[event] = {
					listeners: []
				};
			}

			this.events[event].listeners.push(callback);
		}
	}, {
		key: "dispatch",
		value: function dispatch(event, details) {
			if (this.events[event] === undefined) {
				console.error("This event: " + event + " does not exist");
				return false;
			}

			this.events[event].listeners.forEach(function (listener) {
				listener(details);
			});
		}
	}]);
	return EventDispatcher;
}();

var dispatcher = exports.dispatcher = new EventDispatcher();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(20)
  , IE8_DOM_DEFINE = __webpack_require__(25)
  , toPrimitive    = __webpack_require__(27)
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

var _articleItem = __webpack_require__(16);

var _articleItem2 = _interopRequireDefault(_articleItem);

var _dispatcher = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionForm = function () {
	function SelectionForm(element, template, store) {
		(0, _classCallCheck3.default)(this, SelectionForm);

		this.domElement = element;
		this.template = template;
		this.store = store;
		this.init();
	}

	(0, _createClass3.default)(SelectionForm, [{
		key: 'init',
		value: function init() {
			this.items = this.getData();
			this.render();

			var chekboxArr = this.domElement.querySelectorAll('.checkbox');
			this.toggleButton = (0, _helpers.qs)('.add-all', this.domElement);
			this.handleEvents();

			this.items.forEach(function (item, i) {
				(0, _helpers.bindModelInput)(item, 'checked', chekboxArr[i]);
			});
		}
	}, {
		key: 'getData',
		value: function getData() {
			var _this = this;

			return this.store.data[this.domElement.id].items.map(function (item, index) {
				return new _articleItem2.default(item, index, _this.domElement.id);
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
			_dispatcher.dispatcher.addListener('onDelete', this.unCheck.bind(this));
		}
	}, {
		key: 'unCheck',
		value: function unCheck(item) {
			if (item.type === this.domElement.id) {
				this.items[item.id].checked = false;
			}

			this.setToggleButtonState(this.checkboxesState());
		}
	}, {
		key: 'toggleCheckbox',
		value: function toggleCheckbox(event) {
			var i = event.target.dataset.id;
			this.items[i].checked ? this.store.add(this.items[i]) : this.store.remove(this.items[i]);

			this.setToggleButtonState(this.checkboxesState());
			_dispatcher.dispatcher.dispatch('onToggle');
		}
	}, {
		key: 'toggleAll',
		value: function toggleAll() {
			var _this2 = this;

			var state = this.checkboxesState();

			var data = this.items.filter(function (item) {
				return item.checked === state;
			}).forEach(function (item) {
				item.checked = !item.checked;
				state ? _this2.store.remove(item) : _this2.store.add(item);
			});

			this.setToggleButtonState(this.checkboxesState());
			_dispatcher.dispatcher.dispatch('onToggle');
		}
	}, {
		key: 'checkboxesState',
		value: function checkboxesState() {
			return this.items.every(function (item) {
				return item.checked;
			});
		}
	}, {
		key: 'setToggleButtonState',
		value: function setToggleButtonState(state) {
			state ? this.toggleButton.value = 'REMOVE ALL' : this.toggleButton.value = 'ADD ALL';
		}
	}]);
	return SelectionForm;
}();

exports.default = SelectionForm;

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

var _helpers = __webpack_require__(3);

var _dispatcher = __webpack_require__(5);

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
			(0, _helpers.$on)('click', this.domList, this.removeItem.bind(this));
			_dispatcher.dispatcher.addListener('onToggle', this.refresh.bind(this));
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			this.domList.innerHTML = this.template.templateOutput(this.store.selected);
			this.counter();
		}
	}, {
		key: 'removeItem',
		value: function removeItem(event) {
			if (event.target.tagName === "INPUT") {
				var i = +event.target.parentNode.dataset.index;

				this.store.remove(this.store.selected[i]);
				_dispatcher.dispatcher.dispatch('onDelete', this.store.selected[i]);
				this.refresh();
			}
		}
	}, {
		key: 'counter',
		value: function counter() {
			(0, _helpers.qs)('.counter', this.domElement).innerHTML = this.store.selected.length;
		}
	}]);
	return SendForm;
}();

exports.default = SendForm;

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

var Store = function () {
	function Store(data) {
		(0, _classCallCheck3.default)(this, Store);

		this.data = data;
		this.selected = [];
	}

	(0, _createClass3.default)(Store, [{
		key: "add",
		value: function add(data) {
			this.selected.push(data);
		}
	}, {
		key: "remove",
		value: function remove(data) {
			var index = this.selected.findIndex(function (item) {
				return data === item;
			});

			if (index !== undefined && index !== -1) {
				this.selected.splice(index, 1);
			}
		}
	}]);
	return Store;
}();

exports.default = Store;

/***/ }),
/* 15 */
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
				return prev + ('<li class="list-item">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="checkbox" tabindex="0" data-id="' + curr.id + '">\n\t\t\t\t\t\t\t<span class="item-title">' + curr.selected.title + '</span><br>\n\t\t\t\t\t\t\t<span>' + curr.selected.subtext + '</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</li>');
			}, '');
		}
	}, {
		key: 'templateOutput',
		value: function templateOutput(items) {
			return items.reduce(function (prev, curr, index) {
				return prev + ('<li class="icon-result" data-index="' + index + '" data-type="' + curr.type + '">' + curr.selected.title + ' - ' + curr.selected.subtext + '\n\t\t\t\t\t\t<input type="button" class="trash-bin" tabindex="0">\n\t\t\t\t\t</li>');
			}, '');
		}
	}]);
	return Template;
}();

exports.default = Template;

/***/ }),
/* 16 */
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

	this.selected = data;
	this.id = index;
	this.checked = false;
	this.type = type;
};

exports.default = ArticleItem;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(11);

var _data2 = _interopRequireDefault(_data);

var _store = __webpack_require__(14);

var _store2 = _interopRequireDefault(_store);

var _selectionForm = __webpack_require__(12);

var _selectionForm2 = _interopRequireDefault(_selectionForm);

var _sendForm = __webpack_require__(13);

var _sendForm2 = _interopRequireDefault(_sendForm);

var _template = __webpack_require__(15);

var _template2 = _interopRequireDefault(_template);

var _helpers = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {

	var documentsEl = (0, _helpers.qs)('.documents');
	var linksEl = (0, _helpers.qs)('.links');
	var labsEl = (0, _helpers.qs)('.labs');
	var sendFormEl = (0, _helpers.qs)('.send-letter');

	var data = new _data2.default().data;
	var store = new _store2.default(data);
	var template = new _template2.default();

	var documents = new _selectionForm2.default(documentsEl, template, store);
	var links = new _selectionForm2.default(linksEl, template, store);
	var labs = new _selectionForm2.default(labsEl, template, store);
	var sendForm = new _sendForm2.default(sendFormEl, template, store);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , document = __webpack_require__(9).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(9)
  , core      = __webpack_require__(7)
  , ctx       = __webpack_require__(21)
  , hide      = __webpack_require__(24)
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(10)
  , createDesc = __webpack_require__(26);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(8)(function(){
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(23);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTA3YjFmOWY4NjE2YzA3NDZjNzUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9kYXRhLmpzIiwid2VicGFjazovLy8uL2pzL3NlbGVjdGlvbi1mb3JtLmpzIiwid2VicGFjazovLy8uL2pzL3NlbmQtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcnRpY2xlLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIl0sIm5hbWVzIjpbImJpbmRNb2RlbElucHV0IiwiJG9uIiwicXMiLCJvYmoiLCJwcm9wZXJ0eSIsImRvbUVsZW0iLCJnZXQiLCJjaGVja2VkIiwic2V0IiwibmV3VmFsdWUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImVsZW1lbnQiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxlY3RvciIsInNjb3BlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXZlbnREaXNwYXRjaGVyIiwiZXZlbnRzIiwidW5kZWZpbmVkIiwibGlzdGVuZXJzIiwicHVzaCIsImRldGFpbHMiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJkaXNwYXRjaGVyIiwiRGF0YSIsImRvY3VtZW50cyIsIml0ZW1zIiwidGl0bGUiLCJzdWJ0ZXh0IiwibGlua3MiLCJsYWJzIiwiU2VsZWN0aW9uRm9ybSIsInRlbXBsYXRlIiwic3RvcmUiLCJkb21FbGVtZW50IiwiaW5pdCIsImdldERhdGEiLCJyZW5kZXIiLCJjaGVrYm94QXJyIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZUJ1dHRvbiIsImhhbmRsZUV2ZW50cyIsIml0ZW0iLCJpIiwiZGF0YSIsImlkIiwibWFwIiwiaW5kZXgiLCJpbm5lckhUTUwiLCJ0b2dnbGVDaGVja2JveCIsImJpbmQiLCJ0b2dnbGVBbGwiLCJhZGRMaXN0ZW5lciIsInVuQ2hlY2siLCJ0eXBlIiwic2V0VG9nZ2xlQnV0dG9uU3RhdGUiLCJjaGVja2JveGVzU3RhdGUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYWRkIiwicmVtb3ZlIiwiZGlzcGF0Y2giLCJzdGF0ZSIsImZpbHRlciIsImV2ZXJ5IiwidmFsdWUiLCJTZW5kRm9ybSIsImRvbUxpc3QiLCJyZW1vdmVJdGVtIiwicmVmcmVzaCIsInRlbXBsYXRlT3V0cHV0Iiwic2VsZWN0ZWQiLCJjb3VudGVyIiwidGFnTmFtZSIsInBhcmVudE5vZGUiLCJsZW5ndGgiLCJTdG9yZSIsImZpbmRJbmRleCIsInNwbGljZSIsIlRlbXBsYXRlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJBcnRpY2xlSXRlbSIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50c0VsIiwibGlua3NFbCIsImxhYnNFbCIsInNlbmRGb3JtRWwiLCJzZW5kRm9ybSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QixVQUFVLEdBQUc7QUFDbkcsQ0FBQyxFOzs7Ozs7QUNGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNYQTtBQUNBO0FBQ0Esb0VBQXVFLDBDQUEwQyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEwN2IxZjlmODYxNmMwNzQ2Yzc1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBiaW5kTW9kZWxJbnB1dChvYmosIHByb3BlcnR5LCBkb21FbGVtKSB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcGVydHksIHtcclxuXHRcdGdldDogKCkgPT4gZG9tRWxlbS5jaGVja2VkLFxyXG5cdFx0c2V0OiAobmV3VmFsdWUpID0+IGRvbUVsZW0uY2hlY2tlZCA9IG5ld1ZhbHVlLFxyXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkb24oZXZlbnQsIGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxcyhzZWxlY3Rvciwgc2NvcGUpIHtcclxuXHRyZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hlbHBlcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0XHR0aGlzLmV2ZW50cyA9IHt9O1xyXG5cdH1cclxuXHJcblx0YWRkTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHRpZiAodGhpcy5ldmVudHNbZXZlbnRdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5ldmVudHNbZXZlbnRdID0ge1xyXG5cdFx0XHRcdGxpc3RlbmVyczogW11cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50XS5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcblx0fVxyXG5cclxuXHRkaXNwYXRjaChldmVudCwgZGV0YWlscykge1xyXG5cdFx0aWYgKHRoaXMuZXZlbnRzW2V2ZW50XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoYFRoaXMgZXZlbnQ6ICR7ZXZlbnR9IGRvZXMgbm90IGV4aXN0YCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50c1tldmVudF0ubGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcblx0XHRcdGxpc3RlbmVyKGRldGFpbHMpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9kaXNwYXRjaGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRvY3VtZW50czoge1xyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDFcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMlwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAzXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmtzOiB7XHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE1XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE2XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMThcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0bGFiczoge1xyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDEwMFwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAxMDFcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTAyXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RhdGEuanMiLCJpbXBvcnQgeyAkb24sIGJpbmRNb2RlbElucHV0LCBxcyB9IGZyb20gJy4vaGVscGVycydcclxuaW1wb3J0IEFydGljbGVJdGVtIGZyb20gJy4vYXJ0aWNsZS1pdGVtJztcclxuaW1wb3J0IHsgZGlzcGF0Y2hlciB9IGZyb20gJy4vZGlzcGF0Y2hlcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25Gb3JtIHtcclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCB0ZW1wbGF0ZSwgc3RvcmUpIHtcclxuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnN0b3JlID0gc3RvcmU7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLml0ZW1zID0gdGhpcy5nZXREYXRhKCk7XHJcblx0XHR0aGlzLnJlbmRlcigpO1xyXG5cclxuXHRcdGxldCBjaGVrYm94QXJyID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG5cdFx0dGhpcy50b2dnbGVCdXR0b24gPSBxcygnLmFkZC1hbGwnLCB0aGlzLmRvbUVsZW1lbnQpO1xyXG5cdFx0dGhpcy5oYW5kbGVFdmVudHMoKTtcclxuXHJcblx0XHR0aGlzLml0ZW1zLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XHJcblx0XHRcdGJpbmRNb2RlbElucHV0KGl0ZW0sICdjaGVja2VkJywgY2hla2JveEFycltpXSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLmRhdGFbdGhpcy5kb21FbGVtZW50LmlkXS5pdGVtcy5tYXAoIChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm5cdG5ldyBBcnRpY2xlSXRlbShpdGVtLCBpbmRleCwgdGhpcy5kb21FbGVtZW50LmlkKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRxcygnLmxpc3QtZ3JvdXAnLCB0aGlzLmRvbUVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUudGVtcGxhdGUodGhpcy5pdGVtcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVFdmVudHMoKSB7XHJcblx0XHQkb24oJ2NoYW5nZScsIHRoaXMuZG9tRWxlbWVudCwgdGhpcy50b2dnbGVDaGVja2JveC5iaW5kKHRoaXMpKTtcclxuXHRcdCRvbignY2xpY2snLCB0aGlzLnRvZ2dsZUJ1dHRvbiwgdGhpcy50b2dnbGVBbGwuYmluZCh0aGlzKSk7XHJcblx0XHRkaXNwYXRjaGVyLmFkZExpc3RlbmVyKCdvbkRlbGV0ZScsIHRoaXMudW5DaGVjay5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdHVuQ2hlY2soaXRlbSkge1xyXG5cdFx0aWYgKGl0ZW0udHlwZSA9PT0gdGhpcy5kb21FbGVtZW50LmlkKSB7XHJcblx0XHRcdHRoaXMuaXRlbXNbaXRlbS5pZF0uY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0VG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5jaGVja2JveGVzU3RhdGUoKSk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVDaGVja2JveChldmVudCkge1xyXG5cdFx0bGV0IGkgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcclxuXHRcdHRoaXMuaXRlbXNbaV0uY2hlY2tlZFxyXG5cdFx0XHQ/IHRoaXMuc3RvcmUuYWRkKHRoaXMuaXRlbXNbaV0pXHJcblx0XHRcdDogdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5pdGVtc1tpXSk7XHJcblxyXG5cdFx0dGhpcy5zZXRUb2dnbGVCdXR0b25TdGF0ZSh0aGlzLmNoZWNrYm94ZXNTdGF0ZSgpKTtcclxuXHRcdGRpc3BhdGNoZXIuZGlzcGF0Y2goJ29uVG9nZ2xlJyk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVBbGwoKSB7XHJcblx0XHRsZXQgc3RhdGUgPSB0aGlzLmNoZWNrYm94ZXNTdGF0ZSgpO1xyXG5cclxuXHRcdGxldCBkYXRhID0gdGhpcy5pdGVtc1xyXG5cdFx0XHQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNoZWNrZWQgPT09IHN0YXRlKVxyXG5cdFx0XHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XHJcblx0XHRcdFx0c3RhdGUgPyB0aGlzLnN0b3JlLnJlbW92ZShpdGVtKSA6IHRoaXMuc3RvcmUuYWRkKGl0ZW0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnNldFRvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuY2hlY2tib3hlc1N0YXRlKCkpO1xyXG5cdFx0ZGlzcGF0Y2hlci5kaXNwYXRjaCgnb25Ub2dnbGUnKTtcclxuXHR9XHJcblxyXG5cdGNoZWNrYm94ZXNTdGF0ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1zLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkKVxyXG5cdH1cclxuXHJcblx0c2V0VG9nZ2xlQnV0dG9uU3RhdGUoc3RhdGUpIHtcclxuXHRcdHN0YXRlID8gdGhpcy50b2dnbGVCdXR0b24udmFsdWUgPSAnUkVNT1ZFIEFMTCcgOiB0aGlzLnRvZ2dsZUJ1dHRvbi52YWx1ZSA9ICdBREQgQUxMJztcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zZWxlY3Rpb24tZm9ybS5qcyIsImltcG9ydCB7ICRvbiwgcXMgfSBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IGRpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5kRm9ybSB7XHJcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgdGVtcGxhdGUsIHN0b3JlKXtcclxuXHRcdHRoaXMuZG9tRWxlbWVudCAgPSBlbGVtZW50O1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHN0b3JlO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5kb21MaXN0ID0gcXMoJy5pdGVtcy1saXN0JywgdGhpcy5kb21FbGVtZW50KTtcclxuXHRcdCRvbignY2xpY2snLCB0aGlzLmRvbUxpc3QsIHRoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMpKTtcclxuXHRcdGRpc3BhdGNoZXIuYWRkTGlzdGVuZXIoJ29uVG9nZ2xlJywgdGhpcy5yZWZyZXNoLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0cmVmcmVzaCgpIHtcclxuXHRcdHRoaXMuZG9tTGlzdC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlLnRlbXBsYXRlT3V0cHV0KHRoaXMuc3RvcmUuc2VsZWN0ZWQpO1xyXG5cdFx0dGhpcy5jb3VudGVyKCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICBcIklOUFVUXCIpIHtcclxuXHRcdFx0bGV0IGkgPSArZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcclxuXHJcblx0XHRcdHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuc3RvcmUuc2VsZWN0ZWRbaV0pO1xyXG5cdFx0XHRkaXNwYXRjaGVyLmRpc3BhdGNoKCdvbkRlbGV0ZScsIHRoaXMuc3RvcmUuc2VsZWN0ZWRbaV0pO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvdW50ZXIoKSB7XHJcblx0XHRxcygnLmNvdW50ZXInLCB0aGlzLmRvbUVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMuc3RvcmUuc2VsZWN0ZWQubGVuZ3RoO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NlbmQtZm9ybS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cdH1cclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWQucHVzaChkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZShkYXRhKSB7XHJcblx0XHRsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleChpdGVtID0+IGRhdGEgPT09IGl0ZW0pO1xyXG5cclxuXHRcdGlmKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IC0xKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIHtcclxuXHR0ZW1wbGF0ZShpdGVtcykge1xyXG5cdFx0cmV0dXJuXHRpdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgK1xyXG5cdFx0XHRcdFx0YDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIjBcIiBkYXRhLWlkPVwiJHtjdXJyLmlkfVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRlbS10aXRsZVwiPiR7Y3Vyci5zZWxlY3RlZC50aXRsZX08L3NwYW4+PGJyPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiR7Y3Vyci5zZWxlY3RlZC5zdWJ0ZXh0fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvbGk+YCwgJycpO1xyXG5cdH1cclxuXHJcblx0dGVtcGxhdGVPdXRwdXQoaXRlbXMpIHtcclxuXHRcdHJldHVyblx0aXRlbXMucmVkdWNlKChwcmV2LCBjdXJyLCBpbmRleCkgPT4gcHJldiArXHJcblx0XHRcdFx0XHRgPGxpIGNsYXNzPVwiaWNvbi1yZXN1bHRcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBkYXRhLXR5cGU9XCIke2N1cnIudHlwZX1cIj4ke2N1cnIuc2VsZWN0ZWQudGl0bGV9IC0gJHtjdXJyLnNlbGVjdGVkLnN1YnRleHR9XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0cmFzaC1iaW5cIiB0YWJpbmRleD1cIjBcIj5cclxuXHRcdFx0XHRcdDwvbGk+YCwgJycpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3RlbXBsYXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKGRhdGEsIGluZGV4LCB0eXBlKXtcclxuXHRcdHRoaXMuc2VsZWN0ZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5pZCA9IGluZGV4O1xyXG5cdFx0dGhpcy5jaGVja2VkID0gZmFsc2U7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FydGljbGUtaXRlbS5qcyIsImltcG9ydCBEYXRhIGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IFNlbGVjdGlvbkZvcm0gZnJvbSAnLi9zZWxlY3Rpb24tZm9ybSc7XHJcbmltcG9ydCBTZW5kRm9ybSBmcm9tICcuL3NlbmQtZm9ybSc7XHJcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICAnLi90ZW1wbGF0ZSc7XHJcbmltcG9ydCB7IHFzIH0gZnJvbSAnLi9oZWxwZXJzJ1xyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGNvbnN0IGRvY3VtZW50c0VsID0gcXMoJy5kb2N1bWVudHMnKTtcclxuXHRjb25zdCBsaW5rc0VsID0gcXMoJy5saW5rcycpO1xyXG5cdGNvbnN0IGxhYnNFbCA9IHFzKCcubGFicycpO1xyXG5cdGNvbnN0IHNlbmRGb3JtRWwgPSBxcygnLnNlbmQtbGV0dGVyJyk7XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBuZXcgRGF0YSgpLmRhdGE7XHJcblx0Y29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoZGF0YSk7XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoKTtcclxuXHJcblx0Y29uc3QgZG9jdW1lbnRzID0gbmV3IFNlbGVjdGlvbkZvcm0oZG9jdW1lbnRzRWwsIHRlbXBsYXRlLCBzdG9yZSk7XHJcblx0Y29uc3QgbGlua3MgPSBuZXcgU2VsZWN0aW9uRm9ybShsaW5rc0VsLCB0ZW1wbGF0ZSwgc3RvcmUpO1xyXG5cdGNvbnN0IGxhYnMgPSBuZXcgU2VsZWN0aW9uRm9ybShsYWJzRWwsIHRlbXBsYXRlLCBzdG9yZSk7XHJcblx0Y29uc3Qgc2VuZEZvcm0gPSBuZXcgU2VuZEZvcm0oc2VuZEZvcm1FbCwgdGVtcGxhdGUsIHN0b3JlKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==