import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home/Home.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductsList from "@/components/Product/ProductsList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {path:"/",component:Home},
    {path:'/contact',component:Contact},
    {path:'/productsList',component:ProductsList},
    {path:'/product',component:ProductDetail},
    {path:'/product/:productId/:categoryId?',component:ProductDetail},
  ]
});

export default router;