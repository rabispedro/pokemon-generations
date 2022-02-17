import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import PokemonPicker from 'components/PokemonPicker';
import { useState } from 'react';
import './App.css';

function App() {
	const [pokemonId, setPokemonId] = useState('3')
	
	return (
		<>
			<Header />
			<div style={
				{
					display: 'flex',

				}
			}>
				{/* <PokemonDetails id={pokemonId} />
				<PokemonPicker /> */}
			</div>
			<Footer />
		</>
	);
}

export default App;
