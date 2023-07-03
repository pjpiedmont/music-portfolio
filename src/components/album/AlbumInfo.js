import AlbumArt from './AlbumArt'
import AlbumDescription from './AlbumDescription'

const AlbumInfo = ({ art, description }) => {
	return (
		<div className="row p-0">
			<div className="col-lg-6 p-0 border-top">
				<div className="container p-4 p-lg-5">
					<AlbumArt src={art.src} alt={art.alt} />
					<AlbumDescription paragraphs={description} />
				</div>
			</div>
		</div>
	)
}

export default AlbumInfo
