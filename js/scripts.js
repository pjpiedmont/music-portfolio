// const audio = document.querySelector('audio');
// const durationContainer = document.getElementById('duration');

// const calculateTime = (secs) => {
// 	const minutes = Math.floor(secs / 60);
// 	const seconds = Math.floor(secs % 60);
// 	const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
// 	return `${minutes}:${returnedSeconds}`;
// }

// const displayDuration = () => {
// 	durationContainer.textContent = calculateTime(audio.duration);
// }

// const seekSlider = document.getElementById('seek-slider');
// const setSliderMax = () => {
// 	seekSlider.max = Math.floor(audio.duration);
// }

// if (audio.readyState > 0) {
// 	displayDuration();
// 	setSliderMax();
// } else {
// 	audio.addEventListener('loadedmetadata', () => {
// 		displayDuration();
// 		setSliderMax();
// 	});
// }



