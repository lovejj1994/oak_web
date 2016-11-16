<template>
	<div id='myLogin'>
		<h1 v-bind:class="{ 'loginFormDown': loginFormHasShow }">
			<transition mode="out-in" v-on:before-enter="beforeEnter" v-on:enter="enter" name="fade">
				<div v-if="fontHasShow" key="Sign into">
					Sign into
				</div>
				<div v-else key="Welcome to">
					Welcome to
				</div>
			</transition>
			Oak</h1>

		<div id="collapseExample" v-bind:class="{'animated shake': errShow}" v-show="errShow" class="alert alert-danger">
			{{ validator.userNameErrMsg }}<br v-show="brHasShow" /> {{ validator.passWordErrMsg }} {{ validator.loginErrMsg }}
		</div>
		<div id="loginForm" v-bind:class="{ 'animated zoomOut': loginFormHasShow }">
			<hr/>
			<form>
				<template v-if="validator.userNamefistShow">
					<div class="form-group">
						<input type="text" class="form-control" id="username" v-model.trim="form.userName" placeholder="Username" v-on:blur="usernameBlur">
					</div>
				</template>
				<template v-else>
					<div class="form-group" v-bind:class="{'has-success': validator.userNameValidation, 'has-danger': !validator.userNameValidation}">
						<input type="text" class="form-control" id="username" v-model.trim="form.userName" placeholder="Username" v-on:blur="usernameBlur"
							v-bind:class="{'form-control-success': validator.userNameValidation, 'form-control-danger': !validator.userNameValidation}">
					</div>
				</template>
				<template v-if="validator.passWordfistShow">
					<div class="form-group">
						<!--按键监听最好放在input标签-->
						<input type="password" class="form-control" id="password" v-model.trim="form.passWord" placeholder="Password" v-on:keyup.enter="submit"
							v-on:blur="passwordBlur">
					</div>
				</template>
				<template v-else>
					<div class="form-group" v-bind:class="{'has-success': validator.passWordValidation, 'has-danger': !validator.passWordValidation}">
						<!--按键监听最好放在input标签-->
						<input type="password" class="form-control" id="password" v-model.trim="form.passWord" placeholder="Password" v-on:keyup.enter="submit"
							v-on:blur="passwordBlur" v-bind:class="{'form-control-success': validator.passWordValidation, 'form-control-danger': !validator.passWordValidation}">
					</div>
				</template>
				<button type="button" class="btn btn-primary" v-on:click="submit">Sign in</button>
			</form>
		</div>
	</div>
</template>

<script>
import store from '../../vuex-config'
import Velocity from '../../../static/velocity/velocity.min.js'
export default {
  name: 'myLogin',
	store,
  data () {
    return {
			form:{
				userName: '',
      			passWord: ''
			},
			fontHasShow: true,
      loginFormHasShow: false,
			validator:{
				userNamefistShow: true,
				passWordfistShow: true,
				userNameValidation: false,
				passWordValidation: false,
				userNameErrMsg: '',
				passWordErrMsg: '',
				loginErrMsg: ''
			},
			errShow:false,
			brHasShow:false
    }
  },
	computed:{
		errShow: function(){
			return '' !== this.validator.userNameErrMsg || '' !== this.validator.passWordErrMsg || '' !== this.validator.loginErrMsg
		},
		brHasShow: function(){
			return '' !== this.validator.userNameErrMsg && '' !== this.validator.passWordErrMsg
		}
	},
	ready: function () {
  },
  methods: { 
		usernameBlur: function () {
      if('' === this.form.userName){
				this.validator.userNamefistShow = false
				this.validator.userNameValidation = false
				this.validator.userNameErrMsg = 'Please enter your username'
				this.validator.loginErrMsg = ''
				this.errShow = true
			}else{
				this.validator.userNamefistShow = false
				this.validator.userNameValidation = true
				this.validator.userNameErrMsg = ''
			}	
    },
		passwordBlur: function () {
      if('' === this.form.passWord){
				this.validator.passWordfistShow = false
				this.validator.passWordValidation = false
				this.validator.passWordErrMsg = 'Please enter your password'
				this.validator.loginErrMsg = ''
				this.errShow = true
			}else{
				this.validator.passWordfistShow = false
				this.validator.passWordValidation = true
				this.validator.passWordErrMsg = ''
			}	
    },
		beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    submit: function () {
			if(this.errShow)
				return

      const headers = {}
      headers.authorization = "Basic " + btoa(this.form.userName + ":" + this.form.passWord)

			this.$http({
            method:'POST',
            // url:'http://123.206.26.77:8080/login',
           url:'http://localhost/login',
		    headers: headers,
						}).then((response) => {
				 if(response.data.flag === true){
						this.loginFormHasShow = true
						setTimeout(function(){
								this.fontHasShow = false
						}.bind(this), 1000)
						
            //store.commit('successMsgIsChange', response.data)
            store.commit('tokenIsChange', response.data.x_auth_token)
          }else{
						
					}
			}, (response) => {
				this.validator.loginErrMsg = '用户名或密码错误'
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
	
	.alert-danger {
		background-color: #f2dede;
		border-color: #ebccd1 !important;
		color: #a94442
	}
	
	.alert {
		text-align: center;
		width: 35%;
		margin: 1.5rem auto -1rem auto;
		padding: .65rem;
		border: 1px solid transparent;
		border-radius: .2em
	}
</style>