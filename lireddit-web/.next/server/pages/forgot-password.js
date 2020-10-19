module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/forgot-password.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\InputField.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputField = (_ref) => {
  let {
    label,
    textarea,
    size: _
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "textarea", "size"]);

  let InputOrTextarea = _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"];

  if (textarea) {
    InputOrTextarea = _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Textarea"];
  }

  const [field, {
    error
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props);
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    isInvalid: !!error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: field.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, label), __jsx(InputOrTextarea, _extends({}, field, props, {
    id: field.name,
    placeholder: props.placeholder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  })), error ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 16
    }
  }, error) : null);
};

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\components\\Wrapper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = ({
  children,
  variant = "regular"
}) => {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 8,
    mx: "auto",
    maxW: variant === "regular" ? "800px" : "400px",
    w: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: PostSnippetFragmentDoc, RegularErrorFragmentDoc, RegularUserFragmentDoc, RegularUserResponseFragmentDoc, ChangePasswordDocument, useChangePasswordMutation, CreatePostDocument, useCreatePostMutation, DeletePostDocument, useDeletePostMutation, ForgotPasswordDocument, useForgotPasswordMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, UpdatePostDocument, useUpdatePostMutation, VoteDocument, useVoteMutation, MeDocument, useMeQuery, PostDocument, usePostQuery, PostsDocument, usePostsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSnippetFragmentDoc", function() { return PostSnippetFragmentDoc; });
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const PostSnippetFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment PostSnippet on Post {
  id
  createdAt
  updatedAt
  title
  points
  textSnippet
  voteStatus
  creator {
    id
    username
  }
}
    `;
const RegularErrorFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularError on FieldError {
  field
  message
}
    `;
const RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularUser on User {
  id
  username
}
    `;
const RegularUserResponseFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
const ChangePasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
function useChangePasswordMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ChangePasswordDocument);
}
;
const CreatePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    createdAt
    updatedAt
    title
    text
    points
    creatorId
  }
}
    `;
function useCreatePostMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreatePostDocument);
}
;
const DeletePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation DeletePost($id: Int!) {
  deletePost(id: $id)
}
    `;
function useDeletePostMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](DeletePostDocument);
}
;
const ForgotPasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
function useForgotPasswordMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ForgotPasswordDocument);
}
;
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument);
}
;
const LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Logout {
  logout
}
    `;
function useLogoutMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LogoutDocument);
}
;
const RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RegisterDocument);
}
;
const UpdatePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation UpdatePost($id: Int!, $title: String!, $text: String!) {
  updatePost(id: $id, title: $title, text: $text) {
    id
    title
    text
    textSnippet
  }
}
    `;
function useUpdatePostMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](UpdatePostDocument);
}
;
const VoteDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Vote($value: Int!, $postId: Int!) {
  vote(value: $value, postId: $postId)
}
    `;
function useVoteMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](VoteDocument);
}
;
const MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
function useMeQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}
;
const PostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Post($id: Int!) {
  post(id: $id) {
    id
    createdAt
    updatedAt
    title
    points
    text
    voteStatus
    creator {
      id
      username
    }
  }
}
    `;
function usePostQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: PostDocument
  }, options));
}
;
const PostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Posts($limit: Int!, $cursor: String) {
  posts(cursor: $cursor, limit: $limit) {
    hasMore
    posts {
      ...PostSnippet
    }
  }
}
    ${PostSnippetFragmentDoc}`;
function usePostsQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: PostsDocument
  }, options));
}
;

/***/ }),

/***/ "./src/pages/forgot-password.tsx":
/*!***************************************!*\
  !*** ./src/pages/forgot-password.tsx ***!
  \***************************************/
/*! exports provided: ForgotPassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function() { return ForgotPassword; });
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-urql */ "next-urql");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
var _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\forgot-password.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const ForgotPassword = ({}) => {
  const [, forgotPassword] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__["useForgotPasswordMutation"])();
  const {
    0: complete,
    1: setComplete
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
    variant: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      email: ""
    },
    onSubmit: async values => {
      await forgotPassword(values);
      setComplete(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, ({
    isSubmitting
  }) => complete ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "If an account with that email exists, we sent you an email") : __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
    name: "email",
    placeholder: "email",
    label: "Email",
    type: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    mt: 4,
    type: "submit",
    isLoading: isSubmitting,
    variantColor: "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Forgot Password"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_2__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_6__["createUrqlClient"])(ForgotPassword));

/***/ }),

