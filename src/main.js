import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'
import router from '@/router/index.js'

Vue.use(Vant)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
