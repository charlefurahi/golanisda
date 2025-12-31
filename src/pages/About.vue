<template>
  <section class="about-page">
    <!-- Hero / Header -->
    <div class="hero">
      <h1>About Golani SDA Church</h1>
      <p>Committed to spreading the Gospel of Jesus Christ and serving our community.</p>
    </div>

    <!-- Mission, Method & Vision -->
    <div class="mission-vision">
      <div class="card">
        <h2>Our Mission</h2>
        <p>
          Make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the everlasting gospel of the Three Angels’ Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8, Rev 14:6-12).
        </p>
      </div>

      <div class="card">
        <h2>Our Method</h2>
        <p>
          Guided by the Bible and the Holy Spirit, Seventh-day Adventists pursue the mission of making disciples through Christ-like living, healing, serving, proclaiming, teaching, and training.
        </p>
      </div>

      <div class="card">
        <h2>Our Vision</h2>
        <p>
          In harmony with Bible revelation, Seventh-day Adventists see as the climax of God’s plan the restoration of all His creation to full harmony with His perfect will and righteousness.
        </p>
      </div>
    </div>

    <!-- Identity & Implementation -->
    <div class="identity">
      <h2>Identity</h2>
      <p>
        The Seventh-day Adventist Church sees itself as the remnant Church of end-time Bible prophecy. Members understand their special role as ambassadors of God’s kingdom and messengers of the soon return of Jesus Christ. Every aspect of a member’s life is influenced by the conviction that we live in the last days and that Jesus’ return is imminent.
      </p>

      <h2>Implementation of Our Mission</h2>
      <p>
        Called by God, guided by the Bible, and empowered by the Holy Spirit, Seventh-day Adventists devote themselves to:
      </p>
      <ul>
        <li><strong>Christ-Like Living:</strong> Moral, ethical, and social behaviors consistent with the teachings and example of Jesus.</li>
        <li><strong>Christ-Like Healing:</strong> Promote healthful living and care for the sick and needy.</li>
        <li><strong>Christ-Like Serving:</strong> Humble service to those affected by poverty, tragedy, and disease.</li>
        <li><strong>Christ-Like Proclaiming:</strong> Active witness through conversation, preaching, publishing, and the arts.</li>
        <li><strong>Christ-Like Teaching:</strong> Promote growth of understanding and relationship with God, His Word, and the universe.</li>
        <li><strong>Christ-Like Training:</strong> Nurture spiritual growth, provide training for effective witness, and encourage obedience to God’s will.</li>
      </ul>
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
  line-height: 1.7;
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

/* Mission, Method & Vision / Identity */
.mission-vision, .identity {
  margin-bottom: 3rem;
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
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

.identity h2 {
  color: #0b3d2e;
  margin-bottom: 0.5rem;
}

.identity p, .identity ul {
  color: #555;
  margin-bottom: 1rem;
}

.identity ul {
  list-style: disc inside;
  padding-left: 1rem;
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
