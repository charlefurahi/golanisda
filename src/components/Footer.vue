<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Golani SDA Church</h3>
        <p>A community of faith, hope, and love.</p>
        <div class="footer-socials" style="margin-top: 1rem; display: flex; gap: 1rem;">
          <a href="#" aria-label="YouTube" style="color: white; font-size: 1.2rem;"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="Facebook" style="color: white; font-size: 1.2rem;"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram" style="color: white; font-size: 1.2rem;"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <div class="footer-links">
        <h4>Quick Links</h4>
        <nav>
          <RouterLink to="/sermons">Sermons</RouterLink>
          <RouterLink to="/events">Events</RouterLink>
          <RouterLink to="/donate">Donate</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>

      <div class="footer-links">
        <h4>Service Times</h4>
        <nav>
          <span style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.85);">Sabbath: 08:00 AM - 06:00 PM</span>
          <span style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.85);">Mid-week: Wed 06:00 PM</span>
          <span style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.85);">Vespers: Fri 06:00 PM</span>
        </nav>
      </div>

      <div class="footer-contact">
        <h4>Connect</h4>
        <p>Email: info@golanisda.org</p>
        <p>Dar es Salaam, Tanzania</p>
        <p>Location: Golani - Dar es Salaam</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Golani Seventh-day Adventist Church. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* ===============================
   FOOTER BASE
================================ */
.footer {
  background: linear-gradient(90deg, #0a2a6c, #0d47a1, #1565c0);
  color: #fff;
  padding: 3rem 1rem 1rem;
  font-family: 'Poppins', sans-serif;
}

/* ===============================
   FOOTER CONTENT GRID
================================ */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  /* Updated to 4 columns for PC, auto-scales for mobile */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
}

/* Brand & Section Titles */
.footer-brand h3,
.footer-links h4,
.footer-contact h4 {
  margin-bottom: 1rem;
  color: #ffffff;
}

/* Footer Links & Service Spans */
.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a, 
.footer-links span {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

/* Contact Info */
.footer-contact p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.5rem;
}

/* Footer Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

/* ===============================
   RESPONSIVE
================================ */
@media (max-width: 600px) {
  .footer-content {
    text-align: center;
    grid-template-columns: 1fr;
  }
  
  .footer-socials {
    justify-content: center;
  }
}
</style>
