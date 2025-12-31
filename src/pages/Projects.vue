<template>
  <section class="projects">
    <header class="page-header">
      <h1>Church Projects</h1>
      <p>Helping the community and growing the church</p>
    </header>

    <div v-if="loading" class="loading">Loading our current projects...</div>

    <div v-else class="project-list">
      <article 
        v-for="project in projects" 
        :key="project.id" 
        class="project"
      >
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <span v-if="project.status" class="status-badge">{{ project.status }}</span>
        </div>
        
        <p>{{ project.description }}</p>
        
        <div v-if="project.progress" class="progress-container">
          <div class="progress-bar" :style="{ width: project.progress + '%' }"></div>
          <span>{{ project.progress }}% Complete</span>
        </div>
      </article>
    </div>

    <div v-if="!loading && projects.length === 0" class="no-data">
      No projects listed at the moment.
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projects = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/projects/')
    projects.value = response.data
  } catch (error) {
    console.error("Error fetching projects:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.projects {
  max-width: 900px;
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

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project {
  background: #fff;
  padding: 1.5rem;
  border-left: 5px solid #0b3d2e;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project h3 {
  margin: 0;
  color: #0b3d2e;
}

.status-badge {
  font-size: 0.7rem;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  font-weight: bold;
}

.project p {
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Progress Bar Styles */
.progress-container {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #777;
}

.progress-bar {
  height: 8px;
  background: #0b3d2e;
  border-radius: 4px;
  margin-bottom: 4px;
}

.loading, .no-data {
  text-align: center;
  padding: 3rem;
  color: #888;
}
</style>