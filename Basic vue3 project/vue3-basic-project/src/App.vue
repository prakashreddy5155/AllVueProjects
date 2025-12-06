<template>
  <h1>
    App.vue Component
  </h1>

    <div class="counterContainer">

      <h4>  {{ counter }} </h4>
      <button @click="increment"> Increment by 10 Each</button>
      <button @click="decrement"> Decrement by 10 Each </button>

    </div>

  <h2> Button Counter Component</h2>
  <ButtonCounter> </ButtonCounter>

   
</template>

<script setup>
import {ref} from 'vue';
import ButtonCounter from './components/ButtonCounter.vue';


const counter  = ref(0);

const increment = () => {
  counter.value += 10;
}

const decrement = () => {
  counter.value-= 10;
}

</script>
<style>

</style>