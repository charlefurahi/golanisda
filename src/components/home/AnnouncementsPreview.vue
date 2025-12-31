<template>
  <section class="section">
    <h2>Latest Announcements</h2>

    <div class="cards">
      <div class="card">Sabbath Youth Program – This Saturday</div>
      <div class="card">Church Cleaning – Sunday Morning</div>
      <div class="card">Week of Prayer – Next Week</div>
    </div>

    <RouterLink to="/announcements" class="link">
      View all announcements →
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.section {
  padding: 3rem 1rem;
  max-width: 1100px;
  margin: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.card {
  background: #fff;
  padding: 1.2rem;
  border-left: 4px solid #0b3d2e;
}

.link {
  color: #0b3d2e;
  font-weight: 600;
}
</style>
