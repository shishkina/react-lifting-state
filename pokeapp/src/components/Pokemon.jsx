import React from 'react';

const Pokemon = props => {
  return (
    <li onClick={() => props.getPokeData(props.url)}>
      {props.name}
    </li>
  );
};

export default Pokemon;
