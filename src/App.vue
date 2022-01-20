<template>
  <div id="app">
    <p @click="aa">打开对话框</p>
    <wy-dialog v-model="show"></wy-dialog>
    <!-- <wy-loading v-model="loading"></wy-loading> -->
    <!-- <wy-toast position="center"></wy-toast> -->
    <wy-icon name="fire"></wy-icon>
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
</style>
