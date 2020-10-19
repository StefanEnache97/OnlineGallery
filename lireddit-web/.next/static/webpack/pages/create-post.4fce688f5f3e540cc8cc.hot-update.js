webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/pages/create-post.tsx":
/*!***********************************!*\
  !*** ./src/pages/create-post.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\create-post.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var CreatePost = function CreatePost(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useCreatePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_9__["useCreatePostMutation"])(),
      _useCreatePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCreatePostMutatio, 2),
      createPost = _useCreatePostMutatio2[1];

  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["Wrapper"], {
    variant: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      title: "",
      text: ""
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return createPost({
                  input: values
                });

              case 2:
                router.push("/");

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
      name: "title",
      placeholder: "title",
      label: "Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
      textarea: true,
      name: "text",
      placeholder: "text...",
      label: "Body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      mt: 4,
      type: "submit",
      isLoading: isSubmitting,
      variantColor: "teal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, "Create Post"));
  }));
};

_s(CreatePost, "PRkMqeYXSDMaiWNcckifDL30uFI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_9__["useCreatePostMutation"]];
});

_c = CreatePost;
/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

var _c;

$RefreshReg$(_c, "CreatePost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NyZWF0ZS1wb3N0LnRzeCJdLCJuYW1lcyI6WyJDcmVhdGVQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ3JlYXRlUG9zdE11dGF0aW9uIiwiY3JlYXRlUG9zdCIsInRpdGxlIiwidGV4dCIsInZhbHVlcyIsImlucHV0IiwicHVzaCIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUF3QixHQUFHLFNBQTNCQSxVQUEyQixPQUFRO0FBQUE7O0FBQUE7O0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRHVDLDhCQUVoQkMsZ0ZBQXFCLEVBRkw7QUFBQTtBQUFBLE1BRTlCQyxVQUY4Qjs7QUFHdkMsU0FDRSxNQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUFFQyxXQUFLLEVBQUUsRUFBVDtBQUFhQyxVQUFJLEVBQUU7QUFBbkIsS0FEakI7QUFFRSxZQUFRO0FBQUEsbU1BQUUsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0ZILFVBQVUsQ0FBQztBQUFFSSx1QkFBSyxFQUFFRDtBQUFULGlCQUFELENBRFI7O0FBQUE7QUFFUk4sc0JBQU0sQ0FBQ1EsSUFBUCxDQUFZLEdBQVo7O0FBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRztBQUFBLFFBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFdBQ0MsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUFZLFVBQUksRUFBQyxPQUFqQjtBQUF5QixpQkFBVyxFQUFDLE9BQXJDO0FBQTZDLFdBQUssRUFBQyxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFDRSxjQUFRLE1BRFY7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFXLEVBQUMsU0FIZDtBQUlFLFdBQUssRUFBQyxNQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZGLEVBV0UsTUFBQyxzREFBRDtBQUNFLFFBQUUsRUFBRSxDQUROO0FBRUUsVUFBSSxFQUFDLFFBRlA7QUFHRSxlQUFTLEVBQUVBLFlBSGI7QUFJRSxrQkFBWSxFQUFDLE1BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRixDQUREO0FBQUEsR0FQSCxDQURGLENBREY7QUFrQ0QsQ0FyQ0Q7O0dBQU1WLFU7VUFDV0Usc0QsRUFDUUMsd0U7OztLQUZuQkgsVTtBQXVDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLXBvc3QuNGZjZTY4OGY1ZjNlNTQwY2M4Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlUG9zdE11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ3JlYXRlUG9zdDogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgWywgY3JlYXRlUG9zdF0gPSB1c2VDcmVhdGVQb3N0TXV0YXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgdmFyaWFudD1cInNtYWxsXCI+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHRpdGxlOiBcIlwiLCB0ZXh0OiBcIlwiIH19XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGNyZWF0ZVBvc3QoeyBpbnB1dDogdmFsdWVzIH0pO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZCBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCIgbGFiZWw9XCJUaXRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZXh0Li4uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9keVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhdGUgUG9zdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==