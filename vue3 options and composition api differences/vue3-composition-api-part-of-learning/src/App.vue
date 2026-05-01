<template>
  <h1>Composition api</h1>
  <!-- <RouterView></RouterView> -->

  <Secret>

    <template #default>
      <h3>
        Unnamed Slot
      </h3>
      <p>
        This is a unnamed slot or default slot
      </p>
    </template>

    <template #footer>
      <div>
        <h1>Footer Named Slot</h1>
        <p>Named Slot</p>
      </div>
    </template>

    <template v-slot:dataPropSlot="{childComponentData}">
      <ul>
        <li v-for="childData in childComponentData">
          {{ childData }}
        </li>
      </ul>
    </template>
  </Secret>
<div>

</div>



</template>
<script setup>
import Secret from './components/Secret.vue';
import { provide,reactive } from 'vue';

const user = reactive({name:'om sai ',age : 23, height: 5.85});

provide('userObject',user)

</script>

<style scoped>

</style>
