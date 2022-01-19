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
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
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
        lineNumber: 19,
        columnNumber: 8
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwiZGF0YSIsIm1lbnVJdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwicGF0aCIsImxhYmVsIiwibGluayIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZGlzcGxheSIsInB0IiwicGIiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYiIsIm5hdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJjb3B5cmlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQyxTQUNDO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyxzREFBWjtBQUF3QixPQUFHLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FERCxFQU1DLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFSCxNQUFNLENBQUNDLE1BQVAsQ0FBY0csS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsb0RBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ25CLHFEQUFDLG9EQUFEO0FBQ0MsVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBRFo7QUFFQyxTQUFHLEVBQUVELENBRk47QUFHQyxXQUFLLEVBQUVELElBQUksQ0FBQ0csS0FIYjtBQUlDLFFBQUUsRUFBRVgsTUFBTSxDQUFDQyxNQUFQLENBQWNXLElBSm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEbUI7QUFBQSxHQUFuQixDQURGLENBREQsQ0FORCxDQURELENBREQ7QUF1QkE7S0F4QnVCYixNO0FBMEJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDZEMsUUFBTSxFQUFFO0FBQ1BDLG9CQUFnQixFQUFFO0FBQ2pCVyxlQUFTLEVBQUUsV0FETTtBQUVqQkMsb0JBQWMsRUFBRSxjQUZDO0FBR2pCQyxhQUFPLEVBQUUsTUFIUTtBQUlqQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSmE7QUFLakJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUxhO0FBTWpCQyxlQUFTLEVBQUUsUUFOTTtBQU9qQkMsbUJBQWEsRUFBRTtBQVBFLEtBRFg7QUFVUGYsU0FBSyxFQUFFO0FBQ05nQixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURFO0FBRU5DLFFBQUUsRUFBRSxDQUZFO0FBR05DLFNBQUcsRUFBRTtBQUNKUCxlQUFPLEVBQUUsTUFETDtBQUVKUSxrQkFBVSxFQUFFLFFBRlI7QUFHSkMsc0JBQWMsRUFBRSxRQUhaO0FBSUpDLGdCQUFRLEVBQUU7QUFKTjtBQUhDLEtBVkE7QUFxQlBiLFFBQUksRUFBRTtBQUNMYyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQURMO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLGdCQUFVLEVBQUUsS0FIUDtBQUlMUCxRQUFFLEVBQUUsQ0FKQztBQUtMUSxZQUFNLEVBQUUsU0FMSDtBQU1MQyxnQkFBVSxFQUFFLFdBTlA7QUFPTGYsYUFBTyxFQUFFLE9BUEo7QUFRTGdCLG9CQUFjLEVBQUUsTUFSWDtBQVNMQyxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxHQUFaLENBVFA7QUFVTEMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkM7QUFXTCxnQkFBVTtBQUNUTixhQUFLLEVBQUU7QUFERTtBQVhMLEtBckJDO0FBb0NQTyxhQUFTLEVBQUU7QUFDVlIsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FEQTtBQUVWUyxXQUFLLEVBQUU7QUFGRztBQXBDSjtBQURNLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGY3MzFiM2Q3NWU1YmZhZTNmNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIFRleHQgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9mb290ZXIuZGF0YVwiO1xuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSBcImFzc2V0cy9sb2dvLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuXHRcdFx0XHRcdDxMaW5rIHBhdGg9XCIvXCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtGb290ZXJMb2dvfSBhbHQ9XCJMb2dvXCIgLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfT5cblx0XHRcdFx0XHQ8bmF2PlxuXHRcdFx0XHRcdFx0e2RhdGEubWVudUl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e2l0ZW0ucGF0aH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0c3g9e3N0eWxlcy5mb290ZXIubGlua31cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvZm9vdGVyPlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGZvb3Rlcjoge1xuXHRcdGZvb3RlckJvdHRvbUFyZWE6IHtcblx0XHRcdGJvcmRlclRvcDogXCIxcHggc29saWRcIixcblx0XHRcdGJvcmRlclRvcENvbG9yOiBcImJvcmRlcl9jb2xvclwiLFxuXHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRwdDogWzcsIG51bGwsIDhdLFxuXHRcdFx0cGI6IFtcIjQwcHhcIiwgbnVsbCwgXCIxMDBweFwiXSxcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0fSxcblx0XHRtZW51czoge1xuXHRcdFx0bXQ6IFszLCA0XSxcblx0XHRcdG1iOiAyLFxuXHRcdFx0bmF2OiB7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0ZmxleFdyYXA6IFwid3JhcFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0bGluazoge1xuXHRcdFx0Zm9udFNpemU6IFsxLCBcIjE1cHhcIl0sXG5cdFx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XHRmb250V2VpZ2h0OiBcIjQwMFwiLFxuXHRcdFx0bWI6IDIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zNXNcIixcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcblx0XHRcdGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG5cdFx0XHRweDogWzIsIG51bGwsIDRdLFxuXHRcdFx0XCI6aG92ZXJcIjoge1xuXHRcdFx0XHRjb2xvcjogXCJwcmltYXJ5XCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Y29weXJpZ2h0OiB7XG5cdFx0XHRmb250U2l6ZTogWzEsIFwiMTVweFwiXSxcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=