import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home/Home.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductsList from "@/components/Product/ProductsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/contact',component:Contact},
    {path:'/productList',component:ProductsList}
  ]
});

export default router;