const swiper = new Swiper('.foodswiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  effect: "slide",
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    }
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});