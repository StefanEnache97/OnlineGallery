webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: RegularErrorFragmentDoc, RegularUserFragmentDoc, RegularUserResponseFragmentDoc, ChangePasswordDocument, useChangePasswordMutation, CreatePostDocument, useCreatePostMutation, ForgotPasswordDocument, useForgotPasswordMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, MeDocument, useMeQuery, PostsDocument, usePostsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularErrorFragmentDoc", function() { return RegularErrorFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserFragmentDoc", function() { return RegularUserFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserResponseFragmentDoc", function() { return RegularUserResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDocument", function() { return ChangePasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangePasswordMutation", function() { return useChangePasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostDocument", function() { return CreatePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePostMutation", function() { return useCreatePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordDocument", function() { return ForgotPasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForgotPasswordMutation", function() { return useForgotPasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
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
    _s8 = $RefreshSig$();

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Posts($limit: Int!, $cursor: String) {\n  posts(cursor: $cursor, limit: $limit) {\n    hasMore\n    posts {\n      id\n      createdAt\n      updatedAt\n      title\n      textSnippet\n      creator {\n        id\n        username\n      }\n    }\n  }\n}\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Me {\n  me {\n    ...RegularUser\n  }\n}\n    ", ""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Register($options: UsernamePasswordInput!) {\n  register(options: $options) {\n    ...RegularUserResponse\n  }\n}\n    ", ""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Logout {\n  logout\n}\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Login($usernameOrEmail: String!, $password: String!) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    ...RegularUserResponse\n  }\n}\n    ", ""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation CreatePost($input: PostInput!) {\n  createPost(input: $input) {\n    id\n    createdAt\n    updatedAt\n    title\n    text\n    points\n    creatorId\n  }\n}\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation ChangePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...RegularUserResponse\n  }\n}\n    ", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}\n    ", "\n", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment RegularUser on User {\n  id\n  username\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    fragment RegularError on FieldError {\n  field\n  message\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var RegularErrorFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var RegularUserResponseFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3(), RegularErrorFragmentDoc, RegularUserFragmentDoc);
var ChangePasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4(), RegularUserResponseFragmentDoc);
function useChangePasswordMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](ChangePasswordDocument);
}

_s(useChangePasswordMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var CreatePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject5());
function useCreatePostMutation() {
  _s2();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](CreatePostDocument);
}

_s2(useCreatePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var ForgotPasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject6());
function useForgotPasswordMutation() {
  _s3();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](ForgotPasswordDocument);
}

_s3(useForgotPasswordMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject7(), RegularUserResponseFragmentDoc);
function useLoginMutation() {
  _s4();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LoginDocument);
}

_s4(useLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject8());
function useLogoutMutation() {
  _s5();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](LogoutDocument);
}

_s5(useLogoutMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject9(), RegularUserResponseFragmentDoc);
function useRegisterMutation() {
  _s6();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](RegisterDocument);
}

_s6(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject10(), RegularUserFragmentDoc);
function useMeQuery() {
  _s7();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}

_s7(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;
var PostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject11());
function usePostsQuery() {
  _s8();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: PostsDocument
  }, options));
}

