<template>

<button v-on:click="count++"> count is {{ count }} </button>

</template>
<script>
import {ref} from "vue";
export default {
    setup()
    {
        let count = ref(0);
        return {
            count
        }
    }
}
</script>