const swiperElem = document.querySelector(
  ".s_slidings-cards-swiper#cSlidingCardsAnimSwiper"
);
const swiperElemPrevBtn = document.querySelector(
  ".c_sliding-anim-slider-btns#cSlidingAnimCardsNavBtns .c_sliding-anim--btn.prev"
);
const swiper = new Swiper(".s_slidings-cards-swiper#cSlidingCardsAnimSwiper", {
  // Optional parameters

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

// Popup Functionality

const sliderPopupBtns = swiperElem.querySelectorAll(
  "button[data-open-popup-ANIM]"
);

const sliderPoups = document.querySelectorAll(
  ".c_sliding_cards_popups-container#customSlidingCardsPopupContainer .c_sliding_card-specific-popup-container"
);

sliderPopupBtns.forEach((sliderPopupBtn, _i) => {
  sliderPopupBtn.addEventListener("click", () => {
    // Pause the body

    const body = document.body;
    const scrolled = window.scrollY;

    setTimeout(() => {
      setTimeout(() => {
        const popup = sliderPoups[_i];
        popup.scrollTop = 0;
        body.classList.add("no-scroll");
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.add("anim");
          popup.classList.add("move");
          setTimeout(() => {
            popup.classList.add("move-close-btn");
          }, 500);
        }, 10);
      }, 10);
    }, 10);
  });
});

sliderPoups.forEach((popup, _i) => {
  const body = document.body;

  const closeBtn = popup.querySelector("button.c_popup-close-btn");

  closeBtn.addEventListener("click", () => {
    body.classList.remove("no-scroll");
    popup.classList.remove("move-close-btn");
    popup.classList.remove("anim");
    popup.classList.remove("move");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 450);
  });
});
