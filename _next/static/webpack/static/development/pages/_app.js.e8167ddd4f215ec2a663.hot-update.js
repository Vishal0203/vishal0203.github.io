webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: NavItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItems", function() { return NavItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Header */ "./components/styles/Header.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./components/styles/GlobalStyles.js");
var _jsxFileName = "/Users/avshash/Documents/Projects/portfolio/components/Nav.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var NavItems = function NavItems(props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    onClick: props.toggleMenu,
    accent: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].accent.mandy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "about"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    onClick: props.toggleMenu,
    accent: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].accent.danube,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    onClick: props.toggleMenu,
    accent: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].accent.silverTree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "contact"))));
};

var Nav = function Nav(props) {
  var className = "nav--collapsed ".concat(props.state.showMenu ? 'ic-cross' : 'ic-menu');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItems, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.toggleMenu,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.e8167ddd4f215ec2a663.hot-update.js.map