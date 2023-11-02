
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import EventDetails from "../components/EventDetails/EventDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Services from "../pages/Services/Services";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorElement from "../pages/ErrorElement/ErrorElement";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: "/",
         
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/services",
          element: <PrivateRoute><Services></Services></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path: "/event/:id",
          loader: ()=>fetch('/data.json'),
          element: <EventDetails></EventDetails>
        }
      ]
    },
  ]);

  export default router;