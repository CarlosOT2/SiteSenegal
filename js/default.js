const botaoMenu = document.querySelector(".header__menu-button");
const menu = document.querySelector(".header__nav");

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("header__nav--open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        menu.classList.remove("header__nav--open");
    }
});