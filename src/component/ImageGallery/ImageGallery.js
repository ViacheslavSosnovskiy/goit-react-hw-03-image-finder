import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ pictures }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map((picture) => (
        <ImageGalleryItem key={picture.id} {...picture} />
      ))}
    </ul>
  );
};

export default ImageGallery;
