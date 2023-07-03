const ProfileDescription = ({ name, title, description, socials }) => {
	return (
		<div>
			<h1>{name}</h1>
			<hr></hr>
			<p>{title}</p>
			<p>{description}</p>
		</div>
	)
}

export default ProfileDescription
