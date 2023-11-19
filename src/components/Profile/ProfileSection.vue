<script setup lang="ts">
import ProfileDescription from '@/components/Profile/ProfileDescription.vue';
import ProfileImage from '@/components/Profile/ProfileImage.vue';

defineProps<{
	name: string;
	title: string;
	description?: string;
}>();
</script>

<!----------------------------------------------------------------------------->

<template>
	<div class="row p-0">
		<div class="col-lg-6 p-0">
			<ProfileImage />
		</div>

		<div class="col-lg-6 p-0">
			<ProfileDescription />
		</div>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss"></style>
