import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/client/Home';

const ClientRoute = () => {
  const { pathname } = useLocation();

  return pathname === '/' ? <Home /> : <Outlet />;
};

export default ClientRoute;
