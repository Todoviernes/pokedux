import { Col } from 'antd'
import './App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect, useState } from 'react';
import { getPockemon } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemonsResponse = await getPockemon();
      setPokemons(pokemonsResponse)
    };

    fetchPokemons();
  }, [])
  return (
    <div className="App">
      <Col span={8} offset={8} style={{textAlign: 'center'}}>
        <img src={logo} className="logo" alt="logo" />
      </Col>
      <Col span={8} offset={8} style={{textAlign: 'center'}}>
       <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
