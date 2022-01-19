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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, designation)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInNvY2lhbFNoYXJlIiwicmlnaHQiLCJib3R0b20iLCJqdXN0aWZ5Q29udGVudCIsInB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDOUUsU0FDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVJLE1BQU0sQ0FBQ0UsV0FBMUM7QUFBQTtBQUFBO0FB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RTtBQUNaakIsWUFBUSxFQUFFLENBQUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsVUFBbkIsQ0FERTtBQUVaa0IsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZLO0FBR1pDLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixDQUFsQixDQUhJO0FBSVpiLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixDQUpLO0FBS1piLFdBQU8sRUFBRSxNQUxHO0FBTVpFLGlCQUFhLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsQ0FOSDtBQU9aRCxjQUFVLEVBQUUsUUFQQTtBQVFaMEIsa0JBQWMsRUFBRSxRQVJKO0FBU1p0QixjQUFVLEVBQUUsV0FUQTtBQVVaSyxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWRztBQVdaa0IsTUFBRSxFQUFFLENBWFE7QUFZWmpCLEtBQUMsRUFBRTtBQUNGUyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLENBRFI7QUFFRlgsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxTQUFmLENBRkw7QUFHRmEsZ0JBQVUsRUFBRSxLQUhWO0FBSUZWLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixDQUpGO0FBS0ZSLFFBQUUsRUFBRSxDQUxGO0FBTUZDLGdCQUFVLEVBQUUsV0FOVjtBQU9GLGlCQUFXO0FBQ1ZJLGFBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLE1BQWxCO0FBREc7QUFQVDtBQVpTO0FBdkRDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTliZjA3MTMzYjQ4MjdhZjYwMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XG5cdHJldHVybiAoXG5cdFx0PEJveCBzeD17c3R5bGVzLmNhcmR9PlxuXHRcdFx0PEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9IC8+XG5cblx0XHRcdDxCb3ggc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG5cdFx0XHRcdDxIZWFkaW5nIGNsYXNzTmFtZT1cImluZm9fX25hbWVcIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyLm5hbWV9PlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0XHQ8VGV4dCBjbGFzc05hbWU9XCJpbmZvX19kZXNpZ25hdGlvblwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIuZGVzaWduYXRpb259PlxuXHRcdFx0XHRcdHtkZXNpZ25hdGlvbn1cblx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y2FyZDoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRweTogWzAsIG51bGwsIDQsIDUsIDZdLFxuXHRcdHB4OiBbMiwgbnVsbCwgNiwgN10sXG5cdFx0dHJhbnNpdGlvbjogXCJlYXNlLWluLW91dCAwLjRzXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjhweFwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdGJveFNoYWRvdzogW1wibm9uZVwiLCBudWxsLCBcIjAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMilcIl0sXG5cdFx0XHRcIi5pbmZvX19uYW1lXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiLmluZm9fX2Rlc2lnbmF0aW9uXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiLnNvY2lhbF9fc2hhcmVcIjoge1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRhOiB7XG5cdFx0XHRcdFx0bXk6IDAsXG5cdFx0XHRcdFx0cHk6IFswLCBudWxsLCAxXSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblxuXHRtZW1iZXJUaHVtYjoge1xuXHRcdHdpZHRoOiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXG5cdFx0aGVpZ2h0OiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRib3JkZXI6IFwiMnB4IHNvbGlkXCIsXG5cdFx0Ym9yZGVyQ29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0fSxcblx0aW5mb1dyYXBwZXI6IHtcblx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdG10OiBbMywgbnVsbCwgNF0sXG5cdFx0bmFtZToge1xuXHRcdFx0Zm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0bGluZUhlaWdodDogWzEuMjUsIDEuMzVdLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxuXHRcdFx0bWI6IDEsXG5cdFx0fSxcblx0XHRkZXNpZ25hdGlvbjoge1xuXHRcdFx0Zm9udFNpemU6IFtcIjE0cHhcIiwgbnVsbCwgbnVsbCwgMl0sXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvZHlcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxuXHRcdH0sXG5cdH0sXG5cdHNvY2lhbFNoYXJlOiB7XG5cdFx0cG9zaXRpb246IFtcInJlbGF0aXZlXCIsIG51bGwsIFwiYWJzb2x1dGVcIl0sXG5cdFx0cmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcblx0XHRib3R0b206IFswLCBudWxsLCBcIjE4cHhcIiwgNV0sXG5cdFx0d2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgXCJhdXRvXCJdLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFtcInJvd1wiLCBudWxsLCBcImNvbHVtblwiXSxcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG5cdFx0b3BhY2l0eTogWzEsIG51bGwsIDBdLFxuXHRcdHB0OiAyLFxuXHRcdGE6IHtcblx0XHRcdGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXG5cdFx0XHRjb2xvcjogW1widGV4dFwiLCBudWxsLCBcInByaW1hcnlcIl0sXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIjFlbVwiLFxuXHRcdFx0bXk6IFswLCBudWxsLCBcIi0ycHhcIl0sXG5cdFx0XHRweDogMSxcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG5cdFx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0XHRjb2xvcjogW1wicHJpbWFyeVwiLCBudWxsLCBcInRleHRcIl0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==