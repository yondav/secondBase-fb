/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useState, useContext, useEffect } from 'react';
import useNavigateBelow from '../../../hooks/useNavigateBelow';
import { DataContext } from '../../../context/data/firebase.context.data';
import useData from '../../../context/data/firebase.actions.useData';
import { Grid, Img, DeleteOverlay } from '../../../styles';

import { Forms, Dialogue } from '../../../components';

const ProfileImg = () => {
  const navigateBelow = useNavigateBelow();
  const [uploader, setUploader] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { uploadUserImg, updateUser, deleteUserImg } = useData();
  const {
    state: {
      data: { user },
    },
  } = useContext(DataContext);
  const [{ profile_img }] = user;

  const uploadImg = async file => {
    const upload = await uploadUserImg(file);

    if (upload) {
      const update = await updateUser(user[0], {
        ...user[0],
        profile_img: { ...profile_img, url: upload },
      });
      return update;
    }
  };

  const updateImg = async data => {
    const res = await updateUser(user[0], {
      ...user[0],
      profile_img: { ...user[0].profile_img, ...data },
    });

    if (res) setTimeout(() => navigateBelow(), 500);
  };

  const deleteImg = async () => {
    await deleteUserImg();
    await updateImg({ color: false, photographer: '', url: '' });
  };

  useEffect(() => (!profile_img.url ? setUploader(true) : setUploader(false)), [profile_img.url]);
  return (
    <Grid.Container tw='pb-6'>
      {!uploader ? (
        <>
          <div tw='col-span-12 lg:col-span-8'>
            <Img.Container
              color={`+${profile_img.color}`}
              onMouseEnter={() => setImgHover(true)}
              onMouseLeave={() => setImgHover(false)}
            >
              <img
                src={profile_img.url}
                alt='profile image'
                style={{ filter: !profile_img.color && 'saturate(0)', opacity: imgHover && 0.6 }}
                tw='transition-all duration-300 ease-in'
              />
              {imgHover && <DeleteOverlay dialogueAction={() => setConfirmDelete(true)} />}
              <Dialogue.ConfirmDelete
                isOpen={confirmDelete}
                handleClose={() => setConfirmDelete(false)}
                deleteTask={deleteImg}
              />
            </Img.Container>
          </div>
          <div tw='col-span-12 lg:col-span-4'>
            <Forms.ImageForm img={profile_img} updateTask={updateImg} />
          </div>
        </>
      ) : (
        <div tw='col-span-12'>
          <Forms.Uploader
            single
            images={profile_img.url ? [profile_img.url] : []}
            uploadTask={uploadImg}
          />
        </div>
      )}
    </Grid.Container>
  );
};

export default ProfileImg;
