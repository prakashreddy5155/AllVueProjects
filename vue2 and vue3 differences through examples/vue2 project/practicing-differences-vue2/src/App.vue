<template>
 <div class="container">
    <div class="counter">
      Counter
      <h3> {{ count }}</h3>
    </div>

    <div>
       <ChildComponent :count="count" @updateCounter="handleIncreaseCount"></ChildComponent>
    </div>
 </div>

</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
export default {
  name: 'App',
  components:{
    ChildComponent,
  },
  data(){
    return {
    count : 0,
    }
  },
  methods:{
    handleIncreaseCount()
    {
      // console.log(name);
      // console.log(anotherName);
      this.count++;
    }

  },
  watch:{
    count(newVal,oldVal){
      console.log("Watcher");
      console.log(newVal);
      console.log(oldVal);
    }
  }

  
}

</script>

<style>
.container 
  {
    height:300px;
    width:300px;
    border:1px solid black;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 
  {
    font-size:30px;
  }
</style>
