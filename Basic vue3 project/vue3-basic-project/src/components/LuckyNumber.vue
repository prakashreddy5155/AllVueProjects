<template>
    <button
    v-on:click="generateLuckyNumber()"
    >
    <span v-if="luckyNumber===0">
        Generate Lucky Number from <br>
        1 - {{ maxLuckyNumber }}    
    </span>

    <span v-else>
        Lucky Number: {{ luckyNumber  }} <br>
        Click to Generate New Lucky Number
    </span>

    </button>
</template>

<script setup>
import {ref,inject} from 'vue'
const luckyNumber = ref(0);

const maxLuckyNumber = inject('maxLuckyNumber');

function generateLuckyNumber()
{
    luckyNumber.value = Math.ceil(Math.random() * maxLuckyNumber.value)
}

</script>