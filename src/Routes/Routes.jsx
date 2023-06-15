import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
// import Footer from "../Shared/Footer";
import Cart from "../Pages/Cart/Cart";
import Signin from "../Pages/Signin/Signin";
import AboutUs from "../Components/AboutUs";
import MainMenu from "../Pages/MainMenu/MainMenu";
import Shop from "../Pages/Shop/Shop";
import Checkout from "../Pages/Checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/mainMenu",
        element: <MainMenu></MainMenu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);
