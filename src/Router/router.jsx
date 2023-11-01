
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          element: <Services></Services>
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