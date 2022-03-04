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
	// const LIMIT = 850;
	// const OFFSET = 20;

	// const URL = 'https://pokeapi.co/api/v2/pokemon/';
	// const PAGE = `?limit=${LIMIT}&offset=${OFFSET}`;

	// const [currentPage, setCurrentPage] = useState(1);

	// const defaultPokemons: pokemonQuantity = {
	// 	pokemon: []
	// };

	// const [pokemons, setPokemons] = useState(defaultPokemons);

	// useEffect(() => {
	// 	(async () => {
	// 		for(let cont = currentPage; cont <= LIMIT; cont += 1) {

	// 			let currentPokemon: pokemonQuantity = {
	// 				pokemon: [],
	// 			}

	// 			await Api.get(URL + cont)
	// 				.then(({ data }) => {
	// 					console.log("POKEMON [" + cont + "]:", data);
						
	// 					const currentPokemonImage: pokemonImage = {
	// 						id: data.id,
	// 						name: data.name,
	// 						sprite: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default
	// 					}

	// 					console.log("POKEMON IMAGE [" + cont  + "]:", currentPokemonImage);
	// 					currentPokemon.pokemon.push(currentPokemonImage);
						
	// 					console.log("POKEMON LIST: [" + cont  + "]:", currentPokemon);
						
	// 				})
	// 				.then(() => {
	// 					setPokemons(currentPokemon);
	// 				})
	// 				.catch((error) => {
	// 					console.error(error);
	// 				});
	// 		}
	// 	}) ()
	// } ,[]);

	const pokemons: pokemonQuantity = {
		pokemon: [
			{
				id: '1',
				name: 'bulbasaur',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'
			},
			{
				id: '2',
				name: 'ivysaur',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif'
			},
			{
				id: '3',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif'
			},
			{
				id: '4',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif'
			},
			{
				id: '5',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif'
			},
			{
				id: '6',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif'
			},
			{
				id: '7',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif'
			},
			{
				id: '8',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif'
			},
			{
				id: '9',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif'
			},
			{
				id: '10',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif'
			},
			{
				id: '11',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif'
			},
			{
				id: '12',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif'
			},
			{
				id: '13',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif'
			},
			{
				id: '14',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif'
			},
			{
				id: '15',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif'
			},
			{
				id: '16',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif'
			},
			{
				id: '17',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif'
			},
			{
				id: '18',
				name: 'poke1',
				sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif'
			},
		]
	};

	console.log("LISTA DE POKEMONS:", pokemons);
	
	return (
		<>
			<div className='pokemon-generation'>

				<div className='generation-title'>
					<img src={Arrow} alt='previous item arrow' 
						// onClick={() => {
						// 	((currentPage - OFFSET) >= 0)
						// 	? setCurrentPage(currentPage - OFFSET)
						// 	: setCurrentPage(0)
						// }}
					/>
					<h2>Generation</h2>
					<img src={Arrow} className='flip-horizontal' alt='next item arrow' 
						// onClick={() => {
						// 	((currentPage + OFFSET) <= LIMIT)
						// 	? setCurrentPage(currentPage + OFFSET)
						// 	: setCurrentPage(LIMIT)
						// }}
					/>
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
