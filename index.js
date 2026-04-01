/* ================================
   THEME TOGGLE (LIGHT / DARK)
================================ */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  const themeIcon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  });
}

/* ================================
   RESPONSIVE HAMBURGER MENU
================================ */
/* ================================



   PROJECTS CAROUSEL (CSS-BASED)
================================ */
/*
  NOTE:
  - Infinite scrolling is handled purely by CSS animation.
  - JavaScript is intentionally NOT controlling movement.
  - This avoids conflicts and improves performance.
  - Hover pause is handled via CSS animation-play-state.
*/
