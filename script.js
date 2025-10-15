// =========================
// Waterfall Tours JS (Enhanced Version)
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

  // --- GENERIC FADE SLIDESHOW FUNCTION ---
  function createSlideshow(slides, interval = 5000) {
    if (!slides || slides.length === 0) return;
    let current = 0;
    slides.forEach((slide, i) => {
      slide.style.opacity = i === 0 ? "1" : "0";
      slide.style.transition = "opacity 1s ease-in-out";
      slide.style.position = "absolute";
      slide.style.top = 0;
      slide.style.left = 0;
      slide.style.width = "100%";
      slide.style.height = "100%";
    });

    setInterval(() => {
      slides[current].style.opacity = "0";
      current = (current + 1) % slides.length;
      slides[current].style.opacity = "1";
    }, interval);
  }

  // --- HOMEPAGE HERO SLIDESHOW ---
  const heroSlides = document.querySelectorAll(".slide");
  createSlideshow(heroSlides, 5000);

  // --- ATTRACTIONS PAGE SLIDESHOW ---
  const attractionSlides = document.querySelectorAll(".attraction-slide");
  createSlideshow(attractionSlides, 5000);

  // --- ATTRACTION CARD HOVER SLIDESHOW ---
  const cards = document.querySelectorAll(".attraction-card");
  cards.forEach(card => {
    const images = card.querySelectorAll("img");
    if (images.length > 1) {
      let idx = 0;
      let hoverInterval;

      images.forEach((img, i) => {
        img.style.position = "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.transition = "opacity 0.5s ease-in-out";
        img.style.opacity = i === 0 ? "1" : "0";
      });

      card.style.position = "relative";
      card.addEventListener("mouseenter", () => {
        hoverInterval = setInterval(() => {
          images.forEach((img, i) => img.style.opacity = i === idx ? "1" : "0");
          idx = (idx + 1) % images.length;
        }, 1000);
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(hoverInterval);
        images.forEach((img, i) => img.style.opacity = i === 0 ? "1" : "0");
      });
    }
  });

});
