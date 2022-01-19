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
    }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibXQiLCJweCIsIndpZHRoIiwibWF4V2lkdGgiLCJtciIsIm1sIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwIiwiYmciLCJtIiwibWIiLCJ1bCIsInBsIiwibGlzdFN0eWxlIiwic3ZnIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm1hcmdpblRvcCIsImZsZXhTaHJpbmsiLCJpbWciLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiaGVhZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1o7QUFDQ0MsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLCtCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVDLHFFQUxUO0FBTUNDLE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQURZLEVBV1o7QUFDQ1AsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLDhCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVLLHFFQUxUO0FBTUNILE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQVhZLEVBcUJaO0FBQ0NQLElBQUUsRUFBRSxDQURMO0FBRUNDLE9BQUssRUFBRSw2QkFGUjtBQUdDQyxhQUFXLEVBQ1YseUpBSkY7QUFLQ0MsUUFBTSxFQUFFTSxxRUFMVDtBQU1DSixNQUFJLEVBQUUsaUJBTlA7QUFPQ0MsYUFBVyxFQUFFLFlBUGQ7QUFRQ0MsUUFBTSxFQUFFO0FBUlQsQ0FyQlksRUErQlo7QUFDQ1AsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLCtCQUZSO0FBR0NDLGFBQVcsRUFDVix5SkFKRjtBQUtDQyxRQUFNLEVBQUVPLHNFQUxUO0FBTUNMLE1BQUksRUFBRSxpQkFOUDtBQU9DQyxhQUFXLEVBQUUsWUFQZDtBQVFDQyxRQUFNLEVBQUU7QUFSVCxDQS9CWSxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNs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LElBQVYsRUFBZ0IsQ0FBaEIsQ0FERjtBQUVSQyxjQUFVLEVBQUUsR0FGSjtBQUdSYixNQUFFLEVBQUUsS0FISTtBQUlSTSxTQUFLLEVBQUUsTUFKQztBQUtSUSxjQUFVLEVBQUU7QUFMSixHQTlHSztBQXFIZHpFLGFBQVcsRUFBRTtBQUNaaUUsU0FBSyxFQUFFLFNBREs7QUFFWk8sY0FBVSxFQUFFLEtBRkE7QUFHWkQsWUFBUSxFQUFFLENBSEU7QUFJWkUsY0FBVSxFQUFFO0FBSkE7QUFySEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNWUwMmYzMTJhYWE1OTIzZmUyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCBSYXRpbmcgZnJvbSBcImNvbXBvbmVudHMvcmF0aW5nXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uLWdyb3VwXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5cbmltcG9ydCBBdmF0YXIxIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmdcIjtcbmltcG9ydCBBdmF0YXIyIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmdcIjtcbmltcG9ydCBBdmF0YXIzIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmdcIjtcbmltcG9ydCBBdmF0YXI0IGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmdcIjtcblxuY29uc3QgZGF0YSA9IFtcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHRpdGxlOiBcIk1vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcblx0XHRhdmF0YXI6IEF2YXRhcjEsXG5cdFx0bmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcblx0XHRkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG5cdFx0cmV2aWV3OiA0LFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6IFwiRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZVwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG5cdFx0YXZhdGFyOiBBdmF0YXIyLFxuXHRcdG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG5cdFx0ZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuXHRcdHJldmlldzogNSxcblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdHRpdGxlOiBcIkxheW91dCBhbmQgb3JnYW5pemVkIGxheWVyc1wiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG5cdFx0YXZhdGFyOiBBdmF0YXIzLFxuXHRcdG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG5cdFx0ZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuXHRcdHJldmlldzogNSxcblx0fSxcblx0e1xuXHRcdGlkOiA0LFxuXHRcdHRpdGxlOiBcIk1vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcblx0XHRhdmF0YXI6IEF2YXRhcjQsXG5cdFx0bmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcblx0XHRkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG5cdFx0cmV2aWV3OiA0LFxuXHR9LFxuXTtcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcblx0XHRpdGVtczogNCxcblx0XHRzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuXHR9LFxuXHRsYXB0b3A6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXG5cdFx0aXRlbXM6IDMsXG5cdFx0c2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cblx0fSxcblx0dGFibGV0OiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXG5cdFx0aXRlbXM6IDIsXG5cdFx0c2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cblx0fSxcblx0bW9iaWxlOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG5cdFx0aXRlbXM6IDEsXG5cdFx0c2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cblx0fSxcbn07XG5cbmNvbnN0IGNhcm91c2VsUGFyYW1zID0ge1xuXHRhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxuXHRhcnJvd3M6IGZhbHNlLFxuXHRhdXRvUGxheVNwZWVkOiAzMDAwLFxuXHRjZW50ZXJNb2RlOiBmYWxzZSxcblx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRjb250YWluZXJDbGFzczogXCJjYXJvdXNlbC1jb250YWluZXJcIixcblx0Y3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcblx0ZG90TGlzdENsYXNzOiBcIlwiLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRpbmZpbml0ZTogdHJ1ZSxcblx0aXRlbUNsYXNzOiBcIlwiLFxuXHRrZXlCb2FyZENvbnRyb2w6IHRydWUsXG5cdG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuXHRyZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG5cdHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcblx0cmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcblx0c2hvd0RvdHM6IGZhbHNlLFxuXHRzbGlkZXJDbGFzczogXCJcIixcblx0c2xpZGVzVG9TbGlkZTogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnRlc3RpbW9uaWFsXCIgfX0+XG5cdFx0XHQ8Q29udGFpbmVyIGNzcz17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG5cdFx0XHRcdDxTZWN0aW9uSGVhZGVyIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCIgdGl0bGU9XCJNZWV0IENsaWVudCBTYXRpc2ZhY3Rpb25cIiAvPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cblx0XHRcdFx0PENhcm91c2VsIHsuLi5jYXJvdXNlbFBhcmFtc30+XG5cdFx0XHRcdFx0e2RhdGEubWFwKChpdGVtKSA9PiAoXG5cdFx0XHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMucmV2aWV3Q2FyZH0ga2V5PXtpdGVtLmlkfT5cblx0XHRcdFx0XHRcdFx0PFJhdGluZyByYXRpbmc9e2l0ZW0ucmV2aWV3fSAvPlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGV9XG5cdFx0XHRcdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0XHRcdFx0PFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PVwiQ2xpZW50IEltYWdlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9DYXJvdXNlbD5cblx0XHRcdDwvQm94PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjYXJvdXNlbFdyYXBwZXI6IHtcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0YWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuXHRcdG10OiBcIi0zMHB4XCIsXG5cdFx0cHg6IFwiMTVweFwiLFxuXHRcdFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRtYXhXaWR0aDogW1xuXHRcdFx0XHRcIjEwMCVcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XCI3NTBweFwiLFxuXHRcdFx0XHRcIjEwMDBweFwiLFxuXHRcdFx0XHRcIjExODBweFwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcImNhbGMoNTAlICsgODY1cHgpXCIsXG5cdFx0XHRdLFxuXHRcdFx0bXI6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgXCItMjIwcHhcIl0sXG5cdFx0XHRtbDogXCJhdXRvXCIsXG5cdFx0XHRcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtXCI6IHtcblx0XHRcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcblx0XHRcdH0sXG5cdFx0XHRcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pXCI6IHtcblx0XHRcdFx0b3BhY2l0eTogXCIwLjVcIixcblx0XHRcdFx0XCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpXCI6IHtcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRyZXZpZXdDYXJkOiB7XG5cdFx0Ym94U2hhZG93OiBcIjBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI2cHhcIixcblx0XHRwOiBbXG5cdFx0XHRcIjMwcHggMjBweCAzNXB4XCIsXG5cdFx0XHRcIjMwcHggMjVweCAzNXB4XCIsXG5cdFx0XHRcIjMwcHggMjBweCAzNXB4XCIsXG5cdFx0XHRcIjM1cHggMzBweCA0MHB4IDQwcHhcIixcblx0XHRcdFwiMzBweCAzMHB4IDM1cHhcIixcblx0XHRcdFwiMzVweCAzMHB4IDQwcHggNDBweFwiLFxuXHRcdF0sXG5cdFx0Ymc6IFwid2hpdGVcIixcblx0XHR0ZXh0QWxpZ246IFwibGVmdFwiLFxuXHRcdG06IFtcblx0XHRcdFwiMjhweCA1cHggMzBweCA1cHhcIixcblx0XHRcdFwiMjhweCAyMHB4IDMwcHggMjBweFwiLFxuXHRcdFx0XCIyOHB4IDE1cHggMzBweCAxNXB4XCIsXG5cdFx0XHRcIjI4cHggMTVweCAzMHB4IDE1cHhcIixcblx0XHRcdFwiMzBweCAyMHB4IDQwcHhcIixcblx0XHRdLFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHRib3hTaGFkb3c6IFwiMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHR9LFxuXHRcdFwiLnJhdGluZ1wiOiB7XG5cdFx0XHRtYjogWzEsIG51bGwsIG51bGwsIDJdLFxuXHRcdFx0dWw6IHtcblx0XHRcdFx0cGw6IDAsXG5cdFx0XHRcdGxpc3RTdHlsZTogXCJub25lXCIsXG5cdFx0XHRcdG1iOiAwLFxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdH0sXG5cdFx0XHRzdmc6IHtcblx0XHRcdFx0bWFyZ2luUmlnaHQ6IFwiMnB4XCIsXG5cdFx0XHRcdFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuXHRcdFx0XHRcdG1hcmdpblJpZ2h0OiAwLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdFwiLnN0YXJcIjoge1xuXHRcdFx0XHRjb2xvcjogXCJwcmltYXJ5XCIsXG5cdFx0XHRcdG1yOiBcIjFweFwiLFxuXHRcdFx0fSxcblx0XHRcdFwiLnN0YXItb1wiOiB7XG5cdFx0XHRcdGNvbG9yOiBcIiNkZGRcIixcblx0XHRcdFx0bXI6IFwiMXB4XCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuY2FyZC1mb290ZXJcIjoge1xuXHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0bWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgXCIzM3B4XCJdLFxuXHRcdFx0XCIuaW1hZ2VcIjoge1xuXHRcdFx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdFx0XHRtcjogWzMsIG51bGwsIG51bGwsIDRdLFxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0aW1nOiB7XG5cdFx0XHRcdFx0d2lkdGg6IFwiNTVweFwiLFxuXHRcdFx0XHRcdGhlaWdodDogXCI1NXB4XCIsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuXHRcdFx0XHRcdG9iamVjdEZpdDogXCJjb3ZlclwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHR0aXRsZToge1xuXHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0Zm9udFdlaWdodDogNzAwLFxuXHRcdG1iOiBbMywgbnVsbCwgbnVsbCwgXCIyMnB4XCJdLFxuXHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRsaW5lSGVpZ2h0OiAxLjYsXG5cdH0sXG5cdGRlc2NyaXB0aW9uOiB7XG5cdFx0Zm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcblx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuXHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXG5cdH0sXG5cdGhlYWRpbmc6IHtcblx0XHRmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuXHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHRtYjogXCIzcHhcIixcblx0XHRjb2xvcjogXCJ0ZXh0XCIsXG5cdFx0bGluZUhlaWdodDogMS4zLFxuXHR9LFxuXHRkZXNpZ25hdGlvbjoge1xuXHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRmb250V2VpZ2h0OiBcIjUwMFwiLFxuXHRcdGZvbnRTaXplOiAxLFxuXHRcdGxpbmVIZWlnaHQ6IDEuNCxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9