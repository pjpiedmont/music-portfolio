const playhead_input = document.querySelector('.playhead-input');
const playhead_display = document.querySelector('.playhead-display');

playhead_input.addEventListener('change', (e) => {
	let value = e.target.value;
	let percent = `${(e.target.value / playhead_input.getAttribute('max')) * 100}%`;

	console.log(`playhead value: ${value}`);
	console.log(`playhead percent: ${percent}`);

	playhead_display.setAttribute('style', `width: ${percent}`);
	playhead_display.setAttribute('aria-valuenow', `width: ${percent}`);
});