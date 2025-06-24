// Smooth scroll enhancement for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky nav background change on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-head");
  if (window.scrollY > 80) {
    nav.style.background = "#0f141b";
  } else {
    nav.style.background = "#131c27";
  }
});

// Form submission alert
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  // Simple validation message
  alert("Thanks for contacting Travelly! We’ll be in touch shortly.");
});

// Optional: Mobile navigation toggle (if you later implement a hamburger menu)
// const navToggle = document.querySelector(".nav-toggle");
// const navLinks = document.querySelector("nav ul");
// navToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
// });
