import unnamedArt from '@assets/albumArt/unnamed_album.png';
import evolvyArt from '@assets/albumArt/EvolvyBugs.png';
import placeholderArt from '@assets/albumArt/album placeholder.png';

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
const mute = document.querySelector('#mute');

const trackbtnlist = Array.from(document.querySelectorAll('.song'));
const playbtnlist = Array.from(document.querySelectorAll('.bi-play'));

const tracklist = [
	{
		name: "Track 1",
		image: unnamedArt.src,
		path: "/audio/unnamed/track1.mp3"
	},
	{
		name: "Track 2",
		image: unnamedArt.src,
		path: "/audio/unnamed/track2.mp3"
	},
	{
		name: "Track 3",
		image: unnamedArt.src,
		path: "/audio/unnamed/track3.mp3"
	},
	{
		name: "Track 4",
		image: unnamedArt.src,
		path: "/audio/unnamed/track4.mp3"
	},
	{
		name: "Track 5",
		image: unnamedArt.src,
		path: "/audio/unnamed/track5.mp3"
	},
	{
		name: "Track 6",
		image: unnamedArt.src,
		path: "/audio/unnamed/track6.mp3"
	},
	{
		name: "Track 7",
		image: unnamedArt.src,
		path: "/audio/unnamed/track7.mp3"
	},
	{
		name: "Saturday Snowfall",
		image: placeholderArt.src,
		path: "/audio/Solace and Respite/dad 01.01.mp3"
	},
	{
		name: "Evolvy Bugs",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/01 Evolvy Bugs.mp3"
	},
	{
		name: "Embarkation",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/02 Embarkation.mp3"
	},
	{
		name: "Asteroid Belt",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/03 Asteroid Belt.mp3"
	},
	{
		name: "Information Overload",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/04 Information Overload.mp3"
	},
	{
		name: "Cosmic Jungle",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/05 Cosmic Jungle.mp3"
	},
	{
		name: "Tail of a Comet",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/06 Tail of a Comet.mp3"
	},
	{
		name: "For Science",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/07 For Science.mp3"
	},
	{
		name: "Mechanized Ruins",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/08 Mechanized Ruins.mp3"
	},
	{
		name: "Entrails",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/09 Entrails.mp3"
	},
	{
		name: "Evolution Always Wins",
		image: evolvyArt.src,
		path: "/audio/Evolvy Bugs/10 Evolution Always Wins.mp3"
	},
	// {
	// 	name: "---",
	// 	image: "../assets/images/album placeholder.png",
	// 	path: "../assets/audio/Solace and Respite/dad 01.01.mp3"
	// },
	// {
	// 	name: "Underflow",
	// 	image: "../assets/images/album placeholder.png",
	// 	path: "../assets/audio/singles/underflow.mp3"
	// },
	// {
	// 	name: "Flux Pulse",
	// 	image: "../assets/images/album placeholder.png",
	// 	path: "../assets/audio/singles/flux pulse.mp3"
	// }
]

let tracknum = 0;
let playing = false;
let seekTimer;
let muted = false;

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
		image = '../assets/images/album placeholder.png';
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

	playbtn.classList.replace('bi-play-circle-fill', 'bi-pause-circle-fill');

	resetTrackBtns();
	trackbtnlist[tracknum].classList.add('playing');
	playbtnlist[tracknum].classList.replace('bi-play', 'bi-pause-circle');
	playbtnlist[tracknum].classList.replace('bi-play-circle', 'bi-pause-circle');
}

const pauseTrack = () => {
	nowplaying.pause();
	playing = false;

	playbtn.classList.replace('bi-pause-circle-fill', 'bi-play-circle-fill');
	playbtnlist[tracknum].classList.replace('bi-pause-circle', 'bi-play-circle');
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

const resetTrackBtns = () => {
	trackbtnlist.forEach((btn) => {
		btn.classList.remove('playing');
	});

	playbtnlist.forEach((btn) => {
		btn.classList.replace('bi-pause-circle', 'bi-play');
		btn.classList.replace('bi-play-circle', 'bi-play');
	});
}

playhead_input.addEventListener('change', (e) => {
	let percent = (e.target.value / playhead_input.getAttribute('max')) * 100;

	playhead_display.setAttribute('style', `width: ${percent}%`);
	playhead_display.setAttribute('aria-valuenow', `${percent}`);

	seekTo();
});

volume_input.addEventListener('input', (e) => {
	let percent = (e.target.value / volume_input.getAttribute('max')) * 100;

	volume_display.setAttribute('style', `width: ${percent}%`);
	volume_display.setAttribute('aria-valuenow', `${percent}`);

	nowplaying.volume = percent / 100;
});

mute.addEventListener('click', (e) => {
	if (muted) {
		volume_display.setAttribute('style', 'width: 100%');
		volume_display.setAttribute('aria-valuenow', '100');
		nowplaying.volume = 1;
		mute.classList.replace('bi-volume-mute', 'bi-volume-up');
		muted = false;
	}
	else {
		volume_display.setAttribute('style', 'width: 0%');
		volume_display.setAttribute('aria-valuenow', '0');
		nowplaying.volume = 0;
		mute.classList.replace('bi-volume-up', 'bi-volume-mute');
		muted = true;
	}
})

playbtn.addEventListener('click', () => {
	playPauseTrack();
});

rewindbtn.addEventListener('click', () => {
	prevTrack();
});

fforwardbtn.addEventListener('click', () => {
	nextTrack();
});

trackbtnlist.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const this_tracknum = parseInt(btn.getAttribute('data-tracknum'));
		const playpausebtn = btn.querySelector(':scope > .col-2 > i');

		// console.log(`tracknum: ${tracknum}`);
		// console.log(`this_tracknum: ${this_tracknum}`);

		if (this_tracknum === tracknum && playing) {
			pauseTrack();
			// playpausebtn.classList.replace('bi-pause-circle', 'bi-play');
		}
		else if (this_tracknum === tracknum && !playing) {
			playTrack();
			// playpausebtn.classList.replace('bi-play', 'bi-pause-circle');
		}
		else {
			tracknum = this_tracknum;
			loadTrack(tracknum);
			playTrack();
			// playpausebtn.classList.replace('bi-play', 'bi-pause-circle');
			// btn.classList.add('playing');
		}
	});
});

loadTrack(tracknum);