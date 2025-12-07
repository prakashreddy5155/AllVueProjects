<template>

  <h3>
    Product Detail
  </h3>
  <div> 
    
    <span v-if="router.params.productId">
      productId : {{ router.params.productId  }}
    </span>
    <span v-else>
      Product Id Not found
    </span>
    <span v-if="router.params.categoryId">
      categoryId : {{ router.params.categoryId }}
    </span>

  </div>

</template>

<script setup>

import { useRoute } from 'vue-router';

const router = useRoute();
console.log(router.params)
</script>