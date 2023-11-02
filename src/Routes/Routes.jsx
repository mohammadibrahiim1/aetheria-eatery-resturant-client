import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";

import AboutUs from "../Components/AboutUs";
import DashboardLayout from "../Layout/DashboardLayout";
import TableReservation from "../Pages/BookATable/BookATable";
import Cart from "../Pages/Cart/Cart";
import MainMenu from "../Pages/MainMenu/MainMenu";
import Shop from "../Pages/Shop/Shop";
// import AllBookings from "../Pages/AllBookings/AllBookings";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
// import { ErrorPage } from "../Components/ErrorPage";
import Payment from "../Components/Payment";
import PlaceOrder from "../Components/PlaceOrder";
import AllOrders from "../Pages/AllOrders/AllOrders";
import Checkout from "../Pages/Checkout/Checkout";
import MyOrder from "../Pages/MyOrder/MyOrder";
import TableBookings from "../Pages/TableBookings/TableBookings";
// import ErrorPage from "../Components/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://resturant-website-server.vercel.app/totalItems"),
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
        loader: ({ params }) => fetch(`https://resturant-website-server.vercel.app/orders/${params.id}`),
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
        path: "/dashboard/tableBookings",
        element: (
          <AdminRoute>
            <TableBookings></TableBookings>
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
      {
        path: "/dashboard/allOrders",
        element: (
          <AdminRoute>
            <AllOrders></AllOrders>
          </AdminRoute>
        ),
      },
    ],
  },
]);
