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

/***/ "(app-pages-browser)/./app/create/_components/LogoDesc.jsx":
/*!*********************************************!*\
  !*** ./app/create/_components/LogoDesc.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeadingDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadingDescription */ \"(app-pages-browser)/./app/create/_components/HeadingDescription.jsx\");\n/* harmony import */ var _app_data_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_data/Lookup */ \"(app-pages-browser)/./app/_data/Lookup.jsx\");\n\n\n\n\nfunction LogoDesc() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeadingDescription__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: _app_data_Lookup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LogoDescTitle,\n                description: _app_data_Lookup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LogoDescDesc\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\_components\\\\LogoDesc.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: _app_data_Lookup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].InputTitlePlaceholder,\n                className: \"p-4 border rounded-lg mt-5 w-full\",\n                defaultValue: title,\n                onChange: (e)=>onHandleInputChange(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\_components\\\\LogoDesc.jsx\",\n                lineNumber: 12,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gaurav\\\\Zeal College\\\\AI LOGO MAKER\\\\ai-logo-generator\\\\app\\\\create\\\\_components\\\\LogoDesc.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = LogoDesc;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoDesc);\nvar _c;\n$RefreshReg$(_c, \"LogoDesc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvX2NvbXBvbmVudHMvTG9nb0Rlc2MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDNEI7QUFDZDtBQUV2QyxTQUFTRztJQUNQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0osMkRBQWtCQTtnQkFDbkJLLE9BQU9KLHdEQUFNQSxDQUFDSyxhQUFhO2dCQUMzQkMsYUFBYU4sd0RBQU1BLENBQUNPLFlBQVk7Ozs7OzswQkFFL0IsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFhVix3REFBTUEsQ0FBQ1cscUJBQXFCO2dCQUN2RFIsV0FBVTtnQkFDVlMsY0FBY1I7Z0JBQ2RTLFVBQVUsQ0FBQ0MsSUFBSUMsb0JBQW9CRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OztBQUs3RDtLQWZTaEI7QUFpQlQsaUVBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2F1cmF2XFxaZWFsIENvbGxlZ2VcXEFJIExPR08gTUFLRVJcXGFpLWxvZ28tZ2VuZXJhdG9yXFxhcHBcXGNyZWF0ZVxcX2NvbXBvbmVudHNcXExvZ29EZXNjLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkaW5nRGVzY3JpcHRpb24gZnJvbSAnLi9IZWFkaW5nRGVzY3JpcHRpb24nXHJcbmltcG9ydCBMb29rdXAgZnJvbSAnQC9hcHAvX2RhdGEvTG9va3VwJ1xyXG5cclxuZnVuY3Rpb24gTG9nb0Rlc2MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteS0xMCcgPlxyXG4gICAgICA8SGVhZGluZ0Rlc2NyaXB0aW9uIFxyXG4gICAgICB0aXRsZT17TG9va3VwLkxvZ29EZXNjVGl0bGV9IFxyXG4gICAgICBkZXNjcmlwdGlvbj17TG9va3VwLkxvZ29EZXNjRGVzY30vPlxyXG5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtMb29rdXAuSW5wdXRUaXRsZVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3AtNCBib3JkZXIgcm91bmRlZC1sZyBtdC01IHctZnVsbCdcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+b25IYW5kbGVJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSl9Ly8gY2FsbHMgYW4gZXZlbnRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ29EZXNjXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRpbmdEZXNjcmlwdGlvbiIsIkxvb2t1cCIsIkxvZ29EZXNjIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJMb2dvRGVzY1RpdGxlIiwiZGVzY3JpcHRpb24iLCJMb2dvRGVzY0Rlc2MiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIklucHV0VGl0bGVQbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIm9uSGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/_components/LogoDesc.jsx\n"));

/***/ })

});