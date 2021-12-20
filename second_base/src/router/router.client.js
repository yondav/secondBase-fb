import React from 'react';
import { Outlet, useLocation, Routes, Route } from 'react-router-dom';

const ClientRouter = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Outlet />
    </>
  );
};

export default ClientRouter;
