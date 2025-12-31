<template>
  <section class="gallery">
    <header class="page-header">
      <h1>Photo Gallery</h1>
      <p>Snapshots of our church activities and events</p>
    </header>

    <div class="image-grid">
      <img src="/src/assets/gallery1.jpg" alt="Event 1" />
      <img src="/src/assets/gallery2.jpg" alt="Event 2" />
      <img src="/src/assets/gallery3.jpg" alt="Event 3" />
      <img src="/src/assets/gallery4.jpg" alt="Event 4" />
    </div>
  </section>
</template>

<style scoped>
.gallery {
  max-width: 1000px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.image-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
}
</style>
