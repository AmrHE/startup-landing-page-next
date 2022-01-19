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
  }, "Monthly Plan"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
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
  }, "Annual Plan")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJwcmljaW5nUGxhbiIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsInByaWNpbmdXcmFwcGVyIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93Iiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUc7QUFDbEJDLFNBQU8sRUFBRTtBQUNSQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREo7QUFFUkMsU0FBSyxFQUFFLENBRkM7QUFHUkMsYUFBUyxFQUFFO0FBSEgsR0FEUztBQU1sQkMsUUFBTSxFQUFFO0FBQ1BMLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxhQUFTLEVBQUU7QUFISixHQU5VO0FBV2xCRSxRQUFNLEVBQUU7QUFDUE4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKO0FBWFUsQ0FBbkI7QUFrQmUsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUFBLE1BQ3pCQyxPQUR5QixHQUNMQywyREFESyxDQUN6QkQsT0FEeUI7QUFBQSxNQUNoQkUsTUFEZ0IsR0FDTEQsMkRBREssQ0FDaEJDLE1BRGdCOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDO0FBQ2xDQyxVQUFNLEVBQUUsU0FEMEI7QUFFbENDLGVBQVcsRUFBRUw7QUFGcUIsR0FBRCxDQUZEO0FBQUEsTUFFMUJNLEtBRjBCO0FBQUEsTUFFbkJDLFFBRm1COztBQU9qQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQs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LFFBSFM7QUFJakJDLGdCQUFZLEVBQUUsS0FKRztBQUtqQkMsbUJBQWUsRUFBRSxTQUxBO0FBTWpCWCxVQUFNLEVBQUU7QUFDUFksWUFBTSxFQUFFLENBREQ7QUFFUEosYUFBTyxFQUFFLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FGRjtBQUdQRSxrQkFBWSxFQUFFLEtBSFA7QUFJUEcsV0FBSyxFQUFFLE1BSkE7QUFLUEMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMSDtBQU1QQyxnQkFBVSxFQUFFLEdBTkw7QUFPUEMsZ0JBQVUsRUFBRSxHQVBMO0FBUVBMLHFCQUFlLEVBQUUsYUFSVjtBQVNQTSxZQUFNLEVBQUUsU0FURDtBQVVQQyxnQkFBVSxFQUFFLE1BVkw7QUFXUEMsbUJBQWEsRUFBRSxTQVhSO0FBWVBDLGdCQUFVLEVBQUUsVUFaTDtBQWFQLGtCQUFZO0FBQ1hQLGFBQUssRUFBRSxTQURJO0FBRVhGLHVCQUFlLEVBQUUsU0FGTjtBQUdYVSxpQkFBUyxFQUFFO0FBSEEsT0FiTDtBQWtCUCxpQkFBVztBQUNWQyxlQUFPLEVBQUU7QUFEQztBQWxCSjtBQU5TO0FBOUNKLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU3MWFhNzdmZThmOGQ0YjgxNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFByaWNlQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9wcmljZS1jYXJkXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uLWdyb3VwXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuaW1wb3J0IHsgcGFja2FnZXMgfSBmcm9tIFwiLi4vZGF0YS9wcmljaW5nLWRhdGFcIjtcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG5cdGRlc2t0b3A6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG5cdFx0aXRlbXM6IDMsXG5cdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0fSxcblx0dGFibGV0OiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDEwMjMsIG1pbjogNjQwIH0sXG5cdFx0aXRlbXM6IDIsXG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHR9LFxuXHRtb2JpbGU6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcblx0XHRpdGVtczogMSxcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xuXHRjb25zdCB7IG1vbnRobHksIGFubnVhbCB9ID0gcGFja2FnZXM7XG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuXHRcdGFjdGl2ZTogXCJtb250aGx5XCIsXG5cdFx0cHJpY2luZ1BsYW46IG1vbnRobHksXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVByaWNpbmdQbGFuID0gKHBsYW4pID0+IHtcblx0XHRpZiAocGxhbiA9PT0gXCJhbm51YWxcIikge1xuXHRcdFx0c2V0U3RhdGUoeyBhY3RpdmU6IFwiYW5udWFsXCIsIHByaWNpbmdQbGFuOiBhbm51YWwgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFN0YXRlKHsgYWN0aXZlOiBcIm1vbnRobHlcIiwgcHJpY2luZ1BsYW46IG1vbnRobHkgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNsaWRlclBhcmFtcyA9IHtcblx0XHRhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxuXHRcdGFycm93czogZmFsc2UsXG5cdFx0YXV0b1BsYXlTcGVlZDogMzAwMCxcblx0XHRjZW50ZXJNb2RlOiBmYWxzZSxcblx0XHRjbGFzc05hbWU6IFwiXCIsXG5cdFx0c2xpZGVzVG9TbGlkZTogMSxcblx0XHRpdGVtczogMyxcblx0XHRjb250YWluZXJDbGFzczogXCJjYXJvdXNlbC1jb250YWluZXJcIixcblx0XHRjdXN0b21CdXR0b25Hcm91cDogPEJ1dHRvbkdyb3VwIC8+LFxuXHRcdGRvdExpc3RDbGFzczogXCJcIixcblx0XHRmb2N1c09uU2VsZWN0OiBmYWxzZSxcblx0XHRpbmZpbml0ZTogZmFsc2UsXG5cdFx0a2V5Qm9hcmRDb250cm9sOiBmYWxzZSxcblx0XHRpdGVtQ2xhc3M6IFwiXCIsXG5cdFx0bWluaW11bVRvdWNoRHJhZzogODAsXG5cdFx0cmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuXHRcdHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcblx0XHRyZXNwb25zaXZlOiByZXNwb25zaXZlLFxuXHRcdHNob3dEb3RzOiBmYWxzZSxcblx0XHRzbGlkZXJDbGFzczogXCJcIixcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5wcmljaW5nXCIgfX0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8U2VjdGlvbkhlYWRlclxuXHRcdFx0XHRcdHNsb2dhbj1cIlByaWNpbmcgUGxhbnNcIlxuXHRcdFx0XHRcdHRpdGxlPVwiQ2hvb3NlIHlvdXIgcHJpY2luZyBwbGFuXCJcblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cblx0XHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXBJbm5lcn0+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSBcIm1vbnRobHlcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cIk1vbnRobHlcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbihcIm1vbnRobHlcIil9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdE1vbnRobHkgUGxhblxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSBcImFubnVhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQW5udWFsXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW4oXCJhbm51YWxcIil9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdEFubnVhbCBQbGFuXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBmYWRlSW4yID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IHN0eWxlcyA9IHtcblx0cHJpY2luZ1dyYXBwZXI6IHtcblx0XHRtYjogXCItNDBweFwiLFxuXHRcdG10OiBcIi00MHB4XCIsXG5cdFx0bXg6IC0zLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0ZmxleFdyYXA6IFwid3JhcFwiLFxuXHRcdFwiJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkXCI6IHtcblx0XHRcdFwiLnBhY2thZ2VfX2hlYWRlclwiOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdFwidWwgPiBsaVwiOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC43cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRcIi5wYWNrYWdlX19wcmljZVwiOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC45cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRidXR0b246IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAxcyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5jYXJvdXNlbC1jb250YWluZXJcIjoge1xuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XCI+IHVsID4gbGkgXCI6IHtcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuYnV0dG9uX19ncm91cFwiOiB7XG5cdFx0XHRkaXNwbGF5OiBbXCJmbGV4XCIsIG51bGwsIG51bGwsIG51bGwsIFwibm9uZVwiXSxcblx0XHRcdG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG5cdFx0fSxcblx0fSxcblx0cHJpY2luZ0l0ZW06IHtcblx0XHRteDogMyxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdGZsZXg6IFwiMSAxIGF1dG9cIixcblx0fSxcblx0YnV0dG9uR3JvdXA6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRtYjogXCI3XCIsXG5cdFx0bXQ6IFtcIi0xNXB4XCIsIFwiLTM1cHhcIl0sXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHR6SW5kZXg6IDIsXG5cdH0sXG5cdGJ1dHRvbkdyb3VwSW5uZXI6IHtcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRwYWRkaW5nOiBcIjdweFwiLFxuXHRcdG1hcmdpbjogXCIwIGF1dG9cIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiNGN0Y4RkJcIixcblx0XHRidXR0b246IHtcblx0XHRcdGJvcmRlcjogMCxcblx0XHRcdHBhZGRpbmc6IFtcIjE1cHggMjBweFwiLCBcIjE1cHggMjdweFwiXSxcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0XHRsaW5lSGVpZ2h0OiAxLjIsXG5cdFx0XHRmb250V2VpZ2h0OiA1MDAsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRmb250RmFtaWx5OiBcImJvZHlcIixcblx0XHRcdGxldHRlclNwYWNpbmc6IFwiLTAuMjRweFwiLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuXHRcdFx0XCImLmFjdGl2ZVwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcIiMwZjIxMzdcIixcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcblx0XHRcdFx0Ym94U2hhZG93OiBcIjAgM3B4IDRweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXG5cdFx0XHR9LFxuXHRcdFx0XCImOmZvY3VzXCI6IHtcblx0XHRcdFx0b3V0bGluZTogMCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9