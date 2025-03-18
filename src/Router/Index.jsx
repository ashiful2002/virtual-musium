import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Header from "../Layout/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About.jsx";
import Gallery from "../pages/Gallery/Gallery.jsx";
import Agrodut from "../pages/Agrodut/Agrodut.jsx";

 const  router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/agrodut",
          element: <Agrodut />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  export default router
