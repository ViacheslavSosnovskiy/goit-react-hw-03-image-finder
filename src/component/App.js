import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "./App.css";

import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
// import Button from "./Button";
// import Loader from "./Loader";
// import Modal from "./Modal";

class App extends Component {
  state = {
    query: "",
    showModal: false,
  };

  // componentDidMount() {
  //   // const { page } = this.state;
  //   fetch()
  //     // `${BASE_URL}?q=###&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     .then((res) => res.json())
  //     .then(console.log);
  // }

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery query={this.state.query} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;

//          <Searchbar />
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
