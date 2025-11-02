import { createStore } from "vuex";

export default createStore({

state: {
 counter: 2,
 colorCode:'red'
},
mutations: {
    increaseCount(state,randomVal)
    {
    state.counter += randomVal;
    },
    decreaseCount(state,randomVal)
    {
    state.counter -= randomVal;
    },
    colorChange(state,newValue)
    {
        state.colorCode = newValue;
    }

},
actions:{

    // making an api call to retrieve a random number and add and substract that Random Number to the current counter.

    async increaseCount({commit})
    {
        const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
        const randomVal = await response.json();
        commit('increaseCount',randomVal);
    },

    async decreaseCount({commit})
    {
        const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
        const randomVal = await response.json();
        commit('decreaseCount',randomVal);
    },
    colorChange({commit},newValue)
    {
        commit('colorChange',newValue);
    }

},
getters:{

},
modules:{

}
})