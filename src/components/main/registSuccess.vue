<template>
	<div class="ie8">
		<div id="js-alert-box" class="alert-box">
			<svg class="alert-circle" width="234" height="234">
				<circle cx="117" cy="117" r="108" fill="#FFF" stroke="silver" stroke-width="17"></circle>
				<circle id="js-sec-circle" class="alert-sec-circle" cx="117" cy="117" r="108" fill="transparent" stroke="#F4F1F1" stroke-width="18"
					transform="rotate(-90 117 117)"></circle>
				<text class="alert-sec-unit" x="86" y="172" fill="#BDBDBD">secs</text>
			</svg>
			<div id="js-sec-text" class="alert-sec-text"></div>
			<div class="alert-body">
				<div id="js-alert-head" class="alert-head"></div>
				<div class="alert-concent">
				</div>
			</div>
		</div>
</template>

<script>
import store from '../../vuex-config'
import Velocity from '../../../static/velocity/velocity.min.js'
export default {
  name: 'registSuccess',
	store,
  data () {
    return {
    }
  },
  mounted: function () {
		this.alertSet('激活成功,前往首页');
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
						setInterval(function() {
								if(0 == t) {
									location.href = "#"; //#时间到后跳转地址
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
		position: relative;
		margin: 96px auto 0;
		padding: 180px 85px 22px;
		border-radius: 10px 10px 0 0;
		width: 286px;
		color: #FFF;
		text-align: center
	}
	
	.alert-box p {
		margin: 0
	}
	
	.alert-circle {
		position: absolute;
		top: -50px;
		left: 111px
	}
	
	.alert-sec-circle {
		stroke-dashoffset: 0;
		stroke-dasharray: 735;
		transition: stroke-dashoffset 1s linear
	}
	
	.alert-sec-text {
		position: absolute;
		top: 11px;
		left: 190px;
		width: 76px;
		color: #000;
		font-size: 68px
	}
	
	.alert-sec-unit {
		font-size: 34px
	}
	
	.alert-body {
		margin: 35px 0
	}
	
	.alert-head {
		color: #242424;
		font-size: 26px;
		width: 251%;
	}
	
	.alert-concent {
		margin: 25px 0 14px;
		color: #7B7B7B;
		font-size: 18px
	}
	
	.alert-concent p {
		line-height: 27px
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
	
	.ie8 {
		width: 86%;
	}
</style>