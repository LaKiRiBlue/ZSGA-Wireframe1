/* ========== MENU SHOW and HIDDEN ==========*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

/* ===== MENU SHOW ====*/
/* Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}
