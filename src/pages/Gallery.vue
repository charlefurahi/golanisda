<template>
  <section class="gallery">
    <header class="page-header">
      <h1>Photo Gallery</h1>
      <p>Snapshots of our church activities and events</p>
    </header>

    <div v-if="loading" class="loading">Loading photos...</div>

    <div v-else class="image-grid">
      <div v-for="photo in photos" :key="photo.id" class="photo-container">
        <img 
          :src="getImageUrl(photo.image)" 
          :alt="photo.title || 'Church Event'" 
          @click="openLightbox(photo)"
        />
        <p v-if="photo.title" class="photo-caption">{{ photo.title }}</p>
      </div>
    </div>

    <div v-if="!loading && photos.length === 0" class="no-data">
      No photos have been uploaded to the gallery yet.
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const photos = ref([])
const loading = ref(true)
const backendUrl = 'http://127.0.0.1:8000' // Your Django server address

// Helper to construct the full image URL
const getImageUrl = (imagePath) => {
  if (!imagePath) return ''
  // If the path is already a full URL, return it; otherwise, append the backend URL
  return imagePath.startsWith('http') ? imagePath : `${backendUrl}${imagePath}`
}

onMounted(async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/gallery/`)
    photos.value = response.data
  } catch (error) {
    console.error("Error fetching gallery:", error)
  } finally {
    loading.value = false
  }
})

// Optional: function to open image in full screen (Lightbox)
const openLightbox = (photo) => {
  window.open(getImageUrl(photo.image), '_blank')
}
</script>

<style scoped>
.gallery {
  max-width: 1000px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.photo-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.photo-container:hover {
  transform: translateY(-5px);
}

.image-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  cursor: pointer;
}

.photo-caption {
  padding: 0.5rem;
  background: #fff;
  font-size: 0.85rem;
  color: #333;
  text-align: center;
  font-weight: 500;
}

.loading, .no-data {
  text-align: center;
  padding: 3rem;
  color: #888;
}
</style>