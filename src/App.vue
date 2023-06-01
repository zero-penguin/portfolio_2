<template>
  <img alt="Vue logo" src="./assets/images/logo/logo.gif">
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Anton, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(183, 128, 32);
}
h2 {
  color:rgb(248, 187, 56)
}
</style>
