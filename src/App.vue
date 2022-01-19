<template>
  <div id="app">
    <p @click="aa">打开对话框</p>
    <wy-dialog v-model="show"></wy-dialog>
    <wy-loading v-model="loading"></wy-loading>
    <wy-toast position="center"></wy-toast>
  </div>
</template>

<script>
// import WYdialog from "./packages/dialog/wy-dialog.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      show: false,
      loading: true
    };
  },
  methods: {
    aa() {
      this.$toast('sadasdsa')
    }
  }
};
</script>

<style>
@keyframes outRound {
  0% {
    transform: rotate(120deg)
  }
  100% {
    transform: rotate(-240deg)
  }
}
.loading{
  position: fixed;
  top: 30%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate3d(-50%,-50%,0);
  background-color: #fff;
  border-radius: 50%;
  z-index: 9999;

}
.out-round {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 8px auto;
  border: 2px solid red;
  border-left: 2px solid transparent;
  animation: outRound 1s linear infinite running;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #ccc;
  height: 100vh;
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
