import React, { PureComponent } from 'react';
import { Modal } from './Modal/Modal';
import { PokemonForm } from './PokemonForm/PokemonForm';
import { ToastContainer } from 'react-toastify';
import { PokemonInfo } from './PokemonInfo/PokemonInfo';
export class App extends PureComponent {
  state = {
    pokemonName: '',
    showModal: false,
  };

  handelFormSubmit = pokemonName => {
    this.setState({ pokemonName: pokemonName });
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   setTimeout(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //       .then(res => res.json())
  //       .then(pokemon => {
  //         this.setState({ pokemon: pokemon });
  //       })
  //       .finally(() => {
  //         this.setState({ loading: false });
  //       });
  //   }, 2000);
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => {
      return { showModal: !showModal };
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <h1>Hello Tolik</h1>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <h2>Hi, its modal content</h2>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        <div>
          <PokemonForm submit={this.handelFormSubmit} />
          <PokemonInfo pokemonName={this.state.pokemonName} />
          <ToastContainer />
        </div>
      </>
    );
  }
}

// {this.state.loading && <p>Im loading your fetch</p>}
// {this.state.pokemon && (
//   <div>Here is pokemon {this.state.pokemon.name}</div>
// )}
