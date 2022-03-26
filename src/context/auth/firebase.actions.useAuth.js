import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { UserContext } from './firebase.context.user';
import { DataContext } from '../data/firebase.context.data';
import useData from '../data/firebase.actions.useData';

const auth = getAuth();

export default function useAuth() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    state: {
      data: { user },
    },
  } = useContext(DataContext);
  const { addUser } = useData();

  // register new user
  const signup = async ({ first_name, last_name, email, password }) => {
    try {
      // if there is already a registered user, block new users
      if (user.length < 1) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        if (user) {
          await updateProfile(user, {
            displayName: `${first_name} ${last_name}`,
          });
          await addUser(user);
          dispatch({ type: 'AUTHENTICATED', payload: user });

          return user;
        }
      } else {
        navigate('/404');
      }
    } catch (err) {
      dispatch({
        type: 'NOT_AUTHENTICATED',
        payload: { code: err.code, message: err.message },
      });
    }
  };

  // login
  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      if (user) {
        dispatch({ type: 'AUTHENTICATED', payload: user });
        return user;
      }
    } catch (err) {
      dispatch({
        type: 'NOT_AUTHENTICATED',
        payload: { code: err.code, message: err.message },
      });
    }
  };

  // logout
  const logout = () => {
    signOut(auth);
    dispatch({
      type: 'NOT_AUTHENTICATED',
      payload: { code: 401, message: 'logged out' },
    });
  };

  return { signup, login, logout, state };
}
