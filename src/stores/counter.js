// stores/counter.js
import { defineStore } from 'pinia'

export const Counter = defineStore('counter', {
  state: () => {
    return { 
      count: 0 ,
      name: "3bdel7med",
      age:'30',
      islogin:false 

    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
})