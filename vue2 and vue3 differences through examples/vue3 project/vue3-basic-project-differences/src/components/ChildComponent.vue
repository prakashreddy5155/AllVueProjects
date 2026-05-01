<template>
  <button v-on:click="handleIncrease">
    Increase
  </button>
</template>
<script setup>

import { defineEmits } from 'vue';
const emit = defineEmits(['updateCounter'])
function handleIncrease()
{f
 emit('updateCounter',"prakash","reddy");
 console.log("triggered emit");
}
</script>