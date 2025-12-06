<template>
  <LuckyNumberParentComponent>
      <p>This is LuckyNumber Parent Component</p>
      <p>Yes This is cool</p>
      <template v-slot:slot1>
        <h6>
          This is slot 1
        </h6>
        <button> This is button</button>
      </template>
      <template v-slot:slot2>
        <h5>
          This is slot 2
        </h5>
        <button> Click me </button>
      </template>
  </LuckyNumberParentComponent>
</template>

<script setup>
import LuckyNumberParentComponent from './components/LuckyNumberParentComponent.vue';

</script>
<style>

</style>