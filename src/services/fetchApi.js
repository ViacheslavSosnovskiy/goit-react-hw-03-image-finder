// import axios from "axios";

// const KEY = "22984759-30de173458e69cd83eb69d4b0";

// const fetchPicture = ({ query = "", page = 1 }) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     )
//     .then(({ data }) => data.hits);
// };

// export default fetchPicture;

// ===========================
import axios from "axios";

// axios.defaults.baseURL = "https://pixabay.com/api/";
const BASE_URL = "https://pixabay.com/api/";
const KEY = "22984759-30de173458e69cd83eb69d4b0";

const fetchPicture = async (query, page) => {
  const url = `${BASE_URL}?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const { data } = await axios.get(url);
  const pictures = data.hits;
  console.log(data.hits);
  return pictures;
};

export default fetchPicture;
