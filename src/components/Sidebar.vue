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
      <button class="close-btn" @click="$emit('closeSidebar')">✖</button>

      <RouterLink to="/announcements" @click="$emit('closeSidebar')">📢 Announcements</RouterLink>
      <RouterLink to="/donate" @click="$emit('closeSidebar')">❤️ Donate</RouterLink>
      <RouterLink to="/projects" @click="$emit('closeSidebar')">🏗 Projects</RouterLink>
      <RouterLink to="/leadership" @click="$emit('closeSidebar')">👥 Leadership</RouterLink>
      <RouterLink to="/gallery" @click="$emit('closeSidebar')">🖼 Gallery</RouterLink>
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
  background: rgba(0, 0, 0, 0.45);
  z-index: 100; /* overlay below sidebar but above hero */
  display: none;
}

.overlay.active {
  display: block;
}

/* Sidebar panel */
.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100vh;
  background: #ffffff;
  z-index: 101; /* above overlay */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: right 0.3s ease;
}

.sidebar.open {
  right: 0;
}

.close-btn {
  align-self: flex-end;
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.sidebar a {
  font-weight: 500;
  color: #0b3d2e;
  text-decoration: none;
}

.sidebar a:hover {
  text-decoration: underline;
}
</style>
