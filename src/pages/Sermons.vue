<template>
  <section class="sermon-page">
    <header class="page-header">
      <h1>Sermons</h1>
      <p>Watch and listen to our weekly messages of hope.</p>
    </header>

    <div v-if="loading" class="loading">Preparing the word...</div>

    <div v-else class="sermon-grid">
      <article v-for="sermon in sermons" :key="sermon.id" class="sermon-card">
        
        <div v-if="sermon.video_url" class="video-container">
          <iframe 
            :src="formatVideoUrl(sermon.video_url)" 
            frameborder="0" 
            allowfullscreen
          ></iframe>
        </div>
        
        <div v-else-if="sermon.poster_image" class="poster-container">
          <img :src="'http://127.0.0.1:8000' + sermon.poster_image" alt="Sermon Poster" />
        </div>

        <div class="sermon-content">
          <span class="sermon-date">{{ new Date(sermon.date).toLocaleDateString() }}</span>
          <h3>{{ sermon.title }}</h3>
          <p class="speaker"><strong>Speaker:</strong> {{ sermon.speaker }}</p>
          <p class="description">{{ sermon.description }}</p>

          <div class="media-actions">
            <div v-if="sermon.audio_file" class="audio-box">
              <label>Listen to Audio:</label>
              <audio controls>
                <source :src="'http://127.0.0.1:8000' + sermon.audio_file" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>

            <a v-if="sermon.pdf_notes" 
               :href="'http://127.0.0.1:8000' + sermon.pdf_notes" 
               target="_blank" 
               class="download-btn">
               📄 Download Sermon Notes (PDF)
            </a>
          </div>
        </div>
      </article>
    </div>

    <div v-if="!loading && sermons.length === 0" class="no-data">
      No sermons have been uploaded yet.
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sermons = ref([])
const loading = ref(true)

// Function to convert normal YouTube links to "Embed" links
const formatVideoUrl = (url) => {
  if (url.includes('youtube.com/watch?v=')) {
    return url.replace('watch?v=', 'embed/')
  }
  if (url.includes('youtu.be/')) {
    return url.replace('youtu.be/', 'youtube.com/embed/')
  }
  return url
}

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/sermons/')
    // Sort by date newest first
    sermons.value = response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error("Error fetching sermons:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.sermon-page {
  max-width: 1100px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.sermon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.sermon-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.poster-container img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.sermon-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.sermon-date {
  font-size: 0.8rem;
  color: #0b3d2e;
  font-weight: 700;
  text-transform: uppercase;
}

.sermon-content h3 {
  margin: 0.5rem 0;
  color: #333;
}

.speaker {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.9rem;
  color: #777;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.media-actions {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.audio-box label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 5px;
  font-weight: bold;
}

audio {
  width: 100%;
  height: 35px;
}

.download-btn {
  display: inline-block;
  padding: 0.8rem;
  background: #f0f4f2;
  color: #0b3d2e;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.85rem;
  text-align: center;
  transition: background 0.2s;
}

.download-btn:hover {
  background: #0b3d2e;
  color: #fff;
}

.loading, .no-data {
  text-align: center;
  padding: 4rem;
  color: #888;
}
</style>