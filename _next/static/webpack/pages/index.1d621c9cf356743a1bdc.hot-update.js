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
  }, name))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJwIiwid2lkdGgiLCJtYiIsIm10IiwibXgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImJvcmRlciIsInpJbmRleCIsImJveFNoYWRvdyIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVRGQyxJQVNFO0FBQUEsTUFSREMsTUFRQyxhQVJEQSxNQVFDO0FBQUEsTUFQREMsSUFPQyxhQVBEQSxJQU9DO0FBQUEsTUFOREMsV0FNQyxhQU5EQSxXQU1DO0FBQUEsTUFMREMsYUFLQyxhQUxEQSxhQUtDO0FBQUEsdUNBSkRDLFVBSUM7QUFBQSxNQUpEQSxVQUlDLHFDQUpZLGtCQUlaO0FBQUEsTUFIREMsYUFHQyxhQUhEQSxhQUdDO0FBQUEsTUFGREMsTUFFQyxhQUZEQSxNQUVDO0FBQ0YsU0FDQyxNQUFDLDZDQUFE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QTJCLE1BQTNCLENBRlE7QUFHWixvQkFBZ0I7QUFDZmlCLFdBQUssRUFBRSxXQURRO0FBRWZuQixXQUFLLEVBQUUsTUFGUTtBQUdma0Isb0JBQWMsRUFBRSxRQUhEO0FBSWZMLGdCQUFVLEVBQUUsR0FKRztBQUtmQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxDQUxLO0FBTWZmLE9BQUMsRUFBRTtBQU5ZO0FBSEo7QUE3RkMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDYyMWM5Y2YzNTY3NDNhMWJkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcblx0ZGF0YToge1xuXHRcdGhlYWRlcixcblx0XHRuYW1lLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHByaWNlV2l0aFVuaXQsXG5cdFx0YnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxuXHRcdGFub3RoZXJPcHRpb24sXG5cdFx0cG9pbnRzLFxuXHR9LFxufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxDYXJkXG5cdFx0XHRjbGFzc05hbWU9e2hlYWRlciA/IFwicGFja2FnZV9fY2FyZCBhY3RpdmVcIiA6IFwicGFja2FnZV9fY2FyZFwifVxuXHRcdFx0c3g9e3N0eWxlcy5wcmljaW5nQm94fVxuXHRcdD5cblx0XHRcdHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cblx0XHRcdDxCb3g+XG5cdFx0XHRcdDxCb3ggY2xhc3NOYW1lPVwicGFja2FnZV9faGVhZGVyXCIgc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cblx0XHRcdFx0XHQ8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgdmFyaWFudD1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9DYXJkPlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdHByaWNpbmdCb3g6IHtcblx0XHRib3JkZXJSYWRpdXM6IDIwLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuXHRcdHA6IFtcIjM1cHggMjVweFwiLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXG5cdFx0d2lkdGg6IFtcIjEwMCVcIiwgXCI3NSVcIiwgXCIxMDAlXCJdLFxuXHRcdG1iOiBcIjQwcHhcIixcblx0XHRtdDogXCI0MHB4XCIsXG5cdFx0bXg6IFswLCBcImF1dG9cIiwgMF0sXG5cdFx0XCImOmJlZm9yZVwiOiB7XG5cdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0Y29udGVudDogXCInJ1wiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHRcdGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0XHR6SW5kZXg6IC0xLFxuXHRcdH0sXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdGJveFNoYWRvdzogXCIwcHggNHB4IDI1cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKSAhaW1wb3J0YW50XCIsXG5cdFx0XHRcIiY6YmVmb3JlXCI6IHtcblx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0aGVpZ2h0OiBbXCIyOHB4XCIsIG51bGwsIG51bGwsIFwiMzJweFwiXSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdGZvbnRTaXplOiAxLFxuXHRcdGxpbmVIZWlnaHQ6IDEuMixcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHR0b3A6IFwiLTE3cHhcIixcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0uMTRweFwiLFxuXHRcdHB4OiBcIjEycHhcIixcblx0fSxcblx0cHJpY2luZ0hlYWRlcjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcblx0XHRhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcblx0XHRtYjogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXG5cdFx0cDoge1xuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxuXHRcdH0sXG5cdFx0XCIucGFja2FnZV9fbmFtZVwiOiB7XG5cdFx0XHRtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcblx0XHR9LFxuXHR9LFxuXHRwcmljZToge1xuXHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsIFwiMzBweFwiXSxcblx0XHRsaW5lSGVpZ2h0OiAxLFxuXHRcdGxldHRlclNwYWNpbmc6IFwiLTAuNTVweFwiLFxuXHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRtYXJnaW5Cb3R0b206IDIsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRwdDogWzQsIDZdLFxuXHRcdFwiPiBzcGFuXCI6IHtcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHRwbDogXCIzcHhcIixcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIixcblx0XHR9LFxuXHR9LFxuXHRsaXN0SXRlbToge1xuXHRcdGZvbnRGYW1pbHk6IFwiRE0gU2Fuc1wiLFxuXHRcdGZvbnRTdHlsZTogXCJub3JtYWxcIixcblx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuXHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0bGluZUhlaWdodDogWzEuNzUsIDEuNl0sXG5cdFx0bWI6IDMsXG5cdFx0YWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFwiJi5jbG9zZWRcIjoge1xuXHRcdFx0b3BhY2l0eTogMC41NSxcblx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRjb2xvcjogXCIjNzg4RkI1XCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGJ1dHRvbkdyb3VwOiB7XG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdG10OiBbXCIzMHB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiMzVweFwiXSxcblx0XHRcIi5mcmVlX190cmFpbFwiOiB7XG5cdFx0XHRjb2xvcjogXCJzZWNvbmRhcnlcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0Zm9udFdlaWdodDogNzAwLFxuXHRcdFx0Zm9udFNpemU6IFtcIjE0cHhcIiwgMV0sXG5cdFx0XHRwOiBcIjIwcHggMCAwXCIsXG5cdFx0fSxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9