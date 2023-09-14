import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClickOpen }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClickOpen} />
      ))}
    </ImageGalleryList>
  );
};
