<template>
  <div v-if="value" class="wy-dialog__wrapper">
    <div class="wy-dialog">
      <div class="wy-dialog__body">{{ message }}</div>
      <div v-if="!$slots.footer" class="wy-dialog__footer">
        <button @click="handleCancel">取消</button>
        <button @click="handleCancel">退出</button>
      </div>
       <slot v-else name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WyDialog',
  props: {
    value:{
      type :Boolean,
      default: false
    },
    message: {
      type: String,
      default: () => {
        return "我是对话框！";
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleCancel() {
      this.$emit('input',false)
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.wy-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  .wy-dialog {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    margin: 0 auto;
    width: 80%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    &__body {
      position: relative;
      margin-bottom: 30px;
      text-align: left;
      color: #808080;
    }
    &__footer {
      text-align: right;
      button {
        width: 50px;
        margin-right: 20px;
        border: none;
        background-color: #fff;
        color: red;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #ccc;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      // span:first-child {
      //   margin-right: 20px;
      // }
    }
  }
}
</style>
