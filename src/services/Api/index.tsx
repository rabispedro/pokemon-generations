import axios from 'axios';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

const Api = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
});

export default Api;
