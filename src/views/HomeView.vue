<script setup lang="ts">
import SectionTemplate from '@/components/SectionTemplate.vue';
import ProfileSection from '@/components/Profile/ProfileSection.vue';
import AlbumLayout from '@/components/Albums/AlbumLayout.vue';
import HeroTemplate from '@/components/HeroTemplate.vue';
</script>

<!----------------------------------------------------------------------------->

<template>
	<main class="container py-5">
		<HeroTemplate />

		<SectionTemplate>
			<ProfileSection name="Parker Piedmont"
				title="Composer, Producer, Programmer - Seattle" />
		</SectionTemplate>

		<SectionTemplate name="Evolvy Bugs"> </SectionTemplate>

		<SectionTemplate name="Contact"></SectionTemplate>
	</main>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss"></style>
