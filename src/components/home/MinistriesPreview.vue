<template>
  <div>
    <!-- Hero Section for Ministries -->
    <section class="hero-section hero-ministries">
      <div class="hero-content">
        <h1>Our Ministries</h1>
        <p>Empowering members to serve God and community</p>
      </div>
    </section>

    <!-- Ministries Grid -->
    <section class="ministries-section">
      <div class="container">
        <div class="grid">
          <div class="card" v-for="(ministry, index) in ministries" :key="index">
            <div class="icon">{{ ministry.icon }}</div>
            <h3>{{ ministry.name }}</h3>
            <p>{{ ministry.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ministries = ref([
  { icon: '📖', name: 'Bible Study', description: 'Deepening faith through study.' },
  { icon: '🎶', name: 'Music Ministry', description: 'Leading worship through music.' },
  { icon: '🤝', name: 'Community Outreach', description: 'Serving the local community.' },
  { icon: '🙏', name: 'Prayer Ministry', description: 'Interceding for the congregation.' },
])
</script>

<style scoped>
.hero-ministries {
  height: 50vh;
  background: linear-gradient(135deg,#1565c0);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}

.hero-ministries h1 {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero-ministries p {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  opacity: 0.9;
}

.ministries-section {
  background: #f9fbff;
  padding: 5rem 1rem;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background: #fff;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.3rem;
  color: #0b3d2e;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.95rem;
  color: #555;
}

@media (max-width: 640px) {
  .hero-ministries {
    height: 40vh;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
