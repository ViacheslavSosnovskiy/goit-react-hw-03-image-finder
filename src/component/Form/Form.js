// import { Component } from "react";
// // import { toast } from "react-toastify";

// class Form extends Component {
//   state = {
//     pokemonName: "",
//   };

//   handleNameChange = (e) => {
//     this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (this.state.pokemonName.trim() === "") {
//       alert("введите имя покемона!");
//       // toast.error("введите имя покемона!");
//       return;
//     }
//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: "" });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleNameChange} />
//           <button>Search</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default Form;
