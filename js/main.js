// hamburger ketika di click
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar ketika di scroll
window.onscroll = function () {
  const scrollY = window.scrollY;
  const header = document.getElementById("header");

  if (scrollY > 0) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};

// Button dark mode
const darkMode = document.getElementById("dark-mode");
const html = document.getElementsByTagName("html")[0];

darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Tema tetap
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkMode.checked = true;
} else {
  darkMode.checked = false;
}
