webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js");


var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      width = _ref.width,
      placement = _ref.placement,
      drawerStyle = _ref.drawerStyle,
      closeBtnStyle = _ref.closeBtnStyle,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onClose: toggleHandler,
    className: "drawer ".concat(className || "").trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "drawer__handler",
    style: {
      display: "inline-block"
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, drawerHandler));
}
_c = Drawer;
Drawer.defaultProps = {
  width: "320px",
  placement: "left"
};

var _c;

$RefreshReg$(_c, "Drawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIl0sIm5hbWVzIjpbIkRyYXdlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJwcm9wcyIsInRyaW0iLCJkaXNwbGF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQWFaO0FBQUEsTUFaRkMsU0FZRSxRQVpGQSxTQVlFO0FBQUEsTUFYRkMsUUFXRSxRQVhGQSxRQVdFO0FBQUEsTUFWRkMsV0FVRSxRQVZGQSxXQVVFO0FBQUEsTUFURkMsZ0JBU0UsUUFURkEsZ0JBU0U7QUFBQSxNQVJGQyxhQVFFLFFBUkZBLGFBUUU7QUFBQSxNQVBGQyxhQU9FLFFBUEZBLGFBT0U7QUFBQSxNQU5GQyxJQU1FLFFBTkZBLElBTUU7QUFBQSxNQUxGQyxLQUtFLFFBTEZBLEtBS0U7QUFBQSxNQUpGQyxTQUlFLFFBSkZBLFNBSUU7QUFBQSxNQUhGQyxXQUdFLFFBSEZBLFdBR0U7QUFBQSxNQUZGQyxhQUVFLFFBRkZBLGFBRUU7QUFBQSxNQURDQyxLQUNEOztBQUNGLFNBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpREFBRDtBQUNDLFFBQUksRUFBRUwsSUFEUDtBQUVDLFdBQU8sRUFBRUQsYUFGVjtBQUdDLGFBQVMsRUFBRSxpQkFBVUwsU0FBUyxJQUFJLEVBQXZCLEVBQTRCWSxJQUE1QixFQUhaO0FBSUMsU0FBSyxFQUFFTCxLQUpSO0FBS0MsYUFBUyxFQUFFQyxTQUxaO0FBTUMsV0FBTyxFQUFFLEtBTlY7QUFPQyxTQUFLLEVBQUUsSUFQUjtBQVFDLFlBQVEsRUFBRTtBQVJYLEtBU0tHLEtBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdFVCxXQUFXLElBQ1gsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQWMsV0FBTyxFQUFFRyxhQUF2QjtBQUFzQyxNQUFFLEVBQUVLLGFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVIsV0FERixDQVpGLEVBZ0JDLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVPLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QlIsUUFBdkIsQ0FoQkQsQ0FERCxFQW1CQyxNQUFDLDRDQUFEO0FBQ0MsYUFBUyxFQUFDLGlCQURYO0FBRUMsU0FBSyxFQUFFO0FBQUVZLGFBQU8sRUFBRTtBQUFYLEtBRlI7QUFHQyxXQUFPLEVBQUVSLGFBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFRCxhQUxGLENBbkJELENBREQ7QUE2QkE7S0EzQ3VCTCxNO0FBNkN4QkEsTUFBTSxDQUFDZSxZQUFQLEdBQXNCO0FBQ3JCUCxPQUFLLEVBQUUsT0FEYztBQUVyQkMsV0FBUyxFQUFFO0FBRlUsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzNhNDNiYzljZGFhNzBhZThkMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSBcInJjLWRyYXdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXIoe1xuXHRjbGFzc05hbWUsXG5cdGNoaWxkcmVuLFxuXHRjbG9zZUJ1dHRvbixcblx0Y2xvc2VCdXR0b25TdHlsZSxcblx0ZHJhd2VySGFuZGxlcixcblx0dG9nZ2xlSGFuZGxlcixcblx0b3Blbixcblx0d2lkdGgsXG5cdHBsYWNlbWVudCxcblx0ZHJhd2VyU3R5bGUsXG5cdGNsb3NlQnRuU3R5bGUsXG5cdC4uLnByb3BzXG59KSB7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFJjRHJhd2VyXG5cdFx0XHRcdG9wZW49e29wZW59XG5cdFx0XHRcdG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XG5cdFx0XHRcdGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSB8fCBcIlwifWAudHJpbSgpfVxuXHRcdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRcdHBsYWNlbWVudD17cGxhY2VtZW50fVxuXHRcdFx0XHRoYW5kbGVyPXtmYWxzZX1cblx0XHRcdFx0bGV2ZWw9e251bGx9XG5cdFx0XHRcdGR1cmF0aW9uPXtcIjAuNHNcIn1cblx0XHRcdFx0ey4uLnByb3BzfVxuXHRcdFx0PlxuXHRcdFx0XHR7Y2xvc2VCdXR0b24gJiYgKFxuXHRcdFx0XHRcdDxCb3ggYXM9XCJkaXZcIiBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XG5cdFx0XHRcdFx0XHR7Y2xvc2VCdXR0b259XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxCb3ggc3g9e2RyYXdlclN0eWxlfT57Y2hpbGRyZW59PC9Cb3g+XG5cdFx0XHQ8L1JjRHJhd2VyPlxuXHRcdFx0PEJveFxuXHRcdFx0XHRjbGFzc05hbWU9XCJkcmF3ZXJfX2hhbmRsZXJcIlxuXHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG5cdFx0XHQ+XG5cdFx0XHRcdHtkcmF3ZXJIYW5kbGVyfVxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcblx0d2lkdGg6IFwiMzIwcHhcIixcblx0cGxhY2VtZW50OiBcImxlZnRcIixcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9