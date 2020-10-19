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
    var result = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsInZvdGVTdGF0dXNQb3N0IiwiX3BhcmVudCIsImZpZWxkQXJncyIsImNhY2hlIiwiaW5mbyIsImVudGl0eUtleSIsInBhcmVudEtleSIsImZpZWxkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2b3RlIiwicmVzdWx0IiwiZm9yRWFjaCIsImZpIiwia2V5IiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJmaWVsZEtleSIsImRhdGEiLCJyZXNvbHZlIiwiX3ZvdGUiLCJfX3R5cGVuYW1lIiwicG9zdCIsInZvdGVTdGF0dXMiLCJjdXJzb3JQYWdpbmF0aW9uIiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJfaGFzTW9yZSIsInB1c2giLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsImlzU2VydmVyIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJfcmVzdWx0IiwiYXJncyIsImludmFsaWRhdGUiLCJpZCIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwibmV3UG9pbnRzIiwicG9pbnRzIiwid3JpdGVGcmFnbWVudCIsImNyZWF0ZVBvc3QiLCJhcmd1bWVudHMiLCJsb2dvdXQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekQsV0FBT0Msa0RBQUksQ0FDVEYsT0FBTyxDQUFDQyxJQUFELENBREUsRUFFVEUsaURBQUcsQ0FBQyxpQkFBZTtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakIsVUFBSUEsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSixFQUFrRDtBQUNoREMsMERBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEtBSkUsQ0FGTSxDQUFYO0FBUUQsR0FUK0I7QUFBQSxDQUFoQzs7QUFXQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWdCO0FBQ3JDLFNBQU8sVUFBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsRUFBcUM7QUFBQSxRQUN2QkMsU0FEdUIsR0FDRUQsSUFERixDQUNsQ0UsU0FEa0M7QUFBQSxRQUNaQyxTQURZLEdBQ0VILElBREYsQ0FDWkcsU0FEWTtBQUUxQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkosU0FBM0I7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsU0FB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SGUsRUFJZixVQUFDekMsTUFBRCxFQUFTd0QsS0FBVCxFQUFtQjtBQUNqQixrQkFBSXhELE1BQU0sQ0FBQzhELFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHVCQUFPSixLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRTFELE1BQU0sQ0FBQzhELFFBQVAsQ0FBZ0JEO0FBRGYsaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRDtBQXRGTztBQURIO0FBVkcsS0FBRCxDQUZKLEVBdUdUekYsYUF2R1MsRUF3R1RrRCxXQXhHUyxFQXlHVHlDLGtEQXpHUztBQVZOLEdBQVA7QUFzSEQsQ0E1SE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzViYTMzMzA5NjVjMmQzNDdiNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcclxufSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcbmltcG9ydCB7XHJcbiAgTG9nb3V0TXV0YXRpb24sXHJcbiAgTWVRdWVyeSxcclxuICBNZURvY3VtZW50LFxyXG4gIExvZ2luTXV0YXRpb24sXHJcbiAgUmVnaXN0ZXJNdXRhdGlvbixcclxuICBWb3RlTXV0YXRpb25WYXJpYWJsZXMsXHJcbiAgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzLFxyXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gXCIuL2lzU2VydmVyXCI7XHJcblxyXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gKG9wcyQpID0+IHtcclxuICByZXR1cm4gcGlwZShcclxuICAgIGZvcndhcmQob3BzJCksXHJcbiAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xyXG4gICAgICBpZiAoZXJyb3I/Lm1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYXV0aGVudGljYXRlZFwiKSkge1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB2b3RlU3RhdHVzUG9zdCA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcbiAgICBjb25zb2xlLmxvZyhcImVudGl0eSBrZXk6XCIsIGVudGl0eUtleSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIG5hbWU6XCIsIGZpZWxkTmFtZSk7XHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImFsbCBmaWVsZHM6XCIsIGFsbEZpZWxkcyk7XHJcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGluZm9zXCIsIGZpZWxkSW5mb3MpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdm90ZSA9IG51bGw7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXkpO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVzb2x2ZShrZXksIFwicG9zdFwiKSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIsIGRhdGEpO1xyXG4gICAgICBjb25zdCBfdm90ZSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcInZvdGVTdGF0dXNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiX3ZvdGU6IFwiLCBfdm90ZSk7XHJcbiAgICAgIGlmICghX3ZvdGUpIHtcclxuICAgICAgICB2b3RlID0gX3ZvdGUgYXMgYm9vbGVhbjtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgPSBkYXRhO1xyXG4gICAgfSk7XHJcbiAgICAvL0knbSBnZXR0aW5nIG51bGwgZm9yIHJlc3VsdD9cclxuICAgIC8vIGNvbnN0IF9pZCA9IHJlc3VsdC5zbGljZSg1KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiX2lkOlwiLCBfaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX190eXBlbmFtZTogXCJQb3N0XCIsXHJcbiAgICAgIHBvc3Q6IHJlc3VsdCxcclxuICAgICAgdm90ZVN0YXR1czogdm90ZSxcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnNvclBhZ2luYXRpb24gPSAoKTogUmVzb2x2ZXIgPT4ge1xyXG4gIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgY29uc3QgeyBwYXJlbnRLZXk6IGVudGl0eUtleSwgZmllbGROYW1lIH0gPSBpbmZvO1xyXG5cclxuICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoZW50aXR5S2V5KTtcclxuICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKTtcclxuICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcclxuICAgIGlmIChzaXplID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImNhY2hlXCIsIGNhY2hlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImVudGl0eSBrZXk6XCIsIGVudGl0eUtleSk7XHJcblxyXG4gICAgY29uc3QgZmllbGRLZXkgPSBgJHtmaWVsZE5hbWV9KCR7c3RyaW5naWZ5VmFyaWFibGVzKGZpZWxkQXJncyl9KWA7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkS2V5OlwiLCBmaWVsZEtleSk7XHJcbiAgICBjb25zdCBpc0l0SW5UaGVDYWNoZSA9IGNhY2hlLnJlc29sdmUoXHJcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZyxcclxuICAgICAgXCJwb3N0c1wiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwicmVzb2x2ZUZpZWxkQnlLZXk6XCIsXHJcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpXHJcbiAgICApO1xyXG5cclxuICAgIGluZm8ucGFydGlhbCA9ICFpc0l0SW5UaGVDYWNoZTtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5mbyBwYXJ0aWFsOlwiLCBpbmZvLnBhcnRpYWwpO1xyXG4gICAgbGV0IGhhc01vcmUgPSB0cnVlO1xyXG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaS5maWVsZEtleSkgYXMgc3RyaW5nO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVzb2x2ZShrZXksIFwicG9zdHNcIikgYXMgc3RyaW5nW107XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcImhhc01vcmVcIik7XHJcbiAgICAgIGlmICghX2hhc01vcmUpIHtcclxuICAgICAgICBoYXNNb3JlID0gX2hhc01vcmUgYXMgYm9vbGVhbjtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdHM6XCIsIHJlc3VsdHMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX190eXBlbmFtZTogXCJQYWdpbmF0ZWRQb3N0c1wiLFxyXG4gICAgICBoYXNNb3JlLFxyXG4gICAgICBwb3N0czogcmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcclxuICAgIC8vIGxldCByZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAvLyBsZXQgcHJldk9mZnNldDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgIC8vICAgY29uc3QgeyBmaWVsZEtleSwgYXJndW1lbnRzOiBhcmdzIH0gPSBmaWVsZEluZm9zW2ldO1xyXG4gICAgLy8gICBpZiAoYXJncyA9PT0gbnVsbCB8fCAhY29tcGFyZUFyZ3MoZmllbGRBcmdzLCBhcmdzKSkge1xyXG4gICAgLy8gICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBjb25zdCBsaW5rcyA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZ1tdO1xyXG4gICAgLy8gICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gYXJnc1tjdXJzb3JBcmd1bWVudF07XHJcblxyXG4gICAgLy8gICBpZiAoXHJcbiAgICAvLyAgICAgbGlua3MgPT09IG51bGwgfHxcclxuICAgIC8vICAgICBsaW5rcy5sZW5ndGggPT09IDAgfHxcclxuICAgIC8vICAgICB0eXBlb2YgY3VycmVudE9mZnNldCAhPT0gJ251bWJlcidcclxuICAgIC8vICAgKSB7XHJcbiAgICAvLyAgICAgY29udGludWU7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmICghcHJldk9mZnNldCB8fCBjdXJyZW50T2Zmc2V0ID4gcHJldk9mZnNldCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlua3MubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcclxuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XHJcbiAgICAvLyAgICAgICByZXN1bHQucHVzaChsaW5rKTtcclxuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBjb25zdCB0ZW1wUmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlua3MubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcclxuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XHJcbiAgICAvLyAgICAgICB0ZW1wUmVzdWx0LnB1c2gobGluayk7XHJcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmVzdWx0ID0gWy4uLnRlbXBSZXN1bHQsIC4uLnJlc3VsdF07XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHByZXZPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IGhhc0N1cnJlbnRQYWdlID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIGZpZWxkTmFtZSwgZmllbGRBcmdzKTtcclxuICAgIC8vIGlmIChoYXNDdXJyZW50UGFnZSkge1xyXG4gICAgLy8gICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfSBlbHNlIGlmICghKGluZm8gYXMgYW55KS5zdG9yZS5zY2hlbWEpIHtcclxuICAgIC8vICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGluZm8ucGFydGlhbCA9IHRydWU7XHJcbiAgICAvLyAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnksIGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IGNvb2tpZSA9IFwiXCI7XHJcbiAgaWYgKGlzU2VydmVyKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHNlcnZlciBzaWRlIHJlbmRlcmluZ1wiKTtcclxuICAgIGNvb2tpZSA9IGN0eC5yZXEuaGVhZGVycy5jb29raWU7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICAgIGZldGNoT3B0aW9uczoge1xyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXHJcbiAgICAgIGhlYWRlcnM6IGNvb2tpZVxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2VzOiBbXHJcbiAgICAgIGRlZHVwRXhjaGFuZ2UsXHJcbiAgICAgIGNhY2hlRXhjaGFuZ2Uoe1xyXG4gICAgICAgIGtleXM6IHtcclxuICAgICAgICAgIFBhZ2luYXRlZFBvc3RzOiAoKSA9PiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb2x2ZXJzOiB7XHJcbiAgICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxyXG4gICAgICAgICAgICBwb3N0OiB2b3RlU3RhdHVzUG9zdCgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZXM6IHtcclxuICAgICAgICAgIE11dGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVBvc3Q6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX190eXBlbmFtZTogXCJQb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBpZDogKGFyZ3MgYXMgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzKS5pZCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdm90ZTogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBwb3N0SWQsIHZhbHVlIH0gPSBhcmdzIGFzIFZvdGVNdXRhdGlvblZhcmlhYmxlcztcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZEZyYWdtZW50KFxyXG4gICAgICAgICAgICAgICAgZ3FsYFxyXG4gICAgICAgICAgICAgICAgICBmcmFnbWVudCBfIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgeyBpZDogcG9zdElkIH0gYXMgYW55XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudm90ZVN0YXR1cyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9pbnRzID1cclxuICAgICAgICAgICAgICAgICAgKGRhdGEucG9pbnRzIGFzIG51bWJlcikgKyAoIWRhdGEudm90ZVN0YXR1cyA/IDEgOiAyKSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2FjaGUud3JpdGVGcmFnbWVudChcclxuICAgICAgICAgICAgICAgICAgZ3FsYFxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IF9fIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB2b3RlU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICB7IGlkOiBwb3N0SWQsIHBvaW50czogbmV3UG9pbnRzLCB2b3RlU3RhdHVzOiB2YWx1ZSB9IGFzIGFueVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjcmVhdGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKFwiUXVlcnlcIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IFwicG9zdHNcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShcIlF1ZXJ5XCIsIFwicG9zdHNcIiwgZmkuYXJndW1lbnRzIHx8IHt9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBlcnJvckV4Y2hhbmdlLFxyXG4gICAgICBzc3JFeGNoYW5nZSxcclxuICAgICAgZmV0Y2hFeGNoYW5nZSxcclxuICAgIF0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==