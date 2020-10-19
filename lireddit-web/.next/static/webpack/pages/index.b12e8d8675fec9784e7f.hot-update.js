webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/UpdootSection.tsx":
/*!******************************************!*\
  !*** ./src/components/UpdootSection.tsx ***!
  \******************************************/
/*! exports provided: UpdootSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdootSection", function() { return UpdootSection; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\UpdootSection.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var UpdootSection = function UpdootSection(_ref) {
  _s();

  var post = _ref.post;

  var _useVoteMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useVoteMutation"])(),
      _useVoteMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useVoteMutation, 2),
      vote = _useVoteMutation2[1];

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    mr: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: function onClick() {
      return vote({
        postId: post.id,
        value: 1
      });
    },
    "aria-label": "updoot post",
    icon: "chevron-up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), post.points, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: function onClick() {
      return vote({
        postId: post.id,
        value: -1
      });
    },
    "aria-label": "downdoot post",
    icon: "chevron-down",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

_s(UpdootSection, "bt81GFdchg+pqVRVJVIVktbKG8g=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useVoteMutation"]];
});

_c = UpdootSection;

var _c;

$RefreshReg$(_c, "UpdootSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBkb290U2VjdGlvbi50c3giXSwibmFtZXMiOlsiVXBkb290U2VjdGlvbiIsInBvc3QiLCJ1c2VWb3RlTXV0YXRpb24iLCJ2b3RlIiwicG9zdElkIiwiaWQiLCJ2YWx1ZSIsInBvaW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTU8sSUFBTUEsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx5QkFDdERDLDBFQUFlLEVBRHVDO0FBQUE7QUFBQSxNQUM5REMsSUFEOEQ7O0FBRXZFLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixrQkFBYyxFQUFDLFFBQXhDO0FBQWlELGNBQVUsRUFBQyxRQUE1RDtBQUFxRSxNQUFFLEVBQUUsQ0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUNQQSxJQUFJLENBQUM7QUFDSEMsY0FBTSxFQUFFSCxJQUFJLENBQUNJLEVBRFY7QUFFSEMsYUFBSyxFQUFFO0FBRkosT0FBRCxDQURHO0FBQUEsS0FEWDtBQU9FLGtCQUFXLGFBUGI7QUFRRSxRQUFJLEVBQUMsWUFSUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFZR0wsSUFBSSxDQUFDTSxNQVpSLEVBYUUsTUFBQywwREFBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQ1BKLElBQUksQ0FBQztBQUNIQyxjQUFNLEVBQUVILElBQUksQ0FBQ0ksRUFEVjtBQUVIQyxhQUFLLEVBQUUsQ0FBQztBQUZMLE9BQUQsQ0FERztBQUFBLEtBRFg7QUFPRSxrQkFBVyxlQVBiO0FBUUUsUUFBSSxFQUFDLGNBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBREY7QUEwQkQsQ0E1Qk07O0dBQU1OLGE7VUFDTUUsa0U7OztLQURORixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxMmU4ZDg2NzVmZWM5Nzg0ZTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBvc3RTbmlwcGV0RnJhZ21lbnQsIHVzZVZvdGVNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5cclxuaW50ZXJmYWNlIFVwZG9vdFNlY3Rpb25Qcm9wcyB7XHJcbiAgcG9zdDogUG9zdFNuaXBwZXRGcmFnbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZG9vdFNlY3Rpb246IFJlYWN0LkZDPFVwZG9vdFNlY3Rpb25Qcm9wcz4gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbLCB2b3RlXSA9IHVzZVZvdGVNdXRhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtcj17NH0+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIHZvdGUoe1xyXG4gICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cInVwZG9vdCBwb3N0XCJcclxuICAgICAgICBpY29uPVwiY2hldnJvbi11cFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7cG9zdC5wb2ludHN9XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIHZvdGUoe1xyXG4gICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJkb3duZG9vdCBwb3N0XCJcclxuICAgICAgICBpY29uPVwiY2hldnJvbi1kb3duXCJcclxuICAgICAgLz5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9