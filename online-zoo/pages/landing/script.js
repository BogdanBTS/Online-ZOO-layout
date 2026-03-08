document.addEventListener("DOMContentLoaded", () => {
  initPetsSlider();
  initReviewSlider();
});

function initPetsSlider() {
  const sliderWrapper = document.getElementById("sliderWrapper");
  if (!sliderWrapper) return;

  const slidesTrack = sliderWrapper.querySelector(".slider-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function getScrollAmount() {
    const card = slidesTrack.querySelector(".animal-card");
    if (!card) return 480;
    const gap = 40;
    return card.offsetWidth + gap;
  }

  nextBtn.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    const maxScroll = slidesTrack.scrollWidth - slidesTrack.clientWidth;

    // Checking are we close to the end of sliders track width (tolerance 5px)
    if (slidesTrack.scrollLeft + 5 >= maxScroll) {
      slidesTrack.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slidesTrack.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });

  prevBtn.addEventListener("click", () => {
    if (slidesTrack.scrollLeft <= 5) {
      const maxScroll = slidesTrack.scrollWidth - slidesTrack.clientWidth;
      slidesTrack.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      slidesTrack.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    }
  });
}

function initReviewSlider() {
  const wrapperYouThink = document.getElementById("user-think__sliderWrapper");
  if (!wrapperYouThink) return;
  const nextBtnYouThink = document.getElementById("user-think__slider-nextBtn");
  const prevBtnYouThink = document.getElementById("user-think__slider-prevBtn");
  const slidesTrack = wrapperYouThink.querySelector(
    ".user-think__slider-track1",
  );

  console.log(wrapperYouThink);

  // Function calculate step width  (card + gap)
  function getScrollAmount() {
    const card = wrapperYouThink.querySelector(".user-think__card");
    if (!card || !slidesTrack) return 0;
    const cardWidth = card.offsetWidth;
    const gap = parseInt(window.getComputedStyle(slidesTrack).gap) || 0;
    return cardWidth + gap;
  }

  nextBtnYouThink.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    const maxScroll = wrapperYouThink.scrollWidth - wrapperYouThink.clientWidth;

    // Checking are we close to the end of sliders track width (tolerance 5px)
    if (wrapperYouThink.scrollLeft + 5 >= maxScroll) {
      wrapperYouThink.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      wrapperYouThink.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });

  prevBtnYouThink.addEventListener("click", () => {
    if (wrapperYouThink.scrollLeft <= 5) {
      const maxScroll =
        wrapperYouThink.scrollWidth - wrapperYouThink.clientWidth;
      wrapperYouThink.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      wrapperYouThink.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    }
  });
}
