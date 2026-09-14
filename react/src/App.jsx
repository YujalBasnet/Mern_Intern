import React from 'react';
import Todo from './components/todo';
import Clone from './components/clone';
import Api_testing from './components/Api_testing';
import User_Api from './components/User_Api';
import Register from './components/Register';
import Registered_User from './components/Registered_User';
import Product_details from './pages/Product_details';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

    const router = createBrowserRouter([
      {
        path: "/todo",
        element: <Todo />
      },
      {
        path : "/clone",
        element : <Clone />
      },
      {
        path : "/",
        element : <Api_testing />
      },
      {
        path: "/user",
        element: <User_Api />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/registered",
        element: <Registered_User />
      },
      {
        path: "/product_details/:id",
        element: <Product_details />
      }
    ]);

      
  return (
   <RouterProvider router={router} />
  );
};

export default App;