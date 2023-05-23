const swiper = new Swiper(".swiper", {
  // Optional parameters

  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,

  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

let secondSwiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  // centeredSlides: false,
  freeMode: true,
  spaceBetween: 110,
  grabCursor: true,
});
