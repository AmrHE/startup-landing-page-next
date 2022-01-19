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
      return handlePricingPlan;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkcmFnZ2FibGUiLCJ0YWJsZXQiLCJtb2JpbGUiLCJQYWNrYWdlIiwibW9udGhseSIsInBhY2thZ2VzIiwiYW5udWFsIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJwcmljaW5nUGxhbiIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJidXR0b25Hcm91cElubmVyIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsInByaWNpbmdXcmFwcGVyIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93Iiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUc7QUFDbEJDLFNBQU8sRUFBRTtBQUNSQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREo7QUFFUkMsU0FBSyxFQUFFLENBRkM7QUFHUkMsYUFBUyxFQUFFO0FBSEgsR0FEUztBQU1sQkMsUUFBTSxFQUFFO0FBQ1BMLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxhQUFTLEVBQUU7QUFISixHQU5VO0FBV2xCRSxRQUFNLEVBQUU7QUFDUE4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKO0FBWFUsQ0FBbkI7QUFrQmUsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUFBLE1BQ3pCQyxPQUR5QixHQUNMQywyREFESyxDQUN6QkQsT0FEeUI7QUFBQSxNQUNoQkUsTUFEZ0IsR0FDTEQsMkRBREssQ0FDaEJDLE1BRGdCOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDO0FBQ2xDQyxVQUFNLEVBQUUsU0FEMEI7QUFFbENDLGVBQVcsRUFBRUw7QUFGcUIsR0FBRCxDQUZEO0FBQUEsTUFFMUJNLEtBRjBCO0FBQUEsTUFFbkJDLFFBRm1COztBQU9qQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUNuQyxRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUN0QkYsY0FBUSxDQUFDO0FBQUVILGNBQU0sRUFBRSxRQUFWO0FBQW9CQyxtQkFBVyxFQUFFSDtBQUFqQyxPQUFELENBQVI7QUFDQSxLQUZELE1BRU87QUFDTkssY0FBUSxDQUFDO0FBQUVILGNBQU0sRUFBRSxTQUFWO0FBQXFCQyxtQkFBVyxFQUFFTDtBQUFsQyxPQUFELENBQVI7QUFDQTtBQUNELEdBTkQ7O0FBUUEsTUFBTVUsWUFBWSxHQUFHO0FBQ3BCQyx1QkFBbUIsRUFBRSxDQUREO0FBRXBCQyxVQUFNLEVBQUUsS0FGWTtBQUdwQkMsaUJBQWEsRUFBRSxJQUhLO0FBSXBCQyxjQUFVLEVBQUUsS0FKUTtBQUtwQkMsYUFBUyxFQUFFLEVBTFM7QUFNcEJDLGlCQUFhLEVBQUUsQ0FOSztBQU9wQnJCLFNBQUssRUFBRSxDQVBhO0FBUXBCc0Isa0JBQWMsRUFBRSxvQkFSSTtBQVNwQkMscUJBQWlCLEVBQUUscURBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRDO0FBVXBCQyxnQkFBWSxFQUFFLEVBVk07QUFXcEJDLGlCQUFhLEVBQUUsS0FYSztBQVlwQkMsWUFBUSxFQUFFLEtBWlU7QUFhcEJDLG1CQUFlLEVBQUUsS0FiRztBQWNwQkMsYUFBUyxFQUFFLEVBZFM7QUFlcEJDLG9CQUFnQixFQUFFLEVBZkU7QUFnQnBCQyw0QkFBd0IsRUFBRSxJQWhCTjtBQWlCcEJDLHFCQUFpQixFQUFFLEtBakJDO0FBa0JwQnBDLGNBQVUsRUFBRUEsVUFsQlE7QUFtQnBCcUMsWUFBUSxFQUFFLEtBbkJVO0FBb0JwQkMsZUFBVyxFQUFFO0FBcEJPLEdBQXJCO0FBdUJBLFNBQ0M7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFzQixNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxpRUFBRDtBQUNDLFVBQU0sRUFBQyxlQURSO0FBRUMsU0FBSyxFQUFDLDBCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQU1DLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFFMUIsS0FBSyxDQUFDRixNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLFFBQTdCLEdBQXdDLEVBRHBEO0FBRUMsUUFBSSxFQUFDLFFBRk47QUFHQyxrQkFBVyxTQUhaO0FBSUMsV0FBTyxFQUFFO0FBQUEsYUFBTUksaUJBQU47QUFBQSxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBTkQsQ0FERCxDQUREO0FBcUJBOztHQTNEdUJULE87O0tBQUFBLE87QUE2RHhCLElBQU1rQyxNQUFNLEdBQUdDLCtEQUFILCtNQUFaO0FBUUEsSUFBTUMsT0FBTyxHQUFHRCwrREFBSCxpUkFBYjtBQVVBLElBQU1KLE1BQU0sR0FBRztBQUNkTSxnQkFBYyxFQUFFO0FBQ2ZDLE1BQUUsRUFBRSxPQURXO0FBRWZDLE1BQUUsRUFBRSxPQUZXO0FBR2ZDLE1BQUUsRUFBRSxDQUFDLENBSFU7QUFJZkMsV0FBTyxFQUFFLE1BSk07QUFLZkMsaUJBQWEsRUFBRSxRQUxBO0FBTWZDLFlBQVEsRUFBRSxNQU5LO0FBT2YseUNBQXFDO0FBQ3BDLDBCQUFvQjtBQUNuQkMsaUJBQVMsWUFBS1YsTUFBTDtBQURVLE9BRGdCO0FBSXBDLGlCQUFXO0FBQ1ZVLGlCQUFTLFlBQUtSLE9BQUw7QUFEQyxPQUp5QjtBQU9wQyx5QkFBbUI7QUFDbEJRLGlCQUFTLFlBQUtSLE9BQUw7QUFEUyxPQVBpQjtBQVVwQ1MsWUFBTSxFQUFFO0FBQ1BELGlCQUFTLFlBQUtSLE9BQUw7QUFERjtBQVY0QixLQVB0QjtBQXFCZiwyQkFBdUI7QUFDdEJVLFdBQUssRUFBRSxNQURlO0FBRXRCLG9CQUFjO0FBQ2JMLGVBQU8sRUFBRTtBQURJO0FBRlEsS0FyQlI7QUEyQmYsc0JBQWtCO0FBQ2pCQSxhQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsTUFBM0IsQ0FEUTtBQUVqQkgsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCO0FBRmE7QUEzQkgsR0FERjtBQWlDZFMsYUFBVyxFQUFFO0FBQ1pQLE1BQUUsRUFBRSxDQURRO0FBRVpDLFdBQU8sRUFBRSxNQUZHO0FBR1pPLGNBQVUsRUFBRSxDQUhBO0FBSVpDLFFBQUksRUFBRTtBQUpNLEdBakNDO0FBdUNkakIsYUFBVyxFQUFFO0FBQ1prQixrQkFBYyxFQUFFLFFBREo7QUFFWlosTUFBRSxFQUFFLEdBRlE7QUFHWkMsTUFBRSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FIUTtBQUlaWSxZQUFRLEVBQUUsVUFKRTtBQUtaQyxVQUFNLEVBQUU7QUFMSSxHQXZDQztBQThDZG5CLGtCQUFnQixFQUFFO0FBQ2pCUSxXQUFPLEVBQUUsTUFEUTtBQUVqQlksV0FBTyxFQUFFLEtBRlE7QUFHakJDLFVBQU0sRUFBRSxRQUhTO0FBSWpCQyxnQkFBWSxFQUFFLEtBSkc7QUFLakJDLG1CQUFlLEVBQUUsU0FMQTtBQU1qQlgsVUFBTSxFQUFFO0FBQ1BZLFlBQU0sRUFBRSxDQUREO0FBRVBKLGFBQU8sRUFBRSxDQUFDLFdBQUQsRUFBYyxXQUFkLENBRkY7QUFHUEUsa0JBQVksRUFBRSxLQUhQO0FBSVBHLFdBQUssRUFBRSxNQUpBO0FBS1BDLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEg7QUFNUEMsZ0JBQVUsRUFBRSxHQU5MO0FBT1BDLGdCQUFVLEVBQUUsR0FQTDtBQVFQTCxxQkFBZSxFQUFFLGFBUlY7QUFTUE0sWUFBTSxFQUFFLFNBVEQ7QUFVUEMsZ0JBQVUsRUFBRSxNQVZMO0FBV1BDLG1CQUFhLEVBQUUsU0FYUjtBQVlQQyxnQkFBVSxFQUFFLFVBWkw7QUFhUCxrQkFBWTtBQUNYUCxhQUFLLEVBQUUsU0FESTtBQUVYRix1QkFBZSxFQUFFLFNBRk47QUFHWFUsaUJBQVMsRUFBRTtBQUhBLE9BYkw7QUFrQlAsaUJBQVc7QUFDVkMsZUFBTyxFQUFFO0FBREM7QUFsQko7QUFOUztBQTlDSixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI0NDM5NWMyMzNjZTQ0MzQxMjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEZsZXggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBQcmljZUNhcmQgZnJvbSBcImNvbXBvbmVudHMvcHJpY2UtY2FyZFwiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbi1ncm91cFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCB7IHBhY2thZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcHJpY2luZy1kYXRhXCI7XG5jb25zdCByZXNwb25zaXZlID0ge1xuXHRkZXNrdG9wOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdH0sXG5cdHRhYmxldDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxuXHRcdGl0ZW1zOiAyLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcblx0bW9iaWxlOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG5cdFx0aXRlbXM6IDEsXG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcblx0Y29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcblx0XHRhY3RpdmU6IFwibW9udGhseVwiLFxuXHRcdHByaWNpbmdQbGFuOiBtb250aGx5LFxuXHR9KTtcblxuXHRjb25zdCBoYW5kbGVQcmljaW5nUGxhbiA9IChwbGFuKSA9PiB7XG5cdFx0aWYgKHBsYW4gPT09IFwiYW5udWFsXCIpIHtcblx0XHRcdHNldFN0YXRlKHsgYWN0aXZlOiBcImFubnVhbFwiLCBwcmljaW5nUGxhbjogYW5udWFsIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRTdGF0ZSh7IGFjdGl2ZTogXCJtb250aGx5XCIsIHByaWNpbmdQbGFuOiBtb250aGx5IH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG5cdFx0YWRkaXRpb25hbFRyYW5zZnJvbTogMCxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG5cdFx0Y2VudGVyTW9kZTogZmFsc2UsXG5cdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdHNsaWRlc1RvU2xpZGU6IDEsXG5cdFx0aXRlbXM6IDMsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG5cdFx0Y3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcblx0XHRkb3RMaXN0Q2xhc3M6IFwiXCIsXG5cdFx0Zm9jdXNPblNlbGVjdDogZmFsc2UsXG5cdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG5cdFx0aXRlbUNsYXNzOiBcIlwiLFxuXHRcdG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuXHRcdHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcblx0XHRyZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG5cdFx0cmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcblx0XHRzaG93RG90czogZmFsc2UsXG5cdFx0c2xpZGVyQ2xhc3M6IFwiXCIsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24ucHJpY2luZ1wiIH19PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PFNlY3Rpb25IZWFkZXJcblx0XHRcdFx0XHRzbG9nYW49XCJQcmljaW5nIFBsYW5zXCJcblx0XHRcdFx0XHR0aXRsZT1cIkNob29zZSB5b3VyIHByaWNpbmcgcGxhblwiXG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEZsZXggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XG5cdFx0XHRcdFx0PEJveCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwSW5uZXJ9PlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gXCJtb250aGx5XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJNb250aGx5XCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW59XG5cdFx0XHRcdFx0XHQ+PC9idXR0b24+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDwvRmxleD5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3QgZmFkZUluMiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBzdHlsZXMgPSB7XG5cdHByaWNpbmdXcmFwcGVyOiB7XG5cdFx0bWI6IFwiLTQwcHhcIixcblx0XHRtdDogXCItNDBweFwiLFxuXHRcdG14OiAtMyxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdGZsZXhXcmFwOiBcIndyYXBcIixcblx0XHRcIiYucHJpY2luZ19fd3JhcHBlciAucGFja2FnZV9fY2FyZFwiOiB7XG5cdFx0XHRcIi5wYWNrYWdlX19oZWFkZXJcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRcInVsID4gbGlcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCIucGFja2FnZV9fcHJpY2VcIjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuOXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMXMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFwiPiB1bCA+IGxpIFwiOiB7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmJ1dHRvbl9fZ3JvdXBcIjoge1xuXHRcdFx0ZGlzcGxheTogW1wiZmxleFwiLCBudWxsLCBudWxsLCBudWxsLCBcIm5vbmVcIl0sXG5cdFx0XHRtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuXHRcdH0sXG5cdH0sXG5cdHByaWNpbmdJdGVtOiB7XG5cdFx0bXg6IDMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRmbGV4OiBcIjEgMSBhdXRvXCIsXG5cdH0sXG5cdGJ1dHRvbkdyb3VwOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0bWI6IFwiN1wiLFxuXHRcdG10OiBbXCItMTVweFwiLCBcIi0zNXB4XCJdLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0ekluZGV4OiAyLFxuXHR9LFxuXHRidXR0b25Hcm91cElubmVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0cGFkZGluZzogXCI3cHhcIixcblx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjRjdGOEZCXCIsXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHRib3JkZXI6IDAsXG5cdFx0XHRwYWRkaW5nOiBbXCIxNXB4IDIwcHhcIiwgXCIxNXB4IDI3cHhcIl0sXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFx0Zm9udEZhbWlseTogXCJib2R5XCIsXG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBcIi0wLjI0cHhcIixcblx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRcdFwiJi5hY3RpdmVcIjoge1xuXHRcdFx0XHRjb2xvcjogXCIjMGYyMTM3XCIsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG5cdFx0XHRcdGJveFNoYWRvdzogXCIwIDNweCA0cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdFx0fSxcblx0XHRcdFwiJjpmb2N1c1wiOiB7XG5cdFx0XHRcdG91dGxpbmU6IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==