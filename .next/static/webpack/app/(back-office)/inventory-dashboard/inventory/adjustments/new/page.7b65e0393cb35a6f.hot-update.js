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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_dashboard_FormHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dashboard/FormHeader */ \"(app-pages-browser)/./components/dashboard/FormHeader.jsx\");\n/* harmony import */ var _components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormInputs/TextInputs */ \"(app-pages-browser)/./components/FormInputs/TextInputs.jsx\");\n/* harmony import */ var _components_FormInputs_SelectInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FormInputs/SelectInputs */ \"(app-pages-browser)/./components/FormInputs/SelectInputs.jsx\");\n/* harmony import */ var _components_FormInputs_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormInputs/SubmitButton */ \"(app-pages-browser)/./components/FormInputs/SubmitButton.jsx\");\n/* harmony import */ var _components_FormInputs_TextAreaInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FormInputs/TextAreaInput */ \"(app-pages-browser)/./components/FormInputs/TextAreaInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst selectOptions = [\n    {\n        value: \"Main\",\n        label: \"Main\"\n    },\n    {\n        value: \"Branch\",\n        label: \"Branch\"\n    }\n];\nconst NewAdjustment = ()=>{\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    async function onSubmit(data) {\n        console.log(\"Submitting data:\", data); // Debugging log\n        setLoading(true);\n        const baseUrl = \"/http://localhost:3000\";\n        try {\n            const response = await fetch(\"/api/adjustments/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            console.log(response);\n            if (response.ok) {\n                alert(\"Category created successfully\");\n                reset();\n            } else {\n                alert(\"Failed to create category\");\n            }\n        } catch (error) {\n            alert(\"An error occurred while creating the category\");\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_FormHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"New Warehouse\",\n                href: \"/inventory-dashboard/inventory\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Enter  Amount of Stock Transfer\",\n                                name: \"transferStockQty\",\n                                register: register,\n                                errors: errors,\n                                isRequired: true,\n                                className: \"w-full col-span-1\"\n                            }, void 0, false, {\n                                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_SelectInputs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                name: \"receivingBranchId\",\n                                register: register,\n                                label: \"Select the Branch that will receive the Stock Information\",\n                                options: selectOptions,\n                                className: \"w-full\"\n                            }, void 0, false, {\n                                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Warehouse Title\",\n                                name: \"title\",\n                                register: register,\n                                errors: errors,\n                                isRequired: true,\n                                className: \"w-full col-span-1\"\n                            }, void 0, false, {\n                                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextAreaInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        label: \" Adjustment Notes\",\n                        name: \"Notes\",\n                        register: register,\n                        errors: errors,\n                        isRequired: true,\n                        className: \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_SubmitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        isLoading: loading,\n                        title: \"Save Unit\",\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewAdjustment, \"4MFy0z9uWe/dZITge20TvE3rhVw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = NewAdjustment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewAdjustment);\nvar _c;\n$RefreshReg$(_c, \"NewAdjustment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYmFjay1vZmZpY2UpL2ludmVudG9yeS1kYXNoYm9hcmQvaW52ZW50b3J5L2FkanVzdG1lbnRzL25ldy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDQztBQUNHO0FBQ0M7QUFDRTtBQUNqQztBQUNTO0FBSzFDLE1BQU1PLGdCQUFnQjtJQUNwQjtRQUNFQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBRUQ7QUFDRCxNQUFNQyxnQkFBZ0I7O0lBQ3BCLE1BQU0sRUFDSkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR1Qsd0RBQU9BO0lBRVgsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVhLFNBQVNDLElBQUk7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGLE9BQU8sZ0JBQWdCO1FBQ3ZERixXQUFXO1FBQ1gsTUFBTUssVUFBVTtRQUVoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFPLHFCQUFvQjtnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVjtZQUN2QjtZQUNBQyxRQUFRQyxHQUFHLENBQUNFO1lBRVosSUFBSUEsU0FBU08sRUFBRSxFQUFFO2dCQUNmQyxNQUFNO2dCQUNObEI7WUFDRixPQUFPO2dCQUNMa0IsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RELE1BQU07WUFDTlgsUUFBUVksS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JmLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjs7MEJBQ0MsOERBQUNqQyx3RUFBVUE7Z0JBQ1RrQyxPQUFPO2dCQUNQQyxNQUFNOzs7Ozs7MEJBRVIsOERBQUNDO2dCQUNDbEIsVUFBVU4sYUFBYU07Z0JBQ3ZCbUIsV0FBVTs7a0NBRVYsOERBQUNKO3dCQUFJSSxXQUFVOzswQ0FDZiw4REFBQ3BDLHlFQUFVQTtnQ0FFUFEsT0FBTTtnQ0FDTjZCLE1BQUs7Z0NBQ0wzQixVQUFVQTtnQ0FDVkksUUFBUUE7Z0NBQ1J3QixZQUFZO2dDQUNaRixXQUFVOzs7Ozs7MENBRVosOERBQUNuQywyRUFBV0E7Z0NBQ1pvQyxNQUFLO2dDQUNMM0IsVUFBVUE7Z0NBQ1ZGLE9BQU07Z0NBQ04rQixTQUFTakM7Z0NBQ1Q4QixXQUFVOzs7Ozs7MENBRVYsOERBQUNwQyx5RUFBVUE7Z0NBQ1RRLE9BQU07Z0NBQ042QixNQUFLO2dDQUNMM0IsVUFBVUE7Z0NBQ1ZJLFFBQVFBO2dDQUNSd0IsWUFBWTtnQ0FDWkYsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUtkLDhEQUFDakMsNEVBQWFBO3dCQUNaSyxPQUFNO3dCQUNONkIsTUFBSzt3QkFDTDNCLFVBQVVBO3dCQUNWSSxRQUFRQTt3QkFDUndCLFlBQVk7d0JBQ1pGLFdBQVU7Ozs7OztrQ0FHWiw4REFBQ2xDLDJFQUFZQTt3QkFBQ3NDLFdBQVd6Qjt3QkFBU2tCLE9BQU07d0JBQVlRLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRTtHQTFGTWhDOztRQU1BSixvREFBT0E7OztLQU5QSTtBQTRGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGJhY2stb2ZmaWNlKS9pbnZlbnRvcnktZGFzaGJvYXJkL2ludmVudG9yeS9hZGp1c3RtZW50cy9uZXcvcGFnZS5qc3g/N2IwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBGb3JtSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Zvcm1IZWFkZXJcIjtcbmltcG9ydCBUZXh0SW5wdXRzIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybUlucHV0cy9UZXh0SW5wdXRzXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtSW5wdXRzL1NlbGVjdElucHV0c1wiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1JbnB1dHMvU3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgVGV4dEFyZWFJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1JbnB1dHMvVGV4dEFyZWFJbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cblxuXG5cbmNvbnN0IHNlbGVjdE9wdGlvbnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogXCJNYWluXCIsXG4gICAgbGFiZWw6IFwiTWFpblwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiQnJhbmNoXCIsXG4gICAgbGFiZWw6IFwiQnJhbmNoXCIsXG4gIH0sXG5cbl1cbmNvbnN0IE5ld0FkanVzdG1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVzZXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybSgpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJTdWJtaXR0aW5nIGRhdGE6XCIsIGRhdGEpOyAvLyBEZWJ1Z2dpbmcgbG9nXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBiYXNlVXJsID0gXCIvaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZGp1c3RtZW50cy9gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGFsZXJ0KFwiQ2F0ZWdvcnkgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBjcmVhdGUgY2F0ZWdvcnlcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgdGhlIGNhdGVnb3J5XCIpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtSGVhZGVyXG4gICAgICAgIHRpdGxlPXtcIk5ldyBXYXJlaG91c2VcIn1cbiAgICAgICAgaHJlZj17XCIvaW52ZW50b3J5LWRhc2hib2FyZC9pbnZlbnRvcnlcIn1cbiAgICAgIC8+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsICBtYXgtdy00eGwgbXgtYXV0byBwLTQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBteS0zIHJvdW5kZWQtbGcgc2hhZG93IHNtOnAtNiBtZDpwLTggZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiBzbTpncmlkLWNvbHMtMiAgc206Z2FwLTYgZ3JpZC1jb2xzLTFcIj5cbiAgICAgICAgPFRleHRJbnB1dHNcbiAgICAgICAgXG4gICAgICAgICAgICBsYWJlbD1cIkVudGVyICBBbW91bnQgb2YgU3RvY2sgVHJhbnNmZXJcIlxuICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyU3RvY2tRdHlcIlxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGNvbC1zcGFuLTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdElucHV0IFxuICAgICAgICAgIG5hbWU9XCJyZWNlaXZpbmdCcmFuY2hJZFwiXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGxhYmVsPVwiU2VsZWN0IHRoZSBCcmFuY2ggdGhhdCB3aWxsIHJlY2VpdmUgdGhlIFN0b2NrIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICBvcHRpb25zPXtzZWxlY3RPcHRpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiLz5cblxuICAgICAgICAgIDxUZXh0SW5wdXRzXG4gICAgICAgICAgICBsYWJlbD1cIldhcmVob3VzZSBUaXRsZVwiXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGNvbC1zcGFuLTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VGV4dEFyZWFJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiIEFkanVzdG1lbnQgTm90ZXNcIlxuICAgICAgICAgIG5hbWU9XCJOb3Rlc1wiXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8U3VibWl0QnV0dG9uIGlzTG9hZGluZz17bG9hZGluZ30gdGl0bGU9XCJTYXZlIFVuaXRcIiB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0FkanVzdG1lbnQ7XG4iXSwibmFtZXMiOlsiRm9ybUhlYWRlciIsIlRleHRJbnB1dHMiLCJTZWxlY3RJbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsIlRleHRBcmVhSW5wdXQiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJzZWxlY3RPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsIk5ld0FkanVzdG1lbnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYmFzZVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJkaXYiLCJ0aXRsZSIsImhyZWYiLCJmb3JtIiwiY2xhc3NOYW1lIiwibmFtZSIsImlzUmVxdWlyZWQiLCJvcHRpb25zIiwiaXNMb2FkaW5nIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(back-office)/inventory-dashboard/inventory/adjustments/new/page.jsx\n"));

/***/ })

});