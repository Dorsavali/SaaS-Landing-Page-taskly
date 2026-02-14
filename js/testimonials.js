export function initTestimonials() {
    const slides = document.querySelectorAll(".testimonials .slide");
    const prevBtn = document.querySelector(".testimonials .prev");
    const nextBtn = document.querySelector(".testimonials .next");
  
    if (!slides.length || !prevBtn || !nextBtn) return;
  
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }
  