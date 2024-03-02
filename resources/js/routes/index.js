import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/'},
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
  { 
    path: '/admin/login', 
    name: 'AdminLogin', 
    component: () => import("@/pages/Admin/Login.vue"),
  },
  { 
    path: '/admin', 
    component: () => import("@/pages/Admin/Index.vue"), 
    name: 'Admin', 
    redirect: { name: 'Users' },
    children: [
      {
        path: '/admin/dashboard',
        component: () => import("@/pages/Admin/Dashboard.vue"),
        name: 'Dashboard'
      },
      {
        path: '/admin/users',
        component: () => import("@/pages/Admin/Users/List.vue"),
        name: 'Users'
      },
    ]
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
