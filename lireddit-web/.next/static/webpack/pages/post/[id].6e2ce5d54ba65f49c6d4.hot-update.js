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

  var _caches = caches.keys();

  if (fetching) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
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
    }, "Loading..."));
  }

  if (error) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    }, error.message);
  }

  if (!(data === null || data === void 0 ? void 0 : data.post)) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, "Could not find post"));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mb: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, data.post.title), data.post.text, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, data.post.voteStatus === null ? "" : "".concat(data.post.voteStatus), _caches));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvLnRzeCJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW50SWQiLCJxdWVyeSIsImlkIiwicGFyc2VJbnQiLCJ1c2VQb3N0UXVlcnkiLCJwYXVzZSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImZldGNoaW5nIiwiX2NhY2hlcyIsImNhY2hlcyIsImtleXMiLCJtZXNzYWdlIiwicG9zdCIsInRpdGxlIiwidGV4dCIsInZvdGVTdGF0dXMiLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQVE7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FDVCxPQUFPRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsRUFBcEIsS0FBMkIsUUFBM0IsR0FBc0NDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQWQsQ0FBOUMsR0FBa0UsQ0FBQyxDQURyRTs7QUFGMEIsc0JBSVVFLHVFQUFZLENBQUM7QUFDL0NDLFNBQUssRUFBRUwsS0FBSyxLQUFLLENBQUMsQ0FENkI7QUFFL0NNLGFBQVMsRUFBRTtBQUNUSixRQUFFLEVBQUVGO0FBREs7QUFGb0MsR0FBRCxDQUp0QjtBQUFBO0FBQUE7QUFBQSxNQUlqQk8sSUFKaUIsbUJBSWpCQSxJQUppQjtBQUFBLE1BSVhDLEtBSlcsbUJBSVhBLEtBSlc7QUFBQSxNQUlKQyxRQUpJLG1CQUlKQSxRQUpJOztBQVcxQixNQUFJQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxFQUFkOztBQUNBLE1BQUlILFFBQUosRUFBYztBQUNaLFdBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGO0FBS0Q7O0FBRUQsTUFBSUQsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1BLEtBQUssQ0FBQ0ssT0FBWixDQUFQO0FBQ0Q7O0FBRUQsTUFBSSxFQUFDTixJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRU8sSUFBUCxDQUFKLEVBQWlCO0FBQ2YsV0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FERjtBQUtEOztBQUNELFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFTLE1BQUUsRUFBRSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUJQLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxLQUEzQixDQURGLEVBRUdSLElBQUksQ0FBQ08sSUFBTCxDQUFVRSxJQUZiLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxJQUFJLENBQUNPLElBQUwsQ0FBVUcsVUFBVixLQUF5QixJQUF6QixHQUFnQyxFQUFoQyxhQUF3Q1YsSUFBSSxDQUFDTyxJQUFMLENBQVVHLFVBQWxELENBREgsRUFFR1AsT0FGSCxDQUhGLENBREY7QUFVRCxDQXpDTTs7R0FBTWIsSTtVQUNJRSxxRCxFQUdxQkssK0Q7OztLQUp6QlAsSTtBQTJDRXFCLCtIQUFjLENBQUNDLHdFQUFELEVBQW1CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQW5CLENBQWQsQ0FBZ0R2QixJQUFoRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS42ZTJjZTVkNTRiYTY1ZjQ5YzZkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVBvc3RRdWVyeSB9IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0ID0gKHt9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaW50SWQgPVxyXG4gICAgdHlwZW9mIHJvdXRlci5xdWVyeS5pZCA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCkgOiAtMTtcclxuICBjb25zdCBbeyBkYXRhLCBlcnJvciwgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0UXVlcnkoe1xyXG4gICAgcGF1c2U6IGludElkID09PSAtMSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZDogaW50SWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBsZXQgX2NhY2hlcyA9IGNhY2hlcy5rZXlzKCk7XHJcbiAgaWYgKGZldGNoaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICB9XHJcblxyXG4gIGlmICghZGF0YT8ucG9zdCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8Qm94PkNvdWxkIG5vdCBmaW5kIHBvc3Q8L0JveD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRpbmcgbWI9ezR9PntkYXRhLnBvc3QudGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICB7ZGF0YS5wb3N0LnRleHR9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2RhdGEucG9zdC52b3RlU3RhdHVzID09PSBudWxsID8gXCJcIiA6IGAke2RhdGEucG9zdC52b3RlU3RhdHVzfWB9XHJcbiAgICAgICAge19jYWNoZXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQsIHsgc3NyOiB0cnVlIH0pKFBvc3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9