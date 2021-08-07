import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMusic from '@/views/MyMusic'

Vue.use(VueRouter);

export default new VueRouter ( {
  routes: [
    {
      name: '首页 ',
      path: '/',
      component: MyMusic,
    }
  ]
})