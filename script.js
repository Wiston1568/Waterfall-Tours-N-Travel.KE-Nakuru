// =========================
// Waterfall Tours JS (Fixed Version)
// Handles:
// - Mobile menu toggle
// - Homepage hero slideshow
// - Attractions page slideshow
// - Hover slideshows for attraction cards
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

  // --- HOMEPAGE HERO SLIDESHOW ---
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    let currentSlide = 0;
    slides[currentSlide].style.opacity = 1;

    setInterval(() => {
      slides[currentSlide].style.opacity = 0;
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = 1;
    }, 5000); // 5 seconds per slide
  }

  // --- ATTRACTIONS PAGE SLIDESHOW ---
  const attractionSlides = document.querySelectorAll(".attraction-slide");
  if (attractionSlides.length > 0) {
    let currentAttraction = 0;
    attractionSlides[currentAttraction].style.opacity = 1;

    setInterval(() => {
      attractionSlides[currentAttraction].style.opacity = 0;
      currentAttraction = (currentAttraction + 1) % attractionSlides.length;
      attractionSlides[currentAttraction].style.opacity = 1;
    }, 5000); // 5 seconds per slide
  }

  // --- ATTRACTION CARD HOVER SLIDESHOW ---
  const cards = document.querySelectorAll(".attraction-card");
  cards.forEach(card => {
    const images = card.querySelectorAll("img");
    if (images.length > 1) {
      let idx = 0;
      let hoverInterval;

      card.addEventListener("mouseenter", () => {
        hoverInterval = setInterval(() => {
          images.forEach((img, i) => img.style.opacity = (i === idx ? 1 : 0));
          idx = (idx + 1) % images.length;
        }, 1000);
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(hoverInterval);
        images.forEach((img, i) => img.style.opacity = (i === 0 ? 1 : 0));
      });
    }
  });
});
