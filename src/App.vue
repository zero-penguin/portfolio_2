<template>
  <div class="logo">
    <img alt="Vue logo" src="./assets/images/logo/logo_2.gif">
  </div>
  <HelloWorld></HelloWorld>

  <footer>
        <div class="container">
            <p>&copy; 2023 this portfolio. All rights reserved. Takaya Arakaki</p>
        </div>
    </footer>
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
.logo {
  transform: translateX(0%) translateY(0%);
}

footer {
    background-color: #f5f5f5;
    padding: 20px 0;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
}

.container p {
    font-size: 14px;
    color: #666;
}
</style>
