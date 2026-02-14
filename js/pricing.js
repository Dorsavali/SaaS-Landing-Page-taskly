export function initPricing() {
    const plans = document.querySelectorAll(".pricing .plan");
  
    if (!plans.length) return;
  
    plans.forEach((plan) => {
      plan.addEventListener("click", () => {
        plans.forEach((p) => p.classList.remove("popular"));
        plan.classList.add("popular");
      });
    });
  }
  