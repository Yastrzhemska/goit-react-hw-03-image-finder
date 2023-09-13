export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li>
      <img
        src={image.webformatURL}
        alt={image.tag}
        onClick={() => onClick(image)}
      />
    </li>
  );
};
