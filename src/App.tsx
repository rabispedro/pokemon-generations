import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import PokemonPicker from 'components/PokemonPicker';
import SideNav from 'components/SideNav';
import Card from 'components/Card';
import './App.css';
import { useState } from 'react';
import PokemonGrowth from 'components/PokemonGrowth';

function App() {
	const [pokemonId, setPokemonId] = useState('10');
	const [pokemonIds, setPokemonIds] = useState(['1', '2', '3']);
	
	return (
		<>
			<Header />

			{/* <Card/>
			<SideNav /> */}

			<div
				style={
					{
						display: 'flex'
					}
				}
			>

			<PokemonDetails id={pokemonId} />
			<PokemonPicker />
			<PokemonGrowth id={pokemonId} />
			</div>

			<Footer />
		</>
	);
}

export default App;
