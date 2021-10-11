import { Component } from "react";
import { ToastContainer } from "react-toastify";

import Form from "./Form/Form";
import Info from "./Info/Info";

class App extends Component {
  state = {
    pokemon: null,
    loading: false,
    pokemonName: "",
  };

  // componentDidMount() {
  //   // this.setState({ loading: true });

  //   setTimeout(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //       .then((res) => res.json())
  //       .then((pokemon) => this.setState({ pokemon }))
  //       .finally(() => this.setState({ loading: true }));
  //   }, 1000);
  // }

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Form onSubmit={this.handleFormSubmit} />
        <Info pokemonName={this.state.pokemonName} />
        {this.state.loading && <div>Zagryzhaem...</div>}
      </div>
    );
  }
}

export default App;
