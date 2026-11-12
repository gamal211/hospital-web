const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

function setMenu(open) {
  navMenu.classList.toggle('active', open);
  menuToggle.classList.toggle('is-active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

  const icon = menuToggle.querySelector('i');
  if (icon) {
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-xmark', open);
  }
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    setMenu(!navMenu.classList.contains('active'));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) setMenu(false);
  });
}

if (header) {
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}
