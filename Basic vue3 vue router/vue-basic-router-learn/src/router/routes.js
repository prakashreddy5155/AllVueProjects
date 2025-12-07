import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home/Home.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductsList from "@/components/Product/ProductsList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import PageNotFound from "@/components/Layouts/PageNotFound.vue";
import Login from "@/components/Authentication/Login.vue";

function checkBeforeNavigatingToProductsList(to,from)
{
  console.log(to);
  console.log(from);
  if(to.name === 'productsList')
  {
    return {name : 'login'}
  }
  return true;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {path:"/",component:Home,name:'home'},
    {path:'/contactUs',component:Contact,name:'contact'},
    {path:'/contact',redirect:{name : 'contact'}},
    {path:'/productsList',component:ProductsList,name:'productsList',beforeEnter: (to,from) => {return checkBeforeNavigatingToProductsList(to,from) }},
    {path:'/product',component:ProductDetail,name:'product'},
    {path:'/product/:productId/:categoryId?',component:ProductDetail,name:'productWithProduct'},
    {path:'/login',component:Login, name:'login'},
    {path:'/:catchAll(.*)',component:PageNotFound} // catches all the other crawling to show the PageNotFound component
    
  ]
});

// router.beforeEach((to,from)=> {

//   // to provides where the user is trying to navigate and from provides from where the user is coming from, that means from which component or endpoint.

//   let isAuthenticated = false;
//   // if(!isAuthenticated && to. )
//   console.log(to);
//   console.log(from);

//   if(!isAuthenticated && to.name != 'login')
//   {
//     return { name : 'login'};
//   }
//   return true; // if this is false then it wont let you navigate to other page even if authentication is also successful.
// })
export default router; 