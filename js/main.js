// 🔹 همه import ها بالای فایل
import initMobileMenu from "./hero.js";
import { initInfiniteLogos } from "./infiniteLogos.js";


// 🔹 بعد منطق اجرا
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu({
    btnOpen: ".hamburgerMenu",
    btnClose: ".closeMenu",
    menuList: ".menu ul",
    overlay: ".overlay",
  });

  initInfiniteLogos(".brandLogos");
});
