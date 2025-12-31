<template>
  <header class="navbar">
    <div class="nav-container">
      <div class="logo">
        <img src="/src/assets/logo.png" alt="Golani SDA Logo" />
        <span>Golani SDA Church</span>
      </div>

      <nav class="nav-links desktop-only">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/ministries">Ministries</RouterLink>
        <RouterLink to="/sermons">Sermons</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <button class="menu-btn" @click="$emit('openSidebar')">
        ☰
      </button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  background: #0b3d2e;
  color: #fff;
  position: relative;
  z-index: 10; /* Ensure navbar is above hero images */
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: bold;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 1.2rem;
}

.nav-links a {
  color: #fff;
}

.menu-btn {
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 11; /* Ensure button is above images */
}

/* Responsive */
.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: flex;
  }
}
</style>
