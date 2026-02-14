export function initFAQ() {
    const items = document.querySelectorAll(".faq-item");
  
    items.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", () => {
        items.forEach((el) => {
          if (el !== item) el.classList.remove("active");
        });
  
        item.classList.toggle("active");
      });
    });
  }
  