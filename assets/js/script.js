// saat scroll navbar aga ke atas aga tidak ketutupan
const navLinks = document.querySelectorAll("header .navbar-nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 77,
      });
    }
  });
});

const darkToggle = document.querySelector("#dark-toggle");
const body = document.querySelector("body");

darkToggle.addEventListener("change", () => handleDarkMode());

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
handleDarkMode();

// background overlay
const backgroundOverlay = document.createElement("div");
backgroundOverlay.className = "background-overlay";
body.appendChild(backgroundOverlay);

// hamburger menu
const navNavbar = document.querySelector(".navbar-nav");
const toggleDarkMode = document.querySelector(".navbar-nav .toggle-dark-mode");
const menu = document.querySelector("#hamburger");
const overlay = document.querySelector(".background-overlay");
// Menu di klik
window.addEventListener("click", (e) => {
//   console.log(e.target.parentNode);
  // console.log((e.target != menu) && (e.target != navNavbar) && (e.target.parentNode != toggleDarkMode));
  // console.log((e.target != menu) && (e.target != navNavbar) && (e.target.parentNode != toggleDarkMode));
  // console.log(e.target != menu);
  // console.log((e.target != menu) && (e.target != navNavbar) && (e.target != darkToggleInput));
  if (
    e.target != menu &&
    e.target != navNavbar &&
    e.target != toggleDarkMode &&
    e.target.parentNode != toggleDarkMode
  ) {
    navNavbar.classList.remove("active");
    overlay.style.display = "none";
  } else {
    if (
      e.target == navNavbar ||
      e.target.parentNode == toggleDarkMode ||
      e.target == toggleDarkMode
    ) {
      return;
    }
    if (navNavbar.classList.contains("active")) {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "block";
    }
    navNavbar.classList.toggle("active");
  }
});
menu.onclick = () => {};
document.addEventListener("scroll", () => {
  navNavbar.classList.remove("active");
  overlay.style.display = "none";
});


// ukuran top pada position sticky profil agar sesuai dengan ukutan navbar
function handleSizeNavbar() {
    navNavbar.classList.remove("active");
    overlay.style.display = "none";
    const nav = document.querySelector("nav.navbar").clientHeight;
    const profile = document.querySelector("aside .profile");
    profile.style.top = nav + 21 + "px";
    // console.log(profile);
  }
  handleSizeNavbar();
  
  window.addEventListener("resize", () => handleSizeNavbar());
  
  // Darkmode toggle
  function handleDarkMode() {
    if (darkToggle.checked) {
      document.body.id = "dark";
      localStorage.theme = "dark";
    } else {
      document.body.id = "";
      localStorage.theme = "light";
    }
  }