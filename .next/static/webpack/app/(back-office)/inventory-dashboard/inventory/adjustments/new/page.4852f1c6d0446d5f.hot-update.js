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

/***/ "(app-pages-browser)/./components/dashboard/TransferInventoryForm.js":
/*!*******************************************************!*\
  !*** ./components/dashboard/TransferInventoryForm.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FormInputs/TextInputs */ \"(app-pages-browser)/./components/FormInputs/TextInputs.jsx\");\n/* harmony import */ var _components_FormInputs_SelectInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormInputs/SelectInputs */ \"(app-pages-browser)/./components/FormInputs/SelectInputs.jsx\");\n/* harmony import */ var _components_FormInputs_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FormInputs/SubmitButton */ \"(app-pages-browser)/./components/FormInputs/SubmitButton.jsx\");\n/* harmony import */ var _components_FormInputs_TextAreaInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormInputs/TextAreaInput */ \"(app-pages-browser)/./components/FormInputs/TextAreaInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst selectsBranch = [\n    {\n        value: \"Main\",\n        label: \"Main\"\n    },\n    {\n        value: \"Branch\",\n        label: \"Branch\"\n    }\n];\nconst TransferAdjustment = ()=>{\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    async function onSubmit(data) {\n        console.log(\"Submitting data:\", data); // Debugging log\n        setLoading(true);\n        const baseUrl = \"/http://localhost:3000\";\n        try {\n            const response = await fetch(\"/api/adjustments/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            console.log(response);\n            if (response.ok) {\n                alert(\"Category created successfully\");\n                reset();\n            } else {\n                alert(\"Failed to create category\");\n            }\n        } catch (error) {\n            alert(\"An error occurred while creating the category\");\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        className: \"w-full  max-w-4xl mx-auto p-4 bg-white border border-gray-200 my-3 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-6 sm:grid-cols-2  sm:gap-6 grid-cols-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextInputs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"number\",\n                        label: \"Enter  Amount of Stock Transfer\",\n                        name: \"transferStockQty\",\n                        register: register,\n                        errors: errors,\n                        isRequired: true,\n                        className: \"w-full col-span-1\"\n                    }, void 0, false, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/TransferInventoryForm.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_SelectInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"giving\",\n                        register: register,\n                        label: \"Select the Branch that will receive the Stock \",\n                        options: selectsBranch,\n                        className: \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/TransferInventoryForm.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/TransferInventoryForm.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_TextAreaInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                label: \" Adjustment Notes\",\n                name: \"Notes\",\n                register: register,\n                errors: errors,\n                isRequired: true,\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/TransferInventoryForm.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInputs_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isLoading: loading,\n                title: \"Save Adjustments\",\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/TransferInventoryForm.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yogesh/web development/Inventry-Management-System/components/dashboard/TransferInventoryForm.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TransferAdjustment, \"4MFy0z9uWe/dZITge20TvE3rhVw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = TransferAdjustment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransferAdjustment);\nvar _c;\n$RefreshReg$(_c, \"TransferAdjustment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RyYW5zZmVySW52ZW50b3J5Rm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0RDtBQUNHO0FBQ0M7QUFDRTtBQUNqQztBQUNTO0FBRTFDLE1BQU1NLGdCQUFnQjtJQUNwQjtRQUNFQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFDRCxNQUFNQyxxQkFBcUI7O0lBQ3pCLE1BQU0sRUFDSkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR1Qsd0RBQU9BO0lBRVgsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVhLFNBQVNDLElBQUk7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGLE9BQU8sZ0JBQWdCO1FBQ3ZERixXQUFXO1FBQ1gsTUFBTUssVUFBVTtRQUVoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFPLHFCQUFvQjtnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVjtZQUN2QjtZQUNBQyxRQUFRQyxHQUFHLENBQUNFO1lBRVosSUFBSUEsU0FBU08sRUFBRSxFQUFFO2dCQUNmQyxNQUFNO2dCQUNObEI7WUFDRixPQUFPO2dCQUNMa0IsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RELE1BQU07WUFDTlgsUUFBUVksS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JmLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUNDZixVQUFVTixhQUFhTTtRQUN2QmdCLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNqQyx5RUFBVUE7d0JBQ1RtQyxNQUFLO3dCQUNMM0IsT0FBTTt3QkFDTjRCLE1BQUs7d0JBQ0wxQixVQUFVQTt3QkFDVkksUUFBUUE7d0JBQ1J1QixZQUFZO3dCQUNaSixXQUFVOzs7Ozs7a0NBRVosOERBQUNoQywyRUFBV0E7d0JBQ1ZtQyxNQUFLO3dCQUNMMUIsVUFBVUE7d0JBQ1ZGLE9BQU07d0JBQ044QixTQUFTaEM7d0JBQ1QyQixXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUM5Qiw0RUFBYUE7Z0JBQ1pLLE9BQU07Z0JBQ040QixNQUFLO2dCQUNMMUIsVUFBVUE7Z0JBQ1ZJLFFBQVFBO2dCQUNSdUIsWUFBWTtnQkFDWkosV0FBVTs7Ozs7OzBCQUdaLDhEQUFDL0IsMkVBQVlBO2dCQUNYcUMsV0FBV3hCO2dCQUNYeUIsT0FBTTtnQkFDTkwsTUFBSzs7Ozs7Ozs7Ozs7O0FBSWI7R0EvRU0xQjs7UUFNQUosb0RBQU9BOzs7S0FOUEk7QUFpRk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UcmFuc2ZlckludmVudG9yeUZvcm0uanM/NDY1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBUZXh0SW5wdXRzIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybUlucHV0cy9UZXh0SW5wdXRzXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtSW5wdXRzL1NlbGVjdElucHV0c1wiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1JbnB1dHMvU3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgVGV4dEFyZWFJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1JbnB1dHMvVGV4dEFyZWFJbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmNvbnN0IHNlbGVjdHNCcmFuY2ggPSBbXG4gIHtcbiAgICB2YWx1ZTogXCJNYWluXCIsXG4gICAgbGFiZWw6IFwiTWFpblwiLFxuICB9LFxuICB7XG4gICAgdmFsdWU6IFwiQnJhbmNoXCIsXG4gICAgbGFiZWw6IFwiQnJhbmNoXCIsXG4gIH0sXG5dO1xuY29uc3QgVHJhbnNmZXJBZGp1c3RtZW50ID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlc2V0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiU3VibWl0dGluZyBkYXRhOlwiLCBkYXRhKTsgLy8gRGVidWdnaW5nIGxvZ1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgYmFzZVVybCA9IFwiL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRqdXN0bWVudHMvYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBhbGVydChcIkNhdGVnb3J5IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gY3JlYXRlIGNhdGVnb3J5XCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHRoZSBjYXRlZ29yeVwiKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCAgbWF4LXctNHhsIG14LWF1dG8gcC00IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbXktMyByb3VuZGVkLWxnIHNoYWRvdyBzbTpwLTYgbWQ6cC04IGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiBzbTpncmlkLWNvbHMtMiAgc206Z2FwLTYgZ3JpZC1jb2xzLTFcIj5cbiAgICAgICAgPFRleHRJbnB1dHNcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBsYWJlbD1cIkVudGVyICBBbW91bnQgb2YgU3RvY2sgVHJhbnNmZXJcIlxuICAgICAgICAgIG5hbWU9XCJ0cmFuc2ZlclN0b2NrUXR5XCJcbiAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgY29sLXNwYW4tMVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3RJbnB1dFxuICAgICAgICAgIG5hbWU9XCJnaXZpbmdcIlxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBsYWJlbD1cIlNlbGVjdCB0aGUgQnJhbmNoIHRoYXQgd2lsbCByZWNlaXZlIHRoZSBTdG9jayBcIlxuICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdHNCcmFuY2h9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VGV4dEFyZWFJbnB1dFxuICAgICAgICBsYWJlbD1cIiBBZGp1c3RtZW50IE5vdGVzXCJcbiAgICAgICAgbmFtZT1cIk5vdGVzXCJcbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgIC8+XG5cbiAgICAgIDxTdWJtaXRCdXR0b25cbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICB0aXRsZT1cIlNhdmUgQWRqdXN0bWVudHNcIlxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmZXJBZGp1c3RtZW50O1xuIl0sIm5hbWVzIjpbIlRleHRJbnB1dHMiLCJTZWxlY3RJbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsIlRleHRBcmVhSW5wdXQiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJzZWxlY3RzQnJhbmNoIiwidmFsdWUiLCJsYWJlbCIsIlRyYW5zZmVyQWRqdXN0bWVudCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYXNlVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiYWxlcnQiLCJlcnJvciIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJ0eXBlIiwibmFtZSIsImlzUmVxdWlyZWQiLCJvcHRpb25zIiwiaXNMb2FkaW5nIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard/TransferInventoryForm.js\n"));

/***/ })

});