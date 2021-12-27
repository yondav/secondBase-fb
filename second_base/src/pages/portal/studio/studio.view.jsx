/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useContext, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { DataContext } from '../../../context/data/firebase.context.data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Grid } from '../../../components/layout';
import { AiOutlineEdit } from 'react-icons/ai';

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
          <Slide index={i} key={i} style={{ paddingBottom: '1.25rem' }}>
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
          <Link to='edit/bio' state={{ from: useLocation().pathname }}>
            <AiOutlineEdit
              size='2em'
              tw='absolute top-0 right-0 text-blue-900 hover:text-blue-900 dark:(text-blue-700 hover:text-blue-900) transition-all duration-300 ease-in'
            />
          </Link>
          <div tw='relative'>
            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={3}>
              <Slider>{!!images && consolidatePhotos()}</Slider>
              <ButtonBack tw='absolute top-1/2 -left-4 hover:scale-y-50 -translate-y-1/2 transition duration-300'>
                <BsChevronCompactLeft size='4em' />
              </ButtonBack>
              <ButtonNext tw='absolute top-1/2 -right-4 hover:scale-y-50 -translate-y-1/2 transition duration-300'>
                <BsChevronCompactRight size='4em' />
              </ButtonNext>
            </CarouselProvider>
          </div>
        </Grid.Col>
        <Grid.Col pad></Grid.Col>
      </Grid.Container>
    </>
  );
};

export default StudioView;
