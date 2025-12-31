<template>
  <section class="donate">
    <header class="page-header">
      <h1>Support Golani SDA Church</h1>
      <p>Your contribution helps us grow spiritually and physically</p>
    </header>

    <div class="donate-methods">
      <div class="method">
        <h3>Mobile Money (M-Pesa)</h3>
        <p>Paybill: 123456<br />Account: Golani SDA Church</p>
      </div>

      <div class="method">
        <h3>Bank Transfer</h3>
        <p>Bank: National Bank<br />Account: 123-456-7890<br />SWIFT: NBNBTZTX</p>
      </div>

      <div class="method">
        <h3>In-person</h3>
        <p>You may also donate physically during church services</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate {
  max-width: 900px;
  margin: auto;
  padding: 3rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  color: #0b3d2e;
}

.page-header p {
  color: #555;
  margin-top: 0.5rem;
}

.donate-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method {
  background: #f9f9f9;
  padding: 1.5rem;
  border-left: 5px solid #0b3d2e;
  text-align: center;
}

.method h3 {
  margin-bottom: 0.5rem;
}
</style>
