# vue-basic-router-learn

### [personal-1.0] - vue.js basic setup by adding vue router

### [personal-1.1] - created  different templates for routing purpose

### [personal-1.2] - created  routes using router and when we create the project using vite it asks whether we want router to be created right? so lets say we choosed yes then it creates index.js it looks like this itself except that it has import.meta.env.BASE_URL inside the createWebHistory()
```javascript 

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

```
#### inside the createWebHistory we would have like this 
```javascript 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URl),
  routes:[
    {},
    {}
  ]
})
```
#### that is necessary and you should add that.

### [personal-1.3] - created vue- router code by using the bootstrap navbar.
#### instead of anchor tag <a href=""> </a> in vue we need to use <router-link to=""> </router-link> 
#### inorder to display the content dynamically based on what route is choosen we have to write the router like this in the routes.js 

```javascript 

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
    {path:'/product/:productId',component:ProductDetail}
  ]
});

export default router;

```
#### if you see, here we have which components like Home, Contact, ProductsList and ProductDetail and same productDetails when we navigate to a different endpoint

#### later we have created the routes but inorder to naviagate to those routes we can navigate through the URL but usually users dont navigate that way right?, because all are not knowledgable enough to route to the correct pages and they dont even know which routes are present in our app, so we need to route to the specific application based on links, for links instead of <a href=""> </a> we use, <router-link to=""> </router-link> so that Is why in the navbar instead of anchor tags I have used <router-links> </router-links>