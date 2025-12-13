import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Info from '@/components/Info.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',name:'home',component:Home
     },
     {
      path:'/info',name:'info',component: Info
     }
  ],
})

export default router

