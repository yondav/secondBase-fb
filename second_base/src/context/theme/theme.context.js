import React, { useReducer, useEffect } from 'react';

export const ThemeContext = React.createContext();

const savedTheme = localStorage.getItem('dark');
let initialState = { dark: JSON.parse(savedTheme) || false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return { dark: true };
    case 'LIGHT':
      return { dark: false };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const HTML = document.querySelector('html').classList;

  const toggleTheme = () => {
    HTML.toggle('dark');

    if (HTML.contains('dark')) {
      dispatch({ type: 'DARK' });
      localStorage.setItem('dark', true);
    } else {
      dispatch({ type: 'LIGHT' });
      localStorage.setItem('dark', false);
    }

    console.log(state);
  };

  useEffect(() => {
    if (initialState.dark) {
      HTML.toggle('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, state }}>
      {children}
    </ThemeContext.Provider>
  );
};
