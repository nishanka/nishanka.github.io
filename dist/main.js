/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
setViewPortHeight();
window.addEventListener("load", setViewPortHeight);
window.addEventListener("resize", setViewPortHeight);

function setViewPortHeight() {
    // Get the viewport height and multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Add fullpage view to sections
var fullScreenPage = document.getElementById('fullpage');
if(fullScreenPage){
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        autoScrolling:true,
        scrollHorizontally: true,
        credits: { enabled:  false},
    
    });    
}

// Add profile typed text animation
var typedBlock = document.getElementById('profile-typed');
if(typedBlock){
    var typed = new Typed('#profile-typed', {
        stringsElement: '#profile-typed-strings',
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
    });
}

// Set welcome text height according to it's content
var welcomeTextBlock = document.getElementById('welcome-text');
if(welcomeTextBlock){
    function setWelcomeTextHeight() {
        var welcomeTextTitle = document.querySelector('.welcome-text-title');
        welcomeTextBlock.style.height = welcomeTextTitle.offsetHeight + "px";
    }
    
    window.addEventListener("resize", setWelcomeTextHeight);
    window.addEventListener("load", setWelcomeTextHeight);
    setWelcomeTextHeight();
}

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;