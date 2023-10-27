const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
});

var typed = new Typed(".type", {
  strings: ["30% DISCOUNT", "Till friday"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
  showCursor: false,
});
