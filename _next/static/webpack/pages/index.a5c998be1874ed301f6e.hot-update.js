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
  var _this = this;

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
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItems.map(function (item, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: item.path,
      key: i,
      label: item.label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, "Copyright \xA9 by ", new Date().getFullYear(), " Our Company"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwiZGF0YSIsIm1lbnVJdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwicGF0aCIsImxhYmVsIiwibGluayIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZGlzcGxheSIsInB0IiwicGIiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYiIsIm5hdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQyxTQUNDO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyxzREFBWjtBQUF3QixPQUFHLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLG9EQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNuQixxREFBQyxvREFBRDtBQUNDLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQURaO0FBRUMsU0FBRyxFQUFFRCxDQUZOO0FBR0MsV0FBSyxFQUFFRCxJQUFJLENBQUNHLEtBSGI7QUFJQyxRQUFFLEVBQUVYLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVyxJQUpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRG1CO0FBQUEsR0FBbkIsQ0FERixDQURELENBSkQsRUFnQkMscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVaLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNzQixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFEdEIsaUJBaEJELENBREQsQ0FERCxDQUREO0FBMEJBO0tBM0J1QmhCLE07QUE2QnhCLElBQU1DLE1BQU0sR0FBRztBQUNkQyxRQUFNLEVBQUU7QUFDUEMsb0JBQWdCLEVBQUU7QUFDakJjLGVBQVMsRUFBRSxXQURNO0FBRWpCQyxvQkFBYyxFQUFFLGNBRkM7QUFHakJDLGFBQU8sRUFBRSxNQUhRO0FBSWpCQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FKYTtBQUtqQkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxPQUFmLENBTGE7QUFNakJDLGVBQVMsRUFBRSxRQU5NO0FBT2pCQyxtQkFBYSxFQUFFO0FBUEUsS0FEWDtBQVVQbEIsU0FBSyxFQUFFO0FBQ05tQixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURFO0FBRU5DLFFBQUUsRUFBRSxDQUZFO0FBR05DLFNBQUcsRUFBRTtBQUNKUCxlQUFPLEVBQUUsTUFETDtBQUVKUSxrQkFBVSxFQUFFLFFBRlI7QUFHSkMsc0JBQWMsRUFBRSxRQUhaO0FBSUpDLGdCQUFRLEVBQUU7QUFKTjtBQUhDLEtBVkE7QUFxQlBoQixRQUFJLEVBQUU7QUFDTGlCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREw7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsZ0JBQVUsRUFBRSxLQUhQO0FBSUxQLFFBQUUsRUFBRSxDQUpDO0FBS0xRLFlBQU0sRUFBRSxTQUxIO0FBTUxDLGdCQUFVLEVBQUUsV0FOUDtBQU9MZixhQUFPLEVBQUUsT0FQSjtBQVFMZ0Isb0JBQWMsRUFBRSxNQVJYO0FBU0xDLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosQ0FUUDtBQVVMQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWQztBQVdMLGdCQUFVO0FBQ1ROLGFBQUssRUFBRTtBQURFO0FBWEwsS0FyQkM7QUFvQ1BqQixhQUFTLEVBQUU7QUFDVmdCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREE7QUFFVlEsV0FBSyxFQUFFO0FBRkc7QUFwQ0o7QUFETSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1Yzk5OGJlMTg3NGVkMzAxZjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEltYWdlLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZm9vdGVyLmRhdGFcIjtcbmltcG9ydCBGb290ZXJMb2dvIGZyb20gXCJhc3NldHMvbG9nby5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cblx0XHRcdFx0XHQ8TGluayBwYXRoPVwiL1wiPlxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz17Rm9vdGVyTG9nb30gYWx0PVwiTG9nb1wiIC8+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9PlxuXHRcdFx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHRcdFx0e2RhdGEubWVudUl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXRoPXtpdGVtLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17aXRlbS5sYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQ8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuXHRcdFx0XHRcdFx0Q29weXJpZ2h0ICZjb3B5OyBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBPdXIgQ29tcGFueVxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L2Zvb3Rlcj5cblx0KTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRmb290ZXI6IHtcblx0XHRmb290ZXJCb3R0b21BcmVhOiB7XG5cdFx0XHRib3JkZXJUb3A6IFwiMXB4IHNvbGlkXCIsXG5cdFx0XHRib3JkZXJUb3BDb2xvcjogXCJib3JkZXJfY29sb3JcIixcblx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0cHQ6IFs3LCBudWxsLCA4XSxcblx0XHRcdHBiOiBbXCI0MHB4XCIsIG51bGwsIFwiMTAwcHhcIl0sXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdH0sXG5cdFx0bWVudXM6IHtcblx0XHRcdG10OiBbMywgNF0sXG5cdFx0XHRtYjogMixcblx0XHRcdG5hdjoge1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdGZsZXhXcmFwOiBcIndyYXBcIixcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdGxpbms6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgXCIxNXB4XCJdLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0Zm9udFdlaWdodDogXCI0MDBcIixcblx0XHRcdG1iOiAyLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuMzVzXCIsXG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxuXHRcdFx0cHg6IFsyLCBudWxsLCA0XSxcblx0XHRcdFwiOmhvdmVyXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNvcHlyaWdodDoge1xuXHRcdFx0Zm9udFNpemU6IFsxLCBcIjE1cHhcIl0sXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0fSxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9