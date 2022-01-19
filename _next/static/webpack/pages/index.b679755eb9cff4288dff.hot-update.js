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
  }, priceWithUnit)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJsaXN0SXRlbSIsInByaWNlIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwicCIsIndpZHRoIiwibWIiLCJtdCIsIm14IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJib3JkZXIiLCJ6SW5kZXgiLCJib3hTaGFkb3ciLCJvcGFjaXR5IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsImxldHRlclNwYWNpbmciLCJweCIsIm1hcmdpbkJvdHRvbSIsInB0IiwicGwiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVRGQyxJQVNFO0FBQUEsTUFSREMsTUFRQyxhQVJEQSxNQVFDO0FBQUEsTUFQREMsSUFPQyxhQVBEQSxJQU9DO0FBQUEsTUFOREMsV0FNQyxhQU5EQSxXQU1DO0FBQUEsTUFMREMsYUFLQyxhQUxEQSxhQUtDO0FBQUEsdUNBSkRDLFVBSUM7QUFBQSxNQUpEQSxVQUlDLHFDQUpZLGtCQUlaO0FBQUEsTUFIREMsYUFHQyxhQUhEQSxhQUdDO0FBQUEsTUFGREMsTUFFQyxhQUZEQSxNQUVDO0FBQ0YsU0FDQyxNQUFDLDZDQUFE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LFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSkQ7QUFLVEMsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLEdBQVAsQ0FMSDtBQU1UZCxNQUFFLEVBQUUsQ0FOSztBQU9UZ0IsY0FBVSxFQUFFLFlBUEg7QUFRVEUsU0FBSyxFQUFFLE1BUkU7QUFTVCxnQkFBWTtBQUNYUixhQUFPLEVBQUUsSUFERTtBQUVYZ0IsWUFBTSxFQUFFO0FBQ1BSLGFBQUssRUFBRTtBQURBO0FBRkc7QUFUSCxHQTdFSTtBQTZGZFMsYUFBVyxFQUFFO0FBQ1pDLGFBQVMsRUFBRSxRQURDO0FBRVozQixNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsTUFBM0IsQ0FGUTtBQUdaLG9CQUFnQjtBQUNmaUIsV0FBSyxFQUFFLFdBRFE7QUFFZm5CLFdBQUssRUFBRSxNQUZRO0FBR2ZrQixvQkFBYyxFQUFFLFFBSEQ7QUFJZkwsZ0JBQVUsRUFBRSxHQUpHO0FBS2ZDLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxDQUFULENBTEs7QUFNZmYsT0FBQyxFQUFFO0FBTlk7QUFISjtBQTdGQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2Nzk3NTVlYjljZmY0Mjg4ZGZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xuXHRkYXRhOiB7XG5cdFx0aGVhZGVyLFxuXHRcdG5hbWUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0cHJpY2VXaXRoVW5pdCxcblx0XHRidXR0b25UZXh0ID0gXCJTdGFydCBGcmVlIFRyaWFsXCIsXG5cdFx0YW5vdGhlck9wdGlvbixcblx0XHRwb2ludHMsXG5cdH0sXG59KSB7XG5cdHJldHVybiAoXG5cdFx0PENhcmRcblx0XHRcdGNsYXNzTmFtZT17aGVhZGVyID8gXCJwYWNrYWdlX19jYXJkIGFjdGl2ZVwiIDogXCJwYWNrYWdlX19jYXJkXCJ9XG5cdFx0XHRzeD17c3R5bGVzLnByaWNpbmdCb3h9XG5cdFx0PlxuXHRcdFx0e2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxuXHRcdFx0PEJveD5cblx0XHRcdFx0PEJveCBjbGFzc05hbWU9XCJwYWNrYWdlX19oZWFkZXJcIiBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxuXHRcdFx0XHRcdDxIZWFkaW5nIGNsYXNzTmFtZT1cInBhY2thZ2VfX25hbWVcIiB2YXJpYW50PVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdHtuYW1lfVxuXHRcdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0XHQ8VGV4dCBhcz1cInBcIj57ZGVzY3JpcHRpb259PC9UZXh0PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PExpc3QgaXRlbXM9e3BvaW50c30gY2hpbGRTdHlsZT17c3R5bGVzLmxpc3RJdGVtfSAvPlxuXHRcdFx0XHQ8VGV4dCBjbGFzc05hbWU9XCJwYWNrYWdlX19wcmljZVwiIHN4PXtzdHlsZXMucHJpY2V9PlxuXHRcdFx0XHRcdHtwcmljZVdpdGhVbml0fVxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0NhcmQ+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0cHJpY2luZ0JveDoge1xuXHRcdGJvcmRlclJhZGl1czogMjAsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0cDogW1wiMzVweCAyNXB4XCIsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcblx0XHR3aWR0aDogW1wiMTAwJVwiLCBcIjc1JVwiLCBcIjEwMCVcIl0sXG5cdFx0bWI6IFwiNDBweFwiLFxuXHRcdG10OiBcIjQwcHhcIixcblx0XHRteDogWzAsIFwiYXV0b1wiLCAwXSxcblx0XHRcIiY6YmVmb3JlXCI6IHtcblx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRjb250ZW50OiBcIicnXCIsXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRcdHpJbmRleDogLTEsXG5cdFx0fSxcblx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0Ym94U2hhZG93OiBcIjBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnRcIixcblx0XHRcdFwiJjpiZWZvcmVcIjoge1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRoZWFkZXI6IHtcblx0XHRoZWlnaHQ6IFtcIjI4cHhcIiwgbnVsbCwgbnVsbCwgXCIzMnB4XCJdLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdFx0Zm9udFNpemU6IDEsXG5cdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdHRvcDogXCItMTdweFwiLFxuXHRcdGxldHRlclNwYWNpbmc6IFwiLS4xNHB4XCIsXG5cdFx0cHg6IFwiMTJweFwiLFxuXHR9LFxuXHRwcmljaW5nSGVhZGVyOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuXHRcdGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuXHRcdG1iOiBbXCIzMHB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcblx0XHRwOiB7XG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0bGluZUhlaWdodDogXCJoZWFkaW5nXCIsXG5cdFx0fSxcblx0XHRcIi5wYWNrYWdlX19uYW1lXCI6IHtcblx0XHRcdG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxuXHRcdH0sXG5cdH0sXG5cdHByaWNlOiB7XG5cdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgXCIzMHB4XCJdLFxuXHRcdGxpbmVIZWlnaHQ6IDEsXG5cdFx0bGV0dGVyU3BhY2luZzogXCItMC41NXB4XCIsXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdG1hcmdpbkJvdHRvbTogMixcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdHB0OiBbNCwgNl0sXG5cdFx0XCI+IHNwYW5cIjoge1xuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRcdHBsOiBcIjNweFwiLFxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcblx0XHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuXHRcdH0sXG5cdH0sXG5cdGxpc3RJdGVtOiB7XG5cdFx0Zm9udEZhbWlseTogXCJETSBTYW5zXCIsXG5cdFx0Zm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG5cdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcblx0XHRtYjogMyxcblx0XHRhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcblx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XCImLmNsb3NlZFwiOiB7XG5cdFx0XHRvcGFjaXR5OiAwLjU1LFxuXHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdGNvbG9yOiBcIiM3ODhGQjVcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0YnV0dG9uR3JvdXA6IHtcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0bXQ6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIzNXB4XCJdLFxuXHRcdFwiLmZyZWVfX3RyYWlsXCI6IHtcblx0XHRcdGNvbG9yOiBcInNlY29uZGFyeVwiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0XHRmb250U2l6ZTogW1wiMTRweFwiLCAxXSxcblx0XHRcdHA6IFwiMjBweCAwIDBcIixcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=