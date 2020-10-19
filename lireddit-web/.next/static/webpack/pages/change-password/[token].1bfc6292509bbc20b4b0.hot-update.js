webpackHotUpdate_N_E("pages/change-password/[token]",{

/***/ "./src/pages/change-password/[token].tsx":
/*!***********************************************!*\
  !*** ./src/pages/change-password/[token].tsx ***!
  \***********************************************/
/*! exports provided: ChangePassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/toErrorMap */ "./src/utils/toErrorMap.ts");




var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\change-password\\[token].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










var ChangePassword = function ChangePassword(_ref) {
  _s();

  var token = _ref.token;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useChangePasswordMut = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_10__["useChangePasswordMutation"])(),
      _useChangePasswordMut2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useChangePasswordMut, 2),
      changePassword = _useChangePasswordMut2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      tokenError = _useState[0],
      setTokenError = _useState[1];

  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_9__["Wrapper"], {
    variant: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      newPassword: ""
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {
        var _response$data, _response$data2;

        var setErrors, response, errorMap;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setErrors = _ref2.setErrors;
                _context.next = 3;
                return changePassword({
                  newPassword: values.newPassword,
                  token: token
                });

              case 3:
                response = _context.sent;

                if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.changePassword.errors) {
                  errorMap = Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_12__["toErrorMap"])(response.data.changePassword.errors);

                  if ("token" in errorMap) {
                    setTokenError(errorMap.token);
                  }

                  setErrors(errorMap);
                } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.changePassword.user) {
                  //worked
                  router.push("/");
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, function (_ref4) {
    var isSubmitting = _ref4.isSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
      name: "newPassword",
      placeholder: "enter a new password",
      label: "New Password",
      type: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }), tokenError ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      color: "red",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 27
      }
    }, tokenError) : null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      mt: 4,
      type: "submit",
      isLoading: isSubmitting,
      variantColor: "teal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, "change password"));
  }));
};

_s(ChangePassword, "uUGG1qrP2/K7ETkw6qD8KF59IW8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_10__["useChangePasswordMutation"]];
});

_c = ChangePassword;

ChangePassword.getInitialProps = function (_ref5) {
  var query = _ref5.query;
  return {
    token: query.token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_5__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_11__["createUrqlClient"])(ChangePassword));

var _c;

