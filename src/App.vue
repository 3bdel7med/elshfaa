<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div id="app"> <!-- Added id here for styles -->
    <NavBar />
    <RouterView />
    <FooterBar />
  </div>
</template>

<style scoped>
#app {
  width: 100vw; /* Full viewport width */
  min-height: 100vh; /* Ensures the app takes full vertical space */
  display: flex;
  flex-direction: column; /* Stacks content vertically */
}

/* Optional: Style for NavBar and Footer */
footer {
  margin-top: auto; /* Pushes footer to the bottom */
}
</style>