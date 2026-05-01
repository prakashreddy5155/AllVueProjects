<template>
<nav>
  <ul>
    <li>
      <RouterLink to="/secret"> Secret</RouterLink>
      <RouterLink to="/"> Home</RouterLink>
    </li>
  </ul>
</nav>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
  onMounted(()=>{
    const route = useRoute();
    console.log(route.params);
  });
</script>
<style>

</style>