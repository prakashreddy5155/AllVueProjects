<template>
  <button
  @click="count++">
  Clicked {{ count }} times
  </button>
</template>

<script setup>

import {ref} from 'vue';
import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';

const count = ref(0);

onBeforeMount(() => 
{
  console.log("BeforeMount - ButtonCounter.vue");
});

onMounted(() => 
{
  console.log("onMounted - ButtonCounter.vue");
});

onBeforeUpdate(() => 
{
  console.log("onBeforeUpdate - ButtonCounter.vue");
});

onUpdated(() => 
{
  console.log("onUpdated - ButtonCounter.vue");
});

onBeforeUnmount(() => 
{
  console.log("onBeforeUnMount - ButtonCounter.vue");
});

onUnmounted(() => 
{
  console.log("onUnmounted - ButtonCounter.vue");
});

</script>