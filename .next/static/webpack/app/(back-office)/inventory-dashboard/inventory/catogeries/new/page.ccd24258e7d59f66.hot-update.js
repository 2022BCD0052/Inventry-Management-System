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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction TextInputs(param) {\n    let { label, name, isRequired = true, type, register, errors, className = \"sm:col-span-2\" } = param;\n    // const {register,formState:{errors}} = useForm()\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: className,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: name,\n                    className: \"block text-sm font-medium leading-6 text-gray-900 mb-2 \",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"\".concat(name), {\n                                required: isRequired\n                            }),\n                            type: type,\n                            name: name,\n                            id: name,\n                            autoComplete: name,\n                            className: \"block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"Type the Catogery title\"\n                        }, void 0, false, {\n                            fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this),\n                        errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-red-600 \",\n                            children: \"Catogry title is required\"\n                        }, void 0, false, {\n                            fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n            lineNumber: 11,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/FormInputs.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = TextInputs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInputs);\nvar _c;\n$RefreshReg$(_c, \"TextInputs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Zvcm1JbnB1dHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBQ2dCO0FBRXpDLFNBQVNFLFdBQVcsS0FDK0I7UUFEL0IsRUFBQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUdDLGFBQWEsSUFBSSxFQUNoREMsSUFBSSxFQUFDQyxRQUFRLEVBQUNDLE1BQU0sRUFBQ0MsWUFBVSxlQUFlLEVBQUMsR0FEL0I7SUFHaEIsa0RBQWtEO0lBQ3BELHFCQUVFLDhEQUFDQztrQkFDRSw0RUFBQ0E7WUFBSUQsV0FBV0E7OzhCQUNiLDhEQUFDTjtvQkFDQ1EsU0FBU1A7b0JBQ1RLLFdBQVU7OEJBRVROOzs7Ozs7OEJBRUgsOERBQUNPO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQ0UsR0FBR0wsU0FBUyxHQUFRLE9BQUxILE9BQVE7Z0NBQUVTLFVBQVVSOzRCQUFVLEVBQUU7NEJBQ2hEQyxNQUFNQTs0QkFDTkYsTUFBTUE7NEJBQ05VLElBQUlWOzRCQUNKVyxjQUFjWDs0QkFDZEssV0FBVTs0QkFDVk8sYUFBWTs7Ozs7O3dCQUViUixPQUFPUyxLQUFLLGtCQUNYLDhEQUFDQzs0QkFBS1QsV0FBVTtzQ0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXREO0tBakNTUDtBQW1DVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9Gb3JtSW5wdXRzLmpzeD9iOWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmZ1bmN0aW9uIFRleHRJbnB1dHMoe2xhYmVsICxuYW1lLCAgaXNSZXF1aXJlZCA9IHRydWUsXG4gICAgdHlwZSxyZWdpc3RlcixlcnJvcnMsY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMlwifSkge1xuXG4gICAgLy8gY29uc3Qge3JlZ2lzdGVyLGZvcm1TdGF0ZTp7ZXJyb3JzfX0gPSB1c2VGb3JtKClcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCBtYi0yIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGAke25hbWV9YCwgeyByZXF1aXJlZDogaXNSZXF1aXJlZH0pfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBpZD17bmFtZX1cbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtuYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0yIHRleHQtZ3JheS05MDAgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWJsdWUtNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHRoZSBDYXRvZ2VyeSB0aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy50aXRsZSAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtNjAwIFwiPlxuICAgICAgICAgICAgICAgIENhdG9ncnkgdGl0bGUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIlRleHRJbnB1dHMiLCJsYWJlbCIsIm5hbWUiLCJpc1JlcXVpcmVkIiwidHlwZSIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHRtbEZvciIsImlucHV0IiwicmVxdWlyZWQiLCJpZCIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwidGl0bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard/FormInputs.jsx\n"));

/***/ })

});