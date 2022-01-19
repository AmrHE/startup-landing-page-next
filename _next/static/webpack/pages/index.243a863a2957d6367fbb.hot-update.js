webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");

var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function List(_ref) {
  var _this = this;

  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      parentStyle = _ref.parentStyle,
      childStyle = _ref.childStyle;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "ul",
    sx: _objectSpread({
      listStyleType: "none",
      margin: 0,
      padding: 0
    }, parentStyle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, items.map(function (item, i) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      as: "li",
      className: item.isAvailable ? "open" : "closed",
      sx: _objectSpread({}, childStyle),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      sx: styles.listIcon,
      "aria-label": "list icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 6
      }
    }, item.icon));
  }));
}
_c = List;
var styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px"
  }
};

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiaXRlbXMiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwicGFkZGluZyIsIm1hcCIsIml0ZW0iLCJpIiwiaXNBdmFpbGFibGUiLCJzdHlsZXMiLCJsaXN0SWNvbiIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJtbCIsImZsZXhTaHJpbmsiLCJqdXN0aWZ5Q29udGVudCIsIm10Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUF1RDtBQUFBOztBQUFBLHdCQUF2Q0MsS0FBdUM7QUFBQSxNQUF2Q0EsS0FBdUMsMkJBQS9CLEVBQStCO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUNyRSxTQUNDLE1BQUMsNENBQUQ7QUFDQyxNQUFFLEVBQUMsSUFESjtBQUVDLE1BQUU7QUFDREMsbUJBQWEsRUFBRSxNQURkO0FBRURDLFlBQU0sRUFBRSxDQUZQO0FBR0RDLGFBQU8sRUFBRTtBQUhSLE9BSUVKLFdBSkYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0VELEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ1YsTUFBQyw2Q0FBRDtBQUNDLFFBQUUsRUFBQyxJQURKO0FBRUMsZUFBUyxFQUFFRCxJQUFJLENBQUNFLFdBQUwsR0FBbUIsTUFBbkIsR0FBNEIsUUFGeEM7QUFHQyxRQUFFLG9CQUFPUCxVQUFQLENBSEg7QUFJQyxTQUFHLEVBQUVNLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1DLE1BQUMsbURBQUQ7QUFBWSxRQUFFLEVBQUVFLE1BQU0sQ0FBQ0MsUUFBdkI7QUFBaUMsb0JBQVcsV0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFSixJQUFJLENBQUNLLElBRFAsQ0FORCxDQURVO0FBQUEsR0FBVixDQVRGLENBREQ7QUF3QkE7S0F6QnVCYixJO0FBMkJ4QixJQUFNVyxNQUFNLEdBQUc7QUFDZEMsVUFBUSxFQUFFO0FBQ1RFLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBREU7QUFFVEMsVUFBTSxFQUFFLE1BRkM7QUFHVEMsU0FBSyxFQUFFLFNBSEU7QUFJVFYsV0FBTyxFQUFFLENBSkE7QUFLVFcsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMRDtBQU1UQyxNQUFFLEVBQUUsTUFOSztBQU9UQyxjQUFVLEVBQUUsQ0FQSDtBQVFUQyxrQkFBYyxFQUFFLFlBUlA7QUFTVEMsTUFBRSxFQUFFO0FBVEs7QUFESSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI0M2E4NjNhMjk1N2Q2MzY3ZmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbGV4LCBCb3gsIEljb25CdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGl0ZW1zID0gW10sIHBhcmVudFN0eWxlLCBjaGlsZFN0eWxlIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHRhcz1cInVsXCJcblx0XHRcdHN4PXt7XG5cdFx0XHRcdGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuXHRcdFx0XHRtYXJnaW46IDAsXG5cdFx0XHRcdHBhZGRpbmc6IDAsXG5cdFx0XHRcdC4uLnBhcmVudFN0eWxlLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG5cdFx0XHRcdDxGbGV4XG5cdFx0XHRcdFx0YXM9XCJsaVwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtpdGVtLmlzQXZhaWxhYmxlID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuXHRcdFx0XHRcdHN4PXt7IC4uLmNoaWxkU3R5bGUgfX1cblx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBzeD17c3R5bGVzLmxpc3RJY29ufSBhcmlhLWxhYmVsPVwibGlzdCBpY29uXCI+XG5cdFx0XHRcdFx0XHR7aXRlbS5pY29ufVxuXHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0KSl9XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bGlzdEljb246IHtcblx0XHR3aWR0aDogW1wiMjVweFwiLCBcIjM1cHhcIl0sXG5cdFx0aGVpZ2h0OiBcImF1dG9cIixcblx0XHRjb2xvcjogXCJwcmltYXJ5XCIsXG5cdFx0cGFkZGluZzogMCxcblx0XHRmb250U2l6ZTogWzMsIDVdLFxuXHRcdG1sOiBcIi0xcHhcIixcblx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcblx0XHRtdDogXCIycHhcIixcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9