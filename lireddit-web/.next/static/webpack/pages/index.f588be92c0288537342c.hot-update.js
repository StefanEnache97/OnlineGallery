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

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useMeQuery"])(),
      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMeQuery, 1),
      meData = _useMeQuery2[0].data;

  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["usePostsQuery"])({
    variables: variables
  }),
      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePostsQuery, 1),
      _usePostsQuery2$ = _usePostsQuery2[0],
      data = _usePostsQuery2$.data,
      fetching = _usePostsQuery2$.fetching;

  if (!fetching && !data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }
    }, " query failed for some reason");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, !data && fetching ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Loading...") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, data.posts.posts.map(function (p) {
    var _meData$me;

    return !p ? null : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_7__["UpdootSection"], {
      post: p,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(p.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }
    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, "posted by ", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      flex: 1,
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, p.textSnippet), (meData === null || meData === void 0 ? void 0 : (_meData$me = meData.me) === null || _meData$me === void 0 ? void 0 : _meData$me.id) !== p.creator.id ? null : __jsx(_components_EditDeletePostButtons__WEBPACK_IMPORTED_MODULE_5__["EditDeletePostButtons"], {
      id: p.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 23
      }
    }))));
  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "dvIQmdwAEe6wlI5sEZpTgPYRm/o=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useMeQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_8__["usePostsQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwibGltaXQiLCJjdXJzb3IiLCJ2YXJpYWJsZXMiLCJzZXRWYXJpYWJsZXMiLCJ1c2VNZVF1ZXJ5IiwibWVEYXRhIiwiZGF0YSIsInVzZVBvc3RzUXVlcnkiLCJmZXRjaGluZyIsInBvc3RzIiwibWFwIiwicCIsImlkIiwidGl0bGUiLCJjcmVhdG9yIiwidXNlcm5hbWUiLCJ0ZXh0U25pcHBldCIsIm1lIiwiaGFzTW9yZSIsImxlbmd0aCIsImNyZWF0ZWRBdCIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsVUFBTSxFQUFFO0FBRmlDLEdBQUQsQ0FEeEI7QUFBQSxNQUNYQyxTQURXO0FBQUEsTUFDQUMsWUFEQTs7QUFBQSxvQkFNU0MscUVBQVUsRUFObkI7QUFBQTtBQUFBLE1BTUhDLE1BTkcsbUJBTVRDLElBTlM7O0FBQUEsdUJBT1dDLHdFQUFhLENBQUM7QUFDekNMLGFBQVMsRUFBVEE7QUFEeUMsR0FBRCxDQVB4QjtBQUFBO0FBQUE7QUFBQSxNQU9USSxJQVBTLG9CQU9UQSxJQVBTO0FBQUEsTUFPSEUsUUFQRyxvQkFPSEEsUUFQRzs7QUFXbEIsTUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0YsSUFBbEIsRUFBd0I7QUFDdEIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtB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QkcsSUE5Q04sQ0FERjtBQWtERCxDQWhFRDs7R0FBTVYsSztVQU11Qk0sNkQsRUFDRUcsZ0U7OztLQVB6QlQsSztBQWtFU3VCLCtIQUFjLENBQUNDLHdFQUFELEVBQW1CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQW5CLENBQWQsQ0FBZ0R6QixLQUFoRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1ODhiZTkyYzAyODg1MzczNDJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgSGVhZGluZywgTGluaywgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXREZWxldGVQb3N0QnV0dG9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXREZWxldGVQb3N0QnV0dG9uc1wiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBVcGRvb3RTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXBkb290U2VjdGlvblwiO1xuaW1wb3J0IHsgdXNlTWVRdWVyeSwgdXNlUG9zdHNRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbdmFyaWFibGVzLCBzZXRWYXJpYWJsZXNdID0gdXNlU3RhdGUoe1xuICAgIGxpbWl0OiAxNSxcbiAgICBjdXJzb3I6IG51bGwgYXMgbnVsbCB8IHN0cmluZyxcbiAgfSk7XG5cbiAgY29uc3QgW3sgZGF0YTogbWVEYXRhIH1dID0gdXNlTWVRdWVyeSgpO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlcyxcbiAgfSk7XG5cbiAgaWYgKCFmZXRjaGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PiBxdWVyeSBmYWlsZWQgZm9yIHNvbWUgcmVhc29uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshZGF0YSAmJiBmZXRjaGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0+XG4gICAgICAgICAge2RhdGEhLnBvc3RzLnBvc3RzLm1hcCgocCkgPT5cbiAgICAgICAgICAgICFwID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgPEZsZXgga2V5PXtwLmlkfSBwPXs1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XG4gICAgICAgICAgICAgICAgPFVwZG9vdFNlY3Rpb24gcG9zdD17cH0gLz5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXg9ezF9PlxuICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9e2AvcG9zdC8ke3AuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj57cC50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5wb3N0ZWQgYnkge3AuY3JlYXRvci51c2VybmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmbGV4PXsxfSBtdD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAge3AudGV4dFNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAge21lRGF0YT8ubWU/LmlkICE9PSBwLmNyZWF0b3IuaWQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0RGVsZXRlUG9zdEJ1dHRvbnMgaWQ9e3AuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cbiAgICAgIHtkYXRhICYmIGRhdGEucG9zdHMuaGFzTW9yZSA/IChcbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgIGxpbWl0OiB2YXJpYWJsZXMubGltaXQsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkYXRhLnBvc3RzLnBvc3RzW2RhdGEucG9zdHMucG9zdHMubGVuZ3RoIC0gMV0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2ZldGNoaW5nfVxuICAgICAgICAgICAgbT1cImF1dG9cIlxuICAgICAgICAgICAgbXk9ezh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgbG9hZCBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==