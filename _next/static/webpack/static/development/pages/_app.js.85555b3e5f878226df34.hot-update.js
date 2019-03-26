webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/OverlayMenu.js":
/*!***********************************!*\
  !*** ./components/OverlayMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
var _jsxFileName = "/Users/avshash/Documents/Projects/portfolio/components/OverlayMenu.js";



var OverlayMenu = function OverlayMenu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["NavItems"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayMenu);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./components/styles/GlobalStyles.js");
/* harmony import */ var _styles_OverlayMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/OverlayMenu */ "./components/styles/OverlayMenu.js");
var _jsxFileName = "/Users/avshash/Documents/Projects/portfolio/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));
    _this.state = {
      showMenu: false
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_OverlayMenu__WEBPACK_IMPORTED_MODULE_5__["StyledOverlayMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/styles/OverlayMenu.js":
/*!******************************************!*\
  !*** ./components/styles/OverlayMenu.js ***!
  \******************************************/
/*! exports provided: StyledOverlayMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledOverlayMenu", function() { return StyledOverlayMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _Mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mixins */ "./components/styles/Mixins.js");
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyles */ "./components/styles/GlobalStyles.js");
/* harmony import */ var _OverlayMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OverlayMenu */ "./components/OverlayMenu.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/styles/Header.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var StyledOverlayMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_OverlayMenu__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "OverlayMenu__StyledOverlayMenu",
  componentId: "bm5khv-0"
})(["display:flex;position:fixed;z-index:1;opacity:0;top:-40%;left:0;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;list-style:none;padding:0;margin:0;visibility:hidden;transition:top .4s,opacity .4s;background-color:", ";&.show{top:0;opacity:1;visibility:visible;}", " ", "{margin-bottom:1em;}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["transparentize"])(.02, _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].bg.shark), _Mixins__WEBPACK_IMPORTED_MODULE_2__["media"].tabletPortrait(_templateObject()), _Header__WEBPACK_IMPORTED_MODULE_5__["NavItem"]);

/***/ })

})
//# sourceMappingURL=_app.js.85555b3e5f878226df34.hot-update.js.map