import './styles.css'
import Api from 'services/Api/index';
import { useEffect, useState } from 'react';

interface PokemonDetailsProps {
	id: string;
}

interface pokemonInfo {
	sprites: string;
	id: number;
	name: string;
	height: number;
	weight: number;
	base_experience: number;
	types: string[];
	abilities: string[];
	moves: string[];
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id }) => {
	const url = '/pokemon/';

	const initialPokemon: pokemonInfo = {
		sprites: '',
		id: 0,
		name: '',
		height: 0,
		weight: 0,
		base_experience: 0,
		types: [],
		abilities: [],
		moves: []
	};

	const [pokemon, setPokemon] = useState(initialPokemon);
		useEffect(() => {
			(async () => {
				await Api.get(url + id)
					.then(({ data }) => {
						const currentPokemon: pokemonInfo = {
							sprites: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default,
							id: data.id,
							name: data.name,
							height: data.height,
							weight: data.weight,
							base_experience: data.base_experience,
							types: data.types.map((type: any) => (type.type.name)),
							abilities: data.abilities.map((ability: any) => (ability.ability.name)),
							moves: data.moves.map((move: any) => (move.move.name)),
						}
						setPokemon(currentPokemon);
					})
					.catch((error) => {
						console.error(error);
					});
			}) ()
		}, [id]);
	
	return (
		<>
			<div className='pokemon-details-container' >

				<img src={pokemon.sprites} alt={`${pokemon.name}`} />

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
					<h2>Types:</h2>
					<div className='category-grid'>
							
						{pokemon.types.map(type => {
							return (
								<div className='pokemon-category-container'>
									<p>{type}</p>
								</div>
							);
						})}

					</div>
				</div>

				<div className='category-container'>
					<h2>Abilities:</h2>
					<div className='category-grid'>

						{pokemon.abilities.map(ability => {
							return (
								<div className='pokemon-category-container'>
									<p>{ability}</p>
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
									<p>{move}</p>
								</div>
							);
						})}
					</div>
				</div>

			</div>
		</>
	);
}

export default PokemonDetails;
