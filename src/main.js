import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用vue-resource发送ajax请求
import VueResource from 'vue-resource'

import app from './app.vue'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/fonts.styl'
// 使用mockjs定义的模拟接口模块
import './mock/mockServer'

// 声明使用vue的扩展插件
Vue.use(VueRouter)
Vue.use(VueResource)

// 创建router对象
let router = new VueRouter()
// 映射路由
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})
// 启动路由
router.start(app, '#app')
// 请求默认路由
router.go('/goods')
