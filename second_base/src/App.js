import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledApp } from './styles/StyledApp';
import './firebase/firebase.config';
import LoginPage from './pages/admin/LoginPage';

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path='/admin/login' element={<LoginPage />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
