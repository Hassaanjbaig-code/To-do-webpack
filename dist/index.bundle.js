"use strict";
(self["webpackChunknew_folder"] = self["webpackChunknew_folder"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");


var input = document.getElementById('gettext');
var todo = new _modules_app_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
input.addEventListener('change', function (e) {
  todo.add(input.value, false);
  e.preventDefault();
  input.value = '';
});
window.addEventListener('beforeunload', function () {
  localStorage.setItem('listBook', JSON.stringify(todo.collection));
});
if (window.localStorage.getItem('listBook') !== 'undefined') {
  var list = JSON.parse(window.localStorage.getItem('listBook'));
  list.forEach(function (collection) {
    todo.add(collection.title, collection.complete);
  });
}

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todoc)
/* harmony export */ });
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ "./src/modules/class.js");
/* harmony import */ var _assets_icons8_remove_64_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons8-remove-64.png */ "./src/assets/icons8-remove-64.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Listtodo = document.getElementById('listtodo');
var clean = document.getElementById('Clean');
var Todoc = /*#__PURE__*/function () {
  function Todoc() {
    _classCallCheck(this, Todoc);
    this.collection = [];
  }
  _createClass(Todoc, [{
    key: "add",
    value: function add(title, complete) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.collection.length + 1;
      var struction = new _class_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, complete, id);
      this.collection.push(struction);
      this.addto(struction);
    }
  }, {
    key: "addto",
    value: function addto(struction) {
      var _this = this;
      var main = document.createElement('li');
      main.classList.add('projectli');
      main.id = struction.id;
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.completed = struction.complete;
      var maintext = document.createElement('input');
      maintext.value = struction.title;
      maintext.setAttribute('readOnly', 'readOnly');
      maintext.classList.add('text-area');
      var icondelete = document.createElement('img');
      icondelete.alt = 'Delete';
      icondelete.src = _assets_icons8_remove_64_png__WEBPACK_IMPORTED_MODULE_1__;
      icondelete.classList.add('delete');
      //    For edit the text area
      maintext.addEventListener('click', function () {
        maintext.removeAttribute('readOnly');
        maintext.classList.add('border');
        maintext.focus();
      });
      maintext.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          var title = e.target.value;
          var id = e.target.parentElement.id;
          maintext.classList.remove('border');
          // tergetting on the index;
          maintext.setAttribute('readOnly', 'readOnly');
          _this.collection[Number(id) - 1].title = title;
        }
      });
      checkbox.addEventListener('change', function (e) {
        if (checkbox.checked === true) {
          maintext.classList.add('text');
          var id = e.target.parentElement.id;
          _this.collection[id - 1].complete = checkbox.checked;
        } else {
          maintext.classList.remove('text');
          var _id = e.target.parentElement.id;
          _this.collection[_id - 1].complete = checkbox.checked;
        }
      });
      main.append(checkbox, maintext, icondelete);
      Listtodo.appendChild(main);
      //    For the remove
      icondelete.addEventListener('click', function () {
        Listtodo.removeChild(main);
        _this.remove(struction.id);
      });
      //   For checkin the complete is true or not
      for (var i = 0; i < this.collection.length; i += 1) {
        if (this.collection[i].complete === true) {
          maintext.classList.add('text');
          checkbox.checked = true;
        } else {
          maintext.classList.remove('text');
          checkbox.checked = false;
        }
      }
      // For remove all
      clean.addEventListener('click', function () {
        Listtodo.innerHTML = '';
        _this.collection = [];
      });
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var _this2 = this;
      this.collection = this.collection.filter(function (task) {
        return task.id !== _this2.collection[id - 1].id;
      });
      this.updateid();
    }
  }, {
    key: "updateid",
    value: function updateid() {
      for (var i = 0; i < this.collection.length; i += 1) {
        this.collection[i].id = i + 1;
      }
    }
  }]);
  return Todoc;
}();


/***/ }),

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Todo = /*#__PURE__*/_createClass(function Todo() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var complete = arguments.length > 1 ? arguments[1] : undefined;
  var id = arguments.length > 2 ? arguments[2] : undefined;
  _classCallCheck(this, Todo);
  this.title = title;
  this.id = id;
  this.complete = complete;
});


