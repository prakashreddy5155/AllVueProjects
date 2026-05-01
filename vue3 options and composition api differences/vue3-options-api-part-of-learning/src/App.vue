<template>
  <h1>Options api</h1>
  <RouterView></RouterView>
  <Secret>

    <template v-slot:header>
      <h3>
        This is a header named slot 
      </h3>
      <p> Named slot should be sent like v-slot:name </p>

    </template>
    <p> Hi This is good</p>
    <h3>This is a default slot </h3>

    <template v-slot:footer>
      <h1>This is a footer named slot </h1>
      <p>Named slot should be sent like v-slot:name</p>
    </template>

    <template v-slot:formatStructuring="{ data}">
      <ul>
        <li v-for="singleItem in data">
          {{ singleItem }}
        </li>
      </ul>
    </template>
  </Secret>
</template>

<script >
import Secret from './components/Secret.vue';


  export default {
  data() {

    const user = { 
      name: 'om sai',age: 23,height:5.85
    };
    return {
      user
    }
  },
  components:{
    Secret
  },  
  computed: {

    
    

  },
  watch:{

  },  
  methods:{

  }
}
</script>
<style scoped></style>
