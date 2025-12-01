<template>

<button v-on:click="count++"> count is {{ count }} </button>

</template>
<script setup>
import {ref} from "vue";

    let count = ref(0);

</script>