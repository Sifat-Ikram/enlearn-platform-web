import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from './component/pages/ErrorPage';
import Home from './component/pages/Home';
import SignUp from './component/pages/SignUp';
import SignIn from './component/pages/SignIn';
import AllPrograms from './component/pages/AllPrograms';
import EventDetails from './component/pages/EventDetails';
import Dashboard from './component/pages/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/programs",
        element:<AllPrograms></AllPrograms>,
        loader:(() => fetch('/data.json'))
      },
      {
        path: "/:id",
        element: <EventDetails></EventDetails>,
        loader: (()=> fetch('/data.json'))
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: (()=> fetch('/data.json'))
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
