const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      menuLinks = document.querySelectorAll('.menu__list li');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

for (let menuLink of menuLinks )
    menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});

$(document).ready(function(){
    new WOW().init();
});