import Vue from 'vue'
import App from './App'
import store from './vuex-config'
import router from './router-config'

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
