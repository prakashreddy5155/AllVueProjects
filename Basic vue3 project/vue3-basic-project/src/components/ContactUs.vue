<template>
 Hey, Hi Thanks for reaching out !
 Please contact on {{ email }}
</template>

<script>

import {ref} from "vue";

export default {
    setup()
    {
        let email = ref("notKnown@gmail.com");
        return{
            email
        }
    }
}
</script>