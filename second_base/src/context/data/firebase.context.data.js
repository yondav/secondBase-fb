import React, { useReducer } from 'react';
import dataReducer from './firebase.reducer.data';

export const DataContext = React.createContext();

let initialState = {
  data: { studio: {}, user: {}, gear: {}, artists: {} },
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
