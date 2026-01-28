<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section hero-schedule">
      <div class="hero-content">
        <h1>Worship Schedule</h1>
        <p>Join our community this Sabbath and experience the warmth of fellowship.</p>
      </div>
    </section>

    <!-- Schedule Grid -->
    <section class="schedule-section">
      <div class="container">
        <div class="schedule-grid">
          <div
            class="schedule-card"
            v-for="(service, index) in services"
            :key="index"
            :class="{ featured: service.featured }"
          >
            <div class="icon">{{ service.icon }}</div>
            <h3>{{ service.name }}</h3>
            <p class="time" v-if="service.time">{{ service.time }}</p>
            <p class="day" v-if="service.day">{{ service.day }}</p>
            <p class="note">{{ service.note }}</p>
          </div>
        </div>

        <div class="location-hint">
          <p>📍 All services held at Golani SDA Church, Main Hall</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { icon: '☀️', name: 'Sabbath School', time: '09:00 AM – 10:30 AM', note: 'Bible Study & Fellowship' },
  { icon: '📖', name: 'Divine Service', time: '10:45 AM – 12:30 PM', note: 'Main Worship Service', featured: true },
  { icon: '🙏', name: 'Midweek Prayer', day: 'Wednesdays', time: '05:30 PM – 06:30 PM', note: 'Prayer & Reflection' },
]
</script>

<style scoped>
/* Hero Section */
.hero-schedule {
  height: 45vh;
  background: linear-gradient(135deg, #0a2a6c, #1565c0); /* Navbar gradient */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}

.hero-schedule h1 {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero-schedule p {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  opacity: 0.9;
}

/* Schedule Section */
.schedule-section {
  background: #f9fbff;
  padding: 5rem 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Grid */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Cards */
.schedule-card {
  background: #fff;
  padding: 2.5rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.schedule-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.12);
}

/* Featured Card */
.schedule-card.featured {
  border: 2px solid #0a2a6c; /* Navbar primary color */
  background: linear-gradient(180deg, #e3f2fd 0%, #fff 100%);
}

/* Icons */
.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Text */
h3 {
  color: #110b3d; /* Footer & Navbar green */
  margin-bottom: 1rem;
  font-weight: 600;
}

.time {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a2a6c;
}

.day {
  font-weight: 600;
  color: #1565c0;
}

.note {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
}

/* Location Hint */
.location-hint {
  margin-top: 3rem;
  color: #666;
  font-style: italic;
}

/* Responsive */
@media (max-width: 640px) {
  .schedule-grid {
    grid-template-columns: 1fr;
  }
}
</style>
