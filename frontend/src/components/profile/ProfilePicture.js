/**
 * ProfilePictures.js
 *
 * Defines the profile picture.
 *
 * src: string
 * alt: string
 */

const ProfilePicture = ({ src, alt }) => {
	return (
		<div>
			<img src={src} alt={alt}></img>
		</div>
	)
}

export default ProfilePicture
