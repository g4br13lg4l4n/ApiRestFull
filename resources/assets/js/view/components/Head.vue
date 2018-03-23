<template>
	<div class="header">
		<div class="header-container">
			<p>Administrador</p>
			<router-link :to="{ name: 'Login' }" class="nav-link" exact> Salir </router-link>
		</div>

	</div>
</template>
<script>
	export default {
		name: 'Head',
	}
</script>
<style lang="stylus">
	
</style>