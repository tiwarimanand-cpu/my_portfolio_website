/* =========================
   ELEMENT REFERENCES
========================= */
const selectorGlow = document.querySelector(".selector-glow");

const selector = document.querySelector(".project-selector");

const slotTop = document.querySelector(".project-slot-top .project-name");
const slotCenter = document.querySelector(".project-slot-center .project-name");
const slotBottom = document.querySelector(".project-slot-bottom .project-name");

const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");
const previewGithub = document.getElementById("previewGithub");
const previewBlog = document.getElementById("previewBlog");

/* =========================
   STATE
========================= */
let activeIndex = 1;   // center project index
let wheelLock = false;

/* =========================
   HELPERS
========================= */
function wrap(index) {
  return (index + PROJECTS.length) % PROJECTS.length;
}

function render() {
  const topIndex = wrap(activeIndex - 1);
  const centerIndex = wrap(activeIndex);
  const bottomIndex = wrap(activeIndex + 1);

  // Update right-side selector
  slotTop.textContent = PROJECTS[topIndex].title;
  slotCenter.textContent = PROJECTS[centerIndex].title;
  slotBottom.textContent = PROJECTS[bottomIndex].title;

  // Update left preview
  previewImage.src = PROJECTS[centerIndex].image;
  previewTitle.textContent = PROJECTS[centerIndex].title;
  previewDescription.textContent = PROJECTS[centerIndex].description;
  previewGithub.href = PROJECTS[centerIndex].github;
  previewBlog.href = PROJECTS[centerIndex].blog;
}

/* =========================
   WHEEL ROTATION (SCOPED)
========================= */
selector.addEventListener(
  "wheel",
  function (e) {

    e.preventDefault(); // stop page scrolling

    if (wheelLock) return;
    wheelLock = true;

    const direction = e.deltaY > 0 ? 1 : -1;

    // Add smooth motion class
    selector.classList.add(direction > 0 ? "move-down" : "move-up");

    if (direction > 0) {
      activeIndex = wrap(activeIndex + 1);
    } else {
      activeIndex = wrap(activeIndex - 1);
    }

    // Slight delay for animation feel
    setTimeout(() => {
      render();
      selector.classList.remove("move-down", "move-up");
      wheelLock = false;
    }, 200);

  },
  { passive: false }
);

/* =========================
   KEYBOARD SUPPORT (BONUS)
========================= */
window.addEventListener("keydown", function (e) {

  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;

  if (e.key === "ArrowDown") {
    activeIndex = wrap(activeIndex + 1);
  } else {
    activeIndex = wrap(activeIndex - 1);
  }

  render();
});

/* =========================
   INITIAL RENDER
========================= */
function loadFromURL() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) return;

  const index = PROJECTS.findIndex(p => p.slug === hash);

  if (index !== -1) {
    activeIndex = index;
  }
}

// Run before first render
loadFromURL();
render();
