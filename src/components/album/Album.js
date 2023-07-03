import AlbumHeader from './AlbumHeader'
import AlbumInfo from './AlbumInfo'
import AlbumTracks from './AlbumTracks'

const Album = ({ title, art, description, tracks }) => {
	return (
		<div className="container my-5 brder rounded-3 overflow-hidden">
			<AlbumHeader title={title} />
			<AlbumInfo art={art} description={description} />
			<AlbumTracks tracks={tracks} />
		</div>
	)
}

export default Album
