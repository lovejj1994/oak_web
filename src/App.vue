<template>
	<div id="app">
		<myNav></myNav>
		<myMain></myMain>
		<myFooter></myFooter>
	</div>
</template>

<script>
import myNav from './components/header/myNav'
import myMain from './components/main/myMain'
import myFooter from './components/footer/myFooter'
export default {
  name: 'app',
  components: {
    myNav,
    myMain,
    myFooter
  }
}
</script>

<style>
	#app {
		position: relative;
		padding-bottom: 4rem;
		min-height: 100%;
	}
	
	.fade-enter-active {
		transition: opacity 0.8s ease;
	}
	
	.fade-leave-active {
		transition: opacity .4s ease;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.child-view {
		position: absolute;
		transition: all 0.8s cubic-bezier(15, 0, .1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(30px, 0);
		transform: translate(30px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-30px, 0);
		transform: translate(-30px, 0);
	}
</style>