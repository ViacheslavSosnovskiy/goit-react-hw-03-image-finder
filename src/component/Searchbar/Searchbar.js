import { Component } from "react";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    query: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      toast.error("Введите корректно!");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.onInputChange}
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
