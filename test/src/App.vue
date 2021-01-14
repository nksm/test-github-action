<template>
  <div id="app">
    <img alt="Vue logo" src="./image/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    console.log("test");
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: block;
  padding: 10px;
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2cc;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
