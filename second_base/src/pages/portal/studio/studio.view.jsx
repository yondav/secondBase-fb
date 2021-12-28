/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useContext, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { DataContext } from '../../../context/data/firebase.context.data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Grid } from '../../../components/layout';

const StudioView = () => {
  const {
    state: {
      data: {
        images,
        studio: { name, address },
      },
    },
  } = useContext(DataContext);

  const consolidatePhotos = useCallback(() => {
    const arr = [];
    const temp = [];
    Object.values(images)
      .map(obj => Object.values(obj))
      .map(a => a.forEach(ind => arr.push(ind)));

    for (let i of arr) i.url && temp.push(i); // gets rid of empty values

    return (
      <>
        {temp.map((img, i) => (
          <Slide
            index={i}
            key={i}
            tw='hover:opacity-60 cursor-pointer transition-all duration-300 ease-in'
            style={{ paddingBottom: '1.25rem' }}
          >
            <img src={img.url} alt='' tw='rounded-lg' />
          </Slide>
        ))}
      </>
    );
  }, [images]);

  return (
    <>
      <Outlet />
      <Grid.Container pad>
        <Grid.Col>
          <div tw='flex justify-center items-center'>
            <div tw='relative w-11/12 lg:w-3/4'>
              <CarouselProvider naturalSlideWidth={80} naturalSlideHeight={80} totalSlides={3}>
                <Link to='edit/site_images' state={{ from: useLocation().pathname }}>
                  <Slider>{!!images && consolidatePhotos()}</Slider>
                </Link>
                <ButtonBack tw='absolute top-1/2 -left-12 hover:scale-y-50 -translate-y-1/2 transition duration-300'>
                  <BsChevronCompactLeft size='4em' />
                </ButtonBack>
                <ButtonNext tw='absolute top-1/2 -right-12 hover:scale-y-50 -translate-y-1/2 transition duration-300'>
                  <BsChevronCompactRight size='4em' />
                </ButtonNext>
              </CarouselProvider>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col pad></Grid.Col>
      </Grid.Container>
    </>
  );
};

export default StudioView;
