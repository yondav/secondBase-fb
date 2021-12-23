import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useNavigateBelow from '../hooks/useNavigateBelow';
import { Modal } from '../components';

const ModalRouter = () => {
  const [isOpen, setIsopen] = useState(true);
  const navigatBelow = useNavigateBelow();

  const handleClose = () => {
    setIsopen(false);
    setTimeout(() => navigatBelow(), 500);
  };

  return (
    <Modal handleClose={handleClose} isOpen={isOpen}>
      <Outlet />
    </Modal>
  );
};

export default ModalRouter;
