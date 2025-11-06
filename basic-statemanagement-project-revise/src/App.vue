<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="counter">
    {{ counter }}
  </div>

  <div class="buttons">

    <button @click="decreaseCounter()">-</button>
    <button @click="increaseCounter()">+</button>
    
  </div>
</template>

<script>
export default {
name: 'App',
data() 
{
  return {
    counter : 0 
  }
},
  methods: { 
    decreaseCounter()
    {
      this.counter--;
    },

    increaseCounter()
    {
      this.counter++;
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
  font-size:30px;
}
.buttons button 
{
  width:30px;
  height:30px;
  margin:5px;
}

</style>
