import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
