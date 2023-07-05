/**
 * ProfileSocials.js
 *
 * Defines a list of social media links using icons.
 *
 * socials: array of objects:
 * 	[
 * 		{
 * 			href: string
 * 			icon: string
 * 		}
 * 	]
 */

const ProfileSocials = ({ socials }) => {
	const socialsList = socials.map((social) => (
		<a href={social.href} target="_blank" rel="noreferrer">
			<i className={`bi-${social.icon}`}></i>
		</a>
	))

	return <div>{socialsList}</div>
}

export default ProfileSocials
