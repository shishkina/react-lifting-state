import React from 'react';

const PokeStats = (props) => {
  return (
    <div className="poke-stats">
      <img src={props.pic} alt={props.name} />
      <h1>{props.name}</h1>
      <h3>Weight: {props.weight}</h3>
      <h3>Experience: {props.experience}</h3>
    </div>
  )
}

export default PokeStats;