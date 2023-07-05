const AlbumDescription = ({ paragraphs }) => {
	const paragraphList = paragraphs.map((paragraph, i) => (
		<p key={i}>{paragraph}</p>
	))

	return <div>{paragraphList}</div>
}

export default AlbumDescription
