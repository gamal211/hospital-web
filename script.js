const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const icon = menuToggle.querySelector('i');

// open or close the menu
function toggleMenu(open) {
    navMenu.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', open);
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-xmark', open);
}

menuToggle.addEventListener('click', () => {
    toggleMenu(!navMenu.classList.contains('active'));
});

// close the menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// close the menu with the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
});

// close the menu when clicking outside the navbar
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) toggleMenu(false);
});

// close the menu when the screen gets bigger than the tablet size
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) toggleMenu(false);
});

// change the header style after scrolling
function checkScroll() {
    header.classList.toggle('scrolled', window.scrollY > 80);
}

window.addEventListener('scroll', checkScroll);
checkScroll();
}
