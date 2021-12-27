/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { DataContext } from '../../../context/data/firebase.context.data';
import useNavigateBelow from '../../../hooks/useNavigateBelow';
import useData from '../../../context/data/firebase.actions.useData';

import { ImageForm, Uploader } from '../../../components/forms';
import { Dialogue, Alert } from '../../../components';
import { DeleteOverlay } from '../../../components/image/image.overlay';
import { Container } from '../../../components/image';
import { Grid } from '../../../components/layout';

const ProfileImg = () => {
  const navigateBelow = useNavigateBelow();
  const [uploader, setUploader] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const [alert, setAlert] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { uploadUserImg, updateUser, deleteUserImg } = useData();
  const {
    state: {
      data: { user },
    },
  } = useContext(DataContext);
  const [{ profile_img }] = user;

  const updateAlert = update => {
    setAlert(update);
    setTimeout(() => setAlert(null), 2500);
  };

  const uploadImg = async file => {
    const upload = await uploadUserImg(file);

    if (upload) {
      const update = await updateUser(user[0], {
        ...user[0],
        profile_img: { ...profile_img, url: upload },
      });
      updateAlert({ variant: 'success', message: `${file} was successfully uploaded` });
      return update;
    } else {
      updateAlert({ variant: 'danger', message: 'Something went wrong with your upload' });
    }
  };

  const updateImg = async data => {
    const res = await updateUser(user[0], {
      ...user[0],
      profile_img: { ...user[0].profile_img, ...data },
    });

    if (res) {
      console.log(res);
      updateAlert({ variant: 'success', message: `Image has been updated` });
      setTimeout(() => navigateBelow(), 3500);
    } else {
      updateAlert({ variant: 'danger', message: `Something's not quite right` });
    }
  };

  const deleteImg = async () => {
    await deleteUserImg();
    await updateImg({ color: false, photographer: '', url: '' });
    updateAlert({ variant: 'success', message: `image has been deleted` });
  };

  useEffect(() => (!profile_img.url ? setUploader(true) : setUploader(false)), [profile_img.url]);
  return (
    <>
      <AnimatePresence>
        {!!alert && <Alert variant={alert.variant} message={alert.message} />}
      </AnimatePresence>
      <Grid.Container tw='pb-6'>
        {!uploader ? (
          <>
            <div tw='col-span-12 lg:col-span-8'>
              <Container
                color={`+${profile_img.color}`}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
              >
                <img
                  src={profile_img.url}
                  alt='profile'
                  style={{ filter: !profile_img.color && 'saturate(0)', opacity: imgHover && 0.6 }}
                  tw='transition-all duration-300 ease-in'
                />
                {imgHover && <DeleteOverlay dialogueAction={() => setConfirmDelete(true)} />}
                <Dialogue.ConfirmDelete
                  isOpen={confirmDelete}
                  handleClose={() => setConfirmDelete(false)}
                  deleteTask={deleteImg}
                />
              </Container>
            </div>
            <div tw='col-span-12 lg:col-span-4'>
              <ImageForm img={profile_img} updateTask={updateImg} />
            </div>
          </>
        ) : (
          <div tw='col-span-12'>
            <Uploader
              single
              images={profile_img.url ? [profile_img.url] : []}
              uploadTask={uploadImg}
            />
          </div>
        )}
      </Grid.Container>
    </>
  );
};

export default ProfileImg;
