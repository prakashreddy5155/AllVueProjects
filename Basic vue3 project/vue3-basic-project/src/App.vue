<template>

<div> {{ greet }}</div> <br>
<contact-us>  </contact-us> <br>
<button-counter></button-counter>
<button-counter></button-counter>
</template>
<script>
import ButtonCounter from './components/ButtonCounter.vue';

export default{
  components: { ButtonCounter },
    setup()
    {
        const greet = "Hello";
        return { greet};
    }
}
</script>