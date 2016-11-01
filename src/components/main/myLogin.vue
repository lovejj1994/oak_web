<template>
	<div id='myLogin'>
		<h1 v-bind:class="{ active: true, 'loginFormDown': hasShow }">
			<transition mode="out-in" v-on:before-enter="beforeEnter" v-on:enter="enter" name="fade">
				<div v-if="fontHasShow" key="Sign into">
					Sign into
				</div>
				<div v-else key="Welcome to">
					Welcome to
				</div>
			</transition>
			Oak</h1>

		<div v-bind:class="{ active: true, 'animated zoomOut': hasShow }" id="loginForm">
			<hr/>
			<form>
				<div class="form-group">
					<input type="text" class="form-control" id="username" v-model.trim="userName" placeholder="Username">
				</div>
				<div class="form-group">
					<!--按键监听最好放在input标签-->
					<input type="password" class="form-control" id="password" v-model.trim="passWord" placeholder="Password" v-on:keyup.enter="submit">
				</div>
				<button type="button" class="btn btn-primary" v-on:click="submit" >Sign in</button>
			</form>
		</div>
	</div>
</template>

<script>
import store from '../../vuex-config'
import Velocity from '../../../static/velocity/velocity.min.js'
// import resource from '../../vue-resource-config' 
$.ajaxSetup({ cache: false })
export default {
  name: 'myLogin',
	store,
  data () {
    return {
      userName: '',
      passWord: '',
			msg: 'Sign into',
			fontHasShow: true,
      hasShow: false
    }
  },
	ready: function () {
    //这里是vue初始化完成后执行的函数
    console.info('初始化')
  },
  methods: { 
		beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    submit: function () {
      const headers = {}
      headers.authorization = "Basic " + btoa(this.userName + ":" + this.passWord)

			this.$http({
            method:'POST',
            url:'http://localhost:8081/login',
            headers: headers,
						}).then((response) => {
				 if(response.data.flag === true){
						this.hasShow = true
						setTimeout(function(){
								this.fontHasShow = false
						}.bind(this), 1000)
						

            store.commit('successMsgIsChange', response.data)
            store.commit('tokenIsChange', response.data.x_auth_token)
          }else{
						
					}
			}, (response) => {
				alert("用户名或密码错误")
			});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		margin-top: 4rem;
		text-align: center;
	}
	
	h1 div {
		display: inline;
	}
	
	form {
		width: 35%;
		margin: auto;
		margin-top: 3rem;
	}
	
	.form-group {
		margin-bottom: 0;
	}
	
	hr {
		margin-top: 3rem;
		width: 45%;
	}
	
	button {
		width: 100%;
		margin-top: 2rem;
	}
	
	.loginFormDown {
		transition: All 0.8s ease-in-out;
		-webkit-transition: All 0.8s ease-in-out;
		-moz-transition: All 0.8s ease-in-out;
		-o-transition: All 0.8s ease-in-out;
		transform: translate(0, 80px);
		-webkit-transform: translate(0, 80px);
		-moz-transform: translate(0, 80px);
		-o-transform: translate(0, 80px);
		-ms-transform: translate(0, 80px);
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .6s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
</style>