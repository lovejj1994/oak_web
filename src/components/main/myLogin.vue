<template>
	<div id='myLogin'>
		<h1>Sign into Oak</h1>
		<hr/>
		<form>
			<div class="form-group">
				<input type="text" class="form-control" id="username" v-model.trim="userName" placeholder="Username">
			</div>
			<div class="form-group">
				<input type="password" class="form-control" id="password" v-model.trim="passWord" placeholder="Password">
			</div>
			<button type="button" class="btn btn-primary" v-on:click="submit">Sign in</button>
		</form>
	</div>
</template>

<script>
import store from '../../vuex-config'
import $ from '../../../static/jquery/jquery.min.js'
$.ajaxSetup({ cache: false })
export default {
  name: 'myLogin',
	store,
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
	ready: function () {
    //这里是vue初始化完成后执行的函数
    console.info('初始化')
  },
  methods: {
    submit: function () {
      const headers = {}
      const params = {
        'username': this.userName,
        'password': this.passWord
      }
      headers.authorization = "Basic " + btoa(this.userName + ":" + this.passWord)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8081/home/login',
        headers: headers,
				crossDomain: true,
        dataType: 'json',
        async: false,
        success: function (data) {
          if(data.flag === true){
            store.commit('successMsgIsChange', data)
            store.commit('tokenIsChange', data.x_auth_token)
          }
        },
        error: function () {
        }
      })
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
</style>