/***/ "./src/utils/betterUpdateQuery.tsx":
/*!*****************************************!*\
  !*** ./src/utils/betterUpdateQuery.tsx ***!
  \*****************************************/
/*! exports provided: betterUpdateQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "betterUpdateQuery", function() { return betterUpdateQuery; });
function betterUpdateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, data => fn(result, data));
}

/***/ }),

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrqlClient", function() { return createUrqlClient; });
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @urql/exchange-graphcache */ "@urql/exchange-graphcache");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./betterUpdateQuery */ "./src/utils/betterUpdateQuery.tsx");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wonka */ "wonka");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wonka__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isServer */ "./src/utils/isServer.ts");









const errorExchange = ({
  forward
}) => ops$ => {
  return Object(wonka__WEBPACK_IMPORTED_MODULE_5__["pipe"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_5__["tap"])(({
    error
  }) => {
    if (error === null || error === void 0 ? void 0 : error.message.includes("not authenticated")) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/login");
    }
  }));
};

const cursorPagination = () => {
  return (_parent, fieldArgs, cache, info) => {
    const {
      parentKey: entityKey,
      fieldName
    } = info;
    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter(info => info.fieldName === fieldName);
    const size = fieldInfos.length;

    if (size === 0) {
      return undefined;
    }

    const fieldKey = `${fieldName}(${Object(urql__WEBPACK_IMPORTED_MODULE_0__["stringifyVariables"])(fieldArgs)})`;
    const isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), "posts");
    info.partial = !isItInTheCache;
    let hasMore = true;
    const results = [];
    fieldInfos.forEach(fi => {
      const key = cache.resolveFieldByKey(entityKey, fi.fieldKey);
      const data = cache.resolve(key, "posts");

      const _hasMore = cache.resolve(key, "hasMore");

      if (!_hasMore) {
        hasMore = _hasMore;
      }

      results.push(...data);
    });
    console.log("results:", results);
    return {
      __typename: "PaginatedPosts",
      hasMore,
      posts: results
    };
  };
};

function invalidateAllPosts(cache) {
  const allFields = cache.inspectFields("Query");
  const fieldInfos = allFields.filter(info => info.fieldName === "posts");
  fieldInfos.forEach(fi => {
    cache.invalidate("Query", "posts", fi.arguments || {});
  });
}

const createUrqlClient = (ssrExchange, ctx) => {
  let cookie = "";

  if (Object(_isServer__WEBPACK_IMPORTED_MODULE_7__["isServer"])()) {
    var _ctx$req, _ctx$req$headers;

    console.log("We are server side rendering");
    cookie = ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : (_ctx$req$headers = _ctx$req.headers) === null || _ctx$req$headers === void 0 ? void 0 : _ctx$req$headers.cookie;
  }

  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include",
      headers: cookie ? {
        cookie
      } : undefined
    },
    exchanges: [urql__WEBPACK_IMPORTED_MODULE_0__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_1__["cacheExchange"])({
      keys: {
        PaginatedPosts: () => null
      },
      resolvers: {
        Query: {
          posts: cursorPagination() // post: voteStatusPost(),

        }
      },
      updates: {
        Mutation: {
          deletePost: (_result, args, cache, info) => {
            cache.invalidate({
              __typename: "Post",
              id: args.id
            });
          },
          vote: (_result, args, cache, info) => {
            const {
              postId,
              value
            } = args;
            const data = cache.readFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
                  fragment _ on Post {
                    id
                    points
                    voteStatus
                  }
                `, {
              id: postId
            });
            console.log(data);

            if (data) {
              if (data.voteStatus === value) {
                return;
              }

              const newPoints = data.points + (!data.voteStatus ? 1 : 2) * value;
              cache.writeFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
                    fragment __ on Post {
                      points
                      voteStatus
                    }
                  `, {
                id: postId,
                points: newPoints,
                voteStatus: value
              });
            }
          },
          createPost: (_result, args, cache, info) => {
            invalidateAllPosts(cache);
          },
          logout: (_result, args, cache, info) => {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
            }, _result, () => ({
              me: null
            }));
          },
          login: (_result, args, cache, info) => {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
            }, _result, (result, query) => {
              if (result.login.errors) {
                return query;
              } else {
                return {
                  me: result.login.user
                };
              }
            });
            invalidateAllPosts(cache);
          },
          register: (_result, args, cache, info) => {
            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_4__["betterUpdateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
            }, _result, (result, query) => {
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
    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_0__["fetchExchange"]]
  };
};

