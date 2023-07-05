const AlbumTrack = ({ name }) => {
	return (
		<div className="row px-xl-5 px-md-3 py-0 position-relative border-bottom align-items-center song color-main">
			<div className="col-10 p-3">{name}</div>
			<div className="col-2 p-3 text-end">
				<i className="bi-play"></i>
			</div>
		</div>
	)
}

export default AlbumTrack
