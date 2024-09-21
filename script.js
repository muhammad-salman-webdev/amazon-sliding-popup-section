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

// Popup Functionality
// cubic-bezier(1,.06,.22,.97)

const sliderPopupBtns = swiperElem.querySelectorAll(
  "button[data-open-popup-ANIM]"
);

const sliderPoups = document.querySelectorAll(
  ".c_sliding_cards_popups-container#customSlidingCardsPopupContainer .c_sliding_card-specific-popup-container"
);

sliderPopupBtns.forEach((sliderPopupBtn, _i) => {
  sliderPopupBtn.addEventListener("click", () => {
    // Pause the body

    // Calculate the scrollbar width
    const body = document.body;
    const scrolled = window.scrollY;

    body.classList.add("pause-body");

    body.style.top = `${-1 * scrolled}px`;
    body.setAttribute("data-scrolled-before", scrolled);
    setTimeout(() => {
      body.style.top = `${-1 * scrolled - 600}px`;
      setTimeout(() => {
        const popup = sliderPoups[_i];
        popup.scrollTop = 0;
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.add("anim");
          body.classList.add("no-scroll");
        }, 100);
      }, 1000);
    }, 10);
  });
});
sliderPoups.forEach((popup, _i) => {
  const body = document.body;

  const closeBtn = popup.querySelector("button.c_popup-close-btn");
  closeBtn.addEventListener("click", () => {
    popup.scrollTop = 0;

    setTimeout(() => {
      popup.classList.remove("anim");
    }, 500);
    setTimeout(() => {
      popup.classList.remove("anim");
      setTimeout(() => {
        popup.classList.remove("show");
      }, 300);

      body.classList.remove("no-scroll");

      body.style.top = `${-1 * body.getAttribute("data-scrolled-before")}px`;
      setTimeout(() => {
        body.classList.remove("pause-body");
        window.scrollTo({
          top: body.getAttribute("data-scrolled-before"),
          behavior: "smooth",
        });
        body.style.top = "";
      }, 2000);
    }, 300);
  });
});
