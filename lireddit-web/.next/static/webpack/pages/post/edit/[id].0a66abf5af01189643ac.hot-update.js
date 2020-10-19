webpackHotUpdate_N_E("pages/post/edit/[id]",{

/***/ "./src/pages/post/edit/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/post/edit/[id].tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
/* harmony import */ var _utils_useGetIntId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/useGetIntId */ "./src/utils/useGetIntId.ts");






var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\FullstackReact\\lireddit-web\\src\\pages\\post\\edit\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var EditPost = function EditPost(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var intId = Object(_utils_useGetIntId__WEBPACK_IMPORTED_MODULE_14__["useGetIntId"])();

  var _usePostQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_12__["usePostQuery"])({
    pause: intId === -1,
    variables: {
      id: intId
    }
  }),
      _usePostQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_usePostQuery, 1),
      _usePostQuery2$ = _usePostQuery2[0],
      data = _usePostQuery2$.data,
      error = _usePostQuery2$.error,
      fetching = _usePostQuery2$.fetching;

  var _useUpdatePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_12__["useUpdatePostMutation"])(),
      _useUpdatePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useUpdatePostMutatio, 2),
      updatePost = _useUpdatePostMutatio2[1];

  if (fetching) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, "Loading..."));
  }

  if (error) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 12
      }
    }, error.message);
  }

  if (!(data === null || data === void 0 ? void 0 : data.post)) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, "Could not find post"));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
    variant: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: {
      title: data.post.title,
      text: data.post.text
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return updatePost(_objectSpread({
                  id: intId
                }, values));

              case 2:
                router.back();

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
      lineNumber: 47,
      columnNumber: 7
    }
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_10__["InputField"], {
      name: "title",
      placeholder: "title",
      label: "Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      mt: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_10__["InputField"], {
      textarea: true,
      name: "text",
      placeholder: "text...",
      label: "Body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      mt: 4,
      type: "submit",
      isLoading: isSubmitting,
      variantColor: "teal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, "Update Post"));
  }));
};

_s(EditPost, "855Q8FRnFoDu0e/WYo5ERQnOVTM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], _utils_useGetIntId__WEBPACK_IMPORTED_MODULE_14__["useGetIntId"], _generated_graphql__WEBPACK_IMPORTED_MODULE_12__["usePostQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_12__["useUpdatePostMutation"]];
});

_c = EditPost;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_7__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_13__["createUrqlClient"])(EditPost));

var _c;

