<template>
  <section class="hero-section">
    <div class="hero-background">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="hero-image"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>

      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="animate-up">Golani SDA Church</h1>
      <p class="animate-up-delay">Committed to spreading the Gospel of Jesus Christ</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

// 1. Initial local images (Fallback)
const images = ref([
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=1920'
])

const currentIndex = ref(0)
let interval = null

const fetchHeroImages = async () => {
  try {
    // 2. Try to get images from your Gallery API
    const response = await axios.get('http://127.0.0.1:8000/api/gallery/')
    
    if (response.data && response.data.length > 0) {
      // 3. Update the images list with Django media URLs
      images.value = response.data.map(item => 
        item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`
      )
    }
  } catch (error) {
    console.warn("Backend Gallery empty or unreachable. Using fallback images.")
  }
}

onMounted(async () => {
  await fetchHeroImages()
  
  // 4. Only start sliding if we have more than one image
  if (images.value.length > 1) {
    interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length
    }, 5000)
  }
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 50vh;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background: #0b3d2e; /* Brand color fallback */
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  filter: brightness(45%);
}

.hero-image.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 1rem;
}

.hero-content h1 {
  font-size: clamp(2rem, 6vw, 3.5rem);
  text-shadow: 0 4px 10px rgba(0,0,0,0.6);
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.hero-content p {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  text-shadow: 0 2px 6px rgba(0,0,0,0.5);
  font-weight: 300;
}

/* Text Animations */
.animate-up {
  animation: fadeInUp 1s ease-out forwards;
}
.animate-up-delay {
  animation: fadeInUp 1s ease-out 0.4s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>