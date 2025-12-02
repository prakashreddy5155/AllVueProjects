<template>

  <div> {{ greet }}</div> <br>

  <input type="text" v-model="ownerName">
  <div class="rowsContainer">
    <div class="row" v-for="contact in contacts" :key="contact.name" >
      <Contact 
        :name="contact.name"
        :phone="contact.phone"
        :owner-name="contact.ownerName"
        :is-favourite="contact.isFavourite"
        @update-favourite="contact.isFavourite=!contact.isFavourite"
        >
      </Contact>
    </div>
  </div>
</template>

<script setup>
import Contact from './components/Contact.vue';
import {ref,reactive} from 'vue';

  const greet = "Hello";
  const ownerName= ref("Mr.Rebel");
  const contacts = reactive([
    {
      name:'om sai prakash',
      phone:70222,
      ownerName: ownerName,
      isFavourite:true
    },
    {
      name:'Hella',
      phone:8985,
      ownerName: ownerName,
      isFavourite:false
    },
    {
      name:'Kelly',
      phone:9908,
      ownerName: ownerName,
      isFavourite:false
    }
  ])
</script>