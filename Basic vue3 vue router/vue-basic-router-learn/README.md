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