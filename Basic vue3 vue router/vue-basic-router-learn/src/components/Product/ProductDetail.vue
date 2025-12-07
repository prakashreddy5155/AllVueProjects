<template>


  <div> 

    <span v-if="router.params.productId">
      productId : {{ router.params.productId  }}
    </span>
    <span v-else>
      Product Id Not found
    </span>

  </div>

</template>

<script setup>

import { useRoute } from 'vue-router';

const router = useRoute();
console.log(router.params)
</script>