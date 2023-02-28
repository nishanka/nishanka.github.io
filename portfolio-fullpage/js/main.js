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
