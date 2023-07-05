/**
 * ProfileDescription.js
 *
 * Describes the subject of the profile.
 *
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

import ProfileSocials from './ProfileSocials'

const ProfileDescription = ({ name, title, description, socials }) => {
	return (
		<div>
			<h1>{name}</h1>
			<hr></hr>
			<p>{title}</p>
			<p>{description}</p>
			<ProfileSocials socials={socials} />
		</div>
	)
}

export default ProfileDescription
