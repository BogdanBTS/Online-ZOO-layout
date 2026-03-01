const wrapper = document.getElementById("sliderWrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Funkcja obliczająca szerokość kroku (karta + gap)
function getScrollAmount() {
  const card = wrapper.querySelector(".card");
  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const gap = parseInt(
    window.getComputedStyle(wrapper.querySelector(".slider-track1")).gap,
  );
  return cardWidth + gap;
}
function getScrollAmount() {
  const card = wrapper.querySelector(".card");
  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const gap2 = parseInt(
    window.getComputedStyle(wrapper.querySelector(".slider-track2")).gap,
  );
  return cardWidth + gap2;
}

nextBtn.addEventListener("click", () => {
  wrapper.scrollBy({
    left: getScrollAmount(),
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  wrapper.scrollBy({
    left: -getScrollAmount(),
    behavior: "smooth",
  });
});

const wrapperYouThink = document.getElementById("user-think__sliderWrapper");
const nextBtnYouThink = document.getElementById("user-think__slider-nextBtn");
const prevBtnYouThink = document.getElementById("user-think__slider-prevBtn");

console.log(wrapperYouThink)
// Funkcja obliczająca szerokość kroku (karta + gap)
function getScrollAmount() {
  const card = wrapperYouThink.querySelector(".user-think__card");
  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const gap = parseInt(
    window.getComputedStyle(
      wrapperYouThink.querySelector(".user-think__slider-track1"),
    ).gap,
  );
  return cardWidth + gap;
}
function getScrollAmount() {
  const card = wrapperYouThink.querySelector(".user-think__card");
  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const gap2 = parseInt(
    window.getComputedStyle(
      wrapperYouThink.querySelector(".user-think__slider-track2"),
    ).gap,
  );
  return cardWidth + gap2;
}

nextBtnYouThink.addEventListener("click", () => {
  wrapperYouThink.scrollBy({
    left: getScrollAmount(),
    behavior: "smooth",
  });
});

prevBtnYouThink.addEventListener("click", () => {
  wrapperYouThink.scrollBy({
    left: -getScrollAmount(),
    behavior: "smooth",
  });
});
