<script setup>
import { Counter } from '@/stores/counter'

const counter = Counter()

//counter.count++
// with autocompletion ✨
// counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
counter.decrement()
counter.name
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
  <button @click="counter.increment">Increment</button>
  <button @click="counter.decrement">Decrement</button>
  <p>hello {{counter.name}}</p>
</template>