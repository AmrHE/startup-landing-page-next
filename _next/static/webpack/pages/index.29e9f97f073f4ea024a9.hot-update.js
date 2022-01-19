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
    sx: styles.card,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJpbmZvV3JhcHBlciIsInRleHRBbGlnbiIsIm10IiwibmFtZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInNvY2lhbFNoYXJlIiwicmlnaHQiLCJib3R0b20iLCJqdXN0aWZ5Q29udGVudCIsInB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDOUUsU0FDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVJLE1BQU0sQ0FBQ0UsV0FBMUM7QUFBQTtBQUFBO0FB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QUUsUUFSSjtBQVNaeEIsY0FBVSxFQUFFLFdBVEE7QUFVWkssV0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkc7QUFXWm9CLE1BQUUsRUFBRSxDQVhRO0FBWVpuQixLQUFDLEVBQUU7QUFDRlcsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFQLEVBQWEsQ0FBYixDQURSO0FBRUZiLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsU0FBZixDQUZMO0FBR0ZlLGdCQUFVLEVBQUUsS0FIVjtBQUlGWixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsQ0FKRjtBQUtGUixRQUFFLEVBQUUsQ0FMRjtBQU1GQyxnQkFBVSxFQUFFLFdBTlY7QUFPRixpQkFBVztBQUNWSSxhQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQixNQUFsQjtBQURHO0FBUFQ7QUFaUztBQXZEQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI5ZTlmOTdmMDczZjRlYTAyNGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSW1hZ2UsIEJveCwgTGluayB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cblx0XHRcdDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSAvPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNhcmQ6IHtcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cHk6IFswLCBudWxsLCA0LCA1LCA2XSxcblx0XHRweDogWzIsIG51bGwsIDYsIDddLFxuXHRcdHRyYW5zaXRpb246IFwiZWFzZS1pbi1vdXQgMC40c1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI4cHhcIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHRib3hTaGFkb3c6IFtcIm5vbmVcIiwgbnVsbCwgXCIwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpXCJdLFxuXHRcdFx0XCIuaW5mb19fbmFtZVwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdH0sXG5cdFx0XHRcIi5pbmZvX19kZXNpZ25hdGlvblwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdH0sXG5cdFx0XHRcIi5zb2NpYWxfX3NoYXJlXCI6IHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0YToge1xuXHRcdFx0XHRcdG15OiAwLFxuXHRcdFx0XHRcdHB5OiBbMCwgbnVsbCwgMV0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cblx0bWVtYmVyVGh1bWI6IHtcblx0XHR3aWR0aDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuXHRcdGhlaWdodDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuXHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0Ym9yZGVyOiBcIjJweCBzb2xpZFwiLFxuXHRcdGJvcmRlckNvbG9yOiBcInByaW1hcnlcIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG5cdH0sXG5cdGluZm9XcmFwcGVyOiB7XG5cdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRtdDogWzMsIG51bGwsIDRdLFxuXHRcdG5hbWU6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcblx0XHRcdHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcblx0XHRcdG1iOiAxLFxuXHRcdH0sXG5cdFx0ZGVzaWduYXRpb246IHtcblx0XHRcdGZvbnRTaXplOiBbXCIxNHB4XCIsIG51bGwsIG51bGwsIDJdLFxuXHRcdFx0Zm9udFdlaWdodDogXCJib2R5XCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiBcImhlYWRpbmdcIixcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcblx0XHR9LFxuXHR9LFxuXHRzb2NpYWxTaGFyZToge1xuXHRcdHBvc2l0aW9uOiBbXCJyZWxhdGl2ZVwiLCBudWxsLCBcImFic29sdXRlXCJdLFxuXHRcdHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXG5cdFx0Ym90dG9tOiBbMCwgbnVsbCwgXCIxOHB4XCIsIDVdLFxuXHRcdHdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIFwiYXV0b1wiXSxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBbXCJyb3dcIiwgbnVsbCwgXCJjb2x1bW5cIl0sXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuXHRcdG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcblx0XHRwdDogMixcblx0XHRhOiB7XG5cdFx0XHRmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxuXHRcdFx0Y29sb3I6IFtcInRleHRcIiwgbnVsbCwgXCJwcmltYXJ5XCJdLFxuXHRcdFx0bGluZUhlaWdodDogXCIxZW1cIixcblx0XHRcdG15OiBbMCwgbnVsbCwgXCItMnB4XCJdLFxuXHRcdFx0cHg6IDEsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuXHRcdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdFx0Y29sb3I6IFtcInByaW1hcnlcIiwgbnVsbCwgXCJ0ZXh0XCJdLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=