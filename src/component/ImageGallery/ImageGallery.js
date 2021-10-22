import ImageGalleryItem from "./ImageGalleryItem";
import "../App.css";

const ImageGallery = ({ pictures, openModalImage }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map(({ webformatURL, largeImageURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          openModalImage={openModalImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
