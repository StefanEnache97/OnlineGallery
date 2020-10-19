webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/isServer */ "./src/utils/isServer.ts");



var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\NavBar.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var NavBar = function NavBar(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useLogoutMutation"])(),
      _useLogoutMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLogoutMutation, 2),
      logoutFetching = _useLogoutMutation2[0].fetching,
      logout = _useLogoutMutation2[1];

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])({
    pause: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_6__["isServer"])()
  }),
      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMeQuery, 1),
      _useMeQuery2$ = _useMeQuery2[0],
      data = _useMeQuery2$.data,
      fetching = _useMeQuery2$.fetching;

  var body = null; //data is loading

  if (fetching) {
    body = null;
  } //user not logged in
  else if (!(data === null || data === void 0 ? void 0 : data.me)) {
      body = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/login",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        color: "white",
        mr: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, "Login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/register",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        color: "white",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, "Register")));
    } //user is logged in
    else {
        body = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/create-post",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          mr: 2,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }
        }, "Create Post")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          mr: 2,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 9
          }
        }, data.me.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: function onClick() {
            logout();
          },
          isLoading: logoutFetching,
          variant: "link",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }
        }, "logout"));
      }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    zIndex: 1,
    position: "sticky",
    top: 0,
    bg: "tan",
    p: 4,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "LiReddit"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    ml: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, body));
};

_s(NavBar, "bu7Mo57UkJD6Z7YYu+ueXRjOJFY=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useLogoutMutation"], _generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"]];
});

_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsImxvZ291dEZldGNoaW5nIiwiZmV0Y2hpbmciLCJsb2dvdXQiLCJ1c2VNZVF1ZXJ5IiwicGF1c2UiLCJpc1NlcnZlciIsImRhdGEiLCJib2R5IiwibWUiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLDJCQUNKQyw0RUFBaUIsRUFEYjtBQUFBO0FBQUEsTUFDaENDLGNBRGdDLDBCQUMxQ0MsUUFEMEM7QUFBQSxNQUNkQyxNQURjOztBQUFBLG9CQUV0QkMscUVBQVUsQ0FBQztBQUN0Q0MsU0FBSyxFQUFFQyxnRUFBUTtBQUR1QixHQUFELENBRlk7QUFBQTtBQUFBO0FBQUEsTUFFMUNDLElBRjBDLGlCQUUxQ0EsSUFGMEM7QUFBQSxNQUVwQ0wsUUFGb0MsaUJBRXBDQSxRQUZvQzs7QUFLbkQsTUFBSU0sSUFBSSxHQUFHLElBQVgsQ0FMbUQsQ0FPbkQ7O0FBQ0EsTUFBSU4sUUFBSixFQUFjO0FBQ1pNLFFBQUksR0FBRyxJQUFQO0FBQ0QsR0FGRCxDQUdBO0FBSEEsT0FJSyxJQUFJLEVBQUNELElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFRSxFQUFQLENBQUosRUFBZTtBQUNsQkQsVUFBSSxHQUNGLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQUssRUFBQyxPQUFaO0FBQW9CLFVBQUUsRUFBRSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsRUFNRSxNQUFDLGdEQUFEO0FBQVUsWUFBSSxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsb0RBQUQ7QUFBTSxhQUFLLEVBQUMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBTkYsQ0FERjtBQVlELEtBYkksQ0FjTDtBQWRLLFNBZUE7QUFDSEEsWUFBSSxHQUNGLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxvREFBRDtBQUFNLFlBQUUsRUFBRSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FERixFQUlFLE1BQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWFELElBQUksQ0FBQ0UsRUFBTCxDQUFRQyxRQUFyQixDQUpGLEVBS0UsTUFBQyxzREFBRDtBQUNFLGlCQUFPLEVBQUUsbUJBQU07QUFDYlAsa0JBQU07QUFDUCxXQUhIO0FBSUUsbUJBQVMsRUFBRUYsY0FKYjtBQUtFLGlCQUFPLEVBQUMsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLENBREY7QUFpQkQ7O0FBQ0QsU0FDRSxNQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFFLENBQWQ7QUFBaUIsWUFBUSxFQUFDLFFBQTFCO0FBQW1DLE9BQUcsRUFBRSxDQUF4QztBQUEyQyxNQUFFLEVBQUMsS0FBOUM7QUFBb0QsS0FBQyxFQUFFLENBQXZEO0FBQTBELFNBQUssRUFBQyxRQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFVLFFBQUksRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixDQURGLEVBTUUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0JPLElBQWxCLENBTkYsQ0FERjtBQVVELENBeERNOztHQUFNVCxNO1VBQ29DQyxvRSxFQUNsQkksNkQ7OztLQUZsQkwsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGUtcG9zdC4wZjEyNTM2MWQzNzlmZDZjY2Y4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIExpbmssIEZsZXgsIEJ1dHRvbiwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlTWVRdWVyeSwgdXNlTG9nb3V0TXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcclxuXHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmc6IGxvZ291dEZldGNoaW5nIH0sIGxvZ291dF0gPSB1c2VMb2dvdXRNdXRhdGlvbigpO1xyXG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlTWVRdWVyeSh7XHJcbiAgICBwYXVzZTogaXNTZXJ2ZXIoKSxcclxuICB9KTtcclxuICBsZXQgYm9keSA9IG51bGw7XHJcblxyXG4gIC8vZGF0YSBpcyBsb2FkaW5nXHJcbiAgaWYgKGZldGNoaW5nKSB7XHJcbiAgICBib2R5ID0gbnVsbDtcclxuICB9XHJcbiAgLy91c2VyIG5vdCBsb2dnZWQgaW5cclxuICBlbHNlIGlmICghZGF0YT8ubWUpIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIiBtcj17Mn0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgPExpbmsgY29sb3I9XCJ3aGl0ZVwiPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgLy91c2VyIGlzIGxvZ2dlZCBpblxyXG4gIGVsc2Uge1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPEZsZXg+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY3JlYXRlLXBvc3RcIj5cclxuICAgICAgICAgIDxMaW5rIG1yPXsyfT5DcmVhdGUgUG9zdDwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgIDxCb3ggbXI9ezJ9PntkYXRhLm1lLnVzZXJuYW1lfTwvQm94PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgbG9nb3V0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2dvdXRGZXRjaGluZ31cclxuICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBsb2dvdXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IHpJbmRleD17MX0gcG9zaXRpb249XCJzdGlja3lcIiB0b3A9ezB9IGJnPVwidGFuXCIgcD17NH0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPExpbms+XHJcbiAgICAgICAgICA8SGVhZGluZz5MaVJlZGRpdDwvSGVhZGluZz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDxCb3ggbWw9e1wiYXV0b1wifT57Ym9keX08L0JveD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9