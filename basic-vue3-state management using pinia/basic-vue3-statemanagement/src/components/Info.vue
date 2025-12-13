<template>
  Welcome to the Game, This game can randomly increase the value and randomly decrease the value and the max health is {{ store.getMaxScore }}. if the store increases than the maxScore then you win, if decreases less than 0 then you lost.

  <div>
    <input type="number" v-model.number="store.maxScore">
  </div>
</template>

<script setup>

import { gameStore } from '@/store/useGameStore';

const store = gameStore();

</script>