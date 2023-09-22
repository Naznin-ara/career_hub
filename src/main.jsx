import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJobs/AppliedJob';
import Blog from './components/Blog/Blog';
import Jobdetail from './components/Jobdetail/Jobdetail';


const route = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied/:id',
        element:<AppliedJob></AppliedJob>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      },
      {
        path:'/job/:id',
        element:<Jobdetail></Jobdetail>,
        loader:()=>fetch('../public/jobs.json')
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
