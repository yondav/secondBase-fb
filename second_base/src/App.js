import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './firebase/firebase.config';

import { ThemeProvider } from './context/theme/theme.context';
import { DataProvider } from './context/data/firebase.context.data';
import { UserProvider } from './context/auth/firebase.context.user';

import LoginPage from './pages/admin/LoginPage';
import Portal from './pages/admin/Portal';
import About from './pages/client/About';
import Artists from './pages/client/Artists';
import Booking from './pages/client/Booking';
import Gear from './pages/client/Gear';
import SignUpPage from './pages/admin/Signup';
import AdminRoute from './router/router.adminRoutes';

import { WrapApp } from './styles';
import Navbar from './components/navbar';
import ClientRoute from './router/router.clientRoute';

function App() {
  useEffect(() => console.log(localStorage.getItem('dark')));
  return (
    <ThemeProvider>
      <DataProvider>
        <UserProvider>
          <Navbar />
          <WrapApp>
            <Routes>
              <Route path='/' element={<ClientRoute />}>
                <Route path='about' element={<About />} />
                <Route path='gear' element={<Gear />} />
                <Route path='artists' element={<Artists />} />
                <Route path='booking' element={<Booking />} />
              </Route>
              <Route path='/admin/signup' element={<SignUpPage />} />
              <Route path='/admin/login' element={<LoginPage />} />
              <Route path='/admin/' element={<AdminRoute />}>
                <Route path='portal' element={<Portal />} />
              </Route>
            </Routes>
          </WrapApp>
        </UserProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
