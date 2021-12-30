/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

import { DataContext } from '../../../context/data/firebase.context.data';
import useData from '../../../context/data/firebase.actions.useData';
import useAlert from '../../../hooks/useAlert';
import useNavigateBelow from '../../../hooks/useNavigateBelow';

import RichText from '../../../components/forms/richtext';
import Alert from '../../../components/alert';
import { Grid } from '../../../components/layout';

const ProfileBio = () => {
  const navigateBelow = useNavigateBelow();
  const { updateUser } = useData();
  const { alert, updateAlert } = useAlert();
  const {
    state: {
      data: { user },
    },
  } = useContext(DataContext);

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    const res = await updateUser(user[0], {
      ...user[0],
      bio: data,
    });

    if (res) {
      updateAlert({ variant: 'success', message: 'Bio has been updated' });
      setTimeout(() => navigateBelow(), 3500);
    } else {
      updateAlert({ variant: 'danger', message: 'Bio was not updated' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {!!alert && <Alert variant={alert.variant} message={alert.message} />}
      </AnimatePresence>
      <Grid.Container tw='pb-6'>
        <Grid.Col>
          <RichText handleSubmit={handleSubmit} data={user[0].bio.draft} />
        </Grid.Col>
      </Grid.Container>
    </>
  );
};

export default ProfileBio;
