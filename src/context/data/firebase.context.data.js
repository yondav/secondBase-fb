import { useReducer, createContext } from 'react';
import dataReducer from './firebase.reducer.data';

export const DataContext = createContext();

let initialState = {
  data: { studio: {}, user: [], gear: {}, artists: {}, images: {} },
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
