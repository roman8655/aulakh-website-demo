// Preloader Script
$(window).on("load",function(){
    $(".loader-wrap").fadeOut("fast");
});

//Get Current Year
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

//Scroll to Top
document.addEventListener('scroll', () => {
    const toTopButton = document.querySelector('.scroll-to-top');

    if (window.scrollY > 300) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
});