<template>
  <section class="ministries">
    <header class="page-header">
      <h1>Our Ministries</h1>
      <p>Engage, serve, and grow spiritually with our ministries</p>
    </header>

    <div v-if="loading" class="loading">Loading ministries...</div>

    <div v-else class="ministry-grid">
      <div 
        v-for="ministry in ministries" 
        :key="ministry.id" 
        class="ministry-card"
      >
        <img 
          :src="ministry.image ? 'http://127.0.0.1:8000' + ministry.image : '/placeholder-ministry.jpg'" 
          :alt="ministry.name" 
        />
        <h3>{{ ministry.name }}</h3>
        <p>{{ ministry.description }}</p>
        <span v-if="ministry.leader_name" class="contact">
          Leader: {{ ministry.leader_name }}
        </span>
      </div>
    </div>

    <div v-if="!loading && ministries.length === 0" class="no-data">
      No ministries found. Check back soon!
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const ministries = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/ministries/')
    ministries.value = response.data
  } catch (error) {
    console.error("Error fetching ministries:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.ministries {
  max-width: 1000px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  color: #0b3d2e;
}

.page-header p {
  color: #555;
  margin-top: 0.5rem;
}

.ministry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.ministry-card {
  background: #fff;
  padding: 1.5rem;
  text-align: center;
  border-left: 5px solid #0b3d2e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.ministry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.ministry-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.ministry-card h3 {
  margin: 0.5rem 0 0.3rem;
  color: #333;
}

.ministry-card p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
}

.contact {
  font-size: 0.85rem;
  color: #777;
  display: block;
  margin-top: 0.5rem;
  font-weight: 600;
}

.loading, .no-data {
  text-align: center;
  padding: 3rem;
  color: #888;
}
</style>