import { useEffect, useState } from 'react';
import Up from 'assets/up.svg';
import Reset from 'assets/reset.svg';
import './styles.css';
import Api from 'services/Api';

interface PokemonGrowthProps {
	id: string;
}

const PokemonGrowth: React.FC<PokemonGrowthProps> = ({ id }) => {
	const URL = 'https://pokeapi.co/api/v2/pokemon/'
	const GROW_RATE = 5;
	
	const [progress, setProgress] = useState(0);
	const [pokemonGif, setPokemonGif] = useState('');
	const [pokemonName, setPokemonName] = useState('');
	
	useEffect(() => {
		(async () => {
			await Api.get(URL + id)
				.then(({ data }) => {
					const gif = data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default;
					setPokemonGif(gif);
					setPokemonName(data.name);
				})
				.catch((error) => {
					console.error(error);
				});
		}) ()
	} ,[id]);

	const clamp = (min: number, max: number, value: number) => {
		return Math.min(Math.max(min, value), max);
	}

	return (
		<>
			<div className='growth-container'>

				<img src={pokemonGif} alt="Pokemon GIF" />
				<h2>{pokemonName}</h2>

				<div className='progressbar-bound'>
						<div className='progressbar-value'
							style={
								{
									width: `${clamp(0, 100, progress)}%`
								}
							}
						/>
				</div>

				<div className='progressbar-buttons-container'>
					<button
						className='progressbar-buttons'
						id='up-button'
						onClick={() => {
							((progress + GROW_RATE) <= 100)
								? setProgress(progress + GROW_RATE)
								: setProgress(100)
						}}
						>
						<img src={Up} alt="up" />
						XP
					</button>

					<button
						className='progressbar-buttons'
						id='reset-button'
						onClick={() => {
							setProgress(0)
						}}
					>
						<img src={Reset} alt="up" />
						Reset
					</button>

					</div>
			</div>
		</>
	);
}

export default PokemonGrowth;
