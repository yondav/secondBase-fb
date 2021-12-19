import { useState, useContext, useEffect } from 'react';
import { collection, setDoc, getDocs, doc } from 'firebase/firestore';
// import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { DataContext } from './firebase.context.data';
import { db } from '../../firebase/firebase.config';
import { userModel } from '../../firebase/firebase.models';
import { con } from '../../utils/console';

export default function useData() {
  const { state, dispatch } = useContext(DataContext);
  const [images, setImages] = useState({});
  // const storage = getStorage();

  // users
  // add user (only called when user is registered in useAuth)
  const addUser = async user => {
    try {
      const newUser = await setDoc(doc(db, 'users', user.uid), userModel(user));

      if (newUser) await getAllUsers();
    } catch (err) {
      con.fail({ code: err.code, msg: err.message });
    }
  };

  // get all users
  const getAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach(doc => {
        dispatch({ type: 'GET_USERS', payload: doc.data() });
      });
    } catch (err) {
      con.fail({ code: err.code, msg: err.message });
    }
  };

  // images
  const getAllImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'images'));
      querySnapshot.forEach(doc => {
        const img = { img: doc.data() };
        setImages(prev => ({ ...prev, ...img[Object.keys(img)[0]] }));
      });
    } catch (err) {
      con.fail({ code: err.code, msg: err.message });
    }
  };
  // const imageReference = async child => {
  //   const imagesRef = ref(storage, 'images');
  //   let url= await getDownloadURL()
  //   const dirList = await listAll(imagesRef);

  //   dirList.prefixes.forEach(async dir => {
  //     let list = await listAll(dir);
  //     console.log(list);
  //   });

  //   dirList.items.forEach(async dir => {
  //     let list = await listAll(dir);
  //     console.log(list);
  //   });
  // };
  useEffect(
    () => () => dispatch({ type: 'GET_IMAGES', payload: images }),
    [images]
  );
  return { addUser, getAllUsers, getAllImages };
}
