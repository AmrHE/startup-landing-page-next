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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var _data_pricing_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/pricing-data */ "./src/data/pricing-data.js");



var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\sections\\package.js",
    _s = $RefreshSig$(),
    _templateObject,
    _templateObject2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

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

  var monthly = _data_pricing_data__WEBPACK_IMPORTED_MODULE_9__["packages"].monthly,
      annual = _data_pricing_data__WEBPACK_IMPORTED_MODULE_9__["packages"].annual;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
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
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slogan: "Pricing Plans",
    title: "Choose your pricing plan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
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
  }, "Monthly Plan"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    className: state.active === "annual" ? "active" : "",
    type: "button",
    "aria-label": "Annual",
    onClick: function onClick() {
      return handlePricingPlan("annual");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Annual Plan"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.pricingWrapper,
    className: "pricing__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sliderParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  })))));
}

_s(Package, "MpmGmKrMBXZNHceOr26VBcz/RFs=");

_c = Package;
var fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n\t\ttransform: translateY(0);\n    opacity: 1;\n  }\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJwcmljaW5nUGxhbiIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwicHJpY2luZ1dyYXBwZXIiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJmYWRlSW4yIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93Iiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBRztBQUNsQkMsU0FBTyxFQUFFO0FBQ1JDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FESjtBQUVSQyxTQUFLLEVBQUUsQ0FGQztBQUdSQyxhQUFTLEVBQUU7QUFISCxHQURTO0FBTWxCQyxRQUFNLEVBQUU7QUFDUEwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKLEdBTlU7QUFXbEJFLFFBQU0sRUFBRTtBQUNQTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBREw7QUFFUEMsU0FBSyxFQUFFLENBRkE7QUFHUEMsYUFBUyxFQUFFO0FBSEo7QUFYVSxDQUFuQjtBQWtCZSxTQUFTRyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsTUFDekJDLE9BRHlCLEdBQ0xDLDJEQURLLENBQ3pCRCxPQUR5QjtBQUFBLE1BQ2hCRSxNQURnQixHQUNMRCwyREFESyxDQUNoQkMsTUFEZ0I7O0FBQUEsa0JBRVBDLHNEQUFRLENBQUM7QUFDbENDLFVBQU0sRUFBRSxTQUQwQjtBQUVsQ0MsZUFBVyxFQUFFTDtBQUZxQixHQUFELENBRkQ7QUFBQSxNQUUxQk0sS0FGMEI7QUFBQSxNQUVuQkMsUUFGbUI7O0FBT2pDLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFB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RVpaLE1BQUUsRUFBRSxHQUZRO0FBR1pDLE1BQUUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBSFE7QUFJWlksWUFBUSxFQUFFLFVBSkU7QUFLWkMsVUFBTSxFQUFFO0FBTEksR0F2Q0M7QUE4Q2RuQixrQkFBZ0IsRUFBRTtBQUNqQlEsV0FBTyxFQUFFLE1BRFE7QUFFakJZLFdBQU8sRUFBRSxLQUZRO0FBR2pCQyxVQUFNLEVBQUUsUUFIUztBQUlqQkMsZ0JBQVksRUFBRSxLQUpHO0FBS2pCQyxtQkFBZSxFQUFFLFNBTEE7QUFNakJYLFVBQU0sRUFBRTtBQUNQWSxZQUFNLEVBQUUsQ0FERDtBQUVQSixhQUFPLEVBQUUsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUZGO0FBR1BFLGtCQUFZLEVBQUUsS0FIUDtBQUlQRyxXQUFLLEVBQUUsTUFKQTtBQUtQQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxIO0FBTVBDLGdCQUFVLEVBQUUsR0FOTDtBQU9QQyxnQkFBVSxFQUFFLEdBUEw7QUFRUEwscUJBQWUsRUFBRSxhQVJWO0FBU1BNLFlBQU0sRUFBRSxTQVREO0FBVVBDLGdCQUFVLEVBQUUsTUFWTDtBQVdQQyxtQkFBYSxFQUFFLFNBWFI7QUFZUEMsZ0JBQVUsRUFBRSxVQVpMO0FBYVAsa0JBQVk7QUFDWFAsYUFBSyxFQUFFLFNBREk7QUFFWEYsdUJBQWUsRUFBRSxTQUZOO0FBR1hVLGlCQUFTLEVBQUU7QUFIQSxPQWJMO0FBa0JQLGlCQUFXO0FBQ1ZDLGVBQU8sRUFBRTtBQURDO0FBbEJKO0FBTlM7QUE5Q0osQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNjU5NWY1NWJiZWQ4Mzk5ODAzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBGbGV4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gXCJjb21wb25lbnRzL3ByaWNlLWNhcmRcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiY29tcG9uZW50cy9idXR0b24tZ3JvdXBcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgeyBwYWNrYWdlcyB9IGZyb20gXCIuLi9kYXRhL3ByaWNpbmctZGF0YVwiO1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG5cdG1vYmlsZToge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuXHRcdGl0ZW1zOiAxLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG5cdGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0YWN0aXZlOiBcIm1vbnRobHlcIixcblx0XHRwcmljaW5nUGxhbjogbW9udGhseSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuXHRcdGlmIChwbGFuID09PSBcImFubnVhbFwiKSB7XG5cdFx0XHRzZXRTdGF0ZSh7IGFjdGl2ZTogXCJhbm51YWxcIiwgcHJpY2luZ1BsYW46IGFubnVhbCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U3RhdGUoeyBhY3RpdmU6IFwibW9udGhseVwiLCBwcmljaW5nUGxhbjogbW9udGhseSB9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2xpZGVyUGFyYW1zID0ge1xuXHRcdGFkZGl0aW9uYWxUcmFuc2Zyb206IDAsXG5cdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRhdXRvUGxheVNwZWVkOiAzMDAwLFxuXHRcdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRcdGNsYXNzTmFtZTogXCJcIixcblx0XHRzbGlkZXNUb1NsaWRlOiAxLFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBcImNhcm91c2VsLWNvbnRhaW5lclwiLFxuXHRcdGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG5cdFx0ZG90TGlzdENsYXNzOiBcIlwiLFxuXHRcdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRcdGluZmluaXRlOiBmYWxzZSxcblx0XHRrZXlCb2FyZENvbnRyb2w6IGZhbHNlLFxuXHRcdGl0ZW1DbGFzczogXCJcIixcblx0XHRtaW5pbXVtVG91Y2hEcmFnOiA4MCxcblx0XHRyZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG5cdFx0cmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuXHRcdHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG5cdFx0c2hvd0RvdHM6IGZhbHNlLFxuXHRcdHNsaWRlckNsYXNzOiBcIlwiLFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnByaWNpbmdcIiB9fT5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxTZWN0aW9uSGVhZGVyXG5cdFx0XHRcdFx0c2xvZ2FuPVwiUHJpY2luZyBQbGFuc1wiXG5cdFx0XHRcdFx0dGl0bGU9XCJDaG9vc2UgeW91ciBwcmljaW5nIHBsYW5cIlxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuXHRcdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09IFwibW9udGhseVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTW9udGhseVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKFwibW9udGhseVwiKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0TW9udGhseSBQbGFuXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09IFwiYW5udWFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJBbm51YWxcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbihcImFubnVhbFwiKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0QW5udWFsIFBsYW5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5wcmljaW5nV3JhcHBlcn0gY2xhc3NOYW1lPVwicHJpY2luZ19fd3JhcHBlclwiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCB7Li4uc2xpZGVyUGFyYW1zfSAvPlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3QgZmFkZUluMiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBzdHlsZXMgPSB7XG5cdHByaWNpbmdXcmFwcGVyOiB7XG5cdFx0bWI6IFwiLTQwcHhcIixcblx0XHRtdDogXCItNDBweFwiLFxuXHRcdG14OiAtMyxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdGZsZXhXcmFwOiBcIndyYXBcIixcblx0XHRcIiYucHJpY2luZ19fd3JhcHBlciAucGFja2FnZV9fY2FyZFwiOiB7XG5cdFx0XHRcIi5wYWNrYWdlX19oZWFkZXJcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRcInVsID4gbGlcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCIucGFja2FnZV9fcHJpY2VcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuOXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFwiPiB1bCA+IGxpIFwiOiB7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmJ1dHRvbl9fZ3JvdXBcIjoge1xuXHRcdFx0ZGlzcGxheTogW1wiZmxleFwiLCBudWxsLCBudWxsLCBudWxsLCBcIm5vbmVcIl0sXG5cdFx0XHRtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuXHRcdH0sXG5cdH0sXG5cdHByaWNpbmdJdGVtOiB7XG5cdFx0bXg6IDMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRmbGV4OiBcIjEgMSBhdXRvXCIsXG5cdH0sXG5cdGJ1dHRvbkdyb3VwOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0bWI6IFwiN1wiLFxuXHRcdG10OiBbXCItMTVweFwiLCBcIi0zNXB4XCJdLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0ekluZGV4OiAyLFxuXHR9LFxuXHRidXR0b25Hcm91cElubmVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0cGFkZGluZzogXCI3cHhcIixcblx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjRjdGOEZCXCIsXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHRib3JkZXI6IDAsXG5cdFx0XHRwYWRkaW5nOiBbXCIxNXB4IDIwcHhcIiwgXCIxNXB4IDI3cHhcIl0sXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJib2R5XCIsXG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0wLjI0cHhcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRcdFwiJi5hY3RpdmVcIjoge1xuXHRcdFx0XHRjb2xvcjogXCIjMGYyMTM3XCIsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG5cdFx0XHRcdGJveFNoYWRvdzogXCIwIDNweCA0cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiJjpmb2N1c1wiOiB7XG5cdFx0XHRcdG91dGxpbmU6IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==