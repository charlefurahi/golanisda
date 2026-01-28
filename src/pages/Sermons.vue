<template>
  <section class="ministries-page">
    <header class="page-header">
      <h1>Our Ministries</h1>
      <p>Discover the heartbeat of our church through our various departments.</p>
    </header>

    <div v-if="loading" class="status-message">
      <div class="spinner"></div>
      <p>Loading departments...</p>
    </div>

    <div v-else class="ministries-grid">
      <div 
        v-for="ministry in ministries" 
        :key="ministry.id" 
        class="ministry-card"
      >
        <div class="ministry-image">
          <img 
            v-if="ministry.image" 
            :src="resolveUrl(ministry.image)" 
            :alt="ministry.name" 
            class="header-img"
          />
          <div v-else class="image-placeholder">
            <span>{{ ministry.name }}</span>
          </div>
        </div>

        <div class="ministry-content">
          <div class="title-row">
            <h3>{{ ministry.name }}</h3>
          </div>
          
          <p class="description">{{ ministry.description }}</p>

          <div class="ministry-footer">
            <div v-if="ministry.leader" class="leader-info">
              <span class="icon">👤</span>
              <span class="leader-name">Leader: {{ ministry.leader }}</span>
            </div>
            <button class="join-btn" @click="handleJoin(ministry.name)">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!loading && ministries.length === 0" class="no-data">
      <p>Ministries list is currently being updated. Please check back later.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const ministries = ref([])
const loading = ref(true)
const BACKEND_URL = 'http://127.0.0.1:8000'

// URL Resolver for media files
const resolveUrl = (path) => {
  if (!path) return ''
  return path.startsWith('http') ? path : `${BACKEND_URL}${path}`
}

const fetchMinistries = async () => {
  loading.value = true
  try {
    const response = await api.get('/ministries/')
    ministries.value = response.data
  } catch (error) {
    console.error("Error fetching ministries:", error)
  } finally {
    loading.value = false
  }
}

const handleJoin = (name) => {
  alert(`Interested in joining ${name}? Contact the church office for more details!`)
}

onMounted(() => {
  fetchMinistries()
})
</script>

<style scoped>
.ministries-page {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  color: #0b3d2e;
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: #666;
  font-size: 1.1rem;
}

/* Ministries Layout */
.ministries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.ministry-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease;
}

.ministry-card:hover {
  transform: translateY(-8px);
}

/* Image Handling */
.ministry-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #0b3d2e;
  overflow: hidden;
}

.header-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  opacity: 0.3;
}

/* Content Area */
.ministry-content {
  padding: 1.8rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.ministry-content h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.description {
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

/* Footer Section */
.ministry-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f5f5f5;
  padding-top: 1.2rem;
}

.leader-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #777;
}

.leader-name {
  font-weight: 600;
  color: #333;
}

.join-btn {
  background: #0b3d2e;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: background 0.2s;
}

.join-btn:hover {
  background: #0e4d3a;
}

/* Status States */
.status-message {
  text-align: center;
  padding: 5rem;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0b3d2e;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.no-data {
  text-align: center;
  padding: 5rem;
  color: #888;
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>