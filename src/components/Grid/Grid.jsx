// import { ImageGalleryStyled } from './ImageGallery.styled';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GridMain } from './Grid.styled';
import { GridItem } from 'components';

export const Grid = ({ photos, openModal }) => {
  return (
    <GridMain>
      {photos.map(photo => (
        <GridItem
          // openModal={openModal}
          key={photo.id}
          alt={photo.tags}
          smallImage={photo.smallImage}
          largeImage={photo.largeImage}
        />
      ))}
    </GridMain>
  );
};
