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
  slidesPerView: 5,

  freeMode: true,
  spaceBetween: 150,
  grabCursor: true,
  // loop: true,
});

let video = document.querySelector(".film");
let videoSecond = document.querySelector(".film2");
let videoThird = document.querySelector(".film3");
let videoFour = document.querySelector(".film4");
let videoFive = document.querySelector(".film5");

function modal() {
  video.style.display = "block";
}

function modalSecond() {
  videoSecond.style.display = "block";
}

function modalThird() {
  videoThird.style.display = "block";
}

function modalFour() {
  videoFour.style.display = "block";
}

function modalFive() {
  videoFive.style.display = "block";
}

function closeBtn() {
  video.style.display = "none";
}

function closeBtn2() {
  videoSecond.style.display = "none";
}

function closeBtn3() {
  videoThird.style.display = "none";
}

function closeBtn4() {
  videoFour.style.display = "none";
}

function closeBtn5() {
  videoFive.style.display = "none";
}
