webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrqlClient", function() { return createUrqlClient; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./betterUpdateQuery */ "./src/utils/betterUpdateQuery.tsx");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








var errorExchange = function errorExchange(_ref) {
  var forward = _ref.forward;
  return function (ops$) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_5__["pipe"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_ref2) {
      var error = _ref2.error;

      if (error === null || error === void 0 ? void 0 : error.message.includes("not authenticated")) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/login");
      }
    }));
  };
};

var cursorPagination = function cursorPagination() {
  return function (_parent, fieldArgs, cache, info) {
    var entityKey = info.parentKey,
        fieldName = info.fieldName;
    var allFields = cache.inspectFields(entityKey);
    var fieldInfos = allFields.filter(function (info) {
      return info.fieldName === fieldName;
    });
    var size = fieldInfos.length;

    if (size === 0) {
      return undefined;
    }

    console.log("entity key:", entityKey);
    var fieldKey = "".concat(fieldName, "(").concat(Object(urql__WEBPACK_IMPORTED_MODULE_1__["stringifyVariables"])(fieldArgs), ")");
    console.log("fieldKey:", fieldKey);
    var isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), "posts");
    console.log("resolveFieldByKey:", cache.resolveFieldByKey(entityKey, fieldKey));
    info.partial = !isItInTheCache;
    console.log("info partial:", info.partial);
    var hasMore = true;
    var results = [];
    fieldInfos.forEach(function (fi) {
      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);
      var data = cache.resolve(key, "posts");

      var _hasMore = cache.resolve(key, "hasMore");

      if (!_hasMore) {
        hasMore = _hasMore;
      }

      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data));
    });
    return {
      __typename: "PaginatedPosts",
      hasMore: hasMore,
      posts: results
    }; // const visited = new Set();
    // let result: NullArray<string> = [];
    // let prevOffset: number | null = null;
    // for (let i = 0; i < size; i++) {
    //   const { fieldKey, arguments: args } = fieldInfos[i];
    //   if (args === null || !compareArgs(fieldArgs, args)) {
    //     continue;
    //   }
    //   const links = cache.resolveFieldByKey(entityKey, fieldKey) as string[];
    //   const currentOffset = args[cursorArgument];
    //   if (
    //     links === null ||
    //     links.length === 0 ||
    //     typeof currentOffset !== 'number'
    //   ) {
    //     continue;
    //   }
    //   if (!prevOffset || currentOffset > prevOffset) {
    //     for (let j = 0; j < links.length; j++) {
    //       const link = links[j];
    //       if (visited.has(link)) continue;
    //       result.push(link);
    //       visited.add(link);
    //     }
    //   } else {
    //     const tempResult: NullArray<string> = [];
    //     for (let j = 0; j < links.length; j++) {
    //       const link = links[j];
    //       if (visited.has(link)) continue;
    //       tempResult.push(link);
    //       visited.add(link);
    //     }
    //     result = [...tempResult, ...result];
    //   }
    //   prevOffset = currentOffset;
    // }
    // const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);
    // if (hasCurrentPage) {
    //   return result;
    // } else if (!(info as any).store.schema) {
    //   return undefined;
    // } else {
    //   info.partial = true;
    //   return result;
    // }
  };
};

