import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => {

                return <PokemonCard name={pokemon.name} key={pokemon.name} />
            })}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(20).fill({
        name: "Ditto",
        url: "https://pokeapi.co/api/v2/pokemon/132/"
    })
}

export default PokemonList;