/* About */
const aboutIcon = document.querySelector('#about-mobile');
const aboutMenu = document.querySelector('#about-menu');
const menuExit = document.querySelector('#about-exit');
const aboutLinks = document.querySelectorAll('.link');

function showMenu() {
  aboutMenu.style.transform = 'translateX(0%)';
}

function removeMenu() {
  aboutMenu.style.transform = 'translateX(-100%)';
}

aboutIcon.addEventListener('click', showMenu);
menuExit.addEventListener('click', removeMenu);
aboutLinks.forEach((link) => {
  link.addEventListener('click', removeMenu);
});