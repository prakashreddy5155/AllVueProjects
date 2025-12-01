<template>

<h3>Contact</h3>
<p>Name is: {{ name }}</p>
<p>Phone is: {{ phone }}</p>
 Hey, Hi Thanks for reaching out !
 Please contact on {{ email }}
 
</template>

<script setup>

import {ref} from "vue";

    let email = ref("notKnown@gmail.com");
    const props = defineProps(["name","phone"]);
</script>