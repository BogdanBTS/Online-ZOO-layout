document.addEventListener("DOMContentLoaded", () => {
  initPetsSlider();
  initReviewSlider();
  loadAnimalCards();
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

  // console.log(wrapperYouThink);

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

const localImages = [
  "../../assets/images/MOP_Panda.jpg",
  "../../assets/images/MOP_Lemur.jpg",
  "../../assets/images/MOP_Gorilla.jpg",
  "../../assets/images/MOP_Aligator.jpg",
  "../../assets/images/MOP_Eagles.jpg",
  "../../assets/images/MOP_Koala.jpg",
  "../../assets/images/MOP_Lion.jpg",
  "../../assets/images/MOP_Tiger.jpg",
  "../../assets/images/MOP_animal_9.webp",
  "../../assets/images/MOP_animal_10.webp",
  "../../assets/images/MOP_animal_11.webp",
  "../../assets/images/MOP_animal_12.webp",
  "../../assets/images/MOP_animal_13.webp",
  "../../assets/images/MOP_animal_14.jpeg",
  "../../assets/images/MOP_animal_15.webp",
  "../../assets/images/MOP_animal_16.webp",
  "../../assets/images/MOP_animal_17.webp",
  "../../assets/images/MOP_animal_18.webp",
  "../../assets/images/MOP_animal_19.webp",
  "../../assets/images/MOP_animal_20.webp",
  "../../assets/images/MOP_animal_21.webp",
  "../../assets/images/MOP_animal_22.webp",
  "../../assets/images/MOP_animal_23.jpeg",
  "../../assets/images/MOP_animal_24.jpeg",
  "../../assets/images/MOP_animal_25.webp",
  "../../assets/images/MOP_animal_26.webp",
  "../../assets/images/MOP_animal_27.webp",
  "../../assets/images/MOP_animal_28.webp",
];

async function loadAnimalCards() {
  const sliderTrack = document.querySelector(".slider-track");
  if (!sliderTrack) return;

  try {
    const response = await fetch(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets",
    );
    const result = await response.json();
    const animals = result.data;

    const cardsHTML = animals
      .map((animal, index) => {
        const imagePath =
          localImages[index] || "../../assets/images/welcome_HIW.jpg";

        return `
        <div class="card">
          <a class="stretched-link" href="../../pages/zoos/index.html"></a>
          <div class="card-image" style="background-image: url('${imagePath}');">
            <span class="card__name-tag">${animal.name}</span>
          </div>
          <div class="card-content">
            <h3 class="card-content__heading">${animal.commonName}</h3>
            <p class="card-content__text">${animal.description}</p>
            <a class="card-content__btn" href="../../pages/zoos/index.html">
              VIEW LIVE CAM
                        <svg
                          class="card-content__svg"
                          width="26"
                          height="23"
                          viewBox="0 0 25 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                            fill="#f58021"
                          ></path>
                        </svg>
            </a>
          </div>
        </div>
      `;
      })
      .join("");

    // Insertion to the DOM
    sliderTrack.innerHTML = cardsHTML;
  } catch (error) {
    console.error("Error during loading animals:", error);
  }
}
