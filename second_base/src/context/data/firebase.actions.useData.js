import { useState, useContext, useEffect } from 'react';
import { DataContext } from './firebase.context.data';
import { userModel } from '../../firebase/firebase.models';
import * as action from '../../firebase/firebase.tasks';

export default function useData() {
  const { dispatch } = useContext(DataContext);
  const [images, setImages] = useState({});

  // get all users
  const getAllUsers = async () => {
    const querySnapshot = await action.fetchAll('users');
    querySnapshot.forEach(doc => {
      dispatch({ type: 'GET_USERS', payload: doc.data() });
    });
  };

  // get all images
  const getAllImages = async () => {
    const querySnapshot = await action.fetchAll('images');
    querySnapshot.forEach(doc => {
      const img = { img: doc.data() };
      setImages(prev => ({ ...prev, ...img[Object.keys(img)[0]] }));
    });
  };

  // users
  // add user (only called when user is registered in useAuth)
  const addUser = async user => {
    const newUser = await action.post('users', user.uid, userModel(user));
    if (newUser) await getAllUsers();
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

  useEffect(() => () => dispatch({ type: 'GET_IMAGES', payload: images }), [images]);
  return { addUser, getAllUsers, getAllImages, uploadUserImg, updateUser, deleteUserImg };
}
