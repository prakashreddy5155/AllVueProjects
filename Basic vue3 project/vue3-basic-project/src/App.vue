<template>

<div> {{ greet }}</div> <br>
<ContactUs></ContactUs> <br>
<ButtonCounter></ButtonCounter>
<ButtonCounter></ButtonCounter>
</template>
<script>
import ButtonCounter from './components/ButtonCounter.vue';
import ContactUs from './components/ContactUs.vue';

export default{
  components: { ButtonCounter,ContactUs },
    setup()
    {
        const greet = "Hello";
        return { greet};
    }
}
</script>