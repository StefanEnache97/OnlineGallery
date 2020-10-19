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

  var id = _ref.id,
      creatorId = _ref.creatorId;

  var _useDeletePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useDeletePostMutation"])(),
      _useDeletePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDeletePostMutatio, 2),
      deletePost = _useDeletePostMutatio2[1];

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useMeQuery"])(),
      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMeQuery, 1),
      meData = _useMeQuery2[0].data;

  if ((meData === null || meData === void 0 ? void 0 : (_meData$me = meData.me) === null || _meData$me === void 0 ? void 0 : _meData$me.id) !== creatorId) {
    return null;
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/post/edit/[id]",
    as: "/post/edit/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 25,
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
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdERlbGV0ZVBvc3RCdXR0b25zLnRzeCJdLCJuYW1lcyI6WyJFZGl0RGVsZXRlUG9zdEJ1dHRvbnMiLCJpZCIsImNyZWF0b3JJZCIsInVzZURlbGV0ZVBvc3RNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJ1c2VNZVF1ZXJ5IiwibWVEYXRhIiwiZGF0YSIsIm1lIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLHFCQUEyRCxHQUFHLFNBQTlEQSxxQkFBOEQsT0FHckU7QUFBQTs7QUFBQTs7QUFBQSxNQUZKQyxFQUVJLFFBRkpBLEVBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7O0FBQUEsOEJBQ21CQyxnRkFBcUIsRUFEeEM7QUFBQTtBQUFBLE1BQ0tDLFVBREw7O0FBQUEsb0JBRXVCQyxxRUFBVSxFQUZqQztBQUFBO0FBQUEsTUFFV0MsTUFGWCxtQkFFS0MsSUFGTDs7QUFJSixNQUFJLENBQUFELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sMEJBQUFBLE1BQU0sQ0FBRUUsRUFBUiwwREFBWVAsRUFBWixNQUFtQkMsU0FBdkIsRUFBa0M7QUFDaEMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFDLGlCQUFmO0FBQWlDLE1BQUUsdUJBQWdCRCxFQUFoQixDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBRVEsb0RBRE47QUFFRSxNQUFFLEVBQUUsQ0FGTjtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsa0JBQVcsV0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFXLGFBRmI7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYkwsZ0JBQVUsQ0FBQztBQUFFSCxVQUFFLEVBQUZBO0FBQUYsT0FBRCxDQUFWO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERjtBQW9CRCxDQS9CTTs7R0FBTUQscUI7VUFJWUcsd0UsRUFDSUUsNkQ7OztLQUxoQkwscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmZiNzU4Y2YzNTQ2MTExOTA4MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSWNvbkJ1dHRvbiwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEZWxldGVQb3N0TXV0YXRpb24sIHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcbmludGVyZmFjZSBFZGl0RGVsZXRlUG9zdEJ1dHRvbnNQcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBjcmVhdG9ySWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXREZWxldGVQb3N0QnV0dG9uczogUmVhY3QuRkM8RWRpdERlbGV0ZVBvc3RCdXR0b25zUHJvcHM+ID0gKHtcclxuICBpZCxcclxuICBjcmVhdG9ySWQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbLCBkZWxldGVQb3N0XSA9IHVzZURlbGV0ZVBvc3RNdXRhdGlvbigpO1xyXG4gIGNvbnN0IFt7IGRhdGE6IG1lRGF0YSB9XSA9IHVzZU1lUXVlcnkoKTtcclxuXHJcbiAgaWYgKG1lRGF0YT8ubWU/LmlkICE9PSBjcmVhdG9ySWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxOZXh0TGluayBocmVmPVwiL3Bvc3QvZWRpdC9baWRdXCIgYXM9e2AvcG9zdC9lZGl0LyR7aWR9YH0+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGFzPXtMaW5rfVxyXG4gICAgICAgICAgbXI9ezR9XHJcbiAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRWRpdCBQb3N0XCJcclxuICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBpY29uPVwiZGVsZXRlXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIFBvc3RcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGRlbGV0ZVBvc3QoeyBpZCB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==