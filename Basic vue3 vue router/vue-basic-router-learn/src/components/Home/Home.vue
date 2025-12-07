<template>
      Home Page
  <br>
      <button @click="navigateToContactPage">
            Navigate to Contact Page
      </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
  function navigateToContactPage()
  {
    router.push({name:'contact'});
    // router.push('/contactUs');
  }
</script>