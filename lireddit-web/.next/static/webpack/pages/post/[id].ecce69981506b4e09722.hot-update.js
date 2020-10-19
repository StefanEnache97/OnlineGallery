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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");



var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\post\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var Post = function Post(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var intId = typeof router.query.id === "string" ? parseInt(router.query.id) : -1;

  var _usePostQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__["usePostQuery"])({
    pause: intId === -1,
    variables: {
      id: intId
    }
  }),
      _usePostQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePostQuery, 1),
      _usePostQuery2$ = _usePostQuery2[0],
      data = _usePostQuery2$.data,
      error = _usePostQuery2$.error,
      fetching = _usePostQuery2$.fetching;

  if (fetching) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, "Loading..."));
  }

  if (error) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 12
      }
    }, error.message);
  }

  if (!(data === null || data === void 0 ? void 0 : data.post)) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, "Could not find post"));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mb: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, data.post.title), data.post.text, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, data.post.voteStatus === null ? "" : "you voted on this post"));
};

_s(Post, "UkAa9MQJsIOaIVx23Rpsi3Q7Hi8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_7__["usePostQuery"]];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__["createUrqlClient"], {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvLnRzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW50SWQiLCJxdWVyeSIsImlkIiwicGFyc2VJbnQiLCJ1c2VQb3N0UXVlcnkiLCJwYXVzZSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImZldGNoaW5nIiwibWVzc2FnZSIsInBvc3QiLCJ0aXRsZSIsInRleHQiLCJ2b3RlU3RhdHVzIiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFRO0FBQUE7O0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQ1QsT0FBT0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQXBCLEtBQTJCLFFBQTNCLEdBQXNDQyxRQUFRLENBQUNMLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUFkLENBQTlDLEdBQWtFLENBQUMsQ0FEckU7O0FBRjBCLHNCQUlVRSx1RUFBWSxDQUFDO0FBQy9DQyxTQUFLLEVBQUVMLEtBQUssS0FBSyxDQUFDLENBRDZCO0FBRS9DTSxhQUFTLEVBQUU7QUFDVEosUUFBRSxFQUFFRjtBQURLO0FBRm9DLEdBQUQsQ0FKdEI7QUFBQTtBQUFBO0FBQUEsTUFJakJPLElBSmlCLG1CQUlqQkEsSUFKaUI7QUFBQSxNQUlYQyxLQUpXLG1CQUlYQSxLQUpXO0FBQUEsTUFJSkMsUUFKSSxtQkFJSkEsUUFKSTs7QUFVMUIsTUFBSUEsUUFBSixFQUFjO0FBQ1osV0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREY7QUFLRDs7QUFFRCxNQUFJRCxLQUFKLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUEsS0FBSyxDQUFDRSxPQUFaLENBQVA7QUFDRDs7QUFFRCxNQUFJLEVBQUNILElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFSSxJQUFQLENBQUosRUFBaUI7QUFDZixXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQURGO0FBS0Q7O0FBQ0QsU0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkosSUFBSSxDQUFDSSxJQUFMLENBQVVDLEtBQTNCLENBREYsRUFFR0wsSUFBSSxDQUFDSSxJQUFMLENBQVVFLElBRmIsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1OLElBQUksQ0FBQ0ksSUFBTCxDQUFVRyxVQUFWLEtBQXlCLElBQXpCLEdBQWdDLEVBQWhDLEdBQXFDLHdCQUEzQyxDQUhGLENBREY7QUFPRCxDQXBDTTs7R0FBTWpCLEk7VUFDSUUscUQsRUFHcUJLLCtEOzs7S0FKekJQLEk7QUFzQ0VrQiwrSEFBYyxDQUFDQyx3RUFBRCxFQUFtQjtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFuQixDQUFkLENBQWdEcEIsSUFBaEQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZWNjZTY5OTgxNTA2YjRlMDk3MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VQb3N0UXVlcnkgfSBmcm9tIFwiLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdCA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGludElkID1cclxuICAgIHR5cGVvZiByb3V0ZXIucXVlcnkuaWQgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChyb3V0ZXIucXVlcnkuaWQpIDogLTE7XHJcbiAgY29uc3QgW3sgZGF0YSwgZXJyb3IsIGZldGNoaW5nIH1dID0gdXNlUG9zdFF1ZXJ5KHtcclxuICAgIHBhdXNlOiBpbnRJZCA9PT0gLTEsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IGludElkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAoZmV0Y2hpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFkYXRhPy5wb3N0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxCb3g+Q291bGQgbm90IGZpbmQgcG9zdDwvQm94PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGluZyBtYj17NH0+e2RhdGEucG9zdC50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgIHtkYXRhLnBvc3QudGV4dH1cclxuICAgICAgPGRpdj57ZGF0YS5wb3N0LnZvdGVTdGF0dXMgPT09IG51bGwgPyBcIlwiIDogXCJ5b3Ugdm90ZWQgb24gdGhpcyBwb3N0XCJ9PC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoUG9zdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=