_s8(usePostsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJSZWd1bGFyRXJyb3JGcmFnbWVudERvYyIsImdxbCIsIlJlZ3VsYXJVc2VyRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2MiLCJDaGFuZ2VQYXNzd29yZERvY3VtZW50IiwidXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiIsIlVycWwiLCJDcmVhdGVQb3N0RG9jdW1lbnQiLCJ1c2VDcmVhdGVQb3N0TXV0YXRpb24iLCJGb3Jnb3RQYXNzd29yZERvY3VtZW50IiwidXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbiIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiTG9nb3V0RG9jdW1lbnQiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsIlJlZ2lzdGVyRG9jdW1lbnQiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJQb3N0c0RvY3VtZW50IiwidXNlUG9zdHNRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBMlFPLElBQU1BLHVCQUF1QixHQUFHQyxrREFBSCxtQkFBN0I7QUFNQSxJQUFNQyxzQkFBc0IsR0FBR0Qsa0RBQUgsb0JBQTVCO0FBTUEsSUFBTUUsOEJBQThCLEdBQUdGLGtEQUFILHFCQVNyQ0QsdUJBVHFDLEVBVXpDRSxzQkFWeUMsQ0FBcEM7QUFXQSxJQUFNRSxzQkFBc0IsR0FBR0gsa0RBQUgscUJBTTdCRSw4QkFONkIsQ0FBNUI7QUFRQSxTQUFTRSx5QkFBVCxHQUFxQztBQUFBOztBQUMxQyxTQUFPQyxnREFBQSxDQUEwRUYsc0JBQTFFLENBQVA7QUFDRDs7R0FGZUMseUI7VUFDUEMsZ0Q7OztBQUNSO0FBQ00sSUFBTUMsa0JBQWtCLEdBQUdOLGtEQUFILG9CQUF4QjtBQWNBLFNBQVNPLHFCQUFULEdBQWlDO0FBQUE7O0FBQ3RDLFNBQU9GLGdEQUFBLENBQWtFQyxrQkFBbEUsQ0FBUDtBQUNEOztJQUZlQyxxQjtVQUNQRixnRDs7O0FBQ1I7QUFDTSxJQUFNRyxzQkFBc0IsR0FBR1Isa0RBQUgsb0JBQTVCO0FBTUEsU0FBU1MseUJBQVQsR0FBcUM7QUFBQTs7QUFDMUMsU0FBT0osZ0RBQUEsQ0FBMEVHLHNCQUExRSxDQUFQO0FBQ0Q7O0lBRmVDLHlCO1VBQ1BKLGdEOzs7QUFDUjtBQUNNLElBQU1LLGFBQWEsR0FBR1Ysa0RBQUgscUJBTXBCRSw4QkFOb0IsQ0FBbkI7QUFRQSxTQUFTUyxnQkFBVCxHQUE0QjtBQUFBOztBQUNqQyxTQUFPTixnREFBQSxDQUF3REssYUFBeEQsQ0FBUDtBQUNEOztJQUZlQyxnQjtVQUNQTixnRDs7O0FBQ1I7QUFDTSxJQUFNTyxjQUFjLEdBQUdaLGtEQUFILG9CQUFwQjtBQU1BLFNBQVNhLGlCQUFULEdBQTZCO0FBQUE7O0FBQ2xDLFNBQU9SLGdEQUFBLENBQTBETyxjQUExRCxDQUFQO0FBQ0Q7O0lBRmVDLGlCO1VBQ1BSLGdEOzs7QUFDUjtBQUNNLElBQU1TLGdCQUFnQixHQUFHZCxrREFBSCxxQkFNdkJFLDhCQU51QixDQUF0QjtBQVFBLFNBQVNhLG1CQUFULEdBQStCO0FBQUE7O0FBQ3BDLFNBQU9WLGdEQUFBLENBQThEUyxnQkFBOUQsQ0FBUDtBQUNEOztJQUZlQyxtQjtVQUNQVixnRDs7O0FBQ1I7QUFDTSxJQUFNVyxVQUFVLEdBQUdoQixrREFBSCxzQkFNakJDLHNCQU5pQixDQUFoQjtBQVFBLFNBQVNnQixVQUFULEdBQXNGO0FBQUE7O0FBQUEsTUFBbEVDLE9BQWtFLHVFQUFKLEVBQUk7QUFDM0YsU0FBT2IsNkNBQUE7QUFBeUJjLFNBQUssRUFBRUg7QUFBaEMsS0FBK0NFLE9BQS9DLEVBQVA7QUFDRDs7SUFGZUQsVTtVQUNQWiw2Qzs7O0FBQ1I7QUFDTSxJQUFNZSxhQUFhLEdBQUdwQixrREFBSCxxQkFBbkI7QUFtQkEsU0FBU3FCLGFBQVQsR0FBNEY7QUFBQTs7QUFBQSxNQUFyRUgsT0FBcUUsdUVBQUosRUFBSTtBQUNqRyxTQUFPYiw2Q0FBQTtBQUE0QmMsU0FBSyxFQUFFQztBQUFuQyxLQUFxREYsT0FBckQsRUFBUDtBQUNEOztJQUZlRyxhO1VBQ1BoQiw2Qzs7O0FBQ1IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLXBvc3QuNDQwMmQ1OTM1ZWI4MTU5NWRmOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIGhlbGxvOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcG9zdHM6IFBhZ2luYXRlZFBvc3RzO1xuICBwb3N0PzogTWF5YmU8UG9zdD47XG4gIG1lPzogTWF5YmU8VXNlcj47XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0c0FyZ3MgPSB7XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRQb3N0cyA9IHtcbiAgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRQb3N0cyc7XG4gIHBvc3RzOiBBcnJheTxQb3N0PjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgX190eXBlbmFtZT86ICdQb3N0JztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBvaW50czogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRvcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdG9yOiBVc2VyO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0U25pcHBldDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICB2b3RlOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNyZWF0ZVBvc3Q6IFBvc3Q7XG4gIHVwZGF0ZVBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgZGVsZXRlUG9zdDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjaGFuZ2VQYXNzd29yZDogVXNlclJlc3BvbnNlO1xuICBmb3Jnb3RQYXNzd29yZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICByZWdpc3RlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Wb3RlQXJncyA9IHtcbiAgdmFsdWU6IFNjYWxhcnNbJ0ludCddO1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVBvc3RBcmdzID0ge1xuICBpbnB1dDogUG9zdElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlUG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNoYW5nZVBhc3N3b3JkQXJncyA9IHtcbiAgbmV3UGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRm9yZ290UGFzc3dvcmRBcmdzID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lT3JFbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0SW5wdXQgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUmVndWxhckVycm9yRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAmIFJlZ3VsYXJFcnJvckZyYWdtZW50XG4gICk+PiwgdXNlcj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUmVndWxhclVzZXJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5ld1Bhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY2hhbmdlUGFzc3dvcmQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlUG9zdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiBQaWNrPFBvc3QsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3RpdGxlJyB8ICd0ZXh0JyB8ICdwb2ludHMnIHwgJ2NyZWF0b3JJZCc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2ZvcmdvdFBhc3N3b3JkJz5cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lT3JFbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBtZT86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUmVndWxhclVzZXJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBQb3N0c1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcG9zdHM6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkUG9zdHMnIH1cbiAgICAmIFBpY2s8UGFnaW5hdGVkUG9zdHMsICdoYXNNb3JlJz5cbiAgICAmIHsgcG9zdHM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3RleHRTbmlwcGV0Jz5cbiAgICAgICYgeyBjcmVhdG9yOiAoXG4gICAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJz5cbiAgICAgICkgfVxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUmVndWxhckVycm9yRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhckVycm9yIG9uIEZpZWxkRXJyb3Ige1xuICBmaWVsZFxuICBtZXNzYWdlXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyVXNlckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJVc2VyIG9uIFVzZXIge1xuICBpZFxuICB1c2VybmFtZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJVc2VyUmVzcG9uc2Ugb24gVXNlclJlc3BvbnNlIHtcbiAgZXJyb3JzIHtcbiAgICAuLi5SZWd1bGFyRXJyb3JcbiAgfVxuICB1c2VyIHtcbiAgICAuLi5SZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyRXJyb3JGcmFnbWVudERvY31cbiR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ2hhbmdlUGFzc3dvcmQoJHRva2VuOiBTdHJpbmchLCAkbmV3UGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgY2hhbmdlUGFzc3dvcmQodG9rZW46ICR0b2tlbiwgbmV3UGFzc3dvcmQ6ICRuZXdQYXNzd29yZCkge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxDaGFuZ2VQYXNzd29yZE11dGF0aW9uLCBDaGFuZ2VQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPihDaGFuZ2VQYXNzd29yZERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgQ3JlYXRlUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVBvc3QoJGlucHV0OiBQb3N0SW5wdXQhKSB7XG4gIGNyZWF0ZVBvc3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGlkXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gICAgdGl0bGVcbiAgICB0ZXh0XG4gICAgcG9pbnRzXG4gICAgY3JlYXRvcklkXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlUG9zdE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxDcmVhdGVQb3N0TXV0YXRpb24sIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlUG9zdERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBGb3Jnb3RQYXNzd29yZCgkZW1haWw6IFN0cmluZyEpIHtcbiAgZm9yZ290UGFzc3dvcmQoZW1haWw6ICRlbWFpbClcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Rm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oRm9yZ290UGFzc3dvcmREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9naW4oJHVzZXJuYW1lT3JFbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lT3JFbWFpbDogJHVzZXJuYW1lT3JFbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbk11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9nb3V0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9nb3V0IHtcbiAgbG9nb3V0XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ291dE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KExvZ291dERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3Rlcigkb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0ISkge1xuICByZWdpc3RlcihvcHRpb25zOiAkb3B0aW9ucykge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICAuLi5SZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgUG9zdHNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBQb3N0cygkbGltaXQ6IEludCEsICRjdXJzb3I6IFN0cmluZykge1xuICBwb3N0cyhjdXJzb3I6ICRjdXJzb3IsIGxpbWl0OiAkbGltaXQpIHtcbiAgICBoYXNNb3JlXG4gICAgcG9zdHMge1xuICAgICAgaWRcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgICB0aXRsZVxuICAgICAgdGV4dFNuaXBwZXRcbiAgICAgIGNyZWF0b3Ige1xuICAgICAgICBpZFxuICAgICAgICB1c2VybmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8UG9zdHNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdHNRdWVyeT4oeyBxdWVyeTogUG9zdHNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==