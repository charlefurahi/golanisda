<template>
  <section class="section">
    <h2>Latest Announcements</h2>

    <div class="cards">
      <div v-if="loading" class="loading">Fetching latest updates...</div>

      <div 
        v-else 
        v-for="item in announcements" 
        :key="item.id" 
        class="card"
      >
        <div class="card-title">{{ item.title }}</div>
        <div class="card-content">{{ item.content }}</div>
        <small class="card-date">
          {{ new Date(item.created_at).toLocaleDateString() }}
        </small>
      </div>

      <div v-if="!loading && announcements.length === 0">
        Check back soon for new updates!
      </div>
    </div>

    <RouterLink to="/announcements" class="link">
      View all announcements →
    </RouterLink>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const announcements = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/announcements/')
    
    // Sort by date (newest first) and take only the first 3
    announcements.value = response.data
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 3)
      
  } catch (error) {
    console.error("Connection to Backend failed:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Keeping your exact styles */
.section {
  padding: 3rem 1rem;
  max-width: 1100px;
  margin: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.card {
  background: #fff;
  padding: 1.2rem;
  border-left: 4px solid #0b3d2e;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Added slight shadow for depth */
  display: flex;
  flex-direction: column;
}

.card-title {
  font-weight: 700;
  color: #0b3d2e;
  margin-bottom: 0.5rem;
}

.card-content {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.card-date {
  color: #999;
  margin-top: auto;
}

.loading {
  color: #666;
  font-style: italic;
}

.link {
  color: #0b3d2e;
  font-weight: 600;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>