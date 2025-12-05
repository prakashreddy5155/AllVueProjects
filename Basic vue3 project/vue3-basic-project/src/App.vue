<template>


  <div> {{ greet }}</div> <br>

  <div>
    <span>Enter the data in the input to generate the lucky Number till that range</span>
    <br>
    <input type="number" v-model.number="maxLuckyNumber" > 
  </div>
  <br>

    <AddComponent 
      :handleAddComponent="handleAddComponent"
    > </AddComponent>

  <input type="text" v-model="ownerName">
  <div class="rowsContainer">
    <div class="row" v-for="contact in contacts" :key="contact.name" >
      <Contact 
        :name="contact.name"
        :phone="contact.phone"
        :owner-name="contact.ownerName"
        :is-favourite="contact.isFavourite"
        @update-favourite="contact.isFavourite=updateFavourite($event,contact.phone)"
        >
      </Contact>
    </div>
  </div>
</template>

<script setup>
import AddComponent from './components/AddComponent.vue';
import Contact from './components/Contact.vue';
import {ref,reactive,provide} from 'vue';

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
  ]);
  let maxLuckyNumber = ref(0);
  provide('maxLuckyNumber',maxLuckyNumber);
  function updateFavourite(paramFromChildObject,phoneFromParent)
  {
    console.log(paramFromChildObject);
    return !paramFromChildObject.favourite;
  }
  function handleAddComponent(dataFromParent)
  {
    contacts.push(dataFromParent);
  }
</script>