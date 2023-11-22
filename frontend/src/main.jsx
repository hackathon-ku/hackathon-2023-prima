import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catagories from './pages/Catagories.jsx';
import ActivityTranscript from './pages/ActivityTranscript.jsx';
import Planner from './pages/Planner.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/pages/Catagories",
    element: <Catagories/>
  },
  {
    path: "/pages/ActivityTranscript",
    element: <ActivityTranscript/>
  },
  {
    path: "/pages/Planner",
    element: <Planner/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
