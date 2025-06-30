import React from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import ProjectsDetails from '../components/ProjectsDetails';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:'project-details/:id',
          element:<ProjectsDetails></ProjectsDetails>
        }
    ]
  },
]);

