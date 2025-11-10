<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <div class="counter">
    {{ $store.state.counter }}
  </div>

  <div class="buttons">
    <button  @click="decreaseCounter">
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
  methods: {
    increaseCounter() 
    {
      this.$store.dispatch('generateRandomNumber',"INCREASE");
    },
    decreaseCounter() 
    {
      this.$store.dispatch('generateRandomNumber',"DECREASE");
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
.counter 
{
  font-size:40px;
}

.buttons button 
{
  height:40px;
  width:40px;
  margin:5px;
  font-size: large;
}
</style>
