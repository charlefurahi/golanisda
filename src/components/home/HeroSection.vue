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
import axios from 'axios'

const images = ref([
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=1920'
])

const currentIndex = ref(0)
let interval = null

const fetchHeroImages = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/gallery/')
    if (response.data?.length) {
      images.value = response.data.map(item =>
        item.image.startsWith('http')
          ? item.image
          : `http://127.0.0.1:8000${item.image}`
      )
    }
  } catch {
    console.warn('Using fallback hero images')
  }
}

onMounted(async () => {
  await fetchHeroImages()

  if (images.value.length > 1) {
    interval = setInterval(() => {
      currentIndex.value =
        (currentIndex.value + 1) % images.value.length
    }, 5000)
  }
})

onUnmounted(() => interval && clearInterval(interval))
</script>

<style scoped>
/* ================================
   HERO SECTION BASE
================================ */
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

/* ================================
   BACKGROUND
================================ */
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
  filter: brightness(45%);
}

.hero-image.active {
  opacity: 1;
}

/* Blue Modern Gradient */
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(3, 37, 126, 0.85),
      rgba(2, 92, 157, 0.75),
      rgba(0, 0, 0, 0.6)
    );
  z-index: 1;
}

/* ================================
   CONTENT
================================ */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 1.5rem;
}

.hero-content h1 {
  font-weight: 700;
  font-size: clamp(2.3rem, 6vw, 3.8rem);
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  text-shadow: 0 10px 30px rgba(0,0,0,.6);
}

.hero-content p {
  font-weight: 300;
  font-size: clamp(1.05rem, 2.8vw, 1.4rem);
  opacity: 0.95;
  margin-bottom: 2rem;
}

/* ================================
   BUTTONS
================================ */
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.8rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn.primary {
  background: #ffffff;
  color: #0a3fa8;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(255,255,255,.25);
}

.btn.secondary {
  border: 1px solid rgba(255,255,255,.7);
  color: #fff;
}

.btn.secondary:hover {
  background: rgba(255,255,255,.15);
}

/* ================================
   ANIMATIONS
================================ */
.animate-up {
  animation: fadeUp 0.9s ease forwards;
}

.animate-up-delay {
  animation: fadeUp 0.9s ease 0.3s forwards;
  opacity: 0;
}

.animate-up-delay-2 {
  animation: fadeUp 0.9s ease 0.6s forwards;
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

/* ================================
   MOBILE TWEAKS
================================ */
@media (max-width: 640px) {
  .hero-section {
    height: 75vh;
  }
}
</style>
