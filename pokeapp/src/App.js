import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import PokeList from './components/PokeList';
import PokeStats from './components/PokeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeList: null,
      apiDataLoaded: false,
      currentPokemon: null,
    };
    this.getPokeData = this.getPokeData.bind(this);
  }

  componentDidMount() {
    axios.get('http://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
      this.setState({
        pokeList: res.data.results,
        apiDataLoaded: true,
      });
    });
  }

  getPokeData(url) {
    axios.get(url).then(res => {
      const pokeInfo = {
        pic: res.data.sprites.front_default,
        weight: res.data.weight,
        experience: res.data.base_experience,
        name: res.data.name,
      };
      this.setState({
        currentPokemon: pokeInfo,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.apiDataLoaded
          ? <PokeList
              pokeList={this.state.pokeList}
              getPokeData={this.getPokeData}
            />
          : 'Loading...'}
        {this.state.currentPokemon
          ? <PokeStats
              name={this.state.currentPokemon.name}
              weight={this.state.currentPokemon.weight}
              experience={this.state.currentPokemon.experience}
              pic={this.state.currentPokemon.pic}
            />
          : 'Please choose a pokemon!'}
      </div>
    );
  }
}

export default App;
