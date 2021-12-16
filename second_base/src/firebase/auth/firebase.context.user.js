import React, { useEffect, useReducer } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { con } from '../../utils/console';

export const UserContext = React.createContext();

let initialState = {
  user: null,
  err: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      con.success(`** AUTHENTICATED ** uid:${action.payload.uid}`);
      return { user: action.payload, err: null };
    case 'NOT_AUTHENTICATED':
      con.fail(
        `** NOT AUTHENTICATED ** ERR:${action.payload.code}, MSG: ${action.payload.msg}`
      );
      return { user: null, err: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const unsubscribe = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, user =>
        user
          ? dispatch({ type: 'AUTHENTICATED', payload: user })
          : dispatch({
              type: 'NOT_AUTHENTICATED',
              payload: 'No active session',
            })
      );
    };
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
