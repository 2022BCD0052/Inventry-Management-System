"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/effect-log";
exports.ids = ["vendor-chunks/effect-log"];
exports.modules = {

/***/ "(rsc)/./node_modules/effect-log/dist/esm/PrettyLogger.js":
/*!**********************************************************!*\
  !*** ./node_modules/effect-log/dist/esm/PrettyLogger.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   layer: () => (/* binding */ layer),\n/* harmony export */   make: () => (/* binding */ make)\n/* harmony export */ });\n/* harmony import */ var effect_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! effect/Array */ \"(rsc)/./node_modules/effect/dist/esm/Array.js\");\n/* harmony import */ var effect_Cause__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! effect/Cause */ \"(rsc)/./node_modules/effect/dist/esm/Cause.js\");\n/* harmony import */ var effect_FiberId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! effect/FiberId */ \"(rsc)/./node_modules/effect/dist/esm/FiberId.js\");\n/* harmony import */ var effect_Function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! effect/Function */ \"(rsc)/./node_modules/effect/dist/esm/Function.js\");\n/* harmony import */ var effect_HashMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! effect/HashMap */ \"(rsc)/./node_modules/effect/dist/esm/HashMap.js\");\n/* harmony import */ var effect_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! effect/List */ \"(rsc)/./node_modules/effect/dist/esm/List.js\");\n/* harmony import */ var effect_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effect/Logger */ \"(rsc)/./node_modules/effect/dist/esm/Logger.js\");\n/* harmony import */ var _internal_serializeUnkown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/serializeUnkown.js */ \"(rsc)/./node_modules/effect-log/dist/esm/internal/serializeUnkown.js\");\n/**\n * Pretty logger.\n *\n * @since 1.0.0\n */\n\n\n\n\n\n\n\n\n/** @internal */\nconst SEVERITY_TO_COLOR = {\n  All: c => c.white,\n  None: c => c.white,\n  Info: c => c.green,\n  Debug: c => c.blue,\n  Error: c => c.red,\n  Fatal: c => c.boldRed,\n  Trace: c => c.dimWhite,\n  Warning: c => c.yellow\n};\nconst RESET = \"\\x1b[0m\";\nconst BOLD = \"\\x1b[1m\";\nconst DIM = \"\\x1b[2m\";\nconst ITALIC = \"\\x1b[3m\";\nconst RED = \"\\x1b[31m\";\nconst GREEN = \"\\x1b[32m\";\nconst YELLOW = \"\\x1b[33m\";\nconst BLUE = \"\\x1b[34m\";\nconst WHITE = \"\\x1b[37m\";\n/** @internal */\nconst enabledColorService = {\n  bold: text => `${BOLD}${text}${RESET}`,\n  dim: text => `${DIM}${text}${RESET}`,\n  italic: text => `${ITALIC}${text}${RESET}`,\n  red: text => `${RED}${text}${RESET}`,\n  green: text => `${GREEN}${text}${RESET}`,\n  yellow: text => `${YELLOW}${text}${RESET}`,\n  blue: text => `${BLUE}${text}${RESET}`,\n  white: text => `${WHITE}${text}${RESET}`,\n  dimItalic: text => `${DIM}${ITALIC}${text}${RESET}`,\n  dimWhite: text => `${DIM}${WHITE}${text}${RESET}`,\n  boldRed: text => `${BOLD}${RED}${text}${RESET}`\n};\n/** @internal */\nconst disabledColorService = {\n  bold: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  dim: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  italic: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  red: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  green: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  yellow: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  blue: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  white: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  dimItalic: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  dimWhite: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity,\n  boldRed: effect_Function__WEBPACK_IMPORTED_MODULE_0__.identity\n};\n/** @internal */\nconst defaultOptions = {\n  showFiberId: true,\n  showTime: true,\n  showSpans: true,\n  enableColors: true\n};\n/** @internal */\nconst createTimeString = (colorService, date) => {\n  const hoursText = date.getHours().toString().padStart(2, \"0\");\n  const minutesText = date.getMinutes().toString().padStart(2, \"0\");\n  const secondsText = date.getSeconds().toString().padStart(2, \"0\");\n  const millisText = date.getMilliseconds().toString().padStart(3, \"0\");\n  return colorService.yellow(`${hoursText}:${minutesText}:${secondsText}.${millisText}`);\n};\n/** @internal */\nconst createCauseMessage = cause => {\n  if (cause._tag === \"Empty\") {\n    return \"\";\n  }\n  return effect_Cause__WEBPACK_IMPORTED_MODULE_1__.pretty(cause);\n};\n/** @internal */\nconst createLogLevelString = (colorService, logLevel) => {\n  const logLevelColor = SEVERITY_TO_COLOR[logLevel._tag](colorService);\n  return logLevelColor(logLevel.label.padEnd(5, \" \"));\n};\n/** @internal */\nconst messageText = (colorService, message) => {\n  if (message === undefined) {\n    return colorService.dim(\"undefined\");\n  } else if (message === null) {\n    return colorService.dim(\"null\");\n  } else if (message === \"\") {\n    return colorService.dim(\"<empty message>\");\n  }\n  return (0,_internal_serializeUnkown_js__WEBPACK_IMPORTED_MODULE_2__.serializeUnknown)(message);\n};\n/** @internal */\nconst createText = (colorService, message, cause) => (0,effect_Function__WEBPACK_IMPORTED_MODULE_0__.pipe)([createCauseMessage(cause), messageText(colorService, message.join(\" \"))], effect_Array__WEBPACK_IMPORTED_MODULE_3__.filter(i => i !== \"\"), effect_Array__WEBPACK_IMPORTED_MODULE_3__.join(\" \"));\n/** @internal */\nconst createSpanText = (colorService, spans) => {\n  if (effect_List__WEBPACK_IMPORTED_MODULE_4__.isNil(spans)) {\n    return \"\";\n  }\n  const text = effect_List__WEBPACK_IMPORTED_MODULE_4__.reduce(effect_List__WEBPACK_IMPORTED_MODULE_4__.unsafeTail(spans), effect_List__WEBPACK_IMPORTED_MODULE_4__.unsafeHead(spans).label, (acc, span) => `${span.label} -> ${acc}`);\n  return ` ${colorService.dimItalic(text)}`;\n};\n/**\n * @category constructors\n * @since 1.0.0\n */\nconst make = options => effect_Logger__WEBPACK_IMPORTED_MODULE_5__.make(({\n  annotations,\n  cause,\n  date,\n  fiberId,\n  logLevel,\n  message,\n  spans\n}) => {\n  const _options = {\n    ...defaultOptions,\n    ...options\n  };\n  const colorService = _options.enableColors ? enabledColorService : disabledColorService;\n  const logLevelStr = createLogLevelString(colorService, logLevel);\n  const timeText = _options.showTime ? `${createTimeString(colorService, date)} ` : \"\";\n  const fiberText = _options.showFiberId ? colorService.dim(`(Fiber ${effect_FiberId__WEBPACK_IMPORTED_MODULE_6__.threadName(fiberId)}) `) : \"\";\n  const text = createText(colorService, effect_Array__WEBPACK_IMPORTED_MODULE_3__.ensure(message), cause);\n  const spansText = _options.showSpans ? createSpanText(colorService, spans) : \"\";\n  console.log(`${timeText}${fiberText}${logLevelStr}${spansText} ${text}`);\n  if (!effect_HashMap__WEBPACK_IMPORTED_MODULE_7__.isEmpty(annotations)) {\n    const text = effect_HashMap__WEBPACK_IMPORTED_MODULE_7__.reduce(annotations, [], (acc, v, k) => [...acc, colorService.white(`\"${k}\"`) + `: ${(0,_internal_serializeUnkown_js__WEBPACK_IMPORTED_MODULE_2__.serializeUnknown)(v)}`]);\n    console.log(`ᐉ ${colorService.dim(\"{\")} ${text.join(\", \")} ${colorService.dim(\"}\")}`);\n  }\n});\n/**\n * @category layers\n * @since 1.0.0\n */\nconst layer = options => effect_Logger__WEBPACK_IMPORTED_MODULE_5__.replace(effect_Logger__WEBPACK_IMPORTED_MODULE_5__.defaultLogger, make(options));\n//# sourceMappingURL=PrettyLogger.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWZmZWN0LWxvZy9kaXN0L2VzbS9QcmV0dHlMb2dnZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0M7QUFDQTtBQUNJO0FBQ087QUFDUDtBQUNOO0FBQ0k7QUFDeUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO0FBQ3ZDLGtCQUFrQixJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07QUFDckMscUJBQXFCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTTtBQUMzQyxrQkFBa0IsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNO0FBQ3JDLG9CQUFvQixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU07QUFDekMscUJBQXFCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTTtBQUMzQyxtQkFBbUIsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO0FBQ3ZDLG9CQUFvQixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU07QUFDekMsd0JBQXdCLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07QUFDcEQsdUJBQXVCLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU07QUFDbEQsc0JBQXNCLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBUTtBQUNoQixPQUFPLHFEQUFRO0FBQ2YsVUFBVSxxREFBUTtBQUNsQixPQUFPLHFEQUFRO0FBQ2YsU0FBUyxxREFBUTtBQUNqQixVQUFVLHFEQUFRO0FBQ2xCLFFBQVEscURBQVE7QUFDaEIsU0FBUyxxREFBUTtBQUNqQixhQUFhLHFEQUFRO0FBQ3JCLFlBQVkscURBQVE7QUFDcEIsV0FBVyxxREFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFdBQVc7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnREFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsU0FBUyw4RUFBZ0I7QUFDekI7QUFDQTtBQUNBLHFEQUFxRCxxREFBSSw0RUFBNEUsZ0RBQVksaUJBQWlCLDhDQUFVO0FBQzVLO0FBQ0E7QUFDQSxNQUFNLDhDQUFVO0FBQ2hCO0FBQ0E7QUFDQSxlQUFlLCtDQUFXLENBQUMsbURBQWUsU0FBUyxtREFBZSxpQ0FBaUMsWUFBWSxLQUFLLElBQUk7QUFDeEgsYUFBYSw2QkFBNkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHdCQUF3QiwrQ0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsc0NBQXNDO0FBQ2hGLHNFQUFzRSxzREFBa0IsVUFBVTtBQUNsRyx3Q0FBd0MsZ0RBQVk7QUFDcEQ7QUFDQSxpQkFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUs7QUFDeEUsT0FBTyxtREFBZTtBQUN0QixpQkFBaUIsa0RBQWMsaUVBQWlFLEVBQUUsV0FBVyw4RUFBZ0IsSUFBSTtBQUNqSSxxQkFBcUIsbUJBQW1CLElBQUksRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsR0FBRztBQUN2RjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5QixrREFBYyxDQUFDLHdEQUFvQjtBQUNuRSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludmVudG9yeS1zb2Z0d2FyZS8uL25vZGVfbW9kdWxlcy9lZmZlY3QtbG9nL2Rpc3QvZXNtL1ByZXR0eUxvZ2dlci5qcz82MDY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJldHR5IGxvZ2dlci5cbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuaW1wb3J0ICogYXMgQXJyYXkgZnJvbSBcImVmZmVjdC9BcnJheVwiO1xuaW1wb3J0ICogYXMgQ2F1c2UgZnJvbSBcImVmZmVjdC9DYXVzZVwiO1xuaW1wb3J0ICogYXMgRmliZXJJZCBmcm9tIFwiZWZmZWN0L0ZpYmVySWRcIjtcbmltcG9ydCB7IGlkZW50aXR5LCBwaXBlIH0gZnJvbSBcImVmZmVjdC9GdW5jdGlvblwiO1xuaW1wb3J0ICogYXMgSGFzaE1hcCBmcm9tIFwiZWZmZWN0L0hhc2hNYXBcIjtcbmltcG9ydCAqIGFzIExpc3QgZnJvbSBcImVmZmVjdC9MaXN0XCI7XG5pbXBvcnQgKiBhcyBMb2dnZXIgZnJvbSBcImVmZmVjdC9Mb2dnZXJcIjtcbmltcG9ydCB7IHNlcmlhbGl6ZVVua25vd24gfSBmcm9tIFwiLi9pbnRlcm5hbC9zZXJpYWxpemVVbmtvd24uanNcIjtcbi8qKiBAaW50ZXJuYWwgKi9cbmNvbnN0IFNFVkVSSVRZX1RPX0NPTE9SID0ge1xuICBBbGw6IGMgPT4gYy53aGl0ZSxcbiAgTm9uZTogYyA9PiBjLndoaXRlLFxuICBJbmZvOiBjID0+IGMuZ3JlZW4sXG4gIERlYnVnOiBjID0+IGMuYmx1ZSxcbiAgRXJyb3I6IGMgPT4gYy5yZWQsXG4gIEZhdGFsOiBjID0+IGMuYm9sZFJlZCxcbiAgVHJhY2U6IGMgPT4gYy5kaW1XaGl0ZSxcbiAgV2FybmluZzogYyA9PiBjLnllbGxvd1xufTtcbmNvbnN0IFJFU0VUID0gXCJcXHgxYlswbVwiO1xuY29uc3QgQk9MRCA9IFwiXFx4MWJbMW1cIjtcbmNvbnN0IERJTSA9IFwiXFx4MWJbMm1cIjtcbmNvbnN0IElUQUxJQyA9IFwiXFx4MWJbM21cIjtcbmNvbnN0IFJFRCA9IFwiXFx4MWJbMzFtXCI7XG5jb25zdCBHUkVFTiA9IFwiXFx4MWJbMzJtXCI7XG5jb25zdCBZRUxMT1cgPSBcIlxceDFiWzMzbVwiO1xuY29uc3QgQkxVRSA9IFwiXFx4MWJbMzRtXCI7XG5jb25zdCBXSElURSA9IFwiXFx4MWJbMzdtXCI7XG4vKiogQGludGVybmFsICovXG5jb25zdCBlbmFibGVkQ29sb3JTZXJ2aWNlID0ge1xuICBib2xkOiB0ZXh0ID0+IGAke0JPTER9JHt0ZXh0fSR7UkVTRVR9YCxcbiAgZGltOiB0ZXh0ID0+IGAke0RJTX0ke3RleHR9JHtSRVNFVH1gLFxuICBpdGFsaWM6IHRleHQgPT4gYCR7SVRBTElDfSR7dGV4dH0ke1JFU0VUfWAsXG4gIHJlZDogdGV4dCA9PiBgJHtSRUR9JHt0ZXh0fSR7UkVTRVR9YCxcbiAgZ3JlZW46IHRleHQgPT4gYCR7R1JFRU59JHt0ZXh0fSR7UkVTRVR9YCxcbiAgeWVsbG93OiB0ZXh0ID0+IGAke1lFTExPV30ke3RleHR9JHtSRVNFVH1gLFxuICBibHVlOiB0ZXh0ID0+IGAke0JMVUV9JHt0ZXh0fSR7UkVTRVR9YCxcbiAgd2hpdGU6IHRleHQgPT4gYCR7V0hJVEV9JHt0ZXh0fSR7UkVTRVR9YCxcbiAgZGltSXRhbGljOiB0ZXh0ID0+IGAke0RJTX0ke0lUQUxJQ30ke3RleHR9JHtSRVNFVH1gLFxuICBkaW1XaGl0ZTogdGV4dCA9PiBgJHtESU19JHtXSElURX0ke3RleHR9JHtSRVNFVH1gLFxuICBib2xkUmVkOiB0ZXh0ID0+IGAke0JPTER9JHtSRUR9JHt0ZXh0fSR7UkVTRVR9YFxufTtcbi8qKiBAaW50ZXJuYWwgKi9cbmNvbnN0IGRpc2FibGVkQ29sb3JTZXJ2aWNlID0ge1xuICBib2xkOiBpZGVudGl0eSxcbiAgZGltOiBpZGVudGl0eSxcbiAgaXRhbGljOiBpZGVudGl0eSxcbiAgcmVkOiBpZGVudGl0eSxcbiAgZ3JlZW46IGlkZW50aXR5LFxuICB5ZWxsb3c6IGlkZW50aXR5LFxuICBibHVlOiBpZGVudGl0eSxcbiAgd2hpdGU6IGlkZW50aXR5LFxuICBkaW1JdGFsaWM6IGlkZW50aXR5LFxuICBkaW1XaGl0ZTogaWRlbnRpdHksXG4gIGJvbGRSZWQ6IGlkZW50aXR5XG59O1xuLyoqIEBpbnRlcm5hbCAqL1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHNob3dGaWJlcklkOiB0cnVlLFxuICBzaG93VGltZTogdHJ1ZSxcbiAgc2hvd1NwYW5zOiB0cnVlLFxuICBlbmFibGVDb2xvcnM6IHRydWVcbn07XG4vKiogQGludGVybmFsICovXG5jb25zdCBjcmVhdGVUaW1lU3RyaW5nID0gKGNvbG9yU2VydmljZSwgZGF0ZSkgPT4ge1xuICBjb25zdCBob3Vyc1RleHQgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IG1pbnV0ZXNUZXh0ID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IHNlY29uZHNUZXh0ID0gZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IG1pbGxpc1RleHQgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpO1xuICByZXR1cm4gY29sb3JTZXJ2aWNlLnllbGxvdyhgJHtob3Vyc1RleHR9OiR7bWludXRlc1RleHR9OiR7c2Vjb25kc1RleHR9LiR7bWlsbGlzVGV4dH1gKTtcbn07XG4vKiogQGludGVybmFsICovXG5jb25zdCBjcmVhdGVDYXVzZU1lc3NhZ2UgPSBjYXVzZSA9PiB7XG4gIGlmIChjYXVzZS5fdGFnID09PSBcIkVtcHR5XCIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZXR1cm4gQ2F1c2UucHJldHR5KGNhdXNlKTtcbn07XG4vKiogQGludGVybmFsICovXG5jb25zdCBjcmVhdGVMb2dMZXZlbFN0cmluZyA9IChjb2xvclNlcnZpY2UsIGxvZ0xldmVsKSA9PiB7XG4gIGNvbnN0IGxvZ0xldmVsQ29sb3IgPSBTRVZFUklUWV9UT19DT0xPUltsb2dMZXZlbC5fdGFnXShjb2xvclNlcnZpY2UpO1xuICByZXR1cm4gbG9nTGV2ZWxDb2xvcihsb2dMZXZlbC5sYWJlbC5wYWRFbmQoNSwgXCIgXCIpKTtcbn07XG4vKiogQGludGVybmFsICovXG5jb25zdCBtZXNzYWdlVGV4dCA9IChjb2xvclNlcnZpY2UsIG1lc3NhZ2UpID0+IHtcbiAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjb2xvclNlcnZpY2UuZGltKFwidW5kZWZpbmVkXCIpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHtcbiAgICByZXR1cm4gY29sb3JTZXJ2aWNlLmRpbShcIm51bGxcIik7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJcIikge1xuICAgIHJldHVybiBjb2xvclNlcnZpY2UuZGltKFwiPGVtcHR5IG1lc3NhZ2U+XCIpO1xuICB9XG4gIHJldHVybiBzZXJpYWxpemVVbmtub3duKG1lc3NhZ2UpO1xufTtcbi8qKiBAaW50ZXJuYWwgKi9cbmNvbnN0IGNyZWF0ZVRleHQgPSAoY29sb3JTZXJ2aWNlLCBtZXNzYWdlLCBjYXVzZSkgPT4gcGlwZShbY3JlYXRlQ2F1c2VNZXNzYWdlKGNhdXNlKSwgbWVzc2FnZVRleHQoY29sb3JTZXJ2aWNlLCBtZXNzYWdlLmpvaW4oXCIgXCIpKV0sIEFycmF5LmZpbHRlcihpID0+IGkgIT09IFwiXCIpLCBBcnJheS5qb2luKFwiIFwiKSk7XG4vKiogQGludGVybmFsICovXG5jb25zdCBjcmVhdGVTcGFuVGV4dCA9IChjb2xvclNlcnZpY2UsIHNwYW5zKSA9PiB7XG4gIGlmIChMaXN0LmlzTmlsKHNwYW5zKSkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHRleHQgPSBMaXN0LnJlZHVjZShMaXN0LnVuc2FmZVRhaWwoc3BhbnMpLCBMaXN0LnVuc2FmZUhlYWQoc3BhbnMpLmxhYmVsLCAoYWNjLCBzcGFuKSA9PiBgJHtzcGFuLmxhYmVsfSAtPiAke2FjY31gKTtcbiAgcmV0dXJuIGAgJHtjb2xvclNlcnZpY2UuZGltSXRhbGljKHRleHQpfWA7XG59O1xuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2UgPSBvcHRpb25zID0+IExvZ2dlci5tYWtlKCh7XG4gIGFubm90YXRpb25zLFxuICBjYXVzZSxcbiAgZGF0ZSxcbiAgZmliZXJJZCxcbiAgbG9nTGV2ZWwsXG4gIG1lc3NhZ2UsXG4gIHNwYW5zXG59KSA9PiB7XG4gIGNvbnN0IF9vcHRpb25zID0ge1xuICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgY29sb3JTZXJ2aWNlID0gX29wdGlvbnMuZW5hYmxlQ29sb3JzID8gZW5hYmxlZENvbG9yU2VydmljZSA6IGRpc2FibGVkQ29sb3JTZXJ2aWNlO1xuICBjb25zdCBsb2dMZXZlbFN0ciA9IGNyZWF0ZUxvZ0xldmVsU3RyaW5nKGNvbG9yU2VydmljZSwgbG9nTGV2ZWwpO1xuICBjb25zdCB0aW1lVGV4dCA9IF9vcHRpb25zLnNob3dUaW1lID8gYCR7Y3JlYXRlVGltZVN0cmluZyhjb2xvclNlcnZpY2UsIGRhdGUpfSBgIDogXCJcIjtcbiAgY29uc3QgZmliZXJUZXh0ID0gX29wdGlvbnMuc2hvd0ZpYmVySWQgPyBjb2xvclNlcnZpY2UuZGltKGAoRmliZXIgJHtGaWJlcklkLnRocmVhZE5hbWUoZmliZXJJZCl9KSBgKSA6IFwiXCI7XG4gIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0KGNvbG9yU2VydmljZSwgQXJyYXkuZW5zdXJlKG1lc3NhZ2UpLCBjYXVzZSk7XG4gIGNvbnN0IHNwYW5zVGV4dCA9IF9vcHRpb25zLnNob3dTcGFucyA/IGNyZWF0ZVNwYW5UZXh0KGNvbG9yU2VydmljZSwgc3BhbnMpIDogXCJcIjtcbiAgY29uc29sZS5sb2coYCR7dGltZVRleHR9JHtmaWJlclRleHR9JHtsb2dMZXZlbFN0cn0ke3NwYW5zVGV4dH0gJHt0ZXh0fWApO1xuICBpZiAoIUhhc2hNYXAuaXNFbXB0eShhbm5vdGF0aW9ucykpIHtcbiAgICBjb25zdCB0ZXh0ID0gSGFzaE1hcC5yZWR1Y2UoYW5ub3RhdGlvbnMsIFtdLCAoYWNjLCB2LCBrKSA9PiBbLi4uYWNjLCBjb2xvclNlcnZpY2Uud2hpdGUoYFwiJHtrfVwiYCkgKyBgOiAke3NlcmlhbGl6ZVVua25vd24odil9YF0pO1xuICAgIGNvbnNvbGUubG9nKGDhkIkgJHtjb2xvclNlcnZpY2UuZGltKFwie1wiKX0gJHt0ZXh0LmpvaW4oXCIsIFwiKX0gJHtjb2xvclNlcnZpY2UuZGltKFwifVwiKX1gKTtcbiAgfVxufSk7XG4vKipcbiAqIEBjYXRlZ29yeSBsYXllcnNcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnQgY29uc3QgbGF5ZXIgPSBvcHRpb25zID0+IExvZ2dlci5yZXBsYWNlKExvZ2dlci5kZWZhdWx0TG9nZ2VyLCBtYWtlKG9wdGlvbnMpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByZXR0eUxvZ2dlci5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/effect-log/dist/esm/PrettyLogger.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/effect-log/dist/esm/internal/serializeUnkown.js":
/*!**********************************************************************!*\
  !*** ./node_modules/effect-log/dist/esm/internal/serializeUnkown.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serializeUnknown: () => (/* binding */ serializeUnknown)\n/* harmony export */ });\n/** @internal */\nconst serializeUnknown = u => {\n  try {\n    return typeof u === \"object\" ? JSON.stringify(u) : String(u);\n  } catch {\n    return String(u);\n  }\n};\n//# sourceMappingURL=serializeUnkown.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWZmZWN0LWxvZy9kaXN0L2VzbS9pbnRlcm5hbC9zZXJpYWxpemVVbmtvd24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW52ZW50b3J5LXNvZnR3YXJlLy4vbm9kZV9tb2R1bGVzL2VmZmVjdC1sb2cvZGlzdC9lc20vaW50ZXJuYWwvc2VyaWFsaXplVW5rb3duLmpzPzM0M2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVVua25vd24gPSB1ID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIHUgPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh1KSA6IFN0cmluZyh1KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFN0cmluZyh1KTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcmlhbGl6ZVVua293bi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/effect-log/dist/esm/internal/serializeUnkown.js\n");

/***/ })

};
;