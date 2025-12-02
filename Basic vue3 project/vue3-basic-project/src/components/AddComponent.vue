<template>

<form v-on:submit.prevent="handleForm()">
    <div class="container">

        <span> Name</span>
        <input type="text" v-model.trim="contact.name">
        <br>
        <span> phone</span>
        <input type="text" v-model.number="contact.phone">
        <br>
        <span> ownerName</span>
        <input type="text" v-model.trim="contact.ownerName">
        <br>
        <span>Make Favourite</span>
        <input type="checkbox" v-model="contact.isFavourite">
    </div>
        <button>
            Submit
        </button>
</form>


</template>

<script setup>

import {reactive} from 'vue';


const contact = reactive({
    name:'',
    phone:'',
    ownerName:'',
    isFavourite:''
});

const emit = defineEmits(['add-component-trigger']);

function clearContents()
{
    contact.name='',
    contact.phone='',
    contact.ownerName='',
    contact.isFavourite=''
}
function handleForm()
{
    emit('add-component-trigger',{
        name:contact.name,
        phone:contact.phone,
        ownerName:contact.ownerName,
        isFavourite:contact.isFavourite
    });
    clearContents();
}

</script>