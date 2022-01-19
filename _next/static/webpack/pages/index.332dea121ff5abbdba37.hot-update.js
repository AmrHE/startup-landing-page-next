webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");


var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\sections\\package.js",
    _templateObject,
    _templateObject2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

/** @jsx jsx */








var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: {
      max: 1023,
      min: 640
    },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    draggable: true
  }
};
function Package() {
  var _packages = packages,
      monthly = _packages.monthly,
      annual = _packages.annual;
  var sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 22
      }
    }),
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ""
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Package");
}
_c = Package;
var fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n\t\ttransform: translateY(0);\n    opacity: 1;\n  }\n"])));
var styles = {
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: "".concat(fadeIn, " 0.8s ease-in")
      },
      "ul > li": {
        animation: "".concat(fadeIn2, " 0.7s ease-in")
      },
      ".package__price": {
        animation: "".concat(fadeIn2, " 0.9s ease-in")
      },
      button: {
        animation: "".concat(fadeIn2, " 1s ease-in")
      }
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex"
      }
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto"
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)"
      },
      "&:focus": {
        outline: 0
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Package");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwicGFja2FnZXMiLCJtb250aGx5IiwiYW5udWFsIiwic2xpZGVyUGFyYW1zIiwiYWRkaXRpb25hbFRyYW5zZnJvbSIsImFycm93cyIsImF1dG9QbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2xhc3NOYW1lIiwic2xpZGVzVG9TbGlkZSIsImNvbnRhaW5lckNsYXNzIiwiY3VzdG9tQnV0dG9uR3JvdXAiLCJkb3RMaXN0Q2xhc3MiLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJrZXlCb2FyZENvbnRyb2wiLCJpdGVtQ2xhc3MiLCJtaW5pbXVtVG91Y2hEcmFnIiwicmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlIiwicmVuZGVyRG90c091dHNpZGUiLCJzaG93RG90cyIsInNsaWRlckNsYXNzIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsInN0eWxlcyIsInByaWNpbmdXcmFwcGVyIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImJ1dHRvbkdyb3VwIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsImJ1dHRvbkdyb3VwSW5uZXIiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0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U0FGTjtBQUdYVSxpQkFBUyxFQUFFO0FBSEEsT0FiTDtBQWtCUCxpQkFBVztBQUNWQyxlQUFPLEVBQUU7QUFEQztBQWxCSjtBQU5TO0FBOUNKLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzMyZGVhMTIxZmY1YWJiZGJhMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFByaWNlQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9wcmljZS1jYXJkXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uLWdyb3VwXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG5cdG1vYmlsZToge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuXHRcdGl0ZW1zOiAxLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG5cdGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblxuXHRjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG5cdFx0YWRkaXRpb25hbFRyYW5zZnJvbTogMCxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG5cdFx0Y2VudGVyTW9kZTogZmFsc2UsXG5cdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdHNsaWRlc1RvU2xpZGU6IDEsXG5cdFx0aXRlbXM6IDMsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG5cdFx0Y3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcblx0XHRkb3RMaXN0Q2xhc3M6IFwiXCIsXG5cdFx0Zm9jdXNPblNlbGVjdDogZmFsc2UsXG5cdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG5cdFx0aXRlbUNsYXNzOiBcIlwiLFxuXHRcdG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuXHRcdHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcblx0XHRyZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG5cdFx0cmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcblx0XHRzaG93RG90czogZmFsc2UsXG5cdFx0c2xpZGVyQ2xhc3M6IFwiXCIsXG5cdH07XG5cblx0cmV0dXJuIDxoMT5QYWNrYWdlPC9oMT47XG59XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0ge1xuXHRwcmljaW5nV3JhcHBlcjoge1xuXHRcdG1iOiBcIi00MHB4XCIsXG5cdFx0bXQ6IFwiLTQwcHhcIixcblx0XHRteDogLTMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRmbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0XCImLnByaWNpbmdfX3dyYXBwZXIgLnBhY2thZ2VfX2NhcmRcIjoge1xuXHRcdFx0XCIucGFja2FnZV9faGVhZGVyXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW59IDAuOHMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCJ1bCA+IGxpXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdFwiLnBhY2thZ2VfX3ByaWNlXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcIj4gdWwgPiBsaSBcIjoge1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5idXR0b25fX2dyb3VwXCI6IHtcblx0XHRcdGRpc3BsYXk6IFtcImZsZXhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCJub25lXCJdLFxuXHRcdFx0bWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcblx0XHR9LFxuXHR9LFxuXHRwcmljaW5nSXRlbToge1xuXHRcdG14OiAzLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0ZmxleDogXCIxIDEgYXV0b1wiLFxuXHR9LFxuXHRidXR0b25Hcm91cDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdG1iOiBcIjdcIixcblx0XHRtdDogW1wiLTE1cHhcIiwgXCItMzVweFwiXSxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdHpJbmRleDogMixcblx0fSxcblx0YnV0dG9uR3JvdXBJbm5lcjoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBhZGRpbmc6IFwiN3B4XCIsXG5cdFx0bWFyZ2luOiBcIjAgYXV0b1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y3RjhGQlwiLFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0Ym9yZGVyOiAwLFxuXHRcdFx0cGFkZGluZzogW1wiMTVweCAyMHB4XCIsIFwiMTVweCAyN3B4XCJdLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGxpbmVIZWlnaHQ6IDEuMixcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiYm9keVwiLFxuXHRcdFx0bGV0dGVyU3BhY2luZzogXCItMC4yNHB4XCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0XHRcIiYuYWN0aXZlXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwiIzBmMjEzN1wiLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuXHRcdFx0XHRib3hTaGFkb3c6IFwiMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHRcdH0sXG5cdFx0XHRcIiY6Zm9jdXNcIjoge1xuXHRcdFx0XHRvdXRsaW5lOiAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=