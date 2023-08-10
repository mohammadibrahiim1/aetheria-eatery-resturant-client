import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";

import Cart from "../Pages/Cart/Cart";
import AboutUs from "../Components/AboutUs";
import MainMenu from "../Pages/MainMenu/MainMenu";
import Shop from "../Pages/Shop/Shop";
import TableReservation from "../Pages/BookATable/BookATable";
import DashboardLayout from "../Layout/DashboardLayout";
import AllBookings from "../Pages/AllBookings/AllBookings";
import AllUsers from "../Pages/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import { ErrorPage } from "../Components/ErrorPage";
import Checkout from "../Pages/Checkout/Checkout";
import MyOrder from "../Pages/MyOrder/MyOrder";
import PlaceOrder from "../Components/PlaceOrder";
import Payment from "../Components/Payment";
// import ErrorPage from "../Components/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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

      {
        path: "/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`),
      },
      {
        path: "/placeOrder",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/myOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/tableReservation",
        element: (
          <PrivateRoute>
            <TableReservation></TableReservation>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/allBookings",
        element: (
          <AdminRoute>
            <AllBookings></AllBookings>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
