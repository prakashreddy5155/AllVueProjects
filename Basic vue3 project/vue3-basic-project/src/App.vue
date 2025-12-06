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

import ButtonCounter from './components/ButtonCounter.vue';

import { useCounter } from './components/composibles/useCounter';

const {count:counter,increment,decrement} = useCounter(0,10);

</script>
<style>

</style>