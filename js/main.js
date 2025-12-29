// main.js
import initMobileMenu from "./hero.js";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu({
    btnOpen: ".hamburgerMenu",
    btnClose: ".closeMenu",
    menuList: ".menu ul",
    overlay: ".overlay"
  });
});