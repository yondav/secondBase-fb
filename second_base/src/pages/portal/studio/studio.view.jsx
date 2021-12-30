/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { DataContext } from '../../../context/data/firebase.context.data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Grid } from '../../../components/layout';
import CarouselImageContainer from '../../../components/image/image.carouselImage';
import { EditLink, Spinner } from '../../../components';

const StudioView = () => {
  const {
    state: {
      data: {
        images,
        studio: { name, address, services },
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
            <div tw='relative w-full'>
              <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={80}
                totalSlides={imgArr.length}
                infinite
              >
                <Link to='edit/site_images' state={{ from: useLocation().pathname }}>
                  <Slider spinner={() => <Spinner />}>
                    {imgArr.map((img, i) => (
                      <Slide
                        index={i}
                        key={i}
                        tw='hover:opacity-60 cursor-pointer transition-all duration-300 ease-in'
                        style={{ paddingBottom: '16%' }}
                      >
                        <CarouselImageContainer>
                          <div>
                            <img
                              src={img.url}
                              alt={`by ${img.photographer}`}
                              tw='rounded-lg shadow-lg block mx-auto object-contain max-h-full w-full'
                              style={{ filter: !img.color && 'saturate(0)' }}
                            />
                          </div>
                        </CarouselImageContainer>
                      </Slide>
                    ))}
                  </Slider>
                </Link>
                <ButtonBack tw='absolute top-1/2 hover:scale-y-50 -translate-y-1/2 transition duration-300'>
                  <BsChevronCompactLeft size='4em' />
                </ButtonBack>
                <ButtonNext tw='absolute top-1/2 right-0 hover:scale-y-50 -translate-y-1/2 transition duration-300'>
                  <BsChevronCompactRight size='4em' />
                </ButtonNext>
              </CarouselProvider>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col pad split>
          <div tw='w-full relative my-4'>
            <EditLink to={'edit/address'} />
          </div>
          <div>
            <h1>{name}</h1>
            {address && (
              <>
                <p>{address.street}</p>
                <p>
                  {address.neighborhood}, {address.city}
                </p>
                <p>
                  {address.state}, {address.zip_code}
                </p>
              </>
            )}
          </div>
        </Grid.Col>
        <Grid.Col pad split>
          <div tw='w-full relative my-4'>
            <EditLink to={'edit/services'} />
          </div>
          {services && (
            <>
              <h2>Services</h2>
              <ul>
                {services.map((serv, i) => (
                  <li key={i}>{serv}</li>
                ))}
              </ul>
            </>
          )}
        </Grid.Col>
      </Grid.Container>
    </>
  );
};

export default StudioView;
