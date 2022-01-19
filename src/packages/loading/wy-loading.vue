<template>
  <div v-if="value" class="wy-loading">
    <div class="wy-loading-round"></div>
  </div>
</template>

<script>
export default {
  name: 'WyLoading',
  props: {
    value:{
      type :Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
@keyframes outRound {
  0% {
    transform: rotate(120deg)
  }
  100% {
    transform: rotate(-240deg)
  }
}
.wy-loading{
  position: fixed;
  top: 30%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate3d(-50%,-50%,0);
  background-color: #fff;
  border-radius: 50%;
  &-round {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 8px auto;
    border: 2px solid red;
    border-left: 2px solid transparent;
    animation: outRound 1s linear infinite running;
  }
}
</style>
