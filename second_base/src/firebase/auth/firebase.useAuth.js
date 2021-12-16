import { useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { UserContext } from './firebase.context.user';

const auth = getAuth();

export default function useAuth() {
  const { state, dispatch } = useContext(UserContext);

  // register new user
  const signup = async ({ first_name, last_name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      if (user) {
        await updateProfile(user, {
          displayName: `${first_name} ${last_name}`,
        });
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

  // login
  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      if (user) {
        console.log(user);
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

  return { signup, login, state };
}

// // register new user
// export const signup = async ({ first_name, last_name, email, password }) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     const user = userCredential.user;

//     await updateProfile(user, {
//       displayName: `${first_name} ${last_name}`,
//     });

//     return user;
//   } catch (err) {
//     console.log(err.code, err.message);
//   }
// };

// // login
// export const login = async ({ email, password }) => {
//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );

//   return userCredential.user;
// };
