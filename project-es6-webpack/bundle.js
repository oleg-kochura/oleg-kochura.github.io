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
			(0, _helpers.qs)('.list-group', this.domElement).innerHTML = this.template.inputTmpl(this.items);
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
			this.domCounter = (0, _helpers.qs)('.counter', this.domElement);
			(0, _helpers.$on)('click', this.domList, this.removeItem.bind(this));
			_dispatcher.dispatcher.addListener('onToggle', this.refresh.bind(this));
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			this.domList.innerHTML = this.template.outputTmpl(this.store.selected);
			this.domCounter.innerHTML = this.store.selected.length;
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
				transformedData[key] = data[key].items.map(function (item, i) {
					return new _articleItem.ArticleItem(item, i, key);
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
		value: function toggleItem(i, key) {
			this.data[key][i].checked ? this.add(this.data[key][i]) : this.remove(this.data[key][i]);
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
		key: 'inputTmpl',
		value: function inputTmpl(items) {
			return items.reduce(function (prev, curr) {
				return prev + ('<li class="list-item">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="checkbox" tabindex="0" data-id="' + curr.id + '">\n\t\t\t\t\t\t\t<span class="item-title">' + curr.data.title + '</span><br>\n\t\t\t\t\t\t\t<span>' + curr.data.subtext + '</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</li>');
			}, '');
		}
	}, {
		key: 'outputTmpl',
		value: function outputTmpl(items) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjliYjQ1NjE2ODU1Nzk5ZjZiMDEiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZWxlY3Rpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZW5kLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXJ0aWNsZS1pdGVtLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiXSwibmFtZXMiOlsiYmluZE1vZGVsSW5wdXQiLCIkb24iLCJxcyIsIm9iaiIsInByb3BlcnR5IiwiZG9tRWxlbSIsImdldCIsImNoZWNrZWQiLCJzZXQiLCJuZXdWYWx1ZSIsImNvbmZpZ3VyYWJsZSIsImV2ZW50IiwiZWxlbWVudCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlbGVjdG9yIiwic2NvcGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJFdmVudERpc3BhdGNoZXIiLCJldmVudHMiLCJ1bmRlZmluZWQiLCJsaXN0ZW5lcnMiLCJwdXNoIiwiZGV0YWlscyIsImNvbnNvbGUiLCJlcnJvciIsImZvckVhY2giLCJsaXN0ZW5lciIsImRpc3BhdGNoZXIiLCJEYXRhIiwiZG9jdW1lbnRzIiwiaXRlbXMiLCJ0aXRsZSIsInN1YnRleHQiLCJsaW5rcyIsImxhYnMiLCJTZWxlY3Rpb25Gb3JtIiwidGVtcGxhdGUiLCJzdG9yZSIsImRvbUVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJkYXRhIiwiaW5pdCIsInJlbmRlciIsImNoZWtib3hBcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlQnV0dG9uIiwiaGFuZGxlRXZlbnRzIiwiaXRlbSIsImkiLCJpbm5lckhUTUwiLCJpbnB1dFRtcGwiLCJ0b2dnbGVDaGVja2JveCIsImJpbmQiLCJ0b2dnbGVBbGwiLCJhZGRMaXN0ZW5lciIsInNldFRvZ2dsZUJ1dHRvblN0YXRlIiwiaW5kZXgiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidG9nZ2xlSXRlbSIsImRpc3BhdGNoIiwiaXRlbXNTdGF0ZSIsInZhbHVlIiwiU2VuZEZvcm0iLCJkb21MaXN0IiwiZG9tQ291bnRlciIsInJlbW92ZUl0ZW0iLCJyZWZyZXNoIiwib3V0cHV0VG1wbCIsInNlbGVjdGVkIiwibGVuZ3RoIiwidGFnTmFtZSIsInBhcmVudE5vZGUiLCJyZW1vdmUiLCJTdG9yZSIsImdldERhdGEiLCJ0cmFuc2Zvcm1lZERhdGEiLCJrZXkiLCJtYXAiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJhZGQiLCJzdGF0ZSIsImZpbHRlciIsImV2ZXJ5IiwiVGVtcGxhdGUiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsIkFydGljbGVJdGVtIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnRzRWwiLCJsaW5rc0VsIiwibGFi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QUFDQSx1Q0FBdUM7QUFDdkMsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0Esb0VBQXVFLDBDQUEwQyxFOzs7Ozs7QUNGakg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5YmI0NTYxNjg1NTc5OWY2YjAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGJpbmRNb2RlbElucHV0KG9iaiwgcHJvcGVydHksIGRvbUVsZW0pIHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wZXJ0eSwge1xyXG5cdFx0Z2V0OiAoKSA9PiBkb21FbGVtLmNoZWNrZWQsXHJcblx0XHRzZXQ6IChuZXdWYWx1ZSkgPT4gZG9tRWxlbS5jaGVja2VkID0gbmV3VmFsdWUsXHJcblx0XHRjb25maWd1cmFibGU6IHRydWVcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICRvbihldmVudCwgZWxlbWVudCwgY2FsbGJhY2spIHtcclxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHFzKHNlbGVjdG9yLCBzY29wZSkge1xyXG5cdHJldHVybiAoc2NvcGUgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGVscGVycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBFdmVudERpc3BhdGNoZXIge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHRoaXMuZXZlbnRzID0ge307XHJcblx0fVxyXG5cclxuXHRhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdGlmICh0aGlzLmV2ZW50c1tldmVudF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudF0gPSB7XHJcblx0XHRcdFx0bGlzdGVuZXJzOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHNbZXZlbnRdLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcclxuXHR9XHJcblxyXG5cdGRpc3BhdGNoKGV2ZW50LCBkZXRhaWxzKSB7XHJcblx0XHRpZiAodGhpcy5ldmVudHNbZXZlbnRdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhpcyBldmVudDogJHtldmVudH0gZG9lcyBub3QgZXhpc3RgKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50XS5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuXHRcdFx0bGlzdGVuZXIoZGV0YWlscyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Rpc3BhdGNoZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIERhdGEge1xyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZG9jdW1lbnRzOiB7XHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDNcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSx7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDRcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gNVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSA2XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSA3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDhcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gOVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaW5rczoge1xyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE1XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE2XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDE3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMThcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTlcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMjBcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMjFcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyMlwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyM1wiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyNFwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAyNVwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDI3XCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdGxhYnM6IHtcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJBcnRpY2xlIE5hbWUgLSAxMDBcIixcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogXCJBdXRob3JzLCBuYW1lIG9mIGVkaXRpb24scHVibGlzaGluZyB5ZWFyLCAobW9yZSBpbmZvPylcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQXJ0aWNsZSBOYW1lIC0gMTAxXCIsXHJcblx0XHRcdFx0XHRcdHN1YnRleHQ6IFwiQXV0aG9ycywgbmFtZSBvZiBlZGl0aW9uLHB1Ymxpc2hpbmcgeWVhciwgKG1vcmUgaW5mbz8pXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkFydGljbGUgTmFtZSAtIDEwMlwiLFxyXG5cdFx0XHRcdFx0XHRzdWJ0ZXh0OiBcIkF1dGhvcnMsIG5hbWUgb2YgZWRpdGlvbixwdWJsaXNoaW5nIHllYXIsIChtb3JlIGluZm8/KVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9kYXRhLmpzIiwiaW1wb3J0IHsgJG9uLCBiaW5kTW9kZWxJbnB1dCwgcXMgfSBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IGRpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uRm9ybSB7XHJcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgdGVtcGxhdGUsIHN0b3JlKSB7XHJcblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHN0b3JlO1xyXG5cdFx0dGhpcy50eXBlID0gdGhpcy5kb21FbGVtZW50LmlkO1xyXG5cdFx0dGhpcy5pdGVtcyA9IHRoaXMuc3RvcmUuZGF0YVt0aGlzLnR5cGVdO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5yZW5kZXIoKTtcclxuXHRcdGxldCBjaGVrYm94QXJyID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG5cdFx0dGhpcy50b2dnbGVCdXR0b24gPSBxcygnLmFkZC1hbGwnLCB0aGlzLmRvbUVsZW1lbnQpO1xyXG5cdFx0dGhpcy5oYW5kbGVFdmVudHMoKTtcclxuXHJcblx0XHR0aGlzLml0ZW1zLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XHJcblx0XHRcdGJpbmRNb2RlbElucHV0KGl0ZW0sICdjaGVja2VkJywgY2hla2JveEFycltpXSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cXMoJy5saXN0LWdyb3VwJywgdGhpcy5kb21FbGVtZW50KS5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlLmlucHV0VG1wbCh0aGlzLml0ZW1zKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUV2ZW50cygpIHtcclxuXHRcdCRvbignY2hhbmdlJywgdGhpcy5kb21FbGVtZW50LCB0aGlzLnRvZ2dsZUNoZWNrYm94LmJpbmQodGhpcykpO1xyXG5cdFx0JG9uKCdjbGljaycsIHRoaXMudG9nZ2xlQnV0dG9uLCB0aGlzLnRvZ2dsZUFsbC5iaW5kKHRoaXMpKTtcclxuXHRcdGRpc3BhdGNoZXIuYWRkTGlzdGVuZXIoJ29uRGVsZXRlJywgdGhpcy5zZXRUb2dnbGVCdXR0b25TdGF0ZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUNoZWNrYm94KGV2ZW50KSB7XHJcblx0XHRsZXQgaW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcclxuXHRcdHRoaXMuc3RvcmUudG9nZ2xlSXRlbShpbmRleCwgdGhpcy50eXBlKTtcclxuXHJcblx0XHR0aGlzLnNldFRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcblx0XHRkaXNwYXRjaGVyLmRpc3BhdGNoKCdvblRvZ2dsZScpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWxsKCkge1xyXG5cdFx0dGhpcy5zdG9yZS50b2dnbGVBbGwodGhpcy50eXBlKTtcclxuXHJcblx0XHR0aGlzLnNldFRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcblx0XHRkaXNwYXRjaGVyLmRpc3BhdGNoKCdvblRvZ2dsZScpO1xyXG5cdH1cclxuXHJcblx0c2V0VG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcblx0XHRpZiAodGhpcy5zdG9yZS5pdGVtc1N0YXRlKHRoaXMudHlwZSkpIHtcclxuXHRcdFx0dGhpcy50b2dnbGVCdXR0b24udmFsdWUgPSAnUkVNT1ZFIEFMTCc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbi52YWx1ZSA9ICdBREQgQUxMJztcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zZWxlY3Rpb24tZm9ybS5qcyIsImltcG9ydCB7ICRvbiwgcXMgfSBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IGRpc3BhdGNoZXIgfSBmcm9tICcuL2Rpc3BhdGNoZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2VuZEZvcm0ge1xyXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRlbXBsYXRlLCBzdG9yZSl7XHJcblx0XHR0aGlzLmRvbUVsZW1lbnQgID0gZWxlbWVudDtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMuc3RvcmUgPSBzdG9yZTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZG9tTGlzdCA9IHFzKCcuaXRlbXMtbGlzdCcsIHRoaXMuZG9tRWxlbWVudCk7XHJcblx0XHR0aGlzLmRvbUNvdW50ZXIgPSBxcygnLmNvdW50ZXInLCB0aGlzLmRvbUVsZW1lbnQpO1xyXG5cdFx0JG9uKCdjbGljaycsIHRoaXMuZG9tTGlzdCwgdGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcykpO1xyXG5cdFx0ZGlzcGF0Y2hlci5hZGRMaXN0ZW5lcignb25Ub2dnbGUnLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0dGhpcy5kb21MaXN0LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUub3V0cHV0VG1wbCh0aGlzLnN0b3JlLnNlbGVjdGVkKTtcclxuXHRcdHRoaXMuZG9tQ291bnRlci5pbm5lckhUTUwgPSB0aGlzLnN0b3JlLnNlbGVjdGVkLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oZXZlbnQpIHtcclxuXHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSB7XHJcblx0XHRcdGxldCBpID0gK2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XHJcblxyXG5cdFx0XHR0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLnN0b3JlLnNlbGVjdGVkW2ldKTtcclxuXHJcblx0XHRcdGRpc3BhdGNoZXIuZGlzcGF0Y2goJ29uRGVsZXRlJyk7XHJcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NlbmQtZm9ybS5qcyIsImltcG9ydCB7IEFydGljbGVJdGVtIH0gZnJvbSAnLi9hcnRpY2xlLWl0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmdldERhdGEoZGF0YSk7XHJcblx0XHR0aGlzLnNlbGVjdGVkID0gW107XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKGRhdGEpIHtcclxuXHRcdGxldCB0cmFuc2Zvcm1lZERhdGEgPSB7fTtcclxuXHJcblx0XHRPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dHJhbnNmb3JtZWREYXRhW2tleV0gPSBkYXRhW2tleV0uaXRlbXMubWFwKCAoaXRlbSwgaSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgQXJ0aWNsZUl0ZW0oaXRlbSwgaSwga2V5KVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB0cmFuc2Zvcm1lZERhdGE7XHJcblx0fVxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZC5wdXNoKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGRhdGEpIHtcclxuXHRcdGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KGl0ZW0gPT4gZGF0YSA9PT0gaXRlbSk7XHJcblxyXG5cdFx0aWYoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHR0aGlzLmRhdGFbZGF0YS50eXBlXVtkYXRhLmlkXS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b2dnbGVJdGVtKGksIGtleSkge1xyXG5cdFx0dGhpcy5kYXRhW2tleV1baV0uY2hlY2tlZFxyXG5cdFx0XHQ/IHRoaXMuYWRkKHRoaXMuZGF0YVtrZXldW2ldKVxyXG5cdFx0XHQ6IHRoaXMucmVtb3ZlKHRoaXMuZGF0YVtrZXldW2ldKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFsbChrZXkpIHtcclxuXHRcdGxldCBzdGF0ZSA9IHRoaXMuaXRlbXNTdGF0ZShrZXkpO1xyXG5cclxuXHRcdHRoaXMuZGF0YVtrZXldXHJcblx0XHRcdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2hlY2tlZCA9PT0gc3RhdGUpXHJcblx0XHRcdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0aXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcclxuXHRcdFx0XHRzdGF0ZSA/IHRoaXMucmVtb3ZlKGl0ZW0pIDogdGhpcy5hZGQoaXRlbSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aXRlbXNTdGF0ZShrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFba2V5XS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCk7XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3N0b3JlLmpzIiwiZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcclxuXHRpbnB1dFRtcGwoaXRlbXMpIHtcclxuXHRcdHJldHVyblx0aXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICtcclxuXHRcdFx0XHRcdGA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgdGFiaW5kZXg9XCIwXCIgZGF0YS1pZD1cIiR7Y3Vyci5pZH1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0ZW0tdGl0bGVcIj4ke2N1cnIuZGF0YS50aXRsZX08L3NwYW4+PGJyPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiR7Y3Vyci5kYXRhLnN1YnRleHR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9saT5gLCAnJyk7XHJcblx0fVxyXG5cclxuXHRvdXRwdXRUbXBsKGl0ZW1zKSB7XHJcblx0XHRyZXR1cm5cdGl0ZW1zLnJlZHVjZSgocHJldiwgY3VyciwgaW5kZXgpID0+IHByZXYgK1xyXG5cdFx0XHRcdFx0YDxsaSBjbGFzcz1cImljb24tcmVzdWx0XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgZGF0YS10eXBlPVwiJHtjdXJyLnR5cGV9XCI+JHtjdXJyLmRhdGEudGl0bGV9IC0gJHtjdXJyLmRhdGEuc3VidGV4dH1cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRyYXNoLWJpblwiIHRhYmluZGV4PVwiMFwiPlxyXG5cdFx0XHRcdFx0PC9saT5gLCAnJyk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdGVtcGxhdGUuanMiLCJleHBvcnQgY2xhc3MgQXJ0aWNsZUl0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKGRhdGEsIGluZGV4LCB0eXBlKXtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmlkID0gaW5kZXg7XHJcblx0XHR0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXJ0aWNsZS1pdGVtLmpzIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvbkZvcm0gfSBmcm9tICcuL3NlbGVjdGlvbi1mb3JtJztcclxuaW1wb3J0IHsgU2VuZEZvcm0gfSBmcm9tICcuL3NlbmQtZm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAgJy4vdGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBxcyB9IGZyb20gJy4vaGVscGVycydcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRjb25zdCBkb2N1bWVudHNFbCA9IHFzKCcuZG9jdW1lbnRzJyk7XHJcblx0Y29uc3QgbGlua3NFbCA9IHFzKCcubGlua3MnKTtcclxuXHRjb25zdCBsYWJzRWwgPSBxcygnLmxhYnMnKTtcclxuXHRjb25zdCBzZW5kRm9ybUVsID0gcXMoJy5zZW5kLWxldHRlcicpO1xyXG5cclxuXHRjb25zdCBkYXRhID0gbmV3IERhdGEoKS5kYXRhO1xyXG5cdGNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKGRhdGEpO1xyXG5cdGNvbnN0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCk7XHJcblxyXG5cdGNvbnN0IGRvY3VtZW50cyA9IG5ldyBTZWxlY3Rpb25Gb3JtKGRvY3VtZW50c0VsLCB0ZW1wbGF0ZSwgc3RvcmUpO1xyXG5cdGNvbnN0IGxpbmtzID0gbmV3IFNlbGVjdGlvbkZvcm0obGlua3NFbCwgdGVtcGxhdGUsIHN0b3JlKTtcclxuXHRjb25zdCBsYWJzID0gbmV3IFNlbGVjdGlvbkZvcm0obGFic0VsLCB0ZW1wbGF0ZSwgc3RvcmUpO1xyXG5cdGNvbnN0IHNlbmRGb3JtID0gbmV3IFNlbmRGb3JtKHNlbmRGb3JtRWwsIHRlbXBsYXRlLCBzdG9yZSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==