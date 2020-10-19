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
              _context.next = 2;
              return vote({
                postId: post.id,
                value: 1
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
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
              _context2.next = 2;
              return vote({
                postId: post.id,
                value: -1
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
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
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBkb290U2VjdGlvbi50c3giXSwibmFtZXMiOlsiVXBkb290U2VjdGlvbiIsInBvc3QiLCJ1c2VWb3RlTXV0YXRpb24iLCJ2b3RlIiwicG9zdElkIiwiaWQiLCJ2YWx1ZSIsInZvdGVTdGF0dXMiLCJ1bmRlZmluZWQiLCJwb2ludHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTU8sSUFBTUEsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx5QkFDdERDLDBFQUFlLEVBRHVDO0FBQUE7QUFBQSxNQUM5REMsSUFEOEQ7O0FBRXZFLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixrQkFBYyxFQUFDLFFBQXhDO0FBQWlELGNBQVUsRUFBQyxRQUE1RDtBQUFxRSxNQUFFLEVBQUUsQ0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNEQSxJQUFJLENBQUM7QUFDVEMsc0JBQU0sRUFBRUgsSUFBSSxDQUFDSSxFQURKO0FBRVRDLHFCQUFLLEVBQUU7QUFGRSxlQUFELENBREg7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBRFQ7QUFPRSxnQkFBWSxFQUFFTCxJQUFJLENBQUNNLFVBQUwsS0FBb0IsQ0FBcEIsR0FBd0IsT0FBeEIsR0FBa0NDLFNBUGxEO0FBUUUsa0JBQVcsYUFSYjtBQVNFLFFBQUksRUFBQyxZQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWFHUCxJQUFJLENBQUNRLE1BYlIsRUFjRSxNQUFDLDBEQUFEO0FBQ0UsV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRE4sSUFBSSxDQUFDO0FBQ1RDLHNCQUFNLEVBQUVILElBQUksQ0FBQ0ksRUFESjtBQUVUQyxxQkFBSyxFQUFFLENBQUM7QUFGQyxlQUFELENBREg7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBRFQ7QUFPRSxnQkFBWSxFQUFFTCxJQUFJLENBQUNNLFVBQUwsS0FBb0IsQ0FBQyxDQUFyQixHQUF5QixLQUF6QixHQUFpQ0MsU0FQakQ7QUFRRSxrQkFBVyxlQVJiO0FBU0UsUUFBSSxFQUFDLGNBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUE0QkQsQ0E5Qk07O0dBQU1SLGE7VUFDTUUsa0U7OztLQURORixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkMGU2Y2I0MjY1NDJjMzZhNTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBvc3RTbmlwcGV0RnJhZ21lbnQsIHVzZVZvdGVNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5cclxuaW50ZXJmYWNlIFVwZG9vdFNlY3Rpb25Qcm9wcyB7XHJcbiAgcG9zdDogUG9zdFNuaXBwZXRGcmFnbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZG9vdFNlY3Rpb246IFJlYWN0LkZDPFVwZG9vdFNlY3Rpb25Qcm9wcz4gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbLCB2b3RlXSA9IHVzZVZvdGVNdXRhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtcj17NH0+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT5cclxuICAgICAgICAgIGF3YWl0IHZvdGUoe1xyXG4gICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudENvbG9yPXtwb3N0LnZvdGVTdGF0dXMgPT09IDEgPyBcImdyZWVuXCIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cInVwZG9vdCBwb3N0XCJcclxuICAgICAgICBpY29uPVwiY2hldnJvbi11cFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7cG9zdC5wb2ludHN9XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT5cclxuICAgICAgICAgIGF3YWl0IHZvdGUoe1xyXG4gICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRDb2xvcj17cG9zdC52b3RlU3RhdHVzID09PSAtMSA/IFwicmVkXCIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cImRvd25kb290IHBvc3RcIlxyXG4gICAgICAgIGljb249XCJjaGV2cm9uLWRvd25cIlxyXG4gICAgICAvPlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=