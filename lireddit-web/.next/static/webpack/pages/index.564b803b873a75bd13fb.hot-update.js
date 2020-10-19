webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UpdootSection */ "./src/components/UpdootSection.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    limit: 15,
    cursor: null
  }),
      variables = _useState[0],
      setVariables = _useState[1];

  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"])({
    variables: variables
  }),
      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePostsQuery, 1),
      _usePostsQuery2$ = _usePostsQuery2[0],
      data = _usePostsQuery2$.data,
      fetching = _usePostsQuery2$.fetching;

  var _useDeletePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useDeletePostMutation"])(),
      _useDeletePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDeletePostMutatio, 2),
      deletePost = _useDeletePostMutatio2[1];

  if (!fetching && !data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    }, " query failed for some reason");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, !data && fetching ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Loading...") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, data.posts.posts.map(function (p) {
    return !p ? null : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      key: p.id,
      p: 5,
      shadow: "md",
      borderWidth: "1px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__["UpdootSection"], {
      post: p,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      flex: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(p.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      fontSize: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 23
      }
    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, "posted by ", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      flex: 1,
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, p.textSnippet), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      ml: "auto",
      variantColor: "red",
      icon: "delete",
      "aria-label": "Delete Post",
      onClick: function onClick() {
        deletePost({
          id: p.id
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }))));
  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: function onClick() {
      setVariables({
        limit: variables.limit,
        cursor: data.posts.posts[data.posts.posts.length - 1].createdAt
      });
    },
    isLoading: fetching,
    m: "auto",
    my: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "load more")) : null);
};

