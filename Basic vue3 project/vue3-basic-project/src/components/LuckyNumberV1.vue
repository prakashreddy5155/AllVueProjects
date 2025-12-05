<template>

    <h3> {{ propObject.name }}  Component</h3>
        Version: {{ propObject.version }}

    <div>
        <input type="number" v-model="maxLuckyNumber">
    </div>

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
import {ref,defineProps} from 'vue'
const luckyNumber = ref(0);

let maxLuckyNumber = ref(0);

const props = defineProps({
    propObject :{
        type:Object,
        required:false,
        default:{}
    }
})

function generateLuckyNumber()
{
    luckyNumber.value = Math.ceil(Math.random() * maxLuckyNumber.value)
}


</script>