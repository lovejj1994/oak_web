<template>
	<div>
		<div id='myRegister' v-bind:class="{'animated fadeOut': !registershow}" v-if="registershow">
			<h1 v-bind:class="{ 'loginFormDown': loginFormHasShow,'h1font' : myh1font }">
				<transition mode="out-in" v-on:before-enter="beforeEnter" v-on:enter="enter" name="fade">
					<div v-if="fontHasShow" key="Sign into">
						Join
					</div>
					<div v-else key="Welcome to">
						Welcome to
					</div>
				</transition>
				Oak</h1>
			<div id="collapseExample" v-bind:class="{'animated shake': errShow}" v-show="errShow" class="alert alert-danger">
				{{ registErrMsg }}
			</div>
			<div id="loginForm">
				<hr v-bind:class="{ 'loginFormDown': loginFormHasShow,'hrwidth' : myh1font }" />
				<form>
					<div v-bind:class="{ 'loginFormDown': loginFormHasShow,'myicon' : myh1font }">
						<img id="registerIcon" v-bind:src="iconpath" alt="" class="rounded-circle">
						<input type="hidden" name="iconid" v-bind:value="iconid"></input>
					</div>
					<template v-if="validator.userNamefistShow">
						<div class="form-group">
							<input type="text" class="form-control" id="username" name="username" v-model.trim="form.userName" placeholder="Username"
								v-on:blur="usernameBlur">
						</div>
					</template>
					<template v-else>
						<div class="form-group" v-bind:class="{'has-success': validator.userNameValidation, 'has-danger': !validator.userNameValidation}">
							<input type="text" class="form-control" id="username" name="username" v-model.trim="form.userName" placeholder="Username"
								v-on:blur="usernameBlur" data-toggle="popover" v-bind:data-content="validator.userNameErrMsg" v-bind:class="{'form-control-success': validator.userNameValidation, 'form-control-danger': !validator.userNameValidation}">
						</div>
					</template>
					<template v-if="validator.emailfistShow">
						<div class="form-group">
							<input type="email" class="form-control" id="email" v-model.trim="form.email" placeholder="Email" v-on:keyup.enter="submit"
								v-on:blur="emailBlur">
						</div>
					</template>
					<template v-else>
						<div class="form-group" v-bind:class="{'has-success': validator.emailValidation, 'has-danger': !validator.emailValidation}">
							<input type="email" class="form-control" id="email" v-model.trim="form.email" placeholder="Email" v-on:keyup.enter="submit"
								data-placement="left" data-toggle="popover" v-bind:data-content="validator.emailErrMsg" v-on:blur="emailBlur" v-bind:class="{'form-control-success': validator.emailValidation, 'form-control-danger': !validator.emailValidation}">
						</div>
					</template>
					<template v-if="validator.passWordfistShow">
						<div class="form-group">
							<input type="password" class="form-control" id="password" v-model.trim="form.passWord" placeholder="Password" v-on:keyup.enter="submit"
								v-on:blur="passwordBlur">
						</div>
					</template>
					<template v-else>
						<div class="form-group" v-bind:class="{'has-success': validator.passWordValidation, 'has-danger': !validator.passWordValidation}">
							<input type="password" class="form-control" id="password" v-model.trim="form.passWord" placeholder="Password" v-on:keyup.enter="submit"
								data-toggle="popover" v-bind:data-content="validator.passWordErrMsg" v-on:blur="passwordBlur" v-bind:class="{'form-control-success': validator.passWordValidation, 'form-control-danger': !validator.passWordValidation}">
						</div>
					</template>
					<button type="button" class="btn btn-primary" v-on:click="submit">Join</button>
				</form>
			</div>
		</div>
		<div id="register" v-bind:class="{'animated fadeIn': !registershow}" v-if="!registershow">
			<h5>注册成功,请接收激活邮件</h5>
		</div>

	</div>
</template>

