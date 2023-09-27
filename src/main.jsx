import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
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
      loader: () => fetch ('/card.json')

    },


    {
        path:"/donation",
        element:<Donate></Donate>

    },


    { 
      path:"/statistics",
      element:<Statistics></Statistics>,
      loader: () => fetch ('/card.json')


    } ,

    {
      path:"/oneCard/:id",
      element:<OneCard></OneCard>,
      loader: () => fetch ('/card.json')
    }
  
  ]

  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
