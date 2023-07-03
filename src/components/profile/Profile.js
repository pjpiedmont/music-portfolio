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
