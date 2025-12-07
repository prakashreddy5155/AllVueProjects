<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'contact'}">Contact</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" :to="{name:'product'}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" :to="{name:'productList'}">Product List</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" :to="{name:'product'}">Product Detail</router-link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search" v-on:submit.prevent="handleForm()">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="inputData" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>
<script setup>
import {ref} from 'vue';

const inputData = ref('');
function handleForm()
{
  console.log(inputData.value);
}
</script>