/***/ }),

/***/ "./src/utils/isServer.ts":
/*!*******************************!*\
  !*** ./src/utils/isServer.ts ***!
  \*******************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
const isServer = () => true;

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@urql/exchange-graphcache");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-urql":
/*!****************************!*\
  !*** external "next-urql" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-urql");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("urql");

/***/ }),

/***/ "wonka":
/*!************************!*\
  !*** external "wonka" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wonka");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZm9yZ290LXBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYmV0dGVyVXBkYXRlUXVlcnkudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9jcmVhdGVVcnFsQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pc1NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXVycWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndvbmthXCIiXSwibmFtZXMiOlsiSW5wdXRGaWVsZCIsImxhYmVsIiwidGV4dGFyZWEiLCJzaXplIiwiXyIsInByb3BzIiwiSW5wdXRPclRleHRhcmVhIiwiSW5wdXQiLCJUZXh0YXJlYSIsImZpZWxkIiwiZXJyb3IiLCJ1c2VGaWVsZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIldyYXBwZXIiLCJjaGlsZHJlbiIsInZhcmlhbnQiLCJQb3N0U25pcHBldEZyYWdtZW50RG9jIiwiZ3FsIiwiUmVndWxhckVycm9yRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlckZyYWdtZW50RG9jIiwiUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jIiwiQ2hhbmdlUGFzc3dvcmREb2N1bWVudCIsInVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb24iLCJVcnFsIiwiQ3JlYXRlUG9zdERvY3VtZW50IiwidXNlQ3JlYXRlUG9zdE11dGF0aW9uIiwiRGVsZXRlUG9zdERvY3VtZW50IiwidXNlRGVsZXRlUG9zdE11dGF0aW9uIiwiRm9yZ290UGFzc3dvcmREb2N1bWVudCIsInVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24iLCJMb2dpbkRvY3VtZW50IiwidXNlTG9naW5NdXRhdGlvbiIsIkxvZ291dERvY3VtZW50IiwidXNlTG9nb3V0TXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlVwZGF0ZVBvc3REb2N1bWVudCIsInVzZVVwZGF0ZVBvc3RNdXRhdGlvbiIsIlZvdGVEb2N1bWVudCIsInVzZVZvdGVNdXRhdGlvbiIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5IiwiUG9zdERvY3VtZW50IiwidXNlUG9zdFF1ZXJ5IiwiUG9zdHNEb2N1bWVudCIsInVzZVBvc3RzUXVlcnkiLCJGb3Jnb3RQYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkIiwiY29tcGxldGUiLCJzZXRDb21wbGV0ZSIsInVzZVN0YXRlIiwiZW1haWwiLCJ2YWx1ZXMiLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsImNhY2hlIiwicWkiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5IiwiZGF0YSIsImVycm9yRXhjaGFuZ2UiLCJmb3J3YXJkIiwib3BzJCIsInBpcGUiLCJ0YXAiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJpbmZvIiwicGFyZW50S2V5IiwiZW50aXR5S2V5IiwiZmllbGROYW1lIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWVsZEtleSIsInN0cmluZ2lmeVZhcmlhYmxlcyIsImlzSXRJblRoZUNhY2hlIiwicmVzb2x2ZSIsInJlc29sdmVGaWVsZEJ5S2V5IiwicGFydGlhbCIsImhhc01vcmUiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImZpIiwia2V5IiwiX2hhc01vcmUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIl9fdHlwZW5hbWUiLCJwb3N0cyIsImludmFsaWRhdGVBbGxQb3N0cyIsImludmFsaWRhdGUiLCJhcmd1bWVudHMiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsImlzU2VydmVyIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImRlbGV0ZVBvc3QiLCJfcmVzdWx0IiwiYXJncyIsImlkIiwidm90ZSIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50Iiwidm90ZVN0YXR1cyIsIm5ld1BvaW50cyIsInBvaW50cyIsIndyaXRlRnJhZ21lbnQiLCJjcmVhdGVQb3N0IiwibG9nb3V0IiwibWUiLCJsb2dpbiIsImVycm9ycyIsInVzZXIiLCJyZWdpc3RlciIsImZldGNoRXhjaGFuZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFF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QyxRQUFRLEdBQUcsVUFBakIsQzs7Ozs7Ozs7Ozs7QUNBUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBUZXh0YXJlYSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRleHRhcmVhPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHtcclxuICBsYWJlbCxcclxuICB0ZXh0YXJlYSxcclxuICBzaXplOiBfLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBsZXQgSW5wdXRPclRleHRhcmVhID0gSW5wdXQ7XHJcbiAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICBJbnB1dE9yVGV4dGFyZWEgPSBUZXh0YXJlYTtcclxuICB9XHJcbiAgY29uc3QgW2ZpZWxkLCB7IGVycm9yIH1dID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIWVycm9yfT5cclxuICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPXtmaWVsZC5uYW1lfT57bGFiZWx9PC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dE9yVGV4dGFyZWFcclxuICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgLz5cclxuICAgICAge2Vycm9yID8gPEZvcm1FcnJvck1lc3NhZ2U+e2Vycm9yfTwvRm9ybUVycm9yTWVzc2FnZT4gOiBudWxsfVxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFdyYXBwZXJWYXJpYW50ID0gXCJzbWFsbFwiIHwgXCJyZWd1bGFyXCI7XHJcblxyXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcclxuICB2YXJpYW50PzogV3JhcHBlclZhcmlhbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxXcmFwcGVyUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB2YXJpYW50ID0gXCJyZWd1bGFyXCIsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBtdD17OH1cclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgbWF4Vz17dmFyaWFudCA9PT0gXCJyZWd1bGFyXCIgPyBcIjgwMHB4XCIgOiBcIjQwMHB4XCJ9XHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0czogUGFnaW5hdGVkUG9zdHM7XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgdXNlcnM6IEFycmF5PFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVBvc3RzQXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRlZFBvc3RzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFBvc3RzJztcbiAgcG9zdHM6IEFycmF5PFBvc3Q+O1xuICBoYXNNb3JlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcG9pbnRzOiBTY2FsYXJzWydGbG9hdCddO1xuICB2b3RlU3RhdHVzPzogTWF5YmU8U2NhbGFyc1snSW50J10+O1xuICBjcmVhdG9ySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0b3I6IFVzZXI7XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRleHRTbmlwcGV0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHZvdGU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgdXBkYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICBkZWxldGVQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNoYW5nZVBhc3N3b3JkOiBVc2VyUmVzcG9uc2U7XG4gIGZvcmdvdFBhc3N3b3JkOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblZvdGVBcmdzID0ge1xuICB2YWx1ZTogU2NhbGFyc1snSW50J107XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUG9zdEFyZ3MgPSB7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNoYW5nZVBhc3N3b3JkQXJncyA9IHtcbiAgbmV3UGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRm9yZ290UGFzc3dvcmRBcmdzID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lT3JFbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0SW5wdXQgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdFNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgJiBQaWNrPFBvc3QsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3RpdGxlJyB8ICdwb2ludHMnIHwgJ3RleHRTbmlwcGV0JyB8ICd2b3RlU3RhdHVzJz5cbiAgJiB7IGNyZWF0b3I6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyRXJyb3JGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlckZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICYgUmVndWxhckVycm9yRnJhZ21lbnRcbiAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmV3UGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjaGFuZ2VQYXNzd29yZDogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFBvc3RJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVQb3N0OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3RleHQnIHwgJ3BvaW50cycgfCAnY3JlYXRvcklkJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2RlbGV0ZVBvc3QnPlxuKTtcblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2ZvcmdvdFBhc3N3b3JkJz5cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lT3JFbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVQb3N0PzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiBQaWNrPFBvc3QsICdpZCcgfCAndGl0bGUnIHwgJ3RleHQnIHwgJ3RleHRTbmlwcGV0Jz5cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgVm90ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB2YWx1ZTogU2NhbGFyc1snSW50J107XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBWb3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICd2b3RlJz5cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHBvc3Q/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3BvaW50cycgfCAndGV4dCcgfCAndm90ZVN0YXR1cyc+XG4gICAgJiB7IGNyZWF0b3I6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBwb3N0czogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRQb3N0cycgfVxuICAgICYgUGljazxQYWdpbmF0ZWRQb3N0cywgJ2hhc01vcmUnPlxuICAgICYgeyBwb3N0czogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAgICYgUG9zdFNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUG9zdFNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBQb3N0U25pcHBldCBvbiBQb3N0IHtcbiAgaWRcbiAgY3JlYXRlZEF0XG4gIHVwZGF0ZWRBdFxuICB0aXRsZVxuICBwb2ludHNcbiAgdGV4dFNuaXBwZXRcbiAgdm90ZVN0YXR1c1xuICBjcmVhdG9yIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJFcnJvckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJFcnJvciBvbiBGaWVsZEVycm9yIHtcbiAgZmllbGRcbiAgbWVzc2FnZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlciBvbiBVc2VyIHtcbiAgaWRcbiAgdXNlcm5hbWVcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlclJlc3BvbnNlIG9uIFVzZXJSZXNwb25zZSB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgdXNlciB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXNzd29yZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENoYW5nZVBhc3N3b3JkKCR0b2tlbjogU3RyaW5nISwgJG5ld1Bhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGNoYW5nZVBhc3N3b3JkKHRva2VuOiAkdG9rZW4sIG5ld1Bhc3N3b3JkOiAkbmV3UGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oQ2hhbmdlUGFzc3dvcmREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVQb3N0KCRpbnB1dDogUG9zdElucHV0ISkge1xuICBjcmVhdGVQb3N0KGlucHV0OiAkaW5wdXQpIHtcbiAgICBpZFxuICAgIGNyZWF0ZWRBdFxuICAgIHVwZGF0ZWRBdFxuICAgIHRpdGxlXG4gICAgdGV4dFxuICAgIHBvaW50c1xuICAgIGNyZWF0b3JJZFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Q3JlYXRlUG9zdE11dGF0aW9uLCBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVQb3N0KCRpZDogSW50ISkge1xuICBkZWxldGVQb3N0KGlkOiAkaWQpXG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248RGVsZXRlUG9zdE11dGF0aW9uLCBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KERlbGV0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRm9yZ290UGFzc3dvcmQoJGVtYWlsOiBTdHJpbmchKSB7XG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiAkZW1haWwpXG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEZvcmdvdFBhc3N3b3JkTXV0YXRpb24sIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+KEZvcmdvdFBhc3N3b3JkRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZU9yRW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZU9yRW1haWw6ICR1c2VybmFtZU9yRW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczogJG9wdGlvbnMpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVQb3N0KCRpZDogSW50ISwgJHRpdGxlOiBTdHJpbmchLCAkdGV4dDogU3RyaW5nISkge1xuICB1cGRhdGVQb3N0KGlkOiAkaWQsIHRpdGxlOiAkdGl0bGUsIHRleHQ6ICR0ZXh0KSB7XG4gICAgaWRcbiAgICB0aXRsZVxuICAgIHRleHRcbiAgICB0ZXh0U25pcHBldFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248VXBkYXRlUG9zdE11dGF0aW9uLCBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFZvdGVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBWb3RlKCR2YWx1ZTogSW50ISwgJHBvc3RJZDogSW50ISkge1xuICB2b3RlKHZhbHVlOiAkdmFsdWUsIHBvc3RJZDogJHBvc3RJZClcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVm90ZU11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxWb3RlTXV0YXRpb24sIFZvdGVNdXRhdGlvblZhcmlhYmxlcz4oVm90ZURvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICAuLi5SZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFBvc3QoJGlkOiBJbnQhKSB7XG4gIHBvc3QoaWQ6ICRpZCkge1xuICAgIGlkXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gICAgdGl0bGVcbiAgICBwb2ludHNcbiAgICB0ZXh0XG4gICAgdm90ZVN0YXR1c1xuICAgIGNyZWF0b3Ige1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3RRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPFBvc3RRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdFF1ZXJ5Pih7IHF1ZXJ5OiBQb3N0RG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IFBvc3RzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgUG9zdHMoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcpIHtcbiAgcG9zdHMoY3Vyc29yOiAkY3Vyc29yLCBsaW1pdDogJGxpbWl0KSB7XG4gICAgaGFzTW9yZVxuICAgIHBvc3RzIHtcbiAgICAgIC4uLlBvc3RTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtQb3N0U25pcHBldEZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8UG9zdHNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdHNRdWVyeT4oeyBxdWVyeTogUG9zdHNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07IiwiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkOiBSZWFjdC5GQzx7fT4gPSAoe30pID0+IHtcclxuICBjb25zdCBbLCBmb3Jnb3RQYXNzd29yZF0gPSB1c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uKCk7XHJcbiAgY29uc3QgW2NvbXBsZXRlLCBzZXRDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogXCJcIiB9fVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBhd2FpdCBmb3Jnb3RQYXNzd29yZCh2YWx1ZXMpO1xyXG4gICAgICAgICAgc2V0Q29tcGxldGUodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT5cclxuICAgICAgICAgIGNvbXBsZXRlID8gKFxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIElmIGFuIGFjY291bnQgd2l0aCB0aGF0IGVtYWlsIGV4aXN0cywgd2Ugc2VudCB5b3UgYW4gZW1haWxcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCkoRm9yZ290UGFzc3dvcmQpO1xyXG4iLCJpbXBvcnQgeyBRdWVyeUlucHV0LCBDYWNoZSB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmV0dGVyVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oXHJcbiAgY2FjaGU6IENhY2hlLFxyXG4gIHFpOiBRdWVyeUlucHV0LFxyXG4gIHJlc3VsdDogYW55LFxyXG4gIGZuOiAocjogUmVzdWx0LCBxOiBRdWVyeSkgPT4gUXVlcnlcclxuKSB7XHJcbiAgcmV0dXJuIGNhY2hlLnVwZGF0ZVF1ZXJ5KHFpLCAoZGF0YTogYW55KSA9PiBmbihyZXN1bHQsIGRhdGEgYXMgYW55KSBhcyBhbnkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcclxufSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciwgQ2FjaGUgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ291dE11dGF0aW9uLFxyXG4gIE1lUXVlcnksXHJcbiAgTWVEb2N1bWVudCxcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxyXG4gIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyxcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcblxyXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcclxuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nLFxyXG4gICAgICBcInBvc3RzXCJcclxuICAgICk7XHJcblxyXG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xyXG5cclxuICAgIGxldCBoYXNNb3JlID0gdHJ1ZTtcclxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcInBvc3RzXCIpIGFzIHN0cmluZ1tdO1xyXG5cclxuICAgICAgY29uc3QgX2hhc01vcmUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJoYXNNb3JlXCIpO1xyXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XHJcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHRzOlwiLCByZXN1bHRzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9fdHlwZW5hbWU6IFwiUGFnaW5hdGVkUG9zdHNcIixcclxuICAgICAgaGFzTW9yZSxcclxuICAgICAgcG9zdHM6IHJlc3VsdHMsXHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbnZhbGlkYXRlQWxsUG9zdHMoY2FjaGU6IENhY2hlKSB7XHJcbiAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhcIlF1ZXJ5XCIpO1xyXG4gIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gXCJwb3N0c1wiKTtcclxuICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICBjYWNoZS5pbnZhbGlkYXRlKFwiUXVlcnlcIiwgXCJwb3N0c1wiLCBmaS5hcmd1bWVudHMgfHwge30pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55LCBjdHg6IGFueSkgPT4ge1xyXG4gIGxldCBjb29raWUgPSBcIlwiO1xyXG4gIGlmIChpc1NlcnZlcigpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlIGFyZSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcIik7XHJcbiAgICBjb29raWUgPSBjdHg/LnJlcT8uaGVhZGVycz8uY29va2llO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXHJcbiAgICBmZXRjaE9wdGlvbnM6IHtcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gICAgICBoZWFkZXJzOiBjb29raWVcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgY29va2llLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgfSxcclxuICAgIGV4Y2hhbmdlczogW1xyXG4gICAgICBkZWR1cEV4Y2hhbmdlLFxyXG4gICAgICBjYWNoZUV4Y2hhbmdlKHtcclxuICAgICAgICBrZXlzOiB7XHJcbiAgICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmVyczoge1xyXG4gICAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgICAgcG9zdHM6IGN1cnNvclBhZ2luYXRpb24oKSxcclxuICAgICAgICAgICAgLy8gcG9zdDogdm90ZVN0YXR1c1Bvc3QoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWxldGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6IFwiUG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IChhcmdzIGFzIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcykuaWQsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gYXJncyBhcyBWb3RlTXV0YXRpb25WYXJpYWJsZXM7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRGcmFnbWVudChcclxuICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCB9IGFzIGFueVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50cyA9XHJcbiAgICAgICAgICAgICAgICAgIChkYXRhLnBvaW50cyBhcyBudW1iZXIpICsgKCFkYXRhLnZvdGVTdGF0dXMgPyAxIDogMikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBfXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgeyBpZDogcG9zdElkLCBwb2ludHM6IG5ld1BvaW50cywgdm90ZVN0YXR1czogdmFsdWUgfSBhcyBhbnlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZUFsbFBvc3RzKGNhY2hlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZUFsbFBvc3RzKGNhY2hlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIGVycm9yRXhjaGFuZ2UsXHJcbiAgICAgIHNzckV4Y2hhbmdlLFxyXG4gICAgICBmZXRjaEV4Y2hhbmdlLFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC11cnFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVycWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid29ua2FcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==