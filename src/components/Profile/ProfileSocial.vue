<script setup lang="ts">
defineProps<{
	href: string;
	icon: string;
}>();
</script>

<!----------------------------------------------------------------------------->

<template>
	<a :href="href" target="_blank" class="p-2 rounded-2">
		<i :class="`bi-${icon}`"></i>
	</a>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';

i {
	font-size: 1.5rem;
	vertical-align: middle;
}

a {
	color: $color-background;
	margin: 0 5px;

	&:hover {
		background-color: $color-background;
		color: $color-primary;
	}
}
</style>
