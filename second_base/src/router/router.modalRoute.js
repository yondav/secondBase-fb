import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../components/modal';

const ModalRoute = () => {
  const [isOpen, setIsopen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsopen(false);
    setTimeout(() => navigate(location.state.from), 500);
  };

  useEffect(() => console.log(location), [location]);
  return (
    <Modal handleClose={handleClose} isOpen={isOpen}>
      <Outlet />
    </Modal>
  );
};

export default ModalRoute;
