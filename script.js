// التحكم في قائمة الموبايل
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // تحويل شكل الزر (اختياري)
    menuToggle.classList.toggle('is-active');
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));

// تغيير شكل الهيدر عند السكرول
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 80) {
        header.style.padding = '5px 0';
        header.style.background = '#f8f9fa';
    } else {
        header.style.padding = '15px 0';
        header.style.background = '#fff';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const colText = document.querySelector('.col-text');
    const colImage = document.querySelector('.col-image');

    // إضافة تأثير ظهور ناعم
    colText.style.opacity = '0';
    colText.style.transform = 'translateX(-50px)';
    colImage.style.opacity = '0';
    colImage.style.transform = 'translateX(50px)';

    setTimeout(() => {
        colText.style.transition = 'all 1s ease-out';
        colText.style.opacity = '1';
        colText.style.transform = 'translateX(0)';
        
        colImage.style.transition = 'all 1s ease-out';
        colImage.style.opacity = '1';
        colImage.style.transform = 'translateX(0)';
    }, 200);
});