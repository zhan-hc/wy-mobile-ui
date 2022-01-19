import WyDialog from './packages/dialog/index.js';
import WyLoading from './packages/loading/index.js';
import WyToast from './packages/toast/index.js';

const components = [
  WyToast,
  WyDialog,
  WyLoading,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  WyToast,
  WyDialog,
  WyLoading
}
