<template>
	<div class="ie8">
		<div id="js-alert-box" class="alert-box" v-if="isactive">
			<svg class="alert-circle" width="234" height="234">
				<circle cx="117" cy="117" r="108" fill="#FFF" stroke="silver" stroke-width="17"></circle>
				<circle id="js-sec-circle" class="alert-sec-circle" cx="117" cy="117" r="108" fill="transparent" stroke="#F4F1F1" stroke-width="18"
					transform="rotate(-90 117 117)"></circle>
				<text class="alert-sec-unit" x="86" y="172" fill="#BDBDBD">secs</text>
			</svg>
			<div id="js-sec-text" class="alert-sec-text"></div>
			<div class="alert-body">
				<div id="js-alert-head" class="alert-head"></div>
			</div>
		</div>
		<div v-if="isactive" id="msg">{{ msg }}</div>
	</div>

</template>

<script>
	import store from '../../vuex-config'
	import router from '../../router-config'
	import Velocity from '../../../static/velocity/velocity.min.js'
	export default {
		name: 'registSuccess',
		store,
		data() {
			return {
				msg: '',
				isactive: true
			}
		},
		mounted: function () {

			const HEADERS = {
				emulateJSON: true
			}

			const body = {
				username: this.$route.params.username,
				activecode: this.$route.params.activecode
			}

			this.$http.post('http://127.0.0.1:80/auth/active', body, HEADERS).then((response) => {
				if (response.data.flag === true) {
					store.commit('loginSuccess', true)
					this.alertSet('激活成功,前往首页')
				} else {
					this.msg = response.data.msg
				}

			}, (response) => {
			});

			console.log(this.$route.params.username)
			console.log(this.$route.params.activecode)
		},
		watch: {
		},
		methods: {
			alertSet: function (e) {
				document.getElementById("js-alert-box").style.display = "block",
					document.getElementById("js-alert-head").innerHTML = e;
				var t = 3,
					n = document.getElementById("js-sec-circle");
				document.getElementById("js-sec-text").innerHTML = t,
					setInterval(function () {
						if (0 == t) {
							router.push('/')
							// location.href = "/"; //#时间到后跳转地址
						} else {
							t -= 1,
								document.getElementById("js-sec-text").innerHTML = t;
							var e = Math.round(t / 3 * 735);
							n.style.strokeDashoffset = e - 735
						}
					},
						970);
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.alert-box {
		display: none;
		margin: 8rem auto 0;
		border-radius: 10px 10px 0 0;
		width: 286px;
		color: #FFF;
		text-align: center
	}
	
	.alert-box p {
		margin: 0
	}
	
	.alert-circle {
	}
	
	.alert-sec-circle {
		stroke-dashoffset: 0;
		stroke-dasharray: 735;
		transition: stroke-dashoffset 1s linear
	}
	
	.alert-sec-text {
		margin-top:-11rem;
		color: #000;
		font-size: 68px
	}
	
	.alert-sec-unit {
		font-size: 34px
	}
	
	.alert-head {
		margin-top:6rem;
		text-align:center;
		color: #242424;
		font-size: 26px;
	}
	
	.alert-btn {
		display: block;
		border-radius: 10px;
		background-color: #4AB0F7;
		height: 55px;
		line-height: 55px;
		width: 286px;
		color: #FFF;
		font-size: 20px;
		text-decoration: none;
		letter-spacing: 2px
	}
	
	.alert-btn:hover {
		background-color: #6BC2FF
	}
	
	.alert-footer {
		margin: 0 auto;
		height: 42px;
		width: 120px
	}
	
	.alert-footer-icon {
		float: left
	}
	
	.alert-footer-text {
		float: left;
		border-left: 2px solid #EEE;
		padding: 3px 0 0 5px;
		height: 40px;
		color: #0B85CC;
		font-size: 12px;
		text-align: left
	}
	
	.alert-footer-text p {
		color: #7A7A7A;
		font-size: 22px;
		line-height: 18px
	}

	#msg{
		margin:6.5rem auto -1rem auto;
		text-align:center
	}
</style>