export function initCTAButton() {
  const ctaButton = document.querySelector(".cta-button");
  if (!ctaButton) return;

  ctaButton.addEventListener("mousedown", () => {
    ctaButton.style.transform = "scale(0.95)";
  });

  ctaButton.addEventListener("mouseup", () => {
    ctaButton.style.transform = "scale(1)";
  });

  ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.transform = "scale(1)";
  });
}
