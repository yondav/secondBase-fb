/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useContext } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { DataContext } from '../../../context/data/firebase.context.data';
import { Grid, Img } from '../../../styles';

const ProfileView = () => {
  const {
    state: {
      data: { user }, // add color prop to image container when image set up in db
    },
  } = useContext(DataContext);

  return (
    <>
      <Outlet />
      <Grid.Container pad screen>
        <Grid.Col>
          <div tw='flex justify-center'>
            <Img.Container
              as={Link}
              to='edit/img'
              state={{ from: useLocation().pathname }}
              square={1}
              circle={1}
              tw='sm:w-2/3 lg:w-1/2 xl:w-1/3 cursor-pointer'
            >
              <img
                name='img'
                src={
                  user[0].profile_img.url ||
                  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                }
                alt='profile'
                tw='h-full w-auto max-w-none'
              />
            </Img.Container>
          </div>
        </Grid.Col>
      </Grid.Container>
    </>
  );
};

export default ProfileView;
