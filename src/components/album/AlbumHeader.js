const AlbumHeader = ({ title }) => {
	return (
		<div className="row p-0">
			<div className="col-12 p-3 text-center border-bottom bg-accent color-accent">
				<h1>{title}</h1>
			</div>
		</div>
	)
}

export default AlbumHeader
