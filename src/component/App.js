import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
// import Button from "./Button";
// import Loader from "./Loader";
// import Modal from "./Modal";

import FetchApi from "../services/FetchApi";

class App extends Component {
  state = {
    query: "",
    page: 1,
    error: null,
    status: "IDLE",
    // showModal: false,
    pictures: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.state.query;
    const { page } = this.state;

    if (prevQuery !== nextQuery) {
      this.setState({ status: "PENDING" });

      FetchApi.FetchImages(nextQuery, page)
        .then((pictures) => this.setState({ prevState, status: "RESOLVED" }))
        .catch((error) => this.setState({ error, status: "REJECTED" }));
      // .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { query, error, status } = this.state;
    // const { query } = this.props;

    if (status === "IDLE") {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <h2>Введите что-то в поиск</h2>;
          <ToastContainer autoClose={3000} />
        </>
      );
    }

    if (status === "PENDING") {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
          <ToastContainer autoClose={3000} />
        </>
      );
    }

    if (status === "REJECTED") {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <h2>{error.message}</h2>;
          <ToastContainer autoClose={3000} />
        </>
      );
    }

    if (status === "RESOLVED") {
      return (
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />

          <ImageGallery query={query} />

          <ToastContainer autoClose={3000} />
        </div>
      );
    }
  }
}

export default App;

//         <Button />
//         <Loader />
//         <Modal onClose={this.toggleModal} />

// ======================================================== //
// import { Component } from "react";
// import { ToastContainer } from "react-toastify";

// import Form from "./Form/Form";
// import Info from "./Info/Info";

// class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     pokemonName: "",
//   };

//   // componentDidMount() {
//   //   // this.setState({ loading: true });

//   //   setTimeout(() => {
//   //     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   //       .then((res) => res.json())
//   //       .then((pokemon) => this.setState({ pokemon }))
//   //       .finally(() => this.setState({ loading: true }));
//   //   }, 1000);
//   // }

//   handleFormSubmit = (pokemonName) => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <div>
//         <ToastContainer autoClose={3000} />
//         <Form onSubmit={this.handleFormSubmit} />
//         <Info pokemonName={this.state.pokemonName} />
//         {this.state.loading && <div>Zagryzhaem...</div>}
//       </div>
//     );
//   }
// }

// export default App;
