import Vue from 'vue'
import VueRouter from 'vue-router'

import myHome from 'components/main/myHome'
import myLogin from 'components/main/myLogin'

import store from './vuex-config'
/***
 * 路由配置
 */
Vue.use(VueRouter)
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const User = { template: '<div>User</div>' }

const routes = [
  { path: '/login', component: myLogin },
  { path: '/', component: myHome }
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

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/') {
    store.commit('routerIsRun', false)
  } else {
    store.commit('routerIsRun', true)
  }
  next()
})

export default router
