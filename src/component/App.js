import { Component } from "react";
// import { ToastContainer } from "react-toastify";
// import "./App.css";

import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";

const KEY = "22984759-30de173458e69cd83eb69d4b0";
// const URL = `https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

class App extends Component {
  state = {
    showModal: false,
    page: 1,
  };

  componentDidMount() {
    const { page } = this.state;
    fetch(
      `https://pixabay.com/api/?q=что_искать&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div>
        {/* <Searchbar />  */}
        {/* <Button />
        <Loader /> */}
        <Modal onClose={this.toggleModal} />
      </div>
    );
  }
}

export default App;

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
