import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonDetails from 'components/PokemonDetails';
import PokemonPicker from 'components/PokemonPicker';
import SideNav from 'components/SideNav';
import Card from 'components/Card';
import './App.css';

function App() {
	return (
		<>
			<Header />
			{/*<PokemonDetails /> */}
			<Card/>
			<SideNav />
			{/* <PokemonPicker /> */}
			<Footer />
		</>
	);
}

export default App;
