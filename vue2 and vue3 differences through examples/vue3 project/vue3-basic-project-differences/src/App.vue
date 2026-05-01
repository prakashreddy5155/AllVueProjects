<template>
 <div class="container">
    <div class="counter">
      Counter
      <h3> {{ count }}</h3>
    </div>

    <div>
       <ChildComponent @update-counter="handleCounter"></ChildComponent>
    </div>
 </div>

</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';
const count = ref(0);

  function handleCounter(event,anotherVal)
  {
    console.log(event);
    console.log(anotherVal);
    count.value++;
  }
</script>

<style scoped>
  .container 
  {
    height:300px;
    width:300px;
    border:1px solid black;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 
  {
    font-size:30px;
  }
</style>
