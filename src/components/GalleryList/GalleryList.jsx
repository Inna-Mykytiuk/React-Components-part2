import { Galleryitem, Grid } from 'components';

export const GalleryList = ({ photos }) => {
  return (
    <Grid photos={photos}>
      {photos.map(({ id, smallImage, alt, avg_color }) => (
        <Galleryitem
          key={id}
          alt={alt}
          smallImage={smallImage}
          avg_color={avg_color}
        />
      ))}
    </Grid>
  );
};
