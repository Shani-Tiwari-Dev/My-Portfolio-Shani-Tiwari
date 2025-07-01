const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});
// Preloader with instant removal (no fade out)
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Set exact display time (2500ms = 2.5 seconds)
    const displayTime = 2500;
    
    setTimeout(() => {
        preloader.style.display = 'none';
    }, displayTime);
});