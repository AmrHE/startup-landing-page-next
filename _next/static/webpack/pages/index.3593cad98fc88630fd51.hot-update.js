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
  var _this = this;

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
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    className: "social__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, social.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.id,
      href: item.path,
      className: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }
    }, item.icon);
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsInBhdGgiLCJpY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicHkiLCJweCIsInRyYW5zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImJveFNoYWRvdyIsImNvbG9yIiwib3BhY2l0eSIsImEiLCJteSIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleFNocmluayIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEFsaWduIiwibXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWIiLCJyaWdodCIsImJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBNUNDLEdBQTRDLFFBQTVDQSxHQUE0QztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM5RSxTQUNDLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRU4sR0FBWjtBQUFpQixPQUFHLEVBQUVDLE9BQXRCO0FBQStCLE1B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LEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLENBRFI7QUFFRlgsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxTQUFmLENBRkw7QUFHRmEsZ0JBQVUsRUFBRSxLQUhWO0FBSUZWLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixDQUpGO0FBS0ZSLFFBQUUsRUFBRSxDQUxGO0FBTUZDLGdCQUFVLEVBQUUsV0FOVjtBQU9GLGlCQUFXO0FBQ1ZJLGFBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLE1BQWxCO0FBREc7QUFQVDtBQVpTO0FBdkRDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzU5M2NhZDk4ZmM4ODYzMGZkNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XG5cdHJldHVybiAoXG5cdFx0PEJveCBzeD17c3R5bGVzLmNhcmR9PlxuXHRcdFx0PEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9IC8+XG5cblx0XHRcdDxCb3ggc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG5cdFx0XHRcdDxIZWFkaW5nIGNsYXNzTmFtZT1cImluZm9fX25hbWVcIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyLm5hbWV9PlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0XHQ8VGV4dCBjbGFzc05hbWU9XCJpbmZvX19kZXNpZ25hdGlvblwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIuZGVzaWduYXRpb259PlxuXHRcdFx0XHRcdHtkZXNpZ25hdGlvbn1cblx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0PC9Cb3g+XG5cdFx0XHQ8Qm94IHN4PXtzdHlsZXMuc29jaWFsU2hhcmV9IGNsYXNzTmFtZT1cInNvY2lhbF9fc2hhcmVcIj5cblx0XHRcdFx0e3NvY2lhbC5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHQ8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2l0ZW0ucGF0aH0gY2xhc3NOYW1lPXtpdGVtLm5hbWV9PlxuXHRcdFx0XHRcdFx0e2l0ZW0uaWNvbn1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y2FyZDoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRweTogWzAsIG51bGwsIDQsIDUsIDZdLFxuXHRcdHB4OiBbMiwgbnVsbCwgNiwgN10sXG5cdFx0dHJhbnNpdGlvbjogXCJlYXNlLWluLW91dCAwLjRzXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjhweFwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdGJveFNoYWRvdzogW1wibm9uZVwiLCBudWxsLCBcIjAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMilcIl0sXG5cdFx0XHRcIi5pbmZvX19uYW1lXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiLmluZm9fX2Rlc2lnbmF0aW9uXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiLnNvY2lhbF9fc2hhcmVcIjoge1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRhOiB7XG5cdFx0XHRcdFx0bXk6IDAsXG5cdFx0XHRcdFx0cHk6IFswLCBudWxsLCAxXSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblxuXHRtZW1iZXJUaHVtYjoge1xuXHRcdHdpZHRoOiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXG5cdFx0aGVpZ2h0OiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRib3JkZXI6IFwiMnB4IHNvbGlkXCIsXG5cdFx0Ym9yZGVyQ29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0fSxcblx0aW5mb1dyYXBwZXI6IHtcblx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdG10OiBbMywgbnVsbCwgNF0sXG5cdFx0bmFtZToge1xuXHRcdFx0Zm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0bGluZUhlaWdodDogWzEuMjUsIDEuMzVdLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxuXHRcdFx0bWI6IDEsXG5cdFx0fSxcblx0XHRkZXNpZ25hdGlvbjoge1xuXHRcdFx0Zm9udFNpemU6IFtcIjE0cHhcIiwgbnVsbCwgbnVsbCwgMl0sXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvZHlcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxuXHRcdH0sXG5cdH0sXG5cdHNvY2lhbFNoYXJlOiB7XG5cdFx0cG9zaXRpb246IFtcInJlbGF0aXZlXCIsIG51bGwsIFwiYWJzb2x1dGVcIl0sXG5cdFx0cmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcblx0XHRib3R0b206IFswLCBudWxsLCBcIjE4cHhcIiwgNV0sXG5cdFx0d2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgXCJhdXRvXCJdLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFtcInJvd1wiLCBudWxsLCBcImNvbHVtblwiXSxcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG5cdFx0b3BhY2l0eTogWzEsIG51bGwsIDBdLFxuXHRcdHB0OiAyLFxuXHRcdGE6IHtcblx0XHRcdGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXG5cdFx0XHRjb2xvcjogW1widGV4dFwiLCBudWxsLCBcInByaW1hcnlcIl0sXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIjFlbVwiLFxuXHRcdFx0bXk6IFswLCBudWxsLCBcIi0ycHhcIl0sXG5cdFx0XHRweDogMSxcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG5cdFx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0XHRjb2xvcjogW1wicHJpbWFyeVwiLCBudWxsLCBcInRleHRcIl0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==