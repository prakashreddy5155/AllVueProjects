import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Secret from '@/components/Secret.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {path:'/',name:'home',component:Home},
    {path: '/secret/:id?',name:'secret',component:Secret}
  ],
})

export default router
