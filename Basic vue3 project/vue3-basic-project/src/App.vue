<template>


<div class="container">
  <component :is="renderComponentDynamically" :prop-object="renderPropsDynamically"></component>
</div>

</template>

<script setup>
import {ref,computed} from 'vue';
import LuckyNumber from './components/LuckyNumber.vue';
import LuckyNumberV1 from './components/LuckyNumberV1.vue';


const newVersion = ref(false);


const renderComponentDynamically = computed(()=>
{
  return newVersion.value ? LuckyNumberV1 : LuckyNumber;
});

const renderPropsDynamically = computed(()=> 
{
  return newVersion.value ?  {name : 'LuckyNumberV1',version:"V1"} : "LuckyNumber"
});

</script>