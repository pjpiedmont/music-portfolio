<template>
	<main>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 http-status">
					<h1 class="display-1 fw-bold lh-1">404</h1>
				</div>
				<div class="col-12 not-found">
					<h1 class="display-4 fw-bold lh-1">Not Found</h1>
				</div>
			</div>
		</div>
	</main>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';
@import '@/assets/scss/variables/fonts.scss';

main,
.container,
.row {
	height: 100vh;
}

.http-status,
.not-found {
	color: $color-primary;
	text-align: center;
}

.http-status {
	font-family: $font-heading;
}

.not-found {
	font-family: $font-body;
}
</style>

<!----------------------------------------------------------------------------->

<script setup lang="ts"></script>
