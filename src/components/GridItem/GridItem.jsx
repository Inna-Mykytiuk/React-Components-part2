import { ImageGalleryItem, ImageCard } from './GridItem.styled';
// import { ImageCard } from '../ImageCard/ImageCard.styled';

export const GridItem = ({ smallImage, largeImage, alt }) => {
  return (
    <ImageGalleryItem>
      <ImageCard
        src={largeImage}
        alt={alt}
        loading="lazy"
        width={480}
        height={260}
      />
    </ImageGalleryItem>
  );
};
