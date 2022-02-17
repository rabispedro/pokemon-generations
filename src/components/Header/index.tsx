import './styles.css';

const Header: React.FC = () => {

	return (
		<>
			<header>
				<div className='upperBackground'></div>
				<div className='lowerBackground'>
					<p id='titulopagina'>Treinar Pokémon</p>
				</div>
			</header>
		</>
	);
}

export default Header;