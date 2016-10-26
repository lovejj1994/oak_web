<template>
	<div id='myLogin'>
		<h1>Sign into Oak</h1>
		<hr/>
		<form>
			<div class="form-group">
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username">
			</div>
			<div class="form-group">
				<input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password">
			</div>

			<button type="submit" class="btn btn-primary">Sign in</button>
		</form>
	</div>
</template>

<script>
export default {
  name: 'myLogin'
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

	button{
		width:100%;
		margin-top:2rem;
	}
</style>