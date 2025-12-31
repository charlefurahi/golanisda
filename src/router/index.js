import { createRouter, createWebHistory } from 'vue-router'

// Main Pages
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Ministries from '../pages/Ministries.vue'
import Sermons from '../pages/Sermons.vue'
import Events from '../pages/Events.vue'
import Contact from '../pages/Contact.vue'

// Sidebar / Additional Pages
import Announcements from '../pages/Announcements.vue'
import Donate from '../pages/Donate.vue'
import Projects from '../pages/Projects.vue'
import Leadership from '../pages/Leadership.vue'
import Gallery from '../pages/Gallery.vue'

const routes = [
  // Main Pages
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/ministries', name: 'Ministries', component: Ministries },
  { path: '/sermons', name: 'Sermons', component: Sermons },
  { path: '/events', name: 'Events', component: Events },
  { path: '/contact', name: 'Contact', component: Contact },

  // Sidebar / Additional Pages
  { path: '/announcements', name: 'Announcements', component: Announcements },
  { path: '/donate', name: 'Donate', component: Donate },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/leadership', name: 'Leadership', component: Leadership },
  { path: '/gallery', name: 'Gallery', component: Gallery },

  // Catch-all 404 (optional, recommended)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
