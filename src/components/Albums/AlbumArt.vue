<script setup lang="ts">
defineProps<{
	src: string;
	alt: string;
}>();
</script>

<!----------------------------------------------------------------------------->

<template>
	<img :src="src" :alt="alt">
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';

img {
	max-width: 100%;
	max-height: 100%;
	overflow: hidden;
	border: 1px solid $color-primary;
	border-radius: 10%;
}
</style>
