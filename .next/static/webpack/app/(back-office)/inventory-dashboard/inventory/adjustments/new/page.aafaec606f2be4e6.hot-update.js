"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(back-office)/inventory-dashboard/inventory/adjustments/new/page",{

/***/ "(app-pages-browser)/./app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx":
/*!**********************************************************************************!*\
  !*** ./app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_dashboard_AddInventoryForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dashboard/AddInventoryForm */ \"(app-pages-browser)/./components/dashboard/AddInventoryForm.jsx\");\n/* harmony import */ var _components_dashboard_FormHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dashboard/FormHeader */ \"(app-pages-browser)/./components/dashboard/FormHeader.jsx\");\n/* harmony import */ var _components_dashboard_TransferInventoryForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dashboard/TransferInventoryForm */ \"(app-pages-browser)/./components/dashboard/TransferInventoryForm.jsx\");\n/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Minus,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Minus,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/minus.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst tabs = [\n    {\n        title: \"add Stock\",\n        icons: _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        form: \"add\"\n    },\n    {\n        title: \"Transfer Stock\",\n        icons: _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        form: \"transfer\"\n    }\n];\nconst NewAdjustment = ()=>{\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"add\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_FormHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"New Adjustments\",\n                href: \"/inventory-dashboard/inventory\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full  max-w-4xl mx-auto px-4 py-2 bg-white border border-b  my-3 rounded-lg shadow sm:p-3 md:p-3 dark:bg-gray-800 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400\",\n                    children: tabs.map((tabs, i)=>{\n                        const Icon = tabs.icons;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        setActive(tabs.form);\n                                    },\n                                    href: \"#\",\n                                    className: \"\".concat(active === tabs.form ? \"inline-flex items-center hover:border-blue-900 border-b-4 hover:text-blue-700 border-transparent justify-center p-4 tracking-widest text-blue-800 font-bold text-xl capitalize  border-blue-800 rounded-t-lg  dark:text-gray-500 dark:border-gray-500 group\" : \"inline-flex items-center border-b-4 tracking-widest hover:text-blue-800 border-transparent justify-center p-4 text-gray-900 font-bold text-xl capitalize rounded-t-lg  dark:text-gray-500 dark:border-gray-500 group\"),\n                                    \"aria-current\": \"page\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                            className: \"w-5 h-5 mr-2 text-gray-950 font-bold dark:text-gray-900 group-hover:text-blue-900 \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        tabs.title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: true\n                                }, void 0, false, {\n                                    fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            active === \"add\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_AddInventoryForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_TransferInventoryForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewAdjustment, \"P1ANUrGQ4IeAtplFDwfK0gLaWvU=\");\n_c = NewAdjustment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewAdjustment);\nvar _c;\n$RefreshReg$(_c, \"NewAdjustment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYmFjay1vZmZpY2UpL2ludmVudG9yeS1kYXNoYm9hcmQvaW52ZW50b3J5L2FkanVzdG1lbnRzL25ldy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRTtBQUNUO0FBQ21CO0FBQ2xDO0FBQ1g7QUFDakMsTUFBTU0sT0FBTztJQUNYO1FBQ0VDLE9BQVE7UUFDUkMsT0FBT0osc0ZBQUlBO1FBQ1hLLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQVE7UUFDUkMsT0FBT0wsc0ZBQUtBO1FBQ1pNLE1BQU07SUFDUjtDQUNEO0FBRUQsTUFBTUMsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLFFBQU9DLFVBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ1osd0VBQVVBO2dCQUNUTSxPQUFPO2dCQUNQTyxNQUFNOzs7Ozs7MEJBSVIsOERBQUNEO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFFZFQsS0FBS1csR0FBRyxDQUFDLENBQUNYLE1BQUtZO3dCQUNkLE1BQU1DLE9BQU9iLEtBQUtFLEtBQUs7d0JBQ3ZCLHFCQUNHLDhEQUFDWTs0QkFBR0wsV0FBVTs7OENBQ2QsOERBQUNNO29DQUNEQyxTQUFTO3dDQUNQVixVQUFVTixLQUFLRyxJQUFJO29DQUNyQjtvQ0FFRUssTUFBSztvQ0FDTEMsV0FBVyxHQUEyZSxPQUF4ZUosV0FBU0wsS0FBS0csSUFBSSxHQUFDLGdRQUE4UDtvQ0FDL1JjLGdCQUFhOztzREFFakIsOERBQUNKOzRDQUFNSixXQUFVOzs7Ozs7d0NBRVpULEtBQUtDLEtBQUs7Ozs7Ozs7OENBRWIsOERBQUNNO29DQUFJRSxTQUFTOzs7Ozs7OzJCQWRZRzs7Ozs7b0JBbUI5Qjs7Ozs7Ozs7Ozs7WUFNQVAsV0FBUyxzQkFBTSw4REFBQ1gsOEVBQWFBOzs7OzBDQUNsQyw4REFBQ0UsbUZBQWtCQTs7Ozs7Ozs7Ozs7QUFNdEI7R0FoRE1RO0tBQUFBO0FBa0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYmFjay1vZmZpY2UpL2ludmVudG9yeS1kYXNoYm9hcmQvaW52ZW50b3J5L2FkanVzdG1lbnRzL25ldy9wYWdlLmpzeD83YjBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEFkZEFkamFjZW1lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9kYXNoYm9hcmQvQWRkSW52ZW50b3J5Rm9ybVwiO1xuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kYXNoYm9hcmQvRm9ybUhlYWRlclwiO1xuaW1wb3J0IFRyYW5zZmVyQWRqdXN0bWVudCBmcm9tIFwiQC9jb21wb25lbnRzL2Rhc2hib2FyZC9UcmFuc2ZlckludmVudG9yeUZvcm1cIjtcbmltcG9ydCB7ICBNaW51cywgUGx1cyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgdGFicyA9IFtcbiAge1xuICAgIHRpdGxlIDogXCJhZGQgU3RvY2tcIixcbiAgICBpY29ucyA6UGx1cyxcbiAgICBmb3JtIDpcImFkZFwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZSA6IFwiVHJhbnNmZXIgU3RvY2tcIixcbiAgICBpY29ucyA6TWludXMsXG4gICAgZm9ybSA6XCJ0cmFuc2ZlclwiXG4gIH1cbl1cblxuY29uc3QgTmV3QWRqdXN0bWVudCA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZSxzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKFwiYWRkXCIpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtSGVhZGVyXG4gICAgICAgIHRpdGxlPXtcIk5ldyBBZGp1c3RtZW50c1wifVxuICAgICAgICBocmVmPXtcIi9pbnZlbnRvcnktZGFzaGJvYXJkL2ludmVudG9yeVwifVxuICAgICAgLz5cbiAgICAgIHsvKiBmb3JtICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbWF4LXctNHhsIG14LWF1dG8gcHgtNCBweS0yIGJnLXdoaXRlIGJvcmRlciBib3JkZXItYiAgbXktMyByb3VuZGVkLWxnIHNoYWRvdyBzbTpwLTMgbWQ6cC0zIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1tYi1weCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICB7XG4gICAgICAgIHRhYnMubWFwKCh0YWJzLGkpPT57XG4gICAgICAgICBjb25zdCBJY29uID0gdGFicy5pY29uczsgXG4gICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiIGtleT17aX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICBzZXRBY3RpdmUodGFicy5mb3JtKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlPT09dGFicy5mb3JtP1wiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJvcmRlci1ibHVlLTkwMCBib3JkZXItYi00IGhvdmVyOnRleHQtYmx1ZS03MDAgYm9yZGVyLXRyYW5zcGFyZW50IGp1c3RpZnktY2VudGVyIHAtNCB0cmFja2luZy13aWRlc3QgdGV4dC1ibHVlLTgwMCBmb250LWJvbGQgdGV4dC14bCBjYXBpdGFsaXplICBib3JkZXItYmx1ZS04MDAgcm91bmRlZC10LWxnICBkYXJrOnRleHQtZ3JheS01MDAgZGFyazpib3JkZXItZ3JheS01MDAgZ3JvdXBcIjpcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYi00IHRyYWNraW5nLXdpZGVzdCBob3Zlcjp0ZXh0LWJsdWUtODAwIGJvcmRlci10cmFuc3BhcmVudCBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1ncmF5LTkwMCBmb250LWJvbGQgdGV4dC14bCBjYXBpdGFsaXplIHJvdW5kZWQtdC1sZyAgZGFyazp0ZXh0LWdyYXktNTAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGdyb3VwXCJ9YH1cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPEljb24gIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMiB0ZXh0LWdyYXktOTUwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS05MDAgZ3JvdXAtaG92ZXI6dGV4dC1ibHVlLTkwMCBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0YWJzLnRpdGxlfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT48L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlPT09XCJhZGRcIj88QWRkQWRqYWNlbWVudC8+OlxuICAgPFRyYW5zZmVyQWRqdXN0bWVudCAvPlxuICAgICAgfVxuXG4gICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0FkanVzdG1lbnQ7XG4iXSwibmFtZXMiOlsiQWRkQWRqYWNlbWVudCIsIkZvcm1IZWFkZXIiLCJUcmFuc2ZlckFkanVzdG1lbnQiLCJNaW51cyIsIlBsdXMiLCJ1c2VTdGF0ZSIsInRhYnMiLCJ0aXRsZSIsImljb25zIiwiZm9ybSIsIk5ld0FkanVzdG1lbnQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJkaXYiLCJocmVmIiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJpIiwiSWNvbiIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\n"));

/***/ })

});