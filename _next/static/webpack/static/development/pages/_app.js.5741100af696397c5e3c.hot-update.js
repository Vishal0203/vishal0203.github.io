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
/* harmony import */ var _AppProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppProvider */ "./components/AppProvider.js");
var _jsxFileName = "/Users/avshash/Documents/Projects/portfolio/components/Nav.js";






var NavItems = function NavItems() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppProvider__WEBPACK_IMPORTED_MODULE_4__["AppContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      accent: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].accent.mandy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "about"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      accent: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].accent.danube,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/projects",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      accent: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["colors"].accent.silverTree,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "contact"))));
  });
};

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Header__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppProvider__WEBPACK_IMPORTED_MODULE_4__["AppContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (context) {
    var className = "nav--collapsed ".concat(context.state.showMenu ? 'ic-cross' : 'ic-menu');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: context.toggleMenu,
      className: className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.5741100af696397c5e3c.hot-update.js.map