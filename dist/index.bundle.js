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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Listtodo = document.getElementById('listtodo');
var clean = document.getElementById('Clean');
var cleanall = document.getElementById('Clean-All');
var Todoc = /*#__PURE__*/_createClass(function Todoc() {
  var _this = this;
  _classCallCheck(this, Todoc);
  _defineProperty(this, "add", function (title, complete) {
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.collection.length + 1;
    var struction = new _class_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, complete, id);
    _this.collection.push(struction);
    _this.addto(struction);
  });
  _defineProperty(this, "addto", function (struction) {
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
    for (var i = 0; i < _this.collection.length; i += 1) {
      if (_this.collection[i].complete === true) {
        maintext.classList.add('text');
        checkbox.checked = true;
      } else {
        maintext.classList.remove('text');
        checkbox.checked = false;
      }
    }
    // For remove Check mark
    clean.addEventListener('click', function () {
      _this.collection = _this.collection.filter(function (clean) {
        return clean.complete !== true;
      });
      _this.updateid();
      Listtodo.innerHTML = '';
      _this.collection.forEach(function (x) {
        return _this.addto(x);
      });
    });
    cleanall.addEventListener('click', function () {
      Listtodo.removeChild(main);
      _this.collection = [];
    });
  });
  _defineProperty(this, "remove", function (id) {
    _this.collection = _this.collection.filter(function (task) {
      return task.id !== _this.collection[id - 1].id;
    });
    _this.updateid();
  });
  _defineProperty(this, "updateid", function () {
    for (var i = 0; i < _this.collection.length; i += 1) {
      _this.collection[i].id = i + 1;
    }
  });
  this.collection = [];
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRTtFQUNqQixDQUFDO0VBQUEsa0NBRVUsWUFBTTtJQUNmLEtBQUssSUFBSUYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEtBQUksQ0FBQ3ZDLFVBQVUsQ0FBQ2EsTUFBTSxFQUFFMEIsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNsRCxLQUFJLENBQUN2QyxVQUFVLENBQUN1QyxDQUFDLENBQUMsQ0FBQzNCLEVBQUUsR0FBRzJCLENBQUMsR0FBRyxDQUFDO0lBQy9CO0VBQ0YsQ0FBQztFQTlGQyxJQUFJLENBQUN2QyxVQUFVLEdBQUcsRUFBRTtBQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNWa0I2QyxJQUFJLDZCQUN2QixnQkFBd0M7RUFBQSxJQUE1QnhDLEtBQUssdUVBQUcsSUFBSTtFQUFBLElBQUVDLFFBQVE7RUFBQSxJQUFFTSxFQUFFO0VBQUE7RUFDcEMsSUFBSSxDQUFDUCxLQUFLLEdBQUdBLEtBQUs7RUFDbEIsSUFBSSxDQUFDTyxFQUFFLEdBQUdBLEVBQUU7RUFDWixJQUFJLENBQUNOLFFBQVEsR0FBR0EsUUFBUTtBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7QUNMSCIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vc3JjL21vZHVsZXMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL3NyYy9zdHlsZS9tYWluLmNzcz9hMTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS9tYWluLmNzcyc7XG5pbXBvcnQgVG9kb2NvbiBmcm9tICcuL21vZHVsZXMvYXBwLmpzJztcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0dGV4dCcpO1xuXG5jb25zdCB0b2RvID0gbmV3IFRvZG9jb24oKTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgdG9kby5hZGQoaW5wdXQudmFsdWUsIGZhbHNlKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0Qm9vaycsIEpTT04uc3RyaW5naWZ5KHRvZG8uY29sbGVjdGlvbikpO1xufSk7XG5cbmlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RCb29rJykgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEJvb2snKSk7XG4gIGxpc3QuZm9yRWFjaCgoY29sbGVjdGlvbikgPT4ge1xuICAgIHRvZG8uYWRkKGNvbGxlY3Rpb24udGl0bGUsIGNvbGxlY3Rpb24uY29tcGxldGUpO1xuICB9KTtcbn0iLCJpbXBvcnQgVG9kb2NvbiBmcm9tICcuL2NsYXNzLmpzJztcbmltcG9ydCBpY29uIGZyb20gJy4uL2Fzc2V0cy9pY29uczgtcmVtb3ZlLTY0LnBuZyc7XG5cbmNvbnN0IExpc3R0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3R0b2RvJyk7XG5jb25zdCBjbGVhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDbGVhbicpO1xuY29uc3QgY2xlYW5hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2xlYW4tQWxsJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9jIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gW107XG4gIH1cblxuICBhZGQgPSAodGl0bGUsIGNvbXBsZXRlLCBpZCA9IHRoaXMuY29sbGVjdGlvbi5sZW5ndGggKyAxKSA9PiB7XG4gICAgY29uc3Qgc3RydWN0aW9uID0gbmV3IFRvZG9jb24odGl0bGUsIGNvbXBsZXRlLCBpZCk7XG4gICAgdGhpcy5jb2xsZWN0aW9uLnB1c2goc3RydWN0aW9uKTtcbiAgICB0aGlzLmFkZHRvKHN0cnVjdGlvbik7XG4gIH1cblxuICBhZGR0byA9IChzdHJ1Y3Rpb24pID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RsaScpO1xuICAgIG1haW4uaWQgPSBzdHJ1Y3Rpb24uaWQ7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNvbXBsZXRlZCA9IHN0cnVjdGlvbi5jb21wbGV0ZTtcbiAgICBjb25zdCBtYWludGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbWFpbnRleHQudmFsdWUgPSBzdHJ1Y3Rpb24udGl0bGU7XG4gICAgbWFpbnRleHQuc2V0QXR0cmlidXRlKCdyZWFkT25seScsICdyZWFkT25seScpO1xuICAgIG1haW50ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQtYXJlYScpO1xuICAgIGNvbnN0IGljb25kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uZGVsZXRlLmFsdCA9ICdEZWxldGUnO1xuICAgIGljb25kZWxldGUuc3JjID0gaWNvbjtcbiAgICBpY29uZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIC8vICAgIEZvciBlZGl0IHRoZSB0ZXh0IGFyZWFcbiAgICBtYWludGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1haW50ZXh0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZE9ubHknKTtcbiAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5hZGQoJ2JvcmRlcicpO1xuICAgICAgbWFpbnRleHQuZm9jdXMoKTtcbiAgICB9KTtcbiAgICBtYWludGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LnJlbW92ZSgnYm9yZGVyJyk7XG4gICAgICAgIC8vIHRlcmdldHRpbmcgb24gdGhlIGluZGV4O1xuICAgICAgICBtYWludGV4dC5zZXRBdHRyaWJ1dGUoJ3JlYWRPbmx5JywgJ3JlYWRPbmx5Jyk7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblsoTnVtYmVyKGlkKSkgLSAxXS50aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBtYWludGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbltpZCAtIDFdLmNvbXBsZXRlID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQnKTtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uW2lkIC0gMV0uY29tcGxldGUgPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1haW4uYXBwZW5kKFxuICAgICAgY2hlY2tib3gsXG4gICAgICBtYWludGV4dCxcbiAgICAgIGljb25kZWxldGUsXG4gICAgKTtcbiAgICBMaXN0dG9kby5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAvLyAgICBGb3IgdGhlIHJlbW92ZVxuICAgIGljb25kZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBMaXN0dG9kby5yZW1vdmVDaGlsZChtYWluKTtcbiAgICAgIHRoaXMucmVtb3ZlKHN0cnVjdGlvbi5pZCk7XG4gICAgfSk7XG4gICAgLy8gICBGb3IgY2hlY2tpbiB0aGUgY29tcGxldGUgaXMgdHJ1ZSBvciBub3RcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbltpXS5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtYWludGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LnJlbW92ZSgndGV4dCcpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEZvciByZW1vdmUgQ2hlY2sgbWFya1xuICAgIGNsZWFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmZpbHRlcigoY2xlYW4pID0+IGNsZWFuLmNvbXBsZXRlICE9PSB0cnVlKTtcbiAgICAgIHRoaXMudXBkYXRlaWQoKTtcbiAgICAgIExpc3R0b2RvLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5jb2xsZWN0aW9uLmZvckVhY2goKHgpID0+IHRoaXMuYWRkdG8oeCkpO1xuICAgIH0pO1xuICAgIGNsZWFuYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBMaXN0dG9kby5yZW1vdmVDaGlsZChtYWluKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gW107XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUgPSAoaWQpID0+IHtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb24uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0aGlzLmNvbGxlY3Rpb25baWQgLSAxXS5pZCk7XG4gICAgdGhpcy51cGRhdGVpZCgpO1xuICB9XG5cbiAgdXBkYXRlaWQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbltpXS5pZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IG51bGwsIGNvbXBsZXRlLCBpZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlRvZG9jb24iLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2RvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhZGQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xsZWN0aW9uIiwiZ2V0SXRlbSIsImxpc3QiLCJwYXJzZSIsImZvckVhY2giLCJ0aXRsZSIsImNvbXBsZXRlIiwiaWNvbiIsIkxpc3R0b2RvIiwiY2xlYW4iLCJjbGVhbmFsbCIsIlRvZG9jIiwiaWQiLCJsZW5ndGgiLCJzdHJ1Y3Rpb24iLCJwdXNoIiwiYWRkdG8iLCJtYWluIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImNoZWNrYm94IiwidHlwZSIsImNvbXBsZXRlZCIsIm1haW50ZXh0Iiwic2V0QXR0cmlidXRlIiwiaWNvbmRlbGV0ZSIsImFsdCIsInNyYyIsInJlbW92ZUF0dHJpYnV0ZSIsImZvY3VzIiwia2V5IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIk51bWJlciIsImNoZWNrZWQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImZpbHRlciIsInVwZGF0ZWlkIiwiaW5uZXJIVE1MIiwieCIsInRhc2siLCJUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==