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

  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"])({
    variables: {
      limit: 10
    }
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
        lineNumber: 17,
        columnNumber: 12
      }
    }, " query failed for some reason");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "LiReddit"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/create-post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    ml: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Create Post"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), !data && fetching ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Loading...") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, data.posts.map(function (p) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, p.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, p.textSnippet));
  })), data ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isLoading: fetching,
    m: "auto",
    my: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "OPKuOwJzmPoQUPvR2HBNxOhgzxc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVBvc3RzUXVlcnkiLCJ2YXJpYWJsZXMiLCJsaW1pdCIsImRhdGEiLCJmZXRjaGluZyIsInBvc3RzIiwibWFwIiwicCIsImlkIiwidGl0bGUiLCJ0ZXh0U25pcHBldCIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSx1QkFDV0Msd0VBQWEsQ0FBQztBQUN6Q0MsYUFBUyxFQUFFO0FBQ1RDLFdBQUssRUFBRTtBQURFO0FBRDhCLEdBQUQsQ0FEeEI7QUFBQTtBQUFBO0FBQUEsTUFDVEMsSUFEUyxvQkFDVEEsSUFEUztBQUFBLE1BQ0hDLFFBREcsb0JBQ0hBLFFBREc7O0FBT2xCLE1BQUksQ0FBQ0EsUUFBRCxJQUFhLENBQUNELElBQWxCLEVBQXdCO0FBQ3RCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBUDtBQUNEOztBQUNELFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxNQUFFLEVBQUMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBRkYsQ0FERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNHLENBQUNBLElBQUQsSUFBU0MsUUFBVCxHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsR0FHQyxNQUFDLHFEQUFEO0FBQU8sV0FBTyxFQUFFLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFBSSxDQUFDRSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxDQUFEO0FBQUEsV0FDZCxNQUFDLG1EQUFEO0FBQUssU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVo7QUFBZ0IsT0FBQyxFQUFFLENBQW5CO0FBQXNCLFlBQU0sRUFBQyxJQUE3QjtBQUFrQyxpQkFBVyxFQUFDLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVMsY0FBUSxFQUFDLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JELENBQUMsQ0FBQ0UsS0FBMUIsQ0FERixFQUVFLE1BQUMsb0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNGLENBQUMsQ0FBQ0csV0FBaEIsQ0FGRixDQURjO0FBQUEsR0FBZixDQURILENBWkosRUFxQkdQLElBQUksR0FDSCxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFFQyxRQUFuQjtBQUE2QixLQUFDLEVBQUMsTUFBL0I7QUFBc0MsTUFBRSxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERyxHQU1ELElBM0JOLENBREY7QUErQkQsQ0F6Q0Q7O0dBQU1MLEs7VUFDeUJDLGdFOzs7S0FEekJELEs7QUEyQ1NZLCtIQUFjLENBQUNDLHdFQUFELEVBQW1CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQW5CLENBQWQsQ0FBZ0RkLEtBQWhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ0NGRiNWUyYmE5NGM2NmE1ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQgeyB1c2VQb3N0c1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbGltaXQ6IDEwLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj4gcXVlcnkgZmFpbGVkIGZvciBzb21lIHJlYXNvbjwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGluZz5MaVJlZGRpdDwvSGVhZGluZz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY3JlYXRlLXBvc3RcIj5cbiAgICAgICAgICA8TGluayBtbD1cImF1dG9cIj5DcmVhdGUgUG9zdDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPGJyIC8+XG4gICAgICB7IWRhdGEgJiYgZmV0Y2hpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9PlxuICAgICAgICAgIHtkYXRhLnBvc3RzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPEJveCBrZXk9e3AuaWR9IHA9ezV9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIj5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntwLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFRleHQgbXQ9ezR9PntwLnRleHRTbmlwcGV0fTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cbiAgICAgIHtkYXRhID8gKFxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8QnV0dG9uIGlzTG9hZGluZz17ZmV0Y2hpbmd9IG09XCJhdXRvXCIgbXk9ezh9PlxuICAgICAgICAgICAgbG9hZCBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==