import initMobileMenu from "./hero.js";
import { initInfiniteLogos } from "./partners.js";
import { initBenefitsReveal } from './benefits.js';
import { initPricing } from "./pricing.js";
import { initTestimonials } from "./testimonials.js";


document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu({
    btnOpen: ".hamburgerMenu",
    btnClose: ".closeMenu",
    menuList: ".menu ul",
    overlay: ".overlay",
  });

  initInfiniteLogos(".brandLogos");
  initBenefitsReveal();
  initPricing();
  initTestimonials();
});