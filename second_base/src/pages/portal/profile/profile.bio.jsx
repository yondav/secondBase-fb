import React, { useContext } from 'react';
import { DataContext } from '../../../context/data/firebase.context.data';
import useData from '../../../context/data/firebase.actions.useData';
import useNavigateBelow from '../../../hooks/useNavigateBelow';
import { Forms } from '../../../components';

const ProfileBio = () => {
  const navigateBelow = useNavigateBelow();
  const { updateUser } = useData();
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
    if (res) setTimeout(() => navigateBelow(), 500);
  };
  return <Forms.RichText handleSubmit={handleSubmit} data={user[0].bio.draft} />;
};

export default ProfileBio;
