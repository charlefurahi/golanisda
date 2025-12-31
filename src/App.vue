<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar @openSidebar="openSidebar" />

    <!-- Sidebar -->
    <Sidebar
      :isOpen="isSidebarOpen"
      @closeSidebar="closeSidebar"
    />

    <!-- Hero section -->
    <HeroSection />

    <!-- Main content -->
    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import HeroSection from './components/home/HeroSection.vue'
import Footer from './components/Footer.vue'

const isSidebarOpen = ref(false)

// Functions to open/close sidebar
const openSidebar = () => {
  isSidebarOpen.value = true
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<style>
/* Optional global styles */
#app {
  font-family: 'Arial', sans-serif;
  color: #0b3d2e;
  margin: 0;
  padding: 0;
}
</style>
