let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  if (!slides.length) return; // safety: stop if no slides

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // next slide
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  // show current slide
  slides[slideIndex - 1].style.display = "block";

  // repeat every 3 seconds
  setTimeout(showSlides, 3000);
}

// run slideshow only after page fully loads
window.addEventListener("load", showSlides);
