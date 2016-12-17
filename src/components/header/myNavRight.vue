<template>
	<ul class="nav navbar-nav" v-if="!loginSuccess">
		<li class="nav-item">
			<router-link to="/login" class="nav-link">SIGN IN</router-link>
		</li>
		<li class="nav-item">
			<router-link to="/join" class="nav-link" href="#">JOIN</a>
		</li>
	</ul>
</template>

<script>
import store from '../../vuex-config'
export default {
  name: 'myNavRight',
  store,
  data () {
    return {
			loginSuccess:store.state.loginSuccess,
      msg: 'Welcome to Your Vue.js App'
    }
  },
	computed: {
    loginSuccess: function () {
      return store.state.loginSuccess
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul {
		float: right;
	}
	
	.navbar-nav .nav-link {
		padding-left: 0.725rem;
	}
</style>