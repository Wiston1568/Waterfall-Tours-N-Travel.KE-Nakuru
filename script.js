// =========================
// Waterfall Tours JS (Smooth Crossfade Version)
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

  // --- HELPER FUNCTION: CROSSFADE SLIDESHOW ---
  function crossfadeSlideshow(slides, interval = 5000) {
    if (!slides || slides.length === 0) return;
    let current = 0;

    slides.forEach((slide, i) => {
      slide.style.position = "absolute";
      slide.style.top = 0;
      slide.style.left = 0;
      slide.style.width = "100%";
      slide.style.height = "100%";
      slide.style.transition = "opacity 1.2s ease-in-out";
      slide.style.opacity = i === 0 ? "1" : "0";
      slide.style.zIndex = i === 0 ? "2" : "1";
    });

    setInterval(() => {
      slides[current].style.opacity = "0";
      slides[current].style.zIndex = "1";
      current = (current + 1) % slides.length;
      slides[current].style.opacity = "1";
      slides[current].style.zIndex = "2";
    }, interval);
  }

  // --- HOMEPAGE HERO SLIDESHOW ---
  const heroSlides = document.querySelectorAll(".slide");
  if (heroSlides.length > 0) {
    crossfadeSlideshow(heroSlides, 5000);
  }

  // --- ATTRACTIONS HERO SLIDESHOW ---
  const attractionSlides = document.querySelectorAll(".attraction-slide");
  if (attractionSlides.length > 0) {
    crossfadeSlideshow(attractionSlides, 5000);
  }

  // --- ATTRACTION CARD HOVER SLIDESHOW ---
  const cards = document.querySelectorAll(".attraction-card");
  cards.forEach(card => {
    const images = card.querySelectorAll("img");
    if (images.length > 1) {
      let idx = 0;
      let hoverInterval;

      images.forEach((img, i) => {
        img.style.position = i === 0 ? "relative" : "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.transition = "opacity 0.5s ease-in-out";
        img.style.opacity = i === 0 ? "1" : "0";
        img.style.zIndex = i === 0 ? "2" : "1";
      });

      card.style.position = "relative";

      card.addEventListener("mouseenter", () => {
        hoverInterval = setInterval(() => {
          images.forEach((img, i) => {
            img.style.opacity = i === idx ? "1" : "0";
            img.style.zIndex = i === idx ? "2" : "1";
          });
          idx = (idx + 1) % images.length;
        }, 1000);
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(hoverInterval);
        images.forEach((img, i) => {
          img.style.opacity = i === 0 ? "1" : "0";
          img.style.zIndex = i === 0 ? "2" : "1";
        });
      });
    }
  });

  // --- SERVICES CAROUSEL ---
  const serviceCarousels = document.querySelectorAll(".service-carousel");
  serviceCarousels.forEach(carousel => {
    const slides = carousel.querySelectorAll("img");
    if (slides.length > 1) {
      carousel.style.position = "relative";
      slides.forEach((img, i) => {
        img.style.position = i === 0 ? "relative" : "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.transition = "opacity 1s ease-in-out";
        img.style.opacity = i === 0 ? "1" : "0";
        img.style.zIndex = i === 0 ? "2" : "1";
      });
      crossfadeSlideshow(slides, 4000); // 4s per service slide
    }
  });

});
