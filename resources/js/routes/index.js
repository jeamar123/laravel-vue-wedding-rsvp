import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: 'Landingpage',
    component: () => import("@/pages/Landingpage.vue")
  },
  { 
    path: '/rsvp', 
    name: 'Rsvp',
    component: () => import("@/pages/Rsvp.vue") 
  },
  { 
    path: '/faqs', 
    name: 'Faqs', 
    component: () => import("@/pages/Faqs.vue") 
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
