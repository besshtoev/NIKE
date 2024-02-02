const GamburgerButtun = document.querySelector('.nav__hamburger');
const NavLogo = document.querySelector('.nav__logo');
const NavLinks = document.querySelector('.nav__links');
const NavButtons = document.querySelector('.nav__button');
GamburgerButtun.onclick = function () {
    NavButtons.classList.toggle('nav__button_active');
    NavLogo.classList.toggle('nav__logo_active');
    GamburgerButtun.classList.toggle('hamburger_active');
    NavLinks.classList.toggle('nav__links_active');
}
NavLogo.onclick = function () {
    NavLogo.classList.remove('nav__logo_active');
    NavButtons.classList.remove('nav__button_active')
    NavLinks.classList.remove('nav__links_active')
    GamburgerButtun.classList.remove('hamburger_active')
}



const LinkAll = document.querySelectorAll('.nav__links a');

for (let i = 0; i < LinkAll.length; i++) [
    LinkAll[i].onclick = function () {
        NavLogo.classList.remove('nav__logo_active');
        NavButtons.classList.remove('nav__button_active');
        NavLinks.classList.remove('nav__links_active');
        GamburgerButtun.classList.remove('hamburger_active');
    }
]

const ButtonAll = document.querySelectorAll('.nav__button button');

for (let i = 0; i < ButtonAll.length; i++) [
    ButtonAll[i].onclick = function () {
        NavLogo.classList.remove('nav__logo_active');
        NavButtons.classList.remove('nav__button_active');
        NavLinks.classList.remove('nav__links_active');
        GamburgerButtun.classList.remove('hamburger_active');
    }
]