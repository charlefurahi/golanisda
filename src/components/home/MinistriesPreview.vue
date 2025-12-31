<template>
  <section class="section">
    <h2>Our Ministries</h2>

    <div class="grid">
      <div>Youth Ministry</div>
      <div>Women Ministry</div>
      <div>Men Ministry</div>
      <div>Children Ministry</div>
    </div>

    <RouterLink to="/ministries" class="link">
      Explore ministries →
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.grid div {
  background: #fff;
  padding: 1.5rem;
  text-align: center;
  font-weight: 500;
}
</style>
