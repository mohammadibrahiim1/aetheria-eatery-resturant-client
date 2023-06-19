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
