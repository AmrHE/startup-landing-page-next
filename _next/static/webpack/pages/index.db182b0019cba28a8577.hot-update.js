webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      _ref$data$buttonText = _ref$data.buttonText,
      buttonText = _ref$data$buttonText === void 0 ? "Start Free Trial" : _ref$data$buttonText,
      anotherOption = _ref$data.anotherOption,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? "package__card active" : "package__card",
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, description))));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0
      }
    }
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px"
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading"
    },
    ".package__name": {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal"
    }
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5"
      }
    }
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free__trail": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0"
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJwIiwid2lkdGgiLCJtYiIsIm10IiwibXgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImJvcmRlciIsInpJbmRleCIsImJveFNoYWRvdyIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVRGQyxJQVNFO0FBQUEsTUFSREMsTUFRQyxhQVJEQSxNQVFDO0FBQUEsTUFQREMsSUFPQyxhQVBEQSxJQU9DO0FBQUEsTUFOREMsV0FNQyxhQU5EQSxXQU1DO0FBQUEsTUFMREMsYUFLQyxhQUxEQSxhQUtDO0FBQUEsdUNBSkRDLFVBSUM7QUFBQSxNQUpEQSxVQUlDLHFDQUpZLGtCQUlaO0FBQUEsTUFIREMsYUFHQyxhQUhEQSxhQUdDO0FBQUEsTUFGREMsTUFFQyxhQUZEQSxNQUVDO0FBQ0YsU0FDQyxNQUFDLDZDQUFE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LEVBQUU7QUFDWkMsYUFBUyxFQUFFLFFBREM7QUFFWjdCLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUZRO0FBR1osb0JBQWdCO0FBQ2ZpQixXQUFLLEVBQUUsV0FEUTtBQUVmbkIsV0FBSyxFQUFFLE1BRlE7QUFHZmtCLG9CQUFjLEVBQUUsUUFIRDtBQUlmTCxnQkFBVSxFQUFFLEdBSkc7QUFLZkMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FMSztBQU1mZixPQUFDLEVBQUU7QUFOWTtBQUhKO0FBN0ZDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIxODJiMDAxOWNiYTI4YTg1NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XG5cdGRhdGE6IHtcblx0XHRoZWFkZXIsXG5cdFx0bmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRwcmljZVdpdGhVbml0LFxuXHRcdGJ1dHRvblRleHQgPSBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcblx0XHRhbm90aGVyT3B0aW9uLFxuXHRcdHBvaW50cyxcblx0fSxcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8Q2FyZFxuXHRcdFx0Y2xhc3NOYW1lPXtoZWFkZXIgPyBcInBhY2thZ2VfX2NhcmQgYWN0aXZlXCIgOiBcInBhY2thZ2VfX2NhcmRcIn1cblx0XHRcdHN4PXtzdHlsZXMucHJpY2luZ0JveH1cblx0XHQ+XG5cdFx0XHR7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XG5cdFx0XHQ8Qm94PlxuXHRcdFx0XHQ8Qm94IGNsYXNzTmFtZT1cInBhY2thZ2VfX2hlYWRlclwiIHN4PXtzdHlsZXMucHJpY2luZ0hlYWRlcn0+XG5cdFx0XHRcdFx0PEhlYWRpbmcgY2xhc3NOYW1lPVwicGFja2FnZV9fbmFtZVwiIHZhcmlhbnQ9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0e25hbWV9XG5cdFx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0XHRcdDxUZXh0IGFzPVwicFwiPntkZXNjcmlwdGlvbn08L1RleHQ+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9DYXJkPlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdHByaWNpbmdCb3g6IHtcblx0XHRib3JkZXJSYWRpdXM6IDIwLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuXHRcdHA6IFtcIjM1cHggMjVweFwiLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXG5cdFx0d2lkdGg6IFtcIjEwMCVcIiwgXCI3NSVcIiwgXCIxMDAlXCJdLFxuXHRcdG1iOiBcIjQwcHhcIixcblx0XHRtdDogXCI0MHB4XCIsXG5cdFx0bXg6IFswLCBcImF1dG9cIiwgMF0sXG5cdFx0XCImOmJlZm9yZVwiOiB7XG5cdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0Y29udGVudDogXCInJ1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0XHR6SW5kZXg6IC0xLFxuXHRcdH0sXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdGJveFNoYWRvdzogXCIwcHggNHB4IDI1cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKSAhaW1wb3J0YW50XCIsXG5cdFx0XHRcIiY6YmVmb3JlXCI6IHtcblx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0aGVpZ2h0OiBbXCIyOHB4XCIsIG51bGwsIG51bGwsIFwiMzJweFwiXSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdGZvbnRTaXplOiAxLFxuXHRcdGxpbmVIZWlnaHQ6IDEuMixcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHR0b3A6IFwiLTE3cHhcIixcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0uMTRweFwiLFxuXHRcdHB4OiBcIjEycHhcIixcblx0fSxcblx0cHJpY2luZ0hlYWRlcjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcblx0XHRhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcblx0XHRtYjogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXG5cdFx0cDoge1xuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxuXHRcdH0sXG5cdFx0XCIucGFja2FnZV9fbmFtZVwiOiB7XG5cdFx0XHRtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcblx0XHR9LFxuXHR9LFxuXHRwcmljZToge1xuXHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsIFwiMzBweFwiXSxcblx0XHRsaW5lSGVpZ2h0OiAxLFxuXHRcdGxldHRlclNwYWNpbmc6IFwiLTAuNTVweFwiLFxuXHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRtYXJnaW5Cb3R0b206IDIsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRwdDogWzQsIDZdLFxuXHRcdFwiPiBzcGFuXCI6IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHRwbDogXCIzcHhcIixcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIixcblx0XHR9LFxuXHR9LFxuXHRsaXN0SXRlbToge1xuXHRcdGZvbnRGYW1pbHk6IFwiRE0gU2Fuc1wiLFxuXHRcdGZvbnRTdHlsZTogXCJub3JtYWxcIixcblx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuXHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0bGluZUhlaWdodDogWzEuNzUsIDEuNl0sXG5cdFx0bWI6IDMsXG5cdFx0YWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFwiJi5jbG9zZWRcIjoge1xuXHRcdFx0b3BhY2l0eTogMC41NSxcblx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRjb2xvcjogXCIjNzg4RkI1XCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGJ1dHRvbkdyb3VwOiB7XG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdG10OiBbXCIzMHB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiMzVweFwiXSxcblx0XHRcIi5mcmVlX190cmFpbFwiOiB7XG5cdFx0XHRjb2xvcjogXCJzZWNvbmRhcnlcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0Zm9udFdlaWdodDogNzAwLFxuXHRcdFx0Zm9udFNpemU6IFtcIjE0cHhcIiwgMV0sXG5cdFx0XHRwOiBcIjIwcHggMCAwXCIsXG5cdFx0fSxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9