<template>
  <img alt="Vue logo" src="./assets/logo.png">



  <div class="displayCont">
    {{ this.$data.counter }}
  </div>

  <div class="buttonsCont">

    <button @click="decreaseCounter">
      -
    </button>
    <button @click="increaseCounter">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() 
  {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter()
    {
      this.$data.counter++;
    },
    decreaseCounter()
    {
      this.$data.counter--;
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.displayCont 
{
  font-size:40px;
}
.buttonsCont button 
{
  height:50px;
  width:50px;
  margin:5px;
}
</style>
