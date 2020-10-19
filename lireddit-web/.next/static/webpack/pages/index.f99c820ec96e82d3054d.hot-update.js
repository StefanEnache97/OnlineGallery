webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EditDeletePostButtons.tsx":
/*!**************************************************!*\
  !*** ./src/components/EditDeletePostButtons.tsx ***!
  \**************************************************/
/*! exports provided: EditDeletePostButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeletePostButtons", function() { return EditDeletePostButtons; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\EditDeletePostButtons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var _useDeletePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useDeletePostMutation"])(),
    _useDeletePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDeletePostMutatio, 2),
    deletePost = _useDeletePostMutatio2[1];

var EditDeletePostButtons = function EditDeletePostButtons(_ref) {
  var id = _ref.id;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/post/edit/[id]",
    as: "/post/edit/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"],
    mr: 4,
    icon: "edit",
    "aria-label": "Edit Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    icon: "delete",
    "aria-label": "Delete Post",
    onClick: function onClick() {
      deletePost({
        id: id
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};
_c = EditDeletePostButtons;

var _c;

$RefreshReg$(_c, "EditDeletePostButtons");

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

/***/ }),

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
/* harmony import */ var _components_EditDeletePostButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/EditDeletePostButtons */ "./src/components/EditDeletePostButtons.tsx");


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

  if (!fetching && !data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 12
      }
    }, " query failed for some reason");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, !data && fetching ? __jsx("div", {
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
    var _meData$me;

    return !p ? null : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__["UpdootSection"], {
      post: p,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      flex: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(p.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 23
      }
    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, "posted by ", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      flex: 1,
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, p.textSnippet), (meData === null || meData === void 0 ? void 0 : (_meData$me = meData.me) === null || _meData$me === void 0 ? void 0 : _meData$me.id) !== p.creator.id ? null : __jsx(_components_EditDeletePostButtons__WEBPACK_IMPORTED_MODULE_9__["EditDeletePostButtons"], {
      id: p.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 23
      }
    }))));
  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "dvIQmdwAEe6wlI5sEZpTgPYRm/o=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useMeQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdERlbGV0ZVBvc3RCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VEZWxldGVQb3N0TXV0YXRpb24iLCJkZWxldGVQb3N0IiwiRWRpdERlbGV0ZVBvc3RCdXR0b25zIiwiaWQiLCJMaW5rIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsImxpbWl0IiwiY3Vyc29yIiwidmFyaWFibGVzIiwic2V0VmFyaWFibGVzIiwidXNlTWVRdWVyeSIsIm1lRGF0YSIsImRhdGEiLCJ1c2VQb3N0c1F1ZXJ5IiwiZmV0Y2hpbmciLCJwb3N0cyIsIm1hcCIsInAiLCJ0aXRsZSIsImNyZWF0b3IiLCJ1c2VybmFtZSIsInRleHRTbmlwcGV0IiwibWUiLCJoYXNNb3JlIiwibGVuZ3RoIiwiY3JlYXRlZEF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OzRCQUt1QkEsZ0ZBQXFCLEU7O0lBQW5DQyxVOztBQUVGLElBQU1DLHFCQUEyRCxHQUFHLFNBQTlEQSxxQkFBOEQsT0FFckU7QUFBQSxNQURKQyxFQUNJLFFBREpBLEVBQ0k7QUFDSixTQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBVSxRQUFJLEVBQUMsaUJBQWY7QUFBaUMsTUFBRSx1QkFBZ0JBLEVBQWhCLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsTUFBRSxFQUFFQyxvREFETjtBQUVFLE1BQUUsRUFBRSxDQUZOO0FBR0UsUUFBSSxFQUFDLE1BSFA7QUFJRSxrQkFBVyxXQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RVNzQiwrSEFBYyxDQUFDQyx3RUFBRCxFQUFtQjtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFuQixDQUFkLENBQWdEeEIsS0FBaEQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOTljODIwZWM5NmU4MmQzMDU0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJY29uQnV0dG9uLCBMaW5rIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZURlbGV0ZVBvc3RNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5cclxuaW50ZXJmYWNlIEVkaXREZWxldGVQb3N0QnV0dG9uc1Byb3BzIHtcclxuICBpZDogbnVtYmVyO1xyXG59XHJcbmNvbnN0IFssIGRlbGV0ZVBvc3RdID0gdXNlRGVsZXRlUG9zdE11dGF0aW9uKCk7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdERlbGV0ZVBvc3RCdXR0b25zOiBSZWFjdC5GQzxFZGl0RGVsZXRlUG9zdEJ1dHRvbnNQcm9wcz4gPSAoe1xyXG4gIGlkLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxOZXh0TGluayBocmVmPVwiL3Bvc3QvZWRpdC9baWRdXCIgYXM9e2AvcG9zdC9lZGl0LyR7aWR9YH0+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGFzPXtMaW5rfVxyXG4gICAgICAgICAgbXI9ezR9XHJcbiAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRWRpdCBQb3N0XCJcclxuICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBpY29uPVwiZGVsZXRlXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIFBvc3RcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGRlbGV0ZVBvc3QoeyBpZCB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcbmltcG9ydCB7XG4gIHVzZURlbGV0ZVBvc3RNdXRhdGlvbixcbiAgdXNlTWVRdWVyeSxcbiAgdXNlUG9zdHNRdWVyeSxcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIEljb25CdXR0b24sXG4gIExpbmssXG4gIFN0YWNrLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgVXBkb290U2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VwZG9vdFNlY3Rpb25cIjtcbmltcG9ydCB7IEVkaXREZWxldGVQb3N0QnV0dG9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXREZWxldGVQb3N0QnV0dG9uc1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3ZhcmlhYmxlcywgc2V0VmFyaWFibGVzXSA9IHVzZVN0YXRlKHtcbiAgICBsaW1pdDogMTUsXG4gICAgY3Vyc29yOiBudWxsIGFzIG51bGwgfCBzdHJpbmcsXG4gIH0pO1xuXG4gIGNvbnN0IFt7IGRhdGE6IG1lRGF0YSB9XSA9IHVzZU1lUXVlcnkoKTtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0c1F1ZXJ5KHtcbiAgICB2YXJpYWJsZXMsXG4gIH0pO1xuXG4gIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj4gcXVlcnkgZmFpbGVkIGZvciBzb21lIHJlYXNvbjwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IWRhdGEgJiYgZmV0Y2hpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9PlxuICAgICAgICAgIHtkYXRhIS5wb3N0cy5wb3N0cy5tYXAoKHApID0+XG4gICAgICAgICAgICAhcCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgIDxGbGV4IGtleT17cC5pZH0gcD17NX0gc2hhZG93PVwibWRcIiBib3JkZXJXaWR0aD1cIjFweFwiPlxuICAgICAgICAgICAgICAgIDxVcGRvb3RTZWN0aW9uIHBvc3Q9e3B9IC8+XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+e3AudGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+cG9zdGVkIGJ5IHtwLmNyZWF0b3IudXNlcm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZmxleD17MX0gbXQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtwLnRleHRTbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIHttZURhdGE/Lm1lPy5pZCAhPT0gcC5jcmVhdG9yLmlkID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8RWRpdERlbGV0ZVBvc3RCdXR0b25zIGlkPXtwLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG4gICAgICB7ZGF0YSAmJiBkYXRhLnBvc3RzLmhhc01vcmUgPyAoXG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICBsaW1pdDogdmFyaWFibGVzLmxpbWl0LFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGF0YS5wb3N0cy5wb3N0c1tkYXRhLnBvc3RzLnBvc3RzLmxlbmd0aCAtIDFdLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtmZXRjaGluZ31cbiAgICAgICAgICAgIG09XCJhdXRvXCJcbiAgICAgICAgICAgIG15PXs4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGxvYWQgbW9yZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQsIHsgc3NyOiB0cnVlIH0pKEluZGV4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=