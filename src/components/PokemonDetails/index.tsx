import './styles.css'
import Api from 'services/Api/index';
import { useEffect, useState } from 'react';

interface PokemonDetailsProps {
	id: string;
}

// interface pokemonInfo {
// 	id: number;
// 	name: string;
// 	base_experience: number;
// 	height: number;
// 	weight: number;
// 	abilities: pokemonAbilities[];
// 	moves: pokemonMoves[];
// 	types: pokemonTypes[];
// 	sprites: string;
// }

// interface pokemonSprites {
// 	versions: pokemonGames[];
// }

// interface pokemonGames {
// 	generations: pokemonGameGeneration;
// }

// interface pokemonGameGeneration {
// 	name: string;
// }

// interface pokemonGifs {
// 	name: string;
// }

// interface pokemonAbilities {
// 	ability: pokemonName;
// }

// interface pokemonMoves {
// 	move: pokemonName;
// }

// interface pokemonTypes {
// 	type: pokemonName;
// }

// interface pokemonName {
// 	name: string;
// }

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id }) => {
	const url = '/pokemon/';
	const [currentPokemon, setCurrentPokemon] = useState({});

	useEffect(() => {
		(async () => {
			
			const poke = await fetchPokemon(id);
			console.log("Poke: ", poke);
		}) ()
	}, []);

	let pokemon = {};
	const fetchPokemon = async (id: string) => {
		await Api.get(url + id)
			.then((response: any) => {
				console.log("Pokemon: ", response.data);
				setCurrentPokemon(response.data);
				console.log("CurrentPokemon: ", currentPokemon);
				pokemon = response.data;
				console.log("Pokemon definitivo: ", pokemon);
				return response.data;
			})
			.catch((err: any) => {
				console.error(err);
			})
			// return pokemon;
	}

	return (
		<>
			<div className='pokemon-details-container'>
				<img src={currentPokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`${pokemon.name}`} />
				<h2>{currentPokemon.name}</h2>

				
				{/* <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`${pokemon.name}`} />

				<div className='pokemon-info-container'>
					<p>#{pokemon.id}</p>
					<h2>{pokemon.name}</h2>
				</div>

				<div className='pokemon-info-container'>
					<h2>Height:</h2>
					<p>{pokemon.height / 10}m</p>
				</div>

				<div className='pokemon-info-container'>
					<h2>Weight:</h2>
					<p>{pokemon.weight / 10}kg</p>
				</div>

				<div className='pokemon-info-container'>
					<h2>Base XP:</h2>
					<p>{pokemon.base_experience}</p>
				</div>
			
				<div className='category-container'>
					<h2>Abilities:</h2>
					<div className='category-grid'>

						{pokemon.abilities?.map(ability => {
							return (
								<div className='pokemon-category-container'>
									<p>{ability.ability.name}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className='category-container'>
					<h2>Moves:</h2>
					<div className='category-grid'>

						{pokemon.moves.map(move => {
							return (
								<div className='pokemon-category-container'>
									<p>{move.move.name}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className='category-container'>
					<h2>Types:</h2>
					<div className='category-grid'>
							
						{pokemon.types.map(type => {
							return (
								<div className='pokemon-category-container'>
									<p>{type.type.name}</p>
								</div>
							);
						})}
					</div>
				</div> */}

			</div>
		</>
	);
}

export default PokemonDetails;
