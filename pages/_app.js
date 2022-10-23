import '../styles/globals.css';
import 'animate.css';
import NavBar from '../components/NavBar.jsx';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
