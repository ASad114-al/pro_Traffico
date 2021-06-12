const burgerToggle = document.querySelector('.menu').onclick = toggleMenu;

function toggleMenu () {
  document.querySelector('#show').classList.toggle('show');
  document.querySelector('.hamburger').classList.toggle('close');
};
