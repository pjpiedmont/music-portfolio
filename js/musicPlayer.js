const nowplaying = document.querySelector('#now-playing');

const trackart = document.querySelector('#track-art');
const trackname = document.querySelector('#track-name');

const playbtn = document.querySelector('#play');
const rewindbtn = document.querySelector('#rewind');
const fforwardbtn = document.querySelector('#fforward');

const playhead_input = document.querySelector('#playhead-input');
const playhead_display = document.querySelector('#playhead-display');

const currtime = document.querySelector('#current-time');
const duration = document.querySelector('#duration');

const volume_input = document.querySelector('#volume-input');
const volume_display = document.querySelector('#volume-display');

const tracklist = [
	{
		name: "Saturday Snowfall",
		image: "",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "",
		image: "",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Evolvy Bugs",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/01 Evolvy Bugs.mp3"
	},
	{
		name: "Asteroid Belt",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/02 Asteroid Belt.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Solace and Respite/Cosmic Jungle.mp3"
	},
]

playhead_input.addEventListener('change', (e) => {
	let value = e.target.value;
	let percent = `${(e.target.value / playhead_input.getAttribute('max')) * 100}%`;

	console.log(`playhead value: ${value}`);
	console.log(`playhead percent: ${percent}`);

	playhead_display.setAttribute('style', `width: ${percent}`);
	playhead_display.setAttribute('aria-valuenow', `width: ${percent}`);
});

volume_input.addEventListener('change', (e) => {
	let value = e.target.value;
	let percent = `${(e.target.value / volume_input.getAttribute('max')) * 100}%`;

	console.log(`volume value: ${value}`);
	console.log(`volume percent: ${percent}`);

	volume_display.setAttribute('style', `width: ${percent}`);
	volume_display.setAttribute('aria-valuenow', `width: ${percent}`);
});