<script>
import store from '../../vuex-config'
import Velocity from '../../../static/velocity/velocity.min.js'
export default {
  name: 'myRegister',
	store,
  data () {
    return {
		registershow:true,
		// iconpath:"../../static/img/oak_main.jpg",
		iconpath:"https://www.xxywithpq.cn:50470/webhdfs/v1/icon3/icon-737bf781-e20a-4e10-9143-e480df626d34-0.png?op=OPEN",
		iconid:"",
			form:{
				userName: '',
      			passWord: '',
				email: ''
			},
			fontHasShow: true,
      loginFormHasShow: true,
	  myh1font:false,
			validator:{
				userNamefistShow: true,
				passWordfistShow: true,
				emailfistShow: true,
				userNameValidation: true,
				passWordValidation: true,
				emailValidation: true,
				userNameErrMsg: '',
				passWordErrMsg: '',
				emailErrMsg: ''
			},
			// errShow:false,
			registErrMsg:'',
			errShow:false,
			brHasShow:false
    }
  },
  updated:function() {
	  $('[data-toggle="popover"]').popover({
  		trigger: 'manual'
	  })

	  if(this.validator.userNameValidation == false){
		  $('#username').popover('show')
	  }else{
		  $('#username').popover('hide')
	  }

	  if(this.validator.emailValidation == false){
		  $('#email').popover('show')
	  }else{
		  $('#email').popover('hide')
	  }

	  if(this.validator.passWordValidation == false){
		  $('#password').popover('show')
	  }else{
		  $('#password').popover('hide')
	  }
  },destroyed:function(){
	  $('[data-toggle="popover"]').popover('dispose')
  },
	computed:{
		// errShow: function(){
		// 	return '' !== this.validator.userNameErrMsg || '' !== this.validator.passWordErrMsg
		// },
		brHasShow: function(){
			return '' !== this.validator.userNameErrMsg && '' !== this.validator.passWordErrMsg
		}
	},
	mounted: function () {
		setTimeout(function(){
			this.myh1font = true
		}.bind(this), 500);


		setTimeout(function(){
				const uploader = new plupload.Uploader({
					runtimes : 'html5,flash,silverlight,html4',
					browse_button : 'registerIcon', // you can pass an id...
					// url : 'https://127.0.0.1:80/hadoop/icon/upload',
				    url : 'https://www.xxywithpq.cn:8080/hadoop/icon/upload',
					filters : {
						max_file_size : '10mb',
						mime_types: [
							{title : "Image files", extensions : "jpg,gif,png,jpeg"}
						]
					},
					init: {
						PostInit: function() {
							// document.getElementById('filelist').innerHTML = '';
							// document.getElementById('uploadfiles').onclick = function() {
							// 	uploader.start();
							// 	return false;
							// };
						},
						FilesAdded: function(up, files) {
							uploader.start();
							// plupload.each(files, function(file) {
							// 	document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
							// });
						},
						UploadProgress: function(up, file) {
							// document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
						},
						Error: function(up, err) {
							// document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
						},
						UploadComplete: function(up, files) {
							
						},
						FileUploaded: function(up, file, info) {
							const json = JSON.parse(info.response)
							this.iconpath = json.iconpath
							this.iconid = json.iconid
						}.bind(this),
					}
				})
			uploader.init()
		}.bind(this), 2800);

  },
  watch: {
  },
  methods: { 
		usernameBlur: function () {
      		if('' === this.form.userName){
				this.validator.userNamefistShow = false
				this.validator.userNameValidation = false
				this.validator.userNameErrMsg = '请输入用户名'
			}else{
				this.validator.userNamefistShow = false
				this.validator.userNameValidation = true
				this.validator.userNameErrMsg = ''
			}	
    },emailBlur: function () {
      		if('' === this.form.email){
				this.validator.emailfistShow = false
				this.validator.emailValidation = false
				this.validator.emailErrMsg = '请输入邮箱'
			}else if(/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(this.form.email)==false){
				this.validator.emailfistShow = false
				this.validator.emailValidation = false
				this.validator.emailErrMsg = '邮箱格式有误'
			}else{
				this.validator.emailfistShow = false
				this.validator.emailValidation = true
				this.validator.emailErrMsg = ''
			}	
    },
		passwordBlur: function () {
      		if('' === this.form.passWord){
				this.validator.passWordfistShow = false
				this.validator.passWordValidation = false
				this.validator.passWordErrMsg = '请输入密码'
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
		if(this.validator.userNamefistShow || this.validator.emailfistShow || this.validator.passWordfistShow)
			return
		if(!this.validator.passWordValidation || !this.validator.passWordValidation || !this.validator.userNameValidation)
			return

 		const HEADERS = {
			 emulateJSON: true
        }

		const body = {
            username: this.form.userName,
            password: this.form.passWord,
            email: this.form.email
        }
 this.$http.post('https://www.xxywithpq:8080/auth/regist', body, HEADERS).then((response) => {
	//   this.$http.post('https://127.0.0.1:80/auth/regist', body, HEADERS).then((response) => {
	      if(response.data.flag === true){
			  this.errShow = false,
			  this.registershow = false
          }else{
			  this.errShow = true
			  this.registErrMsg = response.data.msg
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
	img {
		padding: .25rem;
		border: .1rem solid #ddd;
		background-color: #fff;
		width: 6.5rem;
		height: 6.5rem;
	}
	
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
	
	#register {
		width: 17%;
		margin: auto;
		margin-top: 9rem;
	}
	
	.loginFormDown {
		transition: all 1s;
		-moz-transition: all 1s;
		/* Firefox 4 */
		-webkit-transition: all 1s;
		/* Safari and Chrome */
		-o-transition: all 1s;
		/* Opera */
	}
	
	.hrwidth {
		width: 35%;
	}
	
	.myicon {
		margin-bottom: 1rem;
		margin-top: -2rem;
	}
	
	.h1font {
		margin-bottom: -1.8rem;
		margin-right: 22.8rem;
		font-size: 1.7rem;
	}
	
	.rounded-circle {
		margin: 0 auto;
		display: block;
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
		margin: 2.2rem auto -2rem auto;
		padding: .45rem;
		border: 1px solid transparent;
		border-radius: .2em
	}
</style>