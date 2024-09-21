const swiperElem = document.querySelector(
  ".s_slidings-cards-swiper#cSlidingCardsAnimSwiper"
);
const swiperElemPrevBtn = document.querySelector(
  ".c_sliding-anim-slider-btns#cSlidingAnimCardsNavBtns .c_sliding-anim--btn.prev"
);
const swiper = new Swiper(".s_slidings-cards-swiper#cSlidingCardsAnimSwiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  speed: 800,
  slidesPerView: "auto",
  spaceBetween: 0,
  // Navigation arrows
  navigation: {
    prevEl:
      ".c_sliding-anim-slider-btns#cSlidingAnimCardsNavBtns .c_sliding-anim--btn.prev",
    nextEl:
      ".c_sliding-anim-slider-btns#cSlidingAnimCardsNavBtns .c_sliding-anim--btn.next",
  },
  on: {
    slideChangeTransitionStart: function () {
      swiperElem.classList.remove("c_PL");
    },
  },
  breakpoints: {
    577: {
      slidesPerView: "auto",
      spaceBetween: 25,
    },
  },
});

swiperElemPrevBtn.disabled = true;
