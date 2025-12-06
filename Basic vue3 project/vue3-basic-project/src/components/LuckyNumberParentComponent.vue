<template>
  <h1>LuckyNumber Parent Component</h1>
  <div class="container">
    <div>
      <button v-on:click="newVersion=!newVersion">Toggle Button</button> <br>
      <button v-on:click="newVersion=false"> Switch to old version</button> <br>
      <button v-on:click="newVersion=true" >Switch to newer version</button>
    </div>
    <slot> </slot>
    <div class="container">
       <!-- This preserves only the component LuckyNumberV1 not LuckyNumber since those are the two components that are sent dynamically.-->
      <keep-alive include="LuckyNumberV1"> 
        <component :is="renderComponentDynamically" :prop-object="renderPropsDynamically"></component>
      </keep-alive>
    </div>

    <slot name="slot1"></slot>
    <hr>
    <slot name="slot2"></slot>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue';
import LuckyNumber from './LuckyNumber.vue';
import LuckyNumberV1 from './LuckyNumberV1.vue';


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

<style>
.container 
{
  text-align: center;
}

.container div button 
{
  margin:5px;
}
h1 
{
  color:red;
}
</style>