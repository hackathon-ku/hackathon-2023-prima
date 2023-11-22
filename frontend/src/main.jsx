import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catagories from './pages/Catagories.jsx';
import ActivityTranscript from './pages/ActivityTranscript.jsx';
import Planner from './pages/Planner.jsx';
import Alert from './pages/KuAlert.jsx';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages/Catagories",
    element: <Catagories />
  },
  {
    path: "/pages/ActivityTranscript",
    element: <ActivityTranscript />
  },
  {
    path: "/pages/Planner",
    element: <Planner />
  },
  {
    path: "/pages/Alert",
    element: <Alert />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
