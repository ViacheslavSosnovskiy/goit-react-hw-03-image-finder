import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ query }) => {
  return (
    <ul className="ImageGallery">
      {query.map((item) => (
        <ImageGalleryItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
