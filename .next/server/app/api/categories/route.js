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
exports.id = "app/api/categories/route";
exports.ids = ["app/api/categories/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_yogesh_web_development_Inventry_Management_System_app_api_categories_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/categories/route.js */ \"(rsc)/./app/api/categories/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/categories/route\",\n        pathname: \"/api/categories\",\n        filename: \"route\",\n        bundlePath: \"app/api/categories/route\"\n    },\n    resolvedPagePath: \"/home/yogesh/web development/Inventry-Management-System/app/api/categories/route.js\",\n    nextConfigOutput,\n    userland: _home_yogesh_web_development_Inventry_Management_System_app_api_categories_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/categories/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2F0ZWdvcmllcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGeW9nZXNoJTJGd2ViJTIwZGV2ZWxvcG1lbnQlMkZJbnZlbnRyeS1NYW5hZ2VtZW50LVN5c3RlbSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnlvZ2VzaCUyRndlYiUyMGRldmVsb3BtZW50JTJGSW52ZW50cnktTWFuYWdlbWVudC1TeXN0ZW0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW52ZW50b3J5LXNvZnR3YXJlLz9mMDE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3lvZ2VzaC93ZWIgZGV2ZWxvcG1lbnQvSW52ZW50cnktTWFuYWdlbWVudC1TeXN0ZW0vYXBwL2FwaS9jYXRlZ29yaWVzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jYXRlZ29yaWVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2F0ZWdvcmllc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2F0ZWdvcmllcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3lvZ2VzaC93ZWIgZGV2ZWxvcG1lbnQvSW52ZW50cnktTWFuYWdlbWVudC1TeXN0ZW0vYXBwL2FwaS9jYXRlZ29yaWVzL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jYXRlZ29yaWVzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/categories/route.js":
/*!*************************************!*\
  !*** ./app/api/categories/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function POST(request) {\n    try {\n        const { title, description } = await request.json();\n        const category = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].category.create({\n            data: {\n                title,\n                description\n            }\n        });\n        console.log(category);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(category);\n    } catch (error) {\n        console.log(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error,\n            message: \"Error creating category\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NhdGVnb3JpZXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ2lCO0FBRW5DLGVBQWVFLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNILE1BQU0sRUFBQ0MsS0FBSyxFQUFDQyxXQUFXLEVBQUMsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBRTlDLE1BQU1DLFdBQVcsTUFBTVAsK0NBQUVBLENBQUNPLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3hDQyxNQUFLO2dCQUNITDtnQkFDQUM7WUFDRjtRQUNGO1FBQ0FLLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWixPQUFPTixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDQztJQUUxQixFQUFFLE9BQU9LLE9BQU87UUFDZkYsUUFBUUMsR0FBRyxDQUFDQztRQUNaLE9BQU9YLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFDckJNO1lBQ0FDLFNBQVM7UUFDYixHQUFFO1lBQ0VDLFFBQVE7UUFDWjtJQUVEO0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnZlbnRvcnktc29mdHdhcmUvLi9hcHAvYXBpL2NhdGVnb3JpZXMvcm91dGUuanM/ZDQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Qpe1xuICAgdHJ5IHtcbiAgICBjb25zdCB7dGl0bGUsZGVzY3JpcHRpb259ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmNyZWF0ZSh7XG4gICAgICBkYXRhOntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9LFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjYXRlZ29yeSlcblxuICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICBlcnJvcixcbiAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5J1xuICAgIH0se1xuICAgICAgICBzdGF0dXM6IDUwMFxuICAgIH0pXG4gICAgXG4gICB9XG5cblxuIH0iXSwibmFtZXMiOlsiZGIiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJqc29uIiwiY2F0ZWdvcnkiLCJjcmVhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/categories/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLEtBQUtDLFdBQVdDLE1BQU0sSUFBSSxJQUFJSCx3REFBWUE7QUFDaEQsSUFBSUksSUFBcUMsRUFBRUYsV0FBV0MsTUFBTSxHQUFHRjtBQUUvRCxpRUFBZUEsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludmVudG9yeS1zb2Z0d2FyZS8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBkYiA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMucHJpc21hID0gZGI7XG5cbmV4cG9ydCBkZWZhdWx0IGRiOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fyogesh%2Fweb%20development%2FInventry-Management-System&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();