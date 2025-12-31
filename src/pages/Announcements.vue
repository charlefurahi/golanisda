<template>
  <section class="announcements">
    <header class="page-header">
      <h1>Church Announcements</h1>
      <p>Stay informed about upcoming programs and church activities</p>
    </header>

    <div class="announcement-list">
      <article class="announcement">
        <h3>Youth Sabbath Program</h3>
        <span class="date">Saturday, 21 September 2025</span>
        <p>
          All members are invited to attend and support the youth-led Sabbath service.
        </p>
      </article>

      <article class="announcement">
        <h3>Week of Prayer</h3>
        <span class="date">Monday – Friday</span>
        <p>
          Join us every evening for spiritual revival and prayer sessions.
        </p>
      </article>

      <article class="announcement">
        <h3>Church Cleaning Exercise</h3>
        <span class="date">Sunday Morning</span>
        <p>
          Members are requested to participate in cleaning and maintaining church premises.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.announcements {
  max-width: 900px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.page-header h1 {
  color: #0b3d2e;
}

.page-header p {
  color: #555;
  margin-top: 0.5rem;
}

.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.announcement {
  background: #fff;
  padding: 1.5rem;
  border-left: 5px solid #0b3d2e;
}

.announcement h3 {
  margin-bottom: 0.3rem;
}

.date {
  font-size: 0.85rem;
  color: #777;
}
</style>
