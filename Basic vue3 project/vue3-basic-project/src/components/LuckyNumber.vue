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
import {ref} from 'vue'
const luckyNumber = ref(0);

const props = defineProps({

    maxLuckyNumber:{
        type:Number,
        required:false,
        default:10
    }
})

function generateLuckyNumber()
{
    luckyNumber.value = Math.ceil(Math.random() * props.maxLuckyNumber)
}
</script>