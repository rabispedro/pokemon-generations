import React from 'react';

import './styles.css';

const Card: React.FC = () => {
	return (
		<>
			<div id = 'card'>
				<div id='cardItens'>
					<div id ='pokecard'>
						<div id='tituloCard'>
							<img src="favicon.svg" alt=""/>
							<p>NomePokémon</p>
						</div>
						<div id='background'>
						</div>
							<div id='containerbarra'>
								<div id='barra'>
								</div>
							</div>						
						<button id='treinar'>
							Treinar Pokémon
						</button>
					</div>
					<div id='pokemonInfo'>
						PokémonInfo
						<ul id='itens'>
							<li>Altura:</li>
							<li>Peso:</li>
							<li>Categoria:</li>
							<li>Habilidades:</li>
							<li>Tipo:</li>
						</ul>
						<p>Descrição</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
