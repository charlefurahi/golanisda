<template>
  <section class="section">
    <div class="container">
      <h2>Our Ministries</h2>
      <p class="subtitle">Discover how you can grow and serve within our community.</p>

      <div v-if="loading" class="loading">Loading ministries...</div>

      <div v-else class="grid">
        <div 
          v-for="ministry in limitedMinistries" 
          :key="ministry.id" 
          class="ministry-card"
        >
          <div class="card-content">
            <div v-if="ministry.image" class="mini-icon">
               <img :src="'http://127.0.0.1:8000' + ministry.image" alt="" />
            </div>
            <h3>{{ ministry.name }}</h3>
            <p>{{ truncate(ministry.description) }}</p>
          </div>
        </div>
      </div>

      <RouterLink to="/ministries" class="link">
        Explore all ministries →
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const ministries = ref([])
const loading = ref(true)

// Truncate description for the preview cards
const truncate = (text) => {
  return text.length > 60 ? text.substring(0, 60) + '...' : text
}

// Show only the first 4 ministries on the Home page
const limitedMinistries = computed(() => {
  return ministries.value.slice(0, 4)
})

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/ministries/')
    ministries.value = response.data
  } catch (error) {
    console.error("Error fetching ministry preview:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.section {
  padding: 4rem 1rem;
  background: #fdfdfd;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  color: #0b3d2e;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.ministry-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-bottom: 4px solid #0b3d2e;
  transition: transform 0.3s ease;
}

.ministry-card:hover {
  transform: translateY(-8px);
}

.ministry-card h3 {
  color: #333;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.ministry-card p {
  font-size: 0.9rem;
  color: #777;
  line-height: 1.4;
}

.link {
  display: inline-block;
  color: #0b3d2e;
  text-decoration: none;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border: 1px solid #0b3d2e;
  border-radius: 4px;
  transition: all 0.2s;
}

.link:hover {
  background: #0b3d2e;
  color: #fff;
}

.loading {
  padding: 2rem;
  color: #999;
}
</style>