<template>
  <section class="hero-section">
    <!-- Background slideshow -->
    <div class="hero-background">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="hero-image"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>

      <!-- Optional dark overlay -->
      <div class="hero-overlay"></div>
    </div>

    <!-- Hero content overlay -->
    <div class="hero-content">
      <h1>Golani SDA Church</h1>
      <p>Committed to spreading the Gospel of Jesus Christ</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/src/assets/gallery1.jpg',
  '/src/assets/gallery2.jpg',
  '/src/assets/gallery3.jpg',
  '/src/assets/gallery4.jpg'
]

const currentIndex = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  color: #fff;
}

/* Background container */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0; /* behind everything */
}

/* Slideshow images */
.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  filter: brightness(30%);
}

.hero-image.active {
  opacity: 1;
}

/* Dark overlay on top of images */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1; /* above images, below content */
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 2; /* above images and overlay */
  max-width: 900px;
  padding: 0 1rem;
}

.hero-content h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  margin-bottom: 0.5rem;
}

.hero-content p {
  font-size: clamp(1rem, 2vw, 1.5rem);
  text-shadow: 0 1px 5px rgba(0,0,0,0.4);
}
</style>
