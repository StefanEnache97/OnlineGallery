webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UpdootSection */ "./src/components/UpdootSection.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    limit: 15,
    cursor: null
  }),
      variables = _useState[0],
      setVariables = _useState[1];

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useMeQuery"])(),
      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMeQuery, 1),
      meData = _useMeQuery2[0].data;

  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"])({
    variables: variables
  }),
      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePostsQuery, 1),
      _usePostsQuery2$ = _usePostsQuery2[0],
      data = _usePostsQuery2$.data,
      fetching = _usePostsQuery2$.fetching;

  var _useDeletePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useDeletePostMutation"])(),
      _useDeletePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDeletePostMutatio, 2),
      deletePost = _useDeletePostMutatio2[1];

  if (!fetching && !data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 12
      }
    }, " query failed for some reason");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, !data && fetching ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Loading...") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, data.posts.posts.map(function (p) {
    var _meData$me;

    return !p ? null : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__["UpdootSection"], {
      post: p,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      flex: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(p.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }
    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, "posted by ", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      flex: 1,
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, p.textSnippet), (meData === null || meData === void 0 ? void 0 : (_meData$me = meData.me) === null || _meData$me === void 0 ? void 0 : _meData$me.id) !== p.creator.id ? null : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      ml: "auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/post/edit/[id]",
      as: "/post/edit/".concat(p.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"],
      mr: 4,
      icon: "edit",
      "aria-label": "Edit Post",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 27
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      icon: "delete",
      "aria-label": "Delete Post",
      onClick: function onClick() {
        deletePost({
          id: p.id
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    })))));
  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: function onClick() {
      setVariables({
        limit: variables.limit,
        cursor: data.posts.posts[data.posts.posts.length - 1].createdAt
      });
    },
    isLoading: fetching,
    m: "auto",
    my: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "frn+4CKg5xjzMEnXInjNV6XQNz8=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useMeQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useDeletePostMutation"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_1__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_2__["createUrqlClient"], {
  ssr: true
})(Index));

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwibGltaXQiLCJjdXJzb3IiLCJ2YXJpYWJsZXMiLCJzZXRWYXJpYWJsZXMiLCJ1c2VNZVF1ZXJ5IiwibWVEYXRhIiwiZGF0YSIsInVzZVBvc3RzUXVlcnkiLCJmZXRjaGluZyIsInVzZURlbGV0ZVBvc3RNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJwb3N0cyIsIm1hcCIsInAiLCJpZCIsInRpdGxlIiwiY3JlYXRvciIsInVzZXJuYW1lIiwidGV4dFNuaXBwZXQiLCJtZSIsIkxpbmsiLCJoYXNNb3JlIiwibGVuZ3RoIiwiY3JlYXRlZEF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQztBQUN6Q0MsU0FBSyxFQUFFLEVBRGtDO0FBRXpDQyxVQUFNLEVBQUU7QUFGaUMsR0FBRCxDQUR4QjtBQUFBLE1BQ1hDLFNBRFc7QUFBQSxNQUNBQyxZQURBOztBQUFBLG9CQU1TQyxxRUFBVSxFQU5uQjtBQUFBO0FBQUEsTUFNSEMsTUFORyxtQkFNVEMsSUFOUzs7QUFBQSx1QkFPV0Msd0VBQWEsQ0FBQztBQUN6Q0wsYUFBUyxFQUFUQTtBQUR5QyxHQUFELENBUHhCO0FBQUE7QUFBQTtBQUFBLE1BT1RJLElBUFMsb0JBT1RBLElBUFM7QUFBQSxNQU9IRSxRQVBHLG9CQU9IQSxRQVBHOztBQUFBLDhCQVdLQyxnRkFBcUIsRUFYMUI7QUFBQTtBQUFBLE1BV1RDLFVBWFM7O0FBYWxCLE1BQUksQ0FBQ0YsUUFBRCxJQUFhLENBQUNGLElBQWxCLEVBQXdCO0FBQ3RC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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYkYsQ0FMSixDQVBGLENBRkYsQ0FGbUI7QUFBQSxHQUF0QixDQURILENBSkosRUFrREdSLElBQUksSUFBSUEsSUFBSSxDQUFDSyxLQUFMLENBQVdVLE9BQW5CLEdBQ0MsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNibEIsa0JBQVksQ0FBQztBQUNYSCxhQUFLLEVBQUVFLFNBQVMsQ0FBQ0YsS0FETjtBQUVYQyxjQUFNLEVBQUVLLElBQUksQ0FBQ0ssS0FBTCxDQUFXQSxLQUFYLENBQWlCTCxJQUFJLENBQUNLLEtBQUwsQ0FBV0EsS0FBWCxDQUFpQlcsTUFBakIsR0FBMEIsQ0FBM0MsRUFBOENDO0FBRjNDLE9BQUQsQ0FBWjtBQUlELEtBTkg7QUFPRSxhQUFTLEVBQUVmLFFBUGI7QUFRRSxLQUFDLEVBQUMsTUFSSjtBQVNFLE1BQUUsRUFBRSxDQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERCxHQWdCRyxJQWxFTixDQURGO0FBc0VELENBdEZEOztHQUFNVixLO1VBTXVCTSw2RCxFQUNFRyxnRSxFQUlORSx3RTs7O0tBWG5CWCxLO0FBd0ZTMEIsK0hBQWMsQ0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRDVCLEtBQWhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDg1M2MzZTJiNTcwNDk1Njg3OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQge1xuICB1c2VEZWxldGVQb3N0TXV0YXRpb24sXG4gIHVzZU1lUXVlcnksXG4gIHVzZVBvc3RzUXVlcnksXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBJY29uQnV0dG9uLFxuICBMaW5rLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFVwZG9vdFNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9VcGRvb3RTZWN0aW9uXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbdmFyaWFibGVzLCBzZXRWYXJpYWJsZXNdID0gdXNlU3RhdGUoe1xuICAgIGxpbWl0OiAxNSxcbiAgICBjdXJzb3I6IG51bGwgYXMgbnVsbCB8IHN0cmluZyxcbiAgfSk7XG5cbiAgY29uc3QgW3sgZGF0YTogbWVEYXRhIH1dID0gdXNlTWVRdWVyeSgpO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlcyxcbiAgfSk7XG5cbiAgY29uc3QgWywgZGVsZXRlUG9zdF0gPSB1c2VEZWxldGVQb3N0TXV0YXRpb24oKTtcblxuICBpZiAoIWZldGNoaW5nICYmICFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+IHF1ZXJ5IGZhaWxlZCBmb3Igc29tZSByZWFzb248L2Rpdj47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFkYXRhICYmIGZldGNoaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs4fT5cbiAgICAgICAgICB7ZGF0YSEucG9zdHMucG9zdHMubWFwKChwKSA9PlxuICAgICAgICAgICAgIXAgPyBudWxsIDogKFxuICAgICAgICAgICAgICA8RmxleCBrZXk9e3AuaWR9IHA9ezV9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIj5cbiAgICAgICAgICAgICAgICA8VXBkb290U2VjdGlvbiBwb3N0PXtwfSAvPlxuICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0+XG4gICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz17YC9wb3N0LyR7cC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntwLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PnBvc3RlZCBieSB7cC5jcmVhdG9yLnVzZXJuYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZsZXg9ezF9IG10PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cC50ZXh0U25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7bWVEYXRhPy5tZT8uaWQgIT09IHAuY3JlYXRvci5pZCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBtbD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvZWRpdC9baWRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcG9zdC9lZGl0LyR7cC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRWRpdCBQb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIFBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUG9zdCh7IGlkOiBwLmlkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuICAgICAge2RhdGEgJiYgZGF0YS5wb3N0cy5oYXNNb3JlID8gKFxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFZhcmlhYmxlcyh7XG4gICAgICAgICAgICAgICAgbGltaXQ6IHZhcmlhYmxlcy5saW1pdCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRhdGEucG9zdHMucG9zdHNbZGF0YS5wb3N0cy5wb3N0cy5sZW5ndGggLSAxXS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17ZmV0Y2hpbmd9XG4gICAgICAgICAgICBtPVwiYXV0b1wiXG4gICAgICAgICAgICBteT17OH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBsb2FkIG1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7IHNzcjogdHJ1ZSB9KShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9