<template>
  <section class="announcements-container">
    <header class="page-header">
      <h1>Church Announcements</h1>
      <p>Stay informed about upcoming programs and activities</p>
    </header>

    <div v-if="loading" class="status-message">
      <div class="spinner"></div>
      <p>Loading announcements...</p>
    </div>

    <div v-else class="announcement-feed">
      <article
        v-for="item in announcements"
        :key="item.id"
        class="announcement-card"
      >
        <header class="card-header">
          <h3>{{ item.title }}</h3>
          <span class="post-date">
            {{ formatDate(item.created_at) }}
          </span>
        </header>

        <div class="poster-frame">
          <img
            v-if="item.poster_image"
            :src="resolveImageUrl(item.poster_image)"
            :alt="item.title"
            class="poster-img"
            @error="onImageError"
          />
          <div v-else class="image-placeholder">
            🖼️ No Poster Available
          </div>
        </div>

        <div class="card-body">
          <p class="description">
            {{ item.description }}
          </p>
          <small class="meta">
            Reference ID: #{{ item.id }}
          </small>
        </div>
      </article>
    </div>

    <div
      v-if="!loading && announcements.length === 0"
      class="status-message"
    >
      No announcements available yet.
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const announcements = ref([])
const loading = ref(true)

const BACKEND_URL = 'http://127.0.0.1:8000'

const resolveImageUrl = (path) => {
  if (!path) return ''
  return path.startsWith('http')
    ? path
    : `${BACKEND_URL}${path}`
}

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString(
    'en-US',
    { month: 'long', day: 'numeric', year: 'numeric' }
  )
}

const onImageError = (e) => {
  e.target.style.display = 'none'
}

const fetchAnnouncements = async () => {
  loading.value = true
  try {
    const { data } = await api.get('/announcements/')
    announcements.value = data.sort(
      (a, b) =>
        new Date(b.created_at) - new Date(a.created_at)
    )
  } catch (err) {
    console.error('Fetch failed:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchAnnouncements)
</script>

<style scoped>
.announcements-container {
  max-width: 600px;
  margin: auto;
  padding: 2rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  color: #0b3d2e;
}

.announcement-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
  margin-bottom: 2rem;
  overflow: hidden;
}

.card-header {
  padding: 14px;
  border-bottom: 1px solid #eee;
}

.card-header h3 {
  margin: 0;
  font-size: 1rem;
}

.post-date {
  font-size: 0.75rem;
  color: #999;
}

.poster-frame {
  aspect-ratio: 4 / 5;
  background: #f5f5f5;
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
}

.card-body {
  padding: 16px;
}

.description {
  font-size: 0.95rem;
  line-height: 1.5;
}

.meta {
  font-size: 0.7rem;
  color: #aaa;
}

.status-message {
  text-align: center;
  margin-top: 3rem;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #eee;
  border-top: 3px solid #0b3d2e;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
