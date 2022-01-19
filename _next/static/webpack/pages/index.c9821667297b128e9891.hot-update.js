webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard(_ref) {
  var src = _ref.src,
      altText = _ref.altText,
      title = _ref.title,
      designation = _ref.designation,
      social = _ref.social;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: style.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.memberThumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }));
}
_c = TeamCard;
var styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: "ease-in-out 0.4s",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      boxShadow: ["none", null, "0 4px 10px rgba(39, 83, 123, 0.12)"],
      ".info__name": {
        color: "primary"
      },
      ".info__designation": {
        color: "primary"
      },
      ".social__share": {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    width: ["70px", "80px", "100px", null, null, "130px"],
    height: ["70px", "80px", "100px", null, null, "130px"],
    flexShrink: 0,
    border: "2px solid",
    borderColor: "primary",
    borderRadius: "50%"
  },
  infoWrapper: {
    width: "100%",
    textAlign: "center",
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: "bold",
      lineHeight: [1.25, 1.35],
      transition: "color 0.25s",
      mb: 1
    },
    designation: {
      fontSize: ["14px", null, null, 2],
      fontWeight: "body",
      lineHeight: "heading",
      color: "text",
      transition: "color 0.25s"
    }
  },
  socialShare: {
    position: ["relative", null, "absolute"],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, "18px", 5],
    width: ["100%", null, "auto"],
    display: "flex",
    flexDirection: ["row", null, "column"],
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s",
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ["text", null, "primary"],
      lineHeight: "1em",
      my: [0, null, "-2px"],
      px: 1,
      transition: "all 0.25s",
      "&:hover": {
        color: ["primary", null, "text"]
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "TeamCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZSIsImNhcmQiLCJzdHlsZXMiLCJtZW1iZXJUaHVtYiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInB5IiwicHgiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiLCJhIiwibXkiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImluZm9XcmFwcGVyIiwidGV4dEFsaWduIiwibXQiLCJuYW1lIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm1iIiwic29jaWFsU2hhcmUiLCJyaWdodCIsImJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQWdFO0FBQUEsTUFBNUNDLEdBQTRDLFFBQTVDQSxHQUE0QztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM5RSxTQUNDLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxLQUFLLENBQUNDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFTixHQUFaO0FBQWlCLE9BQUcsRUFBRUMsT0FBdEI7QUFBK0IsTUFBRSxFQUFFTSxNQUFNLENBQUNDLFdBQTFDO0FBQUE7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QkFBYyxFQUFFLFFBUko7QUFTWnhCLGNBQVUsRUFBRSxXQVRBO0FBVVpLLFdBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQVZHO0FBV1pvQixNQUFFLEVBQUUsQ0FYUTtBQVlabkIsS0FBQyxFQUFFO0FBQ0ZXLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBUCxFQUFhLENBQWIsQ0FEUjtBQUVGYixXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLFNBQWYsQ0FGTDtBQUdGZSxnQkFBVSxFQUFFLEtBSFY7QUFJRlosUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLENBSkY7QUFLRlIsUUFBRSxFQUFFLENBTEY7QUFNRkMsZ0JBQVUsRUFBRSxXQU5WO0FBT0YsaUJBQVc7QUFDVkksYUFBSyxFQUFFLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsTUFBbEI7QUFERztBQVBUO0FBWlM7QUF2REMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOTgyMTY2NzI5N2IxMjhlOTg5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IFRleHQsIEhlYWRpbmcsIEltYWdlLCBCb3gsIExpbmsgfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbUNhcmQoeyBzcmMsIGFsdFRleHQsIHRpdGxlLCBkZXNpZ25hdGlvbiwgc29jaWFsIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Qm94IHN4PXtzdHlsZS5jYXJkfT5cblx0XHRcdDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSAvPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNhcmQ6IHtcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cHk6IFswLCBudWxsLCA0LCA1LCA2XSxcblx0XHRweDogWzIsIG51bGwsIDYsIDddLFxuXHRcdHRyYW5zaXRpb246IFwiZWFzZS1pbi1vdXQgMC40c1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI4cHhcIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHRib3hTaGFkb3c6IFtcIm5vbmVcIiwgbnVsbCwgXCIwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpXCJdLFxuXHRcdFx0XCIuaW5mb19fbmFtZVwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdH0sXG5cdFx0XHRcIi5pbmZvX19kZXNpZ25hdGlvblwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdH0sXG5cdFx0XHRcIi5zb2NpYWxfX3NoYXJlXCI6IHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0YToge1xuXHRcdFx0XHRcdG15OiAwLFxuXHRcdFx0XHRcdHB5OiBbMCwgbnVsbCwgMV0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cblx0bWVtYmVyVGh1bWI6IHtcblx0XHR3aWR0aDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuXHRcdGhlaWdodDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuXHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0Ym9yZGVyOiBcIjJweCBzb2xpZFwiLFxuXHRcdGJvcmRlckNvbG9yOiBcInByaW1hcnlcIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG5cdH0sXG5cdGluZm9XcmFwcGVyOiB7XG5cdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRtdDogWzMsIG51bGwsIDRdLFxuXHRcdG5hbWU6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcblx0XHRcdHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcblx0XHRcdG1iOiAxLFxuXHRcdH0sXG5cdFx0ZGVzaWduYXRpb246IHtcblx0XHRcdGZvbnRTaXplOiBbXCIxNHB4XCIsIG51bGwsIG51bGwsIDJdLFxuXHRcdFx0Zm9udFdlaWdodDogXCJib2R5XCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiBcImhlYWRpbmdcIixcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcblx0XHR9LFxuXHR9LFxuXHRzb2NpYWxTaGFyZToge1xuXHRcdHBvc2l0aW9uOiBbXCJyZWxhdGl2ZVwiLCBudWxsLCBcImFic29sdXRlXCJdLFxuXHRcdHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXG5cdFx0Ym90dG9tOiBbMCwgbnVsbCwgXCIxOHB4XCIsIDVdLFxuXHRcdHdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIFwiYXV0b1wiXSxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBbXCJyb3dcIiwgbnVsbCwgXCJjb2x1bW5cIl0sXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuXHRcdG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcblx0XHRwdDogMixcblx0XHRhOiB7XG5cdFx0XHRmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxuXHRcdFx0Y29sb3I6IFtcInRleHRcIiwgbnVsbCwgXCJwcmltYXJ5XCJdLFxuXHRcdFx0bGluZUhlaWdodDogXCIxZW1cIixcblx0XHRcdG15OiBbMCwgbnVsbCwgXCItMnB4XCJdLFxuXHRcdFx0cHg6IDEsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuXHRcdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdFx0Y29sb3I6IFtcInByaW1hcnlcIiwgbnVsbCwgXCJ0ZXh0XCJdLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=