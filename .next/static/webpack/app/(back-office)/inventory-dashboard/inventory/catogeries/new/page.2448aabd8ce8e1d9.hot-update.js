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

/***/ "(app-pages-browser)/./app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx":
/*!*********************************************************************************!*\
  !*** ./app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_dashboard_FormHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dashboard/FormHeader */ \"(app-pages-browser)/./components/dashboard/FormHeader.jsx\");\n/* harmony import */ var _components_dashboard_FormInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dashboard/FormInputs */ \"(app-pages-browser)/./components/dashboard/FormInputs.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NewCatogry = ()=>{\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // const onSubmit = data => console.log(data);\n    function onSubmit(data) {\n        console.log(data);\n        reset();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_FormHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"new\",\n                href: \"3\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200  my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_FormInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    Label: \"Category Title\",\n                    name: \"title\",\n                    register: register,\n                    errors: errors\n                }, void 0, false, {\n                    fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewCatogry, \"4MFy0z9uWe/dZITge20TvE3rhVw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = NewCatogry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCatogry);\nvar _c;\n$RefreshReg$(_c, \"NewCatogry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYmFjay1vZmZpY2UpL2ludmVudG9yeS1kYXNoYm9hcmQvaW52ZW50b3J5L2NhdG9nZXJpZXMvbmV3L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMkQ7QUFDQTtBQUNwQjtBQUNWO0FBQ1c7QUFDRTtBQUUxQyxNQUFNUSxhQUFhOztJQUNqQixNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxLQUFLLEVBQ0xDLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQ3RCLEdBQUdOLHdEQUFPQTtJQUNYLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2Qyw4Q0FBOEM7SUFDOUMsU0FBU1UsU0FBU0MsSUFBSTtRQUNwQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaTjtJQUNGO0lBRUEscUJBQ0UsOERBQUNTOzswQkFFQyw4REFBQ3BCLHdFQUFVQTtnQkFBQ3FCLE9BQU87Z0JBQU9DLE1BQU07Ozs7OzswQkFHaEMsOERBQUNDO2dCQUNDUCxVQUFVTixhQUFhTTtnQkFDdkJRLFdBQVU7MEJBR1YsNEVBQUN2Qix3RUFBVUE7b0JBQ1R3QixPQUFNO29CQUNOQyxNQUFLO29CQUNMakIsVUFBVUE7b0JBQ1ZJLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQW5DTUw7O1FBTUFELG9EQUFPQTs7O0tBTlBDO0FBcUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYmFjay1vZmZpY2UpL2ludmVudG9yeS1kYXNoYm9hcmQvaW52ZW50b3J5L2NhdG9nZXJpZXMvbmV3L3BhZ2UuanN4P2Y2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgRm9ybUhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2Rhc2hib2FyZC9Gb3JtSGVhZGVyXCI7XG5pbXBvcnQgVGV4dElucHV0cyBmcm9tIFwiQC9jb21wb25lbnRzL2Rhc2hib2FyZC9Gb3JtSW5wdXRzXCI7XG5pbXBvcnQgeyBQbHVzLCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5jb25zdCBOZXdDYXRvZ3J5ID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlc2V0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSk7XG4gIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXNldCgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LypoZWFkZXIgICovfVxuICAgICAgPEZvcm1IZWFkZXIgdGl0bGU9e1wibmV3XCJ9IGhyZWY9e1wiM1wifSAvPlxuXG4gICAgICB7LyogZm9ybSAqL31cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNHhsIG14LWF1dG8gcC00IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgIG15LTMgcm91bmRlZC1sZyBzaGFkb3cgc206cC02IG1kOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCJcbiAgICAgID5cbiAgICAgICAgey8qIGxhYmVsICxuYW1lLElzcmVxdWlyZWQ9dHJ1ZSxyZWdpc3Rlcix0eXBlLGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIiAqL31cbiAgICAgICAgPFRleHRJbnB1dHNcbiAgICAgICAgICBMYWJlbD1cIkNhdGVnb3J5IFRpdGxlXCJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgLz5cbiAgXG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdDYXRvZ3J5O1xuIl0sIm5hbWVzIjpbIkZvcm1IZWFkZXIiLCJUZXh0SW5wdXRzIiwiUGx1cyIsIlgiLCJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJOZXdDYXRvZ3J5IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImZvcm1TdGF0ZSIsImVycm9ycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwiaHJlZiIsImZvcm0iLCJjbGFzc05hbWUiLCJMYWJlbCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(back-office)/inventory-dashboard/inventory/catogeries/new/page.jsx\n"));

/***/ })

});