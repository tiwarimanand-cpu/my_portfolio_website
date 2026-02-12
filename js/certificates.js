const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".certificate-card");

let index = 0;
const totalSlides = slides.length;
let intervalId;

// clone FIRST slide only (for seamless loop)
const firstClone = slides[0].cloneNode(true);
sliderTrack.appendChild(firstClone);

/* ===== AUTO SLIDE ===== */
function startAutoSlide() {
  intervalId = setInterval(() => {
    index++;

    sliderTrack.style.transition = "transform 0.6s ease-in-out";
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides) {
      setTimeout(() => {
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = "translateX(0)";
        index = 0;
      }, 600);
    }
  }, 2500);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

startAutoSlide();

/* ===== PAUSE ON HOVER (DESKTOP) ===== */
sliderTrack.addEventListener("mouseenter", stopAutoSlide);
sliderTrack.addEventListener("mouseleave", startAutoSlide);

/* ===== SWIPE SUPPORT (MOBILE) ===== */
let startX = 0;
let endX = 0;

sliderTrack.addEventListener("touchstart", (e) => {
  stopAutoSlide();
  startX = e.touches[0].clientX;
});

sliderTrack.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

sliderTrack.addEventListener("touchend", () => {
  const diff = startX - endX;

  // swipe threshold
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // swipe left → next
      index++;
    } else {
      // swipe right → previous
      index--;
      if (index < 0) index = 0;
    }

    sliderTrack.style.transition = "transform 0.4s ease-in-out";
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  startAutoSlide();
});
