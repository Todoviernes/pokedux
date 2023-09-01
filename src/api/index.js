import axios from 'axios';

export const getPockemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=152')
        .then(response => response.data.results)
        .catch(error => console.log(error));
    };
