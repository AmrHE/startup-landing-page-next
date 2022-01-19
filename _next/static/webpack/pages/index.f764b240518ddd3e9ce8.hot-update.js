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
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "pricing",
    sx: {
      variant: "section.pricing"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwic2xpZGVyUGFyYW1zIiwiYWRkaXRpb25hbFRyYW5zZnJvbSIsImFycm93cyIsImF1dG9QbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2xhc3NOYW1lIiwic2xpZGVzVG9TbGlkZSIsImNvbnRhaW5lckNsYXNzIiwiY3VzdG9tQnV0dG9uR3JvdXAiLCJkb3RMaXN0Q2xhc3MiLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJrZXlCb2FyZENvbnRyb2wiLCJpdGVtQ2xhc3MiLCJtaW5pbXVtVG91Y2hEcmFnIiwicmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlIiwicmVuZGVyRG90c091dHNpZGUiLCJzaG93RG90cyIsInNsaWRlckNsYXNzIiwidmFyaWFudCIsImZhZGVJbiIsImtleWZyYW1lcyIsImZhZGVJbjIiLCJzdHlsZXMiLCJwcmljaW5nV3JhcHBlciIsIm1iIiwibXQiLCJteCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJhbmltYXRpb24iLCJidXR0b24iLCJ3aWR0aCIsInByaWNpbmdJdGVtIiwiZmxleFNocmluayIsImZsZXgiLCJidXR0b25Hcm91cCIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJidXR0b25Hcm91cElubmVyIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImN1cnNvciIsImZvbnRGYW1pbHkiLCJsZXR0ZXJTcGFjaW5n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QUFFLFNBWFI7QUFZUEMsZ0JBQVUsRUFBRSxVQVpMO0FBYVAsa0JBQVk7QUFDWFAsYUFBSyxFQUFFLFNBREk7QUFFWEYsdUJBQWUsRUFBRSxTQUZOO0FBR1hVLGlCQUFTLEVBQUU7QUFIQSxPQWJMO0FBa0JQLGlCQUFXO0FBQ1ZDLGVBQU8sRUFBRTtBQURDO0FBbEJKO0FBTlM7QUE5Q0osQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNzY0YjI0MDUxOGRkZDNlOWNlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBGbGV4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gXCJjb21wb25lbnRzL3ByaWNlLWNhcmRcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiY29tcG9uZW50cy9idXR0b24tZ3JvdXBcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgeyBwYWNrYWdlcyB9IGZyb20gXCIuLi9kYXRhL3ByaWNpbmctZGF0YVwiO1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG5cdG1vYmlsZToge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuXHRcdGl0ZW1zOiAxLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG5cdGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblxuXHRjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG5cdFx0YWRkaXRpb25hbFRyYW5zZnJvbTogMCxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG5cdFx0Y2VudGVyTW9kZTogZmFsc2UsXG5cdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdHNsaWRlc1RvU2xpZGU6IDEsXG5cdFx0aXRlbXM6IDMsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG5cdFx0Y3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcblx0XHRkb3RMaXN0Q2xhc3M6IFwiXCIsXG5cdFx0Zm9jdXNPblNlbGVjdDogZmFsc2UsXG5cdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG5cdFx0aXRlbUNsYXNzOiBcIlwiLFxuXHRcdG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuXHRcdHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcblx0XHRyZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG5cdFx0cmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcblx0XHRzaG93RG90czogZmFsc2UsXG5cdFx0c2xpZGVyQ2xhc3M6IFwiXCIsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24ucHJpY2luZ1wiIH19PlxuXHRcdFx0UGFja2FnZVxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3QgZmFkZUluMiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBzdHlsZXMgPSB7XG5cdHByaWNpbmdXcmFwcGVyOiB7XG5cdFx0bWI6IFwiLTQwcHhcIixcblx0XHRtdDogXCItNDBweFwiLFxuXHRcdG14OiAtMyxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdGZsZXhXcmFwOiBcIndyYXBcIixcblx0XHRcIiYucHJpY2luZ19fd3JhcHBlciAucGFja2FnZV9fY2FyZFwiOiB7XG5cdFx0XHRcIi5wYWNrYWdlX19oZWFkZXJcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRcInVsID4gbGlcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCIucGFja2FnZV9fcHJpY2VcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuOXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFwiPiB1bCA+IGxpIFwiOiB7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmJ1dHRvbl9fZ3JvdXBcIjoge1xuXHRcdFx0ZGlzcGxheTogW1wiZmxleFwiLCBudWxsLCBudWxsLCBudWxsLCBcIm5vbmVcIl0sXG5cdFx0XHRtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuXHRcdH0sXG5cdH0sXG5cdHByaWNpbmdJdGVtOiB7XG5cdFx0bXg6IDMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRmbGV4OiBcIjEgMSBhdXRvXCIsXG5cdH0sXG5cdGJ1dHRvbkdyb3VwOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0bWI6IFwiN1wiLFxuXHRcdG10OiBbXCItMTVweFwiLCBcIi0zNXB4XCJdLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0ekluZGV4OiAyLFxuXHR9LFxuXHRidXR0b25Hcm91cElubmVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0cGFkZGluZzogXCI3cHhcIixcblx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjRjdGOEZCXCIsXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHRib3JkZXI6IDAsXG5cdFx0XHRwYWRkaW5nOiBbXCIxNXB4IDIwcHhcIiwgXCIxNXB4IDI3cHhcIl0sXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJib2R5XCIsXG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0wLjI0cHhcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRcdFwiJi5hY3RpdmVcIjoge1xuXHRcdFx0XHRjb2xvcjogXCIjMGYyMTM3XCIsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG5cdFx0XHRcdGJveFNoYWRvdzogXCIwIDNweCA0cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiJjpmb2N1c1wiOiB7XG5cdFx0XHRcdG91dGxpbmU6IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==