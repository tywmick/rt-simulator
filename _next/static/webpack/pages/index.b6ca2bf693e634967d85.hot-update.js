webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/use-covid-data.js":
/*!*********************************!*\
  !*** ./hooks/use-covid-data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useCovidData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var data_forge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data-forge */ \"./node_modules/data-forge/dist/esm/index.esm.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n // Rt Live only requires attribution for data use: https://rt.live/faq#may-i-display-your-data-elsewhere-eg-my-site-publication-etc\n\nvar rtLiveDataUrl = \"https://d14wlfuexuxgcm.cloudfront.net/covid/rt.csv\";\nfunction useCovidData(dispatch, initialData, options) {\n  _s();\n\n  var _data$usaNewCases7Day, _data$stateData;\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rtLiveDataUrl, fetchRtData, Object.assign({\n    revalidateOnFocus: false,\n    // revalidateOnMount: false,\n    revalidateOnReconnect: false,\n    errorRetryInterval: 0\n  }, options)),\n      data = _useSWR.data,\n      error = _useSWR.error,\n      isValidating = _useSWR.isValidating;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (dispatch && data) {\n      dispatch({\n        type: \"covidDataLoaded\",\n        payload: data\n      });\n    }\n  }, [dispatch, data]);\n  return {\n    covidDataLoaded: data !== undefined,\n    usaNewCases7DayAvg: (_data$usaNewCases7Day = data === null || data === void 0 ? void 0 : data.usaNewCases7DayAvg) !== null && _data$usaNewCases7Day !== void 0 ? _data$usaNewCases7Day : initialData === null || initialData === void 0 ? void 0 : initialData.usaNewCases7DayAvg,\n    stateData: (_data$stateData = data === null || data === void 0 ? void 0 : data.stateData) !== null && _data$stateData !== void 0 ? _data$stateData : initialData === null || initialData === void 0 ? void 0 : initialData.stateData,\n    error: error,\n    isValidating: isValidating\n  };\n}\n\n_s(useCovidData, \"KXsk9crUCvqkL/T1aFU+aa5Qr+8=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\nfunction fetchRtData(_x) {\n  return _fetchRtData.apply(this, arguments);\n}\n\nfunction _fetchRtData() {\n  _fetchRtData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(csvUrl) {\n    var csvResponse, csvBlob, csvText, error;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return unfetch__WEBPACK_IMPORTED_MODULE_4___default()(csvUrl, {\n              method: \"GET\"\n            });\n\n          case 3:\n            csvResponse = _context.sent;\n\n            if (!csvResponse.ok) {\n              _context.next = 16;\n              break;\n            }\n\n            _context.next = 7;\n            return csvResponse.blob();\n\n          case 7:\n            csvBlob = _context.sent;\n            _context.next = 10;\n            return new Promise(function (resolve, reject) {\n              var reader = new FileReader();\n\n              reader.onload = function (event) {\n                resolve(event.target.result);\n              };\n\n              reader.readAsText(csvBlob);\n            });\n\n          case 10:\n            csvText = _context.sent;\n            _context.next = 13;\n            return formatRtData(csvText);\n\n          case 13:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 16:\n            error = new Error(csvResponse.statusText);\n            error.response = csvResponse;\n            throw error;\n\n          case 19:\n            _context.next = 24;\n            break;\n\n          case 21:\n            _context.prev = 21;\n            _context.t0 = _context[\"catch\"](0);\n            throw _context.t0;\n\n          case 24:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 21]]);\n  }));\n  return _fetchRtData.apply(this, arguments);\n}\n\nfunction formatRtData(_x2) {\n  return _formatRtData.apply(this, arguments);\n}\n\nfunction _formatRtData() {\n  _formatRtData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(csvString) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n              var fullData = Object(data_forge__WEBPACK_IMPORTED_MODULE_5__[\"fromCSV\"])(csvString).parseDates(\"date\").parseInts([\"index\", \"positive\", \"tests\", \"new_tests\", \"new_cases\", \"new_deaths\"]).parseFloats([\"mean\", \"median\", \"lower_80\", \"upper_80\", \"infections\", \"test_adjusted_positive\", \"test_adjusted_positive_raw\"]).bake();\n              var subset = fullData.subset([\"date\", \"region\", \"median\", \"lower_80\", \"upper_80\", \"new_cases\"]).bake();\n              var latestDate = new Date(fullData.getSeries(\"date\").max());\n              var lastWeek = subset.where(function (row) {\n                return Object(date_fns__WEBPACK_IMPORTED_MODULE_6__[\"isAfter\"])(new Date(row.date), Object(date_fns__WEBPACK_IMPORTED_MODULE_6__[\"subDays\"])(latestDate, 7));\n              }).bake();\n              var lastDay = subset.where(function (row) {\n                return Object(date_fns__WEBPACK_IMPORTED_MODULE_6__[\"isEqual\"])(new Date(row.date), latestDate);\n              }).bake();\n              var data = {\n                usaNewCases7DayAvg: getNewCases7DayAvg(),\n                stateData: {}\n              };\n\n              function getNewCases7DayAvg(region) {\n                var filtered;\n\n                if (region) {\n                  filtered = lastWeek.where(function (row) {\n                    return row.region === region;\n                  }).bake();\n                } else {\n                  filtered = lastWeek.bake();\n                }\n\n                var avg = filtered.getSeries(\"new_cases\").sum() / 7;\n                return Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"round\"])(avg);\n              }\n\n              function getRtEstimate(region) {\n                var getField = function getField(field) {\n                  var value = lastDay.where(function (row) {\n                    return row.region === region;\n                  }).getSeries(field).average();\n                  return Object(lodash__WEBPACK_IMPORTED_MODULE_7__[\"round\"])(value, 2);\n                };\n\n                return {\n                  median: getField(\"median\"),\n                  lower_80: getField(\"lower_80\"),\n                  upper_80: getField(\"upper_80\")\n                };\n              }\n\n              var regions = lastWeek.getSeries(\"region\").distinct().toArray();\n\n              var _iterator = _createForOfIteratorHelper(regions),\n                  _step;\n\n              try {\n                for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                  var region = _step.value;\n                  data.stateData[region] = {\n                    newCases7DayAvg: getNewCases7DayAvg(region),\n                    rtEstimate: getRtEstimate(region)\n                  };\n                }\n              } catch (err) {\n                _iterator.e(err);\n              } finally {\n                _iterator.f();\n              }\n\n              resolve(data);\n            }));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _formatRtData.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLWNvdmlkLWRhdGEuanM/OTI2NyJdLCJuYW1lcyI6WyJydExpdmVEYXRhVXJsIiwidXNlQ292aWREYXRhIiwiZGlzcGF0Y2giLCJpbml0aWFsRGF0YSIsIm9wdGlvbnMiLCJ1c2VTV1IiLCJmZXRjaFJ0RGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInJldmFsaWRhdGVPbkZvY3VzIiwicmV2YWxpZGF0ZU9uUmVjb25uZWN0IiwiZXJyb3JSZXRyeUludGVydmFsIiwiZGF0YSIsImVycm9yIiwiaXNWYWxpZGF0aW5nIiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJjb3ZpZERhdGFMb2FkZWQiLCJ1bmRlZmluZWQiLCJ1c2FOZXdDYXNlczdEYXlBdmciLCJzdGF0ZURhdGEiLCJjc3ZVcmwiLCJmZXRjaCIsIm1ldGhvZCIsImNzdlJlc3BvbnNlIiwib2siLCJibG9iIiwiY3N2QmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsImNzdlRleHQiLCJmb3JtYXRSdERhdGEiLCJFcnJvciIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsImNzdlN0cmluZyIsImZ1bGxEYXRhIiwiZnJvbUNTViIsInBhcnNlRGF0ZXMiLCJwYXJzZUludHMiLCJwYXJzZUZsb2F0cyIsImJha2UiLCJzdWJzZXQiLCJsYXRlc3REYXRlIiwiRGF0ZSIsImdldFNlcmllcyIsIm1heCIsImxhc3RXZWVrIiwid2hlcmUiLCJyb3ciLCJpc0FmdGVyIiwiZGF0ZSIsInN1YkRheXMiLCJsYXN0RGF5IiwiaXNFcXVhbCIsImdldE5ld0Nhc2VzN0RheUF2ZyIsInJlZ2lvbiIsImZpbHRlcmVkIiwiYXZnIiwic3VtIiwicm91bmQiLCJnZXRSdEVzdGltYXRlIiwiZ2V0RmllbGQiLCJmaWVsZCIsInZhbHVlIiwiYXZlcmFnZSIsIm1lZGlhbiIsImxvd2VyXzgwIiwidXBwZXJfODAiLCJyZWdpb25zIiwiZGlzdGluY3QiLCJ0b0FycmF5IiwibmV3Q2FzZXM3RGF5QXZnIiwicnRFc3RpbWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUcsb0RBQXRCO0FBRWUsU0FBU0MsWUFBVCxDQUFzQkMsUUFBdEIsRUFBZ0NDLFdBQWhDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUFBOztBQUFBOztBQUFBLGdCQUM3QkMsbURBQU0sQ0FDMUNMLGFBRDBDLEVBRTFDTSxXQUYwQyxFQUcxQ0MsTUFBTSxDQUFDQyxNQUFQLENBQ0U7QUFDRUMscUJBQWlCLEVBQUUsS0FEckI7QUFFRTtBQUNBQyx5QkFBcUIsRUFBRSxLQUh6QjtBQUlFQyxzQkFBa0IsRUFBRTtBQUp0QixHQURGLEVBT0VQLE9BUEYsQ0FIMEMsQ0FEdUI7QUFBQSxNQUMzRFEsSUFEMkQsV0FDM0RBLElBRDJEO0FBQUEsTUFDckRDLEtBRHFELFdBQ3JEQSxLQURxRDtBQUFBLE1BQzlDQyxZQUQ4QyxXQUM5Q0EsWUFEOEM7O0FBZW5FQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYixRQUFRLElBQUlVLElBQWhCLEVBQXNCO0FBQ3BCVixjQUFRLENBQUM7QUFBRWMsWUFBSSxFQUFFLGlCQUFSO0FBQTJCQyxlQUFPLEVBQUVMO0FBQXBDLE9BQUQsQ0FBUjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNWLFFBQUQsRUFBV1UsSUFBWCxDQUpNLENBQVQ7QUFNQSxTQUFPO0FBQ0xNLG1CQUFlLEVBQUVOLElBQUksS0FBS08sU0FEckI7QUFFTEMsc0JBQWtCLDJCQUNoQlIsSUFEZ0IsYUFDaEJBLElBRGdCLHVCQUNoQkEsSUFBSSxDQUFFUSxrQkFEVSx5RUFDWWpCLFdBRFosYUFDWUEsV0FEWix1QkFDWUEsV0FBVyxDQUFFaUIsa0JBSHRDO0FBSUxDLGFBQVMscUJBQUVU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QUFRLENBQUMsUUFBRCxDQURYO0FBRUxLLDBCQUFRLEVBQUVMLFFBQVEsQ0FBQyxVQUFELENBRmI7QUFHTE0sMEJBQVEsRUFBRU4sUUFBUSxDQUFDLFVBQUQ7QUFIYixpQkFBUDtBQUtEOztBQUVELGtCQUFNTyxPQUFPLEdBQUd0QixRQUFRLENBQUNGLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkJ5QixRQUE3QixHQUF3Q0MsT0FBeEMsRUFBaEI7O0FBNURzQyx5REE2RGpCRixPQTdEaUI7QUFBQTs7QUFBQTtBQTZEdEMsb0VBQThCO0FBQUEsc0JBQW5CYixNQUFtQjtBQUM1QnJELHNCQUFJLENBQUNTLFNBQUwsQ0FBZTRDLE1BQWYsSUFBeUI7QUFDdkJnQixtQ0FBZSxFQUFFakIsa0JBQWtCLENBQUNDLE1BQUQsQ0FEWjtBQUV2QmlCLDhCQUFVLEVBQUVaLGFBQWEsQ0FBQ0wsTUFBRDtBQUZGLG1CQUF6QjtBQUlEO0FBbEVxQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9FdENuQyxxQkFBTyxDQUFDbEIsSUFBRCxDQUFQO0FBQ0QsYUFyRU0sQ0FEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vaG9va3MvdXNlLWNvdmlkLWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJ1bmZldGNoXCI7XG5pbXBvcnQgeyBmcm9tQ1NWIH0gZnJvbSBcImRhdGEtZm9yZ2VcIjtcbmltcG9ydCB7IGlzQWZ0ZXIsIHN1YkRheXMsIGlzRXF1YWwgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcImxvZGFzaFwiO1xuXG4vLyBSdCBMaXZlIG9ubHkgcmVxdWlyZXMgYXR0cmlidXRpb24gZm9yIGRhdGEgdXNlOiBodHRwczovL3J0LmxpdmUvZmFxI21heS1pLWRpc3BsYXkteW91ci1kYXRhLWVsc2V3aGVyZS1lZy1teS1zaXRlLXB1YmxpY2F0aW9uLWV0Y1xuY29uc3QgcnRMaXZlRGF0YVVybCA9IFwiaHR0cHM6Ly9kMTR3bGZ1ZXh1eGdjbS5jbG91ZGZyb250Lm5ldC9jb3ZpZC9ydC5jc3ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ292aWREYXRhKGRpc3BhdGNoLCBpbml0aWFsRGF0YSwgb3B0aW9ucykge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcgfSA9IHVzZVNXUihcbiAgICBydExpdmVEYXRhVXJsLFxuICAgIGZldGNoUnREYXRhLFxuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgLy8gcmV2YWxpZGF0ZU9uTW91bnQ6IGZhbHNlLFxuICAgICAgICByZXZhbGlkYXRlT25SZWNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICBlcnJvclJldHJ5SW50ZXJ2YWw6IDAsXG4gICAgICB9LFxuICAgICAgb3B0aW9uc1xuICAgIClcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaXNwYXRjaCAmJiBkYXRhKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiY292aWREYXRhTG9hZGVkXCIsIHBheWxvYWQ6IGRhdGEgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIGRhdGFdKTtcblxuICByZXR1cm4ge1xuICAgIGNvdmlkRGF0YUxvYWRlZDogZGF0YSAhPT0gdW5kZWZpbmVkLFxuICAgIHVzYU5ld0Nhc2VzN0RheUF2ZzpcbiAgICAgIGRhdGE/LnVzYU5ld0Nhc2VzN0RheUF2ZyA/PyBpbml0aWFsRGF0YT8udXNhTmV3Q2FzZXM3RGF5QXZnLFxuICAgIHN0YXRlRGF0YTogZGF0YT8uc3RhdGVEYXRhID8/IGluaXRpYWxEYXRhPy5zdGF0ZURhdGEsXG4gICAgZXJyb3IsXG4gICAgaXNWYWxpZGF0aW5nLFxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJ0RGF0YShjc3ZVcmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjc3ZSZXNwb25zZSA9IGF3YWl0IGZldGNoKGNzdlVybCwgeyBtZXRob2Q6IFwiR0VUXCIgfSk7XG4gICAgaWYgKGNzdlJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBjc3ZCbG9iID0gYXdhaXQgY3N2UmVzcG9uc2UuYmxvYigpO1xuICAgICAgY29uc3QgY3N2VGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChjc3ZCbG9iKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYXdhaXQgZm9ybWF0UnREYXRhKGNzdlRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoY3N2UmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICBlcnJvci5yZXNwb25zZSA9IGNzdlJlc3BvbnNlO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZm9ybWF0UnREYXRhKGNzdlN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxEYXRhID0gZnJvbUNTVihjc3ZTdHJpbmcpXG4gICAgICAucGFyc2VEYXRlcyhcImRhdGVcIilcbiAgICAgIC5wYXJzZUludHMoW1xuICAgICAgICBcImluZGV4XCIsXG4gICAgICAgIFwicG9zaXRpdmVcIixcbiAgICAgICAgXCJ0ZXN0c1wiLFxuICAgICAgICBcIm5ld190ZXN0c1wiLFxuICAgICAgICBcIm5ld19jYXNlc1wiLFxuICAgICAgICBcIm5ld19kZWF0aHNcIixcbiAgICAgIF0pXG4gICAgICAucGFyc2VGbG9hdHMoW1xuICAgICAgICBcIm1lYW5cIixcbiAgICAgICAgXCJtZWRpYW5cIixcbiAgICAgICAgXCJsb3dlcl84MFwiLFxuICAgICAgICBcInVwcGVyXzgwXCIsXG4gICAgICAgIFwiaW5mZWN0aW9uc1wiLFxuICAgICAgICBcInRlc3RfYWRqdXN0ZWRfcG9zaXRpdmVcIixcbiAgICAgICAgXCJ0ZXN0X2FkanVzdGVkX3Bvc2l0aXZlX3Jhd1wiLFxuICAgICAgXSlcbiAgICAgIC5iYWtlKCk7XG4gICAgY29uc3Qgc3Vic2V0ID0gZnVsbERhdGFcbiAgICAgIC5zdWJzZXQoW1wiZGF0ZVwiLCBcInJlZ2lvblwiLCBcIm1lZGlhblwiLCBcImxvd2VyXzgwXCIsIFwidXBwZXJfODBcIiwgXCJuZXdfY2FzZXNcIl0pXG4gICAgICAuYmFrZSgpO1xuXG4gICAgY29uc3QgbGF0ZXN0RGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRhLmdldFNlcmllcyhcImRhdGVcIikubWF4KCkpO1xuICAgIGNvbnN0IGxhc3RXZWVrID0gc3Vic2V0XG4gICAgICAud2hlcmUoKHJvdykgPT4gaXNBZnRlcihuZXcgRGF0ZShyb3cuZGF0ZSksIHN1YkRheXMobGF0ZXN0RGF0ZSwgNykpKVxuICAgICAgLmJha2UoKTtcbiAgICBjb25zdCBsYXN0RGF5ID0gc3Vic2V0XG4gICAgICAud2hlcmUoKHJvdykgPT4gaXNFcXVhbChuZXcgRGF0ZShyb3cuZGF0ZSksIGxhdGVzdERhdGUpKVxuICAgICAgLmJha2UoKTtcblxuICAgIGxldCBkYXRhID0geyB1c2FOZXdDYXNlczdEYXlBdmc6IGdldE5ld0Nhc2VzN0RheUF2ZygpLCBzdGF0ZURhdGE6IHt9IH07XG5cbiAgICBmdW5jdGlvbiBnZXROZXdDYXNlczdEYXlBdmcocmVnaW9uKSB7XG4gICAgICBsZXQgZmlsdGVyZWQ7XG4gICAgICBpZiAocmVnaW9uKSB7XG4gICAgICAgIGZpbHRlcmVkID0gbGFzdFdlZWsud2hlcmUoKHJvdykgPT4gcm93LnJlZ2lvbiA9PT0gcmVnaW9uKS5iYWtlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJlZCA9IGxhc3RXZWVrLmJha2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF2ZyA9IGZpbHRlcmVkLmdldFNlcmllcyhcIm5ld19jYXNlc1wiKS5zdW0oKSAvIDc7XG4gICAgICByZXR1cm4gcm91bmQoYXZnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UnRFc3RpbWF0ZShyZWdpb24pIHtcbiAgICAgIGNvbnN0IGdldEZpZWxkID0gKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbGFzdERheVxuICAgICAgICAgIC53aGVyZSgocm93KSA9PiByb3cucmVnaW9uID09PSByZWdpb24pXG4gICAgICAgICAgLmdldFNlcmllcyhmaWVsZClcbiAgICAgICAgICAuYXZlcmFnZSgpO1xuICAgICAgICByZXR1cm4gcm91bmQodmFsdWUsIDIpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lZGlhbjogZ2V0RmllbGQoXCJtZWRpYW5cIiksXG4gICAgICAgIGxvd2VyXzgwOiBnZXRGaWVsZChcImxvd2VyXzgwXCIpLFxuICAgICAgICB1cHBlcl84MDogZ2V0RmllbGQoXCJ1cHBlcl84MFwiKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVnaW9ucyA9IGxhc3RXZWVrLmdldFNlcmllcyhcInJlZ2lvblwiKS5kaXN0aW5jdCgpLnRvQXJyYXkoKTtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiByZWdpb25zKSB7XG4gICAgICBkYXRhLnN0YXRlRGF0YVtyZWdpb25dID0ge1xuICAgICAgICBuZXdDYXNlczdEYXlBdmc6IGdldE5ld0Nhc2VzN0RheUF2ZyhyZWdpb24pLFxuICAgICAgICBydEVzdGltYXRlOiBnZXRSdEVzdGltYXRlKHJlZ2lvbiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-covid-data.js\n");

/***/ })

})