$RefreshReg$(_c, "EditPost");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvZWRpdC8udHN4Il0sIm5hbWVzIjpbIkVkaXRQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW50SWQiLCJ1c2VHZXRJbnRJZCIsInVzZVBvc3RRdWVyeSIsInBhdXNlIiwidmFyaWFibGVzIiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGluZyIsInVzZVVwZGF0ZVBvc3RNdXRhdGlvbiIsInVwZGF0ZVBvc3QiLCJtZXNzYWdlIiwicG9zdCIsInRpdGxlIiwidGV4dCIsInZhbHVlcyIsImJhY2siLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsdUVBQVcsRUFBekI7O0FBRnVCLHNCQUdhQyx3RUFBWSxDQUFDO0FBQy9DQyxTQUFLLEVBQUVILEtBQUssS0FBSyxDQUFDLENBRDZCO0FBRS9DSSxhQUFTLEVBQUU7QUFDVEMsUUFBRSxFQUFFTDtBQURLO0FBRm9DLEdBQUQsQ0FIekI7QUFBQTtBQUFBO0FBQUEsTUFHZE0sSUFIYyxtQkFHZEEsSUFIYztBQUFBLE1BR1JDLEtBSFEsbUJBR1JBLEtBSFE7QUFBQSxNQUdEQyxRQUhDLG1CQUdEQSxRQUhDOztBQUFBLDhCQVNBQyxpRkFBcUIsRUFUckI7QUFBQTtBQUFBLE1BU2RDLFVBVGM7O0FBVXZCLE1BQUlGLFFBQUosRUFBYztBQUNaLFdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGO0FBS0Q7O0FBRUQsTUFBSUQsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1BLEtBQUssQ0FBQ0ksT0FBWixDQUFQO0FBQ0Q7O0FBRUQsTUFBSSxFQUFDTCxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRU0sSUFBUCxDQUFKLEVBQWlCO0FBQ2YsV0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FERjtBQUtEOztBQUVELFNBQ0UsTUFBQywwREFBRDtBQUFRLFdBQU8sRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFBRUMsV0FBSyxFQUFFUCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsS0FBbkI7QUFBMEJDLFVBQUksRUFBRVIsSUFBSSxDQUFDTSxJQUFMLENBQVVFO0FBQTFDLEtBRGpCO0FBRUUsWUFBUTtBQUFBLG1NQUFFLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNGTCxVQUFVO0FBQUdMLG9CQUFFLEVBQUVMO0FBQVAsbUJBQWlCZSxNQUFqQixFQURSOztBQUFBO0FBRVJqQixzQkFBTSxDQUFDa0IsSUFBUDs7QUFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HO0FBQUEsUUFBR0MsWUFBSCxTQUFHQSxZQUFIO0FBQUEsV0FDQyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtFQUFEO0FBQVksVUFBSSxFQUFDLE9BQWpCO0FBQXlCLGlCQUFXLEVBQUMsT0FBckM7QUFBNkMsV0FBSyxFQUFDLE9BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUNFLGNBQVEsTUFEVjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsaUJBQVcsRUFBQyxTQUhkO0FBSUUsV0FBSyxFQUFDLE1BSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRkYsRUFXRSxNQUFDLHNEQUFEO0FBQ0UsUUFBRSxFQUFFLENBRE47QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGVBQVMsRUFBRUEsWUFIYjtBQUlFLGtCQUFZLEVBQUMsTUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLENBREQ7QUFBQSxHQVBILENBREYsQ0FERjtBQWtDRCxDQWhFRDs7R0FBTXBCLFE7VUFDV0UscUQsRUFDREUsK0QsRUFDc0JDLGdFLEVBTWJPLHlFOzs7S0FUbkJaLFE7QUFrRVNxQiwrSEFBYyxDQUFDQyx5RUFBRCxDQUFkLENBQWlDdEIsUUFBakMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L2VkaXQvW2lkXS4wYTY2YWJmNWFmMDExODk2NDNhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVBvc3RRdWVyeSxcclxuICB1c2VVcGRhdGVQb3N0TXV0YXRpb24sXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VHZXRJbnRJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91c2VHZXRJbnRJZFwiO1xyXG5cclxuY29uc3QgRWRpdFBvc3QgPSAoe30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpbnRJZCA9IHVzZUdldEludElkKCk7XHJcbiAgY29uc3QgW3sgZGF0YSwgZXJyb3IsIGZldGNoaW5nIH1dID0gdXNlUG9zdFF1ZXJ5KHtcclxuICAgIHBhdXNlOiBpbnRJZCA9PT0gLTEsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IGludElkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBbLCB1cGRhdGVQb3N0XSA9IHVzZVVwZGF0ZVBvc3RNdXRhdGlvbigpO1xyXG4gIGlmIChmZXRjaGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoIWRhdGE/LnBvc3QpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEJveD5Db3VsZCBub3QgZmluZCBwb3N0PC9Cb3g+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHZhcmlhbnQ9XCJzbWFsbFwiPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB0aXRsZTogZGF0YS5wb3N0LnRpdGxlLCB0ZXh0OiBkYXRhLnBvc3QudGV4dCB9fVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBhd2FpdCB1cGRhdGVQb3N0KHsgaWQ6IGludElkLCAuLi52YWx1ZXMgfSk7XHJcbiAgICAgICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZCBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCIgbGFiZWw9XCJUaXRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZXh0Li4uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9keVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBVcGRhdGUgUG9zdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50KShFZGl0UG9zdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=