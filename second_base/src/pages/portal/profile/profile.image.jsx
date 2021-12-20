/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { DataContext } from '../../../context/data/firebase.context.data';
import useData from '../../../context/data/firebase.actions.useData';
import { Grid, Img } from '../../../styles';

import { Forms } from '../../../components';

const ProfileImg = () => {
  const [uploader, setUploader] = useState(false);
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
    const update = await updateUser(user[0], {
      ...user[0],
      profile_img: { ...user[0].profile_img, ...data },
    });
  };

  const deleteImg = async () => {
    await deleteUserImg();
    await updateImg({ color: false, photographer: '', url: '' });
  };

  useEffect(() => {
    console.log(uploader);
    !profile_img.url ? setUploader(true) : setUploader(false);
    console.log(uploader);
  }, [profile_img.url]);
  return (
    <Grid.Container tw='pb-6'>
      {!uploader ? (
        <>
          <div tw='col-span-12 lg:col-span-8'>
            <Img.Container color={`+${profile_img.color}`}>
              <img
                src={profile_img.url}
                alt='profile image'
                style={{ filter: !profile_img.color && 'saturate(0)' }}
              />
              <div tw='absolute top-0 left-0 h-full w-full flex justify-center items-center bg-gray-100 text-red-900 opacity-0 hover:opacity-90 dark:hover:bg-gray-950 transition duration-500 ease-in'>
                <AiOutlineDelete tw='cursor-pointer' size='5em' onClick={deleteImg} />
              </div>
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
