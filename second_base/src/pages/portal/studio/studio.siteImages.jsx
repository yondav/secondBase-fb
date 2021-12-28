/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useContext, useCallback } from 'react';
import { DataContext } from '../../../context/data/firebase.context.data';
import useData from '../../../context/data/firebase.actions.useData';
import { Grid } from '../../../components/layout';
import { toTitle } from '../../../utils/helpers';
import { Uploader, ImageForm } from '../../../components/forms';
import { Container } from '../../../components/image';

const StudioSiteImages = () => {
  const {
    state: {
      data: { images },
    },
  } = useContext(DataContext);

  const { updateImage, uploadImage } = useData();

  const renderForms = useCallback(() => {
    const pages = Object.keys(images);

    return (
      <>
        {pages.map((pg, i) => {
          // console.log(Object.keys(images[pg]));
          return (
            <React.Fragment key={i}>
              <Grid.Col>
                <h1>{toTitle(pg)}</h1>
              </Grid.Col>
              {Object.keys(images[pg]).map((img, i) => (
                <React.Fragment key={i}>
                  <div tw='col-span-12 flex justify-end items-center'>
                    <h2>{toTitle(img)}</h2>
                  </div>
                  {images[pg][img].url ? (
                    <>
                      <div tw='col-span-12 lg:col-span-8'>
                        <Container color={images[pg][img].color}>
                          <img
                            src={images[pg][img].url}
                            alt={`${pg}-${img}`}
                            style={{ filter: !images[pg][img].color && 'saturate(0)' }}
                            tw='transition-all duration-300 ease-in'
                          />
                        </Container>
                      </div>
                      <div tw='col-span-12 lg:col-span-4'>
                        <ImageForm
                          img={images[pg][img]}
                          updateTask={async data => {
                            let obj = { ...images };
                            obj[pg][img] = data;
                            await updateImage(obj);
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <div tw='col-span-12'>
                      <Uploader
                        single
                        images={images[pg][img].url ? [images[pg][img].url] : []}
                        uploadTask={async file => {
                          const upload = await uploadImage(file, `${pg}/${img}`);
                          if (upload) {
                            let obj = { ...images };
                            obj[pg][img].url = upload;
                            const update = await updateImage(upload);
                          }
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          );
        })}
      </>
    );
  }, []);

  return <Grid.Container>{renderForms()}</Grid.Container>;
};

export default StudioSiteImages;

// admin portal
/*
  {
    hero: {
      color,
      photographer,
      url,
    },
  }
*/
// about
/*
  {
    hero: {
      color,
      photographer,
      url,
    },
    footer: {
      color,
      photographer,
      url,
    },
  }
*/
// artists
/*
  {
    hero: {
      color,
      photographer,
      url,
    },
    banner: {
      color,
      photographer,
      url,
    },
    feature: {
      color,
      photographer,
      url,
    },
    footer: {
      color,
      photographer,
      url,
    },
  }
*/
// booking
/*
  {
    hero: {
      color,
      photographer,
      url,
    },
    feature: {
      color,
      photographer,
      url,
    },
  }
*/
// gear
/*
  {
    hero: {
      color,
      photographer,
      url,
    },
    banner: {
      color,
      photographer,
      url,
    },
    feature: {
      color,
      photographer,
      url,
    },
    footer: {
      color,
      photographer,
      url,
    },
  }
*/
// home
/*
  {
    hero: {
      color,
      photographer,
      url,
    },
    banner: {
      color,
      photographer,
      url,
    },
    feature: {
      color,
      photographer,
      url,
    },
    footer: {
      color,
      photographer,
      url,
    },
  }
*/
