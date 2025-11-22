import { createStore } from "vuex";

export default createStore({

    state:{
    counter: 10
    },
    mutations:{
        increaseCounter(state,increaseValue)
        {
            state.counter += increaseValue;
        },
        decreaseCounter(state,decreaseValue)
        {
            state.counter -= decreaseValue;
        }
    },
    actions:{

        async APICallAndNavigateToAppropriate({commit},decisionIncreaseOrDecrease)
        {

            const apiObject = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
            
            const result = await apiObject.json();
            console.log(result);
            if(decisionIncreaseOrDecrease.toLowerCase() === "increase")
            {
                commit('increaseCounter',result);
            }
            else {
                commit('decreaseCounter',result);
            }
        }
    },
    modules:{

    },
    getters:{

    }
})