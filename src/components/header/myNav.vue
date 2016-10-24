<template>
  <header id="myNav">
    <nav class="navbar navbar-static-top navbar-dark bg-inverse">
      <img class="navbar-brand" src="~assets/img/oak_logo.png" style=""></img>
      <!--<a class="navbar-brand" href="#"></a>-->
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <router-link :to="{ name: 'routeruser',params: { id: 123 } }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'myNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
    background-color: transparent!important;
  }
  img{
    height: 3rem;
    margin-top:-0.325rem;
    margin-left:7rem;
  }
  .navbar-nav .nav-link{
    padding-left: 0.725rem;
  }
</style>
