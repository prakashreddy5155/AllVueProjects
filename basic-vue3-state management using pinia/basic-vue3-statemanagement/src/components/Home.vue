<template>
<h1 style="text-align: center;">
  GameOPedia
</h1>
<h3 style="text-align: center;color: green;" v-if="store.score > store.getMaxScore">
  You Win
</h3>
<div class="container" v-if="store.score < store.getMaxScore && store.score > 0">
    <div  > 
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
  </div>
  <div v-else style="text-align: center;">
    <button @click="resetScore()">Reset</button>
  </div>
<h3 v-if="store.score < 0" style="color:red;text-align: center;" >
  You Lost
</h3>
</template>
<script setup>
import { gameStore } from '../store/useGameStore';

  const store = gameStore();
  function handleIncrease()
  {
    store.getIncreasedScore();
  }

  function handleDecrease()
  {
    store.getDecreasedScore();
  }
  function handleRandom()
  {
    Math.random() > 0.5 ? handleIncrease() : handleDecrease();
  }
  function resetScore()
  {
    store.resetScore();
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