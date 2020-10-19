webpackHotUpdate_N_E("pages/index",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: PostSnippetFragmentDoc, RegularErrorFragmentDoc, RegularUserFragmentDoc, RegularUserResponseFragmentDoc, ChangePasswordDocument, useChangePasswordMutation, CreatePostDocument, useCreatePostMutation, DeletePostDocument, useDeletePostMutation, ForgotPasswordDocument, useForgotPasswordMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, UpdatePostDocument, useUpdatePostMutation, VoteDocument, useVoteMutation, MeDocument, useMeQuery, PostDocument, usePostQuery, PostsDocument, usePostsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSnippetFragmentDoc", function() { return PostSnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularErrorFragmentDoc", function() { return RegularErrorFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserFragmentDoc", function() { return RegularUserFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserResponseFragmentDoc", function() { return RegularUserResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDocument", function() { return ChangePasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangePasswordMutation", function() { return useChangePasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostDocument", function() { return CreatePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePostMutation", function() { return useCreatePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostDocument", function() { return DeletePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePostMutation", function() { return useDeletePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordDocument", function() { return ForgotPasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForgotPasswordMutation", function() { return useForgotPasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostDocument", function() { return UpdatePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePostMutation", function() { return useUpdatePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteDocument", function() { return VoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVoteMutation", function() { return useVoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDocument", function() { return PostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostQuery", function() { return usePostQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsDocument", function() { return PostsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostsQuery", function() { return usePostsQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");



var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$(),
    _s10 = $RefreshSig$(),
    _s11 = $RefreshSig$(),
    _s12 = $RefreshSig$();

function _templateObject16() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Posts($limit: Int!, $cursor: String) {\n  posts(cursor: $cursor, limit: $limit) {\n    hasMore\n    posts {\n      ...PostSnippet\n    }\n  }\n}\n    ", ""]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Post($id: Int!) {\n  post(id: $id) {\n    id\n    createdAt\n    updatedAt\n    title\n    points\n    text\n    voteStatus\n    creator {\n      id\n      username\n    }\n  }\n}\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Me {\n  me {\n    ...RegularUser\n  }\n}\n    ", ""]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Vote($value: Int!, $postId: Int!) {\n  vote(value: $value, postId: $postId)\n}\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation UpdatePost($id: Int!, $title: String!, $text: String!) {\n  updatePost(id: $id, title: $title, text: $text) {\n    id\n    title\n    text\n    textSnippet\n  }\n}\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Register($options: UsernamePasswordInput!) {\n  register(options: $options) {\n    ...RegularUserResponse\n  }\n}\n    ", ""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Logout {\n  logout\n}\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Login($usernameOrEmail: String!, $password: String!) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    ...RegularUserResponse\n  }\n}\n    ", ""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation DeletePost($id: Int!) {\n  deletePost(id: $id)\n}\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation CreatePost($input: PostInput!) {\n  createPost(input: $input) {\n    id\n    createdAt\n    updatedAt\n    title\n    text\n    points\n    creatorId\n  }\n}\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation ChangePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...RegularUserResponse\n  }\n}\n    ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}\n    ", "\n", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment RegularUser on User {\n  id\n  username\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment RegularError on FieldError {\n  field\n  message\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment PostSnippet on Post {\n  id\n  createdAt\n  updatedAt\n  title\n  points\n  textSnippet\n  voteStatus\n  creator {\n    id\n    username\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PostSnippetFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var RegularErrorFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
var RegularUserResponseFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4(), RegularErrorFragmentDoc, RegularUserFragmentDoc);
var ChangePasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject5(), RegularUserResponseFragmentDoc);
function useChangePasswordMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](ChangePasswordDocument);
}

_s(useChangePasswordMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var CreatePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject6());
function useCreatePostMutation() {
  _s2();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](CreatePostDocument);
}

_s2(useCreatePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var DeletePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject7());
function useDeletePostMutation() {
  _s3();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](DeletePostDocument);
}

_s3(useDeletePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var ForgotPasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject8());
function useForgotPasswordMutation() {
  _s4();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](ForgotPasswordDocument);
}

