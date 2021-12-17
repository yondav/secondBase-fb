import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../context/auth/firebase.useAuth';

const AdminRoute = () => {
  const {
    state: { user },
  } = useAuth();

  return user ? <Outlet /> : <Navigate to='/admin/login' />;
};

export default AdminRoute;
