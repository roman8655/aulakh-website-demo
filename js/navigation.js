const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const contentBlur = document.querySelector('.content-blur');
const navbarDropdown = document.querySelector('.dropdown');
const bodyOverflow = document.querySelector('body');
const dropdownToggle = document.querySelector('.drop-toggle');

function setScreenClass() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 992) {
        navbarDropdown.classList.remove('dropdown');
        navbarDropdown.classList.add('mobile-dropdown');
        bodyOverflow.classList.add('overflow');
    } else {
        bodyOverflow.classList.remove('overflow');
        navbarDropdown.classList.remove('mobile-dropdown');
        navbarDropdown.classList.add('dropdown');
    }  
}

setScreenClass();

window.addEventListener('resize', setScreenClass)

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    contentBlur.classList.toggle('active');
    bodyOverflow.classList.toggle('active');
});

contentBlur.addEventListener('click', () => {
    navbarToggle.classList.remove('active');
    navbarMenu.classList.remove('active');
    contentBlur.classList.remove('active');
    bodyOverflow.classList.remove('active');
    dropdownToggle.classList.remove('active');
    navbarDropdown.classList.remove('active');
});

navbarMenu.addEventListener('click', function(event) {
    if(event.target.classList.contains('scroll')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        contentBlur.classList.remove('active');
        bodyOverflow.classList.remove('active');
        dropdownToggle.classList.remove('active');
        navbarDropdown.classList.remove('active');
    }
});

dropdownToggle.addEventListener('click', () => {
    dropdownToggle.classList.toggle('active');
    navbarDropdown.classList.toggle('active');
});

//Initialize Popovers
document.querySelectorAll('[data-bs-toggle="popover"]')
.forEach(popover => {
    new bootstrap.Popover(popover)
});