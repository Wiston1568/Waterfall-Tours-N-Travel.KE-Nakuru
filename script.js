// =========================
// Waterfall Tours JS
// Handles mobile menu, slideshow & attractions animation
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

  // --- FALLING LEAVES FOR ATTRACTIONS GRID ---
  const attractionsGrid = document.querySelector(".attractions-grid");

  if (attractionsGrid) {
    // Add leaves container only once
    let leavesContainer = document.createElement("div");
    leavesContainer.id = "leaves-container";
    attractionsGrid.prepend(leavesContainer);

    const leavesCount = 20;

    for (let i = 0; i < leavesCount; i++) {
      const leaf = document.createElement("div");
      leaf.className = "leaf";

      const size = 20 + Math.random() * 20;
      leaf.style.width = `${size}px`;
      leaf.style.height = `${size}px`;
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = `${Math.random() * -20}%`; // start above
      leaf.style.animationDuration = `${5 + Math.random() * 5}s`;
      leaf.style.opacity = 0.5 + Math.random() * 0.5;
      leaf.style.backgroundImage = "url('images/leaf.png')";
      leaf.style.backgroundSize = "contain";
      leaf.style.backgroundRepeat = "no-repeat";

      leavesContainer.appendChild(leaf);
    }
  }
});
