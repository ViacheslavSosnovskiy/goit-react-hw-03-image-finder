import { Component } from "react";
import { ToastContainer } from "react-toastify"; // toast
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// // spiner
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// // components
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Modal from "./Modal";

import fetchPicture from "../services/fetchApi";

class App extends Component {
  state = {
    query: "",
    page: 1,
    pictures: [],
    error: "",
    largeImageURL: "",
    tags: "",
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.getPictureFetch();
    }

    if (this.state.page !== 1 && prevState.page !== this.state.page) {
      this.scroll();
    }
  }

  getPictureFetch = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    fetchPicture({ query, page })
      .then((pictures) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query, page: 1, pictures: [] });
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
    const { pictures, showModal, largeImageURL, tags, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          pictures={pictures}
          openModalImage={this.openModalImage}
        />
        {isLoading ? (
          <Loader
            type="ThreeDots" // Hearts
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          this.state.page !== 1 && <Button onLoadMore={this.getPictureFetch} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
