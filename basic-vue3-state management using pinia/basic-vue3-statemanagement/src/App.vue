<template>
<div class="nav">
  <div class="nav-item">
    <router-link :to="{name:'home'}" class="link">
      Home
    </router-link>
  </div>

  <div class="nav-item">
    <router-link :to="{name:'info'}" class="link">
      Info
    </router-link>
  </div>
</div>
<router-view></router-view>
</template>

<script setup></script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .nav { 
    width:100%;
    background-color:black;
    display:flex;
    height:100px;
    align-items: center;
    gap:20px;
  }

.nav-item {
  border-radius: 5px;
  background-color:red;
  height:25px;
  color:white;

}
.link {
  text-decoration: none;
  color:white;
  padding:5px 15px 5px 15px;
  
}
</style>
