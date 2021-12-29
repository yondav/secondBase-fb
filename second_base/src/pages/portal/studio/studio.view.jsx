/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { DataContext } from '../../../context/data/firebase.context.data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Grid } from '../../../components/layout';
import { Container } from '../../../components/image';

const StudioView = () => {
  const {
    state: {
      data: {
        images,
        studio: { name, address },
      },
    },
  } = useContext(DataContext);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    const unsubscribe = () => {
      const arr = [];
      const temp = [];
      Object.values(images)
        .map(obj => Object.values(obj))
        .map(a => a.forEach(ind => arr.push(ind)));

      for (let i of arr) i.url && temp.push(i); // gets rid of empty values

      setImgArr(temp);
    };
    return unsubscribe();
  }, [images]);

  return (
    <>
      <Outlet />
      <Grid.Container pad>
        <Grid.Col>
          <div tw='flex justify-center items-center'>
            <div tw='relative w-11/12'>
              <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={80}
                totalSlides={imgArr.length}
                infinite
              >
                <ButtonBack tw='absolute top-1/3 -left-12 hover:scale-y-50 -translate-y-1/3 transition duration-300'>
                  <BsChevronCompactLeft size='4em' />
                </ButtonBack>
                <Link to='edit/site_images' state={{ from: useLocation().pathname }}>
                  <Slider>
                    {imgArr.map((img, i) => (
                      <Slide
                        index={i}
                        key={i}
                        tw='hover:opacity-60 cursor-pointer transition-all duration-300 ease-in'
                        style={{ paddingBottom: '33.33%' }}
                      >
                        <Container color={img.color ? 1 : undefined}>
                          <img src={img.url} alt='' tw='rounded-lg shadow-lg' />
                        </Container>
                      </Slide>
                    ))}
                  </Slider>
                </Link>
                <ButtonNext tw='absolute top-1/3 -right-12 hover:scale-y-50 -translate-y-1/3 transition duration-300'>
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
