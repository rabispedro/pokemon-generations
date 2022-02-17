import './styles.css'
import Api from 'services/Api/index';
import { useEffect, useState } from 'react';

interface PokemonDetailsProps {
	id: string;
}

interface pokemonInfo {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	weight: number;
	abilities: string[];
	moves: string[];
	types: string[];
	sprites: string;
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
		abilities: [],
		moves: [],
		types: []
	};

	const [pokemon, setPokemon] = useState(initialPokemon);
		useEffect(() => {
			(async () => {
				await Api.get(url + id)
					.then(({ data }) => {
						const currentPokemon: pokemonInfo = {
							id: data.id,
							name: data.name,
							base_experience: data.base_experience,
							height: data.height,
							weight: data.weight,
							abilities: data.abilities.map((ability: any) => (ability.ability.name)),
							moves: data.moves.map((move: any) => (move.move.name)),
							types: data.types.map((type: any) => (type.type.name)),
							sprites: data.sprites.versions['generation-v']['black-white'].animated.front_default
						}
						setPokemon(currentPokemon);
						console.log("Data", data);
					})
					.catch((err) => {
						console.error(err);
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

			</div>
		</>
	);
}

export default PokemonDetails;
