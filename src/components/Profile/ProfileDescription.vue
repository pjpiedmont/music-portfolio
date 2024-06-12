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
				<p class="lead">Electro-Acoustic Music Enthusiast</p>
				<p>Hi, I'm Parker! I like to make music. Obviously. The music I make is
					sort of a mash-up of elements from jazz, synthwave, and video game
					soundtracks. That's the most succinct description I've managed to come
					up with so far. &nbsp; ¯\_(ツ)_/¯ &nbsp; I'm especially fond of
					synthesizers, which perfectly blend my backgrounds in computer
					engineering and saxophone performance. In my free time, I can be found
					turning knobs half a degree to get the sound *just right*.
				</p>
				<p>I'm especially fond of film and game soundtracks, and I've even
					written a game soundtrack in the past! If you are in need of a score
					for your project and vibe with my music, please don't hesitate to
					reach out to me at one of the social links below. I'd love to work
					with you!
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
	// background-color: $color-primary;
	border-left: 1px solid rgba(255, 255, 255, 0.5);
}

h1,
p {
	color: white;
}

h1 {
	font-family: 'Euclid Circular A';
}

.lead {
	font-family: 'Euclid Circular A';
}

p {
	font-family: 'Euclid Circular A Light';
}

hr {
	background-color: white;
	color: $color-background;
	opacity: 0.25;
	margin-left: auto;
	margin-right: auto;
	height: 2px;
	border: 1px solid white;
	border-radius: 1px;
	overflow: hidden;
}
</style>