var createUrqlClient = function createUrqlClient(ssrExchange) {
  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include"
    },
    exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__["cacheExchange"])({
      keys: {
        PaginatedPosts: function PaginatedPosts() {
          return null;
        }
      },
      resolvers: {
        Query: {
          posts: cursorPagination()
        }
      },
      updates: {
        Mutation: {
          logout: function logout(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["MeDocument"]
            }, _result, function () {
              return {
                me: null
              };
            });
          },
          login: function login(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["MeDocument"]
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
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["MeDocument"]
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
    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__["fetchExchange"]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImN1cnNvclBhZ2luYXRpb24iLCJfcGFyZW50IiwiZmllbGRBcmdzIiwiY2FjaGUiLCJpbmZvIiwiZW50aXR5S2V5IiwicGFyZW50S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJzaXplIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImZpZWxkS2V5Iiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJyZXNvbHZlIiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZmkiLCJrZXkiLCJkYXRhIiwiX2hhc01vcmUiLCJwdXNoIiwiX190eXBlbmFtZSIsInBvc3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsImtleXMiLCJQYWdpbmF0ZWRQb3N0cyIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9nb3V0IiwiX3Jlc3VsdCIsImFyZ3MiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFP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d0ZBQWlCLENBQ2YvQyxLQURlLEVBRWY7QUFBRWdELG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZKLE9BSGUsRUFJZixVQUFDTyxNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRSxNQUFqQixFQUF5QjtBQUN2Qix1QkFBT0wsS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xFLG9CQUFFLEVBQUVFLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRztBQURaLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0QsV0F4Qk87QUF5QlJDLGtCQUFRLEVBQUUsa0JBQUNWLE9BQUQsRUFBVUMsSUFBVixFQUFnQjlDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN4QzhDLHdGQUFpQixDQUNmL0MsS0FEZSxFQUVmO0FBQUVnRCxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmSixPQUhlLEVBSWYsVUFBQ08sTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2pCLGtCQUFJSSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0Q7QUF4Q087QUFESDtBQVRHLEtBQUQsQ0FGSixFQXdEVG5FLGFBeERTLEVBeURUNEMsV0F6RFMsRUEwRFR5QixrREExRFM7QUFMMEMsR0FBdkI7QUFBQSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGUtcG9zdC4xNTA2NDE1YWYyOGUyZTdkMDc2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBkZWR1cEV4Y2hhbmdlLFxyXG4gIEV4Y2hhbmdlLFxyXG4gIGZldGNoRXhjaGFuZ2UsXHJcbiAgc3RyaW5naWZ5VmFyaWFibGVzLFxyXG59IGZyb20gXCJ1cnFsXCI7XHJcbmltcG9ydCB7IGNhY2hlRXhjaGFuZ2UsIFJlc29sdmVyIH0gZnJvbSBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIjtcclxuaW1wb3J0IHtcclxuICBMb2dvdXRNdXRhdGlvbixcclxuICBNZVF1ZXJ5LFxyXG4gIE1lRG9jdW1lbnQsXHJcbiAgTG9naW5NdXRhdGlvbixcclxuICBSZWdpc3Rlck11dGF0aW9uLFxyXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcblxyXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImVudGl0eSBrZXk6XCIsIGVudGl0eUtleSk7XHJcblxyXG4gICAgY29uc3QgZmllbGRLZXkgPSBgJHtmaWVsZE5hbWV9KCR7c3RyaW5naWZ5VmFyaWFibGVzKGZpZWxkQXJncyl9KWA7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkS2V5OlwiLCBmaWVsZEtleSk7XHJcbiAgICBjb25zdCBpc0l0SW5UaGVDYWNoZSA9IGNhY2hlLnJlc29sdmUoXHJcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZyxcclxuICAgICAgXCJwb3N0c1wiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwicmVzb2x2ZUZpZWxkQnlLZXk6XCIsXHJcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpXHJcbiAgICApO1xyXG5cclxuICAgIGluZm8ucGFydGlhbCA9ICFpc0l0SW5UaGVDYWNoZTtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5mbyBwYXJ0aWFsOlwiLCBpbmZvLnBhcnRpYWwpO1xyXG4gICAgbGV0IGhhc01vcmUgPSB0cnVlO1xyXG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaS5maWVsZEtleSkgYXMgc3RyaW5nO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVzb2x2ZShrZXksIFwicG9zdHNcIikgYXMgc3RyaW5nW107XHJcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShrZXksIFwiaGFzTW9yZVwiKTtcclxuICAgICAgaWYgKCFfaGFzTW9yZSkge1xyXG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMucHVzaCguLi5kYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9fdHlwZW5hbWU6IFwiUGFnaW5hdGVkUG9zdHNcIixcclxuICAgICAgaGFzTW9yZSxcclxuICAgICAgcG9zdHM6IHJlc3VsdHMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XHJcbiAgICAvLyBsZXQgcmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8gbGV0IHByZXZPZmZzZXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAvLyAgIGNvbnN0IHsgZmllbGRLZXksIGFyZ3VtZW50czogYXJncyB9ID0gZmllbGRJbmZvc1tpXTtcclxuICAgIC8vICAgaWYgKGFyZ3MgPT09IG51bGwgfHwgIWNvbXBhcmVBcmdzKGZpZWxkQXJncywgYXJncykpIHtcclxuICAgIC8vICAgICBjb250aW51ZTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgY29uc3QgbGlua3MgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmdbXTtcclxuICAgIC8vICAgY29uc3QgY3VycmVudE9mZnNldCA9IGFyZ3NbY3Vyc29yQXJndW1lbnRdO1xyXG5cclxuICAgIC8vICAgaWYgKFxyXG4gICAgLy8gICAgIGxpbmtzID09PSBudWxsIHx8XHJcbiAgICAvLyAgICAgbGlua3MubGVuZ3RoID09PSAwIHx8XHJcbiAgICAvLyAgICAgdHlwZW9mIGN1cnJlbnRPZmZzZXQgIT09ICdudW1iZXInXHJcbiAgICAvLyAgICkge1xyXG4gICAgLy8gICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBpZiAoIXByZXZPZmZzZXQgfHwgY3VycmVudE9mZnNldCA+IHByZXZPZmZzZXQpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XHJcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgcmVzdWx0LnB1c2gobGluayk7XHJcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc3QgdGVtcFJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XHJcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgdGVtcFJlc3VsdC5wdXNoKGxpbmspO1xyXG4gICAgLy8gICAgICAgdmlzaXRlZC5hZGQobGluayk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJlc3VsdCA9IFsuLi50ZW1wUmVzdWx0LCAuLi5yZXN1bHRdO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBwcmV2T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBoYXNDdXJyZW50UGFnZSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZE5hbWUsIGZpZWxkQXJncyk7XHJcbiAgICAvLyBpZiAoaGFzQ3VycmVudFBhZ2UpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH0gZWxzZSBpZiAoIShpbmZvIGFzIGFueSkuc3RvcmUuc2NoZW1hKSB7XHJcbiAgICAvLyAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpbmZvLnBhcnRpYWwgPSB0cnVlO1xyXG4gICAgLy8gICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55KSA9PiAoe1xyXG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4gIGZldGNoT3B0aW9uczoge1xyXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gIH0sXHJcbiAgZXhjaGFuZ2VzOiBbXHJcbiAgICBkZWR1cEV4Y2hhbmdlLFxyXG4gICAgY2FjaGVFeGNoYW5nZSh7XHJcbiAgICAgIGtleXM6IHtcclxuICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgcmVzb2x2ZXJzOiB7XHJcbiAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgIHBvc3RzOiBjdXJzb3JQYWdpbmF0aW9uKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlczoge1xyXG4gICAgICAgIE11dGF0aW9uOiB7XHJcbiAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgKCkgPT4gKHsgbWU6IG51bGwgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBlcnJvckV4Y2hhbmdlLFxyXG4gICAgc3NyRXhjaGFuZ2UsXHJcbiAgICBmZXRjaEV4Y2hhbmdlLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9