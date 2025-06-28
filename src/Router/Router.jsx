import React from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        }
    ]
  },
]);

