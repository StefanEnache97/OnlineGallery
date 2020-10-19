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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\UpdootSection.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var UpdootSection = function UpdootSection(_ref) {
  _s();

  var post = _ref.post;

  var _useVoteMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useVoteMutation"])(),
      _useVoteMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useVoteMutation, 2),
      vote = _useVoteMutation2[1];

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
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
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(post.voteStatus === 1)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return vote({
                postId: post.id,
                value: 1
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    variantColor: post.voteStatus === 1 ? "green" : undefined,
    "aria-label": "updoot post",
    icon: "chevron-up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), post.points, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(post.voteStatus === -1)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return vote({
                postId: post.id,
                value: -1
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    variantColor: post.voteStatus === -1 ? "red" : undefined,
    "aria-label": "downdoot post",
    icon: "chevron-down",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
};

_s(UpdootSection, "bt81GFdchg+pqVRVJVIVktbKG8g=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useVoteMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBkb290U2VjdGlvbi50c3giXSwibmFtZXMiOlsiVXBkb290U2VjdGlvbiIsInBvc3QiLCJ1c2VWb3RlTXV0YXRpb24iLCJ2b3RlIiwidm90ZVN0YXR1cyIsInBvc3RJZCIsImlkIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJwb2ludHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTU8sSUFBTUEsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx5QkFDdERDLDBFQUFlLEVBRHVDO0FBQUE7QUFBQSxNQUM5REMsSUFEOEQ7O0FBRXZFLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixrQkFBYyxFQUFDLFFBQXhDO0FBQWlELGNBQVUsRUFBQyxRQUE1RDtBQUFxRSxNQUFFLEVBQUUsQ0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDSEYsSUFBSSxDQUFDRyxVQUFMLEtBQW9CLENBRGpCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFJREQsSUFBSSxDQUFDO0FBQ1RFLHNCQUFNLEVBQUVKLElBQUksQ0FBQ0ssRUFESjtBQUVUQyxxQkFBSyxFQUFFO0FBRkUsZUFBRCxDQUpIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFEVDtBQVVFLGdCQUFZLEVBQUVOLElBQUksQ0FBQ0csVUFBTCxLQUFvQixDQUFwQixHQUF3QixPQUF4QixHQUFrQ0ksU0FWbEQ7QUFXRSxrQkFBVyxhQVhiO0FBWUUsUUFBSSxFQUFDLFlBWlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBZ0JHUCxJQUFJLENBQUNRLE1BaEJSLEVBaUJFLE1BQUMsMERBQUQ7QUFDRSxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDSFIsSUFBSSxDQUFDRyxVQUFMLEtBQW9CLENBQUMsQ0FEbEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQUlERCxJQUFJLENBQUM7QUFDVEUsc0JBQU0sRUFBRUosSUFBSSxDQUFDSyxFQURKO0FBRVRDLHFCQUFLLEVBQUUsQ0FBQztBQUZDLGVBQUQsQ0FKSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBRFQ7QUFVRSxnQkFBWSxFQUFFTixJQUFJLENBQUNHLFVBQUwsS0FBb0IsQ0FBQyxDQUFyQixHQUF5QixLQUF6QixHQUFpQ0ksU0FWakQ7QUFXRSxrQkFBVyxlQVhiO0FBWUUsUUFBSSxFQUFDLGNBWlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGO0FBa0NELENBcENNOztHQUFNUixhO1VBQ01FLGtFOzs7S0FETkYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MWRiMDU0OWJhODk4NDg3NTM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb3N0U25pcHBldEZyYWdtZW50LCB1c2VWb3RlTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcbmludGVyZmFjZSBVcGRvb3RTZWN0aW9uUHJvcHMge1xyXG4gIHBvc3Q6IFBvc3RTbmlwcGV0RnJhZ21lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRvb3RTZWN0aW9uOiBSZWFjdC5GQzxVcGRvb3RTZWN0aW9uUHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgWywgdm90ZV0gPSB1c2VWb3RlTXV0YXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbXI9ezR9PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgIGlmIChwb3N0LnZvdGVTdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXdhaXQgdm90ZSh7XHJcbiAgICAgICAgICAgIHBvc3RJZDogcG9zdC5pZCxcclxuICAgICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhcmlhbnRDb2xvcj17cG9zdC52b3RlU3RhdHVzID09PSAxID8gXCJncmVlblwiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJ1cGRvb3QgcG9zdFwiXHJcbiAgICAgICAgaWNvbj1cImNoZXZyb24tdXBcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge3Bvc3QucG9pbnRzfVxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgIGlmIChwb3N0LnZvdGVTdGF0dXMgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF3YWl0IHZvdGUoe1xyXG4gICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFyaWFudENvbG9yPXtwb3N0LnZvdGVTdGF0dXMgPT09IC0xID8gXCJyZWRcIiA6IHVuZGVmaW5lZH1cclxuICAgICAgICBhcmlhLWxhYmVsPVwiZG93bmRvb3QgcG9zdFwiXHJcbiAgICAgICAgaWNvbj1cImNoZXZyb24tZG93blwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==