<template>

<div>

   Contact us at contact@gmail.com

</div>

<div>
  <button @click="goToPreviousPage"> Contact </button>
</div>
</template>

<script setup>
import useNavigateBack from '@/composibles/useNavigateBack';
const { goToPreviousPage }= useNavigateBack();
</script>