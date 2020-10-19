webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/utils/useGetIntId.ts":
/*!**********************************!*\
  !*** ./src/utils/useGetIntId.ts ***!
  \**********************************/
/*! exports provided: useGetIntId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetIntId", function() { return useGetIntId; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var useGetIntId = function useGetIntId() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var intId = typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return intId;
};

_s(useGetIntId, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]];
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
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _useGetIntId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGetIntId */ "./src/utils/useGetIntId.ts");
var _s = $RefreshSig$();



var useGetPostFromUrl = function useGetPostFromUrl() {
  _s();

  var intId = Object(_useGetIntId__WEBPACK_IMPORTED_MODULE_1__["useGetIntId"])();
  return Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["usePostQuery"])({
    pause: intId === -1,
    variables: {
      id: intId
    }
  });
};

_s(useGetPostFromUrl, "QkUVXXmbyycKVMjuIv7itoCnjzE=", false, function () {
  return [_useGetIntId__WEBPACK_IMPORTED_MODULE_1__["useGetIntId"], _generated_graphql__WEBPACK_IMPORTED_MODULE_0__["usePostQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUdldEludElkLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvdXNlR2V0UG9zdEZyb21VcmwudHMiXSwibmFtZXMiOlsidXNlR2V0SW50SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnRJZCIsInF1ZXJ5IiwiaWQiLCJwYXJzZUludCIsInVzZUdldFBvc3RGcm9tVXJsIiwidXNlUG9zdFF1ZXJ5IiwicGF1c2UiLCJ2YXJpYWJsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FDVCxPQUFPRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsRUFBcEIsS0FBMkIsUUFBM0IsR0FBc0NDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQWQsQ0FBOUMsR0FBa0UsQ0FBQyxDQURyRTtBQUVBLFNBQU9GLEtBQVA7QUFDRCxDQUxNOztHQUFNSCxXO1VBQ0lFLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmpCO0FBQ0E7QUFFTyxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFDckMsTUFBTUosS0FBSyxHQUFHSCxnRUFBVyxFQUF6QjtBQUNBLFNBQU9RLHVFQUFZLENBQUM7QUFDbEJDLFNBQUssRUFBRU4sS0FBSyxLQUFLLENBQUMsQ0FEQTtBQUVsQk8sYUFBUyxFQUFFO0FBQ1RMLFFBQUUsRUFBRUY7QUFESztBQUZPLEdBQUQsQ0FBbkI7QUFNRCxDQVJNOztHQUFNSSxpQjtVQUNHUCx3RCxFQUNQUSwrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZDE4YzMxZmIyMzg1OGI3MzhkOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdldEludElkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGludElkID1cclxuICAgIHR5cGVvZiByb3V0ZXIucXVlcnkuaWQgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChyb3V0ZXIucXVlcnkuaWQpIDogLTE7XHJcbiAgcmV0dXJuIGludElkO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUG9zdFF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVzZUdldEludElkIH0gZnJvbSBcIi4vdXNlR2V0SW50SWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHZXRQb3N0RnJvbVVybCA9ICgpID0+IHtcclxuICBjb25zdCBpbnRJZCA9IHVzZUdldEludElkKCk7XHJcbiAgcmV0dXJuIHVzZVBvc3RRdWVyeSh7XHJcbiAgICBwYXVzZTogaW50SWQgPT09IC0xLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkOiBpbnRJZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=