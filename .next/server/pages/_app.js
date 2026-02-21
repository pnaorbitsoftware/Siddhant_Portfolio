/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_DM_Sans_arguments_display_swap_subsets_latin_variable_font_dm_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"DM_Sans\",\"arguments\":[{\"display\":\"swap\",\"subsets\":[\"latin\"],\"variable\":\"--font-dm-sans\"}],\"variableName\":\"dmSans\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"DM_Sans\\\",\\\"arguments\\\":[{\\\"display\\\":\\\"swap\\\",\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-dm-sans\\\"}],\\\"variableName\\\":\\\"dmSans\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_DM_Sans_arguments_display_swap_subsets_latin_variable_font_dm_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_DM_Sans_arguments_display_swap_subsets_latin_variable_font_dm_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_locomotive_scroll_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/locomotive-scroll.css */ \"./src/styles/locomotive-scroll.css\");\n/* harmony import */ var _styles_locomotive_scroll_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_locomotive_scroll_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle page transitions\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleStart = ()=>setLoading(true);\n        const handleComplete = ()=>setLoading(false);\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    }, [\n        router\n    ]);\n    // Initialize smooth scroll\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) return;\n        let scrollInstance = null;\n        const initScroll = async ()=>{\n            try {\n                // Dynamically import locomotive-scroll\n                const LocomotiveScroll = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! locomotive-scroll */ \"locomotive-scroll\"))).default;\n                const scrollEl = document.querySelector(\"[data-scroll-container]\");\n                if (scrollEl) {\n                    // Initialize with correct options for the version you're using\n                    scrollInstance = new LocomotiveScroll({\n                        el: scrollEl,\n                        smooth: true,\n                        multiplier: 0.8,\n                        lerp: 0.05,\n                        smartphone: {\n                            smooth: true,\n                            breakpoint: 767\n                        },\n                        tablet: {\n                            smooth: true,\n                            breakpoint: 1024\n                        }\n                    });\n                    // For locomotive-scroll v5+, update might not exist\n                    // Use a safer approach - just reload if needed\n                    setTimeout(()=>{\n                        if (scrollInstance && typeof scrollInstance.update === \"function\") {\n                            scrollInstance.update();\n                        } else if (scrollInstance && typeof scrollInstance.init === \"function\") {\n                            scrollInstance.init();\n                        }\n                    }, 500);\n                }\n            } catch (error) {\n                console.error(\"Failed to initialize smooth scroll:\", error);\n            }\n        };\n        initScroll();\n        // Cleanup\n        return ()=>{\n            if (scrollInstance && typeof scrollInstance.destroy === \"function\") {\n                scrollInstance.destroy();\n            }\n        };\n    }, [\n        router.pathname\n    ]); // Re-initialize on route change\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        lang: \"en\",\n        className: `${(next_font_google_target_css_path_src_pages_app_tsx_import_DM_Sans_arguments_display_swap_subsets_latin_variable_font_dm_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6___default().variable)} font-sans`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    className: \"fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin\"\n                            }, void 0, false, {\n                                fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute inset-0 flex items-center justify-center text-xs text-primary\",\n                                children: \"SA\"\n                            }, void 0, false, {\n                                fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                mode: \"wait\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        y: 20\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    exit: {\n                        opacity: 0,\n                        y: -20\n                    },\n                    transition: {\n                        duration: 0.3,\n                        ease: \"easeInOut\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                }, router.pathname, false, {\n                    fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arati/Desktop/Portfolio-v2-main/src/pages/_app.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSzswQkFDcEIsNEVBQUMzQyxpREFBTUEsQ0FBQ2tDLEdBQUc7b0JBRVRJLFNBQVM7d0JBQUVDLFNBQVM7d0JBQUdLLEdBQUc7b0JBQUc7b0JBQzdCSixTQUFTO3dCQUFFRCxTQUFTO3dCQUFHSyxHQUFHO29CQUFFO29CQUM1QkgsTUFBTTt3QkFBRUYsU0FBUzt3QkFBR0ssR0FBRyxDQUFDO29CQUFHO29CQUMzQkMsWUFBWTt3QkFBRUMsVUFBVTt3QkFBS0MsTUFBTTtvQkFBWTs4QkFFL0MsNEVBQUM1Qzt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7bUJBTm5CQyxPQUFPNEIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQVc5QjtBQUVBLGlFQUFlL0IsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZGRoYW50LWF0b2xlLXBvcnRmb2xpby8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgQXBwVHlwZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9sb2NvbW90aXZlLXNjcm9sbC5jc3NcIjtcblxuaW1wb3J0IHsgRE1fU2FucyB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IGRtU2FucyA9IERNX1NhbnMoe1xuICBkaXNwbGF5OiBcInN3YXBcIixcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHZhcmlhYmxlOiBcIi0tZm9udC1kbS1zYW5zXCIsXG59KTtcblxuY29uc3QgTXlBcHA6IEFwcFR5cGUgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gSGFuZGxlIHBhZ2UgdHJhbnNpdGlvbnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVN0YXJ0KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgaGFuZGxlQ29tcGxldGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBzbW9vdGggc2Nyb2xsXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICBsZXQgc2Nyb2xsSW5zdGFuY2U6IGFueSA9IG51bGw7XG5cbiAgICBjb25zdCBpbml0U2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRHluYW1pY2FsbHkgaW1wb3J0IGxvY29tb3RpdmUtc2Nyb2xsXG4gICAgICAgIGNvbnN0IExvY29tb3RpdmVTY3JvbGwgPSAoYXdhaXQgaW1wb3J0KCdsb2NvbW90aXZlLXNjcm9sbCcpKS5kZWZhdWx0O1xuICAgICAgICBjb25zdCBzY3JvbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNjcm9sbC1jb250YWluZXJdJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgICAgICAvLyBJbml0aWFsaXplIHdpdGggY29ycmVjdCBvcHRpb25zIGZvciB0aGUgdmVyc2lvbiB5b3UncmUgdXNpbmdcbiAgICAgICAgICBzY3JvbGxJbnN0YW5jZSA9IG5ldyBMb2NvbW90aXZlU2Nyb2xsKHtcbiAgICAgICAgICAgIGVsOiBzY3JvbGxFbCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgIG11bHRpcGxpZXI6IDAuOCxcbiAgICAgICAgICAgIGxlcnA6IDAuMDUsIC8vIExpbmVhciBpbnRlcnBvbGF0aW9uICgwLTEpIGZvciBzbW9vdGhuZXNzXG4gICAgICAgICAgICBzbWFydHBob25lOiB7XG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGV0OiB7XG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gRm9yIGxvY29tb3RpdmUtc2Nyb2xsIHY1KywgdXBkYXRlIG1pZ2h0IG5vdCBleGlzdFxuICAgICAgICAgIC8vIFVzZSBhIHNhZmVyIGFwcHJvYWNoIC0ganVzdCByZWxvYWQgaWYgbmVlZGVkXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsSW5zdGFuY2UgJiYgdHlwZW9mIHNjcm9sbEluc3RhbmNlLnVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBzY3JvbGxJbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsSW5zdGFuY2UgJiYgdHlwZW9mIHNjcm9sbEluc3RhbmNlLmluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsSW5zdGFuY2UuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIHNtb290aCBzY3JvbGw6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0U2Nyb2xsKCk7XG5cbiAgICAvLyBDbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxJbnN0YW5jZSAmJiB0eXBlb2Ygc2Nyb2xsSW5zdGFuY2UuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY3JvbGxJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pOyAvLyBSZS1pbml0aWFsaXplIG9uIHJvdXRlIGNoYW5nZVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBsYW5nPVwiZW5cIiBjbGFzc05hbWU9e2Ake2RtU2Fucy52YXJpYWJsZX0gZm9udC1zYW5zYH0+XG4gICAgICB7LyogUGFnZSB0cmFuc2l0aW9uIG92ZXJsYXkgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei1bMTAwXSBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgYm9yZGVyLTQgYm9yZGVyLXByaW1hcnkvMjAgYm9yZGVyLXQtcHJpbWFyeSByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIHRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIFNBXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG4gICAgICB7LyogTWFpbiBjb250ZW50IHdpdGggcGFnZSB0cmFuc2l0aW9uICovfVxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGtleT17cm91dGVyLnBhdGhuYW1lfVxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJkbVNhbnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJzY3JvbGxJbnN0YW5jZSIsImluaXRTY3JvbGwiLCJMb2NvbW90aXZlU2Nyb2xsIiwiZGVmYXVsdCIsInNjcm9sbEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWwiLCJzbW9vdGgiLCJtdWx0aXBsaWVyIiwibGVycCIsInNtYXJ0cGhvbmUiLCJicmVha3BvaW50IiwidGFibGV0Iiwic2V0VGltZW91dCIsInVwZGF0ZSIsImluaXQiLCJlcnJvciIsImNvbnNvbGUiLCJkZXN0cm95IiwicGF0aG5hbWUiLCJkaXYiLCJsYW5nIiwiY2xhc3NOYW1lIiwidmFyaWFibGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0Iiwic3BhbiIsIm1vZGUiLCJ5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/locomotive-scroll.css":
/*!******************************************!*\
  !*** ./src/styles/locomotive-scroll.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "locomotive-scroll":
/*!************************************!*\
  !*** external "locomotive-scroll" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("locomotive-scroll");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();