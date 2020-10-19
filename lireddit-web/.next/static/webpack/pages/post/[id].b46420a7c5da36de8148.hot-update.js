webpackHotUpdate_N_E("pages/post/[id]",{

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
//     console.log("entity key:", entityKey);
//     console.log("field name:", fieldName);
//     const allFields = cache.inspectFields(entityKey);
//     console.log("all fields:", allFields);
//     const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
//     console.log("field infos", fieldInfos);
//     const size = fieldInfos.length;
//     if (size === 0) {
//       return undefined;
//     }
//     const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
//     let vote = null;
//     let result: string[] = [];
//     fieldInfos.forEach((fi) => {
//       const key = cache.resolveFieldByKey(entityKey, fi.fieldKey) as string;
//       console.log("key:", key);
//       const data = cache.resolve(key, "post") as string[];
//       console.log("data: ", data);
//       const _vote = cache.resolve(key, "voteStatus");
//       console.log("_vote: ", _vote);
//       if (!_vote) {
//         vote = _vote as boolean;
//       }
//       result = data as string[];
//     });
//     //I'm getting null for result?
//     // const _id = result.slice(5);
//     // console.log("_id:", _id);
//     return {
//       __typename: "Post",
//       post: result,
//       voteStatus: vote,
//     };
//   };
// };


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

    var fieldKey = "".concat(fieldName, "(").concat(Object(urql__WEBPACK_IMPORTED_MODULE_2__["stringifyVariables"])(fieldArgs), ")");
    var isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), "posts");
    info.partial = !isItInTheCache;
    var hasMore = true;
    var results = [];
    fieldInfos.forEach(function (fi) {
      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);
      var data = cache.resolve(key, "posts");

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
    var _ctx$req, _ctx$req$headers;

    console.log("We are server side rendering");
    cookie = ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : (_ctx$req$headers = _ctx$req.headers) === null || _ctx$req$headers === void 0 ? void 0 : _ctx$req$headers.cookie;
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
          posts: cursorPagination() // post: voteStatusPost(),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImN1cnNvclBhZ2luYXRpb24iLCJfcGFyZW50IiwiZmllbGRBcmdzIiwiY2FjaGUiLCJpbmZvIiwiZW50aXR5S2V5IiwicGFyZW50S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJzaXplIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmllbGRLZXkiLCJzdHJpbmdpZnlWYXJpYWJsZXMiLCJpc0l0SW5UaGVDYWNoZSIsInJlc29sdmUiLCJyZXNvbHZlRmllbGRCeUtleSIsInBhcnRpYWwiLCJoYXNNb3JlIiwicmVzdWx0cyIsImZvckVhY2giLCJmaSIsImtleSIsImRhdGEiLCJfaGFzTW9yZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiX190eXBlbmFtZSIsInBvc3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwiY3R4IiwiY29va2llIiwiaXNTZXJ2ZXIiLCJyZXEiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsImtleXMiLCJQYWdpbmF0ZWRQb3N0cyIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwiZGVsZXRlUG9zdCIsIl9yZXN1bHQiLCJhcmdzIiwiaW52YWxpZGF0ZSIsImlkIiwidm90ZSIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwidm90ZVN0YXR1cyIsIm5ld1BvaW50cyIsInBvaW50cyIsIndyaXRlRnJhZ21lbnQiLCJjcmVhdGVQb3N0IiwiYXJndW1lbnRzIiwibG9nb3V0IiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJtZSIsImxvZ2luIiwicmVzdWx0IiwiZXJyb3JzIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELFdBQU9DLGtEQUFJLENBQ1RGLE9BQU8sQ0FBQ0MsSUFBRCxDQURFLEVBRVRFLGlEQUFHLENBQUMsaUJBQWU7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7O0FBQ2pCLFVBQUlBLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFQyxPQUFQLENBQWVDLFFBQWYsQ0FBd0IsbUJBQXhCLENBQUosRUFBa0Q7QUFDaERDLDBEQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBQ0Q7QUFDRixLQUpFLENBRk0sQ0FBWDtBQVFELEdBVCtCO0FBQUEsQ0FBaEMsQyxDQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBZ0I7QUFDdkMsU0FBTyxVQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixFQUFxQztBQUFB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U0osS0FBVCxFQUFtQjtBQUNqQixrQkFBSUksTUFBTSxDQUFDRCxLQUFQLENBQWFFLE1BQWpCLEVBQXlCO0FBQ3ZCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRCxLQUFQLENBQWFHO0FBRFosaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRCxXQXRFTztBQXVFUkMsa0JBQVEsRUFBRSxrQkFBQ3hCLE9BQUQsRUFBVUMsSUFBVixFQUFnQm5ELEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN4Q2lFLHdGQUFpQixDQUNmbEUsS0FEZSxFQUVmO0FBQUVtRSxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmbEIsT0FIZSxFQUlmLFVBQUNxQixNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIsdUJBQU9MLEtBQVA7QUFDRCxlQUZELE1BRU87QUFDTCx1QkFBTztBQUNMRSxvQkFBRSxFQUFFRSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JEO0FBRGYsaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRDtBQXRGTztBQURIO0FBVkcsS0FBRCxDQUZKLEVBdUdUdEYsYUF2R1MsRUF3R1Q0QyxXQXhHUyxFQXlHVDRDLGtEQXpHUztBQVZOLEdBQVA7QUFzSEQsQ0E1SE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmI0NjQyMGE3YzVkYTM2ZGU4MTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGRlZHVwRXhjaGFuZ2UsXHJcbiAgRXhjaGFuZ2UsXHJcbiAgZmV0Y2hFeGNoYW5nZSxcclxuICBzdHJpbmdpZnlWYXJpYWJsZXMsXHJcbn0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ291dE11dGF0aW9uLFxyXG4gIE1lUXVlcnksXHJcbiAgTWVEb2N1bWVudCxcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxyXG4gIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyxcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuLy8gY29uc3Qgdm90ZVN0YXR1c1Bvc3QgPSAoKTogUmVzb2x2ZXIgPT4ge1xyXG4vLyAgIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4vLyAgICAgY29uc3QgeyBwYXJlbnRLZXk6IGVudGl0eUtleSwgZmllbGROYW1lIH0gPSBpbmZvO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJlbnRpdHkga2V5OlwiLCBlbnRpdHlLZXkpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJmaWVsZCBuYW1lOlwiLCBmaWVsZE5hbWUpO1xyXG4vLyAgICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJhbGwgZmllbGRzOlwiLCBhbGxGaWVsZHMpO1xyXG4vLyAgICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJmaWVsZCBpbmZvc1wiLCBmaWVsZEluZm9zKTtcclxuLy8gICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcclxuLy8gICAgIGlmIChzaXplID09PSAwKSB7XHJcbi8vICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbi8vICAgICB9XHJcbi8vICAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcclxuLy8gICAgIGxldCB2b3RlID0gbnVsbDtcclxuLy8gICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbi8vICAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJrZXk6XCIsIGtleSk7XHJcbi8vICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0XCIpIGFzIHN0cmluZ1tdO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhKTtcclxuLy8gICAgICAgY29uc3QgX3ZvdGUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJ2b3RlU3RhdHVzXCIpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcIl92b3RlOiBcIiwgX3ZvdGUpO1xyXG4vLyAgICAgICBpZiAoIV92b3RlKSB7XHJcbi8vICAgICAgICAgdm90ZSA9IF92b3RlIGFzIGJvb2xlYW47XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmVzdWx0ID0gZGF0YSBhcyBzdHJpbmdbXTtcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgLy9JJ20gZ2V0dGluZyBudWxsIGZvciByZXN1bHQ/XHJcbi8vICAgICAvLyBjb25zdCBfaWQgPSByZXN1bHQuc2xpY2UoNSk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcIl9pZDpcIiwgX2lkKTtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIF9fdHlwZW5hbWU6IFwiUG9zdFwiLFxyXG4vLyAgICAgICBwb3N0OiByZXN1bHQsXHJcbi8vICAgICAgIHZvdGVTdGF0dXM6IHZvdGUsXHJcbi8vICAgICB9O1xyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5jb25zdCBjdXJzb3JQYWdpbmF0aW9uID0gKCk6IFJlc29sdmVyID0+IHtcclxuICByZXR1cm4gKF9wYXJlbnQsIGZpZWxkQXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcclxuXHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XHJcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XHJcbiAgICBjb25zdCBzaXplID0gZmllbGRJbmZvcy5sZW5ndGg7XHJcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpZWxkS2V5ID0gYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgO1xyXG4gICAgY29uc3QgaXNJdEluVGhlQ2FjaGUgPSBjYWNoZS5yZXNvbHZlKFxyXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmcsXHJcbiAgICAgIFwicG9zdHNcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpbmZvLnBhcnRpYWwgPSAhaXNJdEluVGhlQ2FjaGU7XHJcblxyXG4gICAgbGV0IGhhc01vcmUgPSB0cnVlO1xyXG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaS5maWVsZEtleSkgYXMgc3RyaW5nO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVzb2x2ZShrZXksIFwicG9zdHNcIikgYXMgc3RyaW5nW107XHJcblxyXG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcImhhc01vcmVcIik7XHJcbiAgICAgIGlmICghX2hhc01vcmUpIHtcclxuICAgICAgICBoYXNNb3JlID0gX2hhc01vcmUgYXMgYm9vbGVhbjtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdHM6XCIsIHJlc3VsdHMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX190eXBlbmFtZTogXCJQYWdpbmF0ZWRQb3N0c1wiLFxyXG4gICAgICBoYXNNb3JlLFxyXG4gICAgICBwb3N0czogcmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcclxuICAgIC8vIGxldCByZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAvLyBsZXQgcHJldk9mZnNldDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgIC8vICAgY29uc3QgeyBmaWVsZEtleSwgYXJndW1lbnRzOiBhcmdzIH0gPSBmaWVsZEluZm9zW2ldO1xyXG4gICAgLy8gICBpZiAoYXJncyA9PT0gbnVsbCB8fCAhY29tcGFyZUFyZ3MoZmllbGRBcmdzLCBhcmdzKSkge1xyXG4gICAgLy8gICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBjb25zdCBsaW5rcyA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZ1tdO1xyXG4gICAgLy8gICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gYXJnc1tjdXJzb3JBcmd1bWVudF07XHJcblxyXG4gICAgLy8gICBpZiAoXHJcbiAgICAvLyAgICAgbGlua3MgPT09IG51bGwgfHxcclxuICAgIC8vICAgICBsaW5rcy5sZW5ndGggPT09IDAgfHxcclxuICAgIC8vICAgICB0eXBlb2YgY3VycmVudE9mZnNldCAhPT0gJ251bWJlcidcclxuICAgIC8vICAgKSB7XHJcbiAgICAvLyAgICAgY29udGludWU7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmICghcHJldk9mZnNldCB8fCBjdXJyZW50T2Zmc2V0ID4gcHJldk9mZnNldCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlua3MubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcclxuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XHJcbiAgICAvLyAgICAgICByZXN1bHQucHVzaChsaW5rKTtcclxuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBjb25zdCB0ZW1wUmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlua3MubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcclxuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XHJcbiAgICAvLyAgICAgICB0ZW1wUmVzdWx0LnB1c2gobGluayk7XHJcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmVzdWx0ID0gWy4uLnRlbXBSZXN1bHQsIC4uLnJlc3VsdF07XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHByZXZPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IGhhc0N1cnJlbnRQYWdlID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIGZpZWxkTmFtZSwgZmllbGRBcmdzKTtcclxuICAgIC8vIGlmIChoYXNDdXJyZW50UGFnZSkge1xyXG4gICAgLy8gICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfSBlbHNlIGlmICghKGluZm8gYXMgYW55KS5zdG9yZS5zY2hlbWEpIHtcclxuICAgIC8vICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGluZm8ucGFydGlhbCA9IHRydWU7XHJcbiAgICAvLyAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnksIGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IGNvb2tpZSA9IFwiXCI7XHJcbiAgaWYgKGlzU2VydmVyKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHNlcnZlciBzaWRlIHJlbmRlcmluZ1wiKTtcclxuICAgIGNvb2tpZSA9IGN0eD8ucmVxPy5oZWFkZXJzPy5jb29raWU7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICAgIGZldGNoT3B0aW9uczoge1xyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXHJcbiAgICAgIGhlYWRlcnM6IGNvb2tpZVxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2VzOiBbXHJcbiAgICAgIGRlZHVwRXhjaGFuZ2UsXHJcbiAgICAgIGNhY2hlRXhjaGFuZ2Uoe1xyXG4gICAgICAgIGtleXM6IHtcclxuICAgICAgICAgIFBhZ2luYXRlZFBvc3RzOiAoKSA9PiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb2x2ZXJzOiB7XHJcbiAgICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxyXG4gICAgICAgICAgICAvLyBwb3N0OiB2b3RlU3RhdHVzUG9zdCgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZXM6IHtcclxuICAgICAgICAgIE11dGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVBvc3Q6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX190eXBlbmFtZTogXCJQb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBpZDogKGFyZ3MgYXMgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzKS5pZCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdm90ZTogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBwb3N0SWQsIHZhbHVlIH0gPSBhcmdzIGFzIFZvdGVNdXRhdGlvblZhcmlhYmxlcztcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZEZyYWdtZW50KFxyXG4gICAgICAgICAgICAgICAgZ3FsYFxyXG4gICAgICAgICAgICAgICAgICBmcmFnbWVudCBfIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgeyBpZDogcG9zdElkIH0gYXMgYW55XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudm90ZVN0YXR1cyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9pbnRzID1cclxuICAgICAgICAgICAgICAgICAgKGRhdGEucG9pbnRzIGFzIG51bWJlcikgKyAoIWRhdGEudm90ZVN0YXR1cyA/IDEgOiAyKSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2FjaGUud3JpdGVGcmFnbWVudChcclxuICAgICAgICAgICAgICAgICAgZ3FsYFxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IF9fIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB2b3RlU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICB7IGlkOiBwb3N0SWQsIHBvaW50czogbmV3UG9pbnRzLCB2b3RlU3RhdHVzOiB2YWx1ZSB9IGFzIGFueVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjcmVhdGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKFwiUXVlcnlcIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IFwicG9zdHNcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShcIlF1ZXJ5XCIsIFwicG9zdHNcIiwgZmkuYXJndW1lbnRzIHx8IHt9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBlcnJvckV4Y2hhbmdlLFxyXG4gICAgICBzc3JFeGNoYW5nZSxcclxuICAgICAgZmV0Y2hFeGNoYW5nZSxcclxuICAgIF0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==