<script setup lang="ts">
defineProps<{
	name?: string;
}>();
</script>

<!----------------------------------------------------------------------------->

<template>
	<div class="container my-5 rounded-4 overflow-hidden border">
		<div v-if="name" class="row p-0 border-bottom">
			<div class="col-12 p-3">
				<h1 class="text-center">{{ name }}</h1>
			</div>
		</div>

		<slot></slot>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';
@import '@/assets/scss/variables/fonts.scss';

.container {
	// border-color: $color-primary !important;
	border-color: rgba(255, 255, 255, 0.5) !important;
}

.row {
	// background-color: $color-primary;
	font-family: 'Euclid Circular A Bold';
	color: $color-primary;
	border-color: $color-primary;
}
</style>
