
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import EventDetails from "../components/EventDetails/EventDetails";

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
          path: "/event/:id",
          loader: ()=>fetch('/data.json'),
          element: <EventDetails></EventDetails>
        }
      ]
    },
  ]);

  export default router;