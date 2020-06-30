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
