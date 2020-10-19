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
    console.log("entity key:", entityKey);
    console.log("field name:", fieldName);
    var allFields = cache.inspectFields(entityKey);
    console.log("all fields:", allFields);
    var fieldInfos = allFields.filter(function (info) {
      return info.fieldName === fieldName;
    });
    console.log("field infos", fieldInfos);
    var size = fieldInfos.length;

    if (size === 0) {
      return undefined;
    }

    var vote = null;
    var result = [];
    fieldInfos.forEach(function (fi) {
      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);
      console.log("key:", key);
      var data = cache.resolve(key, "post");
      console.log("data: ", data);

      var _vote = cache.resolve(key, "voteStatus");

      console.log("_vote: ", _vote);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsInZvdGVTdGF0dXNQb3N0IiwiX3BhcmVudCIsImZpZWxkQXJncyIsImNhY2hlIiwiaW5mbyIsImVudGl0eUtleSIsInBhcmVudEtleSIsImZpZWxkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2b3RlIiwicmVzdWx0IiwiZm9yRWFjaCIsImZpIiwia2V5IiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJmaWVsZEtleSIsImRhdGEiLCJyZXNvbHZlIiwiX3ZvdGUiLCJfX3R5cGVuYW1lIiwicG9zdCIsInZvdGVTdGF0dXMiLCJjdXJzb3JQYWdpbmF0aW9uIiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJfaGFzTW9yZSIsInB1c2giLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsImlzU2VydmVyIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJfcmVzdWx0IiwiYXJncyIsImludmFsaWRhdGUiLCJpZCIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwibmV3UG9pbnRzIiwicG9pbnRzIiwid3JpdGVGcmFnbWVudCIsImNyZWF0ZVBvc3QiLCJhcmd1bWVudHMiLCJsb2dvdXQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekQsV0FBT0Msa0RBQUksQ0FDVEYsT0FBTyxDQUFDQyxJQUFELENBREUsRUFFVEUsaURBQUcsQ0FBQyxpQkFBZTtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakIsVUFBSUEsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSixFQUFrRDtBQUNoREMsMERBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEtBSkUsQ0FGTSxDQUFYO0FBUUQsR0FUK0I7QUFBQSxDQUFoQzs7QUFXQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWdCO0FBQ3JDLFNBQU8sVUFBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsRUFBcUM7QUFBQSxRQUN2QkMsU0FEdUIsR0FDRUQsSUFERixDQUNsQ0UsU0FEa0M7QUFBQSxRQUNaQyxTQURZLEdBQ0VILElBREYsQ0FDWkcsU0FEWTtBQUUxQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkosU0FBM0I7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsU0FB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QUhlLEVBSWYsVUFBQ3pDLE1BQUQsRUFBU3dELEtBQVQsRUFBbUI7QUFDakIsa0JBQUl4RCxNQUFNLENBQUM4RCxRQUFQLENBQWdCRixNQUFwQixFQUE0QjtBQUMxQix1QkFBT0osS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xFLG9CQUFFLEVBQUUxRCxNQUFNLENBQUM4RCxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0Q7QUF0Rk87QUFESDtBQVZHLEtBQUQsQ0FGSixFQXVHVHpGLGFBdkdTLEVBd0dUa0QsV0F4R1MsRUF5R1R5QyxrREF6R1M7QUFWTixHQUFQO0FBc0hELENBNUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5iODIzNWEwZTg1ODEyN2IxNDJmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBkZWR1cEV4Y2hhbmdlLFxyXG4gIEV4Y2hhbmdlLFxyXG4gIGZldGNoRXhjaGFuZ2UsXHJcbiAgc3RyaW5naWZ5VmFyaWFibGVzLFxyXG59IGZyb20gXCJ1cnFsXCI7XHJcbmltcG9ydCB7IGNhY2hlRXhjaGFuZ2UsIFJlc29sdmVyIH0gZnJvbSBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIjtcclxuaW1wb3J0IHtcclxuICBMb2dvdXRNdXRhdGlvbixcclxuICBNZVF1ZXJ5LFxyXG4gIE1lRG9jdW1lbnQsXHJcbiAgTG9naW5NdXRhdGlvbixcclxuICBSZWdpc3Rlck11dGF0aW9uLFxyXG4gIFZvdGVNdXRhdGlvblZhcmlhYmxlcyxcclxuICBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXMsXHJcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IGJldHRlclVwZGF0ZVF1ZXJ5IH0gZnJvbSBcIi4vYmV0dGVyVXBkYXRlUXVlcnlcIjtcclxuaW1wb3J0IHsgcGlwZSwgdGFwIH0gZnJvbSBcIndvbmthXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSBcIi4vaXNTZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IGVycm9yRXhjaGFuZ2U6IEV4Y2hhbmdlID0gKHsgZm9yd2FyZCB9KSA9PiAob3BzJCkgPT4ge1xyXG4gIHJldHVybiBwaXBlKFxyXG4gICAgZm9yd2FyZChvcHMkKSxcclxuICAgIHRhcCgoeyBlcnJvciB9KSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcyhcIm5vdCBhdXRoZW50aWNhdGVkXCIpKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHZvdGVTdGF0dXNQb3N0ID0gKCk6IFJlc29sdmVyID0+IHtcclxuICByZXR1cm4gKF9wYXJlbnQsIGZpZWxkQXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcclxuICAgIGNvbnNvbGUubG9nKFwiZW50aXR5IGtleTpcIiwgZW50aXR5S2V5KTtcclxuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgbmFtZTpcIiwgZmllbGROYW1lKTtcclxuICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoZW50aXR5S2V5KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWxsIGZpZWxkczpcIiwgYWxsRmllbGRzKTtcclxuICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgaW5mb3NcIiwgZmllbGRJbmZvcyk7XHJcbiAgICBjb25zdCBzaXplID0gZmllbGRJbmZvcy5sZW5ndGg7XHJcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2b3RlID0gbnVsbDtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcclxuICAgICAgY29uc29sZS5sb2coXCJrZXk6XCIsIGtleSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0XCIpIGFzIHN0cmluZ1tdO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgY29uc3QgX3ZvdGUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJ2b3RlU3RhdHVzXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIl92b3RlOiBcIiwgX3ZvdGUpO1xyXG4gICAgICBpZiAoIV92b3RlKSB7XHJcbiAgICAgICAgdm90ZSA9IF92b3RlIGFzIGJvb2xlYW47XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0ID0gZGF0YTtcclxuICAgIH0pO1xyXG4gICAgLy9JJ20gZ2V0dGluZyBudWxsIGZvciByZXN1bHQ/XHJcbiAgICAvLyBjb25zdCBfaWQgPSByZXN1bHQuc2xpY2UoNSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9pZDpcIiwgX2lkKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9fdHlwZW5hbWU6IFwiUG9zdFwiLFxyXG4gICAgICBwb3N0OiByZXN1bHQsXHJcbiAgICAgIHZvdGVTdGF0dXM6IHZvdGUsXHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjdXJzb3JQYWdpbmF0aW9uID0gKCk6IFJlc29sdmVyID0+IHtcclxuICByZXR1cm4gKF9wYXJlbnQsIGZpZWxkQXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcclxuXHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XHJcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XHJcbiAgICBjb25zdCBzaXplID0gZmllbGRJbmZvcy5sZW5ndGg7XHJcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJjYWNoZVwiLCBjYWNoZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJlbnRpdHkga2V5OlwiLCBlbnRpdHlLZXkpO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkS2V5ID0gYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgO1xyXG4gICAgY29uc29sZS5sb2coXCJmaWVsZEtleTpcIiwgZmllbGRLZXkpO1xyXG4gICAgY29uc3QgaXNJdEluVGhlQ2FjaGUgPSBjYWNoZS5yZXNvbHZlKFxyXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmcsXHJcbiAgICAgIFwicG9zdHNcIlxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcInJlc29sdmVGaWVsZEJ5S2V5OlwiLFxyXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KVxyXG4gICAgKTtcclxuXHJcbiAgICBpbmZvLnBhcnRpYWwgPSAhaXNJdEluVGhlQ2FjaGU7XHJcbiAgICBjb25zb2xlLmxvZyhcImluZm8gcGFydGlhbDpcIiwgaW5mby5wYXJ0aWFsKTtcclxuICAgIGxldCBoYXNNb3JlID0gdHJ1ZTtcclxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcInBvc3RzXCIpIGFzIHN0cmluZ1tdO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgY29uc3QgX2hhc01vcmUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJoYXNNb3JlXCIpO1xyXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XHJcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHRzOlwiLCByZXN1bHRzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9fdHlwZW5hbWU6IFwiUGFnaW5hdGVkUG9zdHNcIixcclxuICAgICAgaGFzTW9yZSxcclxuICAgICAgcG9zdHM6IHJlc3VsdHMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XHJcbiAgICAvLyBsZXQgcmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8gbGV0IHByZXZPZmZzZXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAvLyAgIGNvbnN0IHsgZmllbGRLZXksIGFyZ3VtZW50czogYXJncyB9ID0gZmllbGRJbmZvc1tpXTtcclxuICAgIC8vICAgaWYgKGFyZ3MgPT09IG51bGwgfHwgIWNvbXBhcmVBcmdzKGZpZWxkQXJncywgYXJncykpIHtcclxuICAgIC8vICAgICBjb250aW51ZTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgY29uc3QgbGlua3MgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmdbXTtcclxuICAgIC8vICAgY29uc3QgY3VycmVudE9mZnNldCA9IGFyZ3NbY3Vyc29yQXJndW1lbnRdO1xyXG5cclxuICAgIC8vICAgaWYgKFxyXG4gICAgLy8gICAgIGxpbmtzID09PSBudWxsIHx8XHJcbiAgICAvLyAgICAgbGlua3MubGVuZ3RoID09PSAwIHx8XHJcbiAgICAvLyAgICAgdHlwZW9mIGN1cnJlbnRPZmZzZXQgIT09ICdudW1iZXInXHJcbiAgICAvLyAgICkge1xyXG4gICAgLy8gICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBpZiAoIXByZXZPZmZzZXQgfHwgY3VycmVudE9mZnNldCA+IHByZXZPZmZzZXQpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XHJcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgcmVzdWx0LnB1c2gobGluayk7XHJcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc3QgdGVtcFJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XHJcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgdGVtcFJlc3VsdC5wdXNoKGxpbmspO1xyXG4gICAgLy8gICAgICAgdmlzaXRlZC5hZGQobGluayk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJlc3VsdCA9IFsuLi50ZW1wUmVzdWx0LCAuLi5yZXN1bHRdO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBwcmV2T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBoYXNDdXJyZW50UGFnZSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZE5hbWUsIGZpZWxkQXJncyk7XHJcbiAgICAvLyBpZiAoaGFzQ3VycmVudFBhZ2UpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH0gZWxzZSBpZiAoIShpbmZvIGFzIGFueSkuc3RvcmUuc2NoZW1hKSB7XHJcbiAgICAvLyAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpbmZvLnBhcnRpYWwgPSB0cnVlO1xyXG4gICAgLy8gICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55LCBjdHg6IGFueSkgPT4ge1xyXG4gIGxldCBjb29raWUgPSBcIlwiO1xyXG4gIGlmIChpc1NlcnZlcigpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlIGFyZSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcIik7XHJcbiAgICBjb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXHJcbiAgICBmZXRjaE9wdGlvbnM6IHtcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gICAgICBoZWFkZXJzOiBjb29raWVcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgY29va2llLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgfSxcclxuICAgIGV4Y2hhbmdlczogW1xyXG4gICAgICBkZWR1cEV4Y2hhbmdlLFxyXG4gICAgICBjYWNoZUV4Y2hhbmdlKHtcclxuICAgICAgICBrZXlzOiB7XHJcbiAgICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmVyczoge1xyXG4gICAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgICAgcG9zdHM6IGN1cnNvclBhZ2luYXRpb24oKSxcclxuICAgICAgICAgICAgcG9zdDogdm90ZVN0YXR1c1Bvc3QoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWxldGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6IFwiUG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IChhcmdzIGFzIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcykuaWQsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gYXJncyBhcyBWb3RlTXV0YXRpb25WYXJpYWJsZXM7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRGcmFnbWVudChcclxuICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCB9IGFzIGFueVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50cyA9XHJcbiAgICAgICAgICAgICAgICAgIChkYXRhLnBvaW50cyBhcyBudW1iZXIpICsgKCFkYXRhLnZvdGVTdGF0dXMgPyAxIDogMikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBfXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgeyBpZDogcG9zdElkLCBwb2ludHM6IG5ld1BvaW50cywgdm90ZVN0YXR1czogdmFsdWUgfSBhcyBhbnlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhcIlF1ZXJ5XCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBcInBvc3RzXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoXCJRdWVyeVwiLCBcInBvc3RzXCIsIGZpLmFyZ3VtZW50cyB8fCB7fSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9nb3V0TXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gKHsgbWU6IG51bGwgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZXJyb3JFeGNoYW5nZSxcclxuICAgICAgc3NyRXhjaGFuZ2UsXHJcbiAgICAgIGZldGNoRXhjaGFuZ2UsXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=