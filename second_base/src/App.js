import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './firebase/firebase.config';

import { UserProvider } from './firebase/auth/firebase.context.user';

import LoginPage from './pages/admin/LoginPage';
import Portal from './pages/admin/Portal';
import Home from './pages/client/Home';
import SignUpPage from './pages/admin/Signup';
import AdminRoute from './router/router.adminRoutes';

import { WrapApp } from './styles';

function App() {
  return (
    <UserProvider>
      <WrapApp>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/signup' element={<SignUpPage />} />
          <Route path='/admin/login' element={<LoginPage />} />
          <Route path='/admin/' element={<AdminRoute />}>
            <Route path='portal' element={<Portal />} />
          </Route>
        </Routes>
      </WrapApp>
    </UserProvider>
  );
}

export default App;
