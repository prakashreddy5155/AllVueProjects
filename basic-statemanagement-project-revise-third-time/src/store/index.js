import {createStore} from 'vuex';

export default createStore({

    state: {
        counter: 0
    },
    mutations:{

      increaseCounter(state,randomVal)
      {
        state.counter += randomVal;
      },
      decreaseCounter(state,randomVal)
      {
        state.counter -= randomVal;
      }
    },
    actions:{


      async makeAnAPICallToRetrieveRandomNumber() 
      {

        try 
        {
        const randomNumberObj = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');

        const randomNum = await randomNumberObj.json();

        return Number(randomNum);
        }
        catch(e) {
          console.log("Something went wrong while generating random Number!");
        }
      },

      async generateRandomNumber({commit,dispatch},increaseOrDecrease)
      {
        const randomNum  = await dispatch('makeAnAPICallToRetrieveRandomNumber');
        if(increaseOrDecrease.toLowerCase() === "increase")
        {
          commit('increaseCounter',randomNum);
        }
        else 
        {
          commit('decreaseCounter',randomNum);
        }
      }

    },
    getters:{

    },
    modules:{

    }
})