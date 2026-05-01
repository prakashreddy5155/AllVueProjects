<template>
<div class="mainContainer">
  <div class="container">
    <div class="inputDiv">
      <label for="todo-item"> <h2>Enter Your TODO</h2>
      <input type="text" id="todo-item" placeholder="Enter here" class="css-todoInput" v-model="todoData">
      </label> <br>
      <button class="css-addTodoBtn" @click="handleAddingTodoItem">
        Add TODO
      </button>
    </div>
     <div class="todo-items">
      <ul class="css-ul">
        <li v-for="todoItem in todoItemsArr">
          <TodoItem :todoData="todoItem"></TodoItem>
        </li>
      </ul>
     </div>
  </div>
</div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  data(){
    return {
      todoData: '',
      todoItemsArr: ['Enjoy Sleeping','Having good Food',]
    }
  },
  components:{
    TodoItem,
  },
  methods:{
    handleAddingTodoItem()
    {
      const data = this.todoData;
      
      this.todoItemsArr.push(data);
      this.todoData='';
    }
  }
}
</script>
<style>
.mainContainer {
  display:flex;
  justify-content: center;
}
.container 
{
  padding:5px;
  width:70%;
  height:auto;
  background-color: rgb(226, 226, 142);
}
.css-todoInput{
  min-height:60px;
  min-width:500px;
  border-radius: 6px;
  border:none;
  margin-top:5px;
  margin-left:10px;
    padding-left:30px;
    font-size:18px;
}
.inputDiv {
  text-align: center;
}
.css-addTodoBtn {
  height:50px;
  width:150px;
  color:white;
  background-color: red;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size:16px;
}

.css-ul{
  list-style-type: none;
}
</style>