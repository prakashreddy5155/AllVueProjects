import Vue from 'vue'
import VueRouter from 'vue-router'
import TODO from '@/components/TODO.vue'
import Info from '@/components/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: TODO
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
