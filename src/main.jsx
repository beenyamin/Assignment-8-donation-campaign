import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Donation from './pages/Donation/Donation';
import Statistics from './pages/Statistics/Statistics';
import OneCard from './pages/Card/OneCard';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Donate from './pages/Donate/Donate';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [{

      path:"/",
      element:<Home></Home>,
      loader: () => fetch ('/public/card.json')

    },


    {
        path:"/donation",
        element:<Donate></Donate>

    },


    { 
      path:"/statistics",
      element:<Statistics></Statistics>


    } ,

    {
      path:"/oneCard/:id",
      element:<OneCard></OneCard>,
      loader: () => fetch ('/public/card.json')
    }
  
  ]

  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
