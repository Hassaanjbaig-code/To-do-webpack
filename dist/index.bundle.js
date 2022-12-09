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
  todo.add(input.value, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0VBQ3BDLElBQUksQ0FBQ04sS0FBSyxHQUFHQSxLQUFLO0VBQ2xCLElBQUksQ0FBQ00sRUFBRSxHQUFHQSxFQUFFO0VBQ1osSUFBSSxDQUFDTCxRQUFRLEdBQUdBLFFBQVE7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL3NyYy9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvc3R5bGUvbWFpbi5jc3M/YTE1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUvbWFpbi5jc3MnO1xuaW1wb3J0IFRvZG9jb24gZnJvbSAnLi9tb2R1bGVzL2FwcC5qcyc7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldHRleHQnKTtcblxuY29uc3QgdG9kbyA9IG5ldyBUb2RvY29uKCk7XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIHRvZG8uYWRkKGlucHV0LnZhbHVlLCB0cnVlKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0Qm9vaycsIEpTT04uc3RyaW5naWZ5KHRvZG8uY29sbGVjdGlvbikpO1xufSk7XG5cbmlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RCb29rJykgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEJvb2snKSk7XG4gIGxpc3QuZm9yRWFjaCgoY29sbGVjdGlvbikgPT4ge1xuICAgIHRvZG8uYWRkKGNvbGxlY3Rpb24udGl0bGUsIGNvbGxlY3Rpb24uY29tcGxldGUpO1xuICB9KTtcbn0iLCJpbXBvcnQgVG9kb2NvbiBmcm9tICcuL2NsYXNzLmpzJztcbmltcG9ydCBpY29uIGZyb20gJy4uL2Fzc2V0cy9pY29uczgtcmVtb3ZlLTY0LnBuZyc7XG5cbmNvbnN0IExpc3R0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3R0b2RvJyk7XG5jb25zdCBjbGVhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDbGVhbicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvYyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IFtdO1xuICB9XG5cbiAgYWRkKHRpdGxlLCBjb21wbGV0ZSwgaWQgPSB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoICsgMSkge1xuICAgIGNvbnN0IHN0cnVjdGlvbiA9IG5ldyBUb2RvY29uKHRpdGxlLCBjb21wbGV0ZSwgaWQpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKHN0cnVjdGlvbik7XG4gICAgdGhpcy5hZGR0byhzdHJ1Y3Rpb24pO1xuICB9XG5cbiAgYWRkdG8oc3RydWN0aW9uKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0bGknKTtcbiAgICBtYWluLmlkID0gc3RydWN0aW9uLmlkO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jb21wbGV0ZWQgPSBzdHJ1Y3Rpb24uY29tcGxldGU7XG4gICAgY29uc3QgbWFpbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1haW50ZXh0LnZhbHVlID0gc3RydWN0aW9uLnRpdGxlO1xuICAgIG1haW50ZXh0LnNldEF0dHJpYnV0ZSgncmVhZE9ubHknLCAncmVhZE9ubHknKTtcbiAgICBtYWludGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWFyZWEnKTtcbiAgICBjb25zdCBpY29uZGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbmRlbGV0ZS5hbHQgPSAnRGVsZXRlJztcbiAgICBpY29uZGVsZXRlLnNyYyA9IGljb247XG4gICAgaWNvbmRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAvLyAgICBGb3IgZWRpdCB0aGUgdGV4dCBhcmVhXG4gICAgbWFpbnRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYWludGV4dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRPbmx5Jyk7XG4gICAgICBtYWludGV4dC5jbGFzc0xpc3QuYWRkKCdib3JkZXInKTtcbiAgICAgIG1haW50ZXh0LmZvY3VzKCk7XG4gICAgfSk7XG4gICAgbWFpbnRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2JvcmRlcicpO1xuICAgICAgICAvLyB0ZXJnZXR0aW5nIG9uIHRoZSBpbmRleDtcbiAgICAgICAgbWFpbnRleHQuc2V0QXR0cmlidXRlKCdyZWFkT25seScsICdyZWFkT25seScpO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25bKE51bWJlcihpZCkpIC0gMV0udGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baWQgLSAxXS5jb21wbGV0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWludGV4dC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0Jyk7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbltpZCAtIDFdLmNvbXBsZXRlID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtYWluLmFwcGVuZChcbiAgICAgIGNoZWNrYm94LFxuICAgICAgbWFpbnRleHQsXG4gICAgICBpY29uZGVsZXRlLFxuICAgICk7XG4gICAgTGlzdHRvZG8uYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgLy8gICAgRm9yIHRoZSByZW1vdmVcbiAgICBpY29uZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgTGlzdHRvZG8ucmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgICB0aGlzLnJlbW92ZShzdHJ1Y3Rpb24uaWQpO1xuICAgIH0pO1xuICAgIC8vICAgRm9yIGNoZWNraW4gdGhlIGNvbXBsZXRlIGlzIHRydWUgb3Igbm90XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25baV0uY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQnKTtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBGb3IgcmVtb3ZlIGFsbFxuICAgIGNsZWFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgTGlzdHRvZG8uaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmNvbGxlY3Rpb24gPSBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZShpZCkge1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRoaXMuY29sbGVjdGlvbltpZCAtIDFdLmlkKTtcbiAgICB0aGlzLnVwZGF0ZWlkKCk7XG4gIH1cblxuICB1cGRhdGVpZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldLmlkID0gaSArIDE7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gbnVsbCwgY29tcGxldGUsIGlkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVG9kb2NvbiIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZG8iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImFkZCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbGxlY3Rpb24iLCJnZXRJdGVtIiwibGlzdCIsInBhcnNlIiwiZm9yRWFjaCIsInRpdGxlIiwiY29tcGxldGUiLCJpY29uIiwiTGlzdHRvZG8iLCJjbGVhbiIsIlRvZG9jIiwiaWQiLCJsZW5ndGgiLCJzdHJ1Y3Rpb24iLCJwdXNoIiwiYWRkdG8iLCJtYWluIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImNoZWNrYm94IiwidHlwZSIsImNvbXBsZXRlZCIsIm1haW50ZXh0Iiwic2V0QXR0cmlidXRlIiwiaWNvbmRlbGV0ZSIsImFsdCIsInNyYyIsInJlbW92ZUF0dHJpYnV0ZSIsImZvY3VzIiwia2V5IiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIk51bWJlciIsImNoZWNrZWQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImlubmVySFRNTCIsImZpbHRlciIsInRhc2siLCJ1cGRhdGVpZCIsIlRvZG8iXSwic291cmNlUm9vdCI6IiJ9