import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem
          key={photo.id}
          avg_color={photo.avg_color}
          alt={photo.alt}
          src={photo.src}
        />
      ))}
    </Grid>
  );
};
