<template>
  <main id="myMain">
    <myJumbotron></myJumbotron>
    <myContainer></myContainer>
  </main>
</template>

<script>
import myJumbotron from './myJumbotron'
import myContainer from './myContainer'
export default {
  name: 'myMain',
  components: {
    myJumbotron,
    myContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
