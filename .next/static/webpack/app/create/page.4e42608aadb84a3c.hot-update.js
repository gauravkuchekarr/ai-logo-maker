"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./app/create/page.jsx":
/*!*****************************!*\
  !*** ./app/create/page.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LogoTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/LogoTitle */ \"(app-pages-browser)/./app/create/_components/LogoTitle.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-left.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _components_LogoDesc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/LogoDesc */ \"(app-pages-browser)/./app/create/_components/LogoDesc.jsx\");\n/* harmony import */ var _components_LogoColorPallete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/LogoColorPallete */ \"(app-pages-browser)/./app/create/_components/LogoColorPallete.jsx\");\n/* harmony import */ var _components_LogoDesigns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/LogoDesigns */ \"(app-pages-browser)/./app/create/_components/LogoDesigns.jsx\");\n/* harmony import */ var _components_LogoIdea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/LogoIdea */ \"(app-pages-browser)/./app/create/_components/LogoIdea.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CreateLogo() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onHandleInputChange = (field, value)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [field]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-28 p-10 border rounded-xl 5xl:mx-72\",\n        children: [\n            step == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onHandleInputChange: (v)=>onHandleInputChange('title', v)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this) : step == 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoDesc__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onHandleInputChange: (v)=>onHandleInputChange('desc', v)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this) : step == 3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoColorPallete__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onHandleInputChange: (v)=>onHandleInputChange('palette', v)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this) : step == 4 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoDesigns__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                onHandleInputChange: (v)=>onHandleInputChange('design', v)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this) : step == 5 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogoIdea__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onHandleInputChange: (v)=>onHandleInputChange('idea', v)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    step != 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"outline\",\n                        onClick: ()=>setStep(step - 1),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 78\n                            }, this),\n                            \" Previous \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 20\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: ()=>setStep(step + 1),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 49\n                            }, this),\n                            \" Continue \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\page.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateLogo, \"LiqS1bmAbpKsbhujdG5b7s4OBEY=\");\n_c = CreateLogo;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateLogo);\nvar _c;\n$RefreshReg$(_c, \"CreateLogo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDUTtBQUNBO0FBQ0c7QUFDTDtBQUNnQjtBQUNWO0FBQ047QUFFN0MsU0FBU1U7O0lBRVAsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUNYLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUE7SUFDeEMsTUFBTWMsc0JBQW9CLENBQUNDLE9BQU9DO1FBRWhDSCxZQUFZSSxDQUFBQSxPQUFPO2dCQUNqQixHQUFHQSxJQUFJO2dCQUNQLENBQUNGLE1BQU0sRUFBQ0M7WUFDVjtJQUlGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7O1lBQ1pULFFBQU0sa0JBQ1AsOERBQUNULDZEQUFTQTtnQkFBQ2EscUJBQXFCLENBQUNNLElBQUlOLG9CQUFvQixTQUFRTTs7Ozs7dUJBQ2pFVixRQUFNLGtCQUNOLDhEQUFDTCw0REFBUUE7Z0JBQUNTLHFCQUFxQixDQUFDTSxJQUFJTixvQkFBb0IsUUFBT007Ozs7O3VCQUMvRFYsUUFBTSxrQkFDTiw4REFBQ0osb0VBQWdCQTtnQkFBQ1EscUJBQXFCLENBQUNNLElBQUlOLG9CQUFvQixXQUFVTTs7Ozs7dUJBQzFFVixRQUFNLGtCQUNOLDhEQUFDSCwrREFBV0E7Z0JBQUNPLHFCQUFxQixDQUFDTSxJQUFJTixvQkFBb0IsVUFBU007Ozs7O3VCQUNwRVYsUUFBTSxrQkFDTiw4REFBQ0YsNERBQVFBO2dCQUFDTSxxQkFBcUIsQ0FBQ00sSUFBSU4sb0JBQW9CLFFBQU9NOzs7Ozt1QkFDL0Q7MEJBSUEsOERBQUNGO2dCQUFJQyxXQUFVOztvQkFDWlQsUUFBTSxtQkFBSSw4REFBQ1IseURBQU1BO3dCQUFDbUIsU0FBUTt3QkFBVUMsU0FBUyxJQUFJWCxRQUFRRCxPQUFLOzs0QkFBSzswQ0FBQyw4REFBQ1AsZ0dBQVNBOzs7Ozs0QkFBRTs7Ozs7OztrQ0FDakYsOERBQUNELHlEQUFNQTt3QkFBQ29CLFNBQVMsSUFBSVgsUUFBUUQsT0FBSzs7NEJBQUs7MENBQUMsOERBQUNOLGdHQUFVQTs7Ozs7NEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0Q7R0F0Q1NLO0tBQUFBO0FBd0NULGlFQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdhdXJhdlxcWmVhbCBDb2xsZWdlXFxBSSBMT0dPIE1BS0VSXFxhaS1sb2dvLWdlbmVyYXRvclxcYXBwXFxjcmVhdGVcXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9nb1RpdGxlIGZyb20gJy4vX2NvbXBvbmVudHMvTG9nb1RpdGxlJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJ1xyXG5pbXBvcnQge0Fycm93TGVmdCwgQXJyb3dSaWdodH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5pbXBvcnQgTG9nb0Rlc2MgZnJvbSAnLi9fY29tcG9uZW50cy9Mb2dvRGVzYydcclxuaW1wb3J0IExvZ29Db2xvclBhbGxldGUgZnJvbSAnLi9fY29tcG9uZW50cy9Mb2dvQ29sb3JQYWxsZXRlJ1xyXG5pbXBvcnQgTG9nb0Rlc2lnbnMgZnJvbSAnLi9fY29tcG9uZW50cy9Mb2dvRGVzaWducydcclxuaW1wb3J0IExvZ29JZGVhIGZyb20gJy4vX2NvbXBvbmVudHMvTG9nb0lkZWEnXHJcblxyXG5mdW5jdGlvbiBDcmVhdGVMb2dvKCkge1xyXG4gIFxyXG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXT11c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgb25IYW5kbGVJbnB1dENoYW5nZT0oZmllbGQsIHZhbHVlKT0+e1xyXG5cclxuICAgIHNldEZvcm1EYXRhKHByZXY9Pih7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIFtmaWVsZF06dmFsdWVcclxuICAgIH0pKVxyXG5cclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMjggcC0xMCBib3JkZXIgcm91bmRlZC14bCA1eGw6bXgtNzInPlxyXG4gICAgICB7c3RlcD09MT9cclxuICAgICAgPExvZ29UaXRsZSBvbkhhbmRsZUlucHV0Q2hhbmdlPXsodik9Pm9uSGFuZGxlSW5wdXRDaGFuZ2UoJ3RpdGxlJyx2KX0vPjpcclxuICAgICAgc3RlcD09Mj9cclxuICAgICAgPExvZ29EZXNjIG9uSGFuZGxlSW5wdXRDaGFuZ2U9eyh2KT0+b25IYW5kbGVJbnB1dENoYW5nZSgnZGVzYycsdil9IC8+OlxyXG4gICAgICBzdGVwPT0zP1xyXG4gICAgICA8TG9nb0NvbG9yUGFsbGV0ZSBvbkhhbmRsZUlucHV0Q2hhbmdlPXsodik9Pm9uSGFuZGxlSW5wdXRDaGFuZ2UoJ3BhbGV0dGUnLHYpfSAvPjpcclxuICAgICAgc3RlcD09ND9cclxuICAgICAgPExvZ29EZXNpZ25zIG9uSGFuZGxlSW5wdXRDaGFuZ2U9eyh2KT0+b25IYW5kbGVJbnB1dENoYW5nZSgnZGVzaWduJyx2KX0gLz46XHJcbiAgICAgIHN0ZXA9PTU/XHJcbiAgICAgIDxMb2dvSWRlYSBvbkhhbmRsZUlucHV0Q2hhbmdlPXsodik9Pm9uSGFuZGxlSW5wdXRDaGFuZ2UoJ2lkZWEnLHYpfSAvPjpcclxuICAgICAgbnVsbFxyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtzdGVwIT0xJiYgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpPT5zZXRTdGVwKHN0ZXAtMSl9ID4gPEFycm93TGVmdC8+IFByZXZpb3VzIDwvQnV0dG9uPn1cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRTdGVwKHN0ZXArMSl9ID4gPEFycm93UmlnaHQvPiBDb250aW51ZSA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVMb2dvXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9nb1RpdGxlIiwiQnV0dG9uIiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsIkxvZ29EZXNjIiwiTG9nb0NvbG9yUGFsbGV0ZSIsIkxvZ29EZXNpZ25zIiwiTG9nb0lkZWEiLCJDcmVhdGVMb2dvIiwic3RlcCIsInNldFN0ZXAiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwib25IYW5kbGVJbnB1dENoYW5nZSIsImZpZWxkIiwidmFsdWUiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwidiIsInZhcmlhbnQiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.jsx\n"));

/***/ })

});