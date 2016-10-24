<template>
  <div id="myDemo">User{{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myDemo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
