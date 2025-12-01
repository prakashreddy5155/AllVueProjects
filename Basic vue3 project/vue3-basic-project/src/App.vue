<template>

<div> {{ greet }}</div> <br>
<Contact name="om sai prakash" phone="111222333"></Contact>
</template>
<script setup>
import Contact from './components/Contact.vue';

    const greet = "Hello";
        </script>