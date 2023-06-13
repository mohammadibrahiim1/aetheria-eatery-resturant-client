import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Footer from "../Shared/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "#footer",
      //   element: <Footer></Footer>,
      // },
    ],
  },
]);
