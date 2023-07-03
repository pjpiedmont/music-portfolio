const ProfilePicture = ({ src, alt }) => {
	return (
		<div className="container profile-pic p-0">
			<img src={src} alt={alt}></img>
		</div>
	)
}

export default ProfilePicture
