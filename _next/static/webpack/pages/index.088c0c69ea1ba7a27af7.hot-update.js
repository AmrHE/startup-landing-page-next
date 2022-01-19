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
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiaXRlbXMiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwicGFkZGluZyIsIm1hcCIsIml0ZW0iLCJpIiwiaXNBdmFpbGFibGUiLCJzdHlsZXMiLCJsaXN0SWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1sIiwiZmxleFNocmluayIsImp1c3RpZnlDb250ZW50IiwibXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXVEO0FBQUE7O0FBQUEsd0JBQXZDQyxLQUF1QztBQUFBLE1BQXZDQSxLQUF1QywyQkFBL0IsRUFBK0I7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3JFLFNBQ0MsTUFBQyw0Q0FBRDtBQUNDLE1BQUUsRUFBQyxJQURKO0FBRUMsTUFBRTtBQUNEQyxtQkFBYSxFQUFFLE1BRGQ7QUFFREMsWUFBTSxFQUFFLENBRlA7QUFHREMsYUFBTyxFQUFFO0FBSFIsT0FJRUosV0FKRixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRUQsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDVixNQUFDLDZDQUFEO0FBQ0MsUUFBRSxFQUFDLElBREo7QUFFQyxlQUFTLEVBQUVELElBQUksQ0FBQ0UsV0FBTCxHQUFtQixNQUFuQixHQUE0QixRQUZ4QztBQUdDLFFBQUUsb0JBQU9QLFVBQVAsQ0FISDtBQUlDLFNBQUcsRUFBRU0sQ0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFWLENBVEYsQ0FERDtBQW9CQTtLQXJCdUJULEk7QUF1QnhCLElBQU1XLE1BQU0sR0FBRztBQUNkQyxVQUFRLEVBQUU7QUFDVEMsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FERTtBQUVUQyxVQUFNLEVBQUUsTUFGQztBQUdUQyxTQUFLLEVBQUUsU0FIRTtBQUlUVCxXQUFPLEVBQUUsQ0FKQTtBQUtUVSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxEO0FBTVRDLE1BQUUsRUFBRSxNQU5LO0FBT1RDLGNBQVUsRUFBRSxDQVBIO0FBUVRDLGtCQUFjLEVBQUUsWUFSUDtBQVNUQyxNQUFFLEVBQUU7QUFUSztBQURJLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDg4YzBjNjllYTFiYTdhMjdhZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsZXgsIEJveCwgSWNvbkJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxCb3hcblx0XHRcdGFzPVwidWxcIlxuXHRcdFx0c3g9e3tcblx0XHRcdFx0bGlzdFN0eWxlVHlwZTogXCJub25lXCIsXG5cdFx0XHRcdG1hcmdpbjogMCxcblx0XHRcdFx0cGFkZGluZzogMCxcblx0XHRcdFx0Li4ucGFyZW50U3R5bGUsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcblx0XHRcdFx0PEZsZXhcblx0XHRcdFx0XHRhcz1cImxpXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2l0ZW0uaXNBdmFpbGFibGUgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG5cdFx0XHRcdFx0c3g9e3sgLi4uY2hpbGRTdHlsZSB9fVxuXHRcdFx0XHRcdGtleT17aX1cblx0XHRcdFx0PjwvRmxleD5cblx0XHRcdCkpfVxuXHRcdDwvQm94PlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxpc3RJY29uOiB7XG5cdFx0d2lkdGg6IFtcIjI1cHhcIiwgXCIzNXB4XCJdLFxuXHRcdGhlaWdodDogXCJhdXRvXCIsXG5cdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0Zm9udFNpemU6IFszLCA1XSxcblx0XHRtbDogXCItMXB4XCIsXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG5cdFx0bXQ6IFwiMnB4XCIsXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==