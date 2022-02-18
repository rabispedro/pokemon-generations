import Logo from 'assets/logo.svg';
import './styles.css';

const Header: React.FC = () => {

	return (
		<>
			<header>
				<img src={Logo} alt='Pokemon logo' />
				<div className='background' />
			</header>
		</>
	);
}

export default Header;