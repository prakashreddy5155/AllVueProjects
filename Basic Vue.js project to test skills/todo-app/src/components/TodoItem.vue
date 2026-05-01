<template>
    <div class="css-todo-display-box">
      <div class="css-todo-display">
      <input type="checkbox" class="css-todo-display-box-checkbox" v-model="isChecked">
      </div>
      <div class="css-todo-display css-todo-output-box" :class="[isChecked?'slashedText':'',!isChecked?'doItBold':'']">
        
          {{ todoData }}
        
      </div>
    </div>
  </template>
<script>
export default {

  props:{
    todoData:{
      type:String,
      required:true
    }
  },
  data()
  {
    return {
      isChecked:false
    }
  },
}
</script> 
<style>
  .css-todo-display-box {
    display:flex;
    gap:20px;
    min-height:60px;
    width:800px;
    background-color: #00c1ff;
    padding:5px;
    /* text-align: center; */
    align-content: center;
    padding-left: 15px;
    font-size:16px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 5px;
    margin-bottom:3px;
    /* max-height: fit-content; */
    /* max-height:fit-content; */
  }

  input[type="checkbox"]  {
    height:15px;
    width:30px;
  }

  .css-todo-display {
    align-content: center;
    display:inline-block;
    width:fit-content;
  }
  .css-todo-output-box {
    min-height:40px;
    background-color:aliceblue;
    border-radius: 10px;
    padding: 15px 10px;
    height:auto;
    width:inherit;
    font-size:20px;

  }
.slashedText {
  text-decoration: line-through;
}
.doItBold {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>