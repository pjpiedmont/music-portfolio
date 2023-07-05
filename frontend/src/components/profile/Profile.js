/**
 * Profile.js
 *
 * Defines the profile section of the website. Includes a profile picture,
 * a description, and a list of social media links.
 *
 * img: object:
 * 	{
 * 		src: string
 * 		alt: string
 * 	}
 * name: string
 * title: string
 * description: string
 * socials: array of objects:
 * 	[
 * 		{
 * 			href: string
 * 			icon: string
 * 		}
 * 	]
 */

import ProfileDescription from './ProfileDescription'
import ProfilePicture from './ProfilePicture'

const Profile = ({ img, name, title, description, socials }) => {
	return (
		<div>
			<ProfilePicture src={img.src} alt={img.alt} />
			<ProfileDescription
				name={name}
				title={title}
				description={description}
				socials={socials}
			/>
		</div>
	)
}

export default Profile
