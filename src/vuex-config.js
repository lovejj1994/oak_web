import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routerIsRun: true
  },
  mutations: {
    routerIsRun (state, n) {
      state.routerIsRun = n
    }
  }
})

export default store
