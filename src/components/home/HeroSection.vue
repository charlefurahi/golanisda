<template>
  <section class="hero-section">
    <!-- Background Slider -->
    <div class="hero-background">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="hero-image"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>

      <!-- Gradient Overlay -->
      <div class="hero-overlay"></div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <h1 class="animate-up">Golani SDA Church</h1>
      <p class="animate-up-delay">
        Committed to spreading the Gospel of Jesus Christ
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* 🔹 IMPORT LOCAL IMAGES (VERY IMPORTANT) */
import gallery1 from '@/assets/gallery1.jpg'
import gallery2 from '@/assets/gallery2.jpg'
import gallery3 from '@/assets/gallery3.jpg'
import gallery1 from '@/assets/gallery4.jpg'
import gallery1 from '@/assets/children.jpg'

const images = ref([
  gallery1,
  gallery2,
  // gallery3
])

const currentIndex = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % images.value.length
  }, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  height: min(85vh, 650px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.6s ease;
  filter: brightness(85%);
}

.hero-image.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(3, 37, 126, 0.85),
    rgba(2, 92, 157, 0.75),
    rgba(0, 0, 0, 0.6)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 1.5rem;
}

.hero-content h1 {
  font-weight: 700;
  font-size: clamp(2.3rem, 6vw, 3.8rem);
  margin-bottom: 0.75rem;
  text-shadow: 0 10px 30px rgba(0,0,0,.6);
}

.hero-content p {
  font-weight: 300;
  font-size: clamp(1.05rem, 2.8vw, 1.4rem);
  opacity: 0.95;
  color: black;
}

.animate-up {
  animation: fadeUp 0.9s ease forwards;
}

.animate-up-delay {
  animation: fadeUp 0.9s ease 0.3s forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .hero-section {
    height: 75vh;
  }
}
</style>
