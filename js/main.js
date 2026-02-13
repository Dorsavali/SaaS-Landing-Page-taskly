import initMobileMenu from "./hero.js";
import { initInfiniteLogos } from "./partners.js";
import { initBenefitsReveal } from './benefits.js';


document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu({
    btnOpen: ".hamburgerMenu",
    btnClose: ".closeMenu",
    menuList: ".menu ul",
    overlay: ".overlay",
  });

  initInfiniteLogos(".brandLogos");
  initBenefitsReveal();
});
