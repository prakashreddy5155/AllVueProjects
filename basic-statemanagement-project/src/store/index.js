import { createStore } from "vuex";

export default createStore({

state: {
 counter: 2
},
mutations: {

    increaseCount(state)
    {
    state.counter++;
    },
    decreaseCount(state)
    {
    state.counter--;
    }

},
actions:{

},
getters:{

},
modules:{

}
})