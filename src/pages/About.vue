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
  max-width: 1200px;
  margin: auto;
  padding: clamp(3rem, 6vw, 5rem) 1rem;
  color: var(--text-dark);
  line-height: 1.8;
}

/* Hero */
.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.hero h1 {
  color: var(--primary);
  margin-bottom: 0.8rem;
}

.hero p {
  font-size: 1.05rem;
  max-width: 650px;
  margin: auto;
}

/* Mission Grid */
.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.about-card {
  padding: 2rem;
  border-radius: var(--radius);
  background: var(--white);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: 0.3s ease;
}

.about-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.08);
}

.about-card h2 {
  margin-bottom: 0.8rem;
  color: var(--primary);
}

/* Identity */
.identity {
  margin-bottom: 3rem;
}

.identity h2 {
  color: var(--primary);
  margin: 2rem 0 0.8rem;
}

.identity ul {
  margin-top: 1rem;
  padding-left: 1.2rem;
}

.identity li {
  margin-bottom: 0.6rem;
}

/* CTA */
.cta {
  text-align: center;
  margin-top: 3rem;
  font-weight: 500;
}

.cta a {
  color: var(--primary);
  font-weight: 600;
}

.cta a:hover {
  text-decoration: underline;
}
</style>
