<template>
  <section class="page">
    <header class="event-header">
      <h1>Church Events</h1>
      <p>Stay updated with our upcoming fellowships and programs.</p>
    </header>

    <div class="events-list">
      <div v-if="loading" class="loading">Searching for upcoming events...</div>

      <div 
        v-else 
        v-for="event in events" 
        :key="event.id" 
        class="event-card"
      >
        <div class="event-date-box">
          <span class="month">{{ getMonth(event.date) }}</span>
          <span class="day">{{ getDay(event.date) }}</span>
        </div>

        <div class="event-details">
          <h3>{{ event.title }}</h3>
          <p class="description">{{ event.description }}</p>
          <div class="meta">
            <span class="time">🕒 {{ event.time || 'Check back for time' }}</span>
            <span class="location">📍 {{ event.location }}</span>
          </div>
        </div>
      </div>

      <div v-if="!loading && events.length === 0" class="no-events">
        No events scheduled right now. Check back later!
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const events = ref([])
const loading = ref(true)

// Helper functions to format the date box
const getMonth = (dateStr) => {
  return new Date(dateStr).toLocaleString('default', { month: 'short' }).toUpperCase()
}
const getDay = (dateStr) => {
  return new Date(dateStr).getDate()
}

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/events/')
    // Sorting to show the soonest event first
    events.value = response.data.sort((a, b) => new Date(a.date) - new Date(b.date))
  } catch (error) {
    console.error("Error fetching events:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.page {
  max-width: 1000px;
  margin: auto;
  padding: 3rem 1rem;
}

.event-header {
  text-align: center;
  margin-bottom: 3rem;
}

.event-header h1 {
  color: #0b3d2e;
  font-size: 2.5rem;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.event-card {
  display: flex;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}

.event-card:hover {
  transform: scale(1.01);
}

.event-date-box {
  background: #0b3d2e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  min-width: 100px;
}

.month {
  font-size: 0.9rem;
  font-weight: bold;
}

.day {
  font-size: 2rem;
  font-weight: 800;
}

.event-details {
  padding: 1.5rem;
  flex-grow: 1;
}

.event-details h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.description {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: #0b3d2e;
  font-weight: 600;
}

.loading, .no-events {
  text-align: center;
  padding: 3rem;
  color: #888;
}
</style>