// CampusCart interactions: theme switcher and mobile navigation.
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");

function applyTheme(theme) {
  root.dataset.theme = theme;
  const darkIsActive = theme === "dark";
  themeIcon.textContent = darkIsActive ? "☀️" : "🌙";
  themeLabel.textContent = darkIsActive ? "Light mode" : "Dark mode";
  themeToggle.setAttribute(
    "aria-label",
    darkIsActive ? "Switch to light mode" : "Switch to dark mode"
  );
  try {
    localStorage.setItem("campuscart-theme", theme);
  } catch (error) {
    // The theme still works if browser storage is unavailable.
  }
}

// Restore the visitor's previous choice; otherwise use their system preference.
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("campuscart-theme");
} catch (error) {
  // Ignore storage restrictions.
}
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
applyTheme(savedTheme || preferredTheme);

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

// Mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});
