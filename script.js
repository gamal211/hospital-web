
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

function closeMenu() {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('is-active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && navMenu) {
  menuToggle.setAttribute('aria-expanded', 'false');

  menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
    menuToggle.setAttribute('aria-expanded', open);
  });

  navMenu.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', closeMenu)
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const colText = document.querySelector('.col-text');
  const colImage = document.querySelector('.col-image');
  if (!colText || !colImage) return;

  colText.style.opacity = '0';
  colText.style.transform = 'translateX(-50px)';
  colImage.style.opacity = '0';
  colImage.style.transform = 'translateX(50px)';

  setTimeout(() => {
    [colText, colImage].forEach((el) => {
      el.style.transition = 'all 1s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    });
  }, 200);
});
