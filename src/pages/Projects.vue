<template>
  <section class="projects">
    <header class="page-header">
      <h1>Church Projects</h1>
      <p>Helping the community and growing the church</p>
    </header>

    <div class="project-list">
      <article class="project">
        <h3>New Youth Center</h3>
        <p>Building a modern youth center to engage and educate young members.</p>
      </article>

      <article class="project">
        <h3>Church Renovation</h3>
        <p>Renovating our main hall for a more comfortable worship experience.</p>
      </article>

      <article class="project">
        <h3>Community Outreach</h3>
        <p>Providing support, education, and food for the underprivileged.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  max-width: 900px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.project {
  background: #fff;
  padding: 1.5rem;
  border-left: 5px solid #0b3d2e;
}
</style>