$RefreshReg$(_c, "ChangePassword");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9bdG9rZW5dLnRzeCJdLCJuYW1lcyI6WyJDaGFuZ2VQYXNzd29yZCIsInRva2VuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiIsImNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJ0b2tlbkVycm9yIiwic2V0VG9rZW5FcnJvciIsIm5ld1Bhc3N3b3JkIiwidmFsdWVzIiwic2V0RXJyb3JzIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3JzIiwiZXJyb3JNYXAiLCJ0b0Vycm9yTWFwIiwidXNlciIsInB1c2giLCJpc1N1Ym1pdHRpbmciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsY0FBMkMsR0FBRyxTQUE5Q0EsY0FBOEMsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN4RSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR3RSw4QkFFN0NDLHFGQUF5QixFQUZvQjtBQUFBO0FBQUEsTUFFL0RDLGNBRitEOztBQUFBLGtCQUdwQ0Msc0RBQVEsQ0FBQyxFQUFELENBSDRCO0FBQUEsTUFHakVDLFVBSGlFO0FBQUEsTUFHckRDLGFBSHFEOztBQUl4RSxTQUNFLE1BQUMsMkRBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFDRSxpQkFBYSxFQUFFO0FBQUVDLGlCQUFXLEVBQUU7QUFBZixLQURqQjtBQUVFLFlBQVE7QUFBQSxtTUFBRSxpQkFBT0MsTUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUJDLHlCQUFqQixTQUFpQkEsU0FBakI7QUFBQTtBQUFBLHVCQUNlTixjQUFjLENBQUM7QUFDcENJLDZCQUFXLEVBQUVDLE1BQU0sQ0FBQ0QsV0FEZ0I7QUFFcENSLHVCQUFLLEVBQUxBO0FBRm9DLGlCQUFELENBRDdCOztBQUFBO0FBQ0ZXLHdCQURFOztBQUtSLHNDQUFJQSxRQUFRLENBQUNDLElBQWIsbURBQUksZUFBZVIsY0FBZixDQUE4QlMsTUFBbEMsRUFBMEM7QUFDbENDLDBCQURrQyxHQUN2QkMscUVBQVUsQ0FBQ0osUUFBUSxDQUFDQyxJQUFULENBQWNSLGNBQWQsQ0FBNkJTLE1BQTlCLENBRGE7O0FBRXhDLHNCQUFJLFdBQVdDLFFBQWYsRUFBeUI7QUFDdkJQLGlDQUFhLENBQUNPLFFBQVEsQ0FBQ2QsS0FBVixDQUFiO0FBQ0Q7O0FBQ0RVLDJCQUFTLENBQUNJLFFBQUQsQ0FBVDtBQUNELGlCQU5ELE1BTU8sdUJBQUlILFFBQVEsQ0FBQ0MsSUFBYixvREFBSSxnQkFBZVIsY0FBZixDQUE4QlksSUFBbEMsRUFBd0M7QUFDN0M7QUFDQWYsd0JBQU0sQ0FBQ2dCLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBZE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FtQkc7QUFBQSxRQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxXQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFDRSxVQUFJLEVBQUMsYUFEUDtBQUVFLGlCQUFXLEVBQUMsc0JBRmQ7QUFHRSxXQUFLLEVBQUMsY0FIUjtBQUlFLFVBQUksRUFBQyxVQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9HWixVQUFVLEdBQUcsTUFBQyxtREFBRDtBQUFLLFdBQUssRUFBQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0JBLFVBQWxCLENBQUgsR0FBeUMsSUFQdEQsRUFRRSxNQUFDLHNEQUFEO0FBQ0UsUUFBRSxFQUFFLENBRE47QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGVBQVMsRUFBRVksWUFIYjtBQUlFLGtCQUFZLEVBQUMsTUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGLENBREQ7QUFBQSxHQW5CSCxDQURGLENBREY7QUEyQ0QsQ0EvQ007O0dBQU1uQixjO1VBQ0lHLHFELEVBQ1lDLDZFOzs7S0FGaEJKLGM7O0FBaURiQSxjQUFjLENBQUNvQixlQUFmLEdBQWlDLGlCQUFlO0FBQUEsTUFBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQzlDLFNBQU87QUFDTHBCLFNBQUssRUFBRW9CLEtBQUssQ0FBQ3BCO0FBRFIsR0FBUDtBQUdELENBSkQ7O0FBTWVxQiwrSEFBYyxDQUFDQyx5RUFBRCxDQUFkLENBQWlDdkIsY0FBakMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvW3Rva2VuXS4xYmZjNjI5MjUwOWJiYzIwYjRiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uIH0gZnJvbSBcIi4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudFwiO1xyXG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RvRXJyb3JNYXBcIjtcclxuaW1wb3J0IGxvZ2luIGZyb20gXCIuLi9sb2dpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkOiBOZXh0UGFnZTx7IHRva2VuOiBzdHJpbmcgfT4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgWywgY2hhbmdlUGFzc3dvcmRdID0gdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbigpO1xyXG4gIGNvbnN0IFt0b2tlbkVycm9yLCBzZXRUb2tlbkVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmV3UGFzc3dvcmQ6IFwiXCIgfX1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRFcnJvcnMgfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGFuZ2VQYXNzd29yZCh7XHJcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkOiB2YWx1ZXMubmV3UGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8uY2hhbmdlUGFzc3dvcmQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWFwID0gdG9FcnJvck1hcChyZXNwb25zZS5kYXRhLmNoYW5nZVBhc3N3b3JkLmVycm9ycyk7XHJcbiAgICAgICAgICAgIGlmIChcInRva2VuXCIgaW4gZXJyb3JNYXApIHtcclxuICAgICAgICAgICAgICBzZXRUb2tlbkVycm9yKGVycm9yTWFwLnRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3JNYXApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhPy5jaGFuZ2VQYXNzd29yZC51c2VyKSB7XHJcbiAgICAgICAgICAgIC8vd29ya2VkXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBuZXcgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dG9rZW5FcnJvciA/IDxCb3ggY29sb3I9XCJyZWRcIj57dG9rZW5FcnJvcn08L0JveD4gOiBudWxsfVxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBjaGFuZ2UgcGFzc3dvcmRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNoYW5nZVBhc3N3b3JkLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHF1ZXJ5LnRva2VuIGFzIHN0cmluZyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCkoQ2hhbmdlUGFzc3dvcmQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9