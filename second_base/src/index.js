import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';

import { ThemeProvider } from './context/theme/theme.context';
import { DataProvider } from './context/data/firebase.context.data';
import { UserProvider } from './context/auth/firebase.context.user';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <DataProvider>
        <UserProvider>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </UserProvider>
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
