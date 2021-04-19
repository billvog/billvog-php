module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/basiles/Code/Node/billvog-php/src/pages/index.tsx\";\n\n\n\nconst Index = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"bg-white\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-center align-middle p-8 bg-gradient-to-r from-gray-700 to-gray-800\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"p-6 bg-gray-700 text-white flex items-center flex-col rounded-3xl\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"assets/profile.jpg\",\n          className: \"w-28 rounded-full\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-2\",\n          children: \"\\u0392\\u03B1\\u03C3\\u03AF\\u03BB\\u03B7\\u03C2 \\u0392\\u03BF\\u03B3\\u03B9\\u03B1\\u03C4\\u03B6\\u03AE\\u03C2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"text-gray-400 text-xs w-full\",\n          children: \"Basiles Bogiatzis\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"text-sm text-gray-400 mt-3\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            target: \"blank\",\n            href: \"https://github.com/billvog\",\n            className: \"font-bold hover:underline flex items-center\",\n            style: {\n              color: \"#24292D\"\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaGithub\"], {\n              className: \"mr-1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, undefined), \"github\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            target: \"blank\",\n            href: \"https://twitter.com/BasilesBoyatzhs\",\n            className: \"font-bold hover:underline flex items-center\",\n            style: {\n              color: \"#08a0e9\"\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaTwitter\"], {\n              className: \"mr-1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, undefined), \"twitter\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            target: \"blank\",\n            href: \"https://ferman.ga/user/voyager\",\n            className: \"font-bold hover:underline flex items-center\",\n            style: {\n              color: \"#deb786\"\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"assets/ferman-icon.ico\",\n              className: \"w-3.5 mr-1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, undefined), \"ferman\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"bg-gray-600 text-white p-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Who am I?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-sm\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"My name is Basiles, I'm from Greece and I am 17 years old. Currently, I'm a student, but one of my major hobbies is programming.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"my-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"I have been dealing with programming for a long time. I've learned several languages the last \\u20535 years (Javascript, C++, C, Python, Java, etc.). Currently, I'm kept busy by ReactJS and project I'm developing called Ferman (\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://ferman.ga\",\n            target: \"blank\",\n            className: \"text-yellow-300 font-bold hover:underline\",\n            children: \"ferman.ga\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, undefined), \").\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"my-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"I'm upload any new project of mine on Github. Find me there @\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            target: \"blank\",\n            href: \"https://github.com/billvog\",\n            className: \"text-blue-400 font-bold hover:underline\",\n            children: \"github.com/billvog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, undefined), \".\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"bg-yellow-400 text-white p-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Who am I?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-sm\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem numquam soluta explicabo eligendi dicta natus alias quae? Facilis, doloribus saepe sunt natus ipsam eveniet rem itaque repudiandae, debitis obcaecati corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem numquam soluta explicabo eligendi dicta natus alias quae?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"my-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"Facilis, doloribus saepe sunt natus ipsam eveniet rem itaque repudiandae, debitis obcaecati corrupti!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQW1CLEdBQUcsTUFBTTtBQUNoQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUZBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUVBQWY7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxvQkFBVDtBQUE4QixtQkFBUyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUssbUJBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNFO0FBQ0Usa0JBQU0sRUFBQyxPQURUO0FBRUUsZ0JBQUksRUFBQyw0QkFGUDtBQUdFLHFCQUFTLEVBQUMsNkNBSFo7QUFJRSxpQkFBSyxFQUFFO0FBQ0xDLG1CQUFLLEVBQUU7QUFERixhQUpUO0FBQUEsb0NBUUUscUVBQUMsdURBQUQ7QUFBVSx1QkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBWUU7QUFDRSxrQkFBTSxFQUFDLE9BRFQ7QUFFRSxnQkFBSSxFQUFDLHFDQUZQO0FBR0UscUJBQVMsRUFBQyw2Q0FIWjtBQUlFLGlCQUFLLEVBQUU7QUFDTEEsbUJBQUssRUFBRTtBQURGLGFBSlQ7QUFBQSxvQ0FRRSxxRUFBQyx3REFBRDtBQUFXLHVCQUFTLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkYsZUF1QkU7QUFDRSxrQkFBTSxFQUFDLE9BRFQ7QUFFRSxnQkFBSSxFQUFDLGdDQUZQO0FBR0UscUJBQVMsRUFBQyw2Q0FIWjtBQUlFLGlCQUFLLEVBQUU7QUFDTEEsbUJBQUssRUFBRTtBQURGLGFBSlQ7QUFBQSxvQ0FRRTtBQUFLLGlCQUFHLEVBQUMsd0JBQVQ7QUFBa0MsdUJBQVMsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUEyQ0U7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUEsMFFBS0U7QUFDRSxnQkFBSSxFQUFDLG1CQURQO0FBRUUsa0JBQU0sRUFBQyxPQUZUO0FBR0UscUJBQVMsRUFBQywyQ0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFxQkU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkYsZUFzQkU7QUFBQSxzRkFDZ0UsR0FEaEUsZUFFRTtBQUNFLGtCQUFNLEVBQUMsT0FEVDtBQUVFLGdCQUFJLEVBQUMsNEJBRlA7QUFHRSxxQkFBUyxFQUFDLHlDQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0YsZUFnRkU7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBU0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUdELENBdEdEOztBQXdHZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhR2l0aHViIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBwLTggYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNzAwIHRvLWdyYXktODAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLWdyYXktNzAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wgcm91bmRlZC0zeGxcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wcm9maWxlLmpwZ1wiIGNsYXNzTmFtZT1cInctMjggcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj7Oks6xz4POr867zrfPgiDOks6/zrPOuc6xz4TOts6uz4I8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC14cyB3LWZ1bGxcIj5CYXNpbGVzIEJvZ2lhdHppczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG10LTNcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9iaWxsdm9nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGhvdmVyOnVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzI0MjkyRFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFHaXRodWIgY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIGdpdGh1YlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9CYXNpbGVzQm95YXR6aHNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgaG92ZXI6dW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDhhMGU5XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYVR3aXR0ZXIgY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIHR3aXR0ZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmVybWFuLmdhL3VzZXIvdm95YWdlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBob3Zlcjp1bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNkZWI3ODZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvZmVybWFuLWljb24uaWNvXCIgY2xhc3NOYW1lPVwidy0zLjUgbXItMVwiIC8+XG4gICAgICAgICAgICAgIGZlcm1hblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIHAtOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5XaG8gYW0gST88L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIE15IG5hbWUgaXMgQmFzaWxlcywgSSdtIGZyb20gR3JlZWNlIGFuZCBJIGFtIDE3IHllYXJzIG9sZC5cbiAgICAgICAgICAgIEN1cnJlbnRseSwgSSdtIGEgc3R1ZGVudCwgYnV0IG9uZSBvZiBteSBtYWpvciBob2JiaWVzIGlzXG4gICAgICAgICAgICBwcm9ncmFtbWluZy5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIEkgaGF2ZSBiZWVuIGRlYWxpbmcgd2l0aCBwcm9ncmFtbWluZyBmb3IgYSBsb25nIHRpbWUuIEkndmUgbGVhcm5lZFxuICAgICAgICAgICAgc2V2ZXJhbCBsYW5ndWFnZXMgdGhlIGxhc3Qg4oGTNSB5ZWFycyAoSmF2YXNjcmlwdCwgQysrLCBDLCBQeXRob24sXG4gICAgICAgICAgICBKYXZhLCBldGMuKS4gQ3VycmVudGx5LCBJJ20ga2VwdCBidXN5IGJ5IFJlYWN0SlMgYW5kIHByb2plY3QgSSdtXG4gICAgICAgICAgICBkZXZlbG9waW5nIGNhbGxlZCBGZXJtYW4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmVybWFuLmdhXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy0zMDAgZm9udC1ib2xkIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZlcm1hbi5nYVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKS5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIEknbSB1cGxvYWQgYW55IG5ldyBwcm9qZWN0IG9mIG1pbmUgb24gR2l0aHViLiBGaW5kIG1lIHRoZXJlIEB7XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYmlsbHZvZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgZm9udC1ib2xkIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGdpdGh1Yi5jb20vYmlsbHZvZ1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTQwMCB0ZXh0LXdoaXRlIHAtOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5XaG8gYW0gST88L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcmVtXG4gICAgICAgICAgICBudW1xdWFtIHNvbHV0YSBleHBsaWNhYm8gZWxpZ2VuZGkgZGljdGEgbmF0dXMgYWxpYXMgcXVhZT8gRmFjaWxpcyxcbiAgICAgICAgICAgIGRvbG9yaWJ1cyBzYWVwZSBzdW50IG5hdHVzIGlwc2FtIGV2ZW5pZXQgcmVtIGl0YXF1ZSByZXB1ZGlhbmRhZSxcbiAgICAgICAgICAgIGRlYml0aXMgb2JjYWVjYXRpIGNvcnJ1cHRpISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1cixcbiAgICAgICAgICAgIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZW0gbnVtcXVhbSBzb2x1dGEgZXhwbGljYWJvIGVsaWdlbmRpIGRpY3RhXG4gICAgICAgICAgICBuYXR1cyBhbGlhcyBxdWFlP1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIiAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgRmFjaWxpcywgZG9sb3JpYnVzIHNhZXBlIHN1bnQgbmF0dXMgaXBzYW0gZXZlbmlldCByZW0gaXRhcXVlXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSwgZGViaXRpcyBvYmNhZWNhdGkgY29ycnVwdGkhXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });