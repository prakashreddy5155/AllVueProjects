# basic-vue3-statemanagement

### [personal-1.2] - remember pinia has only state, actions and getters and mutations, modules and all would not be present. in pinia it is part of vuex.
#### In pinia as well as vuex, getters are cached, means they will only be run if the underlying dependencies change, if the dependencies doesn't change then it returns the old cached data from getters. so that is why here in this case it returns the old data itself not the random value. 
#### dependencies here mean the variables inside the getters which are retrieved from the store's state. here maxAttack is a dependency, since it is a constant and never change so it sends the cached data itself to save loading.
#### but due to that we can't be able to achieve the randomness which we wanted. that can either be done by adding a new dependency which actually changes everytime, so score is something that gets changed since it runs for the first time and 2nd time it checks the score, since the score is updated then it recomputes it.  This getters are like computed properties. computed(())
#### Issue with the current code due to caching
```javascript
  state : ()=> ({
    score: 0,
    maxScore:100,
    maxAttack:30,
    maxDefence:10
  }),
  getters:{
    getIncreasedScore()
    {
      let attack =  Math.floor(Math.random() * this.maxAttack);
      console.log(attack);
      return attack;
    },
  }
```

#### if you have something like above code where if you see in the getters for getIncresedScore(), the first time it gets executed and caches the data and 2nd time when it checks 

### [personal-1.3] - To fix this issue we either have to add a dependency in computed property that changes everytime or its actually better to use actions, since actions are specifically designed that way which runs everytime.
#### currently I have changed to use 
```javascript

state : ()=> ({
    score: 0,
    maxScore:100,
    maxAttack:30,
    maxDefence:10
  }),
  getters:{
    getIncreasedScore()
    {
      let attack =  Math.floor(Math.random() * this.maxAttack);
      console.log(attack);
      attack = this.store + attack
      return attack;
    },
    getDecreasedScore()
    {
      let defence =  Math.floor(Math.random() * this.maxDefence);
      console.log(defence);
      defence = this.score - defence;
      return defence;
    }
  }

```

#### if you see here this has score which is another dependency variable which gets changed, so the computed property re-runs everytime. here dependency variable means state variable. 
####  lets see how is it working: 
#### when we use the state variable score for the first time computed property runs and caches the data. and from this getIncreasedScore() getter we return the data and in the application we are setting the data to the score 
```javascript 

  function handleIncrease()
  {
    store.score = store.getIncreasedScore;
  }

```
#### so it updates the score, the next time we click on that again, then the getter checks if the dependencies changed or not, yes, the score value is updated, and since the score value is updated so it re-computes that and works. but this is not recommended way since we are anyhow returning the data and we can actually mutate the state using actions itself. lets see that in next commit.

### [personal-1.4] - here I have changed that from getters to Actions, because In pinia actions can be able to mutate the store state data and thus helps us in reducing the extra code and the code works as expected.

#### firstly changed to method like syntax now using () for calling that since it requires.
```javascript

  const store = gameStore();
  function handleIncrease()
  {
    store.getIncreasedScore();
  }

  function handleDecrease()
  {
    store.getDecreasedScore();
  }
  function handleRandom()
  {
    Math.random() > 0.5 ? handleIncrease() : handleDecrease();
  }

```

#### and also removed store.score = because this can directly mutate the data in pinia. actions can directly mutate the data in pinia. in vuex, they can't we would have to dispatch an action and from action after doing asynchronous tasks we commmit a mutation and mutation changes the state. we can directly change in vue2 from action but vue throws warning.

#### Now action is updated to directly change the state's  score. 
```javascript

  actions:{
    getIncreasedScore()
    {
      let attack =  Math.floor(Math.random() * this.maxAttack);
      console.log(attack);
      this.score += attack
    },
    getDecreasedScore()
    {
      let defence =  Math.floor(Math.random() * this.maxDefence);
      console.log(defence);
      this.score -= defence;
    }
  }

```

### [personal-1.5] - Let us change the store's content which is now using options api styling to composition api styling.

```javascript
import { defineStore } from "pinia";

export const gameStore = defineStore('game',{

  state : ()=> ({
    score: 0,
    maxScore:100,
    maxAttack:30,
    maxDefence:10
  }),
  getters:{

  },
  actions:{
    getIncreasedScore()
    {
      let attack =  Math.floor(Math.random() * this.maxAttack);
      console.log(attack);
      this.score += attack
    },
    getDecreasedScore()
    {
      let defence =  Math.floor(Math.random() * this.maxDefence);
      console.log(defence);
      this.score -= defence;
    }
  }
});

```
#### This is options api styling, so we need to change that to composition api styling .

```javascript

import { defineStore } from "pinia";
import { computed,ref } from "vue";
export const gameStore = defineStore('game', ()=> {

    const score = ref(50);
    const maxScore = ref(100);
    const maxAttack = ref(30);
    const maxDefence = ref(10);


    const getMaxScore = computed(()=> maxScore.value);

    
    function getIncreasedScore()
    {
      let attack =  Math.floor(Math.random() * maxAttack.value);
      console.log(attack);
      score.value += attack
    }
    function getDecreasedScore()
    {
      let defence =  Math.floor(Math.random() * maxDefence.value);
      console.log(defence);
      score.value -= defence;
    }
    function resetScore()
    {
      score.value = 50;
    }

    return {
      // state
      score,
      maxScore,
      maxAttack,
      maxDefence,
      // computed
      getMaxScore,
      // methods
      getIncreasedScore,
      getDecreasedScore,
      resetScore
    }
  
});


```

#### This is how composition api styling looks like.