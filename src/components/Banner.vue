<script setup lang="ts"></script>

<!----------------------------------------------------------------------------->

<template>
	<div class="container-fluid p-5" id="hero">
		<picture>
			<img src="@/assets/images/C4CE2593-A57F-4F7D-B3C1-3CC81708CEA1.jpeg"
				alt="Picture of Parker Piedmont" style="object-fit: cover;" />
		</picture>
		<div class="row align-items-center">
			<div class="col-6">
				<div class="container p-3 p-lg-5 rounded-3 border shadow-lg">
					<!-- <div
						class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> -->
					<!-- <div class="col-lg-7 p-3 p-lg-5 pt-lg-3"> -->
					<!-- <h1 class="display-4 fw-bold lh-1">PARKER PIEDMONT</h1> -->
					<h1 class="display-4 fw-bold lh-1 bg-accent">parker piedmont</h1>
					<hr />
					<p class="lead">music to dance to in space</p>
					<!-- <hr />
					<p class="lead">Composer, Producer, Programmer - Seattle</p> -->
					<!-- <p class="lead">I'm a composer, producer, and programmer looking
						for work in
						music and
						audio for games. I have degrees in music performance and
						computer
						engineering and experience in writing and implementing game
						music. I
						also have experience in mixing. My combination of artistic
						and
						technical skills has helped me cultivate a passion for
						solving
						complex
						and creative problems. In my free time, I can be found
						playing
						saxophone (especially bari sax) and writing music for
						synthesizers.</p> -->
					<!-- <div
						class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
						<button type="button"
							class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
						<button type="button"
							class="btn btn-outline-secondary btn-lg px-4">Default</button>
					</div> -->
					<!-- </div> -->
					<!-- <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
					<div class="rounded-lg-3"
						style="width: 720px; height: 300px; background-color: aqua;">
					</div>
				</div> -->
					<!-- </div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
#hero {
	height: 50vh;
	// background-color: #ccc;
	// background-image: url('@/assets/images/C4CE2593-A57F-4F7D-B3C1-3CC81708CEA1.jpeg');
	// background-size: cover;
	// background-position-y: center;
}

.row {
	height: 100%;
}

.container {
	background-color: rgba(0, 0, 0, 0.65);
	text-align: center;
	border-color: rgba(255, 255, 255, 0.75) !important;
	border-width: 1px;
	border-radius: 20px !important;
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
	color: black;
	opacity: 0.5;
	margin-left: auto;
	margin-right: auto;
	height: 2px;
	border: 1px solid white;
	border-radius: 1px;
	overflow: hidden;
}
</style>