"use strict";
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
exports.id = "app/api/gemini/generate/route";
exports.ids = ["app/api/gemini/generate/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgemini%2Fgenerate%2Froute&page=%2Fapi%2Fgemini%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgemini%2Fgenerate%2Froute.ts&appDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgemini%2Fgenerate%2Froute&page=%2Fapi%2Fgemini%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgemini%2Fgenerate%2Froute.ts&appDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_aidi_Sites_ottodot_coding_task_full_stack_app_api_gemini_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/gemini/generate/route.ts */ \"(rsc)/./app/api/gemini/generate/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/gemini/generate/route\",\n        pathname: \"/api/gemini/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/gemini/generate/route\"\n    },\n    resolvedPagePath: \"/home/aidi/Sites/ottodot-coding-task-full-stack/app/api/gemini/generate/route.ts\",\n    nextConfigOutput,\n    userland: _home_aidi_Sites_ottodot_coding_task_full_stack_app_api_gemini_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/gemini/generate/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZW1pbmklMkZnZW5lcmF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VtaW5pJTJGZ2VuZXJhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW1pbmklMkZnZW5lcmF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYWlkaSUyRlNpdGVzJTJGb3R0b2RvdC1jb2RpbmctdGFzay1mdWxsLXN0YWNrJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYWlkaSUyRlNpdGVzJTJGb3R0b2RvdC1jb2RpbmctdGFzay1mdWxsLXN0YWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aC1wcm9ibGVtLWdlbmVyYXRvci8/NGI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9haWRpL1NpdGVzL290dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFjay9hcHAvYXBpL2dlbWluaS9nZW5lcmF0ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2VtaW5pL2dlbmVyYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2VtaW5pL2dlbmVyYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZW1pbmkvZ2VuZXJhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9haWRpL1NpdGVzL290dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFjay9hcHAvYXBpL2dlbWluaS9nZW5lcmF0ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nZW1pbmkvZ2VuZXJhdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgemini%2Fgenerate%2Froute&page=%2Fapi%2Fgemini%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgemini%2Fgenerate%2Froute.ts&appDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/gemini/generate/route.ts":
/*!******************************************!*\
  !*** ./app/api/gemini/generate/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/supabaseClient */ \"(rsc)/./lib/supabaseClient.ts\");\n\n\n\nasync function POST(req) {\n    const { prompt, session } = await req.json();\n    const apiKey = process.env.GOOGLE_API_KEY;\n    if (!apiKey) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"API key not set\"\n        }, {\n            status: 500\n        });\n    }\n    const genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.GoogleGenerativeAI(apiKey);\n    const model = genAI.getGenerativeModel({\n        model: \"gemini-2.5-flash\",\n        generationConfig: {\n            responseMimeType: \"application/json\"\n        }\n    });\n    try {\n        const result = await model.generateContent(prompt);\n        const output = result.response.text();\n        const data = JSON.parse(output);\n        const { data: insertedRow, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"math_problem_sessions\").insert({\n            problem_text: data.problem_text,\n            correct_answer: data.final_answer\n        }).select().single();\n        if (error) {\n            console.error(\"Supabase insert error:\", error);\n            next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: error.message\n            }, {\n                status: 500\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            id: insertedRow.id,\n            problem_text: data.problem_text\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Failed to generate content\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbWluaS9nZW5lcmF0ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ0c7QUFDRDtBQUVsRCxlQUFlRyxLQUFLQyxHQUFnQjtJQUN2QyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUUxQyxNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFDekMsSUFBSSxDQUFDSCxRQUFRO1FBQ1QsT0FBT1Isa0ZBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFSyxPQUFPO1FBQWtCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsTUFBTUMsUUFBUSxJQUFJYixxRUFBa0JBLENBQUNPO0lBQ3JDLE1BQU1PLFFBQVFELE1BQU1FLGtCQUFrQixDQUFDO1FBQ25DRCxPQUFPO1FBQ1BFLGtCQUFrQjtZQUFFQyxrQkFBa0I7UUFBbUI7SUFDN0Q7SUFFQSxJQUFJO1FBQ0EsTUFBTUMsU0FBUyxNQUFNSixNQUFNSyxlQUFlLENBQUNmO1FBQzNDLE1BQU1nQixTQUFTRixPQUFPRyxRQUFRLENBQUNDLElBQUk7UUFDbkMsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTDtRQUV4QixNQUFNLEVBQUVHLE1BQU1HLFdBQVcsRUFBRWYsS0FBSyxFQUFFLEdBQUcsTUFBTVYseURBQVFBLENBQUMwQixJQUFJLENBQUMseUJBQ3BEQyxNQUFNLENBQUM7WUFDSkMsY0FBY04sS0FBS00sWUFBWTtZQUMvQkMsZ0JBQWdCUCxLQUFLUSxZQUFZO1FBQ3JDLEdBQ0NDLE1BQU0sR0FDTkMsTUFBTTtRQUVYLElBQUl0QixPQUFPO1lBQ1B1QixRQUFRdkIsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeENaLGtGQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVLLE9BQU9BLE1BQU13QixPQUFPO1lBQUMsR0FBRztnQkFBRXZCLFFBQVE7WUFBSTtRQUM5RDtRQUVBLE9BQU9iLGtGQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDckI4QixJQUFJVixZQUFZVSxFQUFFO1lBQ2xCUCxjQUFjTixLQUFLTSxZQUFZO1FBQ25DO0lBQ0osRUFBRSxPQUFPbEIsT0FBWTtRQUNqQixPQUFPWixrRkFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVLLE9BQU9BLE1BQU13QixPQUFPLElBQUk7UUFBNkIsR0FBRztZQUFFdkIsUUFBUTtRQUFJO0lBQ3JHO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLXByb2JsZW0tZ2VuZXJhdG9yLy4vYXBwL2FwaS9nZW1pbmkvZ2VuZXJhdGUvcm91dGUudHM/ODJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBHb29nbGVHZW5lcmF0aXZlQUkgfSBmcm9tICdAZ29vZ2xlL2dlbmVyYXRpdmUtYWknXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBzZXNzaW9uIH0gPSBhd2FpdCByZXEuanNvbigpXG5cbiAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HT09HTEVfQVBJX0tFWVxuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQVBJIGtleSBub3Qgc2V0JyB9LCB7IHN0YXR1czogNTAwIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKGFwaUtleSlcbiAgICBjb25zdCBtb2RlbCA9IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7XG4gICAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICAgIGdlbmVyYXRpb25Db25maWc6IHsgcmVzcG9uc2VNaW1lVHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgIH0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQocHJvbXB0KVxuICAgICAgICBjb25zdCBvdXRwdXQgPSByZXN1bHQucmVzcG9uc2UudGV4dCgpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKG91dHB1dCk7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZFJvdywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ21hdGhfcHJvYmxlbV9zZXNzaW9ucycpXG4gICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICBwcm9ibGVtX3RleHQ6IGRhdGEucHJvYmxlbV90ZXh0LFxuICAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiBkYXRhLmZpbmFsX2Fuc3dlcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgICAgIC5zaW5nbGUoKTtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N1cGFiYXNlIGluc2VydCBlcnJvcjonLCBlcnJvcilcbiAgICAgICAgICAgIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIGlkOiBpbnNlcnRlZFJvdy5pZCxcbiAgICAgICAgICAgIHByb2JsZW1fdGV4dDogZGF0YS5wcm9ibGVtX3RleHRcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZ2VuZXJhdGUgY29udGVudCcgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiR29vZ2xlR2VuZXJhdGl2ZUFJIiwic3VwYWJhc2UiLCJQT1NUIiwicmVxIiwicHJvbXB0Iiwic2Vzc2lvbiIsImpzb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0FQSV9LRVkiLCJlcnJvciIsInN0YXR1cyIsImdlbkFJIiwibW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJnZW5lcmF0aW9uQ29uZmlnIiwicmVzcG9uc2VNaW1lVHlwZSIsInJlc3VsdCIsImdlbmVyYXRlQ29udGVudCIsIm91dHB1dCIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJpbnNlcnRlZFJvdyIsImZyb20iLCJpbnNlcnQiLCJwcm9ibGVtX3RleHQiLCJjb3JyZWN0X2Fuc3dlciIsImZpbmFsX2Fuc3dlciIsInNlbGVjdCIsInNpbmdsZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/gemini/generate/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseClient.ts":
/*!*******************************!*\
  !*** ./lib/supabaseClient.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://oujnuoktojhblxjazmzh.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91am51b2t0b2poYmx4amF6bXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NjY3NTcsImV4cCI6MjA3NTE0Mjc1N30.Jl7YGxRezQvxPpqaLjMnYQK1MWpfEiFCflu5D4fi3yg\";\nif (!supabaseUrl || !supabaseAnonKey) {\n    throw new Error(\"Missing Supabase environment variables\");\n}\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VDbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRWpFLElBQUksQ0FBQ0QsZUFBZSxDQUFDSSxpQkFBaUI7SUFDcEMsTUFBTSxJQUFJRSxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsV0FBV1IsbUVBQVlBLENBQUNDLGFBQWFJLGlCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGgtcHJvYmxlbS1nZW5lcmF0b3IvLi9saWIvc3VwYWJhc2VDbGllbnQudHM/M2E3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWVxuXG5pZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZUFub25LZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFN1cGFiYXNlIGVudmlyb25tZW50IHZhcmlhYmxlcycpXG59XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KVxuXG5leHBvcnQgdHlwZSBEYXRhYmFzZSA9IHtcbiAgcHVibGljOiB7XG4gICAgVGFibGVzOiB7XG4gICAgICBtYXRoX3Byb2JsZW1fc2Vzc2lvbnM6IHtcbiAgICAgICAgUm93OiB7XG4gICAgICAgICAgaWQ6IHN0cmluZ1xuICAgICAgICAgIGNyZWF0ZWRfYXQ6IHN0cmluZ1xuICAgICAgICAgIHByb2JsZW1fdGV4dDogc3RyaW5nXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6IG51bWJlclxuICAgICAgICB9XG4gICAgICAgIEluc2VydDoge1xuICAgICAgICAgIGlkPzogc3RyaW5nXG4gICAgICAgICAgY3JlYXRlZF9hdD86IHN0cmluZ1xuICAgICAgICAgIHByb2JsZW1fdGV4dDogc3RyaW5nXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6IG51bWJlclxuICAgICAgICB9XG4gICAgICAgIFVwZGF0ZToge1xuICAgICAgICAgIGlkPzogc3RyaW5nXG4gICAgICAgICAgY3JlYXRlZF9hdD86IHN0cmluZ1xuICAgICAgICAgIHByb2JsZW1fdGV4dD86IHN0cmluZ1xuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyPzogbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1hdGhfcHJvYmxlbV9zdWJtaXNzaW9uczoge1xuICAgICAgICBSb3c6IHtcbiAgICAgICAgICBpZDogc3RyaW5nXG4gICAgICAgICAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gICAgICAgICAgdXNlcl9hbnN3ZXI6IG51bWJlclxuICAgICAgICAgIGlzX2NvcnJlY3Q6IGJvb2xlYW5cbiAgICAgICAgICBmZWVkYmFja190ZXh0OiBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBJbnNlcnQ6IHtcbiAgICAgICAgICBpZD86IHN0cmluZ1xuICAgICAgICAgIHNlc3Npb25faWQ6IHN0cmluZ1xuICAgICAgICAgIHVzZXJfYW5zd2VyOiBudW1iZXJcbiAgICAgICAgICBpc19jb3JyZWN0OiBib29sZWFuXG4gICAgICAgICAgZmVlZGJhY2tfdGV4dDogc3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgVXBkYXRlOiB7XG4gICAgICAgICAgaWQ/OiBzdHJpbmdcbiAgICAgICAgICBzZXNzaW9uX2lkPzogc3RyaW5nXG4gICAgICAgICAgdXNlcl9hbnN3ZXI/OiBudW1iZXJcbiAgICAgICAgICBpc19jb3JyZWN0PzogYm9vbGVhblxuICAgICAgICAgIGZlZWRiYWNrX3RleHQ/OiBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIkVycm9yIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseClient.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/@google","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgemini%2Fgenerate%2Froute&page=%2Fapi%2Fgemini%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgemini%2Fgenerate%2Froute.ts&appDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faidi%2FSites%2Fottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();