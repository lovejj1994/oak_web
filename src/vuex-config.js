import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginSuccess: false,
    routerIsRun: true,
    token: '',
    successMsg: {
      msg: '',
      display: false
    }
  },
  mutations: {
    loginSuccess(state, n) {
      state.loginSuccess = n
    },
    routerIsRun(state, n) {
      state.routerIsRun = n
    },
    tokenIsChange(state, n) {
      state.token = n
    },
    successMsgIsChange(state, data) {
      state.successMsg.msg = data.msg,
      state.successMsg.display = data.flag
    }
  }
})

export default store
