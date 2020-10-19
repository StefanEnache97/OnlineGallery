webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: PostSnippetFragmentDoc, RegularErrorFragmentDoc, RegularUserFragmentDoc, RegularUserResponseFragmentDoc, ChangePasswordDocument, useChangePasswordMutation, CreatePostDocument, useCreatePostMutation, DeletePostDocument, useDeletePostMutation, ForgotPasswordDocument, useForgotPasswordMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, VoteDocument, useVoteMutation, MeDocument, useMeQuery, PostDocument, usePostQuery, PostsDocument, usePostsQuery */
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
    _s11 = $RefreshSig$();

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Posts($limit: Int!, $cursor: String) {\n  posts(cursor: $cursor, limit: $limit) {\n    hasMore\n    posts {\n      ...PostSnippet\n    }\n  }\n}\n    ", ""]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Post($id: Int!) {\n  post(id: $id) {\n    id\n    createdAt\n    updatedAt\n    title\n    points\n    text\n    voteStatus\n    creator {\n      id\n      username\n    }\n  }\n}\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Me {\n  me {\n    ...RegularUser\n  }\n}\n    ", ""]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Vote($value: Int!, $postId: Int!) {\n  vote(value: $value, postId: $postId)\n}\n    "]);

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
var VoteDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject12());
function useVoteMutation() {
  _s8();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](VoteDocument);
}

_s8(useVoteMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject13(), RegularUserFragmentDoc);
function useMeQuery() {
  _s9();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}

_s9(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var PostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject14());
function usePostQuery() {
  _s10();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: PostDocument
  }, options));
}

_s10(usePostQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var PostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject15(), PostSnippetFragmentDoc);
function usePostsQuery() {
  _s11();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: PostsDocument
  }, options));
}

