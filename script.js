<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Attractions | Waterfall Tours & Adventures</title>

  <!-- Styles -->
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

  <!-- SEO -->
  <meta name="description" content="Waterfall Tours & Adventures - Discover Kenya’s top attractions. Safaris, scenic tours, and adventure travel.">
  <meta name="keywords" content="Waterfall Tours, Kenya tourism, Adventure, Safaris, Travel Nakuru, Nature Tours, Waterfall Adventures">
  <meta name="author" content="Waterfall Tours & Adventures Team">

  <style>
    /* ===== Waterfall Tours & Adventures | Modern Responsive Design ===== */
    :root {
      --green: #1b5e20;
      --accent: #43a047;
      --cream: #f8f8f6;
      --white: #ffffff;
      --brown: #5d4037;
    }

    body {
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      background: var(--cream);
      color: var(--brown);
      line-height: 1.6;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* Navbar */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--green);
      color: var(--white);
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .logo-img { max-height: 50px; width: auto; }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: var(--white);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover, .nav-links a.active { color: var(--accent); }

    .menu-toggle { display: none; background: none; border: none; color: var(--white); font-size: 2rem; cursor: pointer; }

    /* Hero Section */
    .hero { position: relative; height: 80vh; display: flex; justify-content: center; align-items: center; text-align: center; overflow: hidden; }

    .slideshow-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }

    .attraction-slide {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      top: 0;
      left: 0;
      z-index: 0;
    }

    .attraction-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }

    .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.35); z-index: 1; }

    .hero-content { position: relative; z-index: 2; color: white; padding: 0 1rem; }
    .hero h1 { font-size: 3rem; margin-bottom: 1rem; text-shadow: 2px 2px 8px rgba(0,0,0,0.6); }
    .hero p { font-size: 1.3rem; margin-bottom: 1.5rem; text-shadow: 1px 1px 6px rgba(0,0,0,0.6); }

    /* Intro Sections */
    .intro { text-align: center; padding: 3rem 1rem; background: var(--white); }
    .intro h2 { color: var(--green); margin-bottom: 1rem; }
    .intro p { max-width: 700px; margin: 0 auto; font-size: 1.05rem; }

    /* Attractions Grid */
    .attractions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 2rem; padding: 3rem 2rem; }
    .attraction-card {
      background: var(--white);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .attraction-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
    .attraction-card img { width: 100%; height: 200px; object-fit: cover; }
    .attraction-card h3 { color: var(--green); margin: 1rem; font-size: 1.3rem; }
    .attraction-card p { margin: 0 1rem 1.2rem; font-size: 0.95rem; }

    /* Coming Soon Section */
    .coming-soon { text-align: center; padding: 3rem 1rem; background: var(--accent); color: var(--white); }
    .coming-soon h2 { margin-bottom: 0.5rem; }

    /* Footer */
    .footer { background: var(--green); color: var(--white); text-align: center; padding: 1.5rem; margin-top: 3rem; font-size: 0.95rem; box-shadow: 0 -3px 8px rgba(0,0,0,0.1); }
    .footer strong { color: var(--accent); }

    /* Responsive */
    @media (max-width: 768px) {
      .menu-toggle { display: block; }
      .nav-links { display: none; flex-direction: column; background: var(--green); position: absolute; top: 70px; right: 20px; padding: 1rem; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
      .nav-links.show { display: flex; }
      .hero h1 { font-size: 2rem; }
      .hero p { font-size: 1rem; }
    }

    html { scroll-behavior: smooth; }
  </style>
</head>

<body>
  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="logo">
      <img src="images/logo.png" alt="Waterfall Tours Logo" class="logo-img" />
    </div>
    <button class="menu-toggle">&#9776;</button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="attractions.html" class="active">Attractions</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO / SLIDESHOW -->
  <section class="hero">
    <div class="slideshow-container">
      <div class="attraction-slide"><img src="images/waterfall1.jpg" alt="Waterfall 1"></div>
      <div class="attraction-slide"><img src="images/waterfall2.jpg" alt="Waterfall 2"></div>
      <div class="attraction-slide"><img src="images/waterfall3.jpg" alt="Waterfall 3"></div>
    </div>
    <div class="overlay"></div>
    <div class="hero-content">
      <h1>Explore Nakuru’s Natural Beauty</h1>
      <p>Unforgettable waterfall adventures await</p>
    </div>
  </section>

  <!-- MAIN CONTENT -->
  <main>
    <section class="intro">
      <h2>Top Attractions to Kickstart Your Journey</h2>
      <p>As a young and growing adventure company, we’re currently curating Kenya’s most scenic and thrilling destinations. Here’s a glimpse of what’s coming soon!</p>
    </section>

    <section class="attractions-grid">
      <div class="attraction-card">
        <img src="images/lake-nakuru.jpg" alt="Lake Nakuru National Park">
        <h3>Lake Nakuru National Park</h3>
        <p>Home to flamingos, rhinos, and breathtaking lake views — a must-see destination.</p>
      </div>

      <div class="attraction-card">
        <img src="images/menengai-crater.jpg" alt="Menengai Crater">
        <h3>Menengai Crater</h3>
        <p>Explore one of the largest volcanic craters in the world, right in Nakuru County.</p>
      </div>

      <div class="attraction-card">
        <img src="images/karuru-falls.jpg" alt="Karuru Waterfalls">
        <h3>Karuru Waterfalls</h3>
        <p>A spectacular multi-tiered waterfall located deep within Aberdare National Park.</p>
      </div>
    </section>

    <section class="coming-soon">
      <h2>More Adventures Coming Soon</h2>
      <p>We’re working to bring you curated tours across Kenya — from cultural experiences to extreme adventures. Stay tuned!</p>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy; 2025 Waterfall Tours & Adventures. All rights reserved.</p>
    <p>Developed by <strong>Wiston1568</strong></p>
  </footer>

  <!-- SCRIPTS -->
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // --- MOBILE MENU TOGGLE ---
      const toggleBtn = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");
      if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => navLinks.classList.toggle("show"));
      }

      // --- ATTRACTIONS SLIDESHOW ---
      const slides = document.querySelectorAll(".attraction-slide");
      let slideIndex = 0;

      if (slides.length) {
        slides.forEach((slide, i) => {
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

        setInterval(() => {
          const current = slides[slideIndex];
          slideIndex = (slideIndex + 1) % slides.length;
          const next = slides[slideIndex];
          next.style.opacity = 1;
          next.style.zIndex = 1;
          current.style.opacity = 0;
          current.style.zIndex = 0;
        }, 4000);
      }
    });
  </script>
</body>
</html>
