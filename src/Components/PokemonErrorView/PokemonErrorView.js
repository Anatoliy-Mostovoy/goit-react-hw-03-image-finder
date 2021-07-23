// import React from 'react';
// import errorImg from './unnamed';

export default function PokemonErrorView({ message }) {
  return (
    <div>
      {/* <img src={errorImg} alt="error" width="200" /> */}
      <p>'Oh no! Its wrong pokemon name {message}'</p>
    </div>
  );
}
