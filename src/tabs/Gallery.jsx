// import { Component } from 'react';

// import * as ImageService from 'service/image-service';
// import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

// export const  Gallery=() => {

//     return (
//       <>
//         <Text textAlign="center">Sorry. There are no images ... 😭</Text>
//         <SearchForm />
//         <Grid></Grid>
//         <Button />
//       </>
//     );
//   }

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, SearchForm, Grid } from 'components';
import { getImages } from 'service/image-service';
import { Dna } from 'react-loader-spinner';

export const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [total_results, setTotalRes] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  // const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    getImages(query, page)
      .then(({ photos, total_results }) => {
        if (!total_results) {
          console.log(total_results, photos);
          toast.error('There are no images for your request');
          return;
        }
        const results = photos.map(({ alt, id, small, large }) => ({
          alt,
          id,
          smallImage: small,
          largeImage: large,
        }));

        setPhotos(prevImages => [...prevImages, ...results]);
        setTotalRes(total_results);
        console.log(total_results);
      })
      .catch(error => {
        toast.error('There was an error fetching images');
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const submitHandler = query => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
    setQuery(query);
    setPhotos([]);
    setPage(1);
    setTotalRes(0);
  };

  const onLoadMoreButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  // const onImageClick = activeImage => {
  //   setActiveImage(activeImage);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setActiveImage(null);
  // };

  return (
    <>
      <SearchForm onSubmit={submitHandler} />
      <Grid photos={photos} />
      {total_results > photos.length && !isLoading && (
        <Button onLoadMoreButton={onLoadMoreButton} />
      )}
      {isLoading && <Dna wrapperStyle={{ margin: '0 auto' }} />}
      {/* {showModal && activeImage && (
        <Modal image={activeImage} onClose={closeModal}></Modal>
      )} */}
      <ToastContainer />
    </>
  );
};
