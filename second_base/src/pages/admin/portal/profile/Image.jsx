/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../../context/data/firebase.context.data';
import { Grid, Img } from '../../../../styles';

const Image = () => {
  const {
    state: {
      data: {
        user: [{ profile_img }],
      }, // add color prop to image container when image set up in db
    },
  } = useContext(DataContext);

  useEffect(() => console.log(profile_img), [profile_img]);
  return (
    <Grid.Container>
      IMAGE
      <div tw='col-span-12 lg:col-span-7'>
        {profile_img.url && (
          <Img.Container>
            <img src={profile_img.url} alt='' />
          </Img.Container>
        )}
      </div>
    </Grid.Container>
  );
};

export default Image;
