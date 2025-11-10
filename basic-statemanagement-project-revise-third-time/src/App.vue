<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <div class="counter">
    {{ $store.state.counter }}
  </div>

  <div class="buttons">
    <button  @click="$store.commit('decreaseCounter')">
      -
    </button>
    <button @click="$store.commit('increaseCounter')">
      +
    </button>
  </div>
 
</template>

<script>

export default {
  name: 'App',
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
