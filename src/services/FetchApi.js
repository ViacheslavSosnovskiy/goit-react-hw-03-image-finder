const KEY = "22984759-30de173458e69cd83eb69d4b0";
const BASE_URL = "https://pixabay.com/api/";

function FetchApi(name, page) {
  return fetch(
    `${BASE_URL}?q=${name}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("Ничего не найдено!"));
  });
}

const api = {
  FetchApi,
};
export default api;
