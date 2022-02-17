// import PokemonContext from 'contexts/PokemonContext';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import './App.css';

function App() {
	return (
		<>
			<Header />
			{/* <PokemonContext> */}

			<PokemonDetails id='2'/>
			
			{/* </PokemonContext> */}
			<Footer />
		</>
	);
}

export default App;
