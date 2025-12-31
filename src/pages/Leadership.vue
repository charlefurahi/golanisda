<template>
  <section class="leadership">
    <header class="page-header">
      <h1>Our Leadership Team</h1>
      <p>Meet those guiding Golani SDA Church</p>
    </header>

    <div v-if="loading" class="loading">Loading our team...</div>

    <div v-else class="leader-grid">
      <div 
        v-for="leader in team" 
        :key="leader.id" 
        class="leader-card"
      >
        <img 
          :src="leader.image ? 'http://127.0.0.1:8000' + leader.image : '/placeholder-profile.png'" 
          :alt="leader.name" 
        />
        <h3>{{ leader.name }}</h3>
        <p>{{ leader.position }}</p>
        <span v-if="leader.email" class="contact">Email: {{ leader.email }}</span>
        
        <p v-if="leader.bio" class="bio-text">{{ leader.bio }}</p>
      </div>
    </div>

    <div v-if="!loading && team.length === 0" class="no-data">
      Leadership information will be updated soon.
    </div>

    <div class="cta">
      <p>Want to serve in a ministry? <RouterLink to="/ministries">Explore our ministries →</RouterLink></p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const team = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/leadership/')
    team.value = response.data
  } catch (error) {
    console.error("Error fetching leadership team:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.leadership {
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

.leader-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.leader-card {
  background: #fff;
  padding: 1.5rem;
  text-align: center;
  border-left: 5px solid #0b3d2e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.leader-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.leader-card img {
  width: 100%;
  height: 250px; /* Slightly taller for portraits */
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.leader-card h3 {
  margin: 0.5rem 0 0.3rem;
  color: #333;
}

.leader-card p {
  font-weight: 500;
  color: #0b3d2e;
  margin-bottom: 0.5rem;
}

.bio-text {
  font-size: 0.85rem;
  color: #666;
  font-weight: 400 !important;
  line-height: 1.4;
  margin-top: 0.5rem;
}

.contact {
  font-size: 0.85rem;
  color: #777;
}

.loading, .no-data {
  text-align: center;
  padding: 3rem;
  color: #888;
}

.cta {
  margin-top: 3rem;
  text-align: center;
}

.cta a {
  color: #0b3d2e;
  font-weight: 600;
}
</style>