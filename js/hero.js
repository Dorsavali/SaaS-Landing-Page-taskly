// hero.js
export default function initMobileMenu(config) {
    const { btnOpen, btnClose, menuList, overlay } = config;
  
    const openEl = document.querySelector(btnOpen);
    const closeEl = document.querySelector(btnClose);
    const menuEl = document.querySelector(menuList);
    const overlayEl = document.querySelector(overlay);
  
    if (!openEl || !menuEl || !overlayEl || !closeEl) return;
  
    const toggle = (isOpen) => {
      menuEl.classList.toggle("show", isOpen);
      overlayEl.classList.toggle("show", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };
    openEl.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle(true);
    });

    [closeEl, overlayEl].forEach((el) => {
      el.addEventListener("click", () => toggle(false));
    });

    menuEl.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggle(false));
    });
  }