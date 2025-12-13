import { defineStore } from "pinia";

export const gameStore = defineStore('game',{

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
});