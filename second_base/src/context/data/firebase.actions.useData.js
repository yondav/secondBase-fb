import { useContext } from 'react';
import { collection, setDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import { DataContext } from './firebase.context.data';
import { db } from '../../firebase/firebase.config';
import { userModel } from '../../firebase/firebase.models';
import { con } from '../../utils/console';

export default function useData() {
  const { state, dispatch } = useContext(DataContext);

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
  return { addUser, getAllUsers };
}
