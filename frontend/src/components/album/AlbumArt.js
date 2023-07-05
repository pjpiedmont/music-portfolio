const AlbumArt = ({ src, alt }) => {
	return (
		<div className="container p-0 album-art">
			<img src={src} alt={alt}></img>
		</div>
	)
}

export default AlbumArt
