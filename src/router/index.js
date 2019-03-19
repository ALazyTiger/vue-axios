import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)//主页
Vue.use(Router)

export default new Router({
  mode: 'history',//（使用history模式）
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
