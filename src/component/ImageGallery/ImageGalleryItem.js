import "../App.css";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  openModalImage,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => openModalImage({ largeImageURL, tags })}
      />
    </li>
  );
};

export default ImageGalleryItem;
