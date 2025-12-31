<template>
  <section class="leadership">
    <header class="page-header">
      <h1>Our Leadership Team</h1>
      <p>Meet those guiding Golani SDA Church</p>
    </header>

    <div class="leader-grid">
      <!-- Example leader -->
      <div class="leader-card">
        <img src="/src/assets/leader1.jpg" alt="Pastor John Doe" />
        <h3>Pastor John Doe</h3>
        <p>Senior Pastor</p>
        <span class="contact">Email: pastor@golanisda.org</span>
      </div>

      <div class="leader-card">
        <img src="/src/assets/leader2.png" alt="Elder Jane Smith" />
        <h3>Elder Jane Smith</h3>
        <p>Elder</p>
        <span class="contact">Email: elder@golanisda.org</span>
      </div>

      <div class="leader-card">
        <img src="/src/assets/leader3.png" alt="Deacon Peter M." />
        <h3>Deacon Peter M.</h3>
        <p>Deacon</p>
        <span class="contact">Email: deacon@golanisda.org</span>
      </div>
    </div>

    <div class="cta">
      <p>Want to serve in a ministry? <RouterLink to="/ministries">Explore our ministries →</RouterLink></p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
}

.leader-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.leader-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.leader-card h3 {
  margin: 0.5rem 0 0.3rem;
}

.leader-card p {
  font-weight: 500;
  color: #0b3d2e;
}

.contact {
  font-size: 0.85rem;
  color: #777;
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
