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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutSuccess from "../Components/CheckoutSuccess";
const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);
// sk_test_51MlpzGLrYWLOOZ8Ueo9lSKyjvBkUNZAQCqRDvVO5x1wiwu0MbJ2V6DeVFW7YHcoeCi0axInmbfmxCfIE5MrvaswE003sZXKmdG
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
        path: "/checkout-success",
        element: <CheckoutSuccess></CheckoutSuccess>,
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
        element: (
          <Elements stripe={stripePromise}>
            {" "}
            <Checkout></Checkout>{" "}
          </Elements>
        ),
      },
    ],
  },
]);
