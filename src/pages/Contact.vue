<template>
  <section class="page">
    <h1>Contact Us</h1>
    <p class="subtitle">Have a question? Send us a message and we'll get back to you.</p>
    
    <div class="contact-container">
      <div class="info">
        <p><strong>Email:</strong> info@golanisda.org</p>
        <p><strong>Address:</strong> Visit us at our local church branch.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <input v-model="formData.name" type="text" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <input v-model="formData.email" type="email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <input v-model="formData.subject" type="text" placeholder="Subject" required />
        </div>
        <div class="form-group">
          <textarea v-model="formData.message" placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>

        <p v-if="statusMsg" :class="statusType">{{ statusMsg }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const isSubmitting = ref(false)
const statusMsg = ref('')
const statusType = ref('')

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  statusMsg.value = ''
  
  try {
    // We point this to your Django Contact API
    await axios.post('http://127.0.0.1:8000/api/contact/', formData.value)
    
    statusMsg.value = "Message sent successfully! We'll be in touch."
    statusType.value = "success"
    
    // Clear form
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    statusMsg.value = "Oops! Something went wrong. Please try again."
    statusType.value = "error"
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.page {
  padding: 3rem 1rem;
  max-width: 800px;
  margin: auto;
}

.subtitle {
  margin-bottom: 2rem;
  color: #666;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
}

button {
  background: #0b3d2e;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:disabled {
  background: #ccc;
}

.success { color: green; margin-top: 1rem; }
.error { color: red; margin-top: 1rem; }

@media (max-width: 600px) {
  .contact-container { grid-template-columns: 1fr; }
}
</style>