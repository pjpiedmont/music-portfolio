import logo from './logo.svg'
import './App.css'
import Profile from './components/profile/Profile'

function App() {
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 		</header>
	// 	</div>
	// )

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
