// =========================
// Waterfall Tours JS
// Handles mobile menu, hero slideshow & attraction card hover slideshows
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

  // --- HERO SLIDESHOW ---
  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  if (slides.length) {
    slides.forEach(slide => {
      slide.style.opacity = 0;
      slide.style.position = "absolute";
      slide.style.top = 0;
      slide.style.left = 0;
      slide.style.width = "100%";
      slide.style.height = "100%";
      slide.style.transition = "opacity 1s ease-in-out";
      slide.style.zIndex = 0;
    });

    slides[0].style.opacity = 1;
    slides[0].style.zIndex = 1;

    setInterval(nextSlide, 4000);
  }

  function nextSlide() {
    const current = slides[slideIndex];
    slideIndex = (slideIndex + 1) % slides.length;
    const next = slides[slideIndex];

    next.style.opacity = 1;
    next.style.zIndex = 1;
    current.style.opacity = 0;
    current.style.zIndex = 0;
  }

  // --- ATTRACTION CARD HOVER MINI-SLIDESHOW ---
  const attractionCards = document.querySelectorAll(".attraction-card");

  attractionCards.forEach(card => {
    const img = card.querySelector("img");
    const images = JSON.parse(card.getAttribute("data-images"));
    let index = 0;
    let interval;

    card.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        index = (index + 1) % images.length;
        // Smooth crossfade
        const fadeImg = new Image();
        fadeImg.src = images[index];
        fadeImg.style.position = "absolute";
        fadeImg.style.top = 0;
        fadeImg.style.left = 0;
        fadeImg.style.width = "100%";
        fadeImg.style.height = "100%";
        fadeImg.style.opacity = 0;
        fadeImg.style.transition = "opacity 0.7s ease-in-out";
        card.appendChild(fadeImg);

        requestAnimationFrame(() => {
          fadeImg.style.opacity = 1;
        });

        setTimeout(() => {
          img.src = images[index];
          card.removeChild(fadeImg);
        }, 700);

      }, 2000); // change image every 2s
    });

    card.addEventListener("mouseleave", () => {
      clearInterval(interval);
      img.src = images[0]; // reset to first image
      index = 0;
    });
  });

});
