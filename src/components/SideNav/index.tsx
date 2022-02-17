import React from 'react';

import './styles.css';

const SideNav: React.FC = () => {

	return (
		<>
      <div id='menu'>
        <p>Escolha seu Pokémon:</p>
        <nav>
          <ul id='pokemonsPrimarios'>
            <li>Squirtle</li>
            <li>Charmander</li>
            <li>Bulbasaur</li>
          </ul>
        </nav>
      </div>
		</>
	);
}

export default SideNav;