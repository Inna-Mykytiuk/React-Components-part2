import { CardItem, GridItem } from 'components/GridItem/GridItem.styled';

export const Galleryitem = ({ smallImage, avg_color, alt }) => {
  return (
    <GridItem>
      <CardItem color={avg_color}>
        <img src={smallImage} alt={alt} />
      </CardItem>
    </GridItem>
  );
};
