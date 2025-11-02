  <template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="cont">

      <div class="counter">
        {{$store.state.counter}}
      </div>

      <div class="buttons">

        <button @click="$store.commit('decreaseCount')">-</button>
        <button @click="$store.commit('increaseCount')">+</button>

      </div>
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
  .cont .counter 
  {
    font-size:60px;
  }

  .cont .buttons button 
  {
    height:50px;
    margin:2px;
    width:50px;
  }

  </style>
