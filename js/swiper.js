const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
      enabled: true,
    },
    1920: {
      slidesPerView: 4,
      enabled: false,
    },
  },
});
