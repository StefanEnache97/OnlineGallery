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

  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"])({
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
        lineNumber: 28,
        columnNumber: 12
      }
    }, " query failed for some reason");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "LiReddit"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/create-post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    ml: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Create Post"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), !data && fetching ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Loading...") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, data.posts.posts.map(function (p) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      mr: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      name: "chevron-up",
      size: "24px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }), p.points, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      name: "chevron-down",
      size: "24px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, p.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, "posted by ", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, p.textSnippet)));
  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "1o+2xkSqrfLLz+dqDZ/SJC7hxdY=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwibGltaXQiLCJjdXJzb3IiLCJ2YXJpYWJsZXMiLCJzZXRWYXJpYWJsZXMiLCJ1c2VQb3N0c1F1ZXJ5IiwiZGF0YSIsImZldGNoaW5nIiwicG9zdHMiLCJtYXAiLCJwIiwiaWQiLCJwb2ludHMiLCJ0aXRsZSIsImNyZWF0b3IiLCJ1c2VybmFtZSIsInRleHRTbmlwcGV0IiwiaGFzTW9yZSIsImxlbmd0aCIsImNyZWF0ZWRBdCIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsVUFBTSxFQUFFO0FBRmlDLEdBQUQsQ0FEeEI7QUFBQSxNQUNYQyxTQURXO0FBQUEsTUFDQUMsWUFEQTs7QUFBQSx1QkFLV0Msd0VBQWEsQ0FBQztBQUN6Q0YsYUFBUyxFQUFUQTtBQUR5QyxHQUFELENBTHhCO0FBQUE7QUFBQTtBQUFBLE1BS1RHLElBTFMsb0JBS1RBLElBTFM7QUFBQSxNQUtIQyxRQUxHLG9CQUtIQSxRQUxHOztBQVNsQixNQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDRCxJQUFsQixFQUF3QjtBQUN0QixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQVA7QUFDRDs7QUFDRCxTQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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TixDQURGO0FBc0RELENBbEVEOztHQUFNUixLO1VBS3lCTSxnRTs7O0tBTHpCTixLO0FBb0VTcUIsK0hBQWMsQ0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRHZCLEtBQWhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRhMTRiYmU5MjBjNmEwMDNiN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQgeyB1c2VQb3N0c1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIEljb24sXG4gIExpbmssXG4gIFN0YWNrLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3ZhcmlhYmxlcywgc2V0VmFyaWFibGVzXSA9IHVzZVN0YXRlKHtcbiAgICBsaW1pdDogMTUsXG4gICAgY3Vyc29yOiBudWxsIGFzIG51bGwgfCBzdHJpbmcsXG4gIH0pO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlcyxcbiAgfSk7XG5cbiAgaWYgKCFmZXRjaGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PiBxdWVyeSBmYWlsZWQgZm9yIHNvbWUgcmVhc29uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkaW5nPkxpUmVkZGl0PC9IZWFkaW5nPlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9jcmVhdGUtcG9zdFwiPlxuICAgICAgICAgIDxMaW5rIG1sPVwiYXV0b1wiPkNyZWF0ZSBQb3N0PC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8YnIgLz5cbiAgICAgIHshZGF0YSAmJiBmZXRjaGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0+XG4gICAgICAgICAge2RhdGEhLnBvc3RzLnBvc3RzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPEZsZXgga2V5PXtwLmlkfSBwPXs1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgbXI9ezR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hldnJvbi11cFwiIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgICAgICAgICB7cC5wb2ludHN9XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNoZXZyb24tZG93blwiIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj57cC50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRleHQ+cG9zdGVkIGJ5IHtwLmNyZWF0b3IudXNlcm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cC50ZXh0U25pcHBldH08L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cbiAgICAgIHtkYXRhICYmIGRhdGEucG9zdHMuaGFzTW9yZSA/IChcbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgIGxpbWl0OiB2YXJpYWJsZXMubGltaXQsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkYXRhLnBvc3RzLnBvc3RzW2RhdGEucG9zdHMucG9zdHMubGVuZ3RoIC0gMV0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2ZldGNoaW5nfVxuICAgICAgICAgICAgbT1cImF1dG9cIlxuICAgICAgICAgICAgbXk9ezh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgbG9hZCBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==