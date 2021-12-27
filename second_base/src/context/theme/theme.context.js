import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

const savedTheme = localStorage.getItem('dark');

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(JSON.parse(savedTheme) || false);
  const HTML = document.querySelector('html').classList;

  const toggleTheme = () => setDark(!dark);

  useEffect(() => {
    if (dark) {
      HTML.add('dark');
      localStorage.setItem('dark', true);
    } else {
      HTML.remove('dark');
      localStorage.setItem('dark', false);
    }
  }, [dark]);

  return <ThemeContext.Provider value={{ dark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
