webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrqlClient", function() { return createUrqlClient; });
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./betterUpdateQuery */ "./src/utils/betterUpdateQuery.tsx");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







var errorExchange = function errorExchange(_ref) {
  var forward = _ref.forward;
  return function (ops$) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_4__["pipe"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_ref2) {
      var error = _ref2.error;

      if (error === null || error === void 0 ? void 0 : error.message.includes("not authenticated")) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace("/login");
      }
    }));
  };
};

var createUrqlClient = function createUrqlClient(ssrExchange) {
  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include"
    },
    exchanges: [urql__WEBPACK_IMPORTED_MODULE_0__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_1__["cacheExchange"])({
      updates: {
        Mutation: {
          logout: function logout(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
            }, _result, function () {
              return {
                me: null
              };
            });
          },
          login: function login(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
            }, _result, function (result, query) {
              if (result.login.errors) {
                return query;
              } else {
                return {
                  me: result.login.user
                };
              }
            });
          },
          register: function register(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
            }, _result, function (result, query) {
              if (result.register.errors) {
                return query;
              } else {
                return {
                  me: result.register.user
                };
              }
            });
          }
        }
      }
    }), ssrExchange, urql__WEBPACK_IMPORTED_MODULE_0__["fetchExchange"]]
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJsb2dvdXQiLCJfcmVzdWx0IiwiYXJncyIsImNhY2hlIiwiaW5mbyIsImJldHRlclVwZGF0ZVF1ZXJ5IiwicXVlcnkiLCJNZURvY3VtZW50IiwibWUiLCJsb2dpbiIsInJlc3VsdCIsImVycm9ycyIsInVzZXIiLCJyZWdpc3RlciIsImZldGNoRXhjaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekQsV0FBT0Msa0RBQUksQ0FDVEYsT0FBTyxDQUFDQyxJQUFELENBREUsRUFFVEUsaURBQUcsQ0FBQyxpQkFBZTtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakIsVUFBSUEsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSixFQUFrRDtBQUNoREMsMERBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEtBSkUsQ0FGTSxDQUFYO0FBUUQsR0FUK0I7QUFBQSxDQUFoQzs7QUFXTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFdBQUQ7QUFBQSxTQUF1QjtBQUNyREMsT0FBRyxFQUFFLCtCQURnRDtBQUVyREMsZ0JBQVksRUFBRTtBQUNaQyxpQkFBVyxFQUFFO0FBREQsS0FGdUM7QUFLckRDLGFBQVMsRUFBRSxDQUNUQyxrREFEUyxFQUVUQywrRUFBYSxDQUFDO0FBQ1pDLGFBQU8sRUFBRTtBQUNQQyxnQkFBUSxFQUFFO0FBQ1JDLGdCQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3RDQyx3RkFBaUIsQ0FDZkYsS0FEZSxFQUVmO0FBQUVHLG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZOLE9BSGUsRUFJZjtBQUFBLHFCQUFPO0FBQUVPLGtCQUFFLEVBQUU7QUFBTixlQUFQO0FBQUEsYUFKZSxDQUFqQjtBQU1ELFdBUk87QUFTUkMsZUFBSyxFQUFFLGVBQUNSLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3JDQyx3RkFBaUIsQ0FDZkYsS0FEZSxFQUVmO0FBQUVHLG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZOLE9BSGUsRUFJZixVQUFDUyxNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRSxNQUFqQixFQUF5QjtBQUN2Qix1QkFBT0wsS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xFLG9CQUFFLEVBQUVFLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRztBQURaLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0QsV0F4Qk87QUF5QlJDLGtCQUFRLEVBQUUsa0JBQUNaLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3hDQyx3RkFBaUIsQ0FDZkYsS0FEZSxFQUVmO0FBQUVHLG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZOLE9BSGUsRUFJZixVQUFDUyxNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIsdUJBQU9MLEtBQVA7QUFDRCxlQUZELE1BRU87QUFDTCx1QkFBTztBQUNMRSxvQkFBRSxFQUFFRSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JEO0FBRGYsaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRDtBQXhDTztBQURIO0FBREcsS0FBRCxDQUZKLEVBZ0RUckIsV0FoRFMsRUFpRFR1QixrREFqRFM7QUFMMEMsR0FBdkI7QUFBQSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMjdlYThlOTE5MzFiMzI2MDc2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVkdXBFeGNoYW5nZSwgRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2UgfSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlIH0gZnJvbSBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIjtcclxuaW1wb3J0IHtcclxuICBMb2dvdXRNdXRhdGlvbixcclxuICBNZVF1ZXJ5LFxyXG4gIE1lRG9jdW1lbnQsXHJcbiAgTG9naW5NdXRhdGlvbixcclxuICBSZWdpc3Rlck11dGF0aW9uLFxyXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcclxuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICBmZXRjaE9wdGlvbnM6IHtcclxuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcclxuICB9LFxyXG4gIGV4Y2hhbmdlczogW1xyXG4gICAgZGVkdXBFeGNoYW5nZSxcclxuICAgIGNhY2hlRXhjaGFuZ2Uoe1xyXG4gICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgTXV0YXRpb246IHtcclxuICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ291dE11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNzckV4Y2hhbmdlLFxyXG4gICAgZmV0Y2hFeGNoYW5nZSxcclxuICBdLFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==