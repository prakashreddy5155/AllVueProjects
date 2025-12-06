<template>

  <h2>{{ count }}</h2>
  <button
  @click="increment"> Increment
  </button>
    <button
  @click="decrement"> Decrement
  </button>

</template>

<script setup>

  import { useCounter } from './composibles/useCounter';

  const {count,increment,decrement} = useCounter(10,20);
</script>