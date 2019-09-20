webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/ProjectList.js":
/*!***********************************!*\
  !*** ./components/ProjectList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/projects */ "./components/data/projects.json");
var _data_projects__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/projects */ "./components/data/projects.json", 1);
var _jsxFileName = "/Users/vishalsharma/Documents/Projects/portfolio/components/ProjectList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Project = function Project(_ref) {
  var project = _ref.project;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "title",
    target: "_blank",
    href: project.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, project.description), project.tech && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Technologies Used:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " ", project.tech));
};

var ProjectList =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectList, _Component);

  function ProjectList(props) {
    _classCallCheck(this, ProjectList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectList).call(this, props));
  }

  _createClass(ProjectList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: this.props.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, Array.from(_data_projects__WEBPACK_IMPORTED_MODULE_2__).map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
          key: i,
          project: project,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      }));
    }
  }]);

  return ProjectList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ProjectList.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Project.propTypes = {
  project: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ })

})
//# sourceMappingURL=contact.js.6d067f03e790834dbca6.hot-update.js.map