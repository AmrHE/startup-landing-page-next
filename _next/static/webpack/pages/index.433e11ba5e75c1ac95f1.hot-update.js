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
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, priceWithUnit, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, "/Monthly")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    "aria-label": buttonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, buttonText), anotherOption && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    className: "free__trail",
    "aria-label": anotherOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, anotherOption))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJsaXN0SXRlbSIsInByaWNlIiwiYnV0dG9uR3JvdXAiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJwIiwid2lkdGgiLCJtYiIsIm10IiwibXgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImJvcmRlciIsInpJbmRleCIsImJveFNoYWRvdyIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHQiLCJwbCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJidXR0b24iLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVRGQyxJQVNFO0FBQUEsTUFSREMsTUFRQyxhQVJEQSxNQVFDO0FBQUEsTUFQREMsSUFPQyxhQVBEQSxJQU9DO0FBQUEsTUFOREMsV0FNQyxhQU5EQSxXQU1DO0FBQUEsTUFMREMsYUFLQyxhQUxEQSxhQUtDO0FBQUEsdUNBSkRDLFVBSUM7QUFBQSxNQUpEQSxVQUlDLHFDQUpZLGtCQUlaO0FBQUEsTUFIREMsYUFHQyxhQUhEQSxhQUdDO0FBQUEsTUFGREMsTUFFQyxhQUZEQSxNQUVDO0FBQ0YsU0FDQyxNQUFDLDZDQUFE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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MzNlMTFiYTVlNzVjMWFjOTVmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcblx0ZGF0YToge1xuXHRcdGhlYWRlcixcblx0XHRuYW1lLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHByaWNlV2l0aFVuaXQsXG5cdFx0YnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxuXHRcdGFub3RoZXJPcHRpb24sXG5cdFx0cG9pbnRzLFxuXHR9LFxufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxDYXJkXG5cdFx0XHRjbGFzc05hbWU9e2hlYWRlciA/IFwicGFja2FnZV9fY2FyZCBhY3RpdmVcIiA6IFwicGFja2FnZV9fY2FyZFwifVxuXHRcdFx0c3g9e3N0eWxlcy5wcmljaW5nQm94fVxuXHRcdD5cblx0XHRcdHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cblx0XHRcdDxCb3g+XG5cdFx0XHRcdDxCb3ggY2xhc3NOYW1lPVwicGFja2FnZV9faGVhZGVyXCIgc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cblx0XHRcdFx0XHQ8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgdmFyaWFudD1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHRcdFx0PFRleHQgYXM9XCJwXCI+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDxMaXN0IGl0ZW1zPXtwb2ludHN9IGNoaWxkU3R5bGU9e3N0eWxlcy5saXN0SXRlbX0gLz5cblx0XHRcdFx0PFRleHQgY2xhc3NOYW1lPVwicGFja2FnZV9fcHJpY2VcIiBzeD17c3R5bGVzLnByaWNlfT5cblx0XHRcdFx0XHR7cHJpY2VXaXRoVW5pdH1cblx0XHRcdFx0XHQ8c3Bhbj4vTW9udGhseTwvc3Bhbj5cblx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidXR0b25UZXh0fT5cblx0XHRcdFx0XHRcdHtidXR0b25UZXh0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0e2Fub3RoZXJPcHRpb24gJiYgKFxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dEJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZyZWVfX3RyYWlsXCJcblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17YW5vdGhlck9wdGlvbn1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e2Fub3RoZXJPcHRpb259XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQm94PlxuXHRcdDwvQ2FyZD5cblx0KTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRwcmljaW5nQm94OiB7XG5cdFx0Ym9yZGVyUmFkaXVzOiAyMCxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRwOiBbXCIzNXB4IDI1cHhcIiwgbnVsbCwgbnVsbCwgXCI0MHB4XCJdLFxuXHRcdHdpZHRoOiBbXCIxMDAlXCIsIFwiNzUlXCIsIFwiMTAwJVwiXSxcblx0XHRtYjogXCI0MHB4XCIsXG5cdFx0bXQ6IFwiNDBweFwiLFxuXHRcdG14OiBbMCwgXCJhdXRvXCIsIDBdLFxuXHRcdFwiJjpiZWZvcmVcIjoge1xuXHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHRcdGNvbnRlbnQ6IFwiJydcIixcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiaW5oZXJpdFwiLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuXHRcdFx0ekluZGV4OiAtMSxcblx0XHR9LFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHRib3hTaGFkb3c6IFwiMHB4IDRweCAyNXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSkgIWltcG9ydGFudFwiLFxuXHRcdFx0XCImOmJlZm9yZVwiOiB7XG5cdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGhlYWRlcjoge1xuXHRcdGhlaWdodDogW1wiMjhweFwiLCBudWxsLCBudWxsLCBcIjMycHhcIl0sXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRmb250U2l6ZTogMSxcblx0XHRsaW5lSGVpZ2h0OiAxLjIsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0dG9wOiBcIi0xN3B4XCIsXG5cdFx0bGV0dGVyU3BhY2luZzogXCItLjE0cHhcIixcblx0XHRweDogXCIxMnB4XCIsXG5cdH0sXG5cdHByaWNpbmdIZWFkZXI6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG5cdFx0YWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG5cdFx0bWI6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCI0MHB4XCJdLFxuXHRcdHA6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiBcImhlYWRpbmdcIixcblx0XHR9LFxuXHRcdFwiLnBhY2thZ2VfX25hbWVcIjoge1xuXHRcdFx0bWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgMl0sXG5cdFx0fSxcblx0fSxcblx0cHJpY2U6IHtcblx0XHRmb250V2VpZ2h0OiA1MDAsXG5cdFx0Zm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCBcIjMwcHhcIl0sXG5cdFx0bGluZUhlaWdodDogMSxcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0wLjU1cHhcIixcblx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0bWFyZ2luQm90dG9tOiAyLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0cHQ6IFs0LCA2XSxcblx0XHRcIj4gc3BhblwiOiB7XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0cGw6IFwiM3B4XCIsXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG5cdFx0fSxcblx0fSxcblx0bGlzdEl0ZW06IHtcblx0XHRmb250RmFtaWx5OiBcIkRNIFNhbnNcIixcblx0XHRmb250U3R5bGU6IFwibm9ybWFsXCIsXG5cdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIixcblx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdGxpbmVIZWlnaHQ6IFsxLjc1LCAxLjZdLFxuXHRcdG1iOiAzLFxuXHRcdGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuXHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcIiYuY2xvc2VkXCI6IHtcblx0XHRcdG9wYWNpdHk6IDAuNTUsXG5cdFx0XHRidXR0b246IHtcblx0XHRcdFx0Y29sb3I6IFwiIzc4OEZCNVwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRidXR0b25Hcm91cDoge1xuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRtdDogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjM1cHhcIl0sXG5cdFx0XCIuZnJlZV9fdHJhaWxcIjoge1xuXHRcdFx0Y29sb3I6IFwic2Vjb25kYXJ5XCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHRcdGZvbnRTaXplOiBbXCIxNHB4XCIsIDFdLFxuXHRcdFx0cDogXCIyMHB4IDAgMFwiLFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==