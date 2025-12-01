<template>

<div> {{ greet }}</div> <br>
<ContactUs></ContactUs> <br>
<ButtonCounter></ButtonCounter>
<ButtonCounter></ButtonCounter>
</template>
<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import ContactUs from './components/ContactUs.vue';

    const greet = "Hello";
        </script>