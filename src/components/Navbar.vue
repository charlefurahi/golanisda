<template>
  <header class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="logo">
        <img src="/src/assets/logo.png" alt="Golani SDA Logo" />
        <span>Golani SDA Church</span>
      </RouterLink>

      <nav class="nav-links desktop-only">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/announcements">Announcements</RouterLink> <RouterLink to="/ministries">Ministries</RouterLink>
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
// Define emits for clarity
defineEmits(['openSidebar'])
</script>

<style scoped>
.navbar {
  background: #0b3d2e;
  color: #fff;
  position: sticky; /* Sticky is better so users don't have to scroll up to navigate */
  top: 0;
  z-index: 1000; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 1.5rem; /* Increased gap for better spacing */
}

.nav-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffffff;
}

/* Active link styling */
.router-link-active {
  color: #ffffff !important;
  font-weight: 700;
}

.menu-btn {
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block; /* Show by default */
}

/* Responsive Logic */
.desktop-only {
  display: none;
}

@media (min-width: 992px) {
  .desktop-only {
    display: flex;
  }
  .menu-btn {
    display: none; /* Hide hamburger on large screens */
  }
}
</style>