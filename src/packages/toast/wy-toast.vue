<template>
  <div v-show="show" :style="{background,color,'top': positionMap[position]}" class="wy-toast">toast提示</div>
</template>

<script>
export default {
  name: 'WyToast',
  props: {
    background: {
      type: String,
      default: () => {
        return "rgba(0,0,0,0.3)";
      }
    },
    color: {
      type: String,
      default: () => {
        return "#fff";
      }
    },
    message: {
      type: String,
      default: () => {
        return "toast提示";
      }
    },
    duration: {
      type: Number,
      default: () => {
        return 3000;
      }
    },
    position: {
      type: String,
      default: () => {
        return 'top';
      }
    },
  },
  data() {
    return {
      show: true,
      positionMap: {
        top: '30%',
        center: '50%',
        bottom: '80%'
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false
    },this.duration)
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.wy-toast{
  position: fixed;
  // top: 80%;
  left: 50%;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
  transform: translate3d(-50%,-50%,0);
  // color: #fff;
  // background-color: rgba(0,0,0,0.3);
}
</style>
