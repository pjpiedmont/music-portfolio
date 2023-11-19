<template>
	<div class="navbar fixed-top navbar-expand-lg overflow-hidden p-0">
		<div class="container-fluid">
			<div id="nav-title" class="navbar-text text-center">P<sup>2</sup></div>
		</div>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';

.navbar {
	// 	height: calc(var(--nav-height) - 1px);
	// 	background-color: var(--main-bg-color);
	border-bottom: 1px solid $color-primary;

	div {
		width: 100%;
	}
}

#nav-title {
	font-family: 'Major Mono Display';
	color: $color-primary;
	font-size: 3rem;
	font-weight: bold;
	width: 100%;
}

sup {
	font-weight: bold;
}
</style>

<!----------------------------------------------------------------------------->

<script setup lang="ts"></script>
