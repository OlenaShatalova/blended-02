import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const onSubmit = query => {
    setQuery(query);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const photos = await getPhotos(query, 1);
        setPhotos(photos.photos);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={onSubmit} />
      <PhotosGallery photos={photos} />
    </>
  );
};
