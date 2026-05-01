<template> 
 <div>
  secret
  <slot name="header"></slot>
  <div>
    <slot></slot>
  </div>
  <slot name="footer"></slot>


  <slot name="formatStructuring" :data="arr">

  </slot>
 </div>
</template>
<script>
export default {

  data()
  {
    const arr = ['om','sai','prakash','reddy'];
    return {
      arr
    }
  },
  mounted()
  {
    console.log("Mounted");
    console.log(this.$route.params);
  }
}
</script>
<style>

</style>