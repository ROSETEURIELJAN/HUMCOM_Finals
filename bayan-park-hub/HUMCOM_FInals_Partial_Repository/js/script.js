// Mobile menu toggle: updates aria-expanded so screen readers know the state.
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
