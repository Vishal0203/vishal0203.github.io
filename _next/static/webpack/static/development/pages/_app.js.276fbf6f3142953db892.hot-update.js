webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/Header.js":
/*!*************************************!*\
  !*** ./components/styles/Header.js ***!
  \*************************************/
/*! exports provided: StyledHeader, Brand, NavItem, StyledNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mixins */ "./components/styles/Mixins.js");
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalStyles */ "./components/styles/GlobalStyles.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./components/styles/Constants.js");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      display: none;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    grid-column-gap: 40px;  \n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    padding: 0 2em;\n    background: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1dz8r4g-0"
})(["position:fixed;top:0;width:100%;height:", ";display:flex;justify-content:space-between;align-items:center;padding:0 1em;background-image:linear-gradient(", ",transparent);", ""], _Constants__WEBPACK_IMPORTED_MODULE_3__["HEADER_HEIGHT_SM"], _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["colors"].bg.shark, _Mixins__WEBPACK_IMPORTED_MODULE_1__["media"].tabletPortrait(_templateObject(), _Constants__WEBPACK_IMPORTED_MODULE_3__["HEADER_HEIGHT_LG"]));
var Brand = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "Header__Brand",
  componentId: "sc-1dz8r4g-1"
})(["height:", ";width:", ";padding:5px;display:flex;justify-content:flex-end;align-items:flex-end;font-size:1.2em;font-weight:700;position:relative;text-decoration:none;background-color:", ";", ":hover & .fullname{left:calc(", " + 20px);opacity:1;}.initials{text-decoration:none;color:", ";}.fullname{display:none;letter-spacing:3px;position:absolute;left:0;opacity:0;white-space:nowrap;top:50%;transform:translateY(-50%);font-size:1.2em;text-transform:uppercase;font-weight:600;color:", ";text-decoration:none;transition:opacity .4s,left .4s ease-out;", "}"], _Constants__WEBPACK_IMPORTED_MODULE_3__["LOGO_SIZE"], _Constants__WEBPACK_IMPORTED_MODULE_3__["LOGO_SIZE"], function (props) {
  return props.color;
}, StyledHeader, _Constants__WEBPACK_IMPORTED_MODULE_3__["LOGO_SIZE"], _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["colors"].app.secondary, _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["colors"].app.primary, _Mixins__WEBPACK_IMPORTED_MODULE_1__["media"].tabletPortrait(_templateObject2()));
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "Header__NavItem",
  componentId: "sc-1dz8r4g-2"
})(["letter-spacing:3px;position:relative;text-transform:uppercase;&:after{content:'';position:absolute;left:0;right:0;bottom:0;height:2px;background-color:", ";transition:transform .2s;transform:scale(0);}&:hover:after{transform:scale(1);}a{display:inline-block;color:", ";text-decoration:none;line-height:3em;}"], function (props) {
  return props.accent;
}, _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["colors"].app.primary);
var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "Header__StyledNav",
  componentId: "sc-1dz8r4g-3"
})(["padding:0;list-style:none;grid-template-columns:repeat(3,auto);font-size:1em;font-weight:600;display:grid;", " ", "{display:none;", "}.nav--collapsed{display:block;padding:.4em;", " &.ic-menu{font-size:1.5em;}}"], _Mixins__WEBPACK_IMPORTED_MODULE_1__["media"].tabletPortrait(_templateObject3()), NavItem, _Mixins__WEBPACK_IMPORTED_MODULE_1__["media"].tabletPortrait(_templateObject4()), _Mixins__WEBPACK_IMPORTED_MODULE_1__["media"].tabletPortrait(_templateObject5()));

/***/ })

})
//# sourceMappingURL=_app.js.276fbf6f3142953db892.hot-update.js.map