import React, { PureComponent } from 'react';
import PokemonErrorView from '../PokemonErrorView/PokemonErrorView';
import PokemonDataView from '../PokemonDataView/PokemonDataView';

export class PokemonInfo extends PureComponent {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const currentName = this.props.pokemonName;

    if (prevName !== currentName) {
      this.setState({ status: 'pending' }); //делаем обнудение занчеия пакемон для ренедера + всключаем лодер
      fetch(`https://pokeapi.co/api/v2/pokemon/${currentName}`)
        .then(res => res.json())
        .then(pokemon =>
          this.setState({ pokemon: pokemon, status: 'resolved' }),
        )
        .catch(error => this.setState({ error: error, status: 'rejected' })); //ловим ошибку
    }
  }
  render() {
    const { pokemon, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <p>'Input name pokemon'</p>;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={pokemonName} />;
    }

    if (status === 'pending') {
      return <p>'Im loading your pokemon'</p>;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
