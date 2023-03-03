/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("setViewPortHeight();\r\nwindow.addEventListener(\"load\", setViewPortHeight);\r\nwindow.addEventListener(\"resize\", setViewPortHeight);\r\n\r\nfunction setViewPortHeight() {\r\n    // Get the viewport height and multiple it by 1% to get a value for a vh unit\r\n    let vh = window.innerHeight * 0.01;\r\n    // Set the value in the --vh custom property to the root of the document\r\n    document.documentElement.style.setProperty('--vh', `${vh}px`);\r\n}\r\n\r\n// Add fullpage view to sections\r\nvar fullScreenPage = document.getElementById('fullpage');\r\nif(fullScreenPage){\r\n    new fullpage('#fullpage', {\r\n        licenseKey: 'gplv3-license',\r\n        autoScrolling:true,\r\n        scrollHorizontally: true,\r\n        credits: { enabled:  false},\r\n    \r\n    });    \r\n}\r\n\r\n// Add profile typed text animation\r\nvar typedBlock = document.getElementById('profile-typed');\r\nif(typedBlock){\r\n    var typed = new Typed('#profile-typed', {\r\n        stringsElement: '#profile-typed-strings',\r\n        smartBackspace: true,\r\n        typeSpeed: 100,\r\n        backSpeed: 100,\r\n        loop: true,\r\n        showCursor: true,\r\n        cursorChar: '|',\r\n        autoInsertCss: true,\r\n    });\r\n}\r\n\r\n// Set welcome text height according to it's content\r\nvar welcomeTextBlock = document.getElementById('welcome-text');\r\nif(welcomeTextBlock){\r\n    function setWelcomeTextHeight() {\r\n        var welcomeTextTitle = document.querySelector('.welcome-text-title');\r\n        welcomeTextBlock.style.height = welcomeTextTitle.offsetHeight + \"px\";\r\n    }\r\n    \r\n    window.addEventListener(\"resize\", setWelcomeTextHeight);\r\n    window.addEventListener(\"load\", setWelcomeTextHeight);\r\n    setWelcomeTextHeight();\r\n}\r\n\n\n//# sourceURL=webpack://portfolio-fullpage/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;