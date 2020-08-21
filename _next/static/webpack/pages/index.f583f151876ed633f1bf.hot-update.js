webpackHotUpdate_N_E("pages/index",{

/***/ "./components/tweet-this.js":
/*!**********************************!*\
  !*** ./components/tweet-this.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TweetThis; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\n\nvar _jsxFileName = \"/Users/tymick/Documents/portfolio/rt-simulator/components/tweet-this.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction TweetThis(_ref) {\n  _s();\n\n  var _childrenRef$current;\n\n  var children = _ref.children,\n      tweetText = _ref.tweetText,\n      tweetUrl = _ref.tweetUrl,\n      tweetURL = _ref.tweetURL,\n      tweetVia = _ref.tweetVia,\n      tweetHashtags = _ref.tweetHashtags,\n      tweetRelated = _ref.tweetRelated,\n      sameWindow = _ref.sameWindow,\n      sameTab = _ref.sameTab,\n      newWindow = _ref.newWindow,\n      newTab = _ref.newTab,\n      tweetButtonProps = _ref.tweetButtonProps,\n      asComponent = _ref.as,\n      className = _ref.className,\n      otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\", \"tweetText\", \"tweetUrl\", \"tweetURL\", \"tweetVia\", \"tweetHashtags\", \"tweetRelated\", \"sameWindow\", \"sameTab\", \"newWindow\", \"newTab\", \"tweetButtonProps\", \"as\", \"className\"]);\n\n  var Component = asComponent || \"span\";\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      colorActive = _useState[0],\n      setColorActive = _useState[1];\n\n  var activateColor = function activateColor() {\n    return setColorActive(true);\n  };\n\n  var removeColor = function removeColor() {\n    return setColorActive(false);\n  };\n\n  var childrenRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      windowHref = _useState2[0],\n      setWindowHref = _useState2[1];\n\n  useEffect(function () {\n    return setWindowHref(window.location.href);\n  }, []);\n  var intentHref = \"https://twitter.com/intent/tweet?\";\n\n  if (tweetText || (childrenRef === null || childrenRef === void 0 ? void 0 : (_childrenRef$current = childrenRef.current) === null || _childrenRef$current === void 0 ? void 0 : _childrenRef$current.textContent)) {\n    intentHref += \"text=\".concat(encodeURIComponent(tweetText || childrenRef.current.textContent), \"&\");\n  }\n\n  if (tweetUrl || tweetURL || windowHref) {\n    intentHref += \"url=\".concat(encodeURIComponent(tweetUrl || tweetURL || windowHref), \"&\");\n  }\n\n  if (tweetVia) {\n    intentHref += \"via=\".concat(encodeURIComponent(tweetVia), \"&\");\n  }\n\n  if (tweetHashtags) {\n    var hashtagsStr;\n\n    if (Array.isArray(tweetHashtags)) {\n      hashtagsStr = tweetHashtags.join(\",\");\n    } else {\n      hashtagsStr = tweetHashtags;\n    }\n\n    intentHref += \"hashtags=\".concat(encodeURIComponent(hashtagsStr), \"&\");\n  }\n\n  if (tweetRelated) {\n    var relatedStr;\n\n    if (Array.isArray(tweetRelated)) {\n      relatedStr = tweetRelated.join(\",\");\n    } else {\n      relatedStr = tweetRelated;\n    }\n\n    intentHref += \"related=\".concat(encodeURIComponent(relatedStr), \"&\");\n  }\n\n  intentHref = intentHref.slice(0, intentHref.length - 1); // Make it easy to turn off target=\"_blank\"\n\n  var targetBlank = sameWindow !== true && sameTab !== true && newWindow !== false && newTab !== false;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: childrenRef,\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"tweet-this\", colorActive && \"tweet-this-active\", className)\n  }, otherProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }), children), \" \", __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"twitter-badge-btn\",\n    href: intentHref\n  }, targetBlank && {\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, {\n    onMouseEnter: activateColor,\n    onMouseLeave: removeColor,\n    onFocus: activateColor,\n    onBlur: removeColor,\n    \"aria-label\": \"Tweet the preceding sentence\"\n  }, tweetButtonProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTwitter\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }), \" Tweet this\"));\n}\n\n_s(TweetThis, \"HuhSc2ARA/98JvxRXbmIc4h8uaE=\");\n\n_c = TweetThis;\n\nvar _c;\n\n$RefreshReg$(_c, \"TweetThis\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90d2VldC10aGlzLmpzPzQyZDIiXSwibmFtZXMiOlsiVHdlZXRUaGlzIiwiY2hpbGRyZW4iLCJ0d2VldFRleHQiLCJ0d2VldFVybCIsInR3ZWV0VVJMIiwidHdlZXRWaWEiLCJ0d2VldEhhc2h0YWdzIiwidHdlZXRSZWxhdGVkIiwic2FtZVdpbmRvdyIsInNhbWVUYWIiLCJuZXdXaW5kb3ciLCJuZXdUYWIiLCJ0d2VldEJ1dHRvblByb3BzIiwiYXNDb21wb25lbnQiLCJhcyIsImNsYXNzTmFtZSIsIm90aGVyUHJvcHMiLCJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsImNvbG9yQWN0aXZlIiwic2V0Q29sb3JBY3RpdmUiLCJhY3RpdmF0ZUNvbG9yIiwicmVtb3ZlQ29sb3IiLCJjaGlsZHJlblJlZiIsInVzZVJlZiIsIndpbmRvd0hyZWYiLCJzZXRXaW5kb3dIcmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW50ZW50SHJlZiIsImN1cnJlbnQiLCJ0ZXh0Q29udGVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhhc2h0YWdzU3RyIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsInJlbGF0ZWRTdHIiLCJzbGljZSIsImxlbmd0aCIsInRhcmdldEJsYW5rIiwiY2xzeCIsInRhcmdldCIsInJlbCIsImZhVHdpdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQWdCWjtBQUFBOztBQUFBOztBQUFBLE1BZkRDLFFBZUMsUUFmREEsUUFlQztBQUFBLE1BZERDLFNBY0MsUUFkREEsU0FjQztBQUFBLE1BYkRDLFFBYUMsUUFiREEsUUFhQztBQUFBLE1BWkRDLFFBWUMsUUFaREEsUUFZQztBQUFBLE1BWERDLFFBV0MsUUFYREEsUUFXQztBQUFBLE1BVkRDLGFBVUMsUUFWREEsYUFVQztBQUFBLE1BVERDLFlBU0Ms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QUssS0FKYjtBQU1BLFNBQ0UsbUVBQ0UsTUFBQyxTQUFEO0FBQ0UsT0FBRyxFQUFFWSxXQURQO0FBRUUsYUFBUyxFQUFFb0Isb0RBQUksQ0FDYixZQURhLEVBRWJ4QixXQUFXLElBQUksbUJBRkYsRUFHYkosU0FIYTtBQUZqQixLQU9NQyxVQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTR2YsUUFUSCxDQURGLEVBV2UsR0FYZixFQVlFO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFFOEI7QUFGUixLQUdPVyxXQUFXLElBQUk7QUFBRUUsVUFBTSxFQUFFLFFBQVY7QUFBb0JDLE9BQUcsRUFBRTtBQUF6QixHQUh0QjtBQUlFLGdCQUFZLEVBQUV4QixhQUpoQjtBQUtFLGdCQUFZLEVBQUVDLFdBTGhCO0FBTUUsV0FBTyxFQUFFRCxhQU5YO0FBT0UsVUFBTSxFQUFFQyxXQVBWO0FBUUUsa0JBQVc7QUFSYixLQVNNVixnQkFUTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVrQyw0RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLGdCQVpGLENBREY7QUE0QkQ7O0dBaEd1QjlDLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3R3ZWV0LXRoaXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFUd2l0dGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3ZWV0VGhpcyh7XG4gIGNoaWxkcmVuLFxuICB0d2VldFRleHQsXG4gIHR3ZWV0VXJsLFxuICB0d2VldFVSTCxcbiAgdHdlZXRWaWEsXG4gIHR3ZWV0SGFzaHRhZ3MsXG4gIHR3ZWV0UmVsYXRlZCxcbiAgc2FtZVdpbmRvdyxcbiAgc2FtZVRhYixcbiAgbmV3V2luZG93LFxuICBuZXdUYWIsXG4gIHR3ZWV0QnV0dG9uUHJvcHMsXG4gIGFzOiBhc0NvbXBvbmVudCxcbiAgY2xhc3NOYW1lLFxuICAuLi5vdGhlclByb3BzXG59KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGFzQ29tcG9uZW50IHx8IFwic3BhblwiO1xuXG4gIGNvbnN0IFtjb2xvckFjdGl2ZSwgc2V0Q29sb3JBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY3RpdmF0ZUNvbG9yID0gKCkgPT4gc2V0Q29sb3JBY3RpdmUodHJ1ZSk7XG4gIGNvbnN0IHJlbW92ZUNvbG9yID0gKCkgPT4gc2V0Q29sb3JBY3RpdmUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoaWxkcmVuUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbd2luZG93SHJlZiwgc2V0V2luZG93SHJlZl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldFdpbmRvd0hyZWYod2luZG93LmxvY2F0aW9uLmhyZWYpLCBbXSk7XG5cbiAgbGV0IGludGVudEhyZWYgPSBcImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P1wiO1xuICBpZiAodHdlZXRUZXh0IHx8IGNoaWxkcmVuUmVmPy5jdXJyZW50Py50ZXh0Q29udGVudCkge1xuICAgIGludGVudEhyZWYgKz0gYHRleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICB0d2VldFRleHQgfHwgY2hpbGRyZW5SZWYuY3VycmVudC50ZXh0Q29udGVudFxuICAgICl9JmA7XG4gIH1cbiAgaWYgKHR3ZWV0VXJsIHx8IHR3ZWV0VVJMIHx8IHdpbmRvd0hyZWYpIHtcbiAgICBpbnRlbnRIcmVmICs9IGB1cmw9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICB0d2VldFVybCB8fCB0d2VldFVSTCB8fCB3aW5kb3dIcmVmXG4gICAgKX0mYDtcbiAgfVxuICBpZiAodHdlZXRWaWEpIHtcbiAgICBpbnRlbnRIcmVmICs9IGB2aWE9JHtlbmNvZGVVUklDb21wb25lbnQodHdlZXRWaWEpfSZgO1xuICB9XG4gIGlmICh0d2VldEhhc2h0YWdzKSB7XG4gICAgbGV0IGhhc2h0YWdzU3RyO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHR3ZWV0SGFzaHRhZ3MpKSB7XG4gICAgICBoYXNodGFnc1N0ciA9IHR3ZWV0SGFzaHRhZ3Muam9pbihcIixcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc2h0YWdzU3RyID0gdHdlZXRIYXNodGFncztcbiAgICB9XG4gICAgaW50ZW50SHJlZiArPSBgaGFzaHRhZ3M9JHtlbmNvZGVVUklDb21wb25lbnQoaGFzaHRhZ3NTdHIpfSZgO1xuICB9XG4gIGlmICh0d2VldFJlbGF0ZWQpIHtcbiAgICBsZXQgcmVsYXRlZFN0cjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0d2VldFJlbGF0ZWQpKSB7XG4gICAgICByZWxhdGVkU3RyID0gdHdlZXRSZWxhdGVkLmpvaW4oXCIsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWxhdGVkU3RyID0gdHdlZXRSZWxhdGVkO1xuICAgIH1cbiAgICBpbnRlbnRIcmVmICs9IGByZWxhdGVkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlbGF0ZWRTdHIpfSZgO1xuICB9XG4gIGludGVudEhyZWYgPSBpbnRlbnRIcmVmLnNsaWNlKDAsIGludGVudEhyZWYubGVuZ3RoIC0gMSk7XG5cbiAgLy8gTWFrZSBpdCBlYXN5IHRvIHR1cm4gb2ZmIHRhcmdldD1cIl9ibGFua1wiXG4gIGNvbnN0IHRhcmdldEJsYW5rID1cbiAgICBzYW1lV2luZG93ICE9PSB0cnVlICYmXG4gICAgc2FtZVRhYiAhPT0gdHJ1ZSAmJlxuICAgIG5ld1dpbmRvdyAhPT0gZmFsc2UgJiZcbiAgICBuZXdUYWIgIT09IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgcmVmPXtjaGlsZHJlblJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidHdlZXQtdGhpc1wiLFxuICAgICAgICAgIGNvbG9yQWN0aXZlICYmIFwidHdlZXQtdGhpcy1hY3RpdmVcIixcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29tcG9uZW50PntcIiBcIn1cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItYmFkZ2UtYnRuXCJcbiAgICAgICAgaHJlZj17aW50ZW50SHJlZn1cbiAgICAgICAgey4uLih0YXJnZXRCbGFuayAmJiB7IHRhcmdldDogXCJfYmxhbmtcIiwgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB9KX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXthY3RpdmF0ZUNvbG9yfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUNvbG9yfVxuICAgICAgICBvbkZvY3VzPXthY3RpdmF0ZUNvbG9yfVxuICAgICAgICBvbkJsdXI9e3JlbW92ZUNvbG9yfVxuICAgICAgICBhcmlhLWxhYmVsPVwiVHdlZXQgdGhlIHByZWNlZGluZyBzZW50ZW5jZVwiXG4gICAgICAgIHsuLi50d2VldEJ1dHRvblByb3BzfVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gLz4gVHdlZXQgdGhpc1xuICAgICAgPC9hPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tweet-this.js\n");

/***/ })

})