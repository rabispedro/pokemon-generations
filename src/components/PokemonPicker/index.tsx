import Arrow from 'assets/arrow.svg';
import './styles.css';

interface PokemonPickerProps {
	setPokemon: Function;
}

interface pokemonQuantity {
	pokemon: pokemonImage[]
}

interface pokemonImage {
	id: string;
	name: string;
	sprite: string;
}

const PokemonPicker: React.FC<PokemonPickerProps> = ({ setPokemon }) => {
	const pokemons: pokemonQuantity = {
		pokemon: [
			{
				id: '1',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '2',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '3',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '4',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '5',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '6',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '7',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '8',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '9',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '10',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '11',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '12',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '13',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '14',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '15',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '16',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '17',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
		]
	};

	console.log("LISTA DE POKEMONS:", pokemons);
	
	return (
		<>
			<div className='pokemon-generation'>

				<div className='generation-title'>
					<img src={Arrow} alt='previous item arrow' />
					<h2>Generation</h2>
					<img src={Arrow} className='flip-horizontal' alt='next item arrow' />
				</div>

				<div className='pokemon-icon-container'>
					<div className='icon-grid'>

						{pokemons.pokemon.map(poke => {
							return (
								<div
									className='pokemon-icon'
									onClick={() => {setPokemon(poke.id)}}
								>
									<img src={poke.sprite} alt={poke.name} />
								</div>
							);
						})}
					</div>
				</div>

				{/* <div className='pokemon-quantity'>
					<h2>qtd: {pokemons.pokemon.length}</h2>
				</div> */}

			</div>
		</>
	);
}

export default PokemonPicker;
