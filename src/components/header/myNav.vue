<template>
	<header id="myNav">
		<nav class="navbar navbar-static-top navbar-dark bg-inverse" v-bind:class="{ active: isActive, 'mynav': hasShow }">
			<img class="navbar-brand" src="~assets/img/oak_logo.png" style=""></img>
			<!--<a class="navbar-brand" href="#"></a>-->
			<ul class="nav navbar-nav">
				<li class="nav-item active">
					<router-link to="/" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
			</ul>
			<myNavRight></myNavRight>
		</nav>
	</header>
</template>

<script>
import myNavRight from './myNavRight'
import store from '../../vuex-config'
export default {
  name: 'myNav',
  store,
  components: {
    myNavRight
  },
  data () {
    return {
      isActive: true,
      hasShow: true
    }
  },
  computed: {
    // a computed getter
    hasShow: function () {
      // `this` points to the vm instance
      return this.$store.state.routerIsRun
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
		position: relative;
		line-height: 1rem;
	}
	
	nav {
		height: 2.80rem;
	}
	
	.mynav {
		background-color: transparent!important;
	}
	
	img {
		height: 3rem;
		margin-top: -0.65rem;
		margin-left: 7rem;
	}
	
	.navbar-nav .nav-link {
		padding-left: 0.725rem;
	}
</style>