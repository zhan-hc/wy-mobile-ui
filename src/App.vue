<template>
  <div id="app">
    <p @click="show = true">打开对话框</p>
    <wy-dialog v-model="show"></wy-dialog>
  </div>
</template>

<script>
// import WYdialog from "./packages/dialog/wy-dialog.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      show: false
    };
  },
  methods: {
    aa() {
      console.log(this.$slots,'slot')
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
