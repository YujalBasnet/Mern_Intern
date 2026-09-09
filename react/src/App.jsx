import React from 'react';
import Todo from './components/todo';
import Clone from './components/clone';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Todo />
      },
      {
        path : "/clone",
        element : <Clone />
      }
    ]);

      
  return (
   <RouterProvider router={router} />
  );
};

export default App;