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

  var _this = this;

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
  }), state.pricingPlan.map(function (plan) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.pricingItem,
      key: plan.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 8
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJwcmljaW5nUGxhbiIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwicHJpY2luZ1dyYXBwZXIiLCJtYXAiLCJwcmljaW5nSXRlbSIsImlkIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsIm1iIiwibXQiLCJteCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJhbmltYXRpb24iLCJidXR0b24iLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJmb250RmFtaWx5IiwibGV0dGVyU3BhY2luZyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHO0FBQ2xCQyxTQUFPLEVBQUU7QUFDUkMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURKO0FBRVJDLFNBQUssRUFBRSxDQUZDO0FBR1JDLGFBQVMsRUFBRTtBQUhILEdBRFM7QUFNbEJDLFFBQU0sRUFBRTtBQUNQTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxFQUFFLENBRkE7QUFHUEMsYUFBUyxFQUFFO0FBSEosR0FOVTtBQVdsQkUsUUFBTSxFQUFFO0FBQ1BOLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxhQUFTLEVBQUU7QUFISjtBQVhVLENBQW5CO0FBa0JlLFNBQVNHLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxNQUN6QkMsT0FEeUIsR0FDTEMsMkRBREssQ0FDekJELE9BRHlCO0FBQUEsTUFDaEJFLE1BRGdCLEdBQ0xELDJEQURLLENBQ2hCQyxNQURnQjs7QUFBQSxrQkFFUEMsc0RBQVEsQ0FBQztBQUNsQ0MsVUFBTSxFQUFFLFNBRDBCO0FBRWxDQyxlQUFXLEVBQUVMO0FBRnFCLEdBQUQsQ0FGRDtBQUFBLE1BRTFCTSxLQUYwQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFPakMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJB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TlM7QUE5Q0osQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jY2Y2NzUyM2FjYTJlN2NjNTg0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBGbGV4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gXCJjb21wb25lbnRzL3ByaWNlLWNhcmRcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiY29tcG9uZW50cy9idXR0b24tZ3JvdXBcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgeyBwYWNrYWdlcyB9IGZyb20gXCIuLi9kYXRhL3ByaWNpbmctZGF0YVwiO1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG5cdG1vYmlsZToge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuXHRcdGl0ZW1zOiAxLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG5cdGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0YWN0aXZlOiBcIm1vbnRobHlcIixcblx0XHRwcmljaW5nUGxhbjogbW9udGhseSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuXHRcdGlmIChwbGFuID09PSBcImFubnVhbFwiKSB7XG5cdFx0XHRzZXRTdGF0ZSh7IGFjdGl2ZTogXCJhbm51YWxcIiwgcHJpY2luZ1BsYW46IGFubnVhbCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U3RhdGUoeyBhY3RpdmU6IFwibW9udGhseVwiLCBwcmljaW5nUGxhbjogbW9udGhseSB9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2xpZGVyUGFyYW1zID0ge1xuXHRcdGFkZGl0aW9uYWxUcmFuc2Zyb206IDAsXG5cdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRhdXRvUGxheVNwZWVkOiAzMDAwLFxuXHRcdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRcdGNsYXNzTmFtZTogXCJcIixcblx0XHRzbGlkZXNUb1NsaWRlOiAxLFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBcImNhcm91c2VsLWNvbnRhaW5lclwiLFxuXHRcdGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG5cdFx0ZG90TGlzdENsYXNzOiBcIlwiLFxuXHRcdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRcdGluZmluaXRlOiBmYWxzZSxcblx0XHRrZXlCb2FyZENvbnRyb2w6IGZhbHNlLFxuXHRcdGl0ZW1DbGFzczogXCJcIixcblx0XHRtaW5pbXVtVG91Y2hEcmFnOiA4MCxcblx0XHRyZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG5cdFx0cmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuXHRcdHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG5cdFx0c2hvd0RvdHM6IGZhbHNlLFxuXHRcdHNsaWRlckNsYXNzOiBcIlwiLFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnByaWNpbmdcIiB9fT5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxTZWN0aW9uSGVhZGVyXG5cdFx0XHRcdFx0c2xvZ2FuPVwiUHJpY2luZyBQbGFuc1wiXG5cdFx0XHRcdFx0dGl0bGU9XCJDaG9vc2UgeW91ciBwcmljaW5nIHBsYW5cIlxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuXHRcdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09IFwibW9udGhseVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTW9udGhseVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKFwibW9udGhseVwiKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0TW9udGhseSBQbGFuXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09IFwiYW5udWFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJBbm51YWxcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbihcImFubnVhbFwiKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0QW5udWFsIFBsYW5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5wcmljaW5nV3JhcHBlcn0gY2xhc3NOYW1lPVwicHJpY2luZ19fd3JhcHBlclwiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCB7Li4uc2xpZGVyUGFyYW1zfT5cblx0XHRcdFx0XHRcdHtzdGF0ZS5wcmljaW5nUGxhbi5tYXAoKHBsYW4pID0+IChcblx0XHRcdFx0XHRcdFx0PEJveCBzeD17c3R5bGVzLnByaWNpbmdJdGVtfSBrZXk9e3BsYW4uaWR9PjwvQm94PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9DYXJvdXNlbD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0ge1xuXHRwcmljaW5nV3JhcHBlcjoge1xuXHRcdG1iOiBcIi00MHB4XCIsXG5cdFx0bXQ6IFwiLTQwcHhcIixcblx0XHRteDogLTMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRmbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0XCImLnByaWNpbmdfX3dyYXBwZXIgLnBhY2thZ2VfX2NhcmRcIjoge1xuXHRcdFx0XCIucGFja2FnZV9faGVhZGVyXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW59IDAuOHMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCJ1bCA+IGxpXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdFwiLnBhY2thZ2VfX3ByaWNlXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcIj4gdWwgPiBsaSBcIjoge1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5idXR0b25fX2dyb3VwXCI6IHtcblx0XHRcdGRpc3BsYXk6IFtcImZsZXhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCJub25lXCJdLFxuXHRcdFx0bWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcblx0XHR9LFxuXHR9LFxuXHRwcmljaW5nSXRlbToge1xuXHRcdG14OiAzLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0ZmxleDogXCIxIDEgYXV0b1wiLFxuXHR9LFxuXHRidXR0b25Hcm91cDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdG1iOiBcIjdcIixcblx0XHRtdDogW1wiLTE1cHhcIiwgXCItMzVweFwiXSxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdHpJbmRleDogMixcblx0fSxcblx0YnV0dG9uR3JvdXBJbm5lcjoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBhZGRpbmc6IFwiN3B4XCIsXG5cdFx0bWFyZ2luOiBcIjAgYXV0b1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y3RjhGQlwiLFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0Ym9yZGVyOiAwLFxuXHRcdFx0cGFkZGluZzogW1wiMTVweCAyMHB4XCIsIFwiMTVweCAyN3B4XCJdLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGxpbmVIZWlnaHQ6IDEuMixcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiYm9keVwiLFxuXHRcdFx0bGV0dGVyU3BhY2luZzogXCItMC4yNHB4XCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0XHRcIiYuYWN0aXZlXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwiIzBmMjEzN1wiLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuXHRcdFx0XHRib3hTaGFkb3c6IFwiMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHRcdH0sXG5cdFx0XHRcIiY6Zm9jdXNcIjoge1xuXHRcdFx0XHRvdXRsaW5lOiAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=