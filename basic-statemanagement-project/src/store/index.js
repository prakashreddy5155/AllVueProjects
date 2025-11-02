import { createStore } from "vuex";

export default createStore({

state: {
 counter: 2,
 colorCode:'red'
},
mutations: {

    increaseCount(state)
    {
    state.counter++;
    },
    decreaseCount(state)
    {
    state.counter--;
    },
    colorChangeMutation(state,newValue)
    {
        state.colorCode = newValue;
    }

},
actions:{

},
getters:{

},
modules:{

}
})