<template>
	<footer class="footer">
		<hr />
		<div>
			<span>© To the oak tree 2016 </span>&nbsp;&nbsp;<span id='icp'>赣ICP备16010219号</span>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'myFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		margin: auto;
		display:block;
		height:4rem;
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