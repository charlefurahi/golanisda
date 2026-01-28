<template>
  <section class="section">
    <div class="header-flex">
      <h2>Latest Announcements</h2>
      <RouterLink to="/announcements" class="link">
        View all →
      </RouterLink>
    </div>

    <div class="cards">
      <!-- Loading -->
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Fetching latest updates...</p>
      </div>

      <!-- Cards -->
      <article
        v-else
        v-for="item in announcements"
        :key="item.id"
        class="card"
      >
        <div class="card-image-wrapper">
          <img
            v-if="item.poster_image"
            :src="resolveImageUrl(item.poster_image)"
            :alt="item.title"
            class="card-img"
            @error="onImageError"
          />
          <div v-else class="placeholder-img">No Image</div>
        </div>

        <div class="card-body">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-content line-clamp">
            {{ item.description }}
          </p>
          <small class="card-date">
            {{ formatDate(item.created_at) }}
          </small>
        </div>
      </article>

      <!-- Empty -->
      <div
        v-if="!loading && announcements.length === 0"
        class="empty-state"
      >
        Check back soon for new updates!
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import api from '../../services/api'

const announcements = ref([])
const loading = ref(true)

const BACKEND_URL = 'http://127.0.0.1:8000'
const MAX_PREVIEW = 3

const resolveImageUrl = (path) => {
  if (!path) return ''
  return path.startsWith('http')
    ? path
    : `${BACKEND_URL}${path}`
}

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString()
}

const onImageError = (e) => {
  e.target.style.display = 'none'
}

const fetchAnnouncements = async () => {
  loading.value = true
  try {
    const { data } = await api.get('/announcements/')
    announcements.value = data
      .sort(
        (a, b) =>
          new Date(b.created_at) - new Date(a.created_at)
      )
      .slice(0, MAX_PREVIEW)
  } catch (err) {
    console.error('Preview fetch failed:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchAnnouncements)
</script>

<style scoped>
.section {
  padding: 3rem 1rem;
  max-width: 1100px;
  margin: auto;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image-wrapper {
  aspect-ratio: 16 / 9;
  background: #eee;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-img {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.card-body {
  padding: 1.2rem;
}

.card-title {
  font-weight: 700;
  color: #0b3d2e;
  margin-bottom: 0.5rem;
}

.card-content {
  font-size: 0.9rem;
  color: #555;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-date {
  font-size: 0.75rem;
  color: #999;
}

.link {
  color: #0b3d2e;
  font-weight: 600;
  text-decoration: none;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #0b3d2e;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
