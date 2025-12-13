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