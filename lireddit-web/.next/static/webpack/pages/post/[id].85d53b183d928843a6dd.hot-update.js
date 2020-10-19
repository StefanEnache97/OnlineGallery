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
};

var voteStatusPost = function voteStatusPost() {
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

    var vote = null;
    var result = "";
    fieldInfos.forEach(function (fi) {
      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);
      var data = cache.resolve(key, "post");
      console.log(data);

      var _vote = cache.resolve(key, "voteStatus");

      if (!_vote) {
        vote = _vote;
      }

      result = data;
    }); //I'm getting null for result?
    // const _id = result.slice(5);
    // console.log("_id:", _id);

    return {
      __typename: "Post",
      post: result,
      voteStatus: vote
    };
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

    console.log("cache", cache);
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
          posts: cursorPagination(),
          post: voteStatusPost()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsInZvdGVTdGF0dXNQb3N0IiwiX3BhcmVudCIsImZpZWxkQXJncyIsImNhY2hlIiwiaW5mbyIsImVudGl0eUtleSIsInBhcmVudEtleSIsImZpZWxkTmFtZSIsImFsbEZpZWxkcyIsImluc3BlY3RGaWVsZHMiLCJmaWVsZEluZm9zIiwiZmlsdGVyIiwic2l6ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZvdGUiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZmkiLCJrZXkiLCJyZXNvbHZlRmllbGRCeUtleSIsImZpZWxkS2V5IiwiZGF0YSIsInJlc29sdmUiLCJjb25zb2xlIiwibG9nIiwiX3ZvdGUiLCJfX3R5cGVuYW1lIiwicG9zdCIsInZvdGVTdGF0dXMiLCJjdXJzb3JQYWdpbmF0aW9uIiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJfaGFzTW9yZSIsInB1c2giLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsImlzU2VydmVyIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJfcmVzdWx0IiwiYXJncyIsImludmFsaWRhdGUiLCJpZCIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwibmV3UG9pbnRzIiwicG9pbnRzIiwid3JpdGVGcmFnbWVudCIsImNyZWF0ZVBvc3QiLCJhcmd1bWVudHMiLCJsb2dvdXQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekQsV0FBT0Msa0RBQUksQ0FDVEYsT0FBTyxDQUFDQyxJQUFELENBREUsRUFFVEUsaURBQUcsQ0FBQyxpQkFBZTtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakIsVUFBSUEsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSixFQUFrRDtBQUNoREMsMERBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEtBSkUsQ0FGTSxDQUFYO0FBUUQsR0FUK0I7QUFBQSxDQUFoQzs7QUFXQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWdCO0FBQ3JDLFNBQU8sVUFBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsRUFBcUM7QUFBQSxRQUN2QkMsU0FEdUIsR0FDRUQsSUFERixDQUNsQ0UsU0FEa0M7QUFBQSxRQUNaQyxTQURZLEdBQ0VILElBREYsQ0FDWkcsU0FEWTtBQUcxQyxRQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkosU0FBcEIsQ0FBbEI7QUFDQSxRQUFNSyxVQUFVLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixVQUFDUCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDRyxTQUFMLEtBQW1CQSxTQUE3QjtBQUFBLEtBQWpCLENBQW5CO0FBQ0EsUUFBTUssSUFBSSxHQUFHRixVQUFVLENBQUNHLE1BQXhCOztBQUNBLFFBQUlELElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ2QsYUFBT0UsU0FBUDtBQUNEOztBQUVELFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSUMsTUFBYyxHQUFHLEVBQXJCO0FBQ0FOLGNBQVUsQ0FBQ08sT0FBWCxDQUFtQixVQUFDQyxFQUFELEVBQVE7QUFDekIsVUFBTUMsR0FBRyxHQUFHaEIsS0FBSyxDQUFDaUIsaUJBQU4sQ0FBd0JmLFNBQXhCLEVBQW1DYSxFQUFFLENBQUNHLFFBQXRDLENBQVo7QUFDQSxVQUFNQyxJQUFJLEdBQUduQixLQUFLLENBQUNvQixPQUFOLENBQWNKLEdBQWQsRUFBbUIsTUFBbkIsQ0FBYjtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjs7QUFDQSxVQUFNSSxLQUFLLEdBQUd2QixLQUFLLENBQUNvQixPQUFOLENBQWNKLEdBQWQsRUFBbUIsWUFBbkIsQ0FBZDs7QUFDQSxVQUFJLENBQUNPLEtBQUwsRUFBWTtBQUNWWCxZQUFJLEdBQUdXLEtBQVA7QUFDRDs7QUFDRFYsWUFBTSxHQUFHTSxJQUFUO0FBQ0QsS0FURCxFQVowQyxDQXNCMUM7QUFDQTtBQUNBOztBQUNBLFdBQU87QUFDTEssZ0JBQVUsRUFBRSxNQURQO0FBRUxDLFVBQUksRUFBRVosTUFGRDtBQUdMYSxnQkFBVSxFQUFFZDtBQUhQLEtBQVA7QUFLRCxHQTlCRDtBQStCRCxDQWhDRDs7QUFrQ0EsSUFBTWUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFnQjtBQUN2QyxTQUFPLFVBQUM3QixPQUFELEVBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixFQUFxQztBQUFBLFFBQ3ZCQyxTQUR1QixHQUNFRCxJQURGLENBQ2xDRSxTQURrQztBQUFBLFFBQ1pDLFNBRFksR0FDRUgsSUFERixDQUNaRyxTQURZO0FBRzFDLFFBQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxhQUFOLENBQW9CSixTQUFwQixDQUFsQjtBQUNBLFFBQU1LLFVBQVUsR0FBR0YsU0FBUyxDQUFDRyxNQUFWLENBQWlCLFVBQUNQLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNHLFNBQUwsS0FBbUJBLFNBQTdCO0FBQUEsS0FBakIsQ0FBbkI7QUFDQSxRQUFNSyxJQUFJLEdBQUdGLFVBQVUsQ0FBQ0csTUFBeEI7O0FBQ0EsUUFBSUQsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDZCxhQUFPRSxTQUFQO0FBQ0Q7O0FBQ0RVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJ0QixLQUFyQjtBQUVBcUIsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQnBCLFNBQTNCO0FBRUEsUUFBTWdCLFFBQVEsYUFBTWQsU0FBTixjQUFtQndCLCtEQUFrQixDQUFDN0IsU0FBRCxDQUFyQyxNQUFkO0FBQ0FzQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSixRQUF6QjtBQUNBLFFBQU1XLGNBQWMsR0FBRzdCLEtBQUssQ0FBQ29CLE9BQU4sQ0FDckJwQixLQUFLLENBQUNpQixpQkFBTixDQUF3QmYsU0FBeEIsRUFBbUNnQixRQUFuQyxDQURxQixFQUVyQixPQUZxQixDQUF2QjtBQUlBRyxXQUFPLENBQUNDLEdBQVIsQ0FDRSxvQkFERixFQUVFdEIsS0FBSyxDQUFDaUIsaUJBQU4sQ0FBd0JmLFNBQXhCLEVBQW1DZ0IsUUFBbkMsQ0FGRjtBQUtBakIsUUFBSSxDQUFDNkIsT0FBTCxHQUFlLENBQUNELGNBQWhCO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJyQixJQUFJLENBQUM2QixPQUFsQztBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsUUFBTUMsT0FBaUIsR0FBRyxFQUExQjtBQUNBekIsY0FBVSxDQUFDTyxPQUFYLENBQW1CLFVBQUNDLEVBQUQsRUFBUTtBQUN6QixVQUFNQyxHQUFHLEdBQUdoQixLQUFLLENBQUNpQixpQkFBTixDQUF3QmYsU0FBeEIsRUFBbUNhLEVBQUUsQ0FBQ0csUUFBdEMsQ0FBWjtBQUNBLFVBQU1DLElBQUksR0FBR25CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0osR0FBZCxFQUFtQixPQUFuQixDQUFiO0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaOztBQUNBLFVBQU1jLFFBQVEsR0FBR2pDLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0osR0FBZCxFQUFtQixTQUFuQixDQUFqQjs7QUFDQSxVQUFJLENBQUNpQixRQUFMLEVBQWU7QUFDYkYsZUFBTyxHQUFHRSxRQUFWO0FBQ0Q7O0FBQ0RELGFBQU8sQ0FBQ0UsSUFBUixPQUFBRixPQUFPLCtGQUFTYixJQUFULEVBQVA7QUFDRCxLQVREO0FBV0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JVLE9BQXhCO0FBQ0EsV0FBTztBQUNMUixnQkFBVSxFQUFFLGdCQURQO0FBRUxPLGFBQU8sRUFBUEEsT0FGSztBQUdMSSxXQUFLLEVBQUVIO0FBSEYsS0FBUCxDQXhDMEMsQ0E4QzFDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBakdEO0FBa0dELENBbkdEOztBQXFHTyxJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFdBQUQsRUFBbUJDLEdBQW5CLEVBQWdDO0FBQzlELE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLE1BQUlDLDBEQUFRLEVBQVosRUFBZ0I7QUFDZG5CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0FpQixVQUFNLEdBQUdELEdBQUcsQ0FBQ0csR0FBSixDQUFRQyxPQUFSLENBQWdCSCxNQUF6QjtBQUNEOztBQUNELFNBQU87QUFDTEksT0FBRyxFQUFFLCtCQURBO0FBRUxDLGdCQUFZLEVBQUU7QUFDWkMsaUJBQVcsRUFBRSxTQUREO0FBRVpILGFBQU8sRUFBRUgsTUFBTSxHQUNYO0FBQ0VBLGNBQU0sRUFBTkE7QUFERixPQURXLEdBSVg1QjtBQU5RLEtBRlQ7QUFVTG1DLGFBQVMsRUFBRSxDQUNUQyxrREFEUyxFQUVUQywrRUFBYSxDQUFDO0FBQ1pDLFVBQUksRUFBRTtBQUNKQyxzQkFBYyxFQUFFO0FBQUEsaUJBQU0sSUFBTjtBQUFBO0FBRFosT0FETTtBQUlaQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFO0FBQ0xqQixlQUFLLEVBQUVSLGdCQUFnQixFQURsQjtBQUVMRixjQUFJLEVBQUU1QixjQUFjO0FBRmY7QUFERSxPQUpDO0FBVVp3RCxhQUFPLEVBQUU7QUFDUEMsZ0JBQVEsRUFBRTtBQUNSQyxvQkFBVSxFQUFFLG9CQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBZ0J6RCxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDMUNELGlCQUFLLENBQUMwRCxVQUFOLENBQWlCO0FBQ2ZsQyx3QkFBVSxFQUFFLE1BREc7QUFFZm1DLGdCQUFFLEVBQUdGLElBQUQsQ0FBc0NFO0FBRjNCLGFBQWpCO0FBSUQsV0FOTztBQU9SL0MsY0FBSSxFQUFFLGNBQUM0QyxPQUFELEVBQVVDLElBQVYsRUFBZ0J6RCxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFBQSx3QkFDVndELElBRFU7QUFBQSxnQkFDNUJHLE1BRDRCLFNBQzVCQSxNQUQ0QjtBQUFBLGdCQUNwQkMsS0FEb0IsU0FDcEJBLEtBRG9CO0FBRXBDLGdCQUFNMUMsSUFBSSxHQUFHbkIsS0FBSyxDQUFDOEQsWUFBTixDQUNYQyxrREFEVyxxQkFRWDtBQUFFSixnQkFBRSxFQUFFQztBQUFOLGFBUlcsQ0FBYjtBQVVBdkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaOztBQUNBLGdCQUFJQSxJQUFKLEVBQVU7QUFDUixrQkFBSUEsSUFBSSxDQUFDTyxVQUFMLEtBQW9CbUMsS0FBeEIsRUFBK0I7QUFDN0I7QUFDRDs7QUFDRCxrQkFBTUcsU0FBUyxHQUNaN0MsSUFBSSxDQUFDOEMsTUFBTixHQUEwQixDQUFDLENBQUM5QyxJQUFJLENBQUNPLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUIsQ0FBeEIsSUFBNkJtQyxLQUR6RDtBQUVBN0QsbUJBQUssQ0FBQ2tFLGFBQU4sQ0FDRUgsa0RBREYsc0JBT0U7QUFBRUosa0JBQUUsRUFBRUMsTUFBTjtBQUFjSyxzQkFBTSxFQUFFRCxTQUF0QjtBQUFpQ3RDLDBCQUFVLEVBQUVtQztBQUE3QyxlQVBGO0FBU0Q7QUFDRixXQXBDTztBQXNDUk0sb0JBQVUsRUFBRSxvQkFBQ1gsT0FBRCxFQUFVQyxJQUFWLEVBQWdCekQsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQzFDLGdCQUFNSSxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sYUFBTixDQUFvQixPQUFwQixDQUFsQjtBQUNBLGdCQUFNQyxVQUFVLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUNqQixVQUFDUCxJQUFEO0FBQUEscUJBQVVBLElBQUksQ0FBQ0csU0FBTCxLQUFtQixPQUE3QjtBQUFBLGFBRGlCLENBQW5CO0FBR0FHLHNCQUFVLENBQUNPLE9BQVgsQ0FBbUIsVUFBQ0MsRUFBRCxFQUFRO0FBQ3pCZixtQkFBSyxDQUFDMEQsVUFBTixDQUFpQixPQUFqQixFQUEwQixPQUExQixFQUFtQzNDLEVBQUUsQ0FBQ3FELFNBQUgsSUFBZ0IsRUFBbkQ7QUFDRCxhQUZEO0FBR0QsV0E5Q087QUErQ1JDLGdCQUFNLEVBQUUsZ0JBQUNiLE9BQUQsRUFBVUMsSUFBVixFQUFnQnpELEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN0Q3FFLHdGQUFpQixDQUNmdEUsS0FEZSxFQUVmO0FBQUV1RSxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmaEIsT0FIZSxFQUlmO0FBQUEscUJBQU87QUFBRWlCLGtCQUFFLEVBQUU7QUFBTixlQUFQO0FBQUEsYUFKZSxDQUFqQjtBQU1ELFdBdERPO0FBdURSQyxlQUFLLEVBQUUsZUFBQ2xCLE9BQUQsRUFBVUMsSUFBVixFQUFnQnpELEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUNyQ3FFLHdGQUFpQixDQUNmdEUsS0FEZSxFQUVmO0FBQUV1RSxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmaEIsT0FIZSxFQUlmLFVBQUMzQyxNQUFELEVBQVMwRCxLQUFULEVBQW1CO0FBQ2pCLGtCQUFJMUQsTUFBTSxDQUFDNkQsS0FBUCxDQUFhQyxNQUFqQixFQUF5QjtBQUN2Qix1QkFBT0osS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xFLG9CQUFFLEVBQUU1RCxNQUFNLENBQUM2RCxLQUFQLENBQWFFO0FBRFosaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRCxXQXRFTztBQXVFUkMsa0JBQVEsRUFBRSxrQkFBQ3JCLE9BQUQsRUFBVUMsSUFBVixFQUFnQnpELEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN4Q3FFLHdGQUFpQixDQUNmdEUsS0FEZSxFQUVmO0FBQUV1RSxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmaEIsT0FIZSxFQUlmLFVBQUMzQyxNQUFELEVBQVMwRCxLQUFULEVBQW1CO0FBQ2pCLGtCQUFJMUQsTUFBTSxDQUFDZ0UsUUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIsdUJBQU9KLEtBQVA7QUFDRCxlQUZELE1BRU87QUFDTCx1QkFBTztBQUNMRSxvQkFBRSxFQUFFNUQsTUFBTSxDQUFDZ0UsUUFBUCxDQUFnQkQ7QUFEZixpQkFBUDtBQUdEO0FBQ0YsYUFaYyxDQUFqQjtBQWNEO0FBdEZPO0FBREg7QUFWRyxLQUFELENBRkosRUF1R1R6RixhQXZHUyxFQXdHVGtELFdBeEdTLEVBeUdUeUMsa0RBekdTO0FBVk4sR0FBUDtBQXNIRCxDQTVITSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uODVkNTNiMTgzZDkyODg0M2E2ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcclxufSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcbmltcG9ydCB7XHJcbiAgTG9nb3V0TXV0YXRpb24sXHJcbiAgTWVRdWVyeSxcclxuICBNZURvY3VtZW50LFxyXG4gIExvZ2luTXV0YXRpb24sXHJcbiAgUmVnaXN0ZXJNdXRhdGlvbixcclxuICBWb3RlTXV0YXRpb25WYXJpYWJsZXMsXHJcbiAgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzLFxyXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gXCIuL2lzU2VydmVyXCI7XHJcblxyXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gKG9wcyQpID0+IHtcclxuICByZXR1cm4gcGlwZShcclxuICAgIGZvcndhcmQob3BzJCksXHJcbiAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xyXG4gICAgICBpZiAoZXJyb3I/Lm1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYXV0aGVudGljYXRlZFwiKSkge1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB2b3RlU3RhdHVzUG9zdCA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcblxyXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdm90ZSA9IG51bGw7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0XCIpIGFzIHN0cmluZztcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnN0IF92b3RlID0gY2FjaGUucmVzb2x2ZShrZXksIFwidm90ZVN0YXR1c1wiKTtcclxuICAgICAgaWYgKCFfdm90ZSkge1xyXG4gICAgICAgIHZvdGUgPSBfdm90ZSBhcyBib29sZWFuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCA9IGRhdGE7XHJcbiAgICB9KTtcclxuICAgIC8vSSdtIGdldHRpbmcgbnVsbCBmb3IgcmVzdWx0P1xyXG4gICAgLy8gY29uc3QgX2lkID0gcmVzdWx0LnNsaWNlKDUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJfaWQ6XCIsIF9pZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBfX3R5cGVuYW1lOiBcIlBvc3RcIixcclxuICAgICAgcG9zdDogcmVzdWx0LFxyXG4gICAgICB2b3RlU3RhdHVzOiB2b3RlLFxyXG4gICAgfTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcblxyXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiY2FjaGVcIiwgY2FjaGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZW50aXR5IGtleTpcIiwgZW50aXR5S2V5KTtcclxuXHJcbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcclxuICAgIGNvbnNvbGUubG9nKFwiZmllbGRLZXk6XCIsIGZpZWxkS2V5KTtcclxuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nLFxyXG4gICAgICBcInBvc3RzXCJcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJyZXNvbHZlRmllbGRCeUtleTpcIixcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSlcclxuICAgICk7XHJcblxyXG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmZvIHBhcnRpYWw6XCIsIGluZm8ucGFydGlhbCk7XHJcbiAgICBsZXQgaGFzTW9yZSA9IHRydWU7XHJcbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0c1wiKSBhcyBzdHJpbmdbXTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShrZXksIFwiaGFzTW9yZVwiKTtcclxuICAgICAgaWYgKCFfaGFzTW9yZSkge1xyXG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMucHVzaCguLi5kYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0czpcIiwgcmVzdWx0cyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBfX3R5cGVuYW1lOiBcIlBhZ2luYXRlZFBvc3RzXCIsXHJcbiAgICAgIGhhc01vcmUsXHJcbiAgICAgIHBvc3RzOiByZXN1bHRzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpO1xyXG4gICAgLy8gbGV0IHJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIC8vIGxldCBwcmV2T2Zmc2V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgLy8gICBjb25zdCB7IGZpZWxkS2V5LCBhcmd1bWVudHM6IGFyZ3MgfSA9IGZpZWxkSW5mb3NbaV07XHJcbiAgICAvLyAgIGlmIChhcmdzID09PSBudWxsIHx8ICFjb21wYXJlQXJncyhmaWVsZEFyZ3MsIGFyZ3MpKSB7XHJcbiAgICAvLyAgICAgY29udGludWU7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGNvbnN0IGxpbmtzID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nW107XHJcbiAgICAvLyAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBhcmdzW2N1cnNvckFyZ3VtZW50XTtcclxuXHJcbiAgICAvLyAgIGlmIChcclxuICAgIC8vICAgICBsaW5rcyA9PT0gbnVsbCB8fFxyXG4gICAgLy8gICAgIGxpbmtzLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgLy8gICAgIHR5cGVvZiBjdXJyZW50T2Zmc2V0ICE9PSAnbnVtYmVyJ1xyXG4gICAgLy8gICApIHtcclxuICAgIC8vICAgICBjb250aW51ZTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgaWYgKCFwcmV2T2Zmc2V0IHx8IGN1cnJlbnRPZmZzZXQgPiBwcmV2T2Zmc2V0KSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xyXG4gICAgLy8gICAgICAgaWYgKHZpc2l0ZWQuaGFzKGxpbmspKSBjb250aW51ZTtcclxuICAgIC8vICAgICAgIHJlc3VsdC5wdXNoKGxpbmspO1xyXG4gICAgLy8gICAgICAgdmlzaXRlZC5hZGQobGluayk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGNvbnN0IHRlbXBSZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xyXG4gICAgLy8gICAgICAgaWYgKHZpc2l0ZWQuaGFzKGxpbmspKSBjb250aW51ZTtcclxuICAgIC8vICAgICAgIHRlbXBSZXN1bHQucHVzaChsaW5rKTtcclxuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXN1bHQgPSBbLi4udGVtcFJlc3VsdCwgLi4ucmVzdWx0XTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgcHJldk9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgaGFzQ3VycmVudFBhZ2UgPSBjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmllbGROYW1lLCBmaWVsZEFyZ3MpO1xyXG4gICAgLy8gaWYgKGhhc0N1cnJlbnRQYWdlKSB7XHJcbiAgICAvLyAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9IGVsc2UgaWYgKCEoaW5mbyBhcyBhbnkpLnN0b3JlLnNjaGVtYSkge1xyXG4gICAgLy8gICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgaW5mby5wYXJ0aWFsID0gdHJ1ZTtcclxuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSwgY3R4OiBhbnkpID0+IHtcclxuICBsZXQgY29va2llID0gXCJcIjtcclxuICBpZiAoaXNTZXJ2ZXIoKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJXZSBhcmUgc2VydmVyIHNpZGUgcmVuZGVyaW5nXCIpO1xyXG4gICAgY29va2llID0gY3R4LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4gICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcclxuICAgICAgaGVhZGVyczogY29va2llXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNvb2tpZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgIH0sXHJcbiAgICBleGNoYW5nZXM6IFtcclxuICAgICAgZGVkdXBFeGNoYW5nZSxcclxuICAgICAgY2FjaGVFeGNoYW5nZSh7XHJcbiAgICAgICAga2V5czoge1xyXG4gICAgICAgICAgUGFnaW5hdGVkUG9zdHM6ICgpID0+IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvbHZlcnM6IHtcclxuICAgICAgICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHBvc3RzOiBjdXJzb3JQYWdpbmF0aW9uKCksXHJcbiAgICAgICAgICAgIHBvc3Q6IHZvdGVTdGF0dXNQb3N0KCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlczoge1xyXG4gICAgICAgICAgTXV0YXRpb246IHtcclxuICAgICAgICAgICAgZGVsZXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOiBcIlBvc3RcIixcclxuICAgICAgICAgICAgICAgIGlkOiAoYXJncyBhcyBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXMpLmlkLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2b3RlOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IHBvc3RJZCwgdmFsdWUgfSA9IGFyZ3MgYXMgVm90ZU11dGF0aW9uVmFyaWFibGVzO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICBncWxgXHJcbiAgICAgICAgICAgICAgICAgIGZyYWdtZW50IF8gb24gUG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHNcclxuICAgICAgICAgICAgICAgICAgICB2b3RlU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB7IGlkOiBwb3N0SWQgfSBhcyBhbnlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS52b3RlU3RhdHVzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb2ludHMgPVxyXG4gICAgICAgICAgICAgICAgICAoZGF0YS5wb2ludHMgYXMgbnVtYmVyKSArICghZGF0YS52b3RlU3RhdHVzID8gMSA6IDIpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KFxyXG4gICAgICAgICAgICAgICAgICBncWxgXHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgX18gb24gUG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludHNcclxuICAgICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCwgcG9pbnRzOiBuZXdQb2ludHMsIHZvdGVTdGF0dXM6IHZhbHVlIH0gYXMgYW55XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVBvc3Q6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoXCJRdWVyeVwiKTtcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gXCJwb3N0c1wiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFwiUXVlcnlcIiwgXCJwb3N0c1wiLCBmaS5hcmd1bWVudHMgfHwge30pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ291dE11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIGVycm9yRXhjaGFuZ2UsXHJcbiAgICAgIHNzckV4Y2hhbmdlLFxyXG4gICAgICBmZXRjaEV4Y2hhbmdlLFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9