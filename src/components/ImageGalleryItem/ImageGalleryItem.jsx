import {
  ImageGalleryItems,
  ImageGalleryItemsImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <ImageGalleryItems>
      <ImageGalleryItemsImg
        src={image.webformatURL}
        alt={image.tag}
        onClick={() => onClick(image)}
      />
    </ImageGalleryItems>
  );
};
