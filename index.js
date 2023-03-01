const burgerButton = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");

burgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})