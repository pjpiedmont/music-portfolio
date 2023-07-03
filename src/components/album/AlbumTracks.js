import AlbumTrack from './AlbumTrack'

const AlbumTracks = ({ tracks }) => {
	const trackList = tracks.map((track) => (
		<AlbumTrack key={track.id} name={track.name} />
	))

	return <div className="container">{trackList}</div>
}

export default AlbumTracks
