  <template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="cont">

      <div class="counter">
        {{counter}}
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
    data() 
    {
      return { 
        counter: 2
      }
    },
    methods: {

      increaseCount()
      {
        this.counter++;
      },
      decreaseCount()
      {
        this.counter--;
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
