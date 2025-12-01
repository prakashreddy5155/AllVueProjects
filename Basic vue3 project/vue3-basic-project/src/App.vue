<template>
  <div> {{ greet }}</div> <br>
  <Contact name="om sai prakash" :phone="111222333" v-bind:ownerName="ownerName"></Contact>
</template>

<script setup>
import Contact from './components/Contact.vue';

  const greet = "Hello";
  const ownerName= "Mr.Rebel";

</script>