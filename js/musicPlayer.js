const nowplaying = document.querySelector('#now-playing');

const trackart = document.querySelector('#track-art');
const trackname = document.querySelector('#track-name');
const tracknameMobile = document.querySelector('#track-name-mobile');

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
		path: "../assets/audio/albums/Solace and Respite/05 Cosmic Jungle.mp3"
	},
	{
		name: "",
		image: "",
		path: "../assets/audio/albums/Solace and Respite/05 Cosmic Jungle.mp3"
	},
	{
		name: "Evolvy Bugs",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/01 Evolvy Bugs.mp3"
	},
	{
		name: "Embarkation",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/02 Embarkation.mp3"
	},
	{
		name: "Asteroid Belt",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/03 Asteroid Belt.mp3"
	},
	{
		name: "Information Overload",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/04 Information Overload.mp3"
	},
	{
		name: "Cosmic Jungle",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/05 Cosmic Jungle.mp3"
	},
	{
		name: "Tail of a Comet",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/06 Tail of a Comet.mp3"
	},
	{
		name: "For Science",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/07 For Science.mp3"
	},
	{
		name: "Mechanized Ruins",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/08 Mechanized Ruins.mp3"
	},
	{
		name: "Entrails",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/09 Entrails.mp3"
	},
	{
		name: "Evolution Always Wins",
		image: "../assets/images/EvolvyBugs.png",
		path: "../assets/audio/albums/Evolvy Bugs/10 Evolution Always Wins.mp3"
	},
	{
		name: "Underflow",
		image: "",
		path: "../assets/audio/singles/gdc demo 1.0.mp3"
	},
	{
		name: "Flux Pulse",
		image: "",
		path: "../assets/audio/singles/gdc demo 1.0.mp3"
	}
]

let tracknum = 0;
let playing = false;
let seekTimer;

const loadTrack = (tracknum) => {
	let name;
	let image;
	let path;

	if (tracknum > -1) {
		name = tracklist[tracknum].name;
		image = tracklist[tracknum].image;
		path = tracklist[tracknum].path;
	}
	else {
		name = '---';
		image = '';
		path = '';
	}

	clearInterval(seekTimer);
	resetValues();

	nowplaying.setAttribute('src', path);
	nowplaying.load();

	trackart.setAttribute('src', image);
	trackname.textContent = name;
	tracknameMobile.textContent = name;

	seekTimer = setInterval(seekUpdate, 1000);

	nowplaying.addEventListener('ended', nextTrack);
}

const resetValues = () => {
	currtime.textContent = '--:--';
	duration.textContent = '--:--';
	playhead_input.value = 0;
	playhead_display.setAttribute('style', 'width: 0%;');
}

const playPauseTrack = () => {
	if (!playing)
		playTrack();
	else
		pauseTrack();
}

const playTrack = () => {
	nowplaying.play();
	playing = true;

	playbtn.classList.replace('bi-play', 'bi-pause');
}

const pauseTrack = () => {
	nowplaying.pause();
	playing = false;

	playbtn.classList.replace('bi-pause', 'bi-play');
}

const nextTrack = () => {
	if (tracknum < tracklist.length - 1)
		tracknum++;
	else
		tracknum = 0;

	loadTrack(tracknum);
	playTrack();
}

const prevTrack = () => {
	if (tracknum > 0)
		tracknum--;
	else
		tracknum = tracklist.length - 1;

	loadTrack(tracknum);
	playTrack();
}

const seekTo = () => {
	let seekto = nowplaying.duration * (playhead_input.value / 100);
	nowplaying.currentTime = seekto;
}

const seekUpdate = () => {
	let seekPosition = 0;

	if (!isNaN(nowplaying.duration)) {
		seekPosition = nowplaying.currentTime * (100 / nowplaying.duration);
		playhead_input.value = seekPosition;
		playhead_display.setAttribute('style', `width: ${seekPosition}%`);
		playhead_display.setAttribute('aria-valuenow', `${seekPosition}`);

		let currentMinutes = Math.floor(nowplaying.currentTime / 60);
		let currentSeconds = Math.floor(nowplaying.currentTime - currentMinutes * 60);

		let durationMinutes = Math.floor(nowplaying.duration / 60);
		let durationSeconds = Math.floor(nowplaying.duration - durationMinutes * 60);

		if (currentSeconds < 10) currentSeconds = '0' + currentSeconds;
		if (durationSeconds < 10) durationSeconds = '0' + durationSeconds;
		if (currentMinutes < 10) currentMinutes = '0' + currentMinutes;
		if (durationMinutes < 10) durationMinutes = '0' + durationMinutes;

		currtime.textContent = `${currentMinutes}:${currentSeconds}`;
		duration.textContent = `${durationMinutes}:${durationSeconds}`;
	}
}

playhead_input.addEventListener('change', (e) => {
	// let value = e.target.value;
	let percent = (e.target.value / playhead_input.getAttribute('max')) * 100;

	// console.log(`playhead value: ${value}`);
	// console.log(`playhead percent: ${percent}`);

	playhead_display.setAttribute('style', `width: ${percent}%`);
	playhead_display.setAttribute('aria-valuenow', `${percent}`);
	seekTo();
});

volume_input.addEventListener('input', (e) => {
	let value = e.target.value;
	let percent = `${(e.target.value / volume_input.getAttribute('max')) * 100}%`;

	console.log(`volume value: ${value}`);
	console.log(`volume percent: ${percent}`);

	volume_display.setAttribute('style', `width: ${percent}`);
	volume_display.setAttribute('aria-valuenow', `width: ${percent}`);
});

loadTrack(tracknum);