


const track = document.getElementById("sliderTrack");
if (!track) {
  console.error("sliderTrack not found");
  return;
}

const slides = document.querySelectorAll(".certificate-card");
const slideWidth = slides[0].offsetWidth;

let index = 0;

setInterval(() => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * slideWidth}px)`;
}, 2500);

/* =========================
   

// =========================
// FOOTER YEAR AUTO UPDATE
// =========================
const footerYear = document.getElementById("footerYear");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
/* =====================================================
   CONTACT FORM SUBMISSION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMessage = document.getElementById("successMessage");
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const originalButtonText = submitButton.innerHTML;

    // Disable button + show loading
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status"></span>
      Sending...
    `;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.reset();

        successMessage.classList.add("show");

        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 4000);
      } else {
        showError();
      }

    } catch (error) {
      showError();
    }

    // Restore button
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  });

  function showError() {
    successMessage.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      Something went wrong. Please try again.
    `;
    successMessage.style.color = "#ff4d4d";
    successMessage.style.borderColor = "rgba(255, 77, 77, 0.4)";
    successMessage.style.background = "rgba(255, 77, 77, 0.08)";

    successMessage.classList.add("show");

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 4000);
  }
});
 

/* =====================================================
   CONTACT FORM HANDLER
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  const successMessage = document.getElementById("successMessage");
  const submitButton = contactForm.querySelector("button[type='submit']");

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const originalText = submitButton.innerHTML;

    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        contactForm.reset();
        showSuccess();
      } else {
        showError();
      }

    } catch (error) {
      showError();
    }

    // Restore button
    submitButton.disabled = false;
    submitButton.innerHTML = originalText;
  });

  function showSuccess() {
    if (!successMessage) return;

    successMessage.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      Message sent successfully!
    `;

    successMessage.style.color = "#00f0ff";
    successMessage.style.borderColor = "rgba(0,240,255,0.3)";
    successMessage.style.background = "rgba(0,240,255,0.08)";
    successMessage.classList.add("show");

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 4000);
  }

  function showError() {
    if (!successMessage) return;

    successMessage.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      Something went wrong. Please try again.
    `;

    successMessage.style.color = "#ff4d4d";
    successMessage.style.borderColor = "rgba(255,77,77,0.4)";
    successMessage.style.background = "rgba(255,77,77,0.08)";
    successMessage.classList.add("show");

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 4000);
  }
}
// Disable right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});


document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});


