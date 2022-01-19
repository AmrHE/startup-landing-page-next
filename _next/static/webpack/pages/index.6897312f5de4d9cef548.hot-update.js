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
  }, description)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJwIiwid2lkdGgiLCJtYiIsIm10IiwibXgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImJvcmRlciIsInpJbmRleCIsImJveFNoYWRvdyIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVRGQyxJQVNFO0FBQUEsTUFSREMsTUFRQyxhQVJEQSxNQVFDO0FBQUEsTUFQREMsSUFPQyxhQVBEQSxJQU9DO0FBQUEsTUFOREMsV0FNQyxhQU5EQSxXQU1DO0FBQUEsTUFMREMsYUFLQyxhQUxEQSxhQUtDO0FBQUEsdUNBSkRDLFVBSUM7QUFBQSxNQUpEQSxVQUlDLHFDQUpZLGtCQUlaO0FBQUEsTUFIREMsYUFHQyxhQUhEQSxhQUdDO0FBQUEsTUFGREMsTUFFQyxhQUZEQSxNQUVDO0FBQ0YsU0FDQyxNQUFDLDZDQUFE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QU0sRUFBRTtBQUNQVixhQUFLLEVBQUU7QUFEQTtBQUZHO0FBVEgsR0E3RUk7QUE2RmRXLGFBQVcsRUFBRTtBQUNaQyxhQUFTLEVBQUUsUUFEQztBQUVaN0IsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBRlE7QUFHWixvQkFBZ0I7QUFDZmlCLFdBQUssRUFBRSxXQURRO0FBRWZuQixXQUFLLEVBQUUsTUFGUTtBQUdma0Isb0JBQWMsRUFBRSxRQUhEO0FBSWZMLGdCQUFVLEVBQUUsR0FKRztBQUtmQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxDQUxLO0FBTWZmLE9BQUMsRUFBRTtBQU5ZO0FBSEo7QUE3RkMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ODk3MzEyZjVkZTRkOWNlZjU0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcblx0ZGF0YToge1xuXHRcdGhlYWRlcixcblx0XHRuYW1lLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHByaWNlV2l0aFVuaXQsXG5cdFx0YnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxuXHRcdGFub3RoZXJPcHRpb24sXG5cdFx0cG9pbnRzLFxuXHR9LFxufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxDYXJkXG5cdFx0XHRjbGFzc05hbWU9e2hlYWRlciA/IFwicGFja2FnZV9fY2FyZCBhY3RpdmVcIiA6IFwicGFja2FnZV9fY2FyZFwifVxuXHRcdFx0c3g9e3N0eWxlcy5wcmljaW5nQm94fVxuXHRcdD5cblx0XHRcdHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cblx0XHRcdDxCb3g+XG5cdFx0XHRcdDxCb3ggY2xhc3NOYW1lPVwicGFja2FnZV9faGVhZGVyXCIgc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cblx0XHRcdFx0XHQ8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgdmFyaWFudD1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHRcdFx0PFRleHQgYXM9XCJwXCI+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDxMaXN0IC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0NhcmQ+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0cHJpY2luZ0JveDoge1xuXHRcdGJvcmRlclJhZGl1czogMjAsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0cDogW1wiMzVweCAyNXB4XCIsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcblx0XHR3aWR0aDogW1wiMTAwJVwiLCBcIjc1JVwiLCBcIjEwMCVcIl0sXG5cdFx0bWI6IFwiNDBweFwiLFxuXHRcdG10OiBcIjQwcHhcIixcblx0XHRteDogWzAsIFwiYXV0b1wiLCAwXSxcblx0XHRcIiY6YmVmb3JlXCI6IHtcblx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRjb250ZW50OiBcIicnXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRcdHpJbmRleDogLTEsXG5cdFx0fSxcblx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0Ym94U2hhZG93OiBcIjBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnRcIixcblx0XHRcdFwiJjpiZWZvcmVcIjoge1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRoZWFkZXI6IHtcblx0XHRoZWlnaHQ6IFtcIjI4cHhcIiwgbnVsbCwgbnVsbCwgXCIzMnB4XCJdLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdFx0Zm9udFNpemU6IDEsXG5cdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdHRvcDogXCItMTdweFwiLFxuXHRcdGxldHRlclNwYWNpbmc6IFwiLS4xNHB4XCIsXG5cdFx0cHg6IFwiMTJweFwiLFxuXHR9LFxuXHRwcmljaW5nSGVhZGVyOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuXHRcdGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuXHRcdG1iOiBbXCIzMHB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcblx0XHRwOiB7XG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0bGluZUhlaWdodDogXCJoZWFkaW5nXCIsXG5cdFx0fSxcblx0XHRcIi5wYWNrYWdlX19uYW1lXCI6IHtcblx0XHRcdG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxuXHRcdH0sXG5cdH0sXG5cdHByaWNlOiB7XG5cdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgXCIzMHB4XCJdLFxuXHRcdGxpbmVIZWlnaHQ6IDEsXG5cdFx0bGV0dGVyU3BhY2luZzogXCItMC41NXB4XCIsXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdG1hcmdpbkJvdHRvbTogMixcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdHB0OiBbNCwgNl0sXG5cdFx0XCI+IHNwYW5cIjoge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHBsOiBcIjNweFwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuXHRcdH0sXG5cdH0sXG5cdGxpc3RJdGVtOiB7XG5cdFx0Zm9udEZhbWlseTogXCJETSBTYW5zXCIsXG5cdFx0Zm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG5cdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcblx0XHRtYjogMyxcblx0XHRhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcblx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XCImLmNsb3NlZFwiOiB7XG5cdFx0XHRvcGFjaXR5OiAwLjU1LFxuXHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdGNvbG9yOiBcIiM3ODhGQjVcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0YnV0dG9uR3JvdXA6IHtcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0bXQ6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIzNXB4XCJdLFxuXHRcdFwiLmZyZWVfX3RyYWlsXCI6IHtcblx0XHRcdGNvbG9yOiBcInNlY29uZGFyeVwiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0XHRmb250U2l6ZTogW1wiMTRweFwiLCAxXSxcblx0XHRcdHA6IFwiMjBweCAwIDBcIixcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=