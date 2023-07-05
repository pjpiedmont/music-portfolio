import './App.css'
import Profile from './components/profile/Profile'

function App() {
	return (
		<div>
			<Profile
				img={{
					src: 'assets/images/me-square2.jpg',
					alt: 'Portrait of Parker Piedmont',
				}}
				name="Parker Piedmont"
				title="Composer, Producer, Programmer"
				description="I make music."
				socials={[]}
			/>
		</div>
	)
}

export default App
