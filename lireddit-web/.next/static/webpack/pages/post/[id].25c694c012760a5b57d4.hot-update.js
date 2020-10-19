webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/pages/post/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].tsx ***!
  \*********************************/
/*! exports provided: Post, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
/* harmony import */ var _utils_useGetPostFromUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/useGetPostFromUrl */ "./src/utils/useGetPostFromUrl.ts");



var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\post\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var Post = function Post(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var _useGetPostFromUrl = Object(_utils_useGetPostFromUrl__WEBPACK_IMPORTED_MODULE_7__["useGetPostFromUrl"])(),
      _useGetPostFromUrl2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGetPostFromUrl, 1),
      _useGetPostFromUrl2$ = _useGetPostFromUrl2[0],
      data = _useGetPostFromUrl2$.data,
      error = _useGetPostFromUrl2$.error,
      fetching = _useGetPostFromUrl2$.fetching;

  if (fetching) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, "Loading..."));
  }

  if (error) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }, error.message);
  }

  if (!(data === null || data === void 0 ? void 0 : data.post)) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "Could not find post"));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mb: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, data.post.title), data.post.text, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, data.post.voteStatus === null ? "" : "".concat(data.post.voteStatus)));
};

_s(Post, "J9Le4os/GLWloNU04wn7HJy1pgY=", false, function () {
  return [_utils_useGetPostFromUrl__WEBPACK_IMPORTED_MODULE_7__["useGetPostFromUrl"]];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_6__["createUrqlClient"], {
  ssr: true
})(Post));

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/useGetPostFromUrl.ts":
/*!****************************************!*\
  !*** ./src/utils/useGetPostFromUrl.ts ***!
  \****************************************/
/*! exports provided: useGetPostFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetPostFromUrl", function() { return useGetPostFromUrl; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
var _s = $RefreshSig$();



var useGetPostFromUrl = function useGetPostFromUrl() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var intId = typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["usePostQuery"])({
    pause: intId === -1,
    variables: {
      id: intId
    }
  });
};

_s(useGetPostFromUrl, "g0RlFs3gUjTH1AjmWa/RFl1XYlw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_1__["usePostQuery"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUdldFBvc3RGcm9tVXJsLnRzIl0sIm5hbWVzIjpbIlBvc3QiLCJ1c2VHZXRQb3N0RnJvbVVybCIsImRhdGEiLCJlcnJvciIsImZldGNoaW5nIiwibWVzc2FnZSIsInBvc3QiLCJ0aXRsZSIsInRleHQiLCJ2b3RlU3RhdHVzIiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaW50SWQiLCJxdWVyeSIsImlkIiwicGFyc2VJbnQiLCJ1c2VQb3N0UXVlcnkiLCJwYXVzZSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsMkJBQ1VDLGtGQUFpQixFQUQzQjtBQUFBO0FBQUE7QUFBQSxNQUNqQkMsSUFEaUIsd0JBQ2pCQSxJQURpQjtBQUFBLE1BQ1hDLEtBRFcsd0JBQ1hBLEtBRFc7QUFBQSxNQUNKQyxRQURJLHdCQUNKQSxRQURJOztBQUcxQixNQUFJQSxRQUFKLEVBQWM7QUFDWixXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERjtBQUtEOztBQUVELE1BQUlELEtBQUosRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNQSxLQUFLLENBQUNFLE9BQVosQ0FBUDtBQUNEOztBQUVELE1BQUksRUFBQ0gsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVJLElBQVAsQ0FBSixFQUFpQjtBQUNmLFdBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREY7QUFLRDs7QUFDRCxTQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCSixJQUFJLENBQUNJLElBQUwsQ0FBVUMsS0FBM0IsQ0FERixFQUVHTCxJQUFJLENBQUNJLElBQUwsQ0FBVUUsSUFGYixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sSUFBSSxDQUFDSSxJQUFMLENBQVVHLFVBQVYsS0FBeUIsSUFBekIsR0FBZ0MsRUFBaEMsYUFBd0NQLElBQUksQ0FBQ0ksSUFBTCxDQUFVRyxVQUFsRCxDQURILENBSEYsQ0FERjtBQVNELENBL0JNOztHQUFNVCxJO1VBQ3lCQywwRTs7O0tBRHpCRCxJO0FBaUNFVSwrSEFBYyxDQUFDQyx3RUFBRCxFQUFtQjtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFuQixDQUFkLENBQWdEWixJQUFoRCxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBRU8sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQ3JDLE1BQU1ZLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQ1QsT0FBT0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQXBCLEtBQTJCLFFBQTNCLEdBQXNDQyxRQUFRLENBQUNMLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUFkLENBQTlDLEdBQWtFLENBQUMsQ0FEckU7QUFFQSxTQUFPRSx1RUFBWSxDQUFDO0FBQ2xCQyxTQUFLLEVBQUVMLEtBQUssS0FBSyxDQUFDLENBREE7QUFFbEJNLGFBQVMsRUFBRTtBQUNUSixRQUFFLEVBQUVGO0FBREs7QUFGTyxHQUFELENBQW5CO0FBTUQsQ0FWTTs7R0FBTWQsaUI7VUFDSWEscUQsRUFHUkssK0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjI1YzY5NGMwMTI3NjBhNWI1N2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlR2V0UG9zdEZyb21VcmwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlR2V0UG9zdEZyb21VcmxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgW3sgZGF0YSwgZXJyb3IsIGZldGNoaW5nIH1dID0gdXNlR2V0UG9zdEZyb21VcmwoKTtcclxuXHJcbiAgaWYgKGZldGNoaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICB9XHJcblxyXG4gIGlmICghZGF0YT8ucG9zdCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8Qm94PkNvdWxkIG5vdCBmaW5kIHBvc3Q8L0JveD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRpbmcgbWI9ezR9PntkYXRhLnBvc3QudGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICB7ZGF0YS5wb3N0LnRleHR9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2RhdGEucG9zdC52b3RlU3RhdHVzID09PSBudWxsID8gXCJcIiA6IGAke2RhdGEucG9zdC52b3RlU3RhdHVzfWB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQsIHsgc3NyOiB0cnVlIH0pKFBvc3QpO1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUG9zdFF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2V0UG9zdEZyb21VcmwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaW50SWQgPVxyXG4gICAgdHlwZW9mIHJvdXRlci5xdWVyeS5pZCA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCkgOiAtMTtcclxuICByZXR1cm4gdXNlUG9zdFF1ZXJ5KHtcclxuICAgIHBhdXNlOiBpbnRJZCA9PT0gLTEsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IGludElkLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==