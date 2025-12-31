<template>
  <section class="about-page">
    <!-- Hero / Header -->
    <div class="hero">
      <h1>About Golani SDA Church</h1>
      <p>Committed to spreading the Gospel of Jesus Christ and serving our community.</p>
    </div>

    <!-- Mission & Vision -->
    <div class="mission-vision">
      <div class="card">
        <h2>Our Mission</h2>
        <p>To guide our members spiritually, nurture faith, and impact the community with love and service.</p>
      </div>

      <div class="card">
        <h2>Our Vision</h2>
        <p>To be a Christ-centered church, growing disciples, and making a difference locally and globally.</p>
      </div>
    </div>

    <!-- Brief History -->
    <div class="history">
      <h2>Our Story</h2>
      <p>
        Founded in [Year], Golani SDA Church has been a beacon of faith in the community,
        fostering worship, education, and outreach programs for all ages.
      </p>
    </div>

    <!-- Call to Action -->
    <div class="cta">
      <p>Join us in our journey of faith and community service. <router-link to="/contact">Get in touch →</router-link></p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: auto;
  padding: 3rem 1rem;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #222;
  line-height: 1.6;
}

/* Hero / Header */
.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #0b3d2e;
}

.hero p {
  margin-top: 0.5rem;
  color: #555;
  font-size: 1.1rem;
}

/* Mission & Vision */
.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-left: 5px solid #0b3d2e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.card h2 {
  margin-bottom: 0.5rem;
  color: #0b3d2e;
}

.card p {
  color: #555;
}

/* History Section */
.history {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #fff;
  border-left: 5px solid #0b3d2e;
}

.history h2 {
  color: #0b3d2e;
  margin-bottom: 0.5rem;
}

.history p {
  color: #555;
}

/* Call to Action */
.cta {
  text-align: center;
  margin-top: 2rem;
  font-weight: 500;
}

.cta a {
  color: #0b3d2e;
  font-weight: 600;
  text-decoration: none;
}

.cta a:hover {
  text-decoration: underline;
}
</style>
