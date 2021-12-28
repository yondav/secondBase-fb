import { useContext, useEffect } from 'react';
import { DataContext } from './firebase.context.data';
import { userModel } from '../../firebase/firebase.models';
import * as action from '../../firebase/firebase.tasks';

export default function useData() {
  const { state, dispatch } = useContext(DataContext);

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

  // non user images
  const uploadImage = async (file, path) => await action.uploadToStorage(file, `${path}.webp`);

  const updateImage = async data => {
    await action.put('images', 'r27hUzvhqntH6iwSRiyX', { ...state.data.images, ...data });
  };

  // useEffect(() => () => dispatch({ type: 'GET_IMAGES', payload: images }), [images]);
  return { addUser, getAll, uploadUserImg, updateUser, deleteUserImg, updateImage, uploadImage };
}
