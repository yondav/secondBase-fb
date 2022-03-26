import { useEffect, useContext } from 'react';
import './firebase/firebase.config';

import useData from './context/data/firebase.actions.useData';
import { DataContext } from './context/data/firebase.context.data';
import { Navbar, Footer } from './components';
import { WrapApp } from './components/layout';
import { con } from './utils/console';

import SiteMap from './router';

function App() {
  const { state } = useContext(DataContext);
  const { getAll } = useData();

  const fetch = async () => {
    await getAll('users', 'GET_USERS'); // fetch users
    await getAll('images', 'GET_IMAGES'); // fetch images
    await getAll('studio', 'GET_STUDIO'); // fetch studio info
    await getAll('gear', 'GET_GEAR'); // fetch all gear
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
