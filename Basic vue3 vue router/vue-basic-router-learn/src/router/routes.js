import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home/Home.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductsList from "@/components/Product/ProductsList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import PageNotFound from "@/components/Layouts/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {path:"/",component:Home,name:'home'},
    {path:'/contactUs',component:Contact,name:'contact'},
    {path:'/contact',redirect:{name : 'contact'}},
    {path:'/productsList',component:ProductsList,name:'productList'},
    {path:'/product',component:ProductDetail,name:'product'},
    {path:'/product/:productId/:categoryId?',component:ProductDetail,name:'productWithProduct'},
    {path:'/:catchAll(.*)',component:PageNotFound} // catches all the other crawling to show the PageNotFound component
  ]
});
export default router; 