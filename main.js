const menuToggle = selectElement('.menu-toggle');
const navList = selectElement('.nav__list');

function selectElement(element) {
  return document.querySelector(element);
}

function loadEventListeners() {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('toggle');
    navList.classList.toggle('nav-active');
  });
}

loadEventListeners();
