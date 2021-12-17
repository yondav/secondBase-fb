import { useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { DataContext } from './firebase.context.data';
import { db } from '../../firebase/firebase.config';

export default function useData() {
  const { state, dispatch } = useContext(DataContext);

  // add user (only called when user is registered in useAuth)
  const addUser = async user => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        address: {
          address: '',
          city: '',
          state: '',
          zip: '',
          phone: '',
        },
        profile_img: '',
      });

      console.log(docRef);
    } catch (err) {
      console.log(err);
    }
  };

  return { addUser };
}
