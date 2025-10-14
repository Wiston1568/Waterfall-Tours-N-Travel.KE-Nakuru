// =========================
// Waterfall Tours JS
// Handles mobile menu & slideshow
// =========================

document.addEventListener("DOMContentLoaded", () => {
  // --- MOBILE MENU TOGGLE ---
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // --- SLIDESHOW SETUP ---
  const slides = document.getElementsByClassName("slide");
  let slideIndex = 0;

  if (slides.length) {
    // Initialize slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
      slides[i].style.position = "absolute";
      slides[i].style.top = 0;
      slides[i].style.left = 0;
      slides[i].style.width = "100%";
      slides[i].style.height = "100%";
      slides[i].style.transition = "opacity 1s ease-in-out";
      slides[i].style.zIndex = 0;
    }

    slides[0].style.opacity = 1;
    slides[0].style.zIndex = 1;

    // Start slideshow interval
    setInterval(nextSlide, 4000);
  }

  function nextSlide() {
    if (!slides.length) return;

    const current = slides[slideIndex];
    slideIndex = (slideIndex + 1) % slides.length;
    const next = slides[slideIndex];

    // Fade in next slide
    next.style.opacity = 1;
    next.style.zIndex = 1;

    // Fade out current slide
    current.style.opacity = 0;
    current.style.zIndex = 0;
  }
});
