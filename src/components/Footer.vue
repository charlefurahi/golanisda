<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Golani SDA Church</h3>
        <p>A community of faith, hope, and love.</p>
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

      <div class="footer-contact">
        <h4>Connect</h4>
        <p>Email: info@golanisda.org</p>
        <p>Dar es Salaam, Tanzania</p>
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
.footer {
  background: #0b3d2e;
  color: #fff;
  padding: 3rem 1rem 1rem;
  margin-top: 5rem;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-brand h3, 
.footer-links h4, 
.footer-contact h4 {
  margin-bottom: 1rem;
  color: #fff;
}

.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: #adb5bd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-contact p {
  font-size: 0.9rem;
  color: #adb5bd;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #888;
}

@media (max-width: 600px) {
  .footer-content {
    text-align: center;
  }
}
</style>