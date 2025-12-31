<template>
  <section class="cta">
    <h2>You Are Welcome to Worship With Us</h2>
    <RouterLink to="/contact" class="btn">Get in Touch</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.cta {
  background: #0b3d2e;
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background: #fff;
  color: #0b3d2e;
  padding: 0.6rem 1.5rem;
  font-weight: bold;
}
</style>
