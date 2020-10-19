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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_EditDeletePostButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EditDeletePostButtons */ "./src/components/EditDeletePostButtons.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_UpdootSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UpdootSection */ "./src/components/UpdootSection.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    limit: 15,
    cursor: null
  }),
      variables = _useState[0],
      setVariables = _useState[1];

  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["usePostsQuery"])({
    variables: variables
  }),
      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePostsQuery, 1),
      _usePostsQuery2$ = _usePostsQuery2[0],
      data = _usePostsQuery2$.data,
      error = _usePostsQuery2$.error,
      fetching = _usePostsQuery2$.fetching;

  if (!fetching && !data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, " query failed for some reason"), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, error === null || error === void 0 ? void 0 : error.message));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, !data && fetching ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Loading...") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, data.posts.posts.map(function (p) {
    return !p ? null : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_7__["UpdootSection"], {
      post: p,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(p.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    }, "posted by ", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      flex: 1,
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, p.textSnippet), __jsx(_components_EditDeletePostButtons__WEBPACK_IMPORTED_MODULE_5__["EditDeletePostButtons"], {
      id: p.id,
      creatorId: p.creator.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }))));
  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
      lineNumber: 60,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "yBIEWDeJPuWMBgyQVLQIn5VliaM=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["usePostsQuery"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_2__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_9__["createUrqlClient"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwibGltaXQiLCJjdXJzb3IiLCJ2YXJpYWJsZXMiLCJzZXRWYXJpYWJsZXMiLCJ1c2VQb3N0c1F1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hpbmciLCJtZXNzYWdlIiwicG9zdHMiLCJtYXAiLCJwIiwiaWQiLCJ0aXRsZSIsImNyZWF0b3IiLCJ1c2VybmFtZSIsInRleHRTbmlwcGV0IiwiaGFzTW9yZSIsImxlbmd0aCIsImNyZWF0ZWRBdCIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsVUFBTSxFQUFFO0FBRmlDLEdBQUQsQ0FEeEI7QUFBQSxNQUNYQyxTQURXO0FBQUEsTUFDQUMsWUFEQTs7QUFBQSx1QkFNa0JDLHdFQUFhLENBQUM7QUFDaERGLGFBQVMsRUFBVEE7QUFEZ0QsR0FBRCxDQU4vQjtBQUFBO0FBQUE7QUFBQSxNQU1URyxJQU5TLG9CQU1UQSxJQU5TO0FBQUEsTUFNSEMsS0FORyxvQkFNSEEsS0FORztBQUFBLE1BTUlDLFFBTkosb0JBTUlBLFFBTko7O0FBVWxCLE1BQUksQ0FBQ0EsUUFBRCxJQUFhLENBQUNGLElBQWxCLEVBQXdCO0FBQ3RCLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUEsaUJBREYsQ0FERCxHQWdCRyxJQTVDTixDQURGO0FBZ0RELENBbEVEOztHQUFNVCxLO1VBTWdDTSxnRTs7O0tBTmhDTixLO0FBb0VTc0IsK0hBQWMsQ0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRHhCLEtBQWhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDhjZWMxMDc1YzA1NmQzYWY4MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdERlbGV0ZVBvc3RCdXR0b25zIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdERlbGV0ZVBvc3RCdXR0b25zXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IFVwZG9vdFNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9VcGRvb3RTZWN0aW9uXCI7XG5pbXBvcnQgeyB1c2VNZVF1ZXJ5LCB1c2VQb3N0c1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFt2YXJpYWJsZXMsIHNldFZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7XG4gICAgbGltaXQ6IDE1LFxuICAgIGN1cnNvcjogbnVsbCBhcyBudWxsIHwgc3RyaW5nLFxuICB9KTtcblxuICBjb25zdCBbeyBkYXRhLCBlcnJvciwgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0c1F1ZXJ5KHtcbiAgICB2YXJpYWJsZXMsXG4gIH0pO1xuXG4gIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj4gcXVlcnkgZmFpbGVkIGZvciBzb21lIHJlYXNvbjwvZGl2PlxuICAgICAgICA8ZGl2PntlcnJvcj8ubWVzc2FnZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFkYXRhICYmIGZldGNoaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs4fT5cbiAgICAgICAgICB7ZGF0YSEucG9zdHMucG9zdHMubWFwKChwKSA9PlxuICAgICAgICAgICAgIXAgPyBudWxsIDogKFxuICAgICAgICAgICAgICA8RmxleCBrZXk9e3AuaWR9IHA9ezV9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIj5cbiAgICAgICAgICAgICAgICA8VXBkb290U2VjdGlvbiBwb3N0PXtwfSAvPlxuICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0+XG4gICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz17YC9wb3N0LyR7cC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntwLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PnBvc3RlZCBieSB7cC5jcmVhdG9yLnVzZXJuYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZsZXg9ezF9IG10PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cC50ZXh0U25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8RWRpdERlbGV0ZVBvc3RCdXR0b25zIGlkPXtwLmlkfSBjcmVhdG9ySWQ9e3AuY3JlYXRvci5pZH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuICAgICAge2RhdGEgJiYgZGF0YS5wb3N0cy5oYXNNb3JlID8gKFxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFZhcmlhYmxlcyh7XG4gICAgICAgICAgICAgICAgbGltaXQ6IHZhcmlhYmxlcy5saW1pdCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRhdGEucG9zdHMucG9zdHNbZGF0YS5wb3N0cy5wb3N0cy5sZW5ndGggLSAxXS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17ZmV0Y2hpbmd9XG4gICAgICAgICAgICBtPVwiYXV0b1wiXG4gICAgICAgICAgICBteT17OH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBsb2FkIG1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7IHNzcjogdHJ1ZSB9KShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9