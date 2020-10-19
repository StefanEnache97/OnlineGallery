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

      var _hasMore = cache.resolve(key, "hasMore");

      if (!_hasMore) {
        hasMore = _hasMore;
      }

      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data));
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
          posts: cursorPagination()
        }
      },
      updates: {
        Mutation: {
          vote: function vote(_result, args, cache, info) {
            console.log("we are searching fragments for post");
            var _ref3 = args,
                postId = _ref3.postId,
                value = _ref3.value;
            var data = cache.readFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()), {
              id: postId
            });

            if (data) {
              if (data.voteStatus === value) {
                console.log("the voteStatus is the same as the value");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImN1cnNvclBhZ2luYXRpb24iLCJfcGFyZW50IiwiZmllbGRBcmdzIiwiY2FjaGUiLCJpbmZvIiwiZW50aXR5S2V5IiwicGFyZW50S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJzaXplIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImZpZWxkS2V5Iiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJyZXNvbHZlIiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZmkiLCJrZXkiLCJkYXRhIiwiX2hhc01vcmUiLCJwdXNoIiwiX190eXBlbmFtZSIsInBvc3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwiY3R4IiwiY29va2llIiwiaXNTZXJ2ZXIiLCJyZXEiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsImtleXMiLCJQYWdpbmF0ZWRQb3N0cyIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwidm90ZSIsIl9yZXN1bHQiLCJhcmdzIiwicG9zdElkIiwidmFsdWUiLCJyZWFkRnJhZ21lbnQiLCJncWwiLCJpZCIsInZvdGVTdGF0dXMiLCJuZXdQb2ludHMiLCJwb2ludHMiLCJ3cml0ZUZyYWdtZW50IiwiY3JlYXRlUG9zdCIsImludmFsaWRhdGUiLCJhcmd1bWVudHMiLCJsb2dvdXQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekQsV0FBT0Msa0RBQUksQ0FDVEYsT0FBTyxDQUFDQyxJQUFELENBREUsRUFFVEUsaURBQUcsQ0FBQyxpQkFBZTtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakIsVUFBSUEsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSixFQUFrRDtBQUNoREMsMERBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEtBSkUsQ0FGTSxDQUFYO0FBUUQsR0FUK0I7QUFBQSxDQUFoQzs7QUFXQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQWdCO0FBQ3ZDLFNBQU8sVUFBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsRUFBcUM7QUFBQSxRQUN2QkMsU0FEdUIsR0FDRUQsSUFERixDQUNsQ0UsU0FEa0M7QUFBQSxRQUNaQyxTQURZLEdBQ0VILElBREYsQ0FDWkcsU0FEWTtBQUcxQyxRQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkosU0FBcEIsQ0FBbEI7QUFDQSxRQUFNSyxVQUFVLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixVQUFDUCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxD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LEVBQUUsa0JBQUN2QixPQUFELEVBQVVDLElBQVYsRUFBZ0JuRCxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDeENnRSx3RkFBaUIsQ0FDZmpFLEtBRGUsRUFFZjtBQUFFa0UsbUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLGFBRmUsRUFHZmpCLE9BSGUsRUFJZixVQUFDb0IsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2pCLGtCQUFJSSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0Q7QUFqRk87QUFESDtBQVRHLEtBQUQsQ0FGSixFQWlHVHJGLGFBakdTLEVBa0dUNEMsV0FsR1MsRUFtR1QyQyxrREFuR1M7QUFWTixHQUFQO0FBZ0hELENBdEhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5OWRiMzUwZWFhOTQwODQ3Yjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGRlZHVwRXhjaGFuZ2UsXHJcbiAgRXhjaGFuZ2UsXHJcbiAgZmV0Y2hFeGNoYW5nZSxcclxuICBzdHJpbmdpZnlWYXJpYWJsZXMsXHJcbn0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ291dE11dGF0aW9uLFxyXG4gIE1lUXVlcnksXHJcbiAgTWVEb2N1bWVudCxcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxyXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XHJcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gXCIuL2lzU2VydmVyXCI7XHJcblxyXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gKG9wcyQpID0+IHtcclxuICByZXR1cm4gcGlwZShcclxuICAgIGZvcndhcmQob3BzJCksXHJcbiAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xyXG4gICAgICBpZiAoZXJyb3I/Lm1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYXV0aGVudGljYXRlZFwiKSkge1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBjdXJzb3JQYWdpbmF0aW9uID0gKCk6IFJlc29sdmVyID0+IHtcclxuICByZXR1cm4gKF9wYXJlbnQsIGZpZWxkQXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcclxuXHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XHJcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XHJcbiAgICBjb25zdCBzaXplID0gZmllbGRJbmZvcy5sZW5ndGg7XHJcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZW50aXR5IGtleTpcIiwgZW50aXR5S2V5KTtcclxuXHJcbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcclxuICAgIGNvbnNvbGUubG9nKFwiZmllbGRLZXk6XCIsIGZpZWxkS2V5KTtcclxuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nLFxyXG4gICAgICBcInBvc3RzXCJcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJyZXNvbHZlRmllbGRCeUtleTpcIixcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSlcclxuICAgICk7XHJcblxyXG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmZvIHBhcnRpYWw6XCIsIGluZm8ucGFydGlhbCk7XHJcbiAgICBsZXQgaGFzTW9yZSA9IHRydWU7XHJcbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJwb3N0c1wiKSBhcyBzdHJpbmdbXTtcclxuICAgICAgY29uc3QgX2hhc01vcmUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJoYXNNb3JlXCIpO1xyXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XHJcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX190eXBlbmFtZTogXCJQYWdpbmF0ZWRQb3N0c1wiLFxyXG4gICAgICBoYXNNb3JlLFxyXG4gICAgICBwb3N0czogcmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcclxuICAgIC8vIGxldCByZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAvLyBsZXQgcHJldk9mZnNldDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgIC8vICAgY29uc3QgeyBmaWVsZEtleSwgYXJndW1lbnRzOiBhcmdzIH0gPSBmaWVsZEluZm9zW2ldO1xyXG4gICAgLy8gICBpZiAoYXJncyA9PT0gbnVsbCB8fCAhY29tcGFyZUFyZ3MoZmllbGRBcmdzLCBhcmdzKSkge1xyXG4gICAgLy8gICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBjb25zdCBsaW5rcyA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZ1tdO1xyXG4gICAgLy8gICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gYXJnc1tjdXJzb3JBcmd1bWVudF07XHJcblxyXG4gICAgLy8gICBpZiAoXHJcbiAgICAvLyAgICAgbGlua3MgPT09IG51bGwgfHxcclxuICAgIC8vICAgICBsaW5rcy5sZW5ndGggPT09IDAgfHxcclxuICAgIC8vICAgICB0eXBlb2YgY3VycmVudE9mZnNldCAhPT0gJ251bWJlcidcclxuICAgIC8vICAgKSB7XHJcbiAgICAvLyAgICAgY29udGludWU7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmICghcHJldk9mZnNldCB8fCBjdXJyZW50T2Zmc2V0ID4gcHJldk9mZnNldCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlua3MubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcclxuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XHJcbiAgICAvLyAgICAgICByZXN1bHQucHVzaChsaW5rKTtcclxuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBjb25zdCB0ZW1wUmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlua3MubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcclxuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XHJcbiAgICAvLyAgICAgICB0ZW1wUmVzdWx0LnB1c2gobGluayk7XHJcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmVzdWx0ID0gWy4uLnRlbXBSZXN1bHQsIC4uLnJlc3VsdF07XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHByZXZPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IGhhc0N1cnJlbnRQYWdlID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIGZpZWxkTmFtZSwgZmllbGRBcmdzKTtcclxuICAgIC8vIGlmIChoYXNDdXJyZW50UGFnZSkge1xyXG4gICAgLy8gICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfSBlbHNlIGlmICghKGluZm8gYXMgYW55KS5zdG9yZS5zY2hlbWEpIHtcclxuICAgIC8vICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGluZm8ucGFydGlhbCA9IHRydWU7XHJcbiAgICAvLyAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnksIGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IGNvb2tpZSA9IFwiXCI7XHJcbiAgaWYgKGlzU2VydmVyKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHNlcnZlciBzaWRlIHJlbmRlcmluZ1wiKTtcclxuICAgIGNvb2tpZSA9IGN0eC5yZXEuaGVhZGVycy5jb29raWU7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICAgIGZldGNoT3B0aW9uczoge1xyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXHJcbiAgICAgIGhlYWRlcnM6IGNvb2tpZVxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2VzOiBbXHJcbiAgICAgIGRlZHVwRXhjaGFuZ2UsXHJcbiAgICAgIGNhY2hlRXhjaGFuZ2Uoe1xyXG4gICAgICAgIGtleXM6IHtcclxuICAgICAgICAgIFBhZ2luYXRlZFBvc3RzOiAoKSA9PiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb2x2ZXJzOiB7XHJcbiAgICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZXM6IHtcclxuICAgICAgICAgIE11dGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2UgYXJlIHNlYXJjaGluZyBmcmFnbWVudHMgZm9yIHBvc3RcIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBwb3N0SWQsIHZhbHVlIH0gPSBhcmdzIGFzIFZvdGVNdXRhdGlvblZhcmlhYmxlcztcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZEZyYWdtZW50KFxyXG4gICAgICAgICAgICAgICAgZ3FsYFxyXG4gICAgICAgICAgICAgICAgICBmcmFnbWVudCBfIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgeyBpZDogcG9zdElkIH0gYXMgYW55XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudm90ZVN0YXR1cyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdm90ZVN0YXR1cyBpcyB0aGUgc2FtZSBhcyB0aGUgdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50cyA9XHJcbiAgICAgICAgICAgICAgICAgIChkYXRhLnBvaW50cyBhcyBudW1iZXIpICsgKCFkYXRhLnZvdGVTdGF0dXMgPyAxIDogMikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBfXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgeyBpZDogcG9zdElkLCBwb2ludHM6IG5ld1BvaW50cywgdm90ZVN0YXR1czogdmFsdWUgfSBhcyBhbnlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhcIlF1ZXJ5XCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBcInBvc3RzXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoXCJRdWVyeVwiLCBcInBvc3RzXCIsIGZpLmFyZ3VtZW50cyB8fCB7fSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9nb3V0TXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gKHsgbWU6IG51bGwgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZXJyb3JFeGNoYW5nZSxcclxuICAgICAgc3NyRXhjaGFuZ2UsXHJcbiAgICAgIGZldGNoRXhjaGFuZ2UsXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=