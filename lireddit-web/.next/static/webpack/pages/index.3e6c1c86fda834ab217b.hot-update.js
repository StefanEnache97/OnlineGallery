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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./betterUpdateQuery */ "./src/utils/betterUpdateQuery.tsx");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isServer */ "./src/utils/isServer.ts");



function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                    fragment __ on Post {\n                      points\n                      voteStatus\n                    }\n                  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                  fragment _ on Post {\n                    id\n                    points\n                    voteStatus\n                  }\n                "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var errorExchange = function errorExchange(_ref) {
  var forward = _ref.forward;
  return function (ops$) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_7__["pipe"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (_ref2) {
      var error = _ref2.error;

      if (error === null || error === void 0 ? void 0 : error.message.includes("not authenticated")) {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.replace("/login");
      }
    }));
  };
}; // const voteStatusPost = (): Resolver => {
//   return (_parent, fieldArgs, cache, info) => {
//     const { parentKey: entityKey, fieldName } = info;
//     const allFields = cache.inspectFields(entityKey);
//     const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
//     const size = fieldInfos.length;
//     if (size === 0) {
//       return undefined;
//     }
//     let vote = undefined;
//     const results: string[] = [];
//     fieldInfos.forEach((fi) => {
//       const key = cache.resolveFieldByKey(entityKey, fi.fieldKey) as string;
//       const data = cache.resolve(key, "post") as string[];
//       console.log(data);
//       const _vote = cache.resolve(key, "voteStatus");
//       if (!_vote) {
//         vote = _vote as boolean;
//       }
//       results.push(...data);
//     });
//     return {
//       __typename: "PaginatedPosts",
//       hasMore,
//       post: results,
//     };
//   }
// }


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
    var fieldKey = "".concat(fieldName, "(").concat(Object(urql__WEBPACK_IMPORTED_MODULE_2__["stringifyVariables"])(fieldArgs), ")");
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
      console.log(data);

      var _hasMore = cache.resolve(key, "hasMore");

      if (!_hasMore) {
        hasMore = _hasMore;
      }

      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data));
    });
    console.log("results:", results);
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