_s(Index, "3SOKCqC37l04+sLQGUXoJJQiFk4=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["usePostsQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useDeletePostMutation"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_1__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_2__["createUrqlClient"], {
  ssr: true
})(Index));

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImxpbWl0IiwiY3Vyc29yIiwidmFyaWFibGVzIiwic2V0VmFyaWFibGVzIiwidXNlUG9zdHNRdWVyeSIsImRhdGEiLCJmZXRjaGluZyIsInVzZURlbGV0ZVBvc3RNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJwb3N0cyIsIm1hcCIsInAiLCJpZCIsInRpdGxlIiwiY3JlYXRvciIsInVzZXJuYW1lIiwidGV4dFNuaXBwZXQiLCJoYXNNb3JlIiwibGVuZ3RoIiwiY3JlYXRlZEF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIiwiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiUm91dGVyIiwicmVwbGFjZSIsImN1cnNvclBhZ2luYXRpb24iLCJfcGFyZW50IiwiZmllbGRBcmdzIiwiY2FjaGUiLCJpbmZvIiwiZW50aXR5S2V5IiwicGFyZW50S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJzaXplIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImZpZWxkS2V5Iiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJyZXNvbHZlIiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJwYXJ0aWFsIiwicmVzdWx0cyIsImZvckVhY2giLCJmaSIsImtleSIsIl9oYXNNb3JlIiwicHVzaCIsIl9fdHlwZW5hbWUiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsImlzU2VydmVyIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsIl9yZXN1bHQiLCJhcmdzIiwiaW52YWxpZGF0ZSIsInZvdGUiLCJwb3N0SWQiLCJ2YWx1ZSIsInJlYWRGcmFnbWVudCIsImdxbCIsInZvdGVTdGF0dXMiLCJuZXdQb2ludHMiLCJwb2ludHMiLCJ3cml0ZUZyYWdtZW50IiwiY3JlYXRlUG9zdCIsImFyZ3VtZW50cyIsImxvZ291dCIsImJldHRlclVwZGF0ZVF1ZXJ5IiwicXVlcnkiLCJNZURvY3VtZW50IiwibWUiLCJsb2dpbiIsInJlc3VsdCIsImVycm9ycyIsInVzZXIiLCJyZWdpc3RlciIsImZldGNoRXhjaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDO0FBQ3pDQyxTQUFLLEVBQUUsRUFEa0M7QUFFekNDLFVBQU0sRUFBRTtBQUZpQyxHQUFELENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0FDLFlBREE7O0FBQUEsdUJBS1dDLHdFQUFhLENBQUM7QUFDekNGLGFBQVMsRUFBVEE7QUFEeUMsR0FBRCxDQUx4QjtBQUFBO0FBQUE7QUFBQSxNQUtURyxJQUxTLG9CQUtUQSxJQUxTO0FBQUEsTUFLSEMsUUFMRyxvQkFLSEEsUUFMRzs7QUFBQSw4QkFTS0MsZ0ZBQXFCLEVBVDFCO0FBQUE7QUFBQSxNQVNUQyxVQVRTOztBQVVsQixNQUFJLENBQUNGLFFBQUQsSUFBYSxDQUFDRCxJQUFsQixFQUF3QjtBQUN0QixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQVA7QUFDRDs7QUFD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QUFBRTRELG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZqQixPQUhlLEVBSWYsVUFBQ29CLE1BQUQsRUFBU0osS0FBVCxFQUFtQjtBQUNqQixrQkFBSUksTUFBTSxDQUFDRCxLQUFQLENBQWFFLE1BQWpCLEVBQXlCO0FBQ3ZCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRCxLQUFQLENBQWFHO0FBRFosaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRCxXQXRFTztBQXVFUkMsa0JBQVEsRUFBRSxrQkFBQ3ZCLE9BQUQsRUFBVUMsSUFBVixFQUFnQjdDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN4QzBELHdGQUFpQixDQUNmM0QsS0FEZSxFQUVmO0FBQUU0RCxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmakIsT0FIZSxFQUlmLFVBQUNvQixNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlJLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIsdUJBQU9MLEtBQVA7QUFDRCxlQUZELE1BRU87QUFDTCx1QkFBTztBQUNMRSxvQkFBRSxFQUFFRSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JEO0FBRGYsaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRDtBQXRGTztBQURIO0FBVEcsS0FBRCxDQUZKLEVBc0dUL0UsYUF0R1MsRUF1R1R1QyxXQXZHUyxFQXdHVDBDLGtEQXhHUztBQVZOLEdBQVA7QUFxSEQsQ0EzSE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTY0YjgwM2I4NzNhNzViZDEzZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQgeyB1c2VEZWxldGVQb3N0TXV0YXRpb24sIHVzZVBvc3RzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgSWNvbkJ1dHRvbixcbiAgTGluayxcbiAgU3RhY2ssXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBVcGRvb3RTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXBkb290U2VjdGlvblwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3ZhcmlhYmxlcywgc2V0VmFyaWFibGVzXSA9IHVzZVN0YXRlKHtcbiAgICBsaW1pdDogMTUsXG4gICAgY3Vyc29yOiBudWxsIGFzIG51bGwgfCBzdHJpbmcsXG4gIH0pO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlcyxcbiAgfSk7XG5cbiAgY29uc3QgWywgZGVsZXRlUG9zdF0gPSB1c2VEZWxldGVQb3N0TXV0YXRpb24oKTtcbiAgaWYgKCFmZXRjaGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PiBxdWVyeSBmYWlsZWQgZm9yIHNvbWUgcmVhc29uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshZGF0YSAmJiBmZXRjaGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0+XG4gICAgICAgICAge2RhdGEhLnBvc3RzLnBvc3RzLm1hcCgocCkgPT5cbiAgICAgICAgICAgICFwID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgPEZsZXgga2V5PXtwLmlkfSBwPXs1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XG4gICAgICAgICAgICAgICAgPFVwZG9vdFNlY3Rpb24gcG9zdD17cH0gLz5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXg9ezF9PlxuICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9e2AvcG9zdC8ke3AuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj57cC50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5wb3N0ZWQgYnkge3AuY3JlYXRvci51c2VybmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmbGV4PXsxfSBtdD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAge3AudGV4dFNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBtbD1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBQb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVQb3N0KHsgaWQ6IHAuaWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuICAgICAge2RhdGEgJiYgZGF0YS5wb3N0cy5oYXNNb3JlID8gKFxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFZhcmlhYmxlcyh7XG4gICAgICAgICAgICAgICAgbGltaXQ6IHZhcmlhYmxlcy5saW1pdCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRhdGEucG9zdHMucG9zdHNbZGF0YS5wb3N0cy5wb3N0cy5sZW5ndGggLSAxXS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17ZmV0Y2hpbmd9XG4gICAgICAgICAgICBtPVwiYXV0b1wiXG4gICAgICAgICAgICBteT17OH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBsb2FkIG1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7IHNzcjogdHJ1ZSB9KShJbmRleCk7XG4iLCJpbXBvcnQge1xyXG4gIGRlZHVwRXhjaGFuZ2UsXHJcbiAgRXhjaGFuZ2UsXHJcbiAgZmV0Y2hFeGNoYW5nZSxcclxuICBzdHJpbmdpZnlWYXJpYWJsZXMsXHJcbn0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ291dE11dGF0aW9uLFxyXG4gIE1lUXVlcnksXHJcbiAgTWVEb2N1bWVudCxcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxyXG4gIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyxcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcblxyXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImVudGl0eSBrZXk6XCIsIGVudGl0eUtleSk7XHJcblxyXG4gICAgY29uc3QgZmllbGRLZXkgPSBgJHtmaWVsZE5hbWV9KCR7c3RyaW5naWZ5VmFyaWFibGVzKGZpZWxkQXJncyl9KWA7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkS2V5OlwiLCBmaWVsZEtleSk7XHJcbiAgICBjb25zdCBpc0l0SW5UaGVDYWNoZSA9IGNhY2hlLnJlc29sdmUoXHJcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZyxcclxuICAgICAgXCJwb3N0c1wiXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwicmVzb2x2ZUZpZWxkQnlLZXk6XCIsXHJcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpXHJcbiAgICApO1xyXG5cclxuICAgIGluZm8ucGFydGlhbCA9ICFpc0l0SW5UaGVDYWNoZTtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5mbyBwYXJ0aWFsOlwiLCBpbmZvLnBhcnRpYWwpO1xyXG4gICAgbGV0IGhhc01vcmUgPSB0cnVlO1xyXG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaS5maWVsZEtleSkgYXMgc3RyaW5nO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVzb2x2ZShrZXksIFwicG9zdHNcIikgYXMgc3RyaW5nW107XHJcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShrZXksIFwiaGFzTW9yZVwiKTtcclxuICAgICAgaWYgKCFfaGFzTW9yZSkge1xyXG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMucHVzaCguLi5kYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9fdHlwZW5hbWU6IFwiUGFnaW5hdGVkUG9zdHNcIixcclxuICAgICAgaGFzTW9yZSxcclxuICAgICAgcG9zdHM6IHJlc3VsdHMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XHJcbiAgICAvLyBsZXQgcmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8gbGV0IHByZXZPZmZzZXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAvLyAgIGNvbnN0IHsgZmllbGRLZXksIGFyZ3VtZW50czogYXJncyB9ID0gZmllbGRJbmZvc1tpXTtcclxuICAgIC8vICAgaWYgKGFyZ3MgPT09IG51bGwgfHwgIWNvbXBhcmVBcmdzKGZpZWxkQXJncywgYXJncykpIHtcclxuICAgIC8vICAgICBjb250aW51ZTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgY29uc3QgbGlua3MgPSBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmdbXTtcclxuICAgIC8vICAgY29uc3QgY3VycmVudE9mZnNldCA9IGFyZ3NbY3Vyc29yQXJndW1lbnRdO1xyXG5cclxuICAgIC8vICAgaWYgKFxyXG4gICAgLy8gICAgIGxpbmtzID09PSBudWxsIHx8XHJcbiAgICAvLyAgICAgbGlua3MubGVuZ3RoID09PSAwIHx8XHJcbiAgICAvLyAgICAgdHlwZW9mIGN1cnJlbnRPZmZzZXQgIT09ICdudW1iZXInXHJcbiAgICAvLyAgICkge1xyXG4gICAgLy8gICAgIGNvbnRpbnVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBpZiAoIXByZXZPZmZzZXQgfHwgY3VycmVudE9mZnNldCA+IHByZXZPZmZzZXQpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XHJcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgcmVzdWx0LnB1c2gobGluayk7XHJcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc3QgdGVtcFJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XHJcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xyXG4gICAgLy8gICAgICAgdGVtcFJlc3VsdC5wdXNoKGxpbmspO1xyXG4gICAgLy8gICAgICAgdmlzaXRlZC5hZGQobGluayk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJlc3VsdCA9IFsuLi50ZW1wUmVzdWx0LCAuLi5yZXN1bHRdO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBwcmV2T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBoYXNDdXJyZW50UGFnZSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZE5hbWUsIGZpZWxkQXJncyk7XHJcbiAgICAvLyBpZiAoaGFzQ3VycmVudFBhZ2UpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH0gZWxzZSBpZiAoIShpbmZvIGFzIGFueSkuc3RvcmUuc2NoZW1hKSB7XHJcbiAgICAvLyAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpbmZvLnBhcnRpYWwgPSB0cnVlO1xyXG4gICAgLy8gICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55LCBjdHg6IGFueSkgPT4ge1xyXG4gIGxldCBjb29raWUgPSBcIlwiO1xyXG4gIGlmIChpc1NlcnZlcigpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlIGFyZSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcIik7XHJcbiAgICBjb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXHJcbiAgICBmZXRjaE9wdGlvbnM6IHtcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gICAgICBoZWFkZXJzOiBjb29raWVcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgY29va2llLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgfSxcclxuICAgIGV4Y2hhbmdlczogW1xyXG4gICAgICBkZWR1cEV4Y2hhbmdlLFxyXG4gICAgICBjYWNoZUV4Y2hhbmdlKHtcclxuICAgICAgICBrZXlzOiB7XHJcbiAgICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmVyczoge1xyXG4gICAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgICAgcG9zdHM6IGN1cnNvclBhZ2luYXRpb24oKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWxldGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6IFwiUG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IChhcmdzIGFzIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcykuaWQsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gYXJncyBhcyBWb3RlTXV0YXRpb25WYXJpYWJsZXM7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRGcmFnbWVudChcclxuICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCB9IGFzIGFueVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50cyA9XHJcbiAgICAgICAgICAgICAgICAgIChkYXRhLnBvaW50cyBhcyBudW1iZXIpICsgKCFkYXRhLnZvdGVTdGF0dXMgPyAxIDogMikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBfXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgeyBpZDogcG9zdElkLCBwb2ludHM6IG5ld1BvaW50cywgdm90ZVN0YXR1czogdmFsdWUgfSBhcyBhbnlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhcIlF1ZXJ5XCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBcInBvc3RzXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoXCJRdWVyeVwiLCBcInBvc3RzXCIsIGZpLmFyZ3VtZW50cyB8fCB7fSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9nb3V0TXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gKHsgbWU6IG51bGwgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZXJyb3JFeGNoYW5nZSxcclxuICAgICAgc3NyRXhjaGFuZ2UsXHJcbiAgICAgIGZldGNoRXhjaGFuZ2UsXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=