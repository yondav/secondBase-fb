import { useState, useContext, useEffect } from 'react';
import { DataContext } from './firebase.context.data';
import { userModel } from '../../firebase/firebase.models';
import * as action from '../../firebase/firebase.tasks';

export default function useData() {
  const { dispatch } = useContext(DataContext);
  const [images, setImages] = useState({});

  // get all
  const getAll = async (collection, type = null) => {
    const querySnapshot = await action.fetchAll(collection);
    querySnapshot.forEach(doc => {
      dispatch({ type, payload: doc.data() });
    });
  };

  // users
  // add user (only called when user is registered in useAuth)
  const addUser = async user => {
    const newUser = await action.post('users', user.uid, userModel(user));
    if (newUser) await getAll('users', 'GET_USERS');
  };

  // upload user image to storage and get url
  const uploadUserImg = async file => await action.uploadToStorage(file, 'user/profile_img.webp');

  // update user
  const updateUser = async (user, data) => {
    await action.put('users', user.uid, data);
    dispatch({ type: 'UPDATE_USER', payload: data });
    return data;
  };

  // delete user image - must update corresponding document as succeeding action
  const deleteUserImg = async () => {
    await action.deleteFromStorage('user/profile_img.webp');
  };

  // useEffect(() => () => dispatch({ type: 'GET_IMAGES', payload: images }), [images]);
  return { addUser, getAll, uploadUserImg, updateUser, deleteUserImg };
}
