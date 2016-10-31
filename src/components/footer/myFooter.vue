<template>
	<footer class="footer">
		<transition name="fade">
			<div class="alert alert-success" role="alert" v-show="msgHasDisplay">
				<strong>Well done!</strong> {{ msg }}
			</div>
		</transition>
		<hr />
		<div>
			<span>© To the oak tree 2016 </span>&nbsp;&nbsp;<span id='icp'>赣ICP备16010219号</span>
		</div>
	</footer>
</template>

<script>
import store from '../../vuex-config'
export default {
  name: 'myFooter',
  store,
  data () {
    return {
        msg:'',
        msgHasDisplay: false
    }
  },
  computed: {
		msgHasDisplay: function() {
      return this.$store.state.successMsg.display
    },
		msg: function() {
      return this.$store.state.successMsg.msg
    }
  },
	 methods: {
    closeMsg: function () {
			//倒数  只执行一次
			setTimeout(function(){
				this.$store.state.successMsg.display = false;
			}.bind(this), 3000)
    }
  },
	watch: {
    msgHasDisplay: function (val) {
      if(val === true){
				this.closeMsg()
			}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		margin: auto;
		display: block;
		height: 4rem;
		width: 90%;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	#icp {
		font-size: smaller;
	}
</style>