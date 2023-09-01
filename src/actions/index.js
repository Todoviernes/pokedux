import { SET_POKEMONS } from './types';

export const setPockemons = (payload) => {
    return {
        type: SET_POKEMONS,
        payload
    }
}