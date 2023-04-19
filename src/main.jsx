import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';

import Main from './components/Main/Main';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import savedJobLoader from './loader/SaveJobLoader';
import Statistic from './components/Statistic/Statistic';
import NotFounded from './components/NotFounded/NotFounded';
import Blog from './components/Blog/Blog';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
     
      {
        path:'jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/featured.json')
      },
      {
        path:'detail/:jobId',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/featured.json')
      },
      {
        path:'statistic',
        element:<Statistic></Statistic>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
     
    ]
  },
   {
        path:"*",
        element:<NotFounded></NotFounded>
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
