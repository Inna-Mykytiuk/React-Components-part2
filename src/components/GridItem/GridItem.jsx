import { ImageGalleryItem, ImageCard } from './GridItem.styled';
// import { ImageCard } from '../ImageCard/ImageCard.styled';

export const GridItem = ({ large, alt }) => {
  return (
    <ImageGalleryItem>
      <ImageCard
        src={large}
        alt={alt}
        loading="lazy"
        width={480}
        height={260}
      />
    </ImageGalleryItem>
  );
};
