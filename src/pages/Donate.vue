<template>
  <section class="donate">
    <header class="page-header">
      <h1>Support Golani SDA Church</h1>
      <p>Your contribution helps us grow spiritually and physically</p>
    </header>

    <div class="donate-methods">
      <div v-if="loading" class="loading">Loading donation details...</div>

      <div 
        v-else 
        v-for="method in donationMethods" 
        :key="method.id" 
        class="method"
      >
        <h3>{{ method.title }}</h3>
        <p v-html="method.details"></p>
        
        <p v-if="method.description" class="description">{{ method.description }}</p>
      </div>

      <div v-if="!loading" class="method">
        <h3>In-person</h3>
        <p>You may also donate physically during church services</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const donationMethods = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    // Fetches from your Django 'donations' app
    const response = await axios.get('http://127.0.0.1:8000/api/donations/')
    donationMethods.value = response.data
  } catch (error) {
    console.error("Could not load donation methods:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.donate {
  max-width: 900px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  color: rgba(2, 92, 157, 0.75),;
}

.page-header p {
  color: black;
  margin-top: 0.5rem;
}

.donate-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method {
  background: #f9f9f9;
  padding: 1.5rem;
  border-left: 5px solid dark blue;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.method:hover {
  transform: translateY(-5px);
}

.method h3 {
  margin-bottom: 0.5rem;
  color: rgba(2, 92, 157, 0.75),
}

.description {
  font-size: 0.85rem;
  color: #777;
  margin-top: 1rem;
}

.loading {
  text-align: center;
  grid-column: 1 / -1;
  padding: 2rem;
  color: #666;
}
</style>