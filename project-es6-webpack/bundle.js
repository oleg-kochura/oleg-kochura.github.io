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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

var _defineProperty = __webpack_require__(9);

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
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty = __webpack_require__(9);

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
/* 5 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(29)
  , hide      = __webpack_require__(33)
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(26)
  , IE8_DOM_DEFINE = __webpack_require__(34)
  , toPrimitive    = __webpack_require__(45)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 13 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35)
  , defined = __webpack_require__(10);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Data = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = exports.Data = function () {
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
					}, {
						title: "Article Name - 4",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 5",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 6",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 7",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 8",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 9",
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
					}, {
						title: "Article Name - 19",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 20",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 21",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 22",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 23",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 24",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 25",
						subtext: "Authors, name of edition,publishing year, (more info?)"
					}, {
						title: "Article Name - 27",
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SelectionForm = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(4);

var _dispatcher = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionForm = exports.SelectionForm = function () {
	function SelectionForm(element, template, store) {
		(0, _classCallCheck3.default)(this, SelectionForm);

		this.domElement = element;
		this.template = template;
		this.store = store;
		this.type = this.domElement.id;
		this.items = this.store.data[this.type];
		this.init();
	}

	(0, _createClass3.default)(SelectionForm, [{
		key: 'init',
		value: function init() {
			this.render();
			var chekboxArr = this.domElement.querySelectorAll('.checkbox');
			this.toggleButton = (0, _helpers.qs)('.add-all', this.domElement);
			this.handleEvents();

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
			_dispatcher.dispatcher.addListener('onDelete', this.setToggleButtonState.bind(this));
		}
	}, {
		key: 'toggleCheckbox',
		value: function toggleCheckbox(event) {
			var index = event.target.dataset.id;
			this.store.toggleItem(index, this.type);

			this.setToggleButtonState();
			_dispatcher.dispatcher.dispatch('onToggle');
		}
	}, {
		key: 'toggleAll',
		value: function toggleAll() {
			this.store.toggleAll(this.type);

			this.setToggleButtonState();
			_dispatcher.dispatcher.dispatch('onToggle');
		}
	}, {
		key: 'setToggleButtonState',
		value: function setToggleButtonState() {
			if (this.store.itemsState(this.type)) {
				this.toggleButton.value = 'REMOVE ALL';
			} else {
				this.toggleButton.value = 'ADD ALL';
			}
		}
	}]);
	return SelectionForm;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SendForm = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(4);

var _dispatcher = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SendForm = exports.SendForm = function () {
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

				_dispatcher.dispatcher.dispatch('onDelete');
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Store = undefined;

var _keys = __webpack_require__(22);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleItem = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = exports.Store = function () {
	function Store(data) {
		(0, _classCallCheck3.default)(this, Store);

		this.data = this.getData(data);
		this.selected = [];
	}

	(0, _createClass3.default)(Store, [{
		key: 'getData',
		value: function getData(data) {
			var transformedData = {};

			(0, _keys2.default)(data).forEach(function (key) {
				transformedData[key] = data[key].items.map(function (item, index) {
					return new _articleItem.ArticleItem(item, index, key);
				});
			});

			return transformedData;
		}
	}, {
		key: 'add',
		value: function add(data) {
			this.selected.push(data);
		}
	}, {
		key: 'remove',
		value: function remove(data) {
			var index = this.selected.findIndex(function (item) {
				return data === item;
			});

			if (index !== undefined && index !== -1) {
				this.selected.splice(index, 1);
				this.data[data.type][data.id].checked = false;
			}
		}
	}, {
		key: 'toggleItem',
		value: function toggleItem(index, key) {
			this.data[key][index].checked ? this.add(this.data[key][index]) : this.remove(this.data[key][index]);
		}
	}, {
		key: 'toggleAll',
		value: function toggleAll(key) {
			var _this = this;

			var state = this.itemsState(key);

			this.data[key].filter(function (item) {
				return item.checked === state;
			}).forEach(function (item) {
				item.checked = !item.checked;
				state ? _this.remove(item) : _this.add(item);
			});
		}
	}, {
		key: 'itemsState',
		value: function itemsState(key) {
			return this.data[key].every(function (item) {
				return item.checked;
			});
		}
	}]);
	return Store;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Template = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = exports.Template = function () {
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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ArticleItem = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleItem = exports.ArticleItem = function ArticleItem(data, index, type) {
	(0, _classCallCheck3.default)(this, ArticleItem);

	this.data = data;
	this.id = index;
	this.checked = false;
	this.type = type;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(15);

var _store = __webpack_require__(18);

var _selectionForm = __webpack_require__(16);

var _sendForm = __webpack_require__(17);

var _template = __webpack_require__(19);

var _helpers = __webpack_require__(4);

window.onload = function () {

	var documentsEl = (0, _helpers.qs)('.documents');
	var linksEl = (0, _helpers.qs)('.links');
	var labsEl = (0, _helpers.qs)('.labs');
	var sendFormEl = (0, _helpers.qs)('.send-letter');

	var data = new _data.Data().data;
	var store = new _store.Store(data);
	var template = new _template.Template();

	var documents = new _selectionForm.SelectionForm(documentsEl, template, store);
	var links = new _selectionForm.SelectionForm(linksEl, template, store);
	var labs = new _selectionForm.SelectionForm(labsEl, template, store);
	var sendForm = new _sendForm.SendForm(sendFormEl, template, store);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14)
  , toLength  = __webpack_require__(43)
  , toIndex   = __webpack_require__(42);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(39);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(5)(function(){
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(32)
  , toIObject    = __webpack_require__(14)
  , arrayIndexOf = __webpack_require__(27)(false)
  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(36)
  , enumBugKeys = __webpack_require__(31);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(5);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys')
  , uid    = __webpack_require__(46);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(13)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
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
/* 46 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(44)
  , $keys    = __webpack_require__(37);

__webpack_require__(38)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODc0NDNhY2Q1ZWMxMGVjZTNkMzIiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZWxlY3Rpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZW5kLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXJ0aWNsZS1pdGVtLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiXSwibmFtZXMiOlsiYmluZE1vZGVsSW5wdXQiLCIkb24iLCJxcyIsIm9iaiIsInByb3BlcnR5IiwiZG9tRWxlbSIsImdldCIsImNoZWNrZWQiLCJzZXQiLCJuZXdWYWx1ZSIsImNvbmZpZ3VyYWJsZSIsImV2ZW50IiwiZWxlbWVudCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlbGVjdG9yIiwic2NvcGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJFdmVudERpc3BhdGNoZXIiLCJldmVudHMiLCJ1bmRlZmluZWQiLCJsaXN0ZW5lcnMiLCJwdXNoIiwiZGV0YWlscyIsImNvbnNvbGUiLCJlcnJvciIsImZvckVhY2giLCJsaXN0ZW5lciIsImRpc3BhdGNoZXIiLCJEYXRhIiwiZG9jdW1lbnRzIiwiaXRlbXMiLCJ0aXRsZSIsInN1YnRleHQiLCJsaW5rcyIsImxhYnMiLCJTZWxlY3Rpb25Gb3JtIiwidGVtcGxhdGUiLCJzdG9yZSIsImRvbUVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJkYXRhIiwiaW5pdCIsInJlbmRlciIsImNoZWtib3hBcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlQnV0dG9uIiwiaGFuZGxlRXZlbnRzIiwiaXRlbSIsImkiLCJpbm5lckhUTUwiLCJ0b2dnbGVDaGVja2JveCIsImJpbmQiLCJ0b2dnbGVBbGwiLCJhZGRMaXN0ZW5lciIsInNldFRvZ2dsZUJ1dHRvblN0YXRlIiwiaW5kZXgiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidG9nZ2xlSXRlbSIsImRpc3BhdGNoIiwiaXRlbXNTdGF0ZSIsInZhbHVlIiwiU2VuZEZvcm0iLCJkb21MaXN0IiwicmVtb3ZlSXRlbSIsInJlZnJlc2giLCJ0ZW1wbGF0ZU91dHB1dCIsInNlbGVjdGVkIiwiY291bnRlciIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwibGVuZ3RoIiwiU3RvcmUiLCJnZXREYXRhIiwidHJhbnNmb3JtZWREYXRhIiwia2V5IiwibWFwIiwiZmluZEluZGV4Iiwic3BsaWNlIiwiYWRkIiwic3RhdGUiLCJmaWx0ZXIiLCJldmVyeSIsIlRlbXBsYXRlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJBcnRpY2xlSXRlbSIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50c0VsIiwibGlua3NFbCIsImxhYnNFbCIsInNlbmRG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TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0Esb0VBQXVFLDBDQUEwQyxFOzs7Ozs7QUNGakg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg3NDQzYWNkNWVjMTBlY2UzZDMyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGJpbmRNb2RlbElucHV0KG9iaiwgcHJvcGVydHksIGRvbUVsZW0pIHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wZXJ0eSwge1xyXG5cdFx0Z2V0OiAoKSA9PiBkb21FbGVtLmNoZWNrZWQsXHJcblx0XHRzZXQ6IChuZXdWYWx1ZSkgPT4gZG9tRWxlbS5jaGVja2VkID0gbmV3VmFsdWUsXHJcblx0XHRjb25maWd1cmFibGU6IHRydWVcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICRvbihldmVudCwgZWxlbWVudCwgY2FsbGJhY2spIHtcclxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHFzKHNlbGVjdG9yLCBzY29wZSkge1xyXG5cdHJldHVybiAoc2NvcGUgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGVscGVycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBFdmVudERpc3BhdGNoZXIge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHRoaXMuZXZlbnRzID0ge307XHJcblx0fVxyXG5cclxuXHRhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdGlmICh0aGlzLmV2ZW50c1tldmVudF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudF0gPSB7XHJcblx0XHRcdFx0bGlzdGVuZXJzOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHNbZXZlbnRdLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcclxuXHR9XHJcblxyXG5cdGRpc3BhdGNoKGV2ZW50LCBkZXRhaWxzKSB7XHJcblx0XHRpZiAodGhpcy5ldmVudHNbZXZlbnRdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhpcyBldmVudDogJHtldmVudH0gZG9lcyBub3QgZXhpc3RgKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50XS5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuXHRcdFx0bGlzdGVuZXIoZGV0YWlscyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Rpc3BhdGNoZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIERhdGEge1xyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZG9jdW1lbnRzOiB7XHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDNcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSx7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDRcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gNVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSA2XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSA3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDhcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gOVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaW5rczoge1xyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE1XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE2XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMThcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTlcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMjBcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMjFcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyMlwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyM1wiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyNFwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyNVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDI3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdGxhYnM6IHtcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAxMDBcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTAxXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDEwMlwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9kYXRhLmpzIiwiaW1wb3J0IHsgJG9uLCBiaW5kTW9kZWxJbnB1dCwgcXMgfSBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IGRpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uRm9ybSB7XHJcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgdGVtcGxhdGUsIHN0b3JlKSB7XHJcblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHN0b3JlO1xyXG5cdFx0dGhpcy50eXBlID0gdGhpcy5kb21FbGVtZW50LmlkO1xyXG5cdFx0dGhpcy5pdGVtcyA9IHRoaXMuc3RvcmUuZGF0YVt0aGlzLnR5cGVdO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5yZW5kZXIoKTtcclxuXHRcdGxldCBjaGVrYm94QXJyID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG5cdFx0dGhpcy50b2dnbGVCdXR0b24gPSBxcygnLmFkZC1hbGwnLCB0aGlzLmRvbUVsZW1lbnQpO1xyXG5cdFx0dGhpcy5oYW5kbGVFdmVudHMoKTtcclxuXHJcblx0XHR0aGlzLml0ZW1zLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XHJcblx0XHRcdGJpbmRNb2RlbElucHV0KGl0ZW0sICdjaGVja2VkJywgY2hla2JveEFycltpXSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cXMoJy5saXN0LWdyb3VwJywgdGhpcy5kb21FbGVtZW50KS5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlLnRlbXBsYXRlKHRoaXMuaXRlbXMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlRXZlbnRzKCkge1xyXG5cdFx0JG9uKCdjaGFuZ2UnLCB0aGlzLmRvbUVsZW1lbnQsIHRoaXMudG9nZ2xlQ2hlY2tib3guYmluZCh0aGlzKSk7XHJcblx0XHQkb24oJ2NsaWNrJywgdGhpcy50b2dnbGVCdXR0b24sIHRoaXMudG9nZ2xlQWxsLmJpbmQodGhpcykpO1xyXG5cdFx0ZGlzcGF0Y2hlci5hZGRMaXN0ZW5lcignb25EZWxldGUnLCB0aGlzLnNldFRvZ2dsZUJ1dHRvblN0YXRlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQ2hlY2tib3goZXZlbnQpIHtcclxuXHRcdGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xyXG5cdFx0dGhpcy5zdG9yZS50b2dnbGVJdGVtKGluZGV4LCB0aGlzLnR5cGUpO1xyXG5cclxuXHRcdHRoaXMuc2V0VG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuXHRcdGRpc3BhdGNoZXIuZGlzcGF0Y2goJ29uVG9nZ2xlJyk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVBbGwoKSB7XHJcblx0XHR0aGlzLnN0b3JlLnRvZ2dsZUFsbCh0aGlzLnR5cGUpO1xyXG5cclxuXHRcdHRoaXMuc2V0VG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuXHRcdGRpc3BhdGNoZXIuZGlzcGF0Y2goJ29uVG9nZ2xlJyk7XHJcblx0fVxyXG5cclxuXHRzZXRUb2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLnN0b3JlLml0ZW1zU3RhdGUodGhpcy50eXBlKSkge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbi52YWx1ZSA9ICdSRU1PVkUgQUxMJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQnV0dG9uLnZhbHVlID0gJ0FERCBBTEwnO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NlbGVjdGlvbi1mb3JtLmpzIiwiaW1wb3J0IHsgJG9uLCBxcyB9IGZyb20gJy4vaGVscGVycydcclxuaW1wb3J0IHsgZGlzcGF0Y2hlciB9IGZyb20gJy4vZGlzcGF0Y2hlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5kRm9ybSB7XHJcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgdGVtcGxhdGUsIHN0b3JlKXtcclxuXHRcdHRoaXMuZG9tRWxlbWVudCAgPSBlbGVtZW50O1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHN0b3JlO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5kb21MaXN0ID0gcXMoJy5pdGVtcy1saXN0JywgdGhpcy5kb21FbGVtZW50KTtcclxuXHRcdCRvbignY2xpY2snLCB0aGlzLmRvbUxpc3QsIHRoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMpKTtcclxuXHRcdGRpc3BhdGNoZXIuYWRkTGlzdGVuZXIoJ29uVG9nZ2xlJywgdGhpcy5yZWZyZXNoLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0cmVmcmVzaCgpIHtcclxuXHRcdHRoaXMuZG9tTGlzdC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlLnRlbXBsYXRlT3V0cHV0KHRoaXMuc3RvcmUuc2VsZWN0ZWQpO1xyXG5cdFx0dGhpcy5jb3VudGVyKCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICBcIklOUFVUXCIpIHtcclxuXHRcdFx0bGV0IGkgPSArZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcclxuXHJcblx0XHRcdHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuc3RvcmUuc2VsZWN0ZWRbaV0pO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2hlci5kaXNwYXRjaCgnb25EZWxldGUnKTtcclxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb3VudGVyKCkge1xyXG5cdFx0cXMoJy5jb3VudGVyJywgdGhpcy5kb21FbGVtZW50KS5pbm5lckhUTUwgPSB0aGlzLnN0b3JlLnNlbGVjdGVkLmxlbmd0aDtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zZW5kLWZvcm0uanMiLCJpbXBvcnQgeyBBcnRpY2xlSXRlbSB9IGZyb20gJy4vYXJ0aWNsZS1pdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yZSB7XHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5nZXREYXRhKGRhdGEpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YShkYXRhKSB7XHJcblx0XHRsZXQgdHJhbnNmb3JtZWREYXRhID0ge307XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdHRyYW5zZm9ybWVkRGF0YVtrZXldID0gZGF0YVtrZXldLml0ZW1zLm1hcCggKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBcnRpY2xlSXRlbShpdGVtLCBpbmRleCwga2V5KVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB0cmFuc2Zvcm1lZERhdGE7XHJcblx0fVxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZC5wdXNoKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGRhdGEpIHtcclxuXHRcdGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KGl0ZW0gPT4gZGF0YSA9PT0gaXRlbSk7XHJcblxyXG5cdFx0aWYoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHR0aGlzLmRhdGFbZGF0YS50eXBlXVtkYXRhLmlkXS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b2dnbGVJdGVtKGluZGV4LCBrZXkpIHtcclxuXHRcdHRoaXMuZGF0YVtrZXldW2luZGV4XS5jaGVja2VkXHJcblx0XHRcdD8gdGhpcy5hZGQodGhpcy5kYXRhW2tleV1baW5kZXhdKVxyXG5cdFx0XHQ6IHRoaXMucmVtb3ZlKHRoaXMuZGF0YVtrZXldW2luZGV4XSk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVBbGwoa2V5KSB7XHJcblx0XHRsZXQgc3RhdGUgPSB0aGlzLml0ZW1zU3RhdGUoa2V5KTtcclxuXHJcblx0XHR0aGlzLmRhdGFba2V5XVxyXG5cdFx0XHQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNoZWNrZWQgPT09IHN0YXRlKVxyXG5cdFx0XHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XHJcblx0XHRcdFx0c3RhdGUgPyB0aGlzLnJlbW92ZShpdGVtKSA6IHRoaXMuYWRkKGl0ZW0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGl0ZW1zU3RhdGUoa2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhW2tleV0uZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zdG9yZS5qcyIsImV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XHJcblx0dGVtcGxhdGUoaXRlbXMpIHtcclxuXHRcdHJldHVyblx0aXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICtcclxuXHRcdFx0XHRcdGA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgdGFiaW5kZXg9XCIwXCIgZGF0YS1pZD1cIiR7Y3Vyci5pZH1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0ZW0tdGl0bGVcIj4ke2N1cnIuZGF0YS50aXRsZX08L3NwYW4+PGJyPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiR7Y3Vyci5kYXRhLnN1YnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9saT5gLCAnJyk7XHJcblx0fVxyXG5cclxuXHR0ZW1wbGF0ZU91dHB1dChpdGVtcykge1xyXG5cdFx0cmV0dXJuXHRpdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIsIGluZGV4KSA9PiBwcmV2ICtcclxuXHRcdFx0XHRcdGA8bGkgY2xhc3M9XCJpY29uLXJlc3VsdFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIGRhdGEtdHlwZT1cIiR7Y3Vyci50eXBlfVwiPiR7Y3Vyci5kYXRhLnRpdGxlfSAtICR7Y3Vyci5kYXRhLnN1YnRleHR9XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0cmFzaC1iaW5cIiB0YWJpbmRleD1cIjBcIj5cclxuXHRcdFx0XHRcdDwvbGk+YCwgJycpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3RlbXBsYXRlLmpzIiwiZXhwb3J0IGNsYXNzIEFydGljbGVJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihkYXRhLCBpbmRleCwgdHlwZSl7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5pZCA9IGluZGV4O1xyXG5cdFx0dGhpcy5jaGVja2VkID0gZmFsc2U7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FydGljbGUtaXRlbS5qcyIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Gb3JtIH0gZnJvbSAnLi9zZWxlY3Rpb24tZm9ybSc7XHJcbmltcG9ydCB7IFNlbmRGb3JtIH0gZnJvbSAnLi9zZW5kLWZvcm0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gICcuL3RlbXBsYXRlJztcclxuaW1wb3J0IHsgcXMgfSBmcm9tICcuL2hlbHBlcnMnXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Y29uc3QgZG9jdW1lbnRzRWwgPSBxcygnLmRvY3VtZW50cycpO1xyXG5cdGNvbnN0IGxpbmtzRWwgPSBxcygnLmxpbmtzJyk7XHJcblx0Y29uc3QgbGFic0VsID0gcXMoJy5sYWJzJyk7XHJcblx0Y29uc3Qgc2VuZEZvcm1FbCA9IHFzKCcuc2VuZC1sZXR0ZXInKTtcclxuXHJcblx0Y29uc3QgZGF0YSA9IG5ldyBEYXRhKCkuZGF0YTtcclxuXHRjb25zdCBzdG9yZSA9IG5ldyBTdG9yZShkYXRhKTtcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSgpO1xyXG5cclxuXHRjb25zdCBkb2N1bWVudHMgPSBuZXcgU2VsZWN0aW9uRm9ybShkb2N1bWVudHNFbCwgdGVtcGxhdGUsIHN0b3JlKTtcclxuXHRjb25zdCBsaW5rcyA9IG5ldyBTZWxlY3Rpb25Gb3JtKGxpbmtzRWwsIHRlbXBsYXRlLCBzdG9yZSk7XHJcblx0Y29uc3QgbGFicyA9IG5ldyBTZWxlY3Rpb25Gb3JtKGxhYnNFbCwgdGVtcGxhdGUsIHN0b3JlKTtcclxuXHRjb25zdCBzZW5kRm9ybSA9IG5ldyBTZW5kRm9ybShzZW5kRm9ybUVsLCB0ZW1wbGF0ZSwgc3RvcmUpO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=