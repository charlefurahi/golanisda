<template>
  <section class="cta-section">
    <div class="cta-content">
      <h2>You Are Welcome to Worship With Us</h2>
      <p>Join our community this Sabbath and experience the warmth of fellowship.</p>
      
      <div class="cta-buttons">
        <RouterLink to="/contact" class="btn btn-white">Get in Touch</RouterLink>
        <RouterLink to="/events" class="btn btn-outline">View Schedule</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #0b3d2e 0%, #1a5d4a 100%);
  color: #fff;
  padding: 5rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Subtle background decoration */
.cta-section::before {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
  opacity: 0.9;
  font-size: 1.1rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px; /* Rounded pill style */
  transition: all 0.3s ease;
}

.btn-white {
  background: #fff;
  color: #0b3d2e;
}

.btn-white:hover {
  background: #f0f0f0;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}
</style>