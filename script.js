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
  const slides = document.getElementsByClassName("slide");
  let slideIndex = 0;

  if (slides.length) {
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

    setInterval(nextSlide, 4000);
  }

  function nextSlide() {
    if (!slides.length) return;

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
    // Add leaves container
    let leavesContainer = document.createElement("div");
    leavesContainer.id = "leaves-container";
    leavesContainer.style.position = "absolute";
    leavesContainer.style.top = 0;
    leavesContainer.style.left = 0;
    leavesContainer.style.width = "100%";
    leavesContainer.style.height = "100%";
    leavesContainer.style.pointerEvents = "none";
    leavesContainer.style.zIndex = 0;
    attractionsGrid.appendChild(leavesContainer);

    const leavesCount = 20;

    for (let i = 0; i < leavesCount; i++) {
      const leaf = document.createElement("div");
      leaf.classList.add("leaf");

      // Randomize initial properties
      leaf.style.width = `${20 + Math.random() * 20}px`;
      leaf.style.height = leaf.style.width;
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = `${Math.random() * 100}%`;
      leaf.style.animationDuration = `${5 + Math.random() * 5}s`;
      leaf.style.opacity = 0.5 + Math.random() * 0.5;

      // Optionally, you can use a background-image leaf instead of img
      leaf.style.backgroundImage = "url('images/leaf.png')";
      leaf.style.backgroundSize = "contain";
      leaf.style.backgroundRepeat = "no-repeat";

      leavesContainer.appendChild(leaf);
    }
  }
});
