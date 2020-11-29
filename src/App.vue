<template>
  <div id="app">
    <form-test />
  </div>
</template>

<script>
import formTest from "./form";
export default {
  name: "App",
  components: {
    formTest,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
