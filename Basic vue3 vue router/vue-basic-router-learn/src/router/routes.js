import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home/Home.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductsList from "@/components/Product/ProductsList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {path:"/",component:Home,name:'home'},
    {path:'/contact',component:Contact,name:'contact'},
    {path:'/productsList',component:ProductsList,name:'productList'},
    {path:'/product',component:ProductDetail,name:'product'},
    {path:'/product/:productId/:categoryId?',component:ProductDetail,name:'productWithProduct'},
  ]
});

export default router;