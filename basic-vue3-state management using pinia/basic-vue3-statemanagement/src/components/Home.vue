<template>

  <div class="container"> 
    Score : {{ store.score }} <br>
    Max score: {{ store.maxScore }}
  </div>
  <div class="buttonsDiv">
    <button v-on:click="handleIncrease">
        Increase
    </button>
    <button @click="handleDecrease">
      Decrease
    </button>
    <button @click="handleRandom">
      Random 
    </button>
  </div>
  <div>
    
  </div>
</template>
<script setup>
import { gameStore } from '../store/useGameStore';

  const store = gameStore();
  function handleIncrease()
  {
    store.score = store.score + store.getIncreasedScore;
  }

  function handleDecrease()
  {
    store.score = store.score - store.getDecreasedScore;
  }
  function handleRandom()
  {
    Math.random() > 0.5 ? handleIncrease() : handleDecrease();
  }
</script>
<style>
  .container {
    text-align: center;
  }
  .buttonsDiv {
    margin-top: 10px;
    display:flex;
    justify-content: center;
    gap:10px;
  }

</style>