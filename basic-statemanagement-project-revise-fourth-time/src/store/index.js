import { createStore } from "vuex";

export default createStore({

    state:{
    counter: 10
    },
    mutations:{
        increaseCounter(state)
        {
            state.counter++;
        },
        decreaseCounter(state)
        {
            state.counter--;
        }
    },
    actions:{

    },
    modules:{

    },
    getters:{

    }
})