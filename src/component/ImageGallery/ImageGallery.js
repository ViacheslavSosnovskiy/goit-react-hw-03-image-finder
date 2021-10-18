import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const KEY = "22984759-30de173458e69cd83eb69d4b0";
const BASE_URL = "https://pixabay.com/api/";

class ImageGallery extends Component {
  state = {
    query: "",
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const { query, page } = this.state;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(
          `${BASE_URL}?q=${query}page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then((res) => res.json())
          .then((query) => this.setState({ query }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    const { query, loading } = this.state;
    // const { query } = this.props;

    return (
      <>
        {loading && <h2>Загружаем...</h2>}
        {!this.props.query && <h2>Введите что-то в поиск</h2>}
        {query && (
          <ul className="ImageGallery">
            <ImageGalleryItem />
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
