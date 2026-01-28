<template>
  <section class="sermon-page">
    <!-- Page Header -->
    <header class="page-header">
      <h1>Sermons</h1>
      <p>Watch and listen to our weekly messages of hope.</p>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="status-message">
      <div class="spinner"></div>
      <p>Preparing the word...</p>
    </div>

    <!-- Sermons Grid -->
    <div v-else class="sermon-grid">
      <article
        v-for="sermon in sermons"
        :key="sermon.id"
        class="sermon-card"
      >
        <!-- Video Embed -->
        <div v-if="sermon.video_url" class="video-container">
          <iframe
            :src="formatVideoUrl(sermon.video_url)"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Poster Image -->
        <div v-else-if="sermon.poster_image" class="poster-container">
          <img :src="resolveUrl(sermon.poster_image)" alt="Sermon Poster" class="poster-img" />
        </div>

        <!-- Content -->
        <div class="sermon-content">
          <div class="meta-row">
            <span class="sermon-date">{{ formatDate(sermon.date) }}</span>
          </div>

          <h3>{{ sermon.title }}</h3>

          <p class="speaker">
            <span class="icon">👤</span> <strong>{{ sermon.speaker }}</strong>
          </p>

          <p class="description">{{ sermon.description }}</p>

          <div class="media-actions">
            <div v-if="sermon.audio_file" class="audio-box">
              <label>Listen to Sermon:</label>
              <audio controls class="audio-player">
                <source :src="resolveUrl(sermon.audio_file)" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <a
              v-if="sermon.pdf_notes"
              :href="resolveUrl(sermon.pdf_notes)"
              target="_blank"
              class="download-btn"
            >
              <span class="icon">📄</span> Download Sermon Notes (PDF)
            </a>
          </div>
        </div>
      </article>
    </div>

    <!-- No Data -->
    <div v-if="!loading && sermons.length === 0" class="no-data">
      <p>No sermons have been uploaded yet.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const sermons = ref([])
const loading = ref(true)
const BACKEND_URL = 'http://127.0.0.1:8000'

// Resolve media URLs
const resolveUrl = (path) => {
  if (!path) return ''
  return path.startsWith('http') ? path : `${BACKEND_URL}${path}`
}

// Convert YouTube URLs to embed format
const formatVideoUrl = (url) => {
  if (!url) return ''
  let videoId = ''
  if (url.includes('v=')) videoId = url.split('v=')[1].split('&')[0]
  else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url
}

// Format date nicely
const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

// Fetch sermons from API
const fetchSermons = async () => {
  loading.value = true
  try {
    const response = await api.get('/sermons/')
    sermons.value = response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error fetching sermons:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchSermons)
</script>

<style scoped>
/* ===============================
   PAGE BASE
================================ */
.sermon-page {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1rem;
  font-family: 'Poppins', sans-serif;
}

/* PAGE HEADER */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  color: #0a2a6c; /* Navbar Gradient Start */
  font-size: 2.8rem;
  font-weight: 700;
}

.page-header p {
  color: #1565c0; /* Navbar Gradient End */
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* GRID */
.sermon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

/* CARD */
.sermon-card {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sermon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
}

/* VIDEO */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* POSTER IMAGE */
.poster-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CONTENT */
.sermon-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.meta-row {
  margin-bottom: 0.5rem;
}

.sermon-date {
  font-size: 0.85rem;
  color: #0a2a6c;
  font-weight: 600;
  text-transform: uppercase;
}

.sermon-content h3 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #0b3d2e;
}

.speaker {
  color: #555;
  margin-bottom: 1rem;
}

.description {
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* MEDIA ACTIONS */
.media-actions {
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.audio-box {
  margin-bottom: 1.5rem;
}

.audio-box label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.audio-player {
  width: 100%;
  height: 40px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  background: #1565c0;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.download-btn:hover {
  background: #0d47a1;
}

.icon {
  margin-right: 0.5rem;
}

/* LOADING & EMPTY */
.status-message {
  text-align: center;
  padding: 4rem;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0a2a6c;
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

/* RESPONSIVE */
@media (max-width: 640px) {
  .sermon-grid {
    grid-template-columns: 1fr;
  }
}
</style>
