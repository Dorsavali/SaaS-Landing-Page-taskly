export function initInfiniteLogos(selector = '.brandLogos') {
  const logos = document.querySelector(selector);
  if (!logos) return;

  const wrapper = logos.parentElement;

  // جلوگیری از دوباره اجرا شدن
  if (logos.dataset.inited) return;
  logos.dataset.inited = 'true';

  while (logos.scrollWidth < wrapper.offsetWidth * 2) {
    logos.innerHTML += logos.innerHTML;
  }
}
