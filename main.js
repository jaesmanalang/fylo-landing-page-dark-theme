const menuToggle = selectElement('.menu-toggle');
const navList = selectElement('.nav__list');
const header = selectElement('header');

function selectElement(element) {
  return document.querySelector(element);
}

function loadEventListeners() {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('toggle');
    navList.classList.toggle('nav-active');
    // header.classList.toggle('bg-dark');
  });
}

loadEventListeners();

gsap.from('.intro__img', { opacity: 0, duration: 1, y: -50 });
gsap.from('.intro__content h1', { opacity: 0, duration: 1, x: -50 });
gsap.from('.intro__content p', { opacity: 0, duration: 1, x: 50 });
gsap.from('.intro a', { opacity: 0, duration: 1, y: 50 });
