/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext } from 'react';
import { DataContext } from '../../../../context/data/firebase.context.data';
import useData from '../../../../context/data/firebase.actions.useData';
import { toTitle } from '../../../../utils/helpers';
import { Container, DeleteOverlay } from '../../../../components/image';
import { Uploader, ImageForm } from '../../../../components/forms';
import { Accordion, Grid } from '../../../../components/layout';
import { Dialogue } from '../../../../components';

const SiteImagesImage = ({ img, pg }) => {
  const {
    state: {
      data: { images },
    },
  } = useContext(DataContext);

  const [displayColor, setDisplayColor] = useState(images[pg][img].color);
  const [active, setActive] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { updateImage, uploadImage, deleteImage } = useData();
  return (
    <Accordion.Section title={toTitle(img)} active={active} setActive={() => setActive(!active)}>
      {images[pg][img].url ? (
        <Grid.Container>
          <div tw='col-span-12 lg:col-span-8 my-6'>
            <Container
              color={1}
              onMouseEnter={() => setImgHover(true)}
              onMouseLeave={() => setImgHover(false)}
            >
              <img
                src={images[pg][img].url}
                alt={`${pg}-${img}`}
                tw='transition-all duration-300 ease-in'
                style={{ filter: !displayColor && 'saturate(0)' }}
              />
              {imgHover && <DeleteOverlay dialogueAction={() => setConfirmDelete(true)} />}
              <Dialogue.Delete
                isOpen={confirmDelete}
                handleClose={() => setConfirmDelete(false)}
                deleteTask={async () => {
                  await deleteImage(`${pg}/${img}`);
                  let obj = { ...images };
                  obj[pg][img] = { ...obj[pg][img], photographer: '', url: '' };
                  await updateImage(obj);
                }}
              />
            </Container>
          </div>
          <div tw='col-span-12 lg:col-span-4 my-6'>
            <ImageForm
              displayColor={{ state: displayColor, setter: setDisplayColor }}
              img={images[pg][img]}
              updateTask={async data => {
                let obj = { ...images };
                obj[pg][img] = { ...obj[pg][img], ...data };
                await updateImage(obj);
              }}
            />
          </div>
        </Grid.Container>
      ) : (
        <div tw='col-span-12 my-6'>
          <Uploader
            single
            images={images[pg][img].url ? [images[pg][img].url] : []}
            uploadTask={async file => {
              const upload = await uploadImage(file, `${pg}/${img}`);
              if (upload) {
                let obj = { ...images };
                obj[pg][img].url = upload;
                const update = await updateImage(obj);
              }
            }}
          />
        </div>
      )}
    </Accordion.Section>
  );
};

export default SiteImagesImage;
