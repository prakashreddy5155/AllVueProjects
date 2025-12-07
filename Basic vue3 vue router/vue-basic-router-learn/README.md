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

### [personal-1.8] - till before we were hardcoding but with this code we are not hardcoding the relative path of the project endpoint, we are using the object, lets say in the future if the endpoint changes then also we dont have to change anything because we are referring to the endpoint with the name property 

```javascript

<router-link class="nav-link" :to="{name:'contact'}">Contact</router-link> 
// using the name property to point to the contact endpoint.
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

 // The contact endpoint is /contact but in the future even if the endpoint changes to /contactUs then also we dont have to do change in all the places because we are referring to the endpoint with the name which is present in the route.

 // if the name changes then we need to change the name that we are using.
```

### [personal-1.9] - redirecting the user to the current working endpoint if the user uses the endpoint which the application was having before.
#### lets say our application has /contact endpoint before, and may be the user is used to entering that in the URL of his browser like domainName/contact but now lets say we have changed that to /contactUs so then if user uses /contact in the browser then it wont load and shows this warning in the browser main.js:7 [Vue Router warn]: No match found for location with path "/contact", now since we need to redirect the used to user to the new endpoint so we dont lose the customer, so we need to create one new route in the router {path:"/contact", redirect: { name : 'contact'}}  or we can use path:"/contact", redirect: { path : "/contactUs"}} like that.

### [NOTE:] - useRouter() and useRoute() are two different things in vue.js useRoute is used for retrieving the url parameters  but this useRouter() is used to programmatically push the user to another page based on his interaction with the web application.

### [personal-2.0] - showing the user the default Page Not Found when user navigates to a endpoint in the application which is not present.
####  inorder to show the user the default page when user navigates to a page that is not exists then we need to use a route { path: "/:catchAll(.*)",component: componentName}

### [personal-2.2] - moving the user to another page using useRouter() programmatically, through this we can programmatically move the user to another page when user clicks on a button.