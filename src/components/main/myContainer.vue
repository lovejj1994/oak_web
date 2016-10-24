<template>
  <div id='myContainer' class="container">
    <router-view></router-view>
    <myWord></myWord>
  </div>
</template>

<script>
import myWord from './myWord'
export default {
  name: 'myContainer',
  components: {
    myWord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
