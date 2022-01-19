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
/* harmony import */ var _data_pricing_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/pricing-data */ "./src/data/pricing-data.js");


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
  var monthly = _data_pricing_data__WEBPACK_IMPORTED_MODULE_8__["packages"].monthly,
      annual = _data_pricing_data__WEBPACK_IMPORTED_MODULE_8__["packages"].annual;
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
        lineNumber: 40,
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
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwic2xpZGVyUGFyYW1zIiwiYWRkaXRpb25hbFRyYW5zZnJvbSIsImFycm93cyIsImF1dG9QbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2xhc3NOYW1lIiwic2xpZGVzVG9TbGlkZSIsImNvbnRhaW5lckNsYXNzIiwiY3VzdG9tQnV0dG9uR3JvdXAiLCJkb3RMaXN0Q2xhc3MiLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJrZXlCb2FyZENvbnRyb2wiLCJpdGVtQ2xhc3MiLCJtaW5pbXVtVG91Y2hEcmFnIiwicmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlIiwicmVuZGVyRG90c091dHNpZGUiLCJzaG93RG90cyIsInNsaWRlckNsYXNzIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsInN0eWxlcyIsInByaWNpbmdXcmFwcGVyIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImJ1dHRvbkdyb3VwIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsImJ1dHRvbkdyb3VwSW5uZXIiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0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ZSxFQUFFLFNBRk47QUFHWFUsaUJBQVMsRUFBRTtBQUhBLE9BYkw7QUFrQlAsaUJBQVc7QUFDVkMsZUFBTyxFQUFFO0FBREM7QUFsQko7QUFOUztBQTlDSixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmOGI1MDU1M2Q4MzFhN2VmMDkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEZsZXggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBQcmljZUNhcmQgZnJvbSBcImNvbXBvbmVudHMvcHJpY2UtY2FyZFwiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbi1ncm91cFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCB7IHBhY2thZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcHJpY2luZy1kYXRhXCI7XG5jb25zdCByZXNwb25zaXZlID0ge1xuXHRkZXNrdG9wOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdH0sXG5cdHRhYmxldDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxuXHRcdGl0ZW1zOiAyLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcblx0bW9iaWxlOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG5cdFx0aXRlbXM6IDEsXG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcblx0Y29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xuXG5cdGNvbnN0IHNsaWRlclBhcmFtcyA9IHtcblx0XHRhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxuXHRcdGFycm93czogZmFsc2UsXG5cdFx0YXV0b1BsYXlTcGVlZDogMzAwMCxcblx0XHRjZW50ZXJNb2RlOiBmYWxzZSxcblx0XHRjbGFzc05hbWU6IFwiXCIsXG5cdFx0c2xpZGVzVG9TbGlkZTogMSxcblx0XHRpdGVtczogMyxcblx0XHRjb250YWluZXJDbGFzczogXCJjYXJvdXNlbC1jb250YWluZXJcIixcblx0XHRjdXN0b21CdXR0b25Hcm91cDogPEJ1dHRvbkdyb3VwIC8+LFxuXHRcdGRvdExpc3RDbGFzczogXCJcIixcblx0XHRmb2N1c09uU2VsZWN0OiBmYWxzZSxcblx0XHRpbmZpbml0ZTogZmFsc2UsXG5cdFx0a2V5Qm9hcmRDb250cm9sOiBmYWxzZSxcblx0XHRpdGVtQ2xhc3M6IFwiXCIsXG5cdFx0bWluaW11bVRvdWNoRHJhZzogODAsXG5cdFx0cmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuXHRcdHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcblx0XHRyZXNwb25zaXZlOiByZXNwb25zaXZlLFxuXHRcdHNob3dEb3RzOiBmYWxzZSxcblx0XHRzbGlkZXJDbGFzczogXCJcIixcblx0fTtcblxuXHRyZXR1cm4gPGgxPlBhY2thZ2U8L2gxPjtcbn1cblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3QgZmFkZUluMiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBzdHlsZXMgPSB7XG5cdHByaWNpbmdXcmFwcGVyOiB7XG5cdFx0bWI6IFwiLTQwcHhcIixcblx0XHRtdDogXCItNDBweFwiLFxuXHRcdG14OiAtMyxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdGZsZXhXcmFwOiBcIndyYXBcIixcblx0XHRcIiYucHJpY2luZ19fd3JhcHBlciAucGFja2FnZV9fY2FyZFwiOiB7XG5cdFx0XHRcIi5wYWNrYWdlX19oZWFkZXJcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRcInVsID4gbGlcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCIucGFja2FnZV9fcHJpY2VcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuOXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFwiPiB1bCA+IGxpIFwiOiB7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmJ1dHRvbl9fZ3JvdXBcIjoge1xuXHRcdFx0ZGlzcGxheTogW1wiZmxleFwiLCBudWxsLCBudWxsLCBudWxsLCBcIm5vbmVcIl0sXG5cdFx0XHRtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuXHRcdH0sXG5cdH0sXG5cdHByaWNpbmdJdGVtOiB7XG5cdFx0bXg6IDMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRmbGV4OiBcIjEgMSBhdXRvXCIsXG5cdH0sXG5cdGJ1dHRvbkdyb3VwOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0bWI6IFwiN1wiLFxuXHRcdG10OiBbXCItMTVweFwiLCBcIi0zNXB4XCJdLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0ekluZGV4OiAyLFxuXHR9LFxuXHRidXR0b25Hcm91cElubmVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0cGFkZGluZzogXCI3cHhcIixcblx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjRjdGOEZCXCIsXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHRib3JkZXI6IDAsXG5cdFx0XHRwYWRkaW5nOiBbXCIxNXB4IDIwcHhcIiwgXCIxNXB4IDI3cHhcIl0sXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJib2R5XCIsXG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0wLjI0cHhcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRcdFwiJi5hY3RpdmVcIjoge1xuXHRcdFx0XHRjb2xvcjogXCIjMGYyMTM3XCIsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG5cdFx0XHRcdGJveFNoYWRvdzogXCIwIDNweCA0cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiJjpmb2N1c1wiOiB7XG5cdFx0XHRcdG91dGxpbmU6IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==