<script setup lang="ts">
import ProfileSocial from '@/components/Profile/ProfileSocial.vue';

defineProps<{
	name: string;
	title: string;
	description: string;
}>();

export interface Social {
	href: string;
	icon: string;
	id: number;
}

const socials: Social[] = [
	{
		href: 'mailto:parkerpiedmont@parkerpiedmont.com',
		icon: 'envelope-fill',
		id: 0,
	},
	{
		href: 'https://www.linkedin.com/in/parkerpiedmont/',
		icon: 'linkedin',
		id: 1,
	},
	{
		href: 'https://discordapp.com/users/232967632897179648',
		icon: 'discord',
		id: 2,
	},
	{
		href: 'https://instagram.com/pjpiedmont',
		icon: 'instagram',
		id: 3,
	},
	{
		href: 'https://twitter.com/parkerpiedmont',
		icon: 'twitter',
		id: 4,
	},
];
</script>

<!----------------------------------------------------------------------------->

<template>
	<div class="container p-3 p-lg-5">
		<div class="row align-items-center">
			<div class="col-12 text-center text-lg-start">
				<h1 class="display-4 fw-bold lh-1 bg-accent">Parker Piedmont</h1>
				<hr />
				<p class="lead">Composer, Producer, Programmer - Seattle</p>
				<p>
					I'm a composer, producer, and programmer looking for work in
					music and
					audio for games. I have degrees in music performance and
					computer
					engineering and experience in writing and implementing game
					music. I
					also have experience in mixing. My combination of artistic and
					technical skills has helped me cultivate a passion for solving
					complex
					and creative problems. In my free time, I can be found playing
					saxophone (especially bari sax) and writing music for
					synthesizers.
				</p>
				<p class="mb-lg-0">
					<ProfileSocial v-for="social in socials" :href="social.href"
						:icon="social.icon" :key="social.id" />
				</p>
			</div>
		</div>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';
@import '@/assets/scss/variables/fonts.scss';

.container,
.row {
	height: 100%;
}

.container {
	background-color: $color-primary;
}

h1,
p {
	color: black;
}

h1 {
	font-family: $font-heading;
}

.lead {
	font-family: $font-subheading;
}

p {
	font-family: $font-body;
}

hr {
	background-color: $color-background;
	color: $color-background;
	opacity: 1;
	margin-left: auto;
	margin-right: auto;
	height: 2px;
	border: 1px solid $color-background;
	border-radius: 1px;
	overflow: hidden;
}
</style>
