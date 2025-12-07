<template>

  <ul>
    <li v-for="product in products">
      <router-link :to="{name:'productWithProduct',params:{productId:product.id,categoryId:19}}"> {{  product.name }} </router-link>
    </li>
  </ul>

</template>

<script setup>
import {reactive} from 'vue';

const products = reactive([
  {id:1,name:"product1"},
  {id:2,name:"product2"},
  {id:3,name:"product3"}
])
</script>