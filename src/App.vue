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
</style>
