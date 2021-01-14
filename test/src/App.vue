<template>
  <div id="app">
    <img alt="Vue logo" src="./image/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log('test');
  },
}
</script>

<style lang="scss" scoped>
#app {
  text-align: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: block;
}
</style>
