import React from 'react';
import Todo from './components/todo';
import Clone from './components/clone';
import Api_testing from './components/Api_testing';
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
      }
    ]);

      
  return (
   <RouterProvider router={router} />
  );
};

export default App;