_s11(usePostsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJQb3N0U25pcHBldEZyYWdtZW50RG9jIiwiZ3FsIiwiUmVndWxhckVycm9yRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlckZyYWdtZW50RG9jIiwiUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jIiwiQ2hhbmdlUGFzc3dvcmREb2N1bWVudCIsInVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb24iLCJVcnFsIiwiQ3JlYXRlUG9zdERvY3VtZW50IiwidXNlQ3JlYXRlUG9zdE11dGF0aW9uIiwiRGVsZXRlUG9zdERvY3VtZW50IiwidXNlRGVsZXRlUG9zdE11dGF0aW9uIiwiRm9yZ290UGFzc3dvcmREb2N1bWVudCIsInVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24iLCJMb2dpbkRvY3VtZW50IiwidXNlTG9naW5NdXRhdGlvbiIsIkxvZ291dERvY3VtZW50IiwidXNlTG9nb3V0TXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlZvdGVEb2N1bWVudCIsInVzZVZvdGVNdXRhdGlvbiIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5IiwiUG9zdERvY3VtZW50IiwidXNlUG9zdFF1ZXJ5IiwiUG9zdHNEb2N1bWVudCIsInVzZVBvc3RzUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBdVRPLElBQU1BLHNCQUFz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QUVHO0FBQW5DLEtBQXFESixPQUFyRCxFQUFQO0FBQ0Q7O0tBRmVLLGE7VUFDUHRCLDZDOzs7QUFDUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uYjI4Y2JhY2Y5MDQyNTRmOTVhMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIGhlbGxvOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcG9zdHM6IFBhZ2luYXRlZFBvc3RzO1xuICBwb3N0PzogTWF5YmU8UG9zdD47XG4gIG1lPzogTWF5YmU8VXNlcj47XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0c0FyZ3MgPSB7XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRQb3N0cyA9IHtcbiAgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRQb3N0cyc7XG4gIHBvc3RzOiBBcnJheTxQb3N0PjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgX190eXBlbmFtZT86ICdQb3N0JztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBvaW50czogU2NhbGFyc1snRmxvYXQnXTtcbiAgdm90ZVN0YXR1cz86IE1heWJlPFNjYWxhcnNbJ0ludCddPjtcbiAgY3JlYXRvcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdG9yOiBVc2VyO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0U25pcHBldDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICB2b3RlOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNyZWF0ZVBvc3Q6IFBvc3Q7XG4gIHVwZGF0ZVBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgZGVsZXRlUG9zdDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjaGFuZ2VQYXNzd29yZDogVXNlclJlc3BvbnNlO1xuICBmb3Jnb3RQYXNzd29yZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICByZWdpc3RlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Wb3RlQXJncyA9IHtcbiAgdmFsdWU6IFNjYWxhcnNbJ0ludCddO1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVBvc3RBcmdzID0ge1xuICBpbnB1dDogUG9zdElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlUG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DaGFuZ2VQYXNzd29yZEFyZ3MgPSB7XG4gIG5ld1Bhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkZvcmdvdFBhc3N3b3JkQXJncyA9IHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZU9yRW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdElucHV0ID0ge1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJuYW1lUGFzc3dvcmRJbnB1dCA9IHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3RTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICYgUGljazxQb3N0LCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICd0aXRsZScgfCAncG9pbnRzJyB8ICd0ZXh0U25pcHBldCcgfCAndm90ZVN0YXR1cyc+XG4gICYgeyBjcmVhdG9yOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhckVycm9yRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAmIFJlZ3VsYXJFcnJvckZyYWdtZW50XG4gICk+PiwgdXNlcj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUmVndWxhclVzZXJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5ld1Bhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY2hhbmdlUGFzc3dvcmQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlUG9zdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiBQaWNrPFBvc3QsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3RpdGxlJyB8ICd0ZXh0JyB8ICdwb2ludHMnIHwgJ2NyZWF0b3JJZCc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdkZWxldGVQb3N0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdmb3Jnb3RQYXNzd29yZCc+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZU9yRW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ291dCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVm90ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB2YWx1ZTogU2NhbGFyc1snSW50J107XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBWb3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICd2b3RlJz5cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHBvc3Q/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3BvaW50cycgfCAndGV4dCcgfCAndm90ZVN0YXR1cyc+XG4gICAgJiB7IGNyZWF0b3I6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBwb3N0czogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRQb3N0cycgfVxuICAgICYgUGljazxQYWdpbmF0ZWRQb3N0cywgJ2hhc01vcmUnPlxuICAgICYgeyBwb3N0czogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAgICYgUG9zdFNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUG9zdFNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBQb3N0U25pcHBldCBvbiBQb3N0IHtcbiAgaWRcbiAgY3JlYXRlZEF0XG4gIHVwZGF0ZWRBdFxuICB0aXRsZVxuICBwb2ludHNcbiAgdGV4dFNuaXBwZXRcbiAgdm90ZVN0YXR1c1xuICBjcmVhdG9yIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJFcnJvckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJFcnJvciBvbiBGaWVsZEVycm9yIHtcbiAgZmllbGRcbiAgbWVzc2FnZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlciBvbiBVc2VyIHtcbiAgaWRcbiAgdXNlcm5hbWVcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlclJlc3BvbnNlIG9uIFVzZXJSZXNwb25zZSB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgdXNlciB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXNzd29yZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENoYW5nZVBhc3N3b3JkKCR0b2tlbjogU3RyaW5nISwgJG5ld1Bhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGNoYW5nZVBhc3N3b3JkKHRva2VuOiAkdG9rZW4sIG5ld1Bhc3N3b3JkOiAkbmV3UGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oQ2hhbmdlUGFzc3dvcmREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVQb3N0KCRpbnB1dDogUG9zdElucHV0ISkge1xuICBjcmVhdGVQb3N0KGlucHV0OiAkaW5wdXQpIHtcbiAgICBpZFxuICAgIGNyZWF0ZWRBdFxuICAgIHVwZGF0ZWRBdFxuICAgIHRpdGxlXG4gICAgdGV4dFxuICAgIHBvaW50c1xuICAgIGNyZWF0b3JJZFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Q3JlYXRlUG9zdE11dGF0aW9uLCBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVQb3N0KCRpZDogSW50ISkge1xuICBkZWxldGVQb3N0KGlkOiAkaWQpXG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248RGVsZXRlUG9zdE11dGF0aW9uLCBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KERlbGV0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRm9yZ290UGFzc3dvcmQoJGVtYWlsOiBTdHJpbmchKSB7XG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiAkZW1haWwpXG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEZvcmdvdFBhc3N3b3JkTXV0YXRpb24sIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+KEZvcmdvdFBhc3N3b3JkRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZU9yRW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZU9yRW1haWw6ICR1c2VybmFtZU9yRW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczogJG9wdGlvbnMpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFZvdGVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBWb3RlKCR2YWx1ZTogSW50ISwgJHBvc3RJZDogSW50ISkge1xuICB2b3RlKHZhbHVlOiAkdmFsdWUsIHBvc3RJZDogJHBvc3RJZClcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVm90ZU11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxWb3RlTXV0YXRpb24sIFZvdGVNdXRhdGlvblZhcmlhYmxlcz4oVm90ZURvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICAuLi5SZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFBvc3QoJGlkOiBJbnQhKSB7XG4gIHBvc3QoaWQ6ICRpZCkge1xuICAgIGlkXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gICAgdGl0bGVcbiAgICBwb2ludHNcbiAgICB0ZXh0XG4gICAgdm90ZVN0YXR1c1xuICAgIGNyZWF0b3Ige1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3RRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPFBvc3RRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdFF1ZXJ5Pih7IHF1ZXJ5OiBQb3N0RG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IFBvc3RzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgUG9zdHMoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcpIHtcbiAgcG9zdHMoY3Vyc29yOiAkY3Vyc29yLCBsaW1pdDogJGxpbWl0KSB7XG4gICAgaGFzTW9yZVxuICAgIHBvc3RzIHtcbiAgICAgIC4uLlBvc3RTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtQb3N0U25pcHBldEZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8UG9zdHNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdHNRdWVyeT4oeyBxdWVyeTogUG9zdHNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==