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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/register.tsx");
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

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/toErrorMap */ "./src/utils/toErrorMap.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ "next-urql");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
var _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\register.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Register = ({}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const [, register] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useRegisterMutation"])();
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
    variant: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    onSubmit: async (values, {
      setErrors
    }) => {
      var _response$data, _response$data2;

      const response = await register({
        options: values
      });

      if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.register.errors) {
        setErrors(Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__["toErrorMap"])(response.data.register.errors));
      } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.register.user) {
        //worked
        router.push("/");
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, ({
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
    name: "username",
    placeholder: "username",
    label: "Username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
    name: "email",
    placeholder: "email",
    label: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
    name: "password",
    placeholder: "password",
    label: "Password",
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    mt: 4,
    type: "submit",
    isLoading: isSubmitting,
    variantColor: "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "register"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_8__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_9__["createUrqlClient"])(Register));

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

/***/ "./src/utils/toErrorMap.ts":
/*!*********************************!*\
  !*** ./src/utils/toErrorMap.ts ***!
  \*********************************/
/*! exports provided: toErrorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toErrorMap", function() { return toErrorMap; });
const toErrorMap = errors => {
  const errorMap = {};
  errors.forEach(({
    field,
    message
  }) => {
    errorMap[field] = message;
  });
  return errorMap;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9iZXR0ZXJVcGRhdGVRdWVyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2lzU2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90b0Vycm9yTWFwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdXJxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid29ua2FcIiJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkIiwibGFiZWwiLCJ0ZXh0YXJlYSIsInNpemUiLCJfIiwicHJvcHMiLCJJbnB1dE9yVGV4dGFyZWEiLCJJbnB1dCIsIlRleHRhcmVhIiwiZmllbGQiLCJlcnJvciIsInVzZUZpZWxkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiV3JhcHBlciIsImNoaWxkcmVuIiwidmFyaWFudCIsIlBvc3RTbmlwcGV0RnJhZ21lbnREb2MiLCJncWwiLCJSZWd1bGFyRXJyb3JGcmFnbWVudERvYyIsIlJlZ3VsYXJVc2VyRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2MiLCJDaGFuZ2VQYXNzd29yZERvY3VtZW50IiwidXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiIsIlVycWwiLCJDcmVhdGVQb3N0RG9jdW1lbnQiLCJ1c2VDcmVhdGVQb3N0TXV0YXRpb24iLCJEZWxldGVQb3N0RG9jdW1lbnQiLCJ1c2VEZWxldGVQb3N0TXV0YXRpb24iLCJGb3Jnb3RQYXNzd29yZERvY3VtZW50IiwidXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbiIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiTG9nb3V0RG9jdW1lbnQiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsIlJlZ2lzdGVyRG9jdW1lbnQiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiVXBkYXRlUG9zdERvY3VtZW50IiwidXNlVXBkYXRlUG9zdE11dGF0aW9uIiwiVm90ZURvY3VtZW50IiwidXNlVm90ZU11dGF0aW9uIiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJQb3N0RG9jdW1lbnQiLCJ1c2VQb3N0UXVlcnkiLCJQb3N0c0RvY3VtZW50IiwidXNlUG9zdHNRdWVyeSIsIlJlZ2lzdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVnaXN0ZXIiLCJlbWFpbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvcnMiLCJ0b0Vycm9yTWFwIiwidXNlciIsInB1c2giLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsImNhY2hlIiwicWkiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5IiwiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwicGlwZSIsInRhcCIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsIlJvdXRlciIsInJlcGxhY2UiLCJjdXJzb3JQYWdpbmF0aW9uIiwiX3BhcmVudCIsImZpZWxkQXJncyIsImluZm8iLCJwYXJlbnRLZXkiLCJlbnRpdHlLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZpZWxkS2V5Iiwic3RyaW5naWZ5VmFyaWFibGVzIiwiaXNJdEluVGhlQ2FjaGUiLCJyZXNvbHZlIiwicmVzb2x2ZUZpZWxkQnlLZXkiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZmkiLCJrZXkiLCJfaGFzTW9yZSIsImNvbnNvbGUiLCJsb2ciLCJfX3R5cGVuYW1lIiwicG9zdHMiLCJpbnZhbGlkYXRlQWxsUG9zdHMiLCJpbnZhbGlkYXRlIiwiYXJndW1lbnRzIiwic3NyRXhjaGFuZ2UiLCJjdHgiLCJjb29raWUiLCJpc1NlcnZlciIsInJlcSIsImhlYWRlcnMiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwia2V5cyIsIlBhZ2luYXRlZFBvc3RzIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJkZWxldGVQb3N0IiwiX3Jlc3VsdCIsImFyZ3MiLCJpZCIsInZvdGUiLCJwb3N0SWQiLCJ2YWx1ZSIsInJlYWRGcmFnbWVudCIsInZvdGVTdGF0dXMiLCJuZXdQb2ludHMiLCJwb2ludHMiLCJ3cml0ZUZyYWdtZW50IiwiY3JlYXRlUG9zdCIsImxvZ291dCIsIm1lIiwibG9naW4iLCJmZXRjaEV4Y2hhbmdlIiwiZXJyb3JNYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QzVJLEtBQUQsQ0FBUixHQUFrQnFFLE9BQWxCO0FBQ0QsR0FGRDtBQUlBLFNBQU91RSxRQUFQO0FBQ0QsQ0FQTSxDOzs7Ozs7Ozs7OztBQ0ZQLDRDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBUZXh0YXJlYSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRleHRhcmVhPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHtcclxuICBsYWJlbCxcclxuICB0ZXh0YXJlYSxcclxuICBzaXplOiBfLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBsZXQgSW5wdXRPclRleHRhcmVhID0gSW5wdXQ7XHJcbiAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICBJbnB1dE9yVGV4dGFyZWEgPSBUZXh0YXJlYTtcclxuICB9XHJcbiAgY29uc3QgW2ZpZWxkLCB7IGVycm9yIH1dID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIWVycm9yfT5cclxuICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPXtmaWVsZC5uYW1lfT57bGFiZWx9PC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dE9yVGV4dGFyZWFcclxuICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgLz5cclxuICAgICAge2Vycm9yID8gPEZvcm1FcnJvck1lc3NhZ2U+e2Vycm9yfTwvRm9ybUVycm9yTWVzc2FnZT4gOiBudWxsfVxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFdyYXBwZXJWYXJpYW50ID0gXCJzbWFsbFwiIHwgXCJyZWd1bGFyXCI7XHJcblxyXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcclxuICB2YXJpYW50PzogV3JhcHBlclZhcmlhbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxXcmFwcGVyUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB2YXJpYW50ID0gXCJyZWd1bGFyXCIsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBtdD17OH1cclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgbWF4Vz17dmFyaWFudCA9PT0gXCJyZWd1bGFyXCIgPyBcIjgwMHB4XCIgOiBcIjQwMHB4XCJ9XHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0czogUGFnaW5hdGVkUG9zdHM7XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgdXNlcnM6IEFycmF5PFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVBvc3RzQXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRlZFBvc3RzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFBvc3RzJztcbiAgcG9zdHM6IEFycmF5PFBvc3Q+O1xuICBoYXNNb3JlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcG9pbnRzOiBTY2FsYXJzWydGbG9hdCddO1xuICB2b3RlU3RhdHVzPzogTWF5YmU8U2NhbGFyc1snSW50J10+O1xuICBjcmVhdG9ySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0b3I6IFVzZXI7XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRleHRTbmlwcGV0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHZvdGU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgdXBkYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICBkZWxldGVQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNoYW5nZVBhc3N3b3JkOiBVc2VyUmVzcG9uc2U7XG4gIGZvcmdvdFBhc3N3b3JkOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblZvdGVBcmdzID0ge1xuICB2YWx1ZTogU2NhbGFyc1snSW50J107XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUG9zdEFyZ3MgPSB7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNoYW5nZVBhc3N3b3JkQXJncyA9IHtcbiAgbmV3UGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRm9yZ290UGFzc3dvcmRBcmdzID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lT3JFbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0SW5wdXQgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdFNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgJiBQaWNrPFBvc3QsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3RpdGxlJyB8ICdwb2ludHMnIHwgJ3RleHRTbmlwcGV0JyB8ICd2b3RlU3RhdHVzJz5cbiAgJiB7IGNyZWF0b3I6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyRXJyb3JGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlckZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICYgUmVndWxhckVycm9yRnJhZ21lbnRcbiAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmV3UGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjaGFuZ2VQYXNzd29yZDogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFBvc3RJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVQb3N0OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3RleHQnIHwgJ3BvaW50cycgfCAnY3JlYXRvcklkJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2RlbGV0ZVBvc3QnPlxuKTtcblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2ZvcmdvdFBhc3N3b3JkJz5cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lT3JFbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVQb3N0PzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiBQaWNrPFBvc3QsICdpZCcgfCAndGl0bGUnIHwgJ3RleHQnIHwgJ3RleHRTbmlwcGV0Jz5cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgVm90ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB2YWx1ZTogU2NhbGFyc1snSW50J107XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBWb3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICd2b3RlJz5cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHBvc3Q/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGl0bGUnIHwgJ3BvaW50cycgfCAndGV4dCcgfCAndm90ZVN0YXR1cyc+XG4gICAgJiB7IGNyZWF0b3I6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBwb3N0czogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRQb3N0cycgfVxuICAgICYgUGljazxQYWdpbmF0ZWRQb3N0cywgJ2hhc01vcmUnPlxuICAgICYgeyBwb3N0czogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAgICYgUG9zdFNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUG9zdFNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBQb3N0U25pcHBldCBvbiBQb3N0IHtcbiAgaWRcbiAgY3JlYXRlZEF0XG4gIHVwZGF0ZWRBdFxuICB0aXRsZVxuICBwb2ludHNcbiAgdGV4dFNuaXBwZXRcbiAgdm90ZVN0YXR1c1xuICBjcmVhdG9yIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJFcnJvckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJFcnJvciBvbiBGaWVsZEVycm9yIHtcbiAgZmllbGRcbiAgbWVzc2FnZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlciBvbiBVc2VyIHtcbiAgaWRcbiAgdXNlcm5hbWVcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlclJlc3BvbnNlIG9uIFVzZXJSZXNwb25zZSB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgdXNlciB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXNzd29yZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENoYW5nZVBhc3N3b3JkKCR0b2tlbjogU3RyaW5nISwgJG5ld1Bhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGNoYW5nZVBhc3N3b3JkKHRva2VuOiAkdG9rZW4sIG5ld1Bhc3N3b3JkOiAkbmV3UGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oQ2hhbmdlUGFzc3dvcmREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVQb3N0KCRpbnB1dDogUG9zdElucHV0ISkge1xuICBjcmVhdGVQb3N0KGlucHV0OiAkaW5wdXQpIHtcbiAgICBpZFxuICAgIGNyZWF0ZWRBdFxuICAgIHVwZGF0ZWRBdFxuICAgIHRpdGxlXG4gICAgdGV4dFxuICAgIHBvaW50c1xuICAgIGNyZWF0b3JJZFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248Q3JlYXRlUG9zdE11dGF0aW9uLCBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVQb3N0KCRpZDogSW50ISkge1xuICBkZWxldGVQb3N0KGlkOiAkaWQpXG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248RGVsZXRlUG9zdE11dGF0aW9uLCBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KERlbGV0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRm9yZ290UGFzc3dvcmQoJGVtYWlsOiBTdHJpbmchKSB7XG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiAkZW1haWwpXG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEZvcmdvdFBhc3N3b3JkTXV0YXRpb24sIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+KEZvcmdvdFBhc3N3b3JkRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZU9yRW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZU9yRW1haWw6ICR1c2VybmFtZU9yRW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczogJG9wdGlvbnMpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVQb3N0KCRpZDogSW50ISwgJHRpdGxlOiBTdHJpbmchLCAkdGV4dDogU3RyaW5nISkge1xuICB1cGRhdGVQb3N0KGlkOiAkaWQsIHRpdGxlOiAkdGl0bGUsIHRleHQ6ICR0ZXh0KSB7XG4gICAgaWRcbiAgICB0aXRsZVxuICAgIHRleHRcbiAgICB0ZXh0U25pcHBldFxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVBvc3RNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248VXBkYXRlUG9zdE11dGF0aW9uLCBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVBvc3REb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFZvdGVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBWb3RlKCR2YWx1ZTogSW50ISwgJHBvc3RJZDogSW50ISkge1xuICB2b3RlKHZhbHVlOiAkdmFsdWUsIHBvc3RJZDogJHBvc3RJZClcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVm90ZU11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxWb3RlTXV0YXRpb24sIFZvdGVNdXRhdGlvblZhcmlhYmxlcz4oVm90ZURvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICAuLi5SZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07XG5leHBvcnQgY29uc3QgUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFBvc3QoJGlkOiBJbnQhKSB7XG4gIHBvc3QoaWQ6ICRpZCkge1xuICAgIGlkXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gICAgdGl0bGVcbiAgICBwb2ludHNcbiAgICB0ZXh0XG4gICAgdm90ZVN0YXR1c1xuICAgIGNyZWF0b3Ige1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3RRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPFBvc3RRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdFF1ZXJ5Pih7IHF1ZXJ5OiBQb3N0RG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59O1xuZXhwb3J0IGNvbnN0IFBvc3RzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgUG9zdHMoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcpIHtcbiAgcG9zdHMoY3Vyc29yOiAkY3Vyc29yLCBsaW1pdDogJGxpbWl0KSB7XG4gICAgaGFzTW9yZVxuICAgIHBvc3RzIHtcbiAgICAgIC4uLlBvc3RTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtQb3N0U25pcHBldEZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8UG9zdHNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdHNRdWVyeT4oeyBxdWVyeTogUG9zdHNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIElucHV0LFxyXG4gIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIi4uL3V0aWxzL3RvRXJyb3JNYXBcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcclxuXHJcbmludGVyZmFjZSByZWdpc3RlclByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgWywgcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6IFwiXCIsIHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldEVycm9ycyB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyKHsgb3B0aW9uczogdmFsdWVzIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnModG9FcnJvck1hcChyZXNwb25zZS5kYXRhLnJlZ2lzdGVyLmVycm9ycykpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhPy5yZWdpc3Rlci51c2VyKSB7XHJcbiAgICAgICAgICAgIC8vd29ya2VkXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbGFiZWw9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICByZWdpc3RlclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCkoUmVnaXN0ZXIpO1xyXG4iLCJpbXBvcnQgeyBRdWVyeUlucHV0LCBDYWNoZSB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmV0dGVyVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oXHJcbiAgY2FjaGU6IENhY2hlLFxyXG4gIHFpOiBRdWVyeUlucHV0LFxyXG4gIHJlc3VsdDogYW55LFxyXG4gIGZuOiAocjogUmVzdWx0LCBxOiBRdWVyeSkgPT4gUXVlcnlcclxuKSB7XHJcbiAgcmV0dXJuIGNhY2hlLnVwZGF0ZVF1ZXJ5KHFpLCAoZGF0YTogYW55KSA9PiBmbihyZXN1bHQsIGRhdGEgYXMgYW55KSBhcyBhbnkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcclxufSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciwgQ2FjaGUgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ291dE11dGF0aW9uLFxyXG4gIE1lUXVlcnksXHJcbiAgTWVEb2N1bWVudCxcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxyXG4gIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyxcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XHJcbiAgcmV0dXJuIHBpcGUoXHJcbiAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XHJcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XHJcblxyXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xyXG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xyXG4gICAgaWYgKHNpemUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcclxuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShcclxuICAgICAgY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nLFxyXG4gICAgICBcInBvc3RzXCJcclxuICAgICk7XHJcblxyXG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xyXG5cclxuICAgIGxldCBoYXNNb3JlID0gdHJ1ZTtcclxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoa2V5LCBcInBvc3RzXCIpIGFzIHN0cmluZ1tdO1xyXG5cclxuICAgICAgY29uc3QgX2hhc01vcmUgPSBjYWNoZS5yZXNvbHZlKGtleSwgXCJoYXNNb3JlXCIpO1xyXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XHJcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHRzOlwiLCByZXN1bHRzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9fdHlwZW5hbWU6IFwiUGFnaW5hdGVkUG9zdHNcIixcclxuICAgICAgaGFzTW9yZSxcclxuICAgICAgcG9zdHM6IHJlc3VsdHMsXHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbnZhbGlkYXRlQWxsUG9zdHMoY2FjaGU6IENhY2hlKSB7XHJcbiAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhcIlF1ZXJ5XCIpO1xyXG4gIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gXCJwb3N0c1wiKTtcclxuICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICBjYWNoZS5pbnZhbGlkYXRlKFwiUXVlcnlcIiwgXCJwb3N0c1wiLCBmaS5hcmd1bWVudHMgfHwge30pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55LCBjdHg6IGFueSkgPT4ge1xyXG4gIGxldCBjb29raWUgPSBcIlwiO1xyXG4gIGlmIChpc1NlcnZlcigpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlIGFyZSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcIik7XHJcbiAgICBjb29raWUgPSBjdHg/LnJlcT8uaGVhZGVycz8uY29va2llO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXHJcbiAgICBmZXRjaE9wdGlvbnM6IHtcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gICAgICBoZWFkZXJzOiBjb29raWVcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgY29va2llLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgfSxcclxuICAgIGV4Y2hhbmdlczogW1xyXG4gICAgICBkZWR1cEV4Y2hhbmdlLFxyXG4gICAgICBjYWNoZUV4Y2hhbmdlKHtcclxuICAgICAgICBrZXlzOiB7XHJcbiAgICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmVyczoge1xyXG4gICAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgICAgcG9zdHM6IGN1cnNvclBhZ2luYXRpb24oKSxcclxuICAgICAgICAgICAgLy8gcG9zdDogdm90ZVN0YXR1c1Bvc3QoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWxldGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6IFwiUG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IChhcmdzIGFzIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcykuaWQsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gYXJncyBhcyBWb3RlTXV0YXRpb25WYXJpYWJsZXM7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRGcmFnbWVudChcclxuICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCB9IGFzIGFueVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50cyA9XHJcbiAgICAgICAgICAgICAgICAgIChkYXRhLnBvaW50cyBhcyBudW1iZXIpICsgKCFkYXRhLnZvdGVTdGF0dXMgPyAxIDogMikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQoXHJcbiAgICAgICAgICAgICAgICAgIGdxbGBcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBfXyBvbiBQb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgeyBpZDogcG9zdElkLCBwb2ludHM6IG5ld1BvaW50cywgdm90ZVN0YXR1czogdmFsdWUgfSBhcyBhbnlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZUFsbFBvc3RzKGNhY2hlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZUFsbFBvc3RzKGNhY2hlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIGVycm9yRXhjaGFuZ2UsXHJcbiAgICAgIHNzckV4Y2hhbmdlLFxyXG4gICAgICBmZXRjaEV4Y2hhbmdlLFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9FcnJvck1hcCA9IChlcnJvcnM6IEZpZWxkRXJyb3JbXSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcbiAgZXJyb3JzLmZvckVhY2goKHsgZmllbGQsIG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgZXJyb3JNYXBbZmllbGRdID0gbWVzc2FnZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVycm9yTWFwO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC11cnFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVycWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid29ua2FcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==