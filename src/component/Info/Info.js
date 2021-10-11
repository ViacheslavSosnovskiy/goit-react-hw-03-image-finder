import { Component } from "react";

class Info extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // const prevName = prevProps.pokemonName
    // const nextName = this.props.pokemonName

    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then((res) => res.json())
          .then((pokemon) => this.setState({ pokemon }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        {this.state.loading && <h1>Загружаем...</h1>}
        {!this.props.pokemonName && <p>Введите имя покемона</p>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
      </div>
    );
  }
}

export default Info;
