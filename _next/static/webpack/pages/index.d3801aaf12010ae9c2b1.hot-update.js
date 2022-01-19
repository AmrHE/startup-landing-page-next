webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  })))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column"
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary"
      }
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%"
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZGlzcGxheSIsInB0IiwicGIiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibWVudXMiLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaW5rIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJjb3B5cmlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQyxTQUNDO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyxzREFBWjtBQUF3QixPQUFHLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxDQURELENBREQ7QUFXQTtLQVp1QkosTTtBQWN4QixJQUFNQyxNQUFNLEdBQUc7QUFDZEMsUUFBTSxFQUFFO0FBQ1BDLG9CQUFnQixFQUFFO0FBQ2pCRSxlQUFTLEVBQUUsV0FETTtBQUVqQkMsb0JBQWMsRUFBRSxjQUZDO0FBR2pCQyxhQUFPLEVBQUUsTUFIUTtBQUlqQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSmE7QUFLakJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUxhO0FBTWpCQyxlQUFTLEVBQUUsUUFOTTtBQU9qQkMsbUJBQWEsRUFBRTtBQVBFLEtBRFg7QUFVUEMsU0FBSyxFQUFFO0FBQ05DLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREU7QUFFTkMsUUFBRSxFQUFFLENBRkU7QUFHTkMsU0FBRyxFQUFFO0FBQ0pSLGVBQU8sRUFBRSxNQURMO0FBRUpTLGtCQUFVLEVBQUUsUUFGUjtBQUdKQyxzQkFBYyxFQUFFLFFBSFo7QUFJSkMsZ0JBQVEsRUFBRTtBQUpOO0FBSEMsS0FWQTtBQXFCUEMsUUFBSSxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREw7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsZ0JBQVUsRUFBRSxLQUhQO0FBSUxSLFFBQUUsRUFBRSxDQUpDO0FBS0xTLFlBQU0sRUFBRSxTQUxIO0FBTUxDLGdCQUFVLEVBQUUsV0FOUDtBQU9MakIsYUFBTyxFQUFFLE9BUEo7QUFRTGtCLG9CQUFjLEVBQUUsTUFSWDtBQVNMQyxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxHQUFaLENBVFA7QUFVTEMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkM7QUFXTCxnQkFBVTtBQUNUTixhQUFLLEVBQUU7QUFERTtBQVhMLEtBckJDO0FBb0NQTyxhQUFTLEVBQUU7QUFDVlIsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FEQTtBQUVWUyxXQUFLLEVBQUU7QUFGRztBQXBDSjtBQURNLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDM4MDFhYWYxMjAxMGFlOWMyYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIFRleHQgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9mb290ZXIuZGF0YVwiO1xuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSBcImFzc2V0cy9sb2dvLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuXHRcdFx0XHRcdDxMaW5rIHBhdGg9XCIvXCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtGb290ZXJMb2dvfSBhbHQ9XCJMb2dvXCIgLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9mb290ZXI+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Zm9vdGVyOiB7XG5cdFx0Zm9vdGVyQm90dG9tQXJlYToge1xuXHRcdFx0Ym9yZGVyVG9wOiBcIjFweCBzb2xpZFwiLFxuXHRcdFx0Ym9yZGVyVG9wQ29sb3I6IFwiYm9yZGVyX2NvbG9yXCIsXG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdHB0OiBbNywgbnVsbCwgOF0sXG5cdFx0XHRwYjogW1wiNDBweFwiLCBudWxsLCBcIjEwMHB4XCJdLFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHR9LFxuXHRcdG1lbnVzOiB7XG5cdFx0XHRtdDogWzMsIDRdLFxuXHRcdFx0bWI6IDIsXG5cdFx0XHRuYXY6IHtcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRmbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHRsaW5rOiB7XG5cdFx0XHRmb250U2l6ZTogWzEsIFwiMTVweFwiXSxcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG5cdFx0XHRtYjogMixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjM1c1wiLFxuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0dGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuXHRcdFx0bGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcblx0XHRcdHB4OiBbMiwgbnVsbCwgNF0sXG5cdFx0XHRcIjpob3ZlclwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRjb3B5cmlnaHQ6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgXCIxNXB4XCJdLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==