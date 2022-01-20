<template>
<!-- <i class="iconfont" :class="`icon-${name}`"></i> -->
<svg class="svg-icon" aria-hidden="true" :style="{color:color,width:size,height:size}">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'WyIcon',
  props: {
    name:{
      type :String,
      required: true
    },
    color: {  // 字体颜色
      type: String,
      default: '#000'
    },
    size: {
      type: String,
      default: '20px'
    },
  },
  data() {
    return {};
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
