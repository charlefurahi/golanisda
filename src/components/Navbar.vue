<template>
  <header class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <img src="/src/assets/logo.png" alt="Golani SDA Logo" />
        <span>Golani SDA Church</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="nav-links desktop-only">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/announcements">Announcements</RouterLink>
        <RouterLink to="/ministries">Ministries</RouterLink>
        <RouterLink to="/sermons">Sermons</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="menu-btn"
        aria-label="Open Menu"
        @click="$emit('openSidebar')"
      >
        ☰
      </button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineEmits(['openSidebar'])
</script>

<style scoped>
/* ===============================
   NAVBAR BASE
================================ */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(
    90deg,
    #0a2a6c,
    #0d47a1,
    #1565c0
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

/* ===============================
   CONTAINER
================================ */
.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 0.85rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===============================
   LOGO
================================ */
.logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  color: #ffffff;
}

.logo img {
  height: 38px;
  width: auto;
  color: white;
  
}

.logo span {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

/* ===============================
   DESKTOP NAV
================================ */
.nav-links {
  display: flex;
  gap: 1.6rem;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  transition: color 0.25s ease;
}

.nav-links a:hover {
  color: #ffffff;
}

/* Active Link Indicator */
.router-link-active {
  color: #ffffff;
  font-weight: 600;
}

.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
}

/* ===============================
   MOBILE MENU BUTTON
================================ */
.menu-btn {
  font-size: 1.9rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  line-height: 1;
}

/* ===============================
   RESPONSIVE
================================ */
.desktop-only {
  display: none;
}

@media (min-width: 992px) {
  .desktop-only {
    display: flex;
  }

  .menu-btn {
    display: none;
  }
}
</style>
