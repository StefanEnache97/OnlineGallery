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
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\EditDeletePostButtons.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var EditDeletePostButtons = function EditDeletePostButtons(_ref) {
  _s();

  var _meData$me;

  var id = _ref.id;

  var _useDeletePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useDeletePostMutation"])(),
      _useDeletePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDeletePostMutatio, 2),
      deletePost = _useDeletePostMutatio2[1];

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useMeQuery"])(),
      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMeQuery, 1),
      meData = _useMeQuery2[0].data;

  if ((meData === null || meData === void 0 ? void 0 : (_meData$me = meData.me) === null || _meData$me === void 0 ? void 0 : _meData$me.id) !== p.creator.id) {
    return null;
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/post/edit/[id]",
    as: "/post/edit/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
      lineNumber: 24,
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
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

_s(EditDeletePostButtons, "z5f2zd+QGw9yUjzE1BdNENq0zaM=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useDeletePostMutation"], _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useMeQuery"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdERlbGV0ZVBvc3RCdXR0b25zLnRzeCJdLCJuYW1lcyI6WyJFZGl0RGVsZXRlUG9zdEJ1dHRvbnMiLCJpZCIsInVzZURlbGV0ZVBvc3RNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJ1c2VNZVF1ZXJ5IiwibWVEYXRhIiwiZGF0YSIsIm1lIiwicCIsImNyZWF0b3IiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT08sSUFBTUEscUJBQTJELEdBQUcsU0FBOURBLHFCQUE4RCxPQUVyRTtBQUFBOztBQUFBOztBQUFBLE1BREpDLEVBQ0ksUUFESkEsRUFDSTs7QUFBQSw4QkFDbUJDLGdGQUFxQixFQUR4QztBQUFBO0FBQUEsTUFDS0MsVUFETDs7QUFBQSxvQkFFdUJDLHFFQUFVLEVBRmpDO0FBQUE7QUFBQSxNQUVXQyxNQUZYLG1CQUVLQyxJQUZMOztBQUlKLE1BQUksQ0FBQUQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTiwwQkFBQUEsTUFBTSxDQUFFRSxFQUFSLDBEQUFZTixFQUFaLE1BQW1CTyxDQUFDLENBQUNDLE9BQUYsQ0FBVVIsRUFBakMsRUFBcUM7QUFDbkMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFDLGlCQUFmO0FBQWlDLE1BQUUsdUJBQWdCQSxFQUFoQixDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBRVMsb0RBRE47QUFFRSxNQUFFLEVBQUUsQ0FGTjtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsa0JBQVcsV0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFXLGFBRmI7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYlAsZ0JBQVUsQ0FBQztBQUFFRixVQUFFLEVBQUZBO0FBQUYsT0FBRCxDQUFWO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERjtBQW9CRCxDQTlCTTs7R0FBTUQscUI7VUFHWUUsd0UsRUFDSUUsNkQ7OztLQUpoQkoscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzdkMjIzYWVkMTJmN2M3MDY4MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSWNvbkJ1dHRvbiwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEZWxldGVQb3N0TXV0YXRpb24sIHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcbmludGVyZmFjZSBFZGl0RGVsZXRlUG9zdEJ1dHRvbnNQcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBjcmVhdG9ySWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXREZWxldGVQb3N0QnV0dG9uczogUmVhY3QuRkM8RWRpdERlbGV0ZVBvc3RCdXR0b25zUHJvcHM+ID0gKHtcclxuICBpZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFssIGRlbGV0ZVBvc3RdID0gdXNlRGVsZXRlUG9zdE11dGF0aW9uKCk7XHJcbiAgY29uc3QgW3sgZGF0YTogbWVEYXRhIH1dID0gdXNlTWVRdWVyeSgpO1xyXG5cclxuICBpZiAobWVEYXRhPy5tZT8uaWQgIT09IHAuY3JlYXRvci5pZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcG9zdC9lZGl0L1tpZF1cIiBhcz17YC9wb3N0L2VkaXQvJHtpZH1gfT5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgYXM9e0xpbmt9XHJcbiAgICAgICAgICBtcj17NH1cclxuICAgICAgICAgIGljb249XCJlZGl0XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJFZGl0IFBvc3RcIlxyXG4gICAgICAgID48L0ljb25CdXR0b24+XHJcbiAgICAgIDwvTmV4dExpbms+XHJcblxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGljb249XCJkZWxldGVcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgUG9zdFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZGVsZXRlUG9zdCh7IGlkIH0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgID48L0ljb25CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9