/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons8-remove-64.png":
/*!*****************************************!*\
  !*** ./src/assets/icons8-remove-64.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icons8-remove-64.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0VBQ3BDLElBQUksQ0FBQ04sS0FBSyxHQUFHQSxLQUFLO0VBQ2xCLElBQUksQ0FBQ00sRUFBRSxHQUFHQSxFQUFFO0VBQ1osSUFBSSxDQUFDTCxRQUFRLEdBQUdBLFFBQVE7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL3NyYy9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvc3R5bGUvbWFpbi5jc3M/YTE1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUvbWFpbi5jc3MnO1xuaW1wb3J0IFRvZG9jb24gZnJvbSAnLi9tb2R1bGVzL2FwcC5qcyc7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldHRleHQnKTtcblxuY29uc3QgdG9kbyA9IG5ldyBUb2RvY29uKCk7XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIHRvZG8uYWRkKGlucHV0LnZhbHVlLCBmYWxzZSk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEJvb2snLCBKU09OLnN0cmluZ2lmeSh0b2RvLmNvbGxlY3Rpb24pKTtcbn0pO1xuXG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0Qm9vaycpICE9PSAndW5kZWZpbmVkJykge1xuICBjb25zdCBsaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RCb29rJykpO1xuICBsaXN0LmZvckVhY2goKGNvbGxlY3Rpb24pID0+IHtcbiAgICB0b2RvLmFkZChjb2xsZWN0aW9uLnRpdGxlLCBjb2xsZWN0aW9uLmNvbXBsZXRlKTtcbiAgfSk7XG59IiwiaW1wb3J0IFRvZG9jb24gZnJvbSAnLi9jbGFzcy5qcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnM4LXJlbW92ZS02NC5wbmcnO1xuXG5jb25zdCBMaXN0dG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0dG9kbycpO1xuY29uc3QgY2xlYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2xlYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb2Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBbXTtcbiAgfVxuXG4gIGFkZCh0aXRsZSwgY29tcGxldGUsIGlkID0gdGhpcy5jb2xsZWN0aW9uLmxlbmd0aCArIDEpIHtcbiAgICBjb25zdCBzdHJ1Y3Rpb24gPSBuZXcgVG9kb2Nvbih0aXRsZSwgY29tcGxldGUsIGlkKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChzdHJ1Y3Rpb24pO1xuICAgIHRoaXMuYWRkdG8oc3RydWN0aW9uKTtcbiAgfVxuXG4gIGFkZHRvKHN0cnVjdGlvbikge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdGxpJyk7XG4gICAgbWFpbi5pZCA9IHN0cnVjdGlvbi5pZDtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY29tcGxldGVkID0gc3RydWN0aW9uLmNvbXBsZXRlO1xuICAgIGNvbnN0IG1haW50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBtYWludGV4dC52YWx1ZSA9IHN0cnVjdGlvbi50aXRsZTtcbiAgICBtYWludGV4dC5zZXRBdHRyaWJ1dGUoJ3JlYWRPbmx5JywgJ3JlYWRPbmx5Jyk7XG4gICAgbWFpbnRleHQuY2xhc3NMaXN0LmFkZCgndGV4dC1hcmVhJyk7XG4gICAgY29uc3QgaWNvbmRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGljb25kZWxldGUuYWx0ID0gJ0RlbGV0ZSc7XG4gICAgaWNvbmRlbGV0ZS5zcmMgPSBpY29uO1xuICAgIGljb25kZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgLy8gICAgRm9yIGVkaXQgdGhlIHRleHQgYXJlYVxuICAgIG1haW50ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFpbnRleHQucmVtb3ZlQXR0cmlidXRlKCdyZWFkT25seScpO1xuICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LmFkZCgnYm9yZGVyJyk7XG4gICAgICBtYWludGV4dC5mb2N1cygpO1xuICAgIH0pO1xuICAgIG1haW50ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBtYWludGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXInKTtcbiAgICAgICAgLy8gdGVyZ2V0dGluZyBvbiB0aGUgaW5kZXg7XG4gICAgICAgIG1haW50ZXh0LnNldEF0dHJpYnV0ZSgncmVhZE9ubHknLCAncmVhZE9ubHknKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uWyhOdW1iZXIoaWQpKSAtIDFdLnRpdGxlID0gdGl0bGU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uW2lkIC0gMV0uY29tcGxldGUgPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LnJlbW92ZSgndGV4dCcpO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baWQgLSAxXS5jb21wbGV0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWFpbi5hcHBlbmQoXG4gICAgICBjaGVja2JveCxcbiAgICAgIG1haW50ZXh0LFxuICAgICAgaWNvbmRlbGV0ZSxcbiAgICApO1xuICAgIExpc3R0b2RvLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIC8vICAgIEZvciB0aGUgcmVtb3ZlXG4gICAgaWNvbmRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIExpc3R0b2RvLnJlbW92ZUNoaWxkKG1haW4pO1xuICAgICAgdGhpcy5yZW1vdmUoc3RydWN0aW9uLmlkKTtcbiAgICB9KTtcbiAgICAvLyAgIEZvciBjaGVja2luIHRoZSBjb21wbGV0ZSBpcyB0cnVlIG9yIG5vdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jb2xsZWN0aW9uW2ldLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWludGV4dC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0Jyk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRm9yIHJlbW92ZSBhbGxcbiAgICBjbGVhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIExpc3R0b2RvLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5jb2xsZWN0aW9uID0gW107XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoaWQpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb24uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0aGlzLmNvbGxlY3Rpb25baWQgLSAxXS5pZCk7XG4gICAgdGhpcy51cGRhdGVpZCgpO1xuICB9XG5cbiAgdXBkYXRlaWQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbltpXS5pZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IG51bGwsIGNvbXBsZXRlLCBpZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlRvZG9jb24iLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2RvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhZGQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xsZWN0aW9uIiwiZ2V0SXRlbSIsImxpc3QiLCJwYXJzZSIsImZvckVhY2giLCJ0aXRsZSIsImNvbXBsZXRlIiwiaWNvbiIsIkxpc3R0b2RvIiwiY2xlYW4iLCJUb2RvYyIsImlkIiwibGVuZ3RoIiwic3RydWN0aW9uIiwicHVzaCIsImFkZHRvIiwibWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjaGVja2JveCIsInR5cGUiLCJjb21wbGV0ZWQiLCJtYWludGV4dCIsInNldEF0dHJpYnV0ZSIsImljb25kZWxldGUiLCJhbHQiLCJzcmMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmb2N1cyIsImtleSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJOdW1iZXIiLCJjaGVja2VkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImkiLCJpbm5lckhUTUwiLCJmaWx0ZXIiLCJ0YXNrIiwidXBkYXRlaWQiLCJUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==