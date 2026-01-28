<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar @openSidebar="openSidebar" />

    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" @closeSidebar="closeSidebar" />

    <!-- Dynamic Page Content -->
    <router-view />

    <!-- Footer (Global for all pages) -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

const isSidebarOpen = ref(false)
const openSidebar = () => (isSidebarOpen.value = true)
const closeSidebar = () => (isSidebarOpen.value = false)
</script>

<style>
#app {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, #f9fbff 0%, #ffffff 65%);
  scroll-behavior: smooth;
}
</style>
