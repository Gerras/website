import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

export const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
