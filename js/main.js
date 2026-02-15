const stackPrev = document.querySelector(".stack-prev");
const stackActive = document.querySelector(".stack-active");
const stackNext = document.querySelector(".stack-next");

// ===============================
// SELECTORS
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const sidebar = document.getElementById("sidebar");

// Mobile system
const mobileHamburger = document.getElementById("mobileHamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");
const mobileLinks = document.querySelectorAll(".mobile-link");


// ===============================
// ACTIVE LINK HIGHLIGHT ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });

});





// ===============================
// MOBILE MENU SYSTEM
// ===============================

function openMenu() {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

if (mobileHamburger) {
  mobileHamburger.addEventListener("click", openMenu);
}

if (mobileClose) {
  mobileClose.addEventListener("click", closeMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMenu);
}

// Close when clicking mobile links
mobileLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});



// ===============================
// RESET BEHAVIOR ON RESIZE
// ===============================

window.addEventListener("resize", () => {

  if (window.innerWidth > 768) {

    // Reset desktop sidebar
    if (sidebar) {
      sidebar.style.transform = "translateX(0)";
    }

    // Close mobile menu if open
    closeMenu();
  }

});

// ===============================
// SMOOTH SCROLL WITH SLOW SPEED
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  });
});

// ===============================
// Experience
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("toggleExperience");
  const moreExp = document.getElementById("moreExperience");

  toggleBtn.addEventListener("click", function () {

    moreExp.classList.toggle("show");
    toggleBtn.classList.toggle("active");

    if (moreExp.classList.contains("show")) {
      toggleBtn.textContent = "Hide Leadership & Activities";
    } else {
      toggleBtn.textContent = "View Leadership & Activities";
    }

  });

});

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach(item => {

  const button = item.querySelector(".view-details");

  // CLICK for mobile
  button.addEventListener("click", () => {
    toggleItem(item);
  });

  // HOVER for desktop
  if (window.matchMedia("(hover: hover)").matches) {
    item.addEventListener("mouseenter", () => {
      toggleItem(item);
    });
  }

});

function toggleItem(currentItem) {

  timelineItems.forEach(item => {
    if (item !== currentItem) {
      item.classList.remove("active");
    }
  });

  currentItem.classList.toggle("active");
}

/* =========================

========================= */
/* =========================

   Experience
========================= */


const selector = document.querySelector(".project-selector");

const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");
const previewGithub = document.getElementById("previewGithub");
const previewBlog = document.getElementById("previewBlog");
const previewTech = document.getElementById("previewTech");

const projectIndex = document.getElementById("projectIndex");
const projectTotal = document.getElementById("projectTotal");

/* =========================
   STATE
========================= */
let activeIndex = 0;
let wheelLock = false;

/* =========================
   HELPERS
========================= */
function wrap(index) {
  return (index + PROJECTS.length) % PROJECTS.length;
}

function render() {

  const prevIndex = wrap(activeIndex - 1);
  const nextIndex = wrap(activeIndex + 1);

  const current = PROJECTS[activeIndex];

  // Update LEFT image
  previewImage.src = current.image;
  previewGithub.href = current.github;
  previewBlog.href = current.blog;

  // Update STACK TEXT
  stackPrev.textContent = PROJECTS[prevIndex].title;
  stackActive.textContent = current.title;
  stackNext.textContent = PROJECTS[nextIndex].title;

}

/* =========================
   WHEEL ROTATION
========================= */


document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     ELEMENTS
  ========================== */

  const previewImage = document.getElementById("previewImage");
  const previewGithub = document.getElementById("previewGithub");
  const previewBlog = document.getElementById("previewBlog");
  const previewTitle = document.getElementById("previewTitle");

  const stackPrev = document.querySelector(".stack-prev");
  const stackActive = document.querySelector(".stack-active");
  const stackNext = document.querySelector(".stack-next");

  const arrowUp = document.getElementById("arrowUp");
  const arrowDown = document.getElementById("arrowDown");

  const arrowUpMobile = document.getElementById("arrowUpMobile");
  const arrowDownMobile = document.getElementById("arrowDownMobile");

  let activeIndex = 0;

  function wrap(index) {
    return (index + PROJECTS.length) % PROJECTS.length;
  }

  function render() {

    const prevIndex = wrap(activeIndex - 1);
    const nextIndex = wrap(activeIndex + 1);
    const current = PROJECTS[activeIndex];

    /* LEFT SIDE */
    previewImage.src = current.image;
    previewGithub.href = current.github;
    previewBlog.href = current.blog;
    previewTitle.textContent = current.title;

    /* DESKTOP STACK */
    if (stackPrev && stackActive && stackNext) {
      stackPrev.textContent = PROJECTS[prevIndex].title;
      stackActive.textContent = current.title;
      stackNext.textContent = PROJECTS[nextIndex].title;
    }
  }

  /* DESKTOP ARROWS */
  if (arrowUp) {
    arrowUp.addEventListener("click", function () {
      activeIndex = wrap(activeIndex - 1);
      render();
    });
  }

  if (arrowDown) {
    arrowDown.addEventListener("click", function () {
      activeIndex = wrap(activeIndex + 1);
      render();
    });
  }

  /* MOBILE ARROWS */
  if (arrowUpMobile) {
    arrowUpMobile.addEventListener("click", function () {
      activeIndex = wrap(activeIndex - 1);
      render();
    });
  }

  if (arrowDownMobile) {
    arrowDownMobile.addEventListener("click", function () {
      activeIndex = wrap(activeIndex + 1);
      render();
    });
  }

  render();
});


/* =========================================
   HERO TYPING EFFECT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const words = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Front End Developer"
  ];

  const typingText = document.getElementById("typing-text");

  if (!typingText) return; // safety check

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const delayBetweenWords = 1200;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, delayBetweenWords);
      }

    } else {

      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeEffect();

});
/* =========================================
   ACTIVE SECTION HIGHLIGHT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

  });

});

// ===============================
// UNIVERSAL REVEAL SYSTEM
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });

});


// ===============================
// SCROLL PROGRESS BAR
// ===============================

const scrollProgressBar = document.getElementById("scrollProgressBar");

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  scrollProgressBar.style.width = scrollPercent + "%";

});

