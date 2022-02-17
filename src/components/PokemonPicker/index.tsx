import { ReactComponent as Arrow } from 'assets/arrow.svg';
import './styles.css';

interface pokemonQuantity {
	maxNumber: number;
	pokemon: pokemonImage[]
}

interface pokemonImage {
	id: string;
	name: string;
	sprite: string;
}

const PokemonPicker: React.FC = () => {
	const pokemon: pokemonQuantity = {
		maxNumber: 1,
		pokemon: [
			{
				id: '1',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			}
		]
	};

	console.log("LISTA DE POKEMONS:", pokemon);
	
	return (
		<>
			<div className='pokemon-generation'>
				<div className='generation-title'>
					<Arrow />
					<h1>Generation</h1>
					<Arrow className='flip-horizontal' />
				</div>

				<div className='pokemon-container'>
					<h2>qtd: {pokemon.maxNumber}</h2>

					{pokemon.pokemon.map(poke => {
						return (
							<div className='pokemon-icon'>
								<h3>{poke.id}</h3>
								<h3>{poke.name}</h3>
								<img src={poke.sprite} alt={poke.name} />
							</div>
						);
					})}
				</div>

			</div>
		</>
	);
}

export default PokemonPicker;
