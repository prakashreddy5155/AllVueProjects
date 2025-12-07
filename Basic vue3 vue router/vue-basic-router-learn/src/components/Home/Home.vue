<template>
      Home Page
  <br>
      <button @click="navigateToContactPage">
            Navigate to Contact Page
      </button>

      <button @click="goToPreviousPage">
        Back
      </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useNavigateBack from '@/composibles/useNavigateBack';
const {goToPreviousPage} = useNavigateBack();

const router = useRouter();
  function navigateToContactPage()
  {
    router.push({name:'contact'});
    // router.push('/contactUs');
  }

  
</script>