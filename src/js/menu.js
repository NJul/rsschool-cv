let hamb = document.querySelector('.hamb');
let navMenu = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.nav__link');

function mobileMemu() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  hamb.classList.remove('active');
  navMenu.classList.remove('active');
}

hamb.addEventListener('click', mobileMemu);

navLink.forEach((n) => n.addEventListener('click', closeMenu));
