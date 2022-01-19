import Vue from 'vue'
import App from './App.vue'
import WyUI from './index.js'
Vue.use(WyUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
