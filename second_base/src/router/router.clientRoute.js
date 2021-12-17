import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/client/Home';

const ClientRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => console.log(pathname), [pathname]);
  return pathname === '/' ? <Home /> : <Outlet />;
};

export default ClientRoute;
