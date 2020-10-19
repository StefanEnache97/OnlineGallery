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
          createPost: function createPost(_result, args, cache, info) {
            cache.invalidate("Query", "posts", {
              limit: 15
            });
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImN1cnNvclBhZ2luYXRpb24iLCJfcGFyZW50IiwiZmllbGRBcmdzIiwiY2FjaGUiLCJpbmZvIiwiZW50aXR5S2V5IiwicGFyZW50S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJzaXplIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImZpZWxkS2V5Iiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJyZXNvbHZlIiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZmkiLCJrZXkiLCJkYXRhIiwiX2hhc01vcmUiLCJwdXNoIiwiX190eXBlbmFtZSIsInBvc3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsImtleXMiLCJQYWdpbmF0ZWRQb3N0cyIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwiY3JlYXRlUG9zdCIsIl9yZXN1bHQiLCJhcmdzIiwiaW52YWxpZGF0ZSIsImxpbWl0IiwibG9nb3V0IiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJtZSIsImxvZ2luIiwicmVzdWx0IiwiZXJyb3JzIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7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a0RBL0RTO0FBTDBDLEdBQXZCO0FBQUEsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODYxN2U4ZWNmM2Y1Y2FiMWMzNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcclxufSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcbmltcG9ydCB7XHJcbiAgTG9nb3V0TXV0YXRpb24sXHJcbiAgTWVRdWVyeSxcclxuICBNZURvY3VtZW50LFxyXG4gIExvZ2luTXV0YXRpb24sXHJcbiAgUmVnaXN0ZXJNdXRhdGlvbixcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IGVycm9yRXhjaGFuZ2U6IEV4Y2hhbmdlID0gKHsgZm9yd2FyZCB9KSA9PiAob3BzJCkgPT4ge1xyXG4gIHJldHVybiBwaXBlKFxyXG4gICAgZm9yd2FyZChvcHMkKSxcclxuICAgIHRhcCgoeyBlcnJvciB9KSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcyhcIm5vdCBhdXRoZW50aWNhdGVkXCIpKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnNvclBhZ2luYXRpb24gPSAoKTogUmVzb2x2ZXIgPT4ge1xyXG4gIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgY29uc3QgeyBwYXJlbnRLZXk6IGVudGl0eUtleSwgZmllbGROYW1lIH0gPSBpbmZvO1xyXG5cclxuICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoZW50aXR5S2V5KTtcclxuICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKTtcclxuICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcclxuICAgIGlmIChzaXplID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJlbnRpdHkga2V5OlwiLCBlbnRpdHlLZXkpO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkS2V5ID0gYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgO1xyXG4gICAgY29uc29sZS5sb2coXCJmaWVsZEtleTpcIiwgZmllbGRLZXkpO1xyXG4gICAgY29uc3QgaXNJdEluVGhlQ2FjaGUgPSBjYWNoZS5yZXNvbHZlKFxyXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmcsXHJcbiAgICAgIFwicG9zdHNcIlxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcInJlc29sdmVGaWVsZEJ5S2V5OlwiLFxyXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KVxyXG4gICAgKTtcclxuXHJcbiAgICBpbmZvLnBhcnRpYWwgPSAhaXNJdEluVGhlQ2FjaGU7XHJcbiAgICBjb25zb2xlLmxvZyhcImluZm8gcGFydGlhbDpcIiwgaW5mby5wYXJ0aWFsKTtcclxuICAgIGxldCBoYXNNb3JlID0gdHJ1ZTtcclxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcInBvc3RzXCIpIGFzIHN0cmluZ1tdO1xyXG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcImhhc01vcmVcIik7XHJcbiAgICAgIGlmICghX2hhc01vcmUpIHtcclxuICAgICAgICBoYXNNb3JlID0gX2hhc01vcmUgYXMgYm9vbGVhbjtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBfX3R5cGVuYW1lOiBcIlBhZ2luYXRlZFBvc3RzXCIsXHJcbiAgICAgIGhhc01vcmUsXHJcbiAgICAgIHBvc3RzOiByZXN1bHRzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpO1xyXG4gICAgLy8gbGV0IHJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIC8vIGxldCBwcmV2T2Zmc2V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgLy8gICBjb25zdCB7IGZpZWxkS2V5LCBhcmd1bWVudHM6IGFyZ3MgfSA9IGZpZWxkSW5mb3NbaV07XHJcbiAgICAvLyAgIGlmIChhcmdzID09PSBudWxsIHx8ICFjb21wYXJlQXJncyhmaWVsZEFyZ3MsIGFyZ3MpKSB7XHJcbiAgICAvLyAgICAgY29udGludWU7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGNvbnN0IGxpbmtzID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nW107XHJcbiAgICAvLyAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBhcmdzW2N1cnNvckFyZ3VtZW50XTtcclxuXHJcbiAgICAvLyAgIGlmIChcclxuICAgIC8vICAgICBsaW5rcyA9PT0gbnVsbCB8fFxyXG4gICAgLy8gICAgIGxpbmtzLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgLy8gICAgIHR5cGVvZiBjdXJyZW50T2Zmc2V0ICE9PSAnbnVtYmVyJ1xyXG4gICAgLy8gICApIHtcclxuICAgIC8vICAgICBjb250aW51ZTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgaWYgKCFwcmV2T2Zmc2V0IHx8IGN1cnJlbnRPZmZzZXQgPiBwcmV2T2Zmc2V0KSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xyXG4gICAgLy8gICAgICAgaWYgKHZpc2l0ZWQuaGFzKGxpbmspKSBjb250aW51ZTtcclxuICAgIC8vICAgICAgIHJlc3VsdC5wdXNoKGxpbmspO1xyXG4gICAgLy8gICAgICAgdmlzaXRlZC5hZGQobGluayk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGNvbnN0IHRlbXBSZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xyXG4gICAgLy8gICAgICAgaWYgKHZpc2l0ZWQuaGFzKGxpbmspKSBjb250aW51ZTtcclxuICAgIC8vICAgICAgIHRlbXBSZXN1bHQucHVzaChsaW5rKTtcclxuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXN1bHQgPSBbLi4udGVtcFJlc3VsdCwgLi4ucmVzdWx0XTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgcHJldk9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgaGFzQ3VycmVudFBhZ2UgPSBjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmllbGROYW1lLCBmaWVsZEFyZ3MpO1xyXG4gICAgLy8gaWYgKGhhc0N1cnJlbnRQYWdlKSB7XHJcbiAgICAvLyAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9IGVsc2UgaWYgKCEoaW5mbyBhcyBhbnkpLnN0b3JlLnNjaGVtYSkge1xyXG4gICAgLy8gICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgaW5mby5wYXJ0aWFsID0gdHJ1ZTtcclxuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcclxuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICBmZXRjaE9wdGlvbnM6IHtcclxuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcclxuICB9LFxyXG4gIGV4Y2hhbmdlczogW1xyXG4gICAgZGVkdXBFeGNoYW5nZSxcclxuICAgIGNhY2hlRXhjaGFuZ2Uoe1xyXG4gICAgICBrZXlzOiB7XHJcbiAgICAgICAgUGFnaW5hdGVkUG9zdHM6ICgpID0+IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc29sdmVyczoge1xyXG4gICAgICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXM6IHtcclxuICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoXCJRdWVyeVwiLCBcInBvc3RzXCIsIHtcclxuICAgICAgICAgICAgICBsaW1pdDogMTUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ291dE11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIGVycm9yRXhjaGFuZ2UsXHJcbiAgICBzc3JFeGNoYW5nZSxcclxuICAgIGZldGNoRXhjaGFuZ2UsXHJcbiAgXSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=