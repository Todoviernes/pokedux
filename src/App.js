import { Col } from 'antd'
import './App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPockemon } from './api';
import { setPockemons as setPockemonsAction } from './actions';

function App({pokemons, setPokemons}) {
  console.log(pokemons)
  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemonsResponse = await getPockemon();
      setPokemons(pokemonsResponse)
    };

    fetchPokemons();
  }, [setPokemons])
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

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPokemons: (value) => dispatch(setPockemonsAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
