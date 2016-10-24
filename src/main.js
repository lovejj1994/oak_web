import Vue from 'vue'
import App from './App'
// import UserDemo from 'src/components/main/myDemo'
// import UserDemo1 from 'src/components/main/myDemo.1'
import VueRouter from 'vue-router'

/***
 * 路由配置
 */
Vue.use(VueRouter)
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const User = { template: '<div>User</div>' }

const routes = [
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar },
  // {
  //   name: 'routeruser',
  //   path: '/user/:id',
  //   component: UserDemo,
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: 'haha',
  //       component: UserDemo1,
  //       meta: { requiresAuth: true }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