_s4(useForgotPasswordMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject9(), RegularUserResponseFragmentDoc);
function useLoginMutation() {
  _s5();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LoginDocument);
}

_s5(useLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject10());
function useLogoutMutation() {
  _s6();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LogoutDocument);
}

_s6(useLogoutMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject11(), RegularUserResponseFragmentDoc);
function useRegisterMutation() {
  _s7();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](RegisterDocument);
}

_s7(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var UpdatePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject12());
function useUpdatePostMutation() {
  _s8();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](UpdatePostDocument);
}

_s8(useUpdatePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var VoteDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject13());
function useVoteMutation() {
  _s9();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](VoteDocument);
}

_s9(useVoteMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject14(), RegularUserFragmentDoc);
function useMeQuery() {
  _s10();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}

_s10(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var PostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject15());
function usePostQuery() {
  _s11();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: PostDocument
  }, options));
}

_s11(usePostQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var PostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject16(), PostSnippetFragmentDoc);
function usePostsQuery() {
  _s12();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: PostsDocument
  }, options));
}

_s12(usePostsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJQb3N0U25pcHBldEZyYWdtZW50RG9jIiwiZ3FsIiwiUmVndWxhckVycm9yRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlckZyYWdtZW50RG9jIiwiUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jIiwiQ2hhbmdlUGFzc3dvcmREb2N1bWVudCIsInVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb24iLCJVcnFsIiwiQ3JlYXRlUG9zdERvY3VtZW50IiwidXNlQ3JlYXRlUG9zdE11dGF0aW9uIiwiRGVsZXRlUG9zdERvY3VtZW50IiwidXNlRGVsZXRlUG9zdE11dGF0aW9uIiwiRm9yZ290UGFzc3dvcmREb2N1bWVudCIsInVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24iLCJMb2dpbkRvY3VtZW50IiwidXNlTG9naW5NdXRhdGlvbiIsIkxvZ291dERvY3VtZW50IiwidXNlTG9nb3V0TXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlVwZGF0ZVBvc3REb2N1bWVudCIsInVzZVVwZGF0ZVBvc3RNdXRhdGlvbiIsIlZvdGVEb2N1bWVudCIsInVzZVZvdGVNdXRhdGlvbiIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5IiwiUG9zdERvY3VtZW50IiwidXNlUG9zdFF1ZXJ5IiwiUG9zdHNEb2N1bWVudCIsInVzZVBvc3RzUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFsQyxLQUFtREYsT0FBbkQsRUFBUDtBQUNEOztLQUZlRyxZO1VBQ1B0Qiw2Qzs7O0FBQ1I7QUFDTSxJQUFNdUIsYUFBYSxHQUFHN0Isa0RBQUgsc0JBU3BCRCxzQkFUb0IsQ0FBbkI7QUFXQSxTQUFTK0IsYUFBVCxHQUE0RjtBQUFBOztBQUFBLE1BQXJFTCxPQUFxRSx1RUFBSixFQUFJO0FBQ2pHLFNBQU9uQiw2Q0FBQTtBQUE0Qm9CLFNBQUssRUFBRUc7QUFBbkMsS0FBcURKLE9BQXJELEVBQVA7QUFDRDs7S0FGZUssYTtVQUNQeEIsNkM7OztBQUNSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE0ODMzMWM5OWYxYTViNDNmODc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCAqIGFzIFVycWwgZnJvbSAndXJxbCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE9taXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+Pjtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBoZWxsbzogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBvc3RzOiBQYWdpbmF0ZWRQb3N0cztcbiAgcG9zdD86IE1heWJlPFBvc3Q+O1xuICBtZT86IE1heWJlPFVzZXI+O1xuICB1c2VyczogQXJyYXk8VXNlcj47XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UG9zdHNBcmdzID0ge1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkUG9zdHMgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkUG9zdHMnO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIGhhc01vcmU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUG9zdCc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb2ludHM6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHZvdGVTdGF0dXM/OiBNYXliZTxTY2FsYXJzWydJbnQnXT47XG4gIGNyZWF0b3JJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRvcjogVXNlcjtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGV4dFNuaXBwZXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgdm90ZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjcmVhdGVQb3N0OiBQb3N0O1xuICB1cGRhdGVQb3N0PzogTWF5YmU8UG9zdD47XG4gIGRlbGV0ZVBvc3Q6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgY2hhbmdlUGFzc3dvcmQ6IFVzZXJSZXNwb25zZTtcbiAgZm9yZ290UGFzc3dvcmQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVm90ZUFyZ3MgPSB7XG4gIHZhbHVlOiBTY2FsYXJzWydJbnQnXTtcbiAgcG9zdElkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVQb3N0QXJncyA9IHtcbiAgaW5wdXQ6IFBvc3RJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVQb3N0QXJncyA9IHtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ2hhbmdlUGFzc3dvcmRBcmdzID0ge1xuICBuZXdQYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Gb3Jnb3RQYXNzd29yZEFyZ3MgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWVPckVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3RJbnB1dCA9IHtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VybmFtZVBhc3N3b3JkSW5wdXQgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0U25pcHBldEZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3BvaW50cycgfCAndGV4dFNuaXBwZXQnIHwgJ3ZvdGVTdGF0dXMnPlxuICAmIHsgY3JlYXRvcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJFcnJvckZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJVc2VyRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgJiBSZWd1bGFyRXJyb3JGcmFnbWVudFxuICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuZXdQYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNoYW5nZVBhc3N3b3JkOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogUG9zdElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlUG9zdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZVBvc3Q6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICYgUGljazxQb3N0LCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICd0aXRsZScgfCAndGV4dCcgfCAncG9pbnRzJyB8ICdjcmVhdG9ySWQnPlxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZGVsZXRlUG9zdCc+XG4pO1xuXG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZm9yZ290UGFzc3dvcmQnPlxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWVPckVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdsb2dvdXQnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlUG9zdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZVBvc3Q/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICd0aXRsZScgfCAndGV4dCcgfCAndGV4dFNuaXBwZXQnPlxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBWb3RlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHZhbHVlOiBTY2FsYXJzWydJbnQnXTtcbiAgcG9zdElkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFZvdGVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ3ZvdGUnPlxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBQb3N0UXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcG9zdD86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICYgUGljazxQb3N0LCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICd0aXRsZScgfCAncG9pbnRzJyB8ICd0ZXh0JyB8ICd2b3RlU3RhdHVzJz5cbiAgICAmIHsgY3JlYXRvcjogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJz5cbiAgICApIH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG59PjtcblxuXG5leHBvcnQgdHlwZSBQb3N0c1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHBvc3RzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFBvc3RzJyB9XG4gICAgJiBQaWNrPFBhZ2luYXRlZFBvc3RzLCAnaGFzTW9yZSc+XG4gICAgJiB7IHBvc3RzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICAgJiBQb3N0U25pcHBldEZyYWdtZW50XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCBjb25zdCBQb3N0U25pcHBldEZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFBvc3RTbmlwcGV0IG9uIFBvc3Qge1xuICBpZFxuICBjcmVhdGVkQXRcbiAgdXBkYXRlZEF0XG4gIHRpdGxlXG4gIHBvaW50c1xuICB0ZXh0U25pcHBldFxuICB2b3RlU3RhdHVzXG4gIGNyZWF0b3Ige1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhckVycm9yRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhckVycm9yIG9uIEZpZWxkRXJyb3Ige1xuICBmaWVsZFxuICBtZXNzYWdlXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyVXNlckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJVc2VyIG9uIFVzZXIge1xuICBpZFxuICB1c2VybmFtZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJVc2VyUmVzcG9uc2Ugb24gVXNlclJlc3BvbnNlIHtcbiAgZXJyb3JzIHtcbiAgICAuLi5SZWd1bGFyRXJyb3JcbiAgfVxuICB1c2VyIHtcbiAgICAuLi5SZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyRXJyb3JGcmFnbWVudERvY31cbiR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ2hhbmdlUGFzc3dvcmQoJHRva2VuOiBTdHJpbmchLCAkbmV3UGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgY2hhbmdlUGFzc3dvcmQodG9rZW46ICR0b2tlbiwgbmV3UGFzc3dvcmQ6ICRuZXdQYXNzd29yZCkge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxDaGFuZ2VQYXNzd29yZE11dGF0aW9uLCBDaGFuZ2VQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPihDaGFuZ2VQYXNzd29yZERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgQ3JlYXRlUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVBvc3QoJGlucHV0OiBQb3N0SW5wdXQhKSB7XG4gIGNyZWF0ZVBvc3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGlkXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gICAgdGl0bGVcbiAgICB0ZXh0XG4gICAgcG9pbnRzXG4gICAgY3JlYXRvcklkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlUG9zdE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxDcmVhdGVQb3N0TXV0YXRpb24sIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlUG9zdERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgRGVsZXRlUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIERlbGV0ZVBvc3QoJGlkOiBJbnQhKSB7XG4gIGRlbGV0ZVBvc3QoaWQ6ICRpZClcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVsZXRlUG9zdE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxEZWxldGVQb3N0TXV0YXRpb24sIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlUG9zdERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBGb3Jnb3RQYXNzd29yZCgkZW1haWw6IFN0cmluZyEpIHtcbiAgZm9yZ290UGFzc3dvcmQoZW1haWw6ICRlbWFpbClcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Rm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oRm9yZ290UGFzc3dvcmREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9naW4oJHVzZXJuYW1lT3JFbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lT3JFbWFpbDogJHVzZXJuYW1lT3JFbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbk11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9nb3V0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9nb3V0IHtcbiAgbG9nb3V0XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ291dE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KExvZ291dERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3Rlcigkb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0ISkge1xuICByZWdpc3RlcihvcHRpb25zOiAkb3B0aW9ucykge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgVXBkYXRlUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVBvc3QoJGlkOiBJbnQhLCAkdGl0bGU6IFN0cmluZyEsICR0ZXh0OiBTdHJpbmchKSB7XG4gIHVwZGF0ZVBvc3QoaWQ6ICRpZCwgdGl0bGU6ICR0aXRsZSwgdGV4dDogJHRleHQpIHtcbiAgICBpZFxuICAgIHRpdGxlXG4gICAgdGV4dFxuICAgIHRleHRTbmlwcGV0XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlUG9zdE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxVcGRhdGVQb3N0TXV0YXRpb24sIFVwZGF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oVXBkYXRlUG9zdERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgVm90ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFZvdGUoJHZhbHVlOiBJbnQhLCAkcG9zdElkOiBJbnQhKSB7XG4gIHZvdGUodmFsdWU6ICR2YWx1ZSwgcG9zdElkOiAkcG9zdElkKVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWb3RlTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFZvdGVNdXRhdGlvbiwgVm90ZU11dGF0aW9uVmFyaWFibGVzPihWb3RlRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWUge1xuICAgIC4uLlJlZ3VsYXJVc2VyXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxNZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxNZVF1ZXJ5Pih7IHF1ZXJ5OiBNZURvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBQb3N0RG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgUG9zdCgkaWQ6IEludCEpIHtcbiAgcG9zdChpZDogJGlkKSB7XG4gICAgaWRcbiAgICBjcmVhdGVkQXRcbiAgICB1cGRhdGVkQXRcbiAgICB0aXRsZVxuICAgIHBvaW50c1xuICAgIHRleHRcbiAgICB2b3RlU3RhdHVzXG4gICAgY3JlYXRvciB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUG9zdFF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8UG9zdFF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxQb3N0UXVlcnk+KHsgcXVlcnk6IFBvc3REb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgUG9zdHNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBQb3N0cygkbGltaXQ6IEludCEsICRjdXJzb3I6IFN0cmluZykge1xuICBwb3N0cyhjdXJzb3I6ICRjdXJzb3IsIGxpbWl0OiAkbGltaXQpIHtcbiAgICBoYXNNb3JlXG4gICAgcG9zdHMge1xuICAgICAgLi4uUG9zdFNuaXBwZXRcbiAgICB9XG4gIH1cbn1cbiAgICAke1Bvc3RTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3RzUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxQb3N0c1F1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxQb3N0c1F1ZXJ5Pih7IHF1ZXJ5OiBQb3N0c0RvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9