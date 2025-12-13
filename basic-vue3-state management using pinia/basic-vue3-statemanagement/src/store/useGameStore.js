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