"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(back-office)/inventory-dashboard/inventory/catogeries/new/page",{

/***/ "(app-pages-browser)/./components/dashboard/FormInputs.jsx":
/*!*********************************************!*\
  !*** ./components/dashboard/FormInputs.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction TextInputs(param) {\n    let { label, name, Isrequired = true, type, register, errors, className = \"sm:col-span-2\" } = param;\n    // const {register,formState:{errors}} = useForm()\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: className,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: name,\n                    className: \"block text-sm font-medium leading-6 text-gray-900 mb-2 \",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"\".concat(name), {\n                                required: {\n                                    Is\n                                }\n                            }),\n                            type: type,\n                            name: name,\n                            id: name,\n                            autoComplete: name,\n                            className: \"block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"Type the Catogery title\"\n                        }, void 0, false, {\n                            fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-red-600 \",\n                            children: \"Catogry title is required\"\n                        }, void 0, false, {\n                            fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n            lineNumber: 10,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = TextInputs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInputs);\nvar _c;\n$RefreshReg$(_c, \"TextInputs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Zvcm1JbnB1dHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBQ2dCO0FBRXpDLFNBQVNFLFdBQVcsS0FBNEU7UUFBNUUsRUFBQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUNDLGFBQVcsSUFBSSxFQUFDQyxJQUFJLEVBQUNDLFFBQVEsRUFBQ0MsTUFBTSxFQUFDQyxZQUFVLGVBQWUsRUFBQyxHQUE1RTtJQUVoQixrREFBa0Q7SUFDcEQscUJBRUUsOERBQUNDO2tCQUNFLDRFQUFDQTtZQUFJRCxXQUFXQTs7OEJBQ2IsOERBQUNOO29CQUNDUSxTQUFTUDtvQkFDVEssV0FBVTs4QkFFVE47Ozs7Ozs4QkFFSCw4REFBQ087b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFDRSxHQUFHTCxTQUFTLEdBQVEsT0FBTEgsT0FBUTtnQ0FBRVMsVUFBVTtvQ0FBQ0M7Z0NBQUU7NEJBQUUsRUFBRTs0QkFDM0NSLE1BQU1BOzRCQUNORixNQUFNQTs0QkFDTlcsSUFBSVg7NEJBQ0pZLGNBQWNaOzRCQUNkSyxXQUFVOzRCQUNWUSxhQUFZOzs7Ozs7d0JBRWJULE9BQU9VLEtBQUssa0JBQ1gsOERBQUNDOzRCQUFLVixXQUFVO3NDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEQ7S0FoQ1NQO0FBa0NULCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Zvcm1JbnB1dHMuanN4P2I5YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuZnVuY3Rpb24gVGV4dElucHV0cyh7bGFiZWwgLG5hbWUsSXNyZXF1aXJlZD10cnVlLHR5cGUscmVnaXN0ZXIsZXJyb3JzLGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIn0pIHtcblxuICAgIC8vIGNvbnN0IHtyZWdpc3Rlcixmb3JtU3RhdGU6e2Vycm9yc319ID0gdXNlRm9ybSgpXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgbWItMiBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtuYW1lfWAsIHsgcmVxdWlyZWQ6IHtJc30gfSl9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e25hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTIgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctYmx1ZS02MDAgc206dGV4dC1zbSBzbTpsZWFkaW5nLTZcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgdGhlIENhdG9nZXJ5IHRpdGxlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC02MDAgXCI+XG4gICAgICAgICAgICAgICAgQ2F0b2dyeSB0aXRsZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiVGV4dElucHV0cyIsImxhYmVsIiwibmFtZSIsIklzcmVxdWlyZWQiLCJ0eXBlIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJjbGFzc05hbWUiLCJkaXYiLCJodG1sRm9yIiwiaW5wdXQiLCJyZXF1aXJlZCIsIklzIiwiaWQiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInRpdGxlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard/FormInputs.jsx\n"));

/***/ })

});