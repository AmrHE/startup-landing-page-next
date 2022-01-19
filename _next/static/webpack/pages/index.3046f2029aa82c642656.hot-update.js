webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}, {
  id: 2,
  title: "Design Quality & performance",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 3,
  title: "Layout and organized layers",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 4,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "testemonial",
    sx: {
      variant: "section.testemonial"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    css: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: ["100%", null, null, "750px", "1000px", "1180px", null, "calc(50% + 865px)"],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s"
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: ["30px 20px 35px", "30px 25px 35px", "30px 20px 35px", "35px 30px 40px 40px", "30px 30px 35px", "35px 30px 40px 40px"],
    bg: "white",
    textAlign: "left",
    m: ["28px 5px 30px 5px", "28px 20px 30px 20px", "28px 15px 30px 15px", "28px 15px 30px 15px", "30px 20px 40px"],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)"
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex"
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0
        }
      },
      ".star": {
        color: "primary",
        mr: "1px"
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px"
      }
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover"
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwicmV2aWV3Q2FyZCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInAiLCJiZyIsIm0iLCJtYiIsInVsIiwicGwiLCJsaXN0U3R5bGUiLCJzdmciLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibWFyZ2luVG9wIiwiZmxleFNocmluayIsImltZyIsImhlaWdodCIsIm9iamVjdEZpdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJoZWFkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1o7QUFDQ0MsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLCtCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVDLHFFQUxUO0FBTUNDLE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQURZLEVBV1o7QUFDQ1AsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLDhCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVLLHFFQUxUO0FBTUNILE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQVhZLEVBcUJaO0FBQ0NQLElBQUUsRUFBRSxDQURMO0FBRUNDLE9BQUssRUFBRSw2QkFGUjtBQUdDQyxhQUFXLEVBQ1YseUpBSkY7QUFLQ0MsUUFBTSxFQUFFTSxxRUFMVDtBQU1DSixNQUFJLEVBQUUsaUJBTlA7QUFPQ0MsYUFBVyxFQUFFLFlBUGQ7QUFRQ0MsUUFBTSxFQUFFO0FBUlQsQ0FyQlksRUErQlo7QUFDQ1AsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLCtCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVPLHFFQUxUO0FBTUNMLE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQS9CWSxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNsQkMsU0FBTyxFQUFFO0FB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Y0FBVSxFQUFFLEtBRkE7QUFHWkQsWUFBUSxFQUFFLENBSEU7QUFJWkUsY0FBVSxFQUFFO0FBSkE7QUFySEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDQ2ZjIwMjlhYTgyYzY0MjY1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCBSYXRpbmcgZnJvbSBcImNvbXBvbmVudHMvcmF0aW5nXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uLWdyb3VwXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5cbmltcG9ydCBBdmF0YXIxIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmdcIjtcbmltcG9ydCBBdmF0YXIyIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmdcIjtcbmltcG9ydCBBdmF0YXIzIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmdcIjtcbmltcG9ydCBBdmF0YXI0IGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmdcIjtcblxuY29uc3QgZGF0YSA9IFtcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHRpdGxlOiBcIk1vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcblx0XHRhdmF0YXI6IEF2YXRhcjEsXG5cdFx0bmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcblx0XHRkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG5cdFx0cmV2aWV3OiA0LFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6IFwiRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZVwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG5cdFx0YXZhdGFyOiBBdmF0YXIyLFxuXHRcdG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG5cdFx0ZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuXHRcdHJldmlldzogNSxcblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdHRpdGxlOiBcIkxheW91dCBhbmQgb3JnYW5pemVkIGxheWVyc1wiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG5cdFx0YXZhdGFyOiBBdmF0YXIzLFxuXHRcdG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG5cdFx0ZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuXHRcdHJldmlldzogNSxcblx0fSxcblx0e1xuXHRcdGlkOiA0LFxuXHRcdHRpdGxlOiBcIk1vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcblx0XHRhdmF0YXI6IEF2YXRhcjQsXG5cdFx0bmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcblx0XHRkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG5cdFx0cmV2aWV3OiA0LFxuXHR9LFxuXTtcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcblx0XHRpdGVtczogNCxcblx0XHRzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuXHR9LFxuXHRsYXB0b3A6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXG5cdFx0aXRlbXM6IDMsXG5cdFx0c2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cblx0fSxcblx0dGFibGV0OiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXG5cdFx0aXRlbXM6IDIsXG5cdFx0c2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cblx0fSxcblx0bW9iaWxlOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG5cdFx0aXRlbXM6IDEsXG5cdFx0c2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cblx0fSxcbn07XG5cbmNvbnN0IGNhcm91c2VsUGFyYW1zID0ge1xuXHRhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxuXHRhcnJvd3M6IGZhbHNlLFxuXHRhdXRvUGxheVNwZWVkOiAzMDAwLFxuXHRjZW50ZXJNb2RlOiBmYWxzZSxcblx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRjb250YWluZXJDbGFzczogXCJjYXJvdXNlbC1jb250YWluZXJcIixcblx0Y3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcblx0ZG90TGlzdENsYXNzOiBcIlwiLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRpbmZpbml0ZTogdHJ1ZSxcblx0aXRlbUNsYXNzOiBcIlwiLFxuXHRrZXlCb2FyZENvbnRyb2w6IHRydWUsXG5cdG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuXHRyZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG5cdHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcblx0cmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcblx0c2hvd0RvdHM6IGZhbHNlLFxuXHRzbGlkZXJDbGFzczogXCJcIixcblx0c2xpZGVzVG9TbGlkZTogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBpZD1cInRlc3RlbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnRlc3RlbW9uaWFsXCIgfX0+XG5cdFx0XHQ8Q29udGFpbmVyIGNzcz17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+PC9Db250YWluZXI+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNhcm91c2VsV3JhcHBlcjoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG5cdFx0bXQ6IFwiLTMwcHhcIixcblx0XHRweDogXCIxNXB4XCIsXG5cdFx0XCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdG1heFdpZHRoOiBbXG5cdFx0XHRcdFwiMTAwJVwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcIjc1MHB4XCIsXG5cdFx0XHRcdFwiMTAwMHB4XCIsXG5cdFx0XHRcdFwiMTE4MHB4XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFwiY2FsYyg1MCUgKyA4NjVweClcIixcblx0XHRcdF0sXG5cdFx0XHRtcjogW1wiYXV0b1wiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBcIi0yMjBweFwiXSxcblx0XHRcdG1sOiBcImF1dG9cIixcblx0XHRcdFwiLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW1cIjoge1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuXHRcdFx0fSxcblx0XHRcdFwiLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0bilcIjoge1xuXHRcdFx0XHRvcGFjaXR5OiBcIjAuNVwiLFxuXHRcdFx0XHRcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MjBweClcIjoge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdHJldmlld0NhcmQ6IHtcblx0XHRib3hTaGFkb3c6IFwiMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSlcIixcblx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjZweFwiLFxuXHRcdHA6IFtcblx0XHRcdFwiMzBweCAyMHB4IDM1cHhcIixcblx0XHRcdFwiMzBweCAyNXB4IDM1cHhcIixcblx0XHRcdFwiMzBweCAyMHB4IDM1cHhcIixcblx0XHRcdFwiMzVweCAzMHB4IDQwcHggNDBweFwiLFxuXHRcdFx0XCIzMHB4IDMwcHggMzVweFwiLFxuXHRcdFx0XCIzNXB4IDMwcHggNDBweCA0MHB4XCIsXG5cdFx0XSxcblx0XHRiZzogXCJ3aGl0ZVwiLFxuXHRcdHRleHRBbGlnbjogXCJsZWZ0XCIsXG5cdFx0bTogW1xuXHRcdFx0XCIyOHB4IDVweCAzMHB4IDVweFwiLFxuXHRcdFx0XCIyOHB4IDIwcHggMzBweCAyMHB4XCIsXG5cdFx0XHRcIjI4cHggMTVweCAzMHB4IDE1cHhcIixcblx0XHRcdFwiMjhweCAxNXB4IDMwcHggMTVweFwiLFxuXHRcdFx0XCIzMHB4IDIwcHggNDBweFwiLFxuXHRcdF0sXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdGJveFNoYWRvdzogXCIwcHggNnB4IDMwcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuXHRcdH0sXG5cdFx0XCIucmF0aW5nXCI6IHtcblx0XHRcdG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG5cdFx0XHR1bDoge1xuXHRcdFx0XHRwbDogMCxcblx0XHRcdFx0bGlzdFN0eWxlOiBcIm5vbmVcIixcblx0XHRcdFx0bWI6IDAsXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0fSxcblx0XHRcdHN2Zzoge1xuXHRcdFx0XHRtYXJnaW5SaWdodDogXCIycHhcIixcblx0XHRcdFx0XCImOmxhc3Qtb2YtdHlwZVwiOiB7XG5cdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IDAsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0XCIuc3RhclwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdFx0bXI6IFwiMXB4XCIsXG5cdFx0XHR9LFxuXHRcdFx0XCIuc3Rhci1vXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwiI2RkZFwiLFxuXHRcdFx0XHRtcjogXCIxcHhcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5jYXJkLWZvb3RlclwiOiB7XG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCBcIjMzcHhcIl0sXG5cdFx0XHRcIi5pbWFnZVwiOiB7XG5cdFx0XHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0XHRcdG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRpbWc6IHtcblx0XHRcdFx0XHR3aWR0aDogXCI1NXB4XCIsXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjU1cHhcIixcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG5cdFx0XHRcdFx0b2JqZWN0Rml0OiBcImNvdmVyXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdHRpdGxlOiB7XG5cdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0bWI6IFszLCBudWxsLCBudWxsLCBcIjIycHhcIl0sXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdGxpbmVIZWlnaHQ6IDEuNixcblx0fSxcblx0ZGVzY3JpcHRpb246IHtcblx0XHRmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuXHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcblx0fSxcblx0aGVhZGluZzoge1xuXHRcdGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG5cdFx0Zm9udFdlaWdodDogNzAwLFxuXHRcdG1iOiBcIjNweFwiLFxuXHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRsaW5lSGVpZ2h0OiAxLjMsXG5cdH0sXG5cdGRlc2lnbmF0aW9uOiB7XG5cdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG5cdFx0Zm9udFNpemU6IDEsXG5cdFx0bGluZUhlaWdodDogMS40LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=