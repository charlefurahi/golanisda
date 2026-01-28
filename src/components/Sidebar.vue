<template>
  <div>
    <!-- Overlay -->
    <div
      class="overlay"
      :class="{ active: isOpen }"
      @click="$emit('closeSidebar')"
    ></div>

    <!-- Sidebar -->
    <aside :class="['sidebar', { open: isOpen }]">
      <!-- Header -->
      <div class="sidebar-header">
        <span class="menu-title">Menu</span>
        <button class="close-btn" aria-label="Close Menu" @click="$emit('closeSidebar')">✖</button>
      </div>

      <!-- Links -->
      <nav class="sidebar-links">
        <RouterLink to="/" @click="$emit('closeSidebar')">🏠 Home</RouterLink>
        <RouterLink to="/ministries" @click="$emit('closeSidebar')">🤝 Ministries</RouterLink>
        <RouterLink to="/sermons" @click="$emit('closeSidebar')">📖 Sermons</RouterLink>
        <RouterLink to="/events" @click="$emit('closeSidebar')">📅 Events</RouterLink>
        <RouterLink to="/announcements" @click="$emit('closeSidebar')">📢 Announcements</RouterLink>
        <RouterLink to="/gallery" @click="$emit('closeSidebar')">🖼 Gallery</RouterLink>
        <RouterLink to="/leadership" @click="$emit('closeSidebar')">👥 Leadership</RouterLink>
        <RouterLink to="/projects" @click="$emit('closeSidebar')">🏗 Projects</RouterLink>
        <hr class="divider" />
        <RouterLink to="/donate" class="donate-sidebar-btn" @click="$emit('closeSidebar')">❤️ Support Us</RouterLink>
        <RouterLink to="/contact" @click="$emit('closeSidebar')">✉️ Contact</RouterLink>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  isOpen: Boolean
})
</script>

<style scoped>
/* ===============================
   OVERLAY
================================ */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

/* ===============================
   SIDEBAR BASE
================================ */
.sidebar {
  position: fixed;
  top: 0;
  right: -320px;
  width: 280px;
  max-width: 80%;
  height: 100vh;
  background: linear-gradient(180deg, #0a2a6c, #1565c0);
  color: #fff;
  z-index: 201;
  padding: 1.5rem;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
  transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.sidebar.open {
  right: 0;
}

/* ===============================
   HEADER
================================ */
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-title {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
}

.close-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.close-btn:hover {
  transform: rotate(90deg);
}

/* ===============================
   LINKS
================================ */
.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-family: 'Poppins', sans-serif;
}

.sidebar-links a {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.sidebar-links a:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.router-link-active {
  background: rgba(255, 255, 255, 0.25);
  font-weight: 700 !important;
  color: #fff !important;
}

/* ===============================
   DIVIDER
================================ */
.divider {
  margin: 1rem 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}

/* ===============================
   DONATE BUTTON
================================ */
.donate-sidebar-btn {
  background: #ff4b5c;
  color: white !important;
  text-align: center;
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.donate-sidebar-btn:hover {
  background: #e03e4e !important;
}

/* ===============================
   RESPONSIVE TWEAKS
================================ */
@media (max-width: 480px) {
  .sidebar {
    width: 240px;
    padding: 1.2rem;
  }

  .sidebar-links a {
    padding: 0.65rem 0.9rem;
    font-size: 0.9rem;
  }
}
</style>
