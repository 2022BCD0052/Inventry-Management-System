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

/***/ "(app-pages-browser)/./components/dashboard/AddInventoryForm.jsx":
/*!***************************************************!*\
  !*** ./components/dashboard/AddInventoryForm.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FormInputs/TextInputs */ \"(app-pages-browser)/./components/FormInputs/TextInputs.jsx\");\n/* harmony import */ var _components_FormInputs_SelectInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormInputs/SelectInputs */ \"(app-pages-browser)/./components/FormInputs/SelectInputs.jsx\");\n/* harmony import */ var _components_FormInputs_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FormInputs/SubmitButton */ \"(app-pages-browser)/./components/FormInputs/SubmitButton.jsx\");\n/* harmony import */ var _components_FormInputs_TextAreaInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormInputs/TextAreaInput */ \"(app-pages-browser)/./components/FormInputs/TextAreaInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst selectWare = [\n    {\n        value: \"Main\",\n        label: \"Main\"\n    },\n    {\n        value: \"Branch\",\n        label: \"Branch\"\n    }\n];\nconst AddAdjustmentForm = ()=>{\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    async function onSubmit(data) {\n        console.log(\"Submitting data:\", data); // Debugging log\n        setLoading(true);\n        const baseUrl = \"/http://localhost:3000\";\n        try {\n            const response = await fetch(\"/api/adjustments/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            console.log(response);\n            if (response.ok) {\n                alert(\"Category created successfully\");\n                reset();\n            } else {\n                alert(\"Failed to create category\");\n            }\n        } catch (error) {\n            alert(\"An error occurred while creating the category\");\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        className: \"w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"number\",\n                        label: \"Enter  Quantity of Stock Add\",\n                        name: \"addStockQty\",\n                        register: register,\n                        errors: errors,\n                        isRequired: true,\n                        className: \"w-full col-span-1\"\n                    }, void 0, false, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/AddInventoryForm.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_SelectInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"receivingWarehouseId\",\n                        register: register,\n                        label: \"Select the  WareHouse that will receive the Stock Information\",\n                        options: selectWare,\n                        className: \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/AddInventoryForm.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/AddInventoryForm.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextAreaInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                label: \" Adjustment Notes\",\n                name: \"Notes\",\n                register: register,\n                errors: errors,\n                isRequired: true,\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/AddInventoryForm.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isLoading: loading,\n                title: \"Save Adjustments\",\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/AddInventoryForm.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/AddInventoryForm.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddAdjustmentForm, \"4MFy0z9uWe/dZITge20TvE3rhVw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = AddAdjustmentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddAdjustmentForm);\nvar _c;\n$RefreshReg$(_c, \"AddAdjustmentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0FkZEludmVudG9yeUZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzREO0FBQ0c7QUFDQztBQUNFO0FBQ2pDO0FBQ1M7QUFFMUMsTUFBTU0sYUFBYTtJQUNqQjtRQUNFQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFDRCxNQUFNQyxvQkFBb0I7O0lBQ3hCLE1BQU0sRUFDSkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR1Qsd0RBQU9BO0lBRVgsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVhLFNBQVNDLElBQUk7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGLE9BQU8sZ0JBQWdCO1FBQ3ZERixXQUFXO1FBQ1gsTUFBTUssVUFBVTtRQUVoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFPLHFCQUFvQjtnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVjtZQUN2QjtZQUNBQyxRQUFRQyxHQUFHLENBQUNFO1lBRVosSUFBSUEsU0FBU08sRUFBRSxFQUFFO2dCQUNmQyxNQUFNO2dCQUNObEI7WUFDRixPQUFPO2dCQUNMa0IsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RELE1BQU07WUFDTlgsUUFBUVksS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JmLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUNDZixVQUFVTixhQUFhTTtRQUN2QmdCLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNqQyx5RUFBVUE7d0JBQ1RtQyxNQUFLO3dCQUNMM0IsT0FBTTt3QkFDTjRCLE1BQUs7d0JBQ0wxQixVQUFVQTt3QkFDVkksUUFBUUE7d0JBQ1J1QixZQUFZO3dCQUNaSixXQUFVOzs7Ozs7a0NBRVosOERBQUNoQywyRUFBV0E7d0JBQ1ZtQyxNQUFLO3dCQUNMMUIsVUFBVUE7d0JBQ1ZGLE9BQU07d0JBQ044QixTQUFTaEM7d0JBQ1QyQixXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUM5Qiw0RUFBYUE7Z0JBQ1pLLE9BQU07Z0JBQ040QixNQUFLO2dCQUNMMUIsVUFBVUE7Z0JBQ1ZJLFFBQVFBO2dCQUNSdUIsWUFBWTtnQkFDWkosV0FBVTs7Ozs7OzBCQUdaLDhEQUFDL0IsMkVBQVlBO2dCQUNYcUMsV0FBV3hCO2dCQUNYeUIsT0FBTTtnQkFDTkwsTUFBSzs7Ozs7Ozs7Ozs7O0FBSWI7R0EvRU0xQjs7UUFNQUosb0RBQU9BOzs7S0FOUEk7QUFpRk4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9BZGRJbnZlbnRvcnlGb3JtLmpzeD80OWVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFRleHRJbnB1dHMgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtSW5wdXRzL1RleHRJbnB1dHNcIjtcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1JbnB1dHMvU2VsZWN0SW5wdXRzXCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybUlucHV0cy9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBUZXh0QXJlYUlucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybUlucHV0cy9UZXh0QXJlYUlucHV0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuY29uc3Qgc2VsZWN0V2FyZSA9IFtcbiAge1xuICAgIHZhbHVlOiBcIk1haW5cIixcbiAgICBsYWJlbDogXCJNYWluXCIsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogXCJCcmFuY2hcIixcbiAgICBsYWJlbDogXCJCcmFuY2hcIixcbiAgfSxcbl07XG5jb25zdCBBZGRBZGp1c3RtZW50Rm9ybSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZXNldCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKCk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdHRpbmcgZGF0YTpcIiwgZGF0YSk7IC8vIERlYnVnZ2luZyBsb2dcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGJhc2VVcmwgPSBcIi9odHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2FkanVzdG1lbnRzL2AsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgYWxlcnQoXCJDYXRlZ29yeSBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBjYXRlZ29yeVwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyB0aGUgY2F0ZWdvcnlcIik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgIG1heC13LTR4bCBteC1hdXRvIHAtNCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG15LTMgcm91bmRlZC1sZyBzaGFkb3cgc206cC02IG1kOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgc206Z3JpZC1jb2xzLTIgIHNtOmdhcC02IGdyaWQtY29scy0xXCI+XG4gICAgICAgIDxUZXh0SW5wdXRzXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbGFiZWw9XCJFbnRlciAgUXVhbnRpdHkgb2YgU3RvY2sgQWRkXCJcbiAgICAgICAgICBuYW1lPVwiYWRkU3RvY2tRdHlcIlxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBjb2wtc3Bhbi0xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNlbGVjdElucHV0XG4gICAgICAgICAgbmFtZT1cInJlY2VpdmluZ1dhcmVob3VzZUlkXCJcbiAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgbGFiZWw9XCJTZWxlY3QgdGhlICBXYXJlSG91c2UgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIFN0b2NrIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICBvcHRpb25zPXtzZWxlY3RXYXJlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFRleHRBcmVhSW5wdXRcbiAgICAgICAgbGFiZWw9XCIgQWRqdXN0bWVudCBOb3Rlc1wiXG4gICAgICAgIG5hbWU9XCJOb3Rlc1wiXG4gICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAvPlxuXG4gICAgICA8U3VibWl0QnV0dG9uXG4gICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgdGl0bGU9XCJTYXZlIEFkanVzdG1lbnRzXCJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAvPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEFkanVzdG1lbnRGb3JtO1xuIl0sIm5hbWVzIjpbIlRleHRJbnB1dHMiLCJTZWxlY3RJbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsIlRleHRBcmVhSW5wdXQiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJzZWxlY3RXYXJlIiwidmFsdWUiLCJsYWJlbCIsIkFkZEFkanVzdG1lbnRGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImZvcm1TdGF0ZSIsImVycm9ycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhc2VVcmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJhbGVydCIsImVycm9yIiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsInR5cGUiLCJuYW1lIiwiaXNSZXF1aXJlZCIsIm9wdGlvbnMiLCJpc0xvYWRpbmciLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard/AddInventoryForm.jsx\n"));

/***/ })

});