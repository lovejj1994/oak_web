<template>
	<header id="myNav">
		<nav class="navbar navbar-static-top navbar-dark bg-inverse" v-bind:class="{ active: isActive, 'mynav': hasShow }">
			<div id="subNav">
			<!--<img class="navbar-brand" src="../../../static/img/oak_logo.png" style=""></img>-->
			<img class="navbar-brand" src="https://p1.bqimg.com/577438/0c90b5ca84023bf0.png" style=""></img>
<!--<a class="navbar-brand" href="#"></a>-->
<ul class="nav navbar-nav">
	<li class="nav-item active">
		<router-link to="/" class="nav-link">Home</router-link>
	</li>
</ul>
<myNavRight></myNavRight>
</div>
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
		data() {
			return {
				isActive: true,
				hasShow: true
			}
		},
		computed: {
			hasShow: function () {
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
	#subNav{
		width: 90%;
		margin: 0 auto;
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
	}
	
	.navbar-nav .nav-link {
		padding-left: 0.725rem;
	}
</style>