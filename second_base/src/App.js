import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './firebase/firebase.config';

import useData from './context/data/firebase.actions.useData';
import { DataContext } from './context/data/firebase.context.data';

import * as Router from './router';

import { Navbar, Footer } from './components';
import { WrapApp } from './styles';
import { con } from './utils/console';

import SiteMap from './router';

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
        <SiteMap />
      </WrapApp>
      <Footer />
    </>
  );
}

export default App;
