<script setup lang="ts"></script>

<!----------------------------------------------------------------------------->

<template>
	<div class="col-lg-12 px-0 rounded-4 overflow-hidden border" id="hero">
		<h1 class="display-4">Parker Piedmont</h1>
		<p class="lead my-3">Multiple lines of text that form the lede, informing
			new readers quickly and efficiently about what’s most interesting in this
			post’s contents.</p>
		<p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue
				reading...</a></p>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
#hero {
	background-image: url('@/assets/images/C4CE2593-A57F-4F7D-B3C1-3CC81708CEA1.jpeg');
	background-size: cover;
	background-position-y: center;
	background-repeat: no-repeat;
	height: 50vh;
	color: black;
}

h1 {
	font-family: 'Euclid Circular A';
}
</style>