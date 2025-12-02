<template>
  <div class="container">
    <h3>Contact</h3>
    <p>Name is: {{ name }}</p>
    <p>Phone is: {{ phone }}</p>
    Hey, Hi Thanks for reaching out !
    Please contact on {{ email }}
    <p v-if="ownerName!==''">
        Owner name is {{ ownerName }}
    </p>
    <button v-bind:style="isFavourite? {'background-color':'red','color':'white'} : ''"
    v-on:click="toggleFavourite()">  
      {{ isFavourite? 'Remove From Favourites' : 'Add to Favourites' }}
    </button>
  </div>
</template>

<script setup>

import {ref} from "vue";

  let email = ref("notKnown@gmail.com");
  // validating the passedProps
  const props = defineProps({
    "name":{
      type:String,
      required:true,
    },
    "phone":{
      type:Number,
      required:true,
    },
    "ownerName":{
      type:String,
      required:false,
      default:'N/A'
    },
    "isFavourite":{
      type:Boolean,
      required:false
    }
  });

  const emit = defineEmits("update-favourite");
  function toggleFavourite()
  {
    emit("update-favourite");
  }
  
</script>

<style>
  .container
  {
    background-color:rgb(98, 98, 237);
  }
</style>