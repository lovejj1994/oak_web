import Vue from 'vue'
import App from './App'
import store from './vuex-config'
import router from './router-config'
import resource from './vue-resource-config'

/* eslint-disable no-new */
new Vue({
  store,
  router,
  resource,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
