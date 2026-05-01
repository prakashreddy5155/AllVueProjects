<template> 
<div>
  secret
</div>
<div>
  <slot name="default">

  </slot>
  
</div>
<div>
  
</div>
<slot name="footer"></slot>

<slot name="dataPropSlot" :childComponentData="myData">

</slot>

{{ user }}
</template>
<script setup>
import { useRoute } from 'vue-router';
import { onMounted,reactive,inject } from 'vue';


const user = inject('userObject');
const myData = reactive(['Om ','Sai','Prakash','Reddy']);



onMounted(()=>{
  const route = useRoute();
 console.log("params are ",route.params);
 console.log("queryString is ",route.query);
})

</script>
<style>

</style>