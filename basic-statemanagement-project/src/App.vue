  <template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="cont">

      <div class="counter" :style="{color:$store.state.colorCode}">
        {{$store.state.counter}}
      </div>

      <div>
        {{$store.state.counter}}
        <sup>2</sup> = {{$store.state.counter * $store.state.counter}}
      </div>

      <div class="buttons">

        <button @click="$store.dispatch('decreaseCount')">-</button>
        <button @click="$store.dispatch('increaseCount')">+</button>

      </div>

      <div class="input"> 
        <!-- <input type="text" placeholder="Enter color code:" v-model="$store.state.colorCode"> This v-model works but we should not do like that -->
         <input type="text" placeholder="Enter color code:" v-model="colorChange"  >
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'App',
    computed: {

      colorChange: {
        get() {
          return this.$store.state.colorCode;
        },
        set(newValue) {
          console.log(newValue);
          this.$store.dispatch('colorChange',newValue);
        }
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
