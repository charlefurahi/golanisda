<template>
  <section class="ministries">
    <header class="page-header">
      <h1>Our Ministries</h1>
      <p>Engage, serve, and grow spiritually with our ministries</p>
    </header>

    <div class="ministry-grid">
      <div class="ministry-card">
        <img src="/src/assets/youth.jpg" alt="Youth Ministry" />
        <h3>Youth Ministry</h3>
        <p>Guiding young members spiritually and socially.</p>
        <span class="contact">Leader: Pastor John Doe</span>
      </div>

      <div class="ministry-card">
        <img src="/src/assets/women.jpg" alt="Women Ministry" />
        <h3>Women Ministry</h3>
        <p>Empowering women through faith-based programs and fellowship.</p>
        <span class="contact">Leader: Sister Jane Smith</span>
      </div>

      <div class="ministry-card">
        <img src="/src/assets/men.jpg" alt="Men Ministry" />
        <h3>Men Ministry</h3>
        <p>Encouraging men to serve God and community effectively.</p>
        <span class="contact">Leader: Brother Peter M.</span>
      </div>

      <div class="ministry-card">
        <img src="/src/assets/children.jpg" alt="Children Ministry" />
        <h3>Children Ministry</h3>
        <p>Teaching children about God in fun and interactive ways.</p>
        <span class="contact">Leader: Sister Mary A.</span>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.ministries {
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

.ministry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.ministry-card {
  background: #fff;
  padding: 1.5rem;
  text-align: center;
  border-left: 5px solid #0b3d2e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ministry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.ministry-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.ministry-card h3 {
  margin: 0.5rem 0 0.3rem;
}

.ministry-card p {
  font-size: 0.95rem;
  color: #555;
}

.contact {
  font-size: 0.85rem;
  color: #777;
  display: block;
  margin-top: 0.5rem;
}
</style>
