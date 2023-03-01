window.addEventListener("load", setViewPortHeight);
window.addEventListener("resize", setViewPortHeight);
setViewPortHeight();

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
