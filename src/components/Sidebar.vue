<template>
  <div>
    <div
      class="overlay"
      :class="{ active: isOpen }"
      @click="$emit('closeSidebar')"
    ></div>

    <aside :class="['sidebar', { open: isOpen }]">
      <div class="sidebar-header">
        <span class="menu-title">Menu</span>
        <button class="close-btn" @click="$emit('closeSidebar')">✖</button>
      </div>

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
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200; 
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100vh;
  background: #ffffff;
  z-index: 201; 
  padding: 1.5rem;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.open {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.menu-title {
  font-weight: 700;
  color: #0b3d2e;
  font-size: 1.2rem;
}

.close-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-links a {
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
}

.sidebar-links a:hover {
  background: #f0f4f2;
  color: #0b3d2e;
}

.router-link-active {
  background: #f0f4f2;
  color: #0b3d2e !important;
  font-weight: 700 !important;
}

.divider {
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #eee;
}

.donate-sidebar-btn {
  background: #0b3d2e;
  color: white !important;
  text-align: center;
  margin-top: 1rem;
}

.donate-sidebar-btn:hover {
  background: #082d22 !important;
}
</style>