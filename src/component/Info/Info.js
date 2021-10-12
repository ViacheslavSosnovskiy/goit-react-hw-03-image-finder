import { Component } from "react";

class Info extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    // const prevName = prevProps.pokemonName
    // const nextName = this.props.pokemonName

    if (prevProps.pokemonName !== this.props.pokemonName) {
      // включаеться скелетон
      this.setState({ stattus: "pending" });

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then((response) => {
            // если ОК возвращаем результат парса, в противном случае возвращаем -
            // Promise.reject(new Error(нет покемана с {name-pokemona})) и кидаем новую ошибку
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`нет покемана с именем ${this.props.pokemonName}`)
            );
          })
          .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
          .catch((error) => this.setState({ error, status: "rejected" }));
        // выключаеться скелетон
        // .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    if (this.state.status === "idle") {
      return <p>Введите имя покемона</p>;
    }

    if (this.state.status === "pending") {
      return <h1>Загружаем...</h1>;
    }

    if (this.state.status === "rejected") {
      return <h3>{this.state.error.message}</h3>;
    }

    if (this.state.status === "resolved") {
      return (
        <div>
          <p>{this.state.pokemon.name}</p>
          <img
            src={this.state.pokemon.sprites.other["dream_world"].front_default}
            alt={this.state.pokemon.name}
            width="200"
          />
        </div>
      );
    }

    return (
      <div>
        {this.state.error && (
          // <h3>Покемона с именем {this.props.pokemonName} нет!</h3>
          <h3>{this.state.error.message}</h3>
        )}
        {this.state.loading && <h1>Загружаем...</h1>}
        {!this.props.pokemonName && <p>Введите имя покемона</p>}
        {this.state.pokemon && (
          <div>
            <p>{this.state.pokemon.name}</p>
            <img
              src={
                this.state.pokemon.sprites.other["dream_world"].front_default
              }
              alt={this.state.pokemon.name}
              width="200"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Info;
