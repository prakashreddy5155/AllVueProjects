<template>
  <h1>
    App.vue
  </h1>
  <ButtonCounter> </ButtonCounter>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';


onBeforeMount(() => 
{
  console.log("BeforeMount - App.vue");
});

onMounted(() => 
{
  console.log("onMounted - App.vue");
});

onBeforeUpdate(() => 
{
  console.log("onBeforeUpdate - App.vue");
});

onUpdated(() => 
{
  console.log("onUpdated - App.vue");
});

onBeforeUnmount(() => 
{
  console.log("onBeforeUnMount - App.vue");
});

onUnmounted(() => 
{
  console.log("onUnmounted - App.vue");
});


</script>
<style>

</style>