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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "E:\\Amr\\Coding\\React.js\\React Projects\\Startup Landing Page\\landing_page_nextjs\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}, {
  id: 2,
  title: "Design Quality & performance",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 3,
  title: "Layout and organized layers",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 4,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
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
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: "section.testimonial"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Testimonial",
    title: "Meet Client Satisfaction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 8
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 8
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 8
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 8
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: "Client Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 10
      }
    })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "reviewer-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h4",
      sx: styles.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 10
      }
    }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.designation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 10
      }
    }, item.designation))));
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImhlYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1o7QUFDQ0MsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLCtCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVDLHFFQUxUO0FBTUNDLE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQURZLEVBV1o7QUFDQ1AsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLDhCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVLLHFFQUxUO0FBTUNILE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQVhZLEVBcUJaO0FBQ0NQLElBQUUsRUFBRSxDQURMO0FBRUNDLE9BQUssRUFBRSw2QkFGUjtBQUdDQyxhQUFXLEVBQ1YseUpBSkY7QUFLQ0MsUUFBTSxFQUFFTSxxRUFMVDtBQU1DSixNQUFJLEVBQUUsaUJBTlA7QUFPQ0MsYUFBVyxFQUFFLFlBUGQ7QUFRQ0MsUUFBTSxFQUFFO0FBUlQsQ0FyQlksRUErQlo7QUFDQ1AsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLCtCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVPLHNFQUxUO0FBTUNMLE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQS9CWSxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNs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SUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FIRTtBQUlOTSxTQUFLLEVBQUUsTUFKRDtBQUtOUSxjQUFVLEVBQUU7QUFMTixHQWpHTztBQXdHZDlFLGFBQVcsRUFBRTtBQUNaNEUsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREU7QUFFWkMsY0FBVSxFQUFFLFFBRkE7QUFHWlAsU0FBSyxFQUFFLE1BSEs7QUFJWlEsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxDQUFiO0FBSkEsR0F4R0M7QUE4R2RoQyxTQUFPLEVBQUU7QUFDUjhCLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURGO0FBRVJDLGNBQVUsRUFBRSxHQUZKO0FBR1JiLE1BQUUsRUFBRSxLQUhJO0FBSVJNLFNBQUssRUFBRSxNQUpDO0FBS1JRLGNBQVUsRUFBRTtBQUxKLEdBOUdLO0FBcUhkMUUsYUFBVyxFQUFFO0FBQ1prRSxTQUFLLEVBQUUsU0FESztBQUVaTyxjQUFVLEVBQUUsS0FGQTtBQUdaRCxZQUFRLEVBQUUsQ0FIRTtBQUlaRSxjQUFVLEVBQUU7QUFKQTtBQXJIQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5Mjk1ZDA2ZWQ2NTkyNDY2ODFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCb3gsIEltYWdlIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuaW1wb3J0IFJhdGluZyBmcm9tIFwiY29tcG9uZW50cy9yYXRpbmdcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiY29tcG9uZW50cy9idXR0b24tZ3JvdXBcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcblxuaW1wb3J0IEF2YXRhcjEgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZ1wiO1xuaW1wb3J0IEF2YXRhcjIgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZ1wiO1xuaW1wb3J0IEF2YXRhcjMgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZ1wiO1xuaW1wb3J0IEF2YXRhcjQgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZ1wiO1xuXG5jb25zdCBkYXRhID0gW1xuXHR7XG5cdFx0aWQ6IDEsXG5cdFx0dGl0bGU6IFwiTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ25cIixcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxuXHRcdGF2YXRhcjogQXZhdGFyMSxcblx0XHRuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxuXHRcdGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcblx0XHRyZXZpZXc6IDQsXG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0aXRsZTogXCJEZXNpZ24gUXVhbGl0eSAmIHBlcmZvcm1hbmNlXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcblx0XHRhdmF0YXI6IEF2YXRhcjIsXG5cdFx0bmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcblx0XHRkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG5cdFx0cmV2aWV3OiA1LFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dGl0bGU6IFwiTGF5b3V0IGFuZCBvcmdhbml6ZWQgbGF5ZXJzXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcblx0XHRhdmF0YXI6IEF2YXRhcjMsXG5cdFx0bmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcblx0XHRkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG5cdFx0cmV2aWV3OiA1LFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDQsXG5cdFx0dGl0bGU6IFwiTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ25cIixcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxuXHRcdGF2YXRhcjogQXZhdGFyNCxcblx0XHRuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxuXHRcdGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcblx0XHRyZXZpZXc6IDQsXG5cdH0sXG5dO1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuXHRkZXNrdG9wOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxuXHRcdGl0ZW1zOiA0LFxuXHRcdHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG5cdH0sXG5cdGxhcHRvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuXHR9LFxuXHRtb2JpbGU6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcblx0XHRpdGVtczogMSxcblx0XHRzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuXHR9LFxufTtcblxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XG5cdGFkZGl0aW9uYWxUcmFuc2Zyb206IDAsXG5cdGFycm93czogZmFsc2UsXG5cdGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG5cdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRjbGFzc05hbWU6IFwiXCIsXG5cdGNvbnRhaW5lckNsYXNzOiBcImNhcm91c2VsLWNvbnRhaW5lclwiLFxuXHRjdXN0b21CdXR0b25Hcm91cDogPEJ1dHRvbkdyb3VwIC8+LFxuXHRkb3RMaXN0Q2xhc3M6IFwiXCIsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Zm9jdXNPblNlbGVjdDogZmFsc2UsXG5cdGluZmluaXRlOiB0cnVlLFxuXHRpdGVtQ2xhc3M6IFwiXCIsXG5cdGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcblx0bWluaW11bVRvdWNoRHJhZzogODAsXG5cdHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcblx0cmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuXHRyZXNwb25zaXZlOiByZXNwb25zaXZlLFxuXHRzaG93RG90czogZmFsc2UsXG5cdHNsaWRlckNsYXNzOiBcIlwiLFxuXHRzbGlkZXNUb1NsaWRlOiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxcIiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24udGVzdGltb25pYWxcIiB9fT5cblx0XHRcdDxDb250YWluZXIgY3NzPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cblx0XHRcdFx0PFNlY3Rpb25IZWFkZXIgc2xvZ2FuPVwiVGVzdGltb25pYWxcIiB0aXRsZT1cIk1lZXQgQ2xpZW50IFNhdGlzZmFjdGlvblwiIC8+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxuXHRcdFx0XHQ8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUGFyYW1zfT5cblx0XHRcdFx0XHR7ZGF0YS5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2l0ZW0uaWR9PlxuXHRcdFx0XHRcdFx0XHQ8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XG5cdFx0XHRcdFx0XHRcdDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cblx0XHRcdFx0XHRcdFx0XHR7aXRlbS50aXRsZX1cblx0XHRcdFx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e2l0ZW0uYXZhdGFyfSBhbHQ9XCJDbGllbnQgSW1hZ2VcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBzeD17c3R5bGVzLmRlc2lnbmF0aW9ufT57aXRlbS5kZXNpZ25hdGlvbn08L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y2Fyb3VzZWxXcmFwcGVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcblx0XHRtdDogXCItMzBweFwiLFxuXHRcdHB4OiBcIjE1cHhcIixcblx0XHRcIi5jYXJvdXNlbC1jb250YWluZXJcIjoge1xuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0bWF4V2lkdGg6IFtcblx0XHRcdFx0XCIxMDAlXCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFwiNzUwcHhcIixcblx0XHRcdFx0XCIxMDAwcHhcIixcblx0XHRcdFx0XCIxMTgwcHhcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XCJjYWxjKDUwJSArIDg2NXB4KVwiLFxuXHRcdFx0XSxcblx0XHRcdG1yOiBbXCJhdXRvXCIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIFwiLTIyMHB4XCJdLFxuXHRcdFx0bWw6IFwiYXV0b1wiLFxuXHRcdFx0XCIucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbVwiOiB7XG5cdFx0XHRcdHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG5cdFx0XHR9LFxuXHRcdFx0XCIucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKVwiOiB7XG5cdFx0XHRcdG9wYWNpdHk6IFwiMC41XCIsXG5cdFx0XHRcdFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KVwiOiB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0cmV2aWV3Q2FyZDoge1xuXHRcdGJveFNoYWRvdzogXCIwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KVwiLFxuXHRcdHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG5cdFx0cDogW1xuXHRcdFx0XCIzMHB4IDIwcHggMzVweFwiLFxuXHRcdFx0XCIzMHB4IDI1cHggMzVweFwiLFxuXHRcdFx0XCIzMHB4IDIwcHggMzVweFwiLFxuXHRcdFx0XCIzNXB4IDMwcHggNDBweCA0MHB4XCIsXG5cdFx0XHRcIjMwcHggMzBweCAzNXB4XCIsXG5cdFx0XHRcIjM1cHggMzBweCA0MHB4IDQwcHhcIixcblx0XHRdLFxuXHRcdGJnOiBcIndoaXRlXCIsXG5cdFx0dGV4dEFsaWduOiBcImxlZnRcIixcblx0XHRtOiBbXG5cdFx0XHRcIjI4cHggNXB4IDMwcHggNXB4XCIsXG5cdFx0XHRcIjI4cHggMjBweCAzMHB4IDIwcHhcIixcblx0XHRcdFwiMjhweCAxNXB4IDMwcHggMTVweFwiLFxuXHRcdFx0XCIyOHB4IDE1cHggMzBweCAxNXB4XCIsXG5cdFx0XHRcIjMwcHggMjBweCA0MHB4XCIsXG5cdFx0XSxcblx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0Ym94U2hhZG93OiBcIjBweCA2cHggMzBweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXG5cdFx0fSxcblx0XHRcIi5yYXRpbmdcIjoge1xuXHRcdFx0bWI6IFsxLCBudWxsLCBudWxsLCAyXSxcblx0XHRcdHVsOiB7XG5cdFx0XHRcdHBsOiAwLFxuXHRcdFx0XHRsaXN0U3R5bGU6IFwibm9uZVwiLFxuXHRcdFx0XHRtYjogMCxcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHR9LFxuXHRcdFx0c3ZnOiB7XG5cdFx0XHRcdG1hcmdpblJpZ2h0OiBcIjJweFwiLFxuXHRcdFx0XHRcIiY6bGFzdC1vZi10eXBlXCI6IHtcblx0XHRcdFx0XHRtYXJnaW5SaWdodDogMCxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRcIi5zdGFyXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0XHRtcjogXCIxcHhcIixcblx0XHRcdH0sXG5cdFx0XHRcIi5zdGFyLW9cIjoge1xuXHRcdFx0XHRjb2xvcjogXCIjZGRkXCIsXG5cdFx0XHRcdG1yOiBcIjFweFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmNhcmQtZm9vdGVyXCI6IHtcblx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsIFwiMzNweFwiXSxcblx0XHRcdFwiLmltYWdlXCI6IHtcblx0XHRcdFx0ZmxleFNocmluazogMCxcblx0XHRcdFx0bXI6IFszLCBudWxsLCBudWxsLCA0XSxcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdGltZzoge1xuXHRcdFx0XHRcdHdpZHRoOiBcIjU1cHhcIixcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNTVweFwiLFxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0dGl0bGU6IHtcblx0XHRmb250U2l6ZTogWzEsIDJdLFxuXHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHRtYjogWzMsIG51bGwsIG51bGwsIFwiMjJweFwiXSxcblx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0bGluZUhlaWdodDogMS42LFxuXHR9LFxuXHRkZXNjcmlwdGlvbjoge1xuXHRcdGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG5cdFx0Zm9udFdlaWdodDogXCJub3JtYWxcIixcblx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0bGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxuXHR9LFxuXHRoZWFkaW5nOiB7XG5cdFx0Zm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcblx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0bWI6IFwiM3B4XCIsXG5cdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdGxpbmVIZWlnaHQ6IDEuMyxcblx0fSxcblx0ZGVzaWduYXRpb246IHtcblx0XHRjb2xvcjogXCJwcmltYXJ5XCIsXG5cdFx0Zm9udFdlaWdodDogXCI1MDBcIixcblx0XHRmb250U2l6ZTogMSxcblx0XHRsaW5lSGVpZ2h0OiAxLjQsXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==