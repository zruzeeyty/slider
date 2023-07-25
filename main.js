const slider = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideWidth = slider.clientWidth;
let currentIndex = 0;
let autoSlideInterval; // Variable to store the interval

function goToSlide(index) {
  slider.style.transform = translateX(-${index * slideWidth}px);
  currentIndex = index;
}

function slideToPrev() {
  if (currentIndex === 0) {
    goToSlide(slider.childElementCount - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

function slideToNext() {
  if (currentIndex === slider.childElementCount - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideToNext();
  }, 1000); // Change the value (in milliseconds) to adjust the slide interval
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listeners for the navigation buttons
prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  slideToPrev();
  startAutoSlide();
});

nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  slideToNext();
  startAutoSlide();
});

// Start auto-sliding when the page loads
startAutoSlide();
