<template>
	<main id="myMain">
		<myContainer></myContainer>
	</main>
</template>

<script>
import myContainer from './myContainer'
export default {
  name: 'myMain',
  components: {
    myContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	main {
		main {
			position: relative;
			background-color: #F7F7F7;
		}
	}
</style>