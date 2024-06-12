<script setup lang="ts"></script>

<!----------------------------------------------------------------------------->

<template>
	<div class="container outer">
		<div class="row p-5 align-items-center">
			<div class="col-lg-8 offset-lg-2 p-0">
				<div class="container profile-pic p-0">
					<img src="@/assets/images/3A7CC25F-FC96-4F52-9FFC-CFB49689AFA9.jpeg"
						alt="Portrait of Parker Piedmont" />
				</div>
			</div>
		</div>
	</div>
</template>

<!----------------------------------------------------------------------------->

<style scoped lang="scss">
@import '@/assets/scss/variables/colors.scss';

.outer,
.row {
	height: 100%;
}

.profile-pic {
	overflow: hidden;
	border: 1px solid $color-primary;
	border-radius: 50%;
}

img {
	max-width: 100%;
	max-height: 100%;
}
</style>
