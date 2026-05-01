<template>
 <button v-on:click="handleIncrease">
    Increase
  </button>
</template>
<script>
  export default {
    name : 'ChildComponent',
    props:{
      count: {
        type:Number,
        required:true
      }
    }, 
    mounted:{
      
    },
    methods:{
      handleIncrease()
      {
        this.$emit('updateCounter',"prakash","reddy");
        console.log("Emmitted");
      }
    }
  }

  
</script>

<style>

</style>