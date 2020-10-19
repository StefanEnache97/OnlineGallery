webpackHotUpdate_N_E("pages/index",{

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

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])(),
      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMeQuery, 1),
      _useMeQuery2$ = _useMeQuery2[0],
      data = _useMeQuery2$.data,
      fetching = _useMeQuery2$.fetching; // const intId =
  // const [{ data, error, fetching }] = usePostQuery({
  //   pause: intId === -1,
  //   variables: {
  //     id: intId,
  //   },})


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
          lineNumber: 29,
          columnNumber: 9
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        color: "white",
        mr: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, "Login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/register",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        color: "white",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, "Register")));
    } //user is logged in
    else {
        body = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
          align: "center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/create-post",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"],
          mr: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }
        }, "Create Post")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          mr: 2,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
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
            lineNumber: 50,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flex: 1,
    m: "auto",
    maxW: 800,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "LiReddit"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    ml: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, body)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsImxvZ291dEZldGNoaW5nIiwiZmV0Y2hpbmciLCJsb2dvdXQiLCJ1c2VNZVF1ZXJ5IiwiZGF0YSIsImJvZHkiLCJtZSIsIkxpbmsiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLDJCQUNKQyw0RUFBaUIsRUFEYjtBQUFBO0FBQUEsTUFDaENDLGNBRGdDLDBCQUMxQ0MsUUFEMEM7QUFBQSxNQUNkQyxNQURjOztBQUFBLG9CQUV0QkMscUVBQVUsRUFGWTtBQUFBO0FBQUE7QUFBQSxNQUUxQ0MsSUFGMEMsaUJBRTFDQSxJQUYwQztBQUFBLE1BRXBDSCxRQUZvQyxpQkFFcENBLFFBRm9DLEVBSW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBSUksSUFBSSxHQUFHLElBQVgsQ0FYbUQsQ0FhbkQ7O0FBQ0EsTUFBSUosUUFBSixFQUFjO0FBQ1pJLFFBQUksR0FBRyxJQUFQO0FBQ0QsR0FGRCxDQUdBO0FBSEEsT0FJSyxJQUFJLEVBQUNELElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFRSxFQUFQLENBQUosRUFBZTtBQUNsQkQsVUFBSSxHQUNGLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQUssRUFBQyxPQUFaO0FBQW9CLFVBQUUsRUFBRSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsRUFNRSxNQUFDLGdEQUFEO0FBQVUsWUFBSSxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsb0RBQUQ7QUFBTSxhQUFLLEVBQUMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBTkYsQ0FERjtBQVlELEtBYkksQ0FjTDtBQWRLLFNBZUE7QUFDSEEsWUFBSSxHQUNGLE1BQUMsb0RBQUQ7QUFBTSxlQUFLLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxnREFBRDtBQUFVLGNBQUksRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLHNEQUFEO0FBQVEsWUFBRSxFQUFFRSxvREFBWjtBQUFrQixZQUFFLEVBQUUsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGLEVBTUUsTUFBQyxtREFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYUgsSUFBSSxDQUFDRSxFQUFMLENBQVFFLFFBQXJCLENBTkYsRUFPRSxNQUFDLHNEQUFEO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiTixrQkFBTTtBQUNQLFdBSEg7QUFJRSxtQkFBUyxFQUFFRixjQUpiO0FBS0UsaUJBQU8sRUFBQyxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsQ0FERjtBQW1CRDs7QUFDRCxTQUNFLE1BQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUUsQ0FBZDtBQUFpQixZQUFRLEVBQUMsUUFBMUI7QUFBbUMsT0FBRyxFQUFFLENBQXhDO0FBQTJDLE1BQUUsRUFBQyxLQUE5QztBQUFvRCxLQUFDLEVBQUUsQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxRQUFJLEVBQUUsQ0FBWjtBQUFlLEtBQUMsRUFBQyxNQUFqQjtBQUF3QixRQUFJLEVBQUUsR0FBOUI7QUFBbUMsU0FBSyxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBREYsRUFNRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkssSUFBbEIsQ0FORixDQURGLENBREY7QUFZRCxDQWxFTTs7R0FBTVAsTTtVQUNvQ0Msb0UsRUFDbEJJLDZEOzs7S0FGbEJMLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzU0YTc1YTE4MDNhY2VlMmJkY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBMaW5rLCBGbGV4LCBCdXR0b24sIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZU1lUXVlcnksIHVzZUxvZ291dE11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5pbnRlcmZhY2UgTmF2QmFyUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IFt7IGZldGNoaW5nOiBsb2dvdXRGZXRjaGluZyB9LCBsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcclxuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZU1lUXVlcnkoKTtcclxuXHJcbiAgLy8gY29uc3QgaW50SWQgPVxyXG4gIC8vIGNvbnN0IFt7IGRhdGEsIGVycm9yLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RRdWVyeSh7XHJcbiAgLy8gICBwYXVzZTogaW50SWQgPT09IC0xLFxyXG4gIC8vICAgdmFyaWFibGVzOiB7XHJcbiAgLy8gICAgIGlkOiBpbnRJZCxcclxuICAvLyAgIH0sfSlcclxuXHJcbiAgbGV0IGJvZHkgPSBudWxsO1xyXG5cclxuICAvL2RhdGEgaXMgbG9hZGluZ1xyXG4gIGlmIChmZXRjaGluZykge1xyXG4gICAgYm9keSA9IG51bGw7XHJcbiAgfVxyXG4gIC8vdXNlciBub3QgbG9nZ2VkIGluXHJcbiAgZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XHJcbiAgICBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8TGluayBjb2xvcj1cIndoaXRlXCIgbXI9ezJ9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIC8vdXNlciBpcyBsb2dnZWQgaW5cclxuICBlbHNlIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY3JlYXRlLXBvc3RcIj5cclxuICAgICAgICAgIDxCdXR0b24gYXM9e0xpbmt9IG1yPXs0fT5cclxuICAgICAgICAgICAgQ3JlYXRlIFBvc3RcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPEJveCBtcj17Mn0+e2RhdGEubWUudXNlcm5hbWV9PC9Cb3g+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2xvZ291dEZldGNoaW5nfVxyXG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIGxvZ291dFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggekluZGV4PXsxfSBwb3NpdGlvbj1cInN0aWNreVwiIHRvcD17MH0gYmc9XCJ0YW5cIiBwPXs0fT5cclxuICAgICAgPEZsZXggZmxleD17MX0gbT1cImF1dG9cIiBtYXhXPXs4MDB9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgPEhlYWRpbmc+TGlSZWRkaXQ8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICA8Qm94IG1sPXtcImF1dG9cIn0+e2JvZHl9PC9Cb3g+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9