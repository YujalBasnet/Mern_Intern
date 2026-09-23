import React from 'react'
import Navbar from '../components/global/Navbar'
import { Outlet, useLocation } from 'react-router-dom';

const Todo_Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
      
      <Outlet />
    </>
  );
};

export default Todo_Layout;