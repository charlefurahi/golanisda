<template>
  <section class="schedule-section">
    <div class="container">
      <div class="header-box">
        <span class="label">Join Us</span>
        <h2>Worship Schedule</h2>
      </div>

      <div class="schedule-grid">
        <div class="schedule-card">
          <div class="icon">☀️</div>
          <h3>Sabbath School</h3>
          <p class="time">09:00 AM – 10:30 AM</p>
          <p class="note">Bible Study & Fellowship</p>
        </div>

        <div class="schedule-card featured">
          <div class="icon">📖</div>
          <h3>Divine Service</h3>
          <p class="time">10:45 AM – 12:30 PM</p>
          <p class="note">Main Worship Service</p>
        </div>

        <div class="schedule-card">
          <div class="icon">🙏</div>
          <h3>Midweek Prayer</h3>
          <p class="day">Wednesdays</p>
          <p class="time">05:30 PM – 06:30 PM</p>
        </div>
      </div>

      <div class="location-hint">
        <p>📍 All services held at Golani SDA Church, Main Hall</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.schedule-section {
  background: #f8faf9;
  padding: 5rem 1rem;
  text-align: center;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.header-box {
  margin-bottom: 3.5rem;
}

.label {
  color: #0b3d2e;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 2px;
}

h2 {
  font-size: 2.2rem;
  color: #333;
  margin-top: 0.5rem;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.schedule-card {
  background: #fff;
  padding: 2.5rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  border: 1px solid #eee;
}

.schedule-card:hover {
  transform: translateY(-10px);
}

/* Highlight the main service */
.schedule-card.featured {
  border: 2px solid #0b3d2e;
  position: relative;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  color: #0b3d2e;
  margin-bottom: 1rem;
}

.time {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
}

.day {
  font-weight: 600;
  color: #666;
}

.note {
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.5rem;
}

.location-hint {
  margin-top: 3rem;
  color: #666;
  font-style: italic;
}

@media (max-width: 600px) {
  .schedule-grid {
    grid-template-columns: 1fr;
  }
}
</style>