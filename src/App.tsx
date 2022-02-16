import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import PokemonPicker from 'components/PokemonPicker';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<PokemonDetails />
			{/* <PokemonPicker /> */}
			<Footer />
		</>
	);
}

export default App;
