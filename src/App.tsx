import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import PokemonPicker from 'components/PokemonPicker';
import PokemonGrowth from 'components/PokemonGrowth';
import { useState } from 'react';
import './App.css';

function App() {
	const [pokemonId, setPokemonId] = useState('600');
	const [pokemonIds, setPokemonIds] = useState(['1', '2', '3']);
	
	return (
		<>
			<Header />

			<div
				style={
					{
						display: 'flex'
					}
				}
			>

			<PokemonDetails id={pokemonId} />
			<PokemonPicker setPokemon={setPokemonId} />
			<PokemonGrowth id={pokemonId} />
			</div>

			<Footer />
		</>
	);
}

export default App;
