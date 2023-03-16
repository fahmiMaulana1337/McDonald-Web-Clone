import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Hero from "../components/Hero";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Hero/>,
        },
        
        {
          path: "/menu",
          element: <Landing/>,
        },
        {
          path: "/detail/:id",
          element: <Detail/>,
        },

      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  export default router;