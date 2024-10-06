import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = query => {
    setQuery(query);
    setError(null);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      setIsLoading(true);
      try {
        const photos = await getPhotos(query, 1);
        setPhotos(photos.photos);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={onSubmit} />
      {isLoading && <p>Loading...</p>}
      {error && <Text textAlign="center">{error}</Text>}
      <PhotosGallery photos={photos} />
    </>
  );
};
