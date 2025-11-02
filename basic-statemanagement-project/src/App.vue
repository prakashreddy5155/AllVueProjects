  <template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="cont">

      <div class="counter">
        {{$store.state.counter}}
      </div>

      <div class="buttons">

        <button @click="decreaseCount">-</button>
        <button @click="increaseCount">+</button>

      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'App',
    methods: {

      increaseCount()
      {
        this.$store.state.counter++;
      },
      decreaseCount()
      {
        this.$store.state.counter--;
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
