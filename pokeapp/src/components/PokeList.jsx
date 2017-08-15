import React from 'react';

import Pokemon from './Pokemon';

const PokeList = props => {
  return (
    <div className="poke-list">
      <ul>
        {props.pokeList.map((pokemon, index) => {
          return (
            <Pokemon
              key={index}
              name={pokemon.name}
              url={pokemon.url}
              getPokeData={props.getPokeData}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PokeList;