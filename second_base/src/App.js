import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './firebase/firebase.config';

import useData from './context/data/firebase.actions.useData';
import { DataContext } from './context/data/firebase.context.data';

import { Admin, Client, ErrorPage } from './pages';
import * as Router from './router';

import Navbar from './components/navbar';
import Footer from './components/footer';
import { WrapApp } from './styles';
import { con } from './utils/console';

function App() {
  const { state } = useContext(DataContext);
  const { getAllUsers, getAllImages } = useData();

  const fetch = async () => {
    await getAllUsers();
    await getAllImages();
  };

  useEffect(() => fetch(), []);
  useEffect(() => con.state(state), [state]);

  return (
    <>
      <Navbar />
      <WrapApp>
        <Routes>
          <Route path='/' element={<Router.ClientRoute />}>
            <Route path='about' element={<Client.About />} />
            <Route path='gear' element={<Client.Gear />} />
            <Route path='artists' element={<Client.Artists />} />
            <Route path='booking' element={<Client.Booking />} />
          </Route>
          <Route path='/admin/signup' element={<Admin.SignupPage />} />
          <Route path='/admin/login' element={<Admin.LoginPage />} />
          <Route path='/admin/' element={<Router.AdminRoute />}>
            <Route path='portal/' element={<Router.PortalRoute />}>
              <Route path='profile/' element={<Admin.Portal.Profile.View />}>
                <Route path='edit/' element={<Router.ModalRoute />}>
                  <Route path='bio' element={<div>BIO</div>} />
                  <Route path='img' element={<Admin.Portal.Profile.Image />} />
                </Route>
              </Route>
              <Route path='studio' element={<Admin.Portal.Studio.View />} />
              <Route path='gear' element={<Admin.Portal.Gear.View />} />
              <Route path='artists' element={<Admin.Portal.Artists.View />} />
            </Route>
          </Route>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </WrapApp>
      <Footer />
    </>
  );
}

export default App;
