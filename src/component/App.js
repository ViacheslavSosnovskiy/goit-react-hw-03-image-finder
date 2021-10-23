import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// spiner
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// components
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Modal from "./Modal";

// import fetchPicture from "../services/fetchApi";

class App extends Component {
  state = {
    query: "",
    page: 1,
    pictures: [],
    error: null,
    status: "IDLE",
    largeImageURL: null,
    tags: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.setState({ pictures: [], page: 1 });

      this.fetchPicture();
    }
  }

  fetchPicture = () => {
    const KEY = "22984759-30de173458e69cd83eb69d4b0";
    const BASE_URL = "https://pixabay.com/api/";
    const { query, page } = this.state;
    const url = `${BASE_URL}?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ status: "PENDING" });

    fetch(url)
      .then((res) => res.json())
      .then((array) => {
        const pictures = array.hits;
        console.log("array", array);
        console.log("array.hits", array.hits);
        if (pictures.length < 1) {
          toast.error("Ничего не найдено");
        }

        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          status: "RESOLVED",
          page: prevState.page + 1,
        }));
        if (page !== 1) {
          this.scroll();
        }
      })
      .catch((error) => this.setState({ error, status: "REJECTED" }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query, page: 1 });
  };

  onLoadMore = () => {
    this.fetchPicture();
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModalImage = ({ largeImageURL, tags }) => {
    this.setState({ largeImageURL, tags });
    this.toggleModal();
  };

  render() {
    const { pictures, showModal, largeImageURL, tags, status } = this.state;
    const showLodeMore = pictures.length > 0 && pictures.length >= 12;

    return (
      <>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {status === "PENDING" && (
            <Loader
              type="ThreeDots" // Hearts
              color="#00BFFF"
              // secondaryColor="Grey"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
          <ImageGallery
            pictures={pictures}
            openModalImage={this.openModalImage}
          />
          {showLodeMore && <Button onLoadMore={this.onLoadMore} />}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} alt={tags} />
            </Modal>
          )}
        </div>
        <ToastContainer autoClose={3000} />
      </>
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
