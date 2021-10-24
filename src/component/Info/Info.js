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

// ============================================================= //
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

// ===================================================

// class App extends Component {
//   state = {
//     query: "",
//   };

//   handleFormSubmit = (query) => {
//     this.setState({ query });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery query={this.state.query} />
//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }

// export default App;

// =================================
// import { Component } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// // spiner
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// // components
// import ImageGallery from "./ImageGallery";
// import Searchbar from "./Searchbar";
// import Button from "./Button";
// import Modal from "./Modal";

// import fetchPicture from "../services/fetchApi";

// class App extends Component {
//   state = {
//     query: "",
//   page: 1,
//   pictures: [],
//   error: null,
//   status: "IDLE",
//   largeImageURL: null,
//   tags: null,
//   showModal: false,
// };

// componentDidUpdate(prevProps, prevState) {
//   const prevQuery = prevState.query;
//   const nextQuery = this.state.query;

//   if (prevQuery !== nextQuery) {
//     // this.setState({ pictures: [], page: 1 });

//     this.getPictureFetch();
//   }
// }

//   getPictureFetch = () => {
//     const KEY = "22984759-30de173458e69cd83eb69d4b0";
//     const BASE_URL = "https://pixabay.com/api/";
//     const { query, page } = this.state;
//     const url = `${BASE_URL}?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//     this.setState({ status: "PENDING" });

//     fetchPicture(url)
//       .then((res) => res.json())
//       .then((array) => {
//         const pictures = array.hits;
//         // console.log("array", array);
//         // console.log("array.hits", array.hits);
//         if (pictures.length < 1) {
//           toast.error("Ничего не найдено");
//         }

//         this.setState((prevState) => ({
//           pictures: [...prevState.pictures, ...pictures],
//           status: "RESOLVED",
//           page: prevState.page + 1,
//         }));
//         if (page !== 1) {
//           this.scroll();
//         }
//       })
//       .catch((error) => this.setState({ error, status: "REJECTED" }));
//   };

//   handleFormSubmit = (query) => {
//     this.setState({ query, page: 1 });
//   };

//   onLoadMore = () => {
//     this.getPictureFetch();
//   };

//   scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   openModalImage = ({ largeImageURL, tags }) => {
//     this.setState({ largeImageURL, tags });
//     this.toggleModal();
//   };

//   render() {
//     const { pictures, showModal, largeImageURL, tags, status } = this.state;
//     const showLodeMore = pictures.length > 0 && pictures.length >= 12;

//     return (
//       <>
//         <div>
//           <Searchbar onSubmit={this.handleFormSubmit} />

//           {status === "PENDING" && (
//             <Loader
//               type="ThreeDots" // Hearts
//               color="#00BFFF"
//               // secondaryColor="Grey"
//               height={100}
//               width={100}
//               timeout={3000}
//             />
//           )}
//           <ImageGallery
//             pictures={pictures}
//             openModalImage={this.openModalImage}
//           />
//           {showLodeMore && <Button onLoadMore={this.onLoadMore} />}
//           {showModal && (
//             <Modal onClose={this.toggleModal}>
//               <img src={largeImageURL} alt={tags} />
//             </Modal>
//           )}
//         </div>
//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }

// export default App;

// ================ AXIOS ============================//
// import axios from "axios";

// axios.defaults.baseURL = "https://pixabay.com/api/";
// const BASE_URL = "https://pixabay.com/api/";
// const KEY = "22984759-30de173458e69cd83eb69d4b0";

// const fetchPicture = ({ query, page }) => {
//   const url = `${BASE_URL}?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//   const { data } = axios.get(url);
//   const pictures = data.hits;
//   console.log(data.hits);
//   return pictures;
// };

// export default fetchPicture;

// ====================
// const fetchPictures = (query, page) => {
//   const KEY = "22984759-30de173458e69cd83eb69d4b0";

//   return fetch(
//     `https://pixabay.com/api/?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return response;
//   });
// };

// export default fetchPictures;
