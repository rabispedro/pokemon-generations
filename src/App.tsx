import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<PokemonDetails id='898'/>
			<Footer />
		</>
	);
}

export default App;
