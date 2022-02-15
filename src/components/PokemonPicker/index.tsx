import { ReactComponent as Arrow } from 'assets/arrow.svg';
import './styles.css';

const PokemonPicker: React.FC = () => {

	
	return (
		<>
			<div className='pokemon-generation'>
				<div className='generation-title'>
					<Arrow />
					<h1>Generation</h1>
					<Arrow className='flip-horizontal' />
				</div>

				<div className='generation-items'>
					<div className='item'>
						<h2>quadradinho</h2>
					</div>
					<div className='item'>
						<h2>quadradinho</h2>
					</div>
					<div className='item'>
						<h2>quadradinho</h2>
					</div>
					<div className='item'>
						<h2>quadradinho</h2>
					</div>
					<div className='item'>
						<h2>quadradinho</h2>
					</div>
					<div className='item'>
						<h2>quadradinho</h2>
					</div>
				</div>
			</div>

		</>
	);
}

export default PokemonPicker;