var createUrqlClient = function createUrqlClient(ssrExchange, ctx) {
  var cookie = "";

  if (Object(_isServer__WEBPACK_IMPORTED_MODULE_9__["isServer"])()) {
    console.log("We are server side rendering");
    cookie = ctx.req.headers.cookie;
  }

  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include",
      headers: cookie ? {
        cookie: cookie
      } : undefined
    },
    exchanges: [urql__WEBPACK_IMPORTED_MODULE_2__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__["cacheExchange"])({
      keys: {
        PaginatedPosts: function PaginatedPosts() {
          return null;
        }
      },
      resolvers: {
        Query: {
          posts: cursorPagination() // post:

        }
      },
      updates: {
        Mutation: {
          deletePost: function deletePost(_result, args, cache, info) {
            cache.invalidate({
              __typename: "Post",
              id: args.id
            });
          },
          vote: function vote(_result, args, cache, info) {
            var _ref3 = args,
                postId = _ref3.postId,
                value = _ref3.value;
            var data = cache.readFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()), {
              id: postId
            });
            console.log(data);

            if (data) {
              if (data.voteStatus === value) {
                return;
              }

              var newPoints = data.points + (!data.voteStatus ? 1 : 2) * value;
              cache.writeFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()), {
                id: postId,
                points: newPoints,
                voteStatus: value
              });
            }
          },
          createPost: function createPost(_result, args, cache, info) {
            var allFields = cache.inspectFields("Query");
            var fieldInfos = allFields.filter(function (info) {
              return info.fieldName === "posts";
            });
            fieldInfos.forEach(function (fi) {
              cache.invalidate("Query", "posts", fi.arguments || {});
            });
          },
          logout: function logout(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["MeDocument"]
            }, _result, function () {
              return {
                me: null
              };
            });
          },
          login: function login(_result, args, cache, info) {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["MeDocument"]
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
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__["MeDocument"]
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
    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_2__["fetchExchange"]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImN1cnNvclBhZ2luYXRpb24iLCJfcGFyZW50IiwiZmllbGRBcmdzIiwiY2FjaGUiLCJpbmZvIiwiZW50aXR5S2V5IiwicGFyZW50S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJzaXplIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImZpZWxkS2V5Iiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJyZXNvbHZlIiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZmkiLCJrZXkiLCJkYXRhIiwiX2hhc01vcmUiLCJwdXNoIiwiX190eXBlbmFtZSIsInBvc3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwiY3R4IiwiY29va2llIiwiaXNTZXJ2ZXIiLCJyZXEiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsImtleXMiLCJQYWdpbmF0ZWRQb3N0cyIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwiZGVsZXRlUG9zdCIsIl9yZXN1bHQiLCJhcmdzIiwiaW52YWxpZGF0ZSIsImlkIiwidm90ZSIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwidm90ZVN0YXR1cyIsIm5ld1BvaW50cyIsInBvaW50cyIsIndyaXRlRnJhZ21lbnQiLCJjcmVhdGVQb3N0IiwiYXJndW1lbnRzIiwibG9nb3V0IiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJtZSIsImxvZ2luIiwicmVzdWx0IiwiZXJyb3JzIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELFdBQU9DLGtEQUFJLENBQ1RGLE9BQU8sQ0FBQ0MsSUFBRCxDQURFLEVBRVRFLGlEQUFHLENBQUMsaUJBQWU7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7O0FBQ2pCLFVBQUlBLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFQyxPQUFQLENBQWVDLFFBQWYsQ0FBd0IsbUJBQXhCLENBQUosRUFBa0Q7QUFDaERDLDBEQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBQ0Q7QUFDRixLQUpFLENBRk0sQ0FBWDtBQVFELEdBVCtCO0FBQUEsQ0FBaEMsQyxDQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQWdCO0FBQ3ZDLFNBQU8sVUFBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsRUFBcUM7QUFBQSxRQUN2QkMsU0FEdUIsR0FDRUQsSUFERixDQUNsQ0UsU0FEa0M7QUFBQSxRQUNaQyxT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QjtBQU1ELFdBdERPO0FBdURSQyxlQUFLLEVBQUUsZUFBQ3BCLE9BQUQsRUFBVUMsSUFBVixFQUFnQm5ELEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUNyQ2lFLHdGQUFpQixDQUNmbEUsS0FEZSxFQUVmO0FBQUVtRSxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmbEIsT0FIZSxFQUlmLFVBQUNxQixNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRSxNQUFqQixFQUF5QjtBQUN2Qix1QkFBT0wsS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xFLG9CQUFFLEVBQUVFLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhRztBQURaLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0QsV0F0RU87QUF1RVJDLGtCQUFRLEVBQUUsa0JBQUN4QixPQUFELEVBQVVDLElBQVYsRUFBZ0JuRCxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDeENpRSx3RkFBaUIsQ0FDZmxFLEtBRGUsRUFFZjtBQUFFbUUsbUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLGFBRmUsRUFHZmxCLE9BSGUsRUFJZixVQUFDcUIsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2pCLGtCQUFJSSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0Q7QUF0Rk87QUFESDtBQVZHLEtBQUQsQ0FGSixFQXVHVHRGLGFBdkdTLEVBd0dUNEMsV0F4R1MsRUF5R1Q0QyxrREF6R1M7QUFWTixHQUFQO0FBc0hELENBNUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNmMxYzg2ZmRhODM0YWIyMTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGRlZHVwRXhjaGFuZ2UsXHJcbiAgRXhjaGFuZ2UsXHJcbiAgZmV0Y2hFeGNoYW5nZSxcclxuICBzdHJpbmdpZnlWYXJpYWJsZXMsXHJcbn0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ291dE11dGF0aW9uLFxyXG4gIE1lUXVlcnksXHJcbiAgTWVEb2N1bWVudCxcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxyXG4gIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyxcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuLy8gY29uc3Qgdm90ZVN0YXR1c1Bvc3QgPSAoKTogUmVzb2x2ZXIgPT4ge1xyXG4vLyAgIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4vLyAgICAgY29uc3QgeyBwYXJlbnRLZXk6IGVudGl0eUtleSwgZmllbGROYW1lIH0gPSBpbmZvO1xyXG5cclxuLy8gICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoZW50aXR5S2V5KTtcclxuLy8gICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKTtcclxuLy8gICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcclxuLy8gICAgIGlmIChzaXplID09PSAwKSB7XHJcbi8vICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgbGV0IHZvdGUgPSB1bmRlZmluZWQ7XHJcbi8vICAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xyXG4vLyAgICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XHJcbi8vICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0XCIpIGFzIHN0cmluZ1tdO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgICAgY29uc3QgX3ZvdGUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJ2b3RlU3RhdHVzXCIpO1xyXG4vLyAgICAgICBpZiAoIV92b3RlKSB7XHJcbi8vICAgICAgICAgdm90ZSA9IF92b3RlIGFzIGJvb2xlYW47XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmVzdWx0cy5wdXNoKC4uLmRhdGEpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgX190eXBlbmFtZTogXCJQYWdpbmF0ZWRQb3N0c1wiLFxyXG4vLyAgICAgICBoYXNNb3JlLFxyXG4vLyAgICAgICBwb3N0OiByZXN1bHRzLFxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBjdXJzb3JQYWdpbmF0aW9uID0gKCk6IFJlc29sdmVyID0+IHtcclxuICByZXR1cm4gKF9wYXJlbnQsIGZpZWxkQXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcclxuXHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XHJcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XHJcbiAgICBjb25zdCBzaXplID0gZmllbGRJbmZvcy5sZW5ndGg7XHJcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZW50aXR5IGtleTpcIiwgZW50aXR5S2V5KTtcclxuXHJcbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcclxuICAgIGNvbnNvbGUubG9nKFwiZmllbGRLZXk6XCIsIGZpZWxkS2V5KTtcclxuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nLFxyXG4gICAgICBcInBvc3RzXCJcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJyZXNvbHZlRmllbGRCeUtleTpcIixcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSlcclxuICAgICk7XHJcblxyXG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmZvIHBhcnRpYWw6XCIsIGluZm8ucGFydGlhbCk7XHJcbiAgICBsZXQgaGFzTW9yZSA9IHRydWU7XHJcbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0c1wiKSBhcyBzdHJpbmdbXTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShrZXksIFwiaGFzTW9yZVwiKTtcclxuICAgICAgaWYgKCFfaGFzTW9yZSkge1xyXG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMucHVzaCguLi5kYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0czpcIiwgcmVzdWx0cyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBfX3R5cGVuYW1lOiBcIlBhZ2luYXRlZFBvc3RzXCIsXHJcbiAgICAgIGhhc01vcmUsXHJcbiAgICAgIHBvc3RzOiByZXN1bHRzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpO1xyXG4gICAgLy8gbGV0IHJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIC8vIGxldCBwcmV2T2Zmc2V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgLy8gICBjb25zdCB7IGZpZWxkS2V5LCBhcmd1bWVudHM6IGFyZ3MgfSA9IGZpZWxkSW5mb3NbaV07XHJcbiAgICAvLyAgIGlmIChhcmdzID09PSBudWxsIHx8ICFjb21wYXJlQXJncyhmaWVsZEFyZ3MsIGFyZ3MpKSB7XHJcbiAgICAvLyAgICAgY29udGludWU7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGNvbnN0IGxpbmtzID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nW107XHJcbiAgICAvLyAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBhcmdzW2N1cnNvckFyZ3VtZW50XTtcclxuXHJcbiAgICAvLyAgIGlmIChcclxuICAgIC8vICAgICBsaW5rcyA9PT0gbnVsbCB8fFxyXG4gICAgLy8gICAgIGxpbmtzLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgLy8gICAgIHR5cGVvZiBjdXJyZW50T2Zmc2V0ICE9PSAnbnVtYmVyJ1xyXG4gICAgLy8gICApIHtcclxuICAgIC8vICAgICBjb250aW51ZTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgaWYgKCFwcmV2T2Zmc2V0IHx8IGN1cnJlbnRPZmZzZXQgPiBwcmV2T2Zmc2V0KSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xyXG4gICAgLy8gICAgICAgaWYgKHZpc2l0ZWQuaGFzKGxpbmspKSBjb250aW51ZTtcclxuICAgIC8vICAgICAgIHJlc3VsdC5wdXNoKGxpbmspO1xyXG4gICAgLy8gICAgICAgdmlzaXRlZC5hZGQobGluayk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGNvbnN0IHRlbXBSZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xyXG4gICAgLy8gICAgICAgaWYgKHZpc2l0ZWQuaGFzKGxpbmspKSBjb250aW51ZTtcclxuICAgIC8vICAgICAgIHRlbXBSZXN1bHQucHVzaChsaW5rKTtcclxuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXN1bHQgPSBbLi4udGVtcFJlc3VsdCwgLi4ucmVzdWx0XTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgcHJldk9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgaGFzQ3VycmVudFBhZ2UgPSBjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmllbGROYW1lLCBmaWVsZEFyZ3MpO1xyXG4gICAgLy8gaWYgKGhhc0N1cnJlbnRQYWdlKSB7XHJcbiAgICAvLyAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9IGVsc2UgaWYgKCEoaW5mbyBhcyBhbnkpLnN0b3JlLnNjaGVtYSkge1xyXG4gICAgLy8gICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgaW5mby5wYXJ0aWFsID0gdHJ1ZTtcclxuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSwgY3R4OiBhbnkpID0+IHtcclxuICBsZXQgY29va2llID0gXCJcIjtcclxuICBpZiAoaXNTZXJ2ZXIoKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJXZSBhcmUgc2VydmVyIHNpZGUgcmVuZGVyaW5nXCIpO1xyXG4gICAgY29va2llID0gY3R4LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4gICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcclxuICAgICAgaGVhZGVyczogY29va2llXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNvb2tpZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgIH0sXHJcbiAgICBleGNoYW5nZXM6IFtcclxuICAgICAgZGVkdXBFeGNoYW5nZSxcclxuICAgICAgY2FjaGVFeGNoYW5nZSh7XHJcbiAgICAgICAga2V5czoge1xyXG4gICAgICAgICAgUGFnaW5hdGVkUG9zdHM6ICgpID0+IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvbHZlcnM6IHtcclxuICAgICAgICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHBvc3RzOiBjdXJzb3JQYWdpbmF0aW9uKCksXHJcbiAgICAgICAgICAgIC8vIHBvc3Q6XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlczoge1xyXG4gICAgICAgICAgTXV0YXRpb246IHtcclxuICAgICAgICAgICAgZGVsZXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOiBcIlBvc3RcIixcclxuICAgICAgICAgICAgICAgIGlkOiAoYXJncyBhcyBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXMpLmlkLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2b3RlOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IHBvc3RJZCwgdmFsdWUgfSA9IGFyZ3MgYXMgVm90ZU11dGF0aW9uVmFyaWFibGVzO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICBncWxgXHJcbiAgICAgICAgICAgICAgICAgIGZyYWdtZW50IF8gb24gUG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHNcclxuICAgICAgICAgICAgICAgICAgICB2b3RlU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB7IGlkOiBwb3N0SWQgfSBhcyBhbnlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS52b3RlU3RhdHVzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb2ludHMgPVxyXG4gICAgICAgICAgICAgICAgICAoZGF0YS5wb2ludHMgYXMgbnVtYmVyKSArICghZGF0YS52b3RlU3RhdHVzID8gMSA6IDIpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KFxyXG4gICAgICAgICAgICAgICAgICBncWxgXHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgX18gb24gUG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludHNcclxuICAgICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCwgcG9pbnRzOiBuZXdQb2ludHMsIHZvdGVTdGF0dXM6IHZhbHVlIH0gYXMgYW55XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVBvc3Q6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoXCJRdWVyeVwiKTtcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gXCJwb3N0c1wiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFwiUXVlcnlcIiwgXCJwb3N0c1wiLCBmaS5hcmd1bWVudHMgfHwge30pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ291dE11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIGVycm9yRXhjaGFuZ2UsXHJcbiAgICAgIHNzckV4Y2hhbmdlLFxyXG4gICAgICBmZXRjaEV4Y2hhbmdlLFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9