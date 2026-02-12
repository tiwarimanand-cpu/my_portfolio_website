// =========================
// Work Experience – FINAL JS
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleExperience");
  const hiddenSection = document.getElementById("moreExperience");
  const items = document.querySelectorAll(".timeline-item");

  /* -------- TOGGLE BUTTON -------- */
  if (toggleBtn && hiddenSection) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // 🔒 prevent conflict

      const isOpen = hiddenSection.classList.toggle("show");

      toggleBtn.textContent = isOpen
        ? "Hide Leadership & Activities"
        : "View Leadership & Activities";
    });
  }

  /* -------- MOBILE TAP FOR ITEMS -------- */
  items.forEach(item => {
    item.addEventListener("click", (e) => {
      // ❌ Ignore clicks on button or inside hidden section
      if (
        e.target.closest("#toggleExperience") ||
        e.target.closest(".experience-toggle")
      ) {
        return;
      }

      // Mobile & tablet only
      if (window.matchMedia("(hover: none)").matches) {
        items.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
      }
    });
  });
});
