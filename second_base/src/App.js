import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './firebase/firebase.config';

import useData from './context/data/firebase.actions.useData';

import LoginPage from './pages/admin/LoginPage';
import Portal from './pages/admin/Portal';
import About from './pages/client/About';
import Artists from './pages/client/Artists';
import Booking from './pages/client/Booking';
import Gear from './pages/client/Gear';
import SignUpPage from './pages/admin/Signup';
import AdminRoute from './router/router.adminRoutes';

import { DataContext } from './context/data/firebase.context.data';
import { WrapApp } from './styles';
import Navbar from './components/navbar';
import ClientRoute from './router/router.clientRoute';
import ErrorPage from './pages/error';

function App() {
  const { state } = useContext(DataContext);
  const { getAllUsers } = useData();
  const fetch = async () => await getAllUsers();
  useEffect(() => fetch(), []);
  useEffect(() => console.log('STATE: ', state), [state]);
  return (
    <>
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
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </WrapApp>
    </>
  );
}

export default App;
