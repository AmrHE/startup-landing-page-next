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
    _s = $RefreshSig$(),
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
  _s();

  var monthly = _data_pricing_data__WEBPACK_IMPORTED_MODULE_8__["packages"].monthly,
      annual = _data_pricing_data__WEBPACK_IMPORTED_MODULE_8__["packages"].annual;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    active: "monthly",
    pricingPlan: monthly
  }),
      state = _useState[0],
      setState = _useState[1];

  var handlePricingPlan = function handlePricingPlan(plan) {
    if (plan === "annual") {
      setState({
        active: "annual",
        pricingPlan: annual
      });
    } else {
      setState({
        active: "monthly",
        pricingPlan: monthly
      });
    }
  };

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
        lineNumber: 52,
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
      lineNumber: 67,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    slogan: "Pricing Plans",
    title: "Choose your pricing plan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: state.active === "monthly" ? "active" : "",
    type: "button",
    "aria-label": "Monthly",
    onClick: function onClick() {
      return handlePricingPlan("monthly");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, " ", "Monthly Plan")))));
}

_s(Package, "MpmGmKrMBXZNHceOr26VBcz/RFs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJwcmljaW5nUGxhbiIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsInByaWNpbmdXcmFwcGVyIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93Iiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUc7QUFDbEJDLFNBQU8sRUFBRTtBQUNSQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREo7QUFFUkMsU0FBSyxFQUFFLENBRkM7QUFHUkMsYUFBUyxFQUFFO0FBSEgsR0FEUztBQU1sQkMsUUFBTSxFQUFFO0FBQ1BMLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxhQUFTLEVBQUU7QUFISixHQU5VO0FBV2xCRSxRQUFNLEVBQUU7QUFDUE4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKO0FBWFUsQ0FBbkI7QUFrQmUsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUFBLE1BQ3pCQyxPQUR5QixHQUNMQywyREFESyxDQUN6QkQsT0FEeUI7QUFBQSxNQUNoQkUsTUFEZ0IsR0FDTEQsMkRBREssQ0FDaEJDLE1BRGdCOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDO0FBQ2xDQyxVQUFNLEVBQUUsU0FEMEI7QUFFbENDLGVBQVcsRUFBRUw7QUFGcUIsR0FBRCxDQUZEO0FBQUEsTUFFMUJNLEtBRjBCO0FBQUEsTUFFbkJDLFFBRm1COztBQU9qQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQs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LEVBQUksQ0FBSixDQUxIO0FBTVBDLGdCQUFVLEVBQUUsR0FOTDtBQU9QQyxnQkFBVSxFQUFFLEdBUEw7QUFRUEwscUJBQWUsRUFBRSxhQVJWO0FBU1BNLFlBQU0sRUFBRSxTQVREO0FBVVBDLGdCQUFVLEVBQUUsTUFWTDtBQVdQQyxtQkFBYSxFQUFFLFNBWFI7QUFZUEMsZ0JBQVUsRUFBRSxVQVpMO0FBYVAsa0JBQVk7QUFDWFAsYUFBSyxFQUFFLFNBREk7QUFFWEYsdUJBQWUsRUFBRSxTQUZOO0FBR1hVLGlCQUFTLEVBQUU7QUFIQSxPQWJMO0FBa0JQLGlCQUFXO0FBQ1ZDLGVBQU8sRUFBRTtBQURDO0FBbEJKO0FBTlM7QUE5Q0osQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjJkMDlkOTMwZTVhMjFmYmEyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBGbGV4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gXCJjb21wb25lbnRzL3ByaWNlLWNhcmRcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiY29tcG9uZW50cy9idXR0b24tZ3JvdXBcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgeyBwYWNrYWdlcyB9IGZyb20gXCIuLi9kYXRhL3ByaWNpbmctZGF0YVwiO1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG5cdG1vYmlsZToge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuXHRcdGl0ZW1zOiAxLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG5cdGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0YWN0aXZlOiBcIm1vbnRobHlcIixcblx0XHRwcmljaW5nUGxhbjogbW9udGhseSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuXHRcdGlmIChwbGFuID09PSBcImFubnVhbFwiKSB7XG5cdFx0XHRzZXRTdGF0ZSh7IGFjdGl2ZTogXCJhbm51YWxcIiwgcHJpY2luZ1BsYW46IGFubnVhbCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U3RhdGUoeyBhY3RpdmU6IFwibW9udGhseVwiLCBwcmljaW5nUGxhbjogbW9udGhseSB9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2xpZGVyUGFyYW1zID0ge1xuXHRcdGFkZGl0aW9uYWxUcmFuc2Zyb206IDAsXG5cdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRhdXRvUGxheVNwZWVkOiAzMDAwLFxuXHRcdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRcdGNsYXNzTmFtZTogXCJcIixcblx0XHRzbGlkZXNUb1NsaWRlOiAxLFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBcImNhcm91c2VsLWNvbnRhaW5lclwiLFxuXHRcdGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG5cdFx0ZG90TGlzdENsYXNzOiBcIlwiLFxuXHRcdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRcdGluZmluaXRlOiBmYWxzZSxcblx0XHRrZXlCb2FyZENvbnRyb2w6IGZhbHNlLFxuXHRcdGl0ZW1DbGFzczogXCJcIixcblx0XHRtaW5pbXVtVG91Y2hEcmFnOiA4MCxcblx0XHRyZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG5cdFx0cmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuXHRcdHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG5cdFx0c2hvd0RvdHM6IGZhbHNlLFxuXHRcdHNsaWRlckNsYXNzOiBcIlwiLFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnByaWNpbmdcIiB9fT5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxTZWN0aW9uSGVhZGVyXG5cdFx0XHRcdFx0c2xvZ2FuPVwiUHJpY2luZyBQbGFuc1wiXG5cdFx0XHRcdFx0dGl0bGU9XCJDaG9vc2UgeW91ciBwcmljaW5nIHBsYW5cIlxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuXHRcdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09IFwibW9udGhseVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTW9udGhseVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKFwibW9udGhseVwiKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRNb250aGx5IFBsYW5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0ge1xuXHRwcmljaW5nV3JhcHBlcjoge1xuXHRcdG1iOiBcIi00MHB4XCIsXG5cdFx0bXQ6IFwiLTQwcHhcIixcblx0XHRteDogLTMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRmbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0XCImLnByaWNpbmdfX3dyYXBwZXIgLnBhY2thZ2VfX2NhcmRcIjoge1xuXHRcdFx0XCIucGFja2FnZV9faGVhZGVyXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW59IDAuOHMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCJ1bCA+IGxpXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdFwiLnBhY2thZ2VfX3ByaWNlXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcIj4gdWwgPiBsaSBcIjoge1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5idXR0b25fX2dyb3VwXCI6IHtcblx0XHRcdGRpc3BsYXk6IFtcImZsZXhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCJub25lXCJdLFxuXHRcdFx0bWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcblx0XHR9LFxuXHR9LFxuXHRwcmljaW5nSXRlbToge1xuXHRcdG14OiAzLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0ZmxleDogXCIxIDEgYXV0b1wiLFxuXHR9LFxuXHRidXR0b25Hcm91cDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdG1iOiBcIjdcIixcblx0XHRtdDogW1wiLTE1cHhcIiwgXCItMzVweFwiXSxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdHpJbmRleDogMixcblx0fSxcblx0YnV0dG9uR3JvdXBJbm5lcjoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBhZGRpbmc6IFwiN3B4XCIsXG5cdFx0bWFyZ2luOiBcIjAgYXV0b1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y3RjhGQlwiLFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0Ym9yZGVyOiAwLFxuXHRcdFx0cGFkZGluZzogW1wiMTVweCAyMHB4XCIsIFwiMTVweCAyN3B4XCJdLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGxpbmVIZWlnaHQ6IDEuMixcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiYm9keVwiLFxuXHRcdFx0bGV0dGVyU3BhY2luZzogXCItMC4yNHB4XCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0XHRcIiYuYWN0aXZlXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwiIzBmMjEzN1wiLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuXHRcdFx0XHRib3hTaGFkb3c6IFwiMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHRcdH0sXG5cdFx0XHRcIiY6Zm9jdXNcIjoge1xuXHRcdFx0XHRvdXRsaW